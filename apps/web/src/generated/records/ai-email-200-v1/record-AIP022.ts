import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP022",
  "inputSha256": "3a8907b1a04954c4537d8b2f4dfe0fb268d753e482b8396d5e99faf83b7f2a29",
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
      "text": "Reservation will be cancelled shortly"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 29,
      "text": "Your reservation is at risk. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 29,
      "end": 134,
      "text": "Send your card security code and the confirmation code from your phone so we can keep the booking active."
    }
  ],
  "passA": {
    "requestSha256": "d33a9c63b6c9505985e5e346db4ebacb746aa5f30d0365d07ee4daebe7e488a9",
    "capturedAt": "2026-09-20T23:43:24.008Z",
    "elapsedMs": 160.32224999999744,
    "successfulAttemptElapsedMs": 159.22716699999728,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.84
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.98
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.21
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.97
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.5
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.52
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.07
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
            "no_sensitive_action": 0.02,
            "independently_established": 0.03,
            "sender_supplied": 0.84,
            "mixed_or_unknown": 0.11
          },
          "confidence": 0.79
        }
      },
      "usage": {
        "input_tokens": 3287,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "12caa38b3c111a941f6994a8be1ad9db444565f510e5c560fc23802946f21812",
    "capturedAt": "2026-09-20T23:43:24.100Z",
    "elapsedMs": 89.99962499999674,
    "successfulAttemptElapsedMs": 88.36020799999824,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "body:1": 0.99,
            "NONE": 0.01,
            "subject:0": 0
          },
          "confidence": 0.99
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0,
            "body:1": 1,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 1
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.51,
            "body:1": 0.49,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 0.35
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:0": 0.05,
            "subject:0": 0.79,
            "NONE": 0,
            "body:1": 0.16
          },
          "confidence": 0.71
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.52,
            "body:1": 0.42,
            "subject:0": 0.02,
            "body:0": 0.04
          },
          "confidence": 0.35
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.63,
            "body:1": 0.37,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 0.49
        }
      },
      "usage": {
        "input_tokens": 2106,
        "output_tokens": 333
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 252.96474999999919,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "subject:0"
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
    "seq": 598,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP022",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:23.848Z",
    "offsetMs": 0.6688750000030268
  },
  {
    "seq": 599,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP022",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:24.008Z",
    "offsetMs": 160.32108300000255,
    "elapsedMs": 159.22716699999728,
    "outcome": "success"
  },
  {
    "seq": 600,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP022",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:24.011Z",
    "offsetMs": 163.64862500000163
  },
  {
    "seq": 601,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP022",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:24.100Z",
    "offsetMs": 252.6788749999978,
    "elapsedMs": 88.36020799999824,
    "outcome": "success"
  },
  {
    "seq": 602,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP022",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:24.101Z",
    "offsetMs": 253.0239999999976,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "5d6909cc6ac1c83a27f4a8878b8f577e71748a355bc238b89b3b65b2b6972f24";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":599},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":601},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":602}} as const;
export const projectionSha256 = "4e59361784eae921717ab7eda70c6bf641521cae284fb9453cf27271ec5ce901";
