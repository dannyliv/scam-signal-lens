import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP041",
  "inputSha256": "9093c8f6fc1e2a1d38913bc00a14bed2d3c5c6185239d9021699b12afd195d01",
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
      "end": 36,
      "text": "Buyer payment requires a release fee"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 31,
      "text": "A buyer paid for your listing. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 31,
      "end": 124,
      "text": "Pay the release fee by cryptocurrency and send the wallet receipt before the payment expires."
    }
  ],
  "passA": {
    "requestSha256": "1129c6a96293b66bc5719c82c94afdfed26465870dcdaa774fdf71e8dc7d8d33",
    "capturedAt": "2026-09-20T23:43:30.479Z",
    "elapsedMs": 206.41162500000064,
    "successfulAttemptElapsedMs": 204.8648749999993,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.06
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.57
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.96
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.95
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.95
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.12
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.51
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.94
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.03
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
            "active_request": 1,
            "mixed_or_unclear": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.02,
            "independently_established": 0.01,
            "sender_supplied": 0.96,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.95
        }
      },
      "usage": {
        "input_tokens": 3286,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "24ee9171e1b621b249d99da84eb88656e812dc396e1b62b91a5ed6571f42c33b",
    "capturedAt": "2026-09-20T23:43:30.664Z",
    "elapsedMs": 183.74937499999942,
    "successfulAttemptElapsedMs": 182.44758300000103,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.4,
            "body:0": 0,
            "subject:0": 0,
            "body:1": 0.6
          },
          "confidence": 0.45
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0,
            "body:0": 0,
            "subject:0": 0,
            "body:1": 1
          },
          "confidence": 1
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0,
            "body:0": 0,
            "subject:0": 0,
            "body:1": 1
          },
          "confidence": 1
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0,
            "body:0": 0,
            "subject:0": 0,
            "body:1": 1
          },
          "confidence": 1
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.65,
            "body:0": 0,
            "subject:0": 0,
            "body:1": 0.35
          },
          "confidence": 0.53
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0,
            "body:0": 0,
            "subject:0": 0.03,
            "body:1": 0.97
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 2115,
        "output_tokens": 343
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 391.8131250000006,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H2",
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
        "segmentId": "body:1"
      },
      "authority_claim": {
        "status": "not_requested",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "low_confidence",
        "segmentId": null
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
      "avoid_sender_route",
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 693,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP041",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:30.273Z",
    "offsetMs": 1.040207999998529
  },
  {
    "seq": 694,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP041",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:30.478Z",
    "offsetMs": 206.41487499999494,
    "elapsedMs": 204.8648749999993,
    "outcome": "success"
  },
  {
    "seq": 695,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP041",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:30.481Z",
    "offsetMs": 208.51637499999924
  },
  {
    "seq": 696,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP041",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:30.664Z",
    "offsetMs": 391.5574579999957,
    "elapsedMs": 182.44758300000103,
    "outcome": "success"
  },
  {
    "seq": 697,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP041",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:30.664Z",
    "offsetMs": 391.85908299999574,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "c8f884656001e5a69513d1d647abbecd8e85a6237f7ee6dcffb8bdbcbc3cfe63";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":694},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":696},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":697}} as const;
export const projectionSha256 = "a724360eab166983760514be803e255003575e8b3f20bfb8979e764aef665adc";
