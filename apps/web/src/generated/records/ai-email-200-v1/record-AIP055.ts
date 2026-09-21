import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP055",
  "inputSha256": "37c485a3e69d24381b55870fba870f00fc8e5c1e58b06befb444a563c18e4d3c",
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
      "text": "Baggage release fee required"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 20,
      "text": "Your bag was found. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 20,
      "end": 110,
      "text": "Pay a release fee with cryptocurrency and email the transaction reference within one hour."
    }
  ],
  "passA": {
    "requestSha256": "5215687ad0f375f7193a6ae6bcf3f798221f0c9a51afbedc8e8c694fffa4c885",
    "capturedAt": "2026-09-20T23:43:35.287Z",
    "elapsedMs": 115.06670800000575,
    "successfulAttemptElapsedMs": 113.37254199999734,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.59
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
          "noul": 0.97
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.34
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.68
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.89
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
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "active_request": 1,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.02,
            "sender_supplied": 0.95,
            "independently_established": 0.01,
            "no_sensitive_action": 0.02
          },
          "confidence": 0.94
        }
      },
      "usage": {
        "input_tokens": 3282,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "17bc144be8915f701ee03a78341ceb61ab854f1e2d1d63844302a8bedd16031d",
    "capturedAt": "2026-09-20T23:43:35.442Z",
    "elapsedMs": 153.96716700000252,
    "successfulAttemptElapsedMs": 152.2980419999949,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "body:1": 0.69,
            "subject:0": 0,
            "NONE": 0.31
          },
          "confidence": 0.58
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "body:1": 1,
            "subject:0": 0,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "body:1": 1,
            "subject:0": 0,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "body:1": 1,
            "subject:0": 0,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.11,
            "body:1": 0.03,
            "subject:0": 0.02,
            "NONE": 0.84
          },
          "confidence": 0.79
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "body:1": 0.58,
            "subject:0": 0,
            "NONE": 0.42
          },
          "confidence": 0.43
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "body:1": 0.97,
            "subject:0": 0.01,
            "NONE": 0.02
          },
          "confidence": 0.95
        }
      },
      "usage": {
        "input_tokens": 2377,
        "output_tokens": 399
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 271.21116600000096,
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
        "status": "low_confidence",
        "segmentId": null
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
    "seq": 763,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP055",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:35.172Z",
    "offsetMs": 1.0999999999985448
  },
  {
    "seq": 764,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP055",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:35.286Z",
    "offsetMs": 115.06883299999754,
    "elapsedMs": 113.37254199999734,
    "outcome": "success"
  },
  {
    "seq": 765,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP055",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:35.289Z",
    "offsetMs": 118.06895800000348
  },
  {
    "seq": 766,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP055",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:35.442Z",
    "offsetMs": 271.0390830000033,
    "elapsedMs": 152.2980419999949,
    "outcome": "success"
  },
  {
    "seq": 767,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP055",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:35.443Z",
    "offsetMs": 271.25537500000064,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "91d2274bde55ead2dcd318a88be63c1c2eb2e60d7d3c0779404159fb584e18e7";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":764},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":766},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":767}} as const;
export const projectionSha256 = "6d98bdcaaa5eb00eb522ecade101a1f8458b1b747bcbc6deb0e4307f5948bb69";
