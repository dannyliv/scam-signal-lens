import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB063",
  "inputSha256": "1f891e929d4e60c4e1b7a3991d89441120183d58893e515e966762d8599e6781",
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
      "end": 26,
      "text": "Table reservation reminder"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 49,
      "text": "Your dinner reservation is set for 19:00 Friday. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 49,
      "end": 140,
      "text": "Contact the restaurant using the number from your reservation confirmation if plans change."
    }
  ],
  "passA": {
    "requestSha256": "b6da62948f36e200e95d2f5d58a21ab0b34c393414062a70a30d7c6988d4d601",
    "capturedAt": "2026-09-20T23:43:02.313Z",
    "elapsedMs": 116.24704199999906,
    "successfulAttemptElapsedMs": 114.68987500000003,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.01
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
          "noul": 0.13
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
          "noul": 0.87
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "informational": 0.76,
            "mixed_or_unclear": 0,
            "active_request": 0.24,
            "educational_or_quoted": 0
          },
          "confidence": 0.67
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.59,
            "sender_supplied": 0,
            "independently_established": 0.41
          },
          "confidence": 0.45
        }
      },
      "usage": {
        "input_tokens": 3287,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "ac1c7608f1d3e61ea239bc1c8706d742328b23bd346b2bb5bcb82fa07f917b93",
    "capturedAt": "2026-09-20T23:43:02.445Z",
    "elapsedMs": 124.28691599999729,
    "successfulAttemptElapsedMs": 121.41495900000155,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.01,
            "subject:0": 0.01,
            "body:1": 0.14,
            "NONE": 0.84
          },
          "confidence": 0.78
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "subject:0": 0,
            "body:1": 1,
            "NONE": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 913,
        "output_tokens": 116
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 248.37445800000205,
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
    "seq": 306,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB063",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:02.198Z",
    "offsetMs": 0.9052080000001297
  },
  {
    "seq": 307,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB063",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:02.313Z",
    "offsetMs": 116.24845800000185,
    "elapsedMs": 114.68987500000003,
    "outcome": "success"
  },
  {
    "seq": 308,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB063",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:02.322Z",
    "offsetMs": 125.52916600000026
  },
  {
    "seq": 309,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB063",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:02.445Z",
    "offsetMs": 248.13583300000028,
    "elapsedMs": 121.41495900000155,
    "outcome": "success"
  },
  {
    "seq": 310,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB063",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:02.445Z",
    "offsetMs": 248.4341659999991,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "98b44aa6b48d296a9a172a762f2d702d06c1a3acc43cc520f893f3fce2d53513";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":307},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":309},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":310}} as const;
export const projectionSha256 = "7f4e025dc7c8f381e587f65917ad2453351f1367964241cb3bd3d6c0cd9e4a7b";
