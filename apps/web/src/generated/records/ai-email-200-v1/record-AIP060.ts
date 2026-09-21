import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP060",
  "inputSha256": "82cad147c2660a768bcf062207c2bb11aa0a6f2ee23543feab96279f7b8f01a0",
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
      "end": 28,
      "text": "Final account closure notice"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 65,
      "text": "Send your account PIN and password to prevent immediate closure. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 65,
      "end": 116,
      "text": "Support cannot accept calls about this urgent case."
    }
  ],
  "passA": {
    "requestSha256": "c8807ee7f8ce7c1a3426ff4be34634c63c1c1bb11719325e54f1575e563e2cf0",
    "capturedAt": "2026-09-20T23:43:36.947Z",
    "elapsedMs": 206.09237500000017,
    "successfulAttemptElapsedMs": 204.4679580000011,
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
          "noul": 0.94
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.43
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.97
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.93
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.04
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
            "educational_or_quoted": 0,
            "informational": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0.01,
            "sender_supplied": 0.91,
            "no_sensitive_action": 0.03,
            "mixed_or_unknown": 0.05
          },
          "confidence": 0.87
        }
      },
      "usage": {
        "input_tokens": 3280,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "c888889f21442e13fc7ab293939153429784970fcac36e050252dc6e52c55448",
    "capturedAt": "2026-09-20T23:43:37.384Z",
    "elapsedMs": 435.7575419999994,
    "successfulAttemptElapsedMs": 434.24716700000135,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0,
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
            "body:1": 0,
            "body:0": 0.96,
            "subject:0": 0,
            "NONE": 0.04
          },
          "confidence": 0.95
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0,
            "body:0": 0.89,
            "subject:0": 0,
            "NONE": 0.11
          },
          "confidence": 0.86
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0,
            "body:0": 0.99,
            "subject:0": 0.01,
            "NONE": 0
          },
          "confidence": 0.99
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.71,
            "body:0": 0.12,
            "subject:0": 0.12,
            "NONE": 0.05
          },
          "confidence": 0.61
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.97,
            "body:0": 0.02,
            "NONE": 0.01,
            "subject:0": 0
          },
          "confidence": 0.95
        }
      },
      "usage": {
        "input_tokens": 2081,
        "output_tokens": 344
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 644.1783330000035,
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
        "status": "selected",
        "segmentId": "body:0"
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
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 788,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP060",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:36.741Z",
    "offsetMs": 1.0700420000066515
  },
  {
    "seq": 789,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP060",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:36.946Z",
    "offsetMs": 206.09216700000252,
    "elapsedMs": 204.4679580000011,
    "outcome": "success"
  },
  {
    "seq": 790,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP060",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:36.949Z",
    "offsetMs": 208.9083329999994
  },
  {
    "seq": 791,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP060",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:37.384Z",
    "offsetMs": 643.7536670000045,
    "elapsedMs": 434.24716700000135,
    "outcome": "success"
  },
  {
    "seq": 792,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP060",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:37.385Z",
    "offsetMs": 644.2666670000035,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6bce629aa9abd25d98083f2a78bc2fd56143c390956fe551b2bd20c9883ebcd7";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":789},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":791},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":792}} as const;
export const projectionSha256 = "a8611eeead909c28df0db8ddbefa2b0869dc27ba075aa16446c4b346a89d2d19";
