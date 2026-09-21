import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB044",
  "inputSha256": "d3eb973ab070f02db1d00bfb57d7511926850c4267ec3947d5a904cbf7b49afd",
  "questionBundleSha256": "e8f1e66cf768b6c7314f1f4b6ad6fe743f7e945c487259b6087353d93f311dd6",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "synthetic_sanitized",
  "policySha256": "3435135d6058476d4262ecbc936abf95af4993b455dfab35adc8b17f3fe6ad6a",
  "requestedModel": "jev-1.13.0",
  "segments": [
    {
      "id": "subject:0",
      "source": "subject",
      "start": 0,
      "end": 29,
      "text": "Your museum tickets are ready"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 74,
      "text": "Your tickets are available in the ticketing account you used at purchase. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 74,
      "end": 126,
      "text": "Bring the barcode from that account when you arrive."
    }
  ],
  "passA": {
    "requestSha256": "611921899e6a4d88fbdada60af810df2f6c20d974f8cbc2c2bb92136bba488a8",
    "capturedAt": "2026-09-20T23:42:56.425Z",
    "elapsedMs": 169.3314590000009,
    "successfulAttemptElapsedMs": 168.61074999999983,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.02
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.02
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.4
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.93
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.56,
            "informational": 0.44,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.41
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.81,
            "independently_established": 0.19,
            "sender_supplied": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.74
        }
      },
      "usage": {
        "input_tokens": 3286,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "4d190d963f20b8568c15a3eff5a9b558bd2d833aef5c39c376e1cd46c535d55f",
    "capturedAt": "2026-09-20T23:42:56.682Z",
    "elapsedMs": 254.16404200000034,
    "successfulAttemptElapsedMs": 252.30133300000125,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.07,
            "subject:0": 0.08,
            "NONE": 0.71,
            "body:1": 0.14
          },
          "confidence": 0.61
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.88,
            "subject:0": 0,
            "NONE": 0,
            "body:1": 0.12
          },
          "confidence": 0.83
        }
      },
      "usage": {
        "input_tokens": 910,
        "output_tokens": 116
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 426.22070800000074,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence"
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
        "status": "not_requested",
        "segmentId": null
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "not_requested",
        "segmentId": null
      },
      "authority_claim": {
        "status": "low_confidence",
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
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 212,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB044",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:56.256Z",
    "offsetMs": 0.41179100000044855
  },
  {
    "seq": 213,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB044",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:56.425Z",
    "offsetMs": 169.32895800000006,
    "elapsedMs": 168.61074999999983,
    "outcome": "success"
  },
  {
    "seq": 214,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB044",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:56.428Z",
    "offsetMs": 172.5984580000004
  },
  {
    "seq": 215,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB044",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:56.681Z",
    "offsetMs": 425.84779100000014,
    "elapsedMs": 252.30133300000125,
    "outcome": "success"
  },
  {
    "seq": 216,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB044",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:56.682Z",
    "offsetMs": 426.30020800000057,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "e5fcef14a2cb6df0e109acd0bd9117bd9edf6421cc206a89f049e4967603cb2a";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":213},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":215},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":216}} as const;
export const projectionSha256 = "507b5b1faad638eb018b7c22753c88b84e978fc8962b3c78507a834552b7391e";
