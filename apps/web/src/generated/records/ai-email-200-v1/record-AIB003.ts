import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB003",
  "inputSha256": "49c000b3a175792addb08714655ae7a7f189fa77a6feb20052c8a68d5f3e1ec3",
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
      "end": 40,
      "text": "Your requested title is ready for pickup"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 79,
      "text": "Your hold is available at the Northside Library service desk until October 14. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 79,
      "end": 148,
      "text": "Bring your library card when you visit; no online action is required."
    }
  ],
  "passA": {
    "requestSha256": "b81c9bc1d0faa9a5987c0e7f4aade6bb803c13efc3cbbbe73212e51dff460ab4",
    "capturedAt": "2026-09-20T23:42:44.574Z",
    "elapsedMs": 121.82737499999996,
    "successfulAttemptElapsedMs": 120.50508300000001,
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
          "noul": 0.04
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
          "noul": 0.57
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.75
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
          "noul": 0.87
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0.34,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 0.66
          },
          "confidence": 0.54
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.95,
            "sender_supplied": 0,
            "mixed_or_unknown": 0,
            "independently_established": 0.05
          },
          "confidence": 0.94
        }
      },
      "usage": {
        "input_tokens": 3295,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "c90ff898b0de840993852799036f59f089687b2ac228033b7852e1683c388c0f",
    "capturedAt": "2026-09-20T23:42:44.727Z",
    "elapsedMs": 150.4546670000001,
    "successfulAttemptElapsedMs": 149.5452499999999,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.94,
            "NONE": 0.06,
            "body:1": 0,
            "subject:0": 0
          },
          "confidence": 0.92
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.63,
            "NONE": 0.2,
            "body:1": 0.13,
            "subject:0": 0.04
          },
          "confidence": 0.51
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0.06,
            "NONE": 0.04,
            "body:1": 0.9,
            "subject:0": 0
          },
          "confidence": 0.87
        }
      },
      "usage": {
        "input_tokens": 1234,
        "output_tokens": 174
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 274.52016600000013,
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
        "segmentId": "body:0"
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
    "seq": 11,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB003",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:44.453Z",
    "offsetMs": 0.7862499999999955
  },
  {
    "seq": 12,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB003",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:44.574Z",
    "offsetMs": 121.83354100000008,
    "elapsedMs": 120.50508300000001,
    "outcome": "success"
  },
  {
    "seq": 13,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB003",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:44.576Z",
    "offsetMs": 124.15966600000002
  },
  {
    "seq": 14,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB003",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:44.726Z",
    "offsetMs": 274.142416,
    "elapsedMs": 149.5452499999999,
    "outcome": "success"
  },
  {
    "seq": 15,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB003",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:44.727Z",
    "offsetMs": 274.5803750000001,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "2c234c5356a3cf5538da4b50fa8c05269e468c1fca949ed38a01fa95ec344c70";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":12},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":14},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":15}} as const;
export const projectionSha256 = "426db46b173d99847c9c16259c78579453652429100ff148a1d5d54898aaf3d7";
