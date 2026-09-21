import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB049",
  "inputSha256": "f31af0216d70bb98c83112b2697302679548e2c98c4079e4a0512fd572fdf3e4",
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
      "end": 32,
      "text": "Holiday leave calendar published"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 57,
      "text": "The holiday leave calendar is available on the intranet. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 57,
      "end": 135,
      "text": "Discuss coverage changes with your manager during the normal planning meeting."
    }
  ],
  "passA": {
    "requestSha256": "f4b53a10f8892d75ff6a8e1e2e9225ec7f0e623e496a0204e37b26f570719329",
    "capturedAt": "2026-09-20T23:42:58.132Z",
    "elapsedMs": 135.74874999999884,
    "successfulAttemptElapsedMs": 134.33995799999866,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.01
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
          "noul": 0.05
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.35
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.75
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.45,
            "mixed_or_unclear": 0.01,
            "educational_or_quoted": 0,
            "active_request": 0.54
          },
          "confidence": 0.39
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.02,
            "no_sensitive_action": 0.98,
            "sender_supplied": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.97
        }
      },
      "usage": {
        "input_tokens": 3283,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "7fe1e3b99e03030b047020641042a3341b85e1dad8a39527108af2818e1cf525",
    "capturedAt": "2026-09-20T23:42:58.248Z",
    "elapsedMs": 114.1653750000005,
    "successfulAttemptElapsedMs": 112.87941599999976,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0.01,
            "body:0": 0.02,
            "NONE": 0.17,
            "body:1": 0.8
          },
          "confidence": 0.74
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0.7,
            "NONE": 0.12,
            "body:1": 0.18
          },
          "confidence": 0.59
        }
      },
      "usage": {
        "input_tokens": 901,
        "output_tokens": 118
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 251.89216600000145,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence"
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
        "status": "selected",
        "segmentId": "body:1"
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 237,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB049",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:57.997Z",
    "offsetMs": 0.9075410000004922
  },
  {
    "seq": 238,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB049",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:58.132Z",
    "offsetMs": 135.7495830000007,
    "elapsedMs": 134.33995799999866,
    "outcome": "success"
  },
  {
    "seq": 239,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB049",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:58.135Z",
    "offsetMs": 138.2114160000001
  },
  {
    "seq": 240,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB049",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:58.248Z",
    "offsetMs": 251.66891600000054,
    "elapsedMs": 112.87941599999976,
    "outcome": "success"
  },
  {
    "seq": 241,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB049",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:58.248Z",
    "offsetMs": 251.94516600000134,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "09747ecd33afb6f2ac2f37e95ab9eab0a4e67ce3365144f2eefc1c74da583a74";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":238},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":240},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":241}} as const;
export const projectionSha256 = "7ac4d501b40277c21050e6caef75edb2aabe13e772c41279526e661ec5ab0268";
