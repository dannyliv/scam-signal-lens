import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB062",
  "inputSha256": "2a4bf20c078c959921df6ff01362f9f85b7c880763f8f4bf4b52bc7555714a14",
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
      "end": 28,
      "text": "Shared photo archive updated"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 58,
      "text": "The project photo archive now includes last week's event. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 58,
      "end": 108,
      "text": "Add captions in the shared folder if you attended."
    }
  ],
  "passA": {
    "requestSha256": "5dfe22d14ed8f50d8c08286bcc3e562cb0572a8246683d350f7fe9f5126d6f2a",
    "capturedAt": "2026-09-20T23:43:02.091Z",
    "elapsedMs": 195.85041699999783,
    "successfulAttemptElapsedMs": 194.32837500000096,
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
          "noul": 0.01
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.1
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.24
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
          "noul": 0.26
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 0.02,
            "mixed_or_unclear": 0,
            "active_request": 0.98
          },
          "confidence": 0.96
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "independently_established": 0.03,
            "no_sensitive_action": 0.97,
            "sender_supplied": 0
          },
          "confidence": 0.95
        }
      },
      "usage": {
        "input_tokens": 3281,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "bbd82494c73d4ece060700acda1b1beac62df746dab0e78201149c1606e3cc8c",
    "capturedAt": "2026-09-20T23:43:02.194Z",
    "elapsedMs": 100.41820899999948,
    "successfulAttemptElapsedMs": 98.83183300000019,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.25,
            "NONE": 0.65,
            "subject:0": 0.01,
            "body:0": 0.09
          },
          "confidence": 0.53
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.38,
            "NONE": 0.6,
            "subject:0": 0.01,
            "body:0": 0.01
          },
          "confidence": 0.47
        }
      },
      "usage": {
        "input_tokens": 895,
        "output_tokens": 114
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 299.19258400000035,
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
    "seq": 301,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB062",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:01.896Z",
    "offsetMs": 0.9320420000003651
  },
  {
    "seq": 302,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB062",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:02.091Z",
    "offsetMs": 195.85020900000018,
    "elapsedMs": 194.32837500000096,
    "outcome": "success"
  },
  {
    "seq": 303,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB062",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:02.095Z",
    "offsetMs": 199.38808400000198
  },
  {
    "seq": 304,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB062",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:02.194Z",
    "offsetMs": 298.8608750000021,
    "elapsedMs": 98.83183300000019,
    "outcome": "success"
  },
  {
    "seq": 305,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB062",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:02.195Z",
    "offsetMs": 299.26929200000086,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6d5bba025c822af6051b4baede28a57288d9b8e9bc62d5a2415fe9814b65e884";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":302},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":304},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":305}} as const;
export const projectionSha256 = "2c4e7b2b2e3391a217b4290f0e530617fc1a3ad12ed5687c66e9287b452ba83a";
