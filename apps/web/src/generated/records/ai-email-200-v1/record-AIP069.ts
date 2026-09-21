import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP069",
  "inputSha256": "fb3ea282aa3827685c1bcd5621fa1a0c2603240a3f4dcce71ca50109f48981f1",
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
      "text": "Printer license needs remote activation"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 103,
      "text": "Install the support session tool and allow remote control so we can activate the printer license today."
    }
  ],
  "passA": {
    "requestSha256": "31279483d007e23462b5d9f13818d705a41ba5fdc793aab13d954504ec14373e",
    "capturedAt": "2026-09-20T23:43:39.916Z",
    "elapsedMs": 155.43608299999323,
    "successfulAttemptElapsedMs": 153.41820900000312,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.04
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.69
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.7
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.36
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.98
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.05
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
            "mixed_or_unknown": 0.07,
            "no_sensitive_action": 0.08,
            "sender_supplied": 0.83,
            "independently_established": 0.02
          },
          "confidence": 0.78
        }
      },
      "usage": {
        "input_tokens": 3279,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "0773ca250a106e62a3bdc383443e9aa82e48affce5c6e439de213a23281ac2c3",
    "capturedAt": "2026-09-20T23:43:40.133Z",
    "elapsedMs": 214.07266700000037,
    "successfulAttemptElapsedMs": 212.31054200000654,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0.89,
            "NONE": 0.11
          },
          "confidence": 0.83
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.01,
            "body:0": 0.78,
            "NONE": 0.21
          },
          "confidence": 0.66
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0.18,
            "NONE": 0.8200000000000001
          },
          "confidence": 0.72
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
        "input_tokens": 1392,
        "output_tokens": 190
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 372.0122909999991,
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
        "status": "selected",
        "segmentId": "body:0"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:0"
      },
      "verification_bypass": {
        "status": "none_selected",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "not_requested",
        "segmentId": null
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
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 833,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP069",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:39.762Z",
    "offsetMs": 1.3381660000013653
  },
  {
    "seq": 834,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP069",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:39.916Z",
    "offsetMs": 155.437291000002,
    "elapsedMs": 153.41820900000312,
    "outcome": "success"
  },
  {
    "seq": 835,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP069",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:39.920Z",
    "offsetMs": 158.87029099999927
  },
  {
    "seq": 836,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP069",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:40.132Z",
    "offsetMs": 371.81733299999905,
    "elapsedMs": 212.31054200000654,
    "outcome": "success"
  },
  {
    "seq": 837,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP069",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:40.133Z",
    "offsetMs": 372.05720799999835,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "b236df829a8458fabd6a8140a1407fba97f9ce6990449fb19607462f29e64ecc";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":834},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":836},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":837}} as const;
export const projectionSha256 = "5b18d3ee6ffd1c04b9cce5305d4bd6f8c30a450f67dffeff9c94ebd53e80fd7c";
