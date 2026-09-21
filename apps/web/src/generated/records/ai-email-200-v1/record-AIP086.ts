import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP086",
  "inputSha256": "9c010864b886956738f6e14cf4230f03a31ce9434ec1475a8724d6f5c738c11e",
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
      "end": 37,
      "text": "Forwarding service needs confirmation"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 103,
      "text": "Confirm forwarding by replying with your card number and online account password within thirty minutes."
    }
  ],
  "passA": {
    "requestSha256": "1910f1d1ab315b77a1040758ded294142dbd32f394b15f99a3c44ce3e3fa38e8",
    "capturedAt": "2026-09-20T23:43:45.742Z",
    "elapsedMs": 247.93204100000003,
    "successfulAttemptElapsedMs": 246.37058400000387,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.98
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.98
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.24
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.16
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.97
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.55
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.57
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.19
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
            "educational_or_quoted": 0,
            "active_request": 1,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0.04,
            "no_sensitive_action": 0.01,
            "sender_supplied": 0.94,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 3280,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "c610c252c29dbff3bbca5e2d54dc2d4455c9d1ea6e95e92526783ec21719461f",
    "capturedAt": "2026-09-20T23:43:45.844Z",
    "elapsedMs": 99.86420899999939,
    "successfulAttemptElapsedMs": 97.65037500000471,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0,
            "body:0": 1,
            "subject:0": 0
          },
          "confidence": 1
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
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.42,
            "body:0": 0.55,
            "subject:0": 0.03
          },
          "confidence": 0.32
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
            "NONE": 0.59,
            "body:0": 0.16,
            "subject:0": 0.25
          },
          "confidence": 0.39
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.64,
            "body:0": 0.36,
            "subject:0": 0
          },
          "confidence": 0.46
        }
      },
      "usage": {
        "input_tokens": 1973,
        "output_tokens": 281
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 350.0087910000002,
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
        "segmentId": "body:0"
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:0"
      },
      "payment_request": {
        "status": "low_confidence",
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
        "status": "low_confidence",
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
    "seq": 916,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP086",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:45.495Z",
    "offsetMs": 1.0330829999948037
  },
  {
    "seq": 917,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP086",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:45.742Z",
    "offsetMs": 247.93162499999744,
    "elapsedMs": 246.37058400000387,
    "outcome": "success"
  },
  {
    "seq": 918,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP086",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:45.745Z",
    "offsetMs": 251.22000000000116
  },
  {
    "seq": 919,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP086",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:45.844Z",
    "offsetMs": 349.8298749999958,
    "elapsedMs": 97.65037500000471,
    "outcome": "success"
  },
  {
    "seq": 920,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP086",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:45.844Z",
    "offsetMs": 350.05120799999713,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "370abf217933bbdd69d82cd47c70535c17fbb9e964d90e45ba0bc15f20ebe137";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":917},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":919},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":920}} as const;
export const projectionSha256 = "302405c9892e4122ace9e590b3ab7d1751dedfe311d635a7fa807b363a4473dd";
