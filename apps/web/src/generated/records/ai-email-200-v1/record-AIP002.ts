import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP002",
  "inputSha256": "9c07913d2faef261fb60876f3b180352a929c0c7733c68679566f99d37b6aa1c",
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
      "text": "Claim your unused refund now"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 30,
      "text": "You have an unclaimed refund. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 30,
      "end": 132,
      "text": "Pay a small processing charge with your card number and security code before the refund window closes."
    }
  ],
  "passA": {
    "requestSha256": "447bb9fcaefcea96b5f3499382e7dc2cdf1aaac4148c97d5229190ede95df145",
    "capturedAt": "2026-09-20T23:43:15.942Z",
    "elapsedMs": 120.79020800000217,
    "successfulAttemptElapsedMs": 118.66595800000141,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.2
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.98
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.97
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.06
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.96
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.21
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.55
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
          "noul": 0.04
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
            "mixed_or_unclear": 0,
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.05,
            "independently_established": 0.01,
            "sender_supplied": 0.91,
            "mixed_or_unknown": 0.03
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 3287,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "8d4b28a917b63c9e846eaeb901bf4676feff28c3ef17070d73af87c4031c38f2",
    "capturedAt": "2026-09-20T23:43:16.087Z",
    "elapsedMs": 143.57908400000088,
    "successfulAttemptElapsedMs": 142.05099999999948,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0,
            "body:1": 1,
            "body:0": 0
          },
          "confidence": 1
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 1,
            "NONE": 0,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 1
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.98,
            "NONE": 0,
            "subject:0": 0.02,
            "body:0": 0
          },
          "confidence": 0.97
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.03,
            "NONE": 0.9,
            "subject:0": 0.01,
            "body:0": 0.06
          },
          "confidence": 0.86
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.67,
            "body:1": 0.33,
            "body:0": 0
          },
          "confidence": 0.55
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 1,
            "NONE": 0,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 2100,
        "output_tokens": 338
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 266.3272910000014,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H2",
      "H5"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "payment_request": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "authority_claim": {
        "status": "none_selected",
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
    "seq": 500,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP002",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:15.822Z",
    "offsetMs": 1.5437500000007276
  },
  {
    "seq": 501,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP002",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:15.941Z",
    "offsetMs": 120.79187500000262,
    "elapsedMs": 118.66595800000141,
    "outcome": "success"
  },
  {
    "seq": 502,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP002",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:15.944Z",
    "offsetMs": 123.42504100000224
  },
  {
    "seq": 503,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP002",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:16.087Z",
    "offsetMs": 266.08479100000113,
    "elapsedMs": 142.05099999999948,
    "outcome": "success"
  },
  {
    "seq": 504,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP002",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:16.087Z",
    "offsetMs": 266.37425000000076,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "bab5d8d86c83741a3ecbbc8c0ffeb72300b97d5f629fdb20ad2639af05441940";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":501},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":503},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":504}} as const;
export const projectionSha256 = "6a6c424fc0ed2efde27820e6a8f3744125def64f954608f39c987121e070ad56";
