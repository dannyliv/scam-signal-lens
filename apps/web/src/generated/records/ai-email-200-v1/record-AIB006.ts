import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB006",
  "inputSha256": "a07268f22b51c50933d93522e31e3ae516e9261ca10589dd180d00273a0d1ad6",
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
      "end": 45,
      "text": "Your itinerary now includes a gate assignment"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 56,
      "text": "Your itinerary shows Gate C12 for the flight to Denver. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 56,
      "end": 135,
      "text": "Check the airline app on the day of travel because gate assignments can change."
    }
  ],
  "passA": {
    "requestSha256": "de1f53b4ae6d739d83d0ae8f6e9ec48353cb3a5410cb88831c1f6f614e1d45a0",
    "capturedAt": "2026-09-20T23:42:45.382Z",
    "elapsedMs": 120.65591599999993,
    "successfulAttemptElapsedMs": 119.415708,
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
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.08
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.23
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
          "noul": 0.92
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "informational": 0.6,
            "educational_or_quoted": 0,
            "active_request": 0.4,
            "mixed_or_unclear": 0
          },
          "confidence": 0.46
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0,
            "no_sensitive_action": 0.96,
            "mixed_or_unknown": 0,
            "independently_established": 0.04
          },
          "confidence": 0.94
        }
      },
      "usage": {
        "input_tokens": 3291,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "7c30dc338a06671a106e72be10f0d682d37937e4a8d1656935edd418d1f9601e",
    "capturedAt": "2026-09-20T23:42:45.527Z",
    "elapsedMs": 143.98370799999998,
    "successfulAttemptElapsedMs": 142.89033399999994,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.08,
            "subject:0": 0.01,
            "NONE": 0.89,
            "body:0": 0.02
          },
          "confidence": 0.86
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.99,
            "subject:0": 0,
            "NONE": 0.01,
            "body:0": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 925,
        "output_tokens": 116
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 266.379416,
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
        "status": "none_selected",
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
        "segmentId": "body:1"
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
    "seq": 26,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB006",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:45.261Z",
    "offsetMs": 0.7110000000000127
  },
  {
    "seq": 27,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB006",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:45.381Z",
    "offsetMs": 120.6605410000002,
    "elapsedMs": 119.415708,
    "outcome": "success"
  },
  {
    "seq": 28,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB006",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:45.383Z",
    "offsetMs": 122.58270800000014
  },
  {
    "seq": 29,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB006",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:45.527Z",
    "offsetMs": 266.02812500000005,
    "elapsedMs": 142.89033399999994,
    "outcome": "success"
  },
  {
    "seq": 30,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB006",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:45.527Z",
    "offsetMs": 266.45675000000006,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "5f252c0e44a81ed31640bc0561df49c59d242fc55fb6d366ecb357a58411115d";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":27},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":29},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":30}} as const;
export const projectionSha256 = "b6c7e08c0099772ef08d532bfc343421c388e7a3f821bd3c9cffa3c9c9da97af";
