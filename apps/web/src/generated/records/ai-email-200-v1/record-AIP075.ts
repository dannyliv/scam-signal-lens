import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP075",
  "inputSha256": "089e801ef0bb38037b37ccb8e2da59fa92751f6cf32c014877db3d697c75cfb8",
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
      "text": "Address correction needs card check"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 115,
      "text": "To correct the delivery address, reply with your card number and security code before the parcel returns to sender."
    }
  ],
  "passA": {
    "requestSha256": "63699ba758ab8a5d0eed0e6ef06538c344ab5e1871523671131844bef735ae48",
    "capturedAt": "2026-09-20T23:43:41.724Z",
    "elapsedMs": 197.86658299999544,
    "successfulAttemptElapsedMs": 191.50912500000413,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.58
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.98
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.1
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.31
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.96
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.33
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.71
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
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0.05,
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.93,
            "no_sensitive_action": 0.01
          },
          "confidence": 0.91
        }
      },
      "usage": {
        "input_tokens": 3282,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "d535249f35b1233dfcd2ff2bc4d5b43cac1638b387dae00400408ece63a771f4",
    "capturedAt": "2026-09-20T23:43:41.863Z",
    "elapsedMs": 138.53979200000322,
    "successfulAttemptElapsedMs": 137.98970800000097,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.13,
            "body:0": 0.87,
            "subject:0": 0
          },
          "confidence": 0.8
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
            "NONE": 0.29,
            "body:0": 0.69,
            "subject:0": 0.02
          },
          "confidence": 0.54
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0,
            "body:0": 1,
            "subject:0": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.77,
            "body:0": 0.22,
            "subject:0": 0.01
          },
          "confidence": 0.65
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.4,
            "body:0": 0.59,
            "subject:0": 0.01
          },
          "confidence": 0.39
        }
      },
      "usage": {
        "input_tokens": 2011,
        "output_tokens": 288
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 337.1415829999969,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
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
        "status": "none_selected",
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
    "seq": 861,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP075",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:41.529Z",
    "offsetMs": 2.6875
  },
  {
    "seq": 862,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP075",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:41.724Z",
    "offsetMs": 197.87033299999894,
    "elapsedMs": 191.50912500000413,
    "outcome": "success"
  },
  {
    "seq": 863,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP075",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:41.725Z",
    "offsetMs": 198.7870830000029
  },
  {
    "seq": 864,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP075",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:41.863Z",
    "offsetMs": 336.99783300000126,
    "elapsedMs": 137.98970800000097,
    "outcome": "success"
  },
  {
    "seq": 865,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP075",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:41.863Z",
    "offsetMs": 337.17645800000173,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "9c1aaf0380fe12f22932d67b4ee2d9b256b55b2c08135a1ad581effdba07fccc";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":862},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":864},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":865}} as const;
export const projectionSha256 = "13a8a48342cb41d429c1ac4aafb96cade423017a4b73c7c820451a9f32f9967d";
