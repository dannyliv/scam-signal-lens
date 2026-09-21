import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-005",
  "inputSha256": "d416149b785426e55f2a7c0cd9df3ba5431240669d4fec4dff65e11475115306",
  "questionBundleSha256": "c38d45be636041965e7e231cffdf2831ec083c7780ea13a94086fdf24bf7bc08",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "source_messages",
  "policySha256": "3435135d6058476d4262ecbc936abf95af4993b455dfab35adc8b17f3fe6ad6a",
  "requestedModel": "jev-1.13.0",
  "segments": [
    {
      "id": "subject:0",
      "source": "subject",
      "start": 0,
      "end": 37,
      "text": "Se requiere renovación de suscripción"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 47,
      "text": "Francisco: Tus fotos y videos seran eliminados!"
    }
  ],
  "passA": {
    "requestSha256": "3b24d6b9fd3f6d70ae738613a1529dc659692c559e45a16ec337ea1b86b8865d",
    "capturedAt": "2026-09-20T23:43:52.695Z",
    "elapsedMs": 136.3416249999998,
    "successfulAttemptElapsedMs": 134.69833399999993,
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
          "noul": 0.09
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.39
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.91
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.18
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.15
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.1
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0.02,
            "informational": 0.35,
            "educational_or_quoted": 0,
            "active_request": 0.63
          },
          "confidence": 0.51
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.98,
            "independently_established": 0,
            "sender_supplied": 0.01,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.97
        }
      },
      "usage": {
        "input_tokens": 3445,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "214ff30763876796e859151053c0e11920831661cc4f428c77594cc680112642",
    "capturedAt": "2026-09-20T23:43:52.811Z",
    "elapsedMs": 114.19333299999994,
    "successfulAttemptElapsedMs": 112.86550000000011,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.55,
            "subject:0": 0.44,
            "body:0": 0.01
          },
          "confidence": 0.33
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.01,
            "subject:0": 0.1,
            "body:0": 0.89
          },
          "confidence": 0.83
        }
      },
      "usage": {
        "input_tokens": 868,
        "output_tokens": 93
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 253.07062500000006,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 21,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-005",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:52.559Z",
    "offsetMs": 0.9689160000000356
  },
  {
    "seq": 22,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-005",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:52.694Z",
    "offsetMs": 136.36474999999996,
    "elapsedMs": 134.69833399999993,
    "outcome": "success"
  },
  {
    "seq": 23,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-005",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:52.697Z",
    "offsetMs": 139.13991600000008
  },
  {
    "seq": 24,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-005",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:52.811Z",
    "offsetMs": 252.67641600000002,
    "elapsedMs": 112.86550000000011,
    "outcome": "success"
  },
  {
    "seq": 25,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-005",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:52.811Z",
    "offsetMs": 253.13183300000014,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "c496732487460b620739948343087d1bebefc0c09399e7865a386342a1086bcb";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":22},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":24},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":25}} as const;
export const projectionSha256 = "09fef69249a0056a961a91faaa171b9e3005e79ace21ed822af510386a72d071";
