import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP006",
  "inputSha256": "49e473d2be7aed8221ad52e667d26a824e9a929e6c882de56493251e304221de",
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
      "end": 41,
      "text": "Payroll record needs immediate correction"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 139,
      "text": "Reply with your employee number, payroll password, and bank routing number so we can correct a direct deposit problem before tonight's run."
    }
  ],
  "passA": {
    "requestSha256": "41050af101de75c559989e5b5c0886d0503d142cb03954141c29b625342a64cb",
    "capturedAt": "2026-09-20T23:43:17.850Z",
    "elapsedMs": 214.86558300000615,
    "successfulAttemptElapsedMs": 213.01962500000081,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.98
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.98
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.08
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.23
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.96
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.86
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.52
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.02
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.06
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 0,
            "educational_or_quoted": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0.04,
            "sender_supplied": 0.95,
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 3288,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "255e35a898aa77ad8e57d9539399e09225ea63e1d548d67b7cd0fa29f8453a25",
    "capturedAt": "2026-09-20T23:43:18.005Z",
    "elapsedMs": 153.46291599999677,
    "successfulAttemptElapsedMs": 152.05079200000182,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "body:0": 1,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0,
            "body:0": 1,
            "subject:0": 0
          },
          "confidence": 1
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.39,
            "body:0": 0.61,
            "subject:0": 0
          },
          "confidence": 0.42
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0,
            "body:0": 0.92,
            "subject:0": 0.08
          },
          "confidence": 0.88
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.04,
            "body:0": 0.6799999999999999,
            "subject:0": 0.28
          },
          "confidence": 0.53
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.74,
            "body:0": 0.26,
            "subject:0": 0
          },
          "confidence": 0.6
        }
      },
      "usage": {
        "input_tokens": 2053,
        "output_tokens": 288
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 370.24583300000086,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H1",
      "H5"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "selected",
        "segmentId": "body:0"
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:0"
      },
      "payment_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "unusual_payment_routing": {
        "status": "low_confidence",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:0"
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
      "avoid_sender_route",
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 520,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP006",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:17.636Z",
    "offsetMs": 1.124415999998746
  },
  {
    "seq": 521,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP006",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:17.850Z",
    "offsetMs": 214.86845800000447,
    "elapsedMs": 213.01962500000081,
    "outcome": "success"
  },
  {
    "seq": 522,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP006",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:17.852Z",
    "offsetMs": 217.31979100000171
  },
  {
    "seq": 523,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP006",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:18.005Z",
    "offsetMs": 370.0113330000022,
    "elapsedMs": 152.05079200000182,
    "outcome": "success"
  },
  {
    "seq": 524,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP006",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:18.005Z",
    "offsetMs": 370.29104100000404,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "e3905cbfb0f770e15c93ee488fd5d24cd63938c9e818314f46960e72b6280f68";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":521},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":523},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":524}} as const;
export const projectionSha256 = "6ed7d7a5eeaa7ada19a01a551a0342916e0d00d6ce8cc0989e3a0868508ca092";
