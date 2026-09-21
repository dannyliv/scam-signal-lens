import { performance } from "node:perf_hooks";

export const TYPESAFE_SYSTEMONE_ENDPOINT = "https://api.typesafe.ai/v1/systemone";
const TRANSIENT = new Set([429, 502, 503, 504, 529]);
const MAX_RESPONSE_BYTES = 1_000_000;

export type SafeOutcome = "success" | "timeout" | "http_error" | "schema_error";
export type CaptureEvent = { seq: number; captureSessionId: string; exampleId: string; pass: "A" | "B" | null; attempt: number | null; kind: "request_started" | "request_finished" | "pass_skipped" | "example_completed"; at: string; offsetMs: number; elapsedMs?: number | undefined; outcome?: SafeOutcome | undefined; reasonCode?: "authentication_failed" | "authorization_failed" | "validation_failed" | "transient_http" | "network_error" | "response_too_large" | "invalid_response" | "schema_error" | "attempt_cap_exceeded" | undefined };
export type RetryAttempt = { attempt: number; startedAt: string; finishedAt: string; elapsedMs: number; outcome: SafeOutcome; reasonCode?: CaptureEvent["reasonCode"] | undefined };
export type RetryResult = { body: unknown; attemptCount: number; elapsedMs: number; successfulAttemptElapsedMs: number; events: RetryAttempt[] };
export type RetryOptions = { key: string; request: unknown; fetchImpl?: typeof fetch | undefined; sleep?: ((milliseconds: number) => Promise<void>) | undefined; timeoutMs?: number | undefined; consumeAttempt?: (() => number) | undefined; reserveAttempt?: ((attempt: number) => Promise<void>) | undefined; onAttempt?: ((event: { attempt: number; phase: "started" | "finished"; at: string; elapsedMs?: number; outcome?: SafeOutcome; reasonCode?: CaptureEvent["reasonCode"] }) => unknown) | undefined };

export class CaptureError extends Error {
  constructor(readonly code: NonNullable<CaptureEvent["reasonCode"]>, readonly events: RetryResult["events"] = []) { super(code); }
}

async function boundedText(response: Response, signal: AbortSignal, timedOut: () => boolean): Promise<string> {
  if (!response.body) return "";
  const reader = response.body.getReader(); const decoder = new TextDecoder(); let bytes = 0; let text = "";
  try {
    while (true) {
      if (signal.aborted) throw new CaptureError(timedOut() ? "network_error" : "network_error");
      const chunk = await reader.read();
      if (chunk.done) break;
      bytes += chunk.value.byteLength;
      if (bytes > MAX_RESPONSE_BYTES) { await reader.cancel(); throw new CaptureError("response_too_large"); }
      text += decoder.decode(chunk.value, { stream: true });
    }
    return text + decoder.decode();
  } finally { reader.releaseLock(); }
}

function retryDelay(response: Response | null, attempt: number): number {
  const retryAfter = response?.headers.get("retry-after");
  const parsed = retryAfter === null ? Number.NaN : Number(retryAfter);
  if (Number.isFinite(parsed) && parsed >= 0) return Math.min(parsed * 1000, 5_000);
  return Math.min(250 * 2 ** (attempt - 1), 2_000);
}

export async function requestWithRetry(options: RetryOptions): Promise<RetryResult> {
  if (typeof options.key !== "string" || options.key.length === 0) throw new CaptureError("authentication_failed");
  const fetcher = options.fetchImpl ?? fetch;
  const sleep = options.sleep ?? ((milliseconds: number) => new Promise<void>((resolve) => setTimeout(resolve, milliseconds)));
  const started = performance.now();
  const events: RetryResult["events"] = [];
  for (let attempt = 1; attempt <= 3; attempt++) {
    try { if (options.reserveAttempt) await options.reserveAttempt(attempt); else options.consumeAttempt?.(); } catch { throw new CaptureError("attempt_cap_exceeded", events); }
    const bookkeepingStartedAt = new Date().toISOString();
    await options.onAttempt?.({ attempt, phase: "started", at: bookkeepingStartedAt });
    // The persisted reservation/start event is bookkeeping, not HTTP time.
    const attemptStart = performance.now();
    const startedAt = new Date().toISOString();
    const finish = (outcome: SafeOutcome, reasonCode?: CaptureEvent["reasonCode"]): RetryAttempt => {
      const item: RetryAttempt = { attempt, startedAt, finishedAt: new Date().toISOString(), elapsedMs: performance.now() - attemptStart, outcome, ...(reasonCode === undefined ? {} : { reasonCode }) };
      events.push(item);
      void options.onAttempt?.({ attempt, phase: "finished", at: item.finishedAt, elapsedMs: item.elapsedMs, outcome, ...(reasonCode === undefined ? {} : { reasonCode }) });
      return item;
    };
    let response: Response;
    let timedOut = false;
    const controller = new AbortController(); const timeout = setTimeout(() => { timedOut = true; controller.abort(); }, options.timeoutMs ?? 30_000);
    try {
      response = await fetcher(TYPESAFE_SYSTEMONE_ENDPOINT, {
        method: "POST",
        redirect: "error",
        headers: { authorization: `Bearer ${options.key}`, "content-type": "application/json" },
        body: JSON.stringify(options.request),
        signal: controller.signal,
      });
    } catch (error) {
      clearTimeout(timeout);
      finish(timedOut ? "timeout" : "http_error", "network_error");
      if (attempt < 3) { await sleep(retryDelay(null, attempt)); continue; }
      throw new CaptureError("network_error", events);
    }
    if (response.status === 401) { clearTimeout(timeout); finish("http_error", "authentication_failed"); throw new CaptureError("authentication_failed", events); }
    if (response.status === 403) { clearTimeout(timeout); finish("http_error", "authorization_failed"); throw new CaptureError("authorization_failed", events); }
    if (response.status === 422) { clearTimeout(timeout); finish("http_error", "validation_failed"); throw new CaptureError("validation_failed", events); }
    if (!response.ok) {
      clearTimeout(timeout);
      finish("http_error", "transient_http");
      if (TRANSIENT.has(response.status) && attempt < 3) { await sleep(retryDelay(response, attempt)); continue; }
      throw new CaptureError("transient_http", events);
    }
    let text: string;
    try { text = await boundedText(response, controller.signal, () => timedOut); }
    catch (error) { clearTimeout(timeout); const code = error instanceof CaptureError ? error.code : "network_error"; finish(timedOut ? "timeout" : code === "response_too_large" ? "schema_error" : "http_error", code); throw new CaptureError(code, events); }
    try {
      const body: unknown = JSON.parse(text);
      clearTimeout(timeout);
      const successful = finish("success");
      return { body, attemptCount: attempt, elapsedMs: performance.now() - started, successfulAttemptElapsedMs: successful.elapsedMs, events };
    } catch {
      clearTimeout(timeout); finish("schema_error", "invalid_response"); throw new CaptureError("invalid_response", events);
    }
  }
  throw new CaptureError("network_error");
}
