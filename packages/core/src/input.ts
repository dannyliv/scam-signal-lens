import type { Channel, ModelInput } from "./types.js";

const CHANNELS = new Set<Channel>(["email", "sms", "chat", "social_dm"]);
export const INPUT_LIMITS = { body: 8000, subject: 300, userContext: 2000 } as const;

type InputCarrier = { input: { channel: unknown; subject: unknown; body: unknown; userContext: unknown } };
const normalize = (value: string) => value.replace(/\r\n/g, "\n");

export function projectModelInput(carrier: InputCarrier): ModelInput {
  const source = carrier?.input;
  if (!source || !CHANNELS.has(source.channel as Channel)) throw new Error("input channel is invalid");
  if (source.subject !== null && typeof source.subject !== "string") throw new Error("subject must be text or null");
  if (typeof source.body !== "string" || typeof source.userContext !== "string") throw new Error("body and userContext must be text");
  const subject = source.subject === null ? null : normalize(source.subject);
  const body = normalize(source.body);
  const userContext = normalize(source.userContext);
  if (body.length === 0) throw new Error("body must not be empty");
  if (body.length > INPUT_LIMITS.body) throw new Error("body exceeds 8000 UTF-16 code units");
  if (subject !== null && subject.length > INPUT_LIMITS.subject) throw new Error("subject exceeds 300 UTF-16 code units");
  if (userContext.length > INPUT_LIMITS.userContext) throw new Error("userContext exceeds 2000 UTF-16 code units");
  return { channel: source.channel as Channel, subject, body, userContext };
}
