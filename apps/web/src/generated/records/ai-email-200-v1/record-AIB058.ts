import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB058",
  "inputSha256": "abe1d6e6ed98fe05b4af546456c49970373f8b254037aa208b998bd44b9dde08",
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
      "text": "Camera reservation confirmed"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 51,
      "text": "Your camera reservation is confirmed for Saturday. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 51,
      "end": 134,
      "text": "Pick it up at the media desk with the reservation number from your library account."
    }
  ],
  "passA": {
    "requestSha256": "67a58a2796ab43c77bb70f330a6b13f55aee57c91f14714bbf3e72a2c9cf617b",
    "capturedAt": "2026-09-20T23:43:00.803Z",
    "elapsedMs": 120.38850000000093,
    "successfulAttemptElapsedMs": 119.29433399999834,
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
          "noul": 0.11
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.59
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.85
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 0.53,
            "active_request": 0.47
          },
          "confidence": 0.36
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.89,
            "independently_established": 0.11,
            "sender_supplied": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.85
        }
      },
      "usage": {
        "input_tokens": 3283,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "7d334c1e2cf723a254f8628e50c35090840c468e7db251d613bc4b3d50bee51a",
    "capturedAt": "2026-09-20T23:43:00.942Z",
    "elapsedMs": 135.73099999999977,
    "successfulAttemptElapsedMs": 134.20637500000157,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0.02,
            "NONE": 0.3,
            "body:1": 0.64,
            "body:0": 0.04
          },
          "confidence": 0.53
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.01,
            "body:1": 0.99,
            "body:0": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 901,
        "output_tokens": 118
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 259.07966600000145,
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
        "status": "low_confidence",
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
    "seq": 282,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB058",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:00.683Z",
    "offsetMs": 0.6164160000007541
  },
  {
    "seq": 283,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB058",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:00.803Z",
    "offsetMs": 120.38637500000186,
    "elapsedMs": 119.29433399999834,
    "outcome": "success"
  },
  {
    "seq": 284,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB058",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:00.806Z",
    "offsetMs": 123.85358300000007
  },
  {
    "seq": 285,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB058",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:00.941Z",
    "offsetMs": 258.7684580000023,
    "elapsedMs": 134.20637500000157,
    "outcome": "success"
  },
  {
    "seq": 286,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB058",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:00.942Z",
    "offsetMs": 259.16112500000236,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "babb31fbacf7cce632c73916dc7bae1831f7241a273455e1dc5aefd5e97e356c";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":283},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":285},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":286}} as const;
export const projectionSha256 = "136a609a995aba27d7e4df09c51815b580b0e6618c2c9ccd45f007093c3ea2a3";
