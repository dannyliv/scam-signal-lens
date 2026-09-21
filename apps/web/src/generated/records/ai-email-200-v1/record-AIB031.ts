import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB031",
  "inputSha256": "4516dc596ad362a35ff2632bad907940c8b38a8823a2da7037473c29fd0b1f83",
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
      "end": 26,
      "text": "How account recovery works"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 74,
      "text": "If you lose access to your account, start recovery from the sign in page. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 74,
      "end": 144,
      "text": "Support will never ask you to read a verification code over the phone."
    }
  ],
  "passA": {
    "requestSha256": "614a912c947bc45946089ed4e05f3b758a76d9ac705ae40ec93b6c06e492c412",
    "capturedAt": "2026-09-20T23:42:52.380Z",
    "elapsedMs": 128.44774999999936,
    "successfulAttemptElapsedMs": 126.76466699999946,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.6
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.46
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.06
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0.06,
            "informational": 0.93,
            "active_request": 0.01
          },
          "confidence": 0.91
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.06,
            "no_sensitive_action": 0.9400000000000001,
            "sender_supplied": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.91
        }
      },
      "usage": {
        "input_tokens": 3290,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "fbf3a7fa8e9ee1952c67b7184e0548533eded0b5cd45000e186257ac45e232cf",
    "capturedAt": "2026-09-20T23:42:52.594Z",
    "elapsedMs": 212.7467919999999,
    "successfulAttemptElapsedMs": 211.24166699999842,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.77,
            "subject:0": 0,
            "body:0": 0.01,
            "body:1": 0.22
          },
          "confidence": 0.68
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.43,
            "subject:0": 0,
            "body:0": 0.55,
            "body:1": 0.02
          },
          "confidence": 0.4
        }
      },
      "usage": {
        "input_tokens": 922,
        "output_tokens": 116
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 342.9369999999999,
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
        "status": "low_confidence",
        "segmentId": null
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
    "seq": 148,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB031",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:52.252Z",
    "offsetMs": 1.0967080000009446
  },
  {
    "seq": 149,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB031",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:52.380Z",
    "offsetMs": 128.45100000000093,
    "elapsedMs": 126.76466699999946,
    "outcome": "success"
  },
  {
    "seq": 150,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB031",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:52.382Z",
    "offsetMs": 130.81187500000124
  },
  {
    "seq": 151,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB031",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:52.594Z",
    "offsetMs": 342.6537500000013,
    "elapsedMs": 211.24166699999842,
    "outcome": "success"
  },
  {
    "seq": 152,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB031",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:52.594Z",
    "offsetMs": 343.0141249999997,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "c8faa52ae76b02c66b8b6ef3e3f3e2d602ad69b41c4b2260ac8a9088ea707187";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":149},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":151},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":152}} as const;
export const projectionSha256 = "c032e00b9f20bdb36902a0de9089f233e9895b9dfdfb11158d74ffb9dd3e3623";
