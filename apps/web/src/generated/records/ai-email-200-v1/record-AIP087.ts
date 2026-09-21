import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP087",
  "inputSha256": "7762627a1a0b368bcb224db34a57a6d48738156dffc4030fc24506eac381c58a",
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
      "text": "Rebate check needs a processing fee"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 99,
      "text": "Pay the processing fee with prepaid cards and email the numbers to receive the vendor rebate check."
    }
  ],
  "passA": {
    "requestSha256": "430f65c2212456fed1a34973a2a3b0d288915765e46180d23b564c2e3ac42d02",
    "capturedAt": "2026-09-20T23:43:46.117Z",
    "elapsedMs": 271.9368750000067,
    "successfulAttemptElapsedMs": 271.3371249999982,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.16
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.96
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.97
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.92
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.15
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.14
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.56
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.95
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
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 0,
            "active_request": 1,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.02,
            "sender_supplied": 0.94,
            "independently_established": 0.02,
            "mixed_or_unknown": 0.02
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 3281,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "595b8a1fb9e210ae130337e2f3bd04ca7eccef21a3a36fa6d65e21af0a8300a9",
    "capturedAt": "2026-09-20T23:43:46.276Z",
    "elapsedMs": 156.64504199999647,
    "successfulAttemptElapsedMs": 155.0584170000002,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0,
            "body:0": 1
          },
          "confidence": 1
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0,
            "body:0": 1
          },
          "confidence": 1
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0,
            "body:0": 1
          },
          "confidence": 1
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.52,
            "body:0": 0.48
          },
          "confidence": 0.28
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.02,
            "NONE": 0,
            "body:0": 0.98
          },
          "confidence": 0.97
        }
      },
      "usage": {
        "input_tokens": 1727,
        "output_tokens": 242
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 430.75154199999815,
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
        "status": "not_requested",
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
    "seq": 921,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP087",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:45.845Z",
    "offsetMs": 0.38783300000068266
  },
  {
    "seq": 922,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP087",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:46.117Z",
    "offsetMs": 271.93537500000093,
    "elapsedMs": 271.3371249999982,
    "outcome": "success"
  },
  {
    "seq": 923,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP087",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:46.120Z",
    "offsetMs": 274.57162499999686
  },
  {
    "seq": 924,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP087",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:46.275Z",
    "offsetMs": 430.24295799999527,
    "elapsedMs": 155.0584170000002,
    "outcome": "success"
  },
  {
    "seq": 925,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP087",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:46.276Z",
    "offsetMs": 430.85629199999676,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "f1568c572eb26f420bc08162ef04a7b826ee8c339894f502fc684119c6d50c63";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":922},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":924},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":925}} as const;
export const projectionSha256 = "e673ae15eca3680061972b33a47c7c505e1ed9ef2ef70b7dcffab727c73ca454";
