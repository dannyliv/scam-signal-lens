import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP064",
  "inputSha256": "ed3cca849733b8c85c0d992eeba2310bcd88776c1e16f558c8a46a76645644e4",
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
      "text": "Auction payment is awaiting release"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 24,
      "text": "The buyer paid already. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 24,
      "end": 109,
      "text": "Send a cryptocurrency deposit to release your sale proceeds before the buyer cancels."
    }
  ],
  "passA": {
    "requestSha256": "bc04d4e20877919d9be014e7a01505d230fdacf1aa8ac6fd049a9b3ba6c99788",
    "capturedAt": "2026-09-20T23:43:38.576Z",
    "elapsedMs": 176.61004200000025,
    "successfulAttemptElapsedMs": 174.9667499999996,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.41
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.97
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.92
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.95
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.15
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.53
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.96
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.06
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
            "sender_supplied": 0.88,
            "independently_established": 0.01,
            "mixed_or_unknown": 0.02,
            "no_sensitive_action": 0.09
          },
          "confidence": 0.84
        }
      },
      "usage": {
        "input_tokens": 3283,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "35d8fde8d076cbcb8b18e1c7a32f3f75a07aaf4355f85d7e24c2663805e3b40f",
    "capturedAt": "2026-09-20T23:43:38.690Z",
    "elapsedMs": 111.580541000003,
    "successfulAttemptElapsedMs": 109.66945800000394,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:1": 0.47,
            "NONE": 0.53
          },
          "confidence": 0.36
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:1": 1,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:1": 1,
            "NONE": 0
          },
          "confidence": 0.99
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "NONE": 0,
            "body:1": 1
          },
          "confidence": 1
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "NONE": 0.64,
            "body:1": 0.36
          },
          "confidence": 0.52
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:1": 1,
            "NONE": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 2094,
        "output_tokens": 341
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 290.7079999999987,
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
    "seq": 808,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP064",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:38.401Z",
    "offsetMs": 1.1310000000012224
  },
  {
    "seq": 809,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP064",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:38.576Z",
    "offsetMs": 176.61166600000433,
    "elapsedMs": 174.9667499999996,
    "outcome": "success"
  },
  {
    "seq": 810,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP064",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:38.580Z",
    "offsetMs": 180.0645829999994
  },
  {
    "seq": 811,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP064",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:38.690Z",
    "offsetMs": 290.4473750000034,
    "elapsedMs": 109.66945800000394,
    "outcome": "success"
  },
  {
    "seq": 812,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP064",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:38.690Z",
    "offsetMs": 290.75995800000237,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "2fafb8651a7d2ffe3c7230056539ac3ec9d8e2775874667fc994a8a135fb16b6";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":809},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":811},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":812}} as const;
export const projectionSha256 = "761384f3de96c469005fc4a75210664844553928fdd298159e19ad917238a329";
