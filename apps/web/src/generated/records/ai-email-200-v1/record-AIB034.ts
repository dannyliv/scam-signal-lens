import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB034",
  "inputSha256": "0c4ca72307d46ee6cf0f4e539c59bdf2e79b5e3c1fb60ecee4c3264c852cee5d",
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
      "text": "Invitation: design review at 11:00"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 58,
      "text": "You have been invited to a design review at 11:00 Friday. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 58,
      "end": 118,
      "text": "Accept or decline from the calendar service you already use."
    }
  ],
  "passA": {
    "requestSha256": "435a3d605a1f59e94d0edc57fb81631f79cf7b13e21368b460599157933769df",
    "capturedAt": "2026-09-20T23:42:53.300Z",
    "elapsedMs": 108.75429199999962,
    "successfulAttemptElapsedMs": 107.30933299999924,
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
          "noul": 0.27
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.16
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.79
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 0.99,
            "informational": 0.01
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.74,
            "sender_supplied": 0,
            "independently_established": 0.26
          },
          "confidence": 0.64
        }
      },
      "usage": {
        "input_tokens": 3297,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "1c1ef6da8b4a819163edbd33e83844af9cc7d558d5f0ac523c188070ebd77cd5",
    "capturedAt": "2026-09-20T23:42:53.428Z",
    "elapsedMs": 126.03149999999914,
    "successfulAttemptElapsedMs": 123.90495800000099,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.01,
            "body:1": 0.33,
            "subject:0": 0.01,
            "NONE": 0.65
          },
          "confidence": 0.53
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "body:1": 1,
            "subject:0": 0,
            "NONE": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 937,
        "output_tokens": 116
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 237.2665420000012,
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
        "status": "low_confidence",
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 163,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB034",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:53.192Z",
    "offsetMs": 0.9209590000009484
  },
  {
    "seq": 164,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB034",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:53.300Z",
    "offsetMs": 108.75470900000073,
    "elapsedMs": 107.30933299999924,
    "outcome": "success"
  },
  {
    "seq": 165,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB034",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:53.304Z",
    "offsetMs": 112.54541700000118
  },
  {
    "seq": 166,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB034",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:53.428Z",
    "offsetMs": 237.03691700000127,
    "elapsedMs": 123.90495800000099,
    "outcome": "success"
  },
  {
    "seq": 167,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB034",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:53.429Z",
    "offsetMs": 237.31195900000057,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "082df6414c725b0980094325f04949d44cc9c3a472716531675b695bd0b228e4";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":164},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":166},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":167}} as const;
export const projectionSha256 = "f4bf39382c1b7d6a33731d2de6eb518362f90c269e3e50becfa2d1b74ee4f1ce";
