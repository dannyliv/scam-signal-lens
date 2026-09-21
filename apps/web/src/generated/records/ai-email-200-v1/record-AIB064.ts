import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB064",
  "inputSha256": "08090427636ce3fe2919ae65823a3fa3e740b23647f6126f1b4767ecb9b2db10",
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
      "end": 25,
      "text": "Estimate ready for review"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 52,
      "text": "The repair estimate is ready in the service portal. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 52,
      "end": 122,
      "text": "You can approve, decline, or ask a question there at your convenience."
    }
  ],
  "passA": {
    "requestSha256": "f30c3b4f3fa800a828c20776b7ca510e28464a762a8cb23a946bc0724b8b50a0",
    "capturedAt": "2026-09-20T23:43:02.636Z",
    "elapsedMs": 188.82866600000125,
    "successfulAttemptElapsedMs": 187.33620800000062,
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
          "noul": 0.07
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.28
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
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.7
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 0.61,
            "mixed_or_unclear": 0,
            "informational": 0.39
          },
          "confidence": 0.48
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.25,
            "sender_supplied": 0.05,
            "no_sensitive_action": 0.68,
            "mixed_or_unknown": 0.02
          },
          "confidence": 0.58
        }
      },
      "usage": {
        "input_tokens": 3286,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "a06de5d259d1a81c20f07aa437b1336559b96ff0c0c90f312f6022a38f935ef9",
    "capturedAt": "2026-09-20T23:43:02.767Z",
    "elapsedMs": 127.57837500000096,
    "successfulAttemptElapsedMs": 125.92741699999897,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.1,
            "body:0": 0.13,
            "NONE": 0.76,
            "subject:0": 0.01
          },
          "confidence": 0.69
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.42,
            "body:0": 0.5,
            "NONE": 0.08,
            "subject:0": 0
          },
          "confidence": 0.34
        }
      },
      "usage": {
        "input_tokens": 910,
        "output_tokens": 116
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 319.6852089999993,
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 311,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB064",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:02.448Z",
    "offsetMs": 0.930000000000291
  },
  {
    "seq": 312,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB064",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:02.636Z",
    "offsetMs": 188.82800000000134,
    "elapsedMs": 187.33620800000062,
    "outcome": "success"
  },
  {
    "seq": 313,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB064",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:02.640Z",
    "offsetMs": 192.82066699999996
  },
  {
    "seq": 314,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB064",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:02.767Z",
    "offsetMs": 319.47554200000013,
    "elapsedMs": 125.92741699999897,
    "outcome": "success"
  },
  {
    "seq": 315,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB064",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:02.767Z",
    "offsetMs": 319.7358749999985,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1b4273a8581cadabd8060feebc5f5a7364bd46f20744264349b6d5db490f5672";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":312},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":314},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":315}} as const;
export const projectionSha256 = "d8703364eadb263abfe57add9b18a7a983f29db50d4bec44e7508e4e7b96b907";
