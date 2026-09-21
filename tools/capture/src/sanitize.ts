import { createHash } from "node:crypto";

export type SafeFailureCode = "authentication_failed" | "authorization_failed" | "validation_failed" | "transient_http" | "network_error" | "response_too_large" | "invalid_response" | "schema_error" | "attempt_cap_exceeded";

export function safeFailureCode(error: unknown): SafeFailureCode {
  const code = error instanceof Error ? error.message : "schema_error";
  const allowed: SafeFailureCode[] = ["authentication_failed", "authorization_failed", "validation_failed", "transient_http", "network_error", "response_too_large", "invalid_response", "schema_error", "attempt_cap_exceeded"];
  return allowed.includes(code as SafeFailureCode) ? code as SafeFailureCode : "schema_error";
}

export function secretFingerprintForMemoryOnly(secret: string): string {
  return createHash("sha256").update(secret, "utf8").digest("hex");
}

export function assertNoSecret(serialized: string, secret: string): void {
  if (secret.length > 0 && serialized.includes(secret)) throw new Error("schema_error");
}
