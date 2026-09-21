import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB038",
  "inputSha256": "64ae64e0316410936c58530ea0d1b7cff82da87432bcbcf09a38b658772ef2c7",
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
      "end": 35,
      "text": "Your shipment is delayed by weather"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 54,
      "text": "Your shipment is delayed because of regional weather. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 54,
      "end": 143,
      "text": "The estimated delivery date is visible in the order page; no action is required from you."
    }
  ],
  "passA": {
    "requestSha256": "36a1818ecc4245c770457399d443b5e8c337f3c16f3e7ef0232243411e4327a9",
    "capturedAt": "2026-09-20T23:42:54.730Z",
    "elapsedMs": 165.05362500000047,
    "successfulAttemptElapsedMs": 164.13724999999977,
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
          "noul": 0.02
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.35
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.71
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "informational": 1,
            "educational_or_quoted": 0,
            "active_request": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.99,
            "sender_supplied": 0,
            "mixed_or_unknown": 0,
            "independently_established": 0.01
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 3289,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "7996a9915f492f00f50a2c826073857ae579097408fd6623eca07cc1ab276673",
    "capturedAt": "2026-09-20T23:42:54.857Z",
    "elapsedMs": 124.03154200000063,
    "successfulAttemptElapsedMs": 122.60504099999889,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.03,
            "body:1": 0.07,
            "subject:0": 0.01,
            "NONE": 0.89
          },
          "confidence": 0.86
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "body:1": 0.84,
            "subject:0": 0,
            "NONE": 0.16
          },
          "confidence": 0.78
        }
      },
      "usage": {
        "input_tokens": 919,
        "output_tokens": 116
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 292.09491700000035,
  "derived": {
    "concern": "few_warning_signs",
    "triggeredRuleIds": [],
    "contextWarnings": [],
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
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 183,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB038",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:54.565Z",
    "offsetMs": 0.5258329999996931
  },
  {
    "seq": 184,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB038",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:54.729Z",
    "offsetMs": 165.05283299999974,
    "elapsedMs": 164.13724999999977,
    "outcome": "success"
  },
  {
    "seq": 185,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB038",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:54.733Z",
    "offsetMs": 168.6024580000012
  },
  {
    "seq": 186,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB038",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:54.856Z",
    "offsetMs": 291.8580000000002,
    "elapsedMs": 122.60504099999889,
    "outcome": "success"
  },
  {
    "seq": 187,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB038",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:54.857Z",
    "offsetMs": 292.1473330000008,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "2ed9f0def2e174e4ddc66b589e0ec8cd875332d25c2d04e42d1d23a6fbbd03e8";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":184},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":186},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":187}} as const;
export const projectionSha256 = "c07274e9a28ea0fa284ce1d915d8f3259c15421be8c85dd7d04f8939c31992f4";
