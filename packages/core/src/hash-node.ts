import { createHash } from "node:crypto";
import { canonicalJson } from "./canonical-json.js";

/** Node-only synchronous hashing for capture and offline tooling. */
export function sha256(value: unknown): string {
  return createHash("sha256").update(canonicalJson(value), "utf8").digest("hex");
}
