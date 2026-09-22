import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-171",
  "inputSha256": "f63289c996acade06976473c70e6652f16289ffabd0fcd94a451fdf040965e31",
  "questionBundleSha256": "9631a5b623f8c05b491dc5a5f67ab9b62e5b1898446a722339eaa0c16a40af8b",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "source_messages",
  "policySha256": "42e51b1f7b8706dae7188d0d3fa8c6ac83b855b21f393196bd63bc16d4b91d93",
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
    "requestSha256": "6201d2313f0dcfce4cae424850ef6dcf8229216b4b38814e6b06b122de0be54b",
    "capturedAt": "2026-09-22T03:51:35.785Z",
    "elapsedMs": 650.6351100000029,
    "successfulAttemptElapsedMs": 649.4786380000005,
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
          "noul": 0.09
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.28
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
          "noul": 0.1
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.18
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
            "informational": 0,
            "mixed_or_unclear": 0.01,
            "educational_or_quoted": 0,
            "active_request": 0.99
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.48,
            "no_sensitive_action": 0.51
          },
          "confidence": 0.34
        }
      },
      "usage": {
        "input_tokens": 5427,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "09e55d6189cc17dade5e064a9a5b7342b720b0562765e54870dfb616215c31a7",
    "capturedAt": "2026-09-22T03:51:36.356Z",
    "elapsedMs": 566.9863130000012,
    "successfulAttemptElapsedMs": 565.2302440000058,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.13,
            "NONE": 0.85,
            "body:0": 0.01,
            "body:2": 0,
            "body:1": 0.01,
            "body:3": 0,
            "body:4": 0
          },
          "confidence": 0.82
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "subject:0": 1,
            "NONE": 0,
            "body:0": 0,
            "body:1": 0,
            "body:2": 0,
            "body:3": 0,
            "body:4": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 2778,
        "output_tokens": 165
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1222.0933160000131,
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
    "seq": 830,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-171",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:35.135Z",
    "offsetMs": 0.7744570000213571
  },
  {
    "seq": 831,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-171",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:35.785Z",
    "offsetMs": 650.6358009999967,
    "elapsedMs": 649.4786380000005,
    "outcome": "success"
  },
  {
    "seq": 832,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-171",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:35.790Z",
    "offsetMs": 656.0392980000179
  },
  {
    "seq": 833,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-171",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:36.356Z",
    "offsetMs": 1221.884715000022,
    "elapsedMs": 565.2302440000058,
    "outcome": "success"
  },
  {
    "seq": 834,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-171",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:51:36.356Z",
    "offsetMs": 1222.1401920000208,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "26f421c7b58dece07adc9b6534c7b6f282d849a66588a0091f96cb5dfa0cac76";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":831},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":833},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":834}} as const;
export const projectionSha256 = "50b891353a6615310de296365f2ea96be47f344b3086fe83fada4ee907236c0f";
