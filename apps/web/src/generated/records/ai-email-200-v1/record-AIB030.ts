import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB030",
  "inputSha256": "fd869ac65af6b289e6ce31e5ccafd2251f93f938292a948442284d8204563b58",
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
      "text": "Visitor entrance temporarily closed"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 93,
      "text": "Use the south entrance for visitors this afternoon while the main entrance door is repaired. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 93,
      "end": 125,
      "text": "Staff badge access is unchanged."
    }
  ],
  "passA": {
    "requestSha256": "4fd56f528e969c89dbbd5f83048a600628f453d08b27b0749c55569be7a81422",
    "capturedAt": "2026-09-20T23:42:52.105Z",
    "elapsedMs": 137.42854199999965,
    "successfulAttemptElapsedMs": 136.0193330000002,
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
          "noul": 0.27
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.36
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
          "noul": 0.15
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0.27,
            "informational": 0.73,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.64
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0,
            "no_sensitive_action": 1,
            "mixed_or_unknown": 0,
            "independently_established": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3282,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "7da1882070a0a2cc878d9f60d78d21fe51055b23644068b3cc8ebfddbbefa528",
    "capturedAt": "2026-09-20T23:42:52.248Z",
    "elapsedMs": 140.29070799999863,
    "successfulAttemptElapsedMs": 138.72779199999968,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0,
            "body:0": 0.43,
            "NONE": 0.56,
            "subject:0": 0.01
          },
          "confidence": 0.41
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.22,
            "body:0": 0.26,
            "NONE": 0.51,
            "subject:0": 0.01
          },
          "confidence": 0.35
        }
      },
      "usage": {
        "input_tokens": 889,
        "output_tokens": 111
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 280.6749999999993,
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
        "status": "low_confidence",
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
    "seq": 143,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB030",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:51.968Z",
    "offsetMs": 0.8856660000001284
  },
  {
    "seq": 144,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB030",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:52.105Z",
    "offsetMs": 137.42879100000027,
    "elapsedMs": 136.0193330000002,
    "outcome": "success"
  },
  {
    "seq": 145,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB030",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:52.109Z",
    "offsetMs": 140.9355830000004
  },
  {
    "seq": 146,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB030",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:52.248Z",
    "offsetMs": 280.31512499999917,
    "elapsedMs": 138.72779199999968,
    "outcome": "success"
  },
  {
    "seq": 147,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB030",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:52.248Z",
    "offsetMs": 280.753999999999,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6f29011d8ca2e1ddfbfaeafca8867dbb5cc4257276ce60db23a6e17d53074782";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":144},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":146},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":147}} as const;
export const projectionSha256 = "f6cbab3bb3c6fc8b86cc6fbf27518c59bccbf4674def1265c20e0d3f8c750e6e";
