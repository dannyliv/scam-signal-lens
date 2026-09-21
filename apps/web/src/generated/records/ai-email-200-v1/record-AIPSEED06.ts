import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIPSEED06",
  "inputSha256": "3e579e933f4bea15092493910a3049568f55a26123763c0d71301a05c98eb30c",
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
      "end": 31,
      "text": "I will take your $300 bicycle. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 31,
      "end": 75,
      "text": "My assistant already made out a $900 check. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 75,
      "end": 205,
      "text": "Deposit it and return the extra $600 to my mover through a payment app; the mover will collect the bike once you send that amount."
    },
    {
      "id": "userContext:0",
      "source": "userContext",
      "start": 0,
      "end": 26,
      "text": "This buyer is a stranger. "
    },
    {
      "id": "userContext:1",
      "source": "userContext",
      "start": 26,
      "end": 69,
      "text": "No payment has been independently verified."
    }
  ],
  "passA": {
    "requestSha256": "a0e4fdf1a2a7d172a297e29826ceb123e599b9774b32c2dc56645509002b24da",
    "capturedAt": "2026-09-20T23:43:48.166Z",
    "elapsedMs": 156.74199999999837,
    "successfulAttemptElapsedMs": 154.79349999999977,
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
          "noul": 0.34
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.97
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.97
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.32
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.55
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.6
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.97
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
          "noul": 0.09
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
            "mixed_or_unclear": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.97,
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.01,
            "independently_established": 0.01
          },
          "confidence": 0.95
        }
      },
      "usage": {
        "input_tokens": 3320,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "ffa2ac0ba87ea822980f0e65891a38348ada85feae8f13a2dfcd8bc96d142c28",
    "capturedAt": "2026-09-20T23:43:48.443Z",
    "elapsedMs": 274.02912500000093,
    "successfulAttemptElapsedMs": 271.8544170000023,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "body:1": 0,
            "body:2": 0.47,
            "NONE": 0.53
          },
          "confidence": 0.37
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:1": 0,
            "body:0": 0,
            "body:2": 1,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:0": 0,
            "body:1": 0,
            "body:2": 1,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:0": 0,
            "body:1": 0,
            "body:2": 0.67,
            "NONE": 0.33
          },
          "confidence": 0.55
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.58,
            "body:0": 0,
            "body:2": 0.19,
            "NONE": 0.23
          },
          "confidence": 0.44
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "body:1": 0.01,
            "body:2": 0.47,
            "NONE": 0.52
          },
          "confidence": 0.36
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:0": 0,
            "body:1": 0,
            "body:2": 1,
            "NONE": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 2604,
        "output_tokens": 397
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 434.0642500000031,
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
        "segmentId": "body:2"
      },
      "unusual_payment_routing": {
        "status": "selected",
        "segmentId": "body:2"
      },
      "urgency_pressure": {
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "low_confidence",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "selected",
        "segmentId": "body:2"
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
    "seq": 951,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED06",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:48.010Z",
    "offsetMs": 1.2631660000042757
  },
  {
    "seq": 952,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED06",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:48.165Z",
    "offsetMs": 156.74283300000388,
    "elapsedMs": 154.79349999999977,
    "outcome": "success"
  },
  {
    "seq": 953,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED06",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:48.170Z",
    "offsetMs": 161.14970800000447
  },
  {
    "seq": 954,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED06",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:48.442Z",
    "offsetMs": 433.81033300000126,
    "elapsedMs": 271.8544170000023,
    "outcome": "success"
  },
  {
    "seq": 955,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED06",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:48.443Z",
    "offsetMs": 434.11483299999963,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "8dd52d4209463f69b36d37c4312a5a666572d590e25525af8135f91c6c1a9f39";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":952},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":954},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":955}} as const;
export const projectionSha256 = "b28d255f256195d19a63d05ce88237e0c51dc2a4f82b5df87853f965ddaf1453";
