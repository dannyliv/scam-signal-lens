import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP011",
  "inputSha256": "93b2a7eca7c3a8634e1964e299d0bd83d9955a90c739aab104e8bedeee053ca8",
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
      "end": 33,
      "text": "Emergency donation needed tonight"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 46,
      "text": "Families need immediate help after the storm. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 46,
      "end": 150,
      "text": "Send a wire transfer confirmation and your online banking login so our finance volunteer can process it."
    }
  ],
  "passA": {
    "requestSha256": "876d3b8daae0381e3ad651a00a4991e0ab37ff96f8fec171385f14d5826c752f",
    "capturedAt": "2026-09-20T23:43:20.516Z",
    "elapsedMs": 458.7557919999963,
    "successfulAttemptElapsedMs": 457.7652920000037,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.92
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.98
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.96
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.21
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.95
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.78
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.51
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.24
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.12
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
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
            "educational_or_quoted": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.07,
            "independently_established": 0.02,
            "sender_supplied": 0.89,
            "no_sensitive_action": 0.02
          },
          "confidence": 0.85
        }
      },
      "usage": {
        "input_tokens": 3288,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "95bf1881fe3257d0e229806b49190c7d2031d66c6e2d08af2a0da38d8ba5d100",
    "capturedAt": "2026-09-20T23:43:20.800Z",
    "elapsedMs": 283.0402499999982,
    "successfulAttemptElapsedMs": 281.6523329999982,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.99,
            "NONE": 0.01,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 0.99
        },
        "evidence_sensitive_data_request": {
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
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.96,
            "NONE": 0,
            "subject:0": 0.04,
            "body:0": 0
          },
          "confidence": 0.95
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.59,
            "NONE": 0.41,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 0.44
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:1": 0.01,
            "NONE": 0,
            "subject:0": 0.97,
            "body:0": 0.02
          },
          "confidence": 0.95
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.9,
            "NONE": 0.07,
            "subject:0": 0,
            "body:0": 0.03
          },
          "confidence": 0.86
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.28,
            "NONE": 0.71,
            "subject:0": 0.01,
            "body:0": 0
          },
          "confidence": 0.61
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.48,
            "NONE": 0.52,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 0.35
        }
      },
      "usage": {
        "input_tokens": 2734,
        "output_tokens": 454
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 743.640333000003,
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
        "segmentId": "body:1"
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
        "status": "low_confidence",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "subject:0"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "verification_bypass": {
        "status": "low_confidence",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "low_confidence",
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
    "seq": 545,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP011",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:20.057Z",
    "offsetMs": 0.5936660000006668
  },
  {
    "seq": 546,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP011",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:20.516Z",
    "offsetMs": 458.754958000005,
    "elapsedMs": 457.7652920000037,
    "outcome": "success"
  },
  {
    "seq": 547,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP011",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:20.518Z",
    "offsetMs": 461.10745800000586
  },
  {
    "seq": 548,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP011",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:20.800Z",
    "offsetMs": 743.3969580000048,
    "elapsedMs": 281.6523329999982,
    "outcome": "success"
  },
  {
    "seq": 549,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP011",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:20.801Z",
    "offsetMs": 743.6903750000056,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "f68cb0d41aa67bed30593aaca582394369c01f09063789432447a44771eeb9d4";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":546},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":548},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":549}} as const;
export const projectionSha256 = "afc90e9d0d743e19d133d691b30f3ca14e13d03ac5f6dec88606732411366cf4";
