import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP021",
  "inputSha256": "073f64aaa8b3ee5cf19c3a27d0d99257df4337c259eb50f45bc03c81ece0e561",
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
      "end": 39,
      "text": "Signature needed before account closure"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 125,
      "text": "Open the attached document, enable editing, and enter your email password when prompted to prevent your account from closing."
    }
  ],
  "passA": {
    "requestSha256": "f6f5c1b3b7d13bc6c4b7a3f3c6e348c61da2055a330fc725d76aeaaec4a166e7",
    "capturedAt": "2026-09-20T23:43:23.632Z",
    "elapsedMs": 176.60029199999553,
    "successfulAttemptElapsedMs": 175.12049999999726,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.95
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.62
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.94
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.4
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.57
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
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
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.89,
            "no_sensitive_action": 0.04,
            "mixed_or_unknown": 0.06,
            "independently_established": 0.01
          },
          "confidence": 0.85
        }
      },
      "usage": {
        "input_tokens": 3283,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "2988a8e2293c21cc683a8590008c34f56ac1017d0f2d791936ab72411c33ced6",
    "capturedAt": "2026-09-20T23:43:23.846Z",
    "elapsedMs": 212.63262499999837,
    "successfulAttemptElapsedMs": 210.98629100000107,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 1,
            "NONE": 0,
            "subject:0": 0
          },
          "confidence": 1
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.78,
            "NONE": 0.22,
            "subject:0": 0
          },
          "confidence": 0.66
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.78,
            "NONE": 0,
            "subject:0": 0.22
          },
          "confidence": 0.67
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.11,
            "NONE": 0.69,
            "subject:0": 0.2
          },
          "confidence": 0.54
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.34,
            "NONE": 0.66,
            "subject:0": 0
          },
          "confidence": 0.49
        }
      },
      "usage": {
        "input_tokens": 1719,
        "output_tokens": 236
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 391.7624169999981,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H1"
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
        "status": "not_requested",
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
    "seq": 593,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP021",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:23.456Z",
    "offsetMs": 0.9819589999970049
  },
  {
    "seq": 594,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP021",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:23.631Z",
    "offsetMs": 176.60133399999904,
    "elapsedMs": 175.12049999999726,
    "outcome": "success"
  },
  {
    "seq": 595,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP021",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:23.635Z",
    "offsetMs": 179.9524590000001
  },
  {
    "seq": 596,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP021",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:23.846Z",
    "offsetMs": 391.578125,
    "elapsedMs": 210.98629100000107,
    "outcome": "success"
  },
  {
    "seq": 597,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP021",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:23.846Z",
    "offsetMs": 391.80541699999594,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "225118a0d0d449f9c412c99ea19f9ee5ffb33755b09034f2670637f441280afb";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":594},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":596},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":597}} as const;
export const projectionSha256 = "db69c63f359fa62bba9df479ebee321183e7a347d4ded1ba31398d26aaa5fb6a";
