import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB007",
  "inputSha256": "a655a9673d1a4d7e2d23d105c3272a95c5b1e34b7757bff9b13e62f3a2e6700c",
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
      "text": "Scheduled maintenance this Saturday"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 86,
      "text": "The project tracker will be unavailable from 01:00 to 03:00 Saturday for maintenance. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 86,
      "end": 144,
      "text": "Save unfinished work before the maintenance window begins."
    }
  ],
  "passA": {
    "requestSha256": "0c163deb029ad25ea91b4abd6c153f34e2ea2dfe78358daffc60dd20a957f578",
    "capturedAt": "2026-09-20T23:42:45.651Z",
    "elapsedMs": 121.46575000000007,
    "successfulAttemptElapsedMs": 119.96275000000014,
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
          "noul": 0.64
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.2
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
            "informational": 0.28,
            "active_request": 0.72,
            "educational_or_quoted": 0
          },
          "confidence": 0.61
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 1,
            "mixed_or_unknown": 0,
            "sender_supplied": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3293,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "86c119f02d6f8ce084c6a3b534045133e2b0fd5c864f6b14ef88e9acfcec1242",
    "capturedAt": "2026-09-20T23:42:46.143Z",
    "elapsedMs": 490.3080420000001,
    "successfulAttemptElapsedMs": 489.4557500000001,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.05,
            "body:1": 0.95,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 621,
        "output_tokens": 59
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 613.6055000000001,
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
        "status": "selected",
        "segmentId": "body:1"
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
        "status": "not_requested",
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
    "seq": 31,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB007",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:45.530Z",
    "offsetMs": 0.8695000000000164
  },
  {
    "seq": 32,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB007",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:45.651Z",
    "offsetMs": 121.48137500000007,
    "elapsedMs": 119.96275000000014,
    "outcome": "success"
  },
  {
    "seq": 33,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB007",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:45.653Z",
    "offsetMs": 123.46204199999988
  },
  {
    "seq": 34,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB007",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:46.143Z",
    "offsetMs": 613.349792,
    "elapsedMs": 489.4557500000001,
    "outcome": "success"
  },
  {
    "seq": 35,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB007",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:46.143Z",
    "offsetMs": 613.661208,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6c7edd42b3a3cb71d00acd35dbe88b2015e53884440baf2a8f52bf14284b1778";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":32},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":34},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":35}} as const;
export const projectionSha256 = "52ebd0886b9af1fd3c17a47f601bd41195b2a875d977987c30f09522015299f2";
