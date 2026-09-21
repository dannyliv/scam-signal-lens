import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP039",
  "inputSha256": "2926f0941dff2caa6389cdde2e0daf0d1014497fc1ff09e21504ccd5a0c8ad9e",
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
      "end": 22,
      "text": "New remittance account"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 63,
      "text": "All future invoices must use the new remittance account below. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 63,
      "end": 123,
      "text": "Do not use the supplier portal because it is being upgraded."
    }
  ],
  "passA": {
    "requestSha256": "866e7cd00d6cb8206c1ac3e2367006b4f97fae1c86f8c4b5f890f3eac29c77b3",
    "capturedAt": "2026-09-20T23:43:29.653Z",
    "elapsedMs": 170.23379199999908,
    "successfulAttemptElapsedMs": 169.02245799999946,
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
          "noul": 0.48
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.54
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.62
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.14
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.27
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.79
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
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
            "informational": 0.01,
            "mixed_or_unclear": 0,
            "active_request": 0.99,
            "educational_or_quoted": 0
          },
          "confidence": 0.98
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "sender_supplied": 0.87,
            "no_sensitive_action": 0.12
          },
          "confidence": 0.84
        }
      },
      "usage": {
        "input_tokens": 3286,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "816a5614904ef21f156afcd84aa8ec2c2685d98f578e196127e86d0e27ad7813",
    "capturedAt": "2026-09-20T23:43:29.962Z",
    "elapsedMs": 306.3993750000009,
    "successfulAttemptElapsedMs": 304.6310000000012,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0,
            "subject:0": 0.03,
            "NONE": 0.25,
            "body:0": 0.72
          },
          "confidence": 0.62
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0,
            "subject:0": 0.01,
            "NONE": 0.28,
            "body:0": 0.71
          },
          "confidence": 0.61
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.03,
            "body:1": 0.01,
            "NONE": 0.16,
            "body:0": 0.8
          },
          "confidence": 0.74
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.04,
            "subject:0": 0,
            "NONE": 0.83,
            "body:0": 0.13
          },
          "confidence": 0.77
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0.9,
            "NONE": 0.07,
            "body:0": 0.03
          },
          "confidence": 0.87
        }
      },
      "usage": {
        "input_tokens": 1820,
        "output_tokens": 283
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 479.3799169999984,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
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
        "status": "low_confidence",
        "segmentId": null
      },
      "unusual_payment_routing": {
        "status": "selected",
        "segmentId": "body:0"
      },
      "urgency_pressure": {
        "status": "not_requested",
        "segmentId": null
      },
      "authority_claim": {
        "status": "none_selected",
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
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 683,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP039",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:29.483Z",
    "offsetMs": 0.73583299999882
  },
  {
    "seq": 684,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP039",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:29.653Z",
    "offsetMs": 170.23329200000444,
    "elapsedMs": 169.02245799999946,
    "outcome": "success"
  },
  {
    "seq": 685,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP039",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:29.657Z",
    "offsetMs": 173.90420799999993
  },
  {
    "seq": 686,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP039",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:29.962Z",
    "offsetMs": 479.22033300000476,
    "elapsedMs": 304.6310000000012,
    "outcome": "success"
  },
  {
    "seq": 687,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP039",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:29.962Z",
    "offsetMs": 479.4129580000008,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "9c71cb835e56f6aea0f8284f533ca671a02ca3acf3693cafee466adec5c0426b";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":684},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":686},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":687}} as const;
export const projectionSha256 = "b99a3c4532d630c5a67492bb07d1c28a41aa8fb4cd4064995a9555a87c25cab1";
