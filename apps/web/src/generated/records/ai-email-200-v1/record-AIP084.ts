import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP084",
  "inputSha256": "7242587d54cdf95c41f5547e40957fe2f93430128ecb636f938d50e03710c588",
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
      "end": 30,
      "text": "Warranty claim needs a deposit"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 108,
      "text": "Send a cryptocurrency deposit to start the warranty claim, then give us remote access to inspect the device."
    }
  ],
  "passA": {
    "requestSha256": "21428fe4610d3d3062c1dace1cf6b459b884dcee5daaace49d2027ed4d83dc31",
    "capturedAt": "2026-09-20T23:43:44.995Z",
    "elapsedMs": 218.90575000000536,
    "successfulAttemptElapsedMs": 217.22474999999395,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.12
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.81
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.98
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.96
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.13
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.79
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.38
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.83
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.98
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
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 1,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.01,
            "independently_established": 0.01,
            "sender_supplied": 0.92,
            "mixed_or_unknown": 0.06
          },
          "confidence": 0.9
        }
      },
      "usage": {
        "input_tokens": 3284,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "c7bd1d288d6a379afef97da10de2a50bd0b7ec594850b90c890ccd12082baee6",
    "capturedAt": "2026-09-20T23:43:45.173Z",
    "elapsedMs": 176.30275000000256,
    "successfulAttemptElapsedMs": 174.53562500000407,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.01,
            "body:0": 0.83,
            "NONE": 0.16
          },
          "confidence": 0.75
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.01,
            "body:0": 0.99,
            "NONE": 0
          },
          "confidence": 0.99
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "body:0": 1,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.23,
            "body:0": 0.31,
            "NONE": 0.46
          },
          "confidence": 0.19
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0.28,
            "NONE": 0.72
          },
          "confidence": 0.58
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.08,
            "body:0": 0.91,
            "NONE": 0.01
          },
          "confidence": 0.86
        },
        "evidence_remote_access_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "body:0": 1,
            "NONE": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 2296,
        "output_tokens": 333
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 397.3819169999988,
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
        "status": "selected",
        "segmentId": "body:0"
      },
      "payment_request": {
        "status": "selected",
        "segmentId": "body:0"
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
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "low_confidence",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "selected",
        "segmentId": "body:0"
      },
      "remote_access_request": {
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 906,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP084",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:44.777Z",
    "offsetMs": 1.2886250000010477
  },
  {
    "seq": 907,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP084",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:44.995Z",
    "offsetMs": 218.90691700000025,
    "elapsedMs": 217.22474999999395,
    "outcome": "success"
  },
  {
    "seq": 908,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP084",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:44.998Z",
    "offsetMs": 221.87016700000095
  },
  {
    "seq": 909,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP084",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:45.173Z",
    "offsetMs": 397.1098340000026,
    "elapsedMs": 174.53562500000407,
    "outcome": "success"
  },
  {
    "seq": 910,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP084",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:45.173Z",
    "offsetMs": 397.44191700000374,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "5bb75cbde90fa495d7886759d9275c38f2302a66f99bfa73d984d5f0dc4bb184";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":907},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":909},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":910}} as const;
export const projectionSha256 = "33a4f42dc9f8aa18b36a9f7ac3b78a6d3cff2ddce638365a05b251130fac33c6";
