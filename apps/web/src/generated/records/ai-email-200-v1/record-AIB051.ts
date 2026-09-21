import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB051",
  "inputSha256": "cf1b09f84eb693a4830b1cf8b0130298a64cb2daedd9f5d77016b61e740e915f",
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
      "text": "Guest network password rotated"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 63,
      "text": "The guest wireless password was rotated for the meeting rooms. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 63,
      "end": 123,
      "text": "Ask the front desk in person when you arrive if you need it."
    }
  ],
  "passA": {
    "requestSha256": "0987ede447249d8029a65a97c84e811777ce6cb021c8da9269ff1694dea6f706",
    "capturedAt": "2026-09-20T23:42:58.679Z",
    "elapsedMs": 165.43012500000077,
    "successfulAttemptElapsedMs": 164.06279200000063,
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
          "noul": 0.02
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
          "noul": 0.06
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.28
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.08
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.94
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.25,
            "educational_or_quoted": 0,
            "active_request": 0.74,
            "mixed_or_unclear": 0.01
          },
          "confidence": 0.65
        },
        "request_route": {
          "type": "choice",
          "choice": "independently_established",
          "probabilities": {
            "sender_supplied": 0.07,
            "no_sensitive_action": 0.24,
            "independently_established": 0.6799999999999999,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.59
        }
      },
      "usage": {
        "input_tokens": 3285,
        "output_tokens": 353
      }
    }
  },
  "passB": {
    "requestSha256": "f52bb163fff3f3aadaf88184296e7f499cb73cbe1c8f51a6083daa0d18e5f224",
    "capturedAt": "2026-09-20T23:42:58.823Z",
    "elapsedMs": 142.97162500000013,
    "successfulAttemptElapsedMs": 141.64866699999948,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.32,
            "subject:0": 0.01,
            "body:0": 0.03,
            "body:1": 0.64
          },
          "confidence": 0.53
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:1": 1
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 907,
        "output_tokens": 118
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 310.4511250000014,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "request_route_low_confidence"
    ],
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
        "status": "not_requested",
        "segmentId": null
      },
      "authority_claim": {
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "not_requested",
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
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 247,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB051",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:58.514Z",
    "offsetMs": 0.8697090000005119
  },
  {
    "seq": 248,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB051",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:58.678Z",
    "offsetMs": 165.4369170000009,
    "elapsedMs": 164.06279200000063,
    "outcome": "success"
  },
  {
    "seq": 249,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB051",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:58.681Z",
    "offsetMs": 168.0103340000005
  },
  {
    "seq": 250,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB051",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:58.823Z",
    "offsetMs": 310.2323750000014,
    "elapsedMs": 141.64866699999948,
    "outcome": "success"
  },
  {
    "seq": 251,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB051",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:58.824Z",
    "offsetMs": 310.50437500000044,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "772e41f47cf2d440391bf5f8c086c9f4f1537fac30eb559226384f4fd26551a9";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":248},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":250},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":251}} as const;
export const projectionSha256 = "ddb3ee6e7263ed30d4dd45ec656867685b5c4ed9f9b751ce394fa0e07465c6bb";
