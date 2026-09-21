import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-171",
  "inputSha256": "f63289c996acade06976473c70e6652f16289ffabd0fcd94a451fdf040965e31",
  "questionBundleSha256": "c38d45be636041965e7e231cffdf2831ec083c7780ea13a94086fdf24bf7bc08",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "source_messages",
  "policySha256": "3435135d6058476d4262ecbc936abf95af4993b455dfab35adc8b17f3fe6ad6a",
  "requestedModel": "jev-1.13.0",
  "segments": [
    {
      "id": "subject:0",
      "source": "subject",
      "start": 0,
      "end": 28,
      "text": "Solo hoy: -15% para Miembros"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 81,
      "text": "Open the email in browser on following link https://t50.mail.modas-global.net/r/?"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 81,
      "end": 491,
      "text": "id=t9c6a5d4b-bbb9-3de2-cc11-77g3g2h1h9a8,99876543,a21b3c4d&e=RGlkPTk5OTk5OTk5OTkmcmlkPTExMjIzNDU2NzcmZXJpZD1JTVRnNE16UTRNek0wTkElM0QlM0QmcDE9JTQwU1FpZE5hYThhU1p5ZE1aZkZtYzVaYjFpVjQ0NDhUaWxUU2J6clhXcVl4Ym1IR2Q2TGRpJTJGMXolM0E2ZlUlMkZmTXppYnR2TVVkSGJjYmVsV010VkElM0QlM0Q&s=9xLAwF7qpH02bWIVt3Q9d5g1h3bPQUuWXXLMZ9UuRkL If clicking doesn't work, copy the line above and paste it into your browser's address window.\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 491,
      "end": 492,
      "text": "\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 492,
      "end": 562,
      "text": "Use the next link to unsubscribe https://t50.mail.modas-global.net/r/?"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 562,
      "end": 891,
      "text": "id=t9c6a5d4b-bbb9-3de2-cc11-77g3g2h1h9a8,99876543,a21b3c4f&e=RGlkPTk5OTk5OTk5OTkmcmlkPTExMjIzNDU2NzcmZXJpZD1JTVRnNE16UTRNek0wTkElM0QlM0QmcDE9RE03NzM1NDQzNSZwMj03NjU0Mzk4NWEwYmM5MTEwMDFmYmQ2YmM1YjNkYzUwMSZwMz0yMDI1MDMxNSZwND0xMTIzNDU2Nzc2JnA1PTQ1YmU1YjZkOGM0MmE2Yjc0Y2QzNDU2ZjMyMjEyY2Q&s=6fLbNPY1a_p8xU8h3G9pyY3v29PQ9cfN0bdM_NQCkD"
    }
  ],
  "passA": {
    "requestSha256": "2019fdec9d6750c0b06d2d02b50d5dccd574aaedf0f1f4358c63ab776ff27765",
    "capturedAt": "2026-09-20T23:44:45.688Z",
    "elapsedMs": 226.31041600000026,
    "successfulAttemptElapsedMs": 224.96154100000422,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.03
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.06
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.37
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.89
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.14
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.17
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0,
            "active_request": 1
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.39,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.61
          },
          "confidence": 0.47
        }
      },
      "usage": {
        "input_tokens": 3977,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "ef38c2fb91e92c28ebd8f8f011d02440bbf6d967671ed4b2bf66c8b65b7c5caf",
    "capturedAt": "2026-09-20T23:44:45.834Z",
    "elapsedMs": 144.59975000000122,
    "successfulAttemptElapsedMs": 142.8067499999961,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.18,
            "body:4": 0,
            "body:2": 0,
            "body:1": 0.01,
            "body:3": 0,
            "NONE": 0.79,
            "body:0": 0.02
          },
          "confidence": 0.76
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "subject:0": 0.99,
            "NONE": 0.01,
            "body:2": 0,
            "body:3": 0,
            "body:1": 0,
            "body:4": 0,
            "body:0": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 2568,
        "output_tokens": 165
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 372.89616599999863,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "request_route_low_confidence"
    ],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "payment_request": {
        "status": "none_selected",
        "segmentId": null
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "subject:0"
      },
      "authority_claim": {
        "status": "not_requested",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "not_requested",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "not_requested",
        "segmentId": null
      },
      "remote_access_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "unrealistic_reward": {
        "status": "not_requested",
        "segmentId": null
      },
      "independent_verification_path": {
        "status": "not_requested",
        "segmentId": null
      },
      "analyzer_instruction": {
        "status": "not_requested",
        "segmentId": null
      }
    },
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 836,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-171",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:45.462Z",
    "offsetMs": 0.8978750000023865
  },
  {
    "seq": 837,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-171",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:45.688Z",
    "offsetMs": 226.31320799999958,
    "elapsedMs": 224.96154100000422,
    "outcome": "success"
  },
  {
    "seq": 838,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-171",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:45.690Z",
    "offsetMs": 229.06983300000138
  },
  {
    "seq": 839,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-171",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:45.834Z",
    "offsetMs": 372.6444160000028,
    "elapsedMs": 142.8067499999961,
    "outcome": "success"
  },
  {
    "seq": 840,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-171",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:45.834Z",
    "offsetMs": 372.9569160000028,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "afdca1a74dfe21ad0ce7d8a0f8b475a1c2d7a7b5a761c59ac765b53807325cdb";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":837},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":839},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":840}} as const;
export const projectionSha256 = "e242b26d9aed41358d38d71c00c0321ae7c407eb84145fcd90f2b3bea1f0b546";
