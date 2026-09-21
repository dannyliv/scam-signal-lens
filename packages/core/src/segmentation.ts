import type { ModelInput, Segment } from "./types.js";

export const SEGMENTATION_VERSION = "intl-segmenter-sentence-v1";
export function segmentInput(input: ModelInput, language: "en" | "es"): Segment[] {
  const fields: Array<[Segment["source"], string]> = [["body", input.body], ["userContext", input.userContext]];
  if (input.subject !== null) fields.unshift(["subject", input.subject]);
  const splitter = new Intl.Segmenter(language, { granularity: "sentence" });
  const output: Segment[] = [];
  for (const [source, text] of fields) {
    let ordinal = 0;
    for (const piece of splitter.segment(text)) {
      if (piece.segment.length === 0) continue;
      output.push({ id: `${source}:${ordinal++}`, source, start: piece.index, end: piece.index + piece.segment.length, text: piece.segment });
    }
    if (text.length > 0 && ordinal === 0) output.push({ id: `${source}:0`, source, start: 0, end: text.length, text });
  }
  return output;
}
