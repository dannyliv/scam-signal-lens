import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIPSEED09",
  "inputSha256": "d29ea9ad9f4810845e691610438fa4065195d77cd24948dc877ac9187130b5cb",
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
      "end": 91,
      "text": "We can guarantee you a remote data-entry position earning $600 a day for one hour of work. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 91,
      "end": 174,
      "text": "To activate your employee account, pay the $85 placement charge in cryptocurrency. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 174,
      "end": 250,
      "text": "This offer closes in an hour; after payment we will share the employer name."
    },
    {
      "id": "userContext:0",
      "source": "userContext",
      "start": 0,
      "end": 41,
      "text": "The recruiter contacted me unexpectedly. "
    },
    {
      "id": "userContext:1",
      "source": "userContext",
      "start": 41,
      "end": 97,
      "text": "I have not applied to this position or been interviewed."
    }
  ],
  "passA": {
    "requestSha256": "5e877b41626a33dff536bd83dbc19a01296d5ec50b417a3c499e91e4b67fc7e0",
    "capturedAt": "2026-09-20T23:43:49.401Z",
    "elapsedMs": 198.40412500000093,
    "successfulAttemptElapsedMs": 196.61562500000582,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.57
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.99
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.97
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.97
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.68
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.57
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.97
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.98
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.02
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "informational": 0,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.01,
            "sender_supplied": 0.98,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 3326,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "23a4b58c33db2d4f7519ad43e94aeb3a00bef82ede4a1f07a1a2da49a00f1768",
    "capturedAt": "2026-09-21T00:56:45.598Z",
    "elapsedMs": 148.74637500000017,
    "successfulAttemptElapsedMs": 147.18795799999998,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.57,
            "NONE": 0.42,
            "body:0": 0,
            "body:2": 0.01
          },
          "confidence": 0.43
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 1,
            "NONE": 0,
            "body:0": 0,
            "body:2": 0
          },
          "confidence": 1
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 1,
            "NONE": 0,
            "body:0": 0,
            "body:2": 0
          },
          "confidence": 1
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:1": 0,
            "NONE": 0,
            "body:0": 0,
            "body:2": 1
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.48,
            "NONE": 0.39,
            "body:0": 0.11,
            "body:2": 0.02
          },
          "confidence": 0.3
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:1": 0.05,
            "NONE": 0.37,
            "body:0": 0,
            "body:2": 0.58
          },
          "confidence": 0.45
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 1,
            "NONE": 0,
            "body:0": 0,
            "body:2": 0
          },
          "confidence": 1
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0,
            "NONE": 0,
            "body:0": 1,
            "body:2": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 2939,
        "output_tokens": 457
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 540.7962919999995,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H2",
      "H3"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "low_confidence",
        "segmentId": null
      },
      "payment_request": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "unusual_payment_routing": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:2"
      },
      "authority_claim": {
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "low_confidence",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "remote_access_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "unrealistic_reward": {
        "status": "selected",
        "segmentId": "body:0"
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
      "avoid_sender_route",
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 966,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED09",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:49.203Z",
    "offsetMs": 1.240709000005154
  },
  {
    "seq": 967,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED09",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:49.400Z",
    "offsetMs": 198.40491700000712,
    "elapsedMs": 196.61562500000582,
    "outcome": "success"
  },
  {
    "seq": 968,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED09",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:49.406Z",
    "offsetMs": 203.87079200000153
  },
  {
    "seq": 969,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED09",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:49.592Z",
    "offsetMs": 390.20025000000896,
    "elapsedMs": 185.69008400000166,
    "outcome": "success"
  },
  {
    "seq": 970,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED09",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:49.592Z",
    "offsetMs": 390.47308399999747,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 1013,
    "captureSessionId": "e25842bf-8fab-457a-8c0a-d76f81eb2d72",
    "exampleId": "AIPSEED09",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:56:45.450Z",
    "offsetMs": 1.9891669999999522
  },
  {
    "seq": 1014,
    "captureSessionId": "e25842bf-8fab-457a-8c0a-d76f81eb2d72",
    "exampleId": "AIPSEED09",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:56:45.598Z",
    "offsetMs": 149.7265,
    "elapsedMs": 147.18795799999998,
    "outcome": "success"
  },
  {
    "seq": 1015,
    "captureSessionId": "e25842bf-8fab-457a-8c0a-d76f81eb2d72",
    "exampleId": "AIPSEED09",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:56:45.598Z",
    "offsetMs": 150.25475000000006,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "81541ce1e249e8df5413ad3c310f26c9424b3c32e488c6c92442ba44f2c4ba52";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":967},"passB":{"captureSessionId":"e25842bf-8fab-457a-8c0a-d76f81eb2d72","seq":1014},"complete":{"captureSessionId":"e25842bf-8fab-457a-8c0a-d76f81eb2d72","seq":1015}} as const;
export const projectionSha256 = "266e37fb913d8c23fbf3779645933637cf95a67056c230868df3b64bd12539e2";
