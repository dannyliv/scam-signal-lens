import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIBSEED02",
  "inputSha256": "fb42dc69e19a9a8012eb239d6f346cd6cb314d26020cb815b3cb6703f55845a3",
  "questionBundleSha256": "e8f1e66cf768b6c7314f1f4b6ad6fe743f7e945c487259b6087353d93f311dd6",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "synthetic_sanitized",
  "policySha256": "3435135d6058476d4262ecbc936abf95af4993b455dfab35adc8b17f3fe6ad6a",
  "requestedModel": "jev-1.13.0",
  "segments": [
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 41,
      "text": "Harbor Bank: A new sign-in was recorded. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 41,
      "end": 136,
      "text": "Open the bank app yourself to review recent activity, or call the number printed on your card. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 136,
      "end": 207,
      "text": "We will not ask you to send a password or verification code in a reply."
    },
    {
      "id": "userContext:0",
      "source": "userContext",
      "start": 0,
      "end": 30,
      "text": "I have a Harbor Bank account. "
    },
    {
      "id": "userContext:1",
      "source": "userContext",
      "start": 30,
      "end": 85,
      "text": "I have not independently checked the sign-in alert yet."
    }
  ],
  "passA": {
    "requestSha256": "467f11f745eb445a69a7cff32ff7466e9733f05e1f61aa3981ae4807c5d8393c",
    "capturedAt": "2026-09-20T23:43:11.885Z",
    "elapsedMs": 131.8964580000029,
    "successfulAttemptElapsedMs": 130.78316600000107,
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
          "noul": 0.04
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
          "noul": 0.11
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.86
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
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.97
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.34,
            "mixed_or_unclear": 0,
            "active_request": 0.66,
            "educational_or_quoted": 0
          },
          "confidence": 0.54
        },
        "request_route": {
          "type": "choice",
          "choice": "independently_established",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.28,
            "sender_supplied": 0,
            "independently_established": 0.72
          },
          "confidence": 0.62
        }
      },
      "usage": {
        "input_tokens": 3319,
        "output_tokens": 353
      }
    }
  },
  "passB": {
    "requestSha256": "eb0ce52fb5674be04852017284e5f88f07c5f126ca888815de4d30c5f9f1c895",
    "capturedAt": "2026-09-20T23:43:12.023Z",
    "elapsedMs": 135.6919170000001,
    "successfulAttemptElapsedMs": 134.12854199999856,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.14,
            "body:0": 0.73,
            "body:2": 0.01,
            "body:1": 0.12
          },
          "confidence": 0.63
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0,
            "body:0": 0,
            "body:2": 0,
            "body:1": 1
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 977,
        "output_tokens": 118
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 269.744999999999,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence",
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
    "seq": 440,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED02",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:11.754Z",
    "offsetMs": 0.6609169999974256
  },
  {
    "seq": 441,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED02",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:11.885Z",
    "offsetMs": 131.89658399999826,
    "elapsedMs": 130.78316600000107,
    "outcome": "success"
  },
  {
    "seq": 442,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED02",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:11.888Z",
    "offsetMs": 134.76929199999722
  },
  {
    "seq": 443,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED02",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:12.023Z",
    "offsetMs": 269.53199999999924,
    "elapsedMs": 134.12854199999856,
    "outcome": "success"
  },
  {
    "seq": 444,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED02",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:12.023Z",
    "offsetMs": 269.79862499999945,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "3dfeb778b17d7b997b1695c02478d8fbebaa2171f931273b0f0f50e113c7883a";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":441},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":443},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":444}} as const;
export const projectionSha256 = "021a6018b06c31e8b2d25afa96e0520690643dddddbd934b00572941ac2fe7d7";
