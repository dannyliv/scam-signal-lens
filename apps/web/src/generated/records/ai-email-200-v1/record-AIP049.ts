import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP049",
  "inputSha256": "b5efa14b3bd420d7c1694a5cc5a1d1a97e467fd460b088f4680264b513ff5f63",
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
      "end": 32,
      "text": "Gift shipment needs verification"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 28,
      "text": "A gift shipment is waiting. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 28,
      "end": 109,
      "text": "Enter your card number and security code in reply to verify the delivery address."
    }
  ],
  "passA": {
    "requestSha256": "b059f80849b387845ca2bd0f68af334cad12653bba7d55cb60d3a1d08d628dd1",
    "capturedAt": "2026-09-20T23:43:33.077Z",
    "elapsedMs": 160.78304200000275,
    "successfulAttemptElapsedMs": 159.09325000000536,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.46
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.98
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.28
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.45
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.37
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.32
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.48
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.25
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.02
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
            "sender_supplied": 0.99,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 3281,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "ebdbc9041e5d563fac1047ae1b9be2663d0ff0a1ef1461d6915aeba04859c111",
    "capturedAt": "2026-09-20T23:43:33.302Z",
    "elapsedMs": 222.42149999999674,
    "successfulAttemptElapsedMs": 220.76608299999498,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.82,
            "NONE": 0.18,
            "body:0": 0,
            "subject:0": 0
          },
          "confidence": 0.76
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 1,
            "subject:0": 0,
            "body:0": 0,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.74,
            "subject:0": 0,
            "body:0": 0,
            "NONE": 0.26
          },
          "confidence": 0.66
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.86,
            "subject:0": 0,
            "body:0": 0,
            "NONE": 0.14
          },
          "confidence": 0.81
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.18,
            "subject:0": 0.01,
            "body:0": 0.24,
            "NONE": 0.57
          },
          "confidence": 0.43
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.14,
            "subject:0": 0.02,
            "body:0": 0.03,
            "NONE": 0.81
          },
          "confidence": 0.74
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.35,
            "subject:0": 0,
            "body:0": 0,
            "NONE": 0.65
          },
          "confidence": 0.53
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.45,
            "subject:0": 0,
            "body:0": 0,
            "NONE": 0.55
          },
          "confidence": 0.39
        }
      },
      "usage": {
        "input_tokens": 2671,
        "output_tokens": 450
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 385.8444579999996,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
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
        "status": "selected",
        "segmentId": "body:1"
      },
      "urgency_pressure": {
        "status": "low_confidence",
        "segmentId": null
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
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 733,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP049",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:32.917Z",
    "offsetMs": 1.0740829999995185
  },
  {
    "seq": 734,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP049",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:33.077Z",
    "offsetMs": 160.7856660000034,
    "elapsedMs": 159.09325000000536,
    "outcome": "success"
  },
  {
    "seq": 735,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP049",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:33.080Z",
    "offsetMs": 164.12641600000643
  },
  {
    "seq": 736,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP049",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:33.302Z",
    "offsetMs": 385.5260410000046,
    "elapsedMs": 220.76608299999498,
    "outcome": "success"
  },
  {
    "seq": 737,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP049",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:33.302Z",
    "offsetMs": 385.9008329999997,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "43c177393a6922c34d6ec06250ebe2ab1a717aa076fc02eda22c7a15ce8f83a0";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":734},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":736},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":737}} as const;
export const projectionSha256 = "dd69464924c486d11bd9dbb3f58aa4a52d109831c6b64b90fa8e49e6e4765122";
