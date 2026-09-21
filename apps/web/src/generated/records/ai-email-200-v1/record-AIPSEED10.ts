import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIPSEED10",
  "inputSha256": "50a2cb34328d4e8e8a4cc09ec66250445c064daa905c265cda03c5cb535f755f",
  "questionBundleSha256": "e8f1e66cf768b6c7314f1f4b6ad6fe743f7e945c487259b6087353d93f311dd6",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "synthetic_sanitized",
  "policySha256": "3435135d6058476d4262ecbc936abf95af4993b455dfab35adc8b17f3fe6ad6a",
  "requestedModel": "jev-1.13.0",
  "segments": [
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 74,
      "text": "Our private trading pool guarantees a 20% return every week with no risk. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 74,
      "end": 143,
      "text": "Send cryptocurrency to our deposit wallet and we will trade for you. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 143,
      "end": 176,
      "text": "Your allocation expires tonight. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 176,
      "end": 246,
      "text": "Do not discuss the strategy with your bank; they do not understand it."
    },
    {
      "id": "userContext:0",
      "source": "userContext",
      "start": 0,
      "end": 51,
      "text": "An account I do not know sent this direct message. "
    },
    {
      "id": "userContext:1",
      "source": "userContext",
      "start": 51,
      "end": 102,
      "text": "I have no existing investment relationship with it."
    }
  ],
  "passA": {
    "requestSha256": "936f2e266941a070b9871e30b9c857230a4dd8933094619c1c6b4e498761ac35",
    "capturedAt": "2026-09-20T23:43:49.731Z",
    "elapsedMs": 135.71704200000386,
    "successfulAttemptElapsedMs": 134.03612499999872,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.04
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.49
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.98
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.93
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.97
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.15
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.97
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.77
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.99
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.02
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
            "active_request": 1,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 1,
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3325,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "3d3750a7e5f32f7f85888ae7203ed0ac2f32a5fe414f3f109a740003f6fb490b",
    "capturedAt": "2026-09-20T23:43:49.904Z",
    "elapsedMs": 171.18087499999092,
    "successfulAttemptElapsedMs": 169.57270800000697,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "body:1": 0.57,
            "NONE": 0.4,
            "body:3": 0.03,
            "body:0": 0
          },
          "confidence": 0.46
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "body:1": 1,
            "NONE": 0,
            "body:3": 0,
            "body:0": 0
          },
          "confidence": 1
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "body:1": 1,
            "NONE": 0,
            "body:3": 0,
            "body:0": 0
          },
          "confidence": 1
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 1,
            "body:1": 0,
            "NONE": 0,
            "body:3": 0,
            "body:0": 0
          },
          "confidence": 1
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:2": 0,
            "body:1": 0,
            "NONE": 0,
            "body:3": 1,
            "body:0": 0
          },
          "confidence": 1
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "body:1": 0.9,
            "NONE": 0.1,
            "body:3": 0,
            "body:0": 0
          },
          "confidence": 0.86
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0,
            "body:1": 0,
            "NONE": 0,
            "body:3": 0,
            "body:0": 1
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 2689,
        "output_tokens": 464
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 309.33329100000265,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H3"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "low_confidence",
        "segmentId": null
      },
      "payment_request": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "unusual_payment_routing": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:2"
      },
      "authority_claim": {
        "status": "not_requested",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "selected",
        "segmentId": "body:3"
      },
      "advance_fee_or_refund_trap": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "remote_access_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "unrealistic_reward": {
        "status": "selected",
        "segmentId": "body:0"
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
      "avoid_sender_route",
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 971,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED10",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:49.596Z",
    "offsetMs": 1.1260410000104457
  },
  {
    "seq": 972,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED10",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:49.731Z",
    "offsetMs": 135.71720800000185,
    "elapsedMs": 134.03612499999872,
    "outcome": "success"
  },
  {
    "seq": 973,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED10",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:49.734Z",
    "offsetMs": 138.71075000001292
  },
  {
    "seq": 974,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED10",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:49.904Z",
    "offsetMs": 308.8851660000073,
    "elapsedMs": 169.57270800000697,
    "outcome": "success"
  },
  {
    "seq": 975,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED10",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:49.904Z",
    "offsetMs": 309.4305410000088,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "abb534cb182ee9b329f217714f6c4bb736ec49d5e1c627b9cf1237168e3fcff2";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":972},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":974},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":975}} as const;
export const projectionSha256 = "24231e74503384b96f45de0dda163a8cc488909102958fc1ca29d758e531265a";
