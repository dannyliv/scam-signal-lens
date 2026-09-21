import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP085",
  "inputSha256": "9d91f223f66e6acee5ea6f7e9466e94904d1ea8660696e6e89fa79a901c2dbac",
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
      "text": "Student account will be locked"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 90,
      "text": "Send your campus password and the verification code you just received to prevent the lock."
    }
  ],
  "passA": {
    "requestSha256": "968d652bde1b41048e0d70d832df1c248412405b98dd1d1b428907d502c2ad09",
    "capturedAt": "2026-09-20T23:43:45.340Z",
    "elapsedMs": 164.9441669999942,
    "successfulAttemptElapsedMs": 163.42366599999514,
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
          "noul": 0.77
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.96
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.76
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.64
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "informational": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.1,
            "sender_supplied": 0.85,
            "no_sensitive_action": 0.03,
            "independently_established": 0.02
          },
          "confidence": 0.8
        }
      },
      "usage": {
        "input_tokens": 3277,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "36168c24229684f944c149401848c9bad56eb505bfb6d2654e42161f19040eb0",
    "capturedAt": "2026-09-20T23:43:45.492Z",
    "elapsedMs": 142.09470899999724,
    "successfulAttemptElapsedMs": 140.28629200000432,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0,
            "body:0": 1
          },
          "confidence": 1
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.22,
            "body:0": 0.78
          },
          "confidence": 0.67
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.26,
            "NONE": 0,
            "body:0": 0.74
          },
          "confidence": 0.61
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.42,
            "NONE": 0.13,
            "body:0": 0.45
          },
          "confidence": 0.18
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.61,
            "body:0": 0.39
          },
          "confidence": 0.41
        }
      },
      "usage": {
        "input_tokens": 1683,
        "output_tokens": 238
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 316.9202910000022,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H1"
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
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "low_confidence",
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
    "seq": 911,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP085",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:45.176Z",
    "offsetMs": 1.0104580000042915
  },
  {
    "seq": 912,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP085",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:45.340Z",
    "offsetMs": 164.94504099999904,
    "elapsedMs": 163.42366599999514,
    "outcome": "success"
  },
  {
    "seq": 913,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP085",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:45.351Z",
    "offsetMs": 175.6288330000025
  },
  {
    "seq": 914,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP085",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:45.492Z",
    "offsetMs": 316.62625000000116,
    "elapsedMs": 140.28629200000432,
    "outcome": "success"
  },
  {
    "seq": 915,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP085",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:45.492Z",
    "offsetMs": 316.9690830000036,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "e5af28228aeca90f576a9dbe04dce7e6e50156bf0193e936669c0777db098398";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":912},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":914},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":915}} as const;
export const projectionSha256 = "50a651dd60d586d182a3c6cc266d625a0d995adc3f5af73662e978ab0014ab63";
