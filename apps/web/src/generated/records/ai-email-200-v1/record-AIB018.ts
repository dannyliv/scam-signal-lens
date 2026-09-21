import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB018",
  "inputSha256": "413b7a73ff5bdc4d64078953dfaa8bb191b12f05d535b18b7d74ca7bd66f0a1d",
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
      "text": "New office supply catalog published"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 75,
      "text": "The updated supply catalog is available in the internal purchasing system. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 75,
      "end": 137,
      "text": "Existing approval rules still apply before an order is placed."
    }
  ],
  "passA": {
    "requestSha256": "88bff131471d6cdf224ff3908de2b1dd154933b1e9e2b840f36c778fdf32a4f3",
    "capturedAt": "2026-09-20T23:42:48.814Z",
    "elapsedMs": 124.81612499999937,
    "successfulAttemptElapsedMs": 123.52020799999991,
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
          "noul": 0.02
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.17
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
          "noul": 0.73
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 1,
            "educational_or_quoted": 0,
            "active_request": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "sender_supplied": 0,
            "independently_established": 0.04,
            "no_sensitive_action": 0.96
          },
          "confidence": 0.95
        }
      },
      "usage": {
        "input_tokens": 3284,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "6f3ce6f6cda11d176a902c83213bf71f73e892bbf292bf1f5adb276288e17672",
    "capturedAt": "2026-09-20T23:42:48.963Z",
    "elapsedMs": 146.30100000000039,
    "successfulAttemptElapsedMs": 144.86258399999952,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.87,
            "NONE": 0.09,
            "subject:0": 0,
            "body:1": 0.04
          },
          "confidence": 0.83
        }
      },
      "usage": {
        "input_tokens": 612,
        "output_tokens": 62
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 273.56816700000036,
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
        "segmentId": "body:0"
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
    "seq": 84,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB018",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:48.690Z",
    "offsetMs": 0.7477920000001177
  },
  {
    "seq": 85,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB018",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:48.814Z",
    "offsetMs": 124.81770900000083,
    "elapsedMs": 123.52020799999991,
    "outcome": "success"
  },
  {
    "seq": 86,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB018",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:48.817Z",
    "offsetMs": 127.90179200000057
  },
  {
    "seq": 87,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB018",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:48.963Z",
    "offsetMs": 273.4103750000004,
    "elapsedMs": 144.86258399999952,
    "outcome": "success"
  },
  {
    "seq": 88,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB018",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:48.963Z",
    "offsetMs": 273.6056670000007,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "76431a5feb6e9a22908433a376cdb3510ba66fc5e9c6e63a69b8244338c6f070";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":85},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":87},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":88}} as const;
export const projectionSha256 = "7ad93ed5183e6ca5e5fb5b2e3927898630752b41799149a37e9f7a1671fc5c17";
