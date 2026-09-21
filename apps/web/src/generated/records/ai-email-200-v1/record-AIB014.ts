import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB014",
  "inputSha256": "e13fd0ccf90e59a08cc377f770331ff4dd7ce3040b50fb3d523e1dd730a3f06a",
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
      "end": 31,
      "text": "Receipt for your annual renewal"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 73,
      "text": "Your annual membership renewed using the payment method already on file. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 73,
      "end": 122,
      "text": "The receipt is available in your account history."
    }
  ],
  "passA": {
    "requestSha256": "b8888b94c5f61d0960b0b8e499f24d1f48d607cc3ba339e313c2fe2ca739e716",
    "capturedAt": "2026-09-20T23:42:47.973Z",
    "elapsedMs": 168.42870800000037,
    "successfulAttemptElapsedMs": 167.11912500000017,
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
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.36
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.84
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "informational": 1,
            "active_request": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.94,
            "sender_supplied": 0,
            "mixed_or_unknown": 0,
            "independently_established": 0.06
          },
          "confidence": 0.91
        }
      },
      "usage": {
        "input_tokens": 3282,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "671214632b4226e8c43cf62207e4fd8db1ca4be1143abfe7c5c9e0904eb61a15",
    "capturedAt": "2026-09-20T23:42:48.069Z",
    "elapsedMs": 93.62266700000055,
    "successfulAttemptElapsedMs": 92.25600000000031,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.01,
            "body:0": 0.02,
            "NONE": 0.96,
            "subject:0": 0.01
          },
          "confidence": 0.94
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.97,
            "body:0": 0.01,
            "NONE": 0.02,
            "subject:0": 0
          },
          "confidence": 0.97
        }
      },
      "usage": {
        "input_tokens": 898,
        "output_tokens": 116
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 264.55095900000015,
  "derived": {
    "concern": "few_warning_signs",
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
        "status": "not_requested",
        "segmentId": null
      },
      "authority_claim": {
        "status": "none_selected",
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
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 66,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB014",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:47.805Z",
    "offsetMs": 0.745958999999857
  },
  {
    "seq": 67,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB014",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:47.973Z",
    "offsetMs": 168.43016700000044,
    "elapsedMs": 167.11912500000017,
    "outcome": "success"
  },
  {
    "seq": 68,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB014",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:47.976Z",
    "offsetMs": 171.4820840000002
  },
  {
    "seq": 69,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB014",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:48.069Z",
    "offsetMs": 264.377125,
    "elapsedMs": 92.25600000000031,
    "outcome": "success"
  },
  {
    "seq": 70,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB014",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:48.069Z",
    "offsetMs": 264.5954590000001,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "89a341d6faeac08c4f93a6ae93b2759c4c2eca8d7f9844da13d5d25450a76eb3";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":67},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":69},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":70}} as const;
export const projectionSha256 = "02c95e7cda568d5eae6dac86d0a5562a2942bf0e5933f77868c61116a59226ac";
