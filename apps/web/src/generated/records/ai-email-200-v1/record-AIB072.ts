import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB072",
  "inputSha256": "ffa985cbf29a065650c8b31fe822f64480ffd5d21a3ce64d77ba59b7300ce3ef",
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
      "end": 34,
      "text": "Approval reminder for open invoice"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 61,
      "text": "Invoice INV-441 remains in the procurement queue for review. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 61,
      "end": 131,
      "text": "Approve it only after checking the purchase order in the usual system."
    }
  ],
  "passA": {
    "requestSha256": "e6b5f2985e3d1207481852c142fe0c893df97942073b4f86377b7db25ec2478e",
    "capturedAt": "2026-09-20T23:43:04.955Z",
    "elapsedMs": 189.65454200000022,
    "successfulAttemptElapsedMs": 188.2278750000005,
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
          "noul": 0.37
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.07
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.18
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.9
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "active_request": 0.96,
            "educational_or_quoted": 0,
            "informational": 0.04
          },
          "confidence": 0.93
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.76,
            "independently_established": 0.24,
            "sender_supplied": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.66
        }
      },
      "usage": {
        "input_tokens": 3289,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "db124b78a715088f0371bbc3ed894bd9f151ad46a8afc62fc1892ad980c7f11d",
    "capturedAt": "2026-09-20T23:43:05.156Z",
    "elapsedMs": 199.67299999999886,
    "successfulAttemptElapsedMs": 198.35900000000038,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.02,
            "NONE": 0.56,
            "body:1": 0.41,
            "body:0": 0.01
          },
          "confidence": 0.42
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0,
            "body:1": 1,
            "body:0": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 917,
        "output_tokens": 114
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 391.8330419999984,
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
        "status": "low_confidence",
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
        "status": "not_requested",
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
    "seq": 351,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB072",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:04.766Z",
    "offsetMs": 0.9084999999977299
  },
  {
    "seq": 352,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB072",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:04.954Z",
    "offsetMs": 189.65449999999691,
    "elapsedMs": 188.2278750000005,
    "outcome": "success"
  },
  {
    "seq": 353,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB072",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:04.957Z",
    "offsetMs": 192.65137499999764
  },
  {
    "seq": 354,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB072",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:05.156Z",
    "offsetMs": 391.61054199999853,
    "elapsedMs": 198.35900000000038,
    "outcome": "success"
  },
  {
    "seq": 355,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB072",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:05.157Z",
    "offsetMs": 391.8849169999994,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "f05ad1c5ac4d441aadde12e696d5cf00eb76c0fdecd0750f747f0b3a9d07f0dd";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":352},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":354},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":355}} as const;
export const projectionSha256 = "62ad70add41875458912988b4defd6bacf8581f71f23a2237be8a626c456244d";
