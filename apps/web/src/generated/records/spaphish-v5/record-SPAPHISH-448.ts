import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-448",
  "inputSha256": "3f6d2dbb3d4b3b7f63f9db95ec319d30dd58e49c347487dd18567a1db61b09cd",
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
      "end": 59,
      "text": "Pancracio, ¡No Te Lo Pierdas: Grandes Recompensas Terminan!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 66,
      "text": "Pablito, Pedido #486837004-13 Confirmado Click above to show image"
    }
  ],
  "passA": {
    "requestSha256": "fa21792bbd709ac32aeea4fbe8abc316696f963917b0d7652caf7135ba6cee7a",
    "capturedAt": "2026-09-20T23:46:22.631Z",
    "elapsedMs": 209.69229199999245,
    "successfulAttemptElapsedMs": 207.38625000001048,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.04
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.09
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.13
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.81
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.25
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.21
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.14
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.17
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.06
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
            "informational": 0.06,
            "mixed_or_unclear": 0.01,
            "active_request": 0.93
          },
          "confidence": 0.9
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.16,
            "mixed_or_unknown": 0.03,
            "no_sensitive_action": 0.81
          },
          "confidence": 0.75
        }
      },
      "usage": {
        "input_tokens": 3469,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "248260f6eb8adc8bda47230219745c2955dcdda3b27c26a907040dcc2c20fc3c",
    "capturedAt": "2026-09-20T23:46:22.742Z",
    "elapsedMs": 109.45712500001537,
    "successfulAttemptElapsedMs": 107.24795900000026,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:0": 0,
            "subject:0": 1,
            "NONE": 0
          },
          "confidence": 0.99
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.32,
            "subject:0": 0.01,
            "NONE": 0.67
          },
          "confidence": 0.51
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.06,
            "subject:0": 0.02,
            "NONE": 0.92
          },
          "confidence": 0.87
        }
      },
      "usage": {
        "input_tokens": 1248,
        "output_tokens": 142
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 321.28162500000326,
  "derived": {
    "concern": "verify_first",
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
        "status": "selected",
        "segmentId": "subject:0"
      },
      "authority_claim": {
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "none_selected",
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
    "seq": 2200,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-448",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:22.423Z",
    "offsetMs": 1.7960840000014286
  },
  {
    "seq": 2201,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-448",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:22.630Z",
    "offsetMs": 209.69324999998207,
    "elapsedMs": 207.38625000001048,
    "outcome": "success"
  },
  {
    "seq": 2202,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-448",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:22.634Z",
    "offsetMs": 213.1826669999864
  },
  {
    "seq": 2203,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-448",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:22.742Z",
    "offsetMs": 320.96662500000093,
    "elapsedMs": 107.24795900000026,
    "outcome": "success"
  },
  {
    "seq": 2204,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-448",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:22.742Z",
    "offsetMs": 321.3651249999821,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "2e3ee9e59bc302b3c56e9be3606135b66bde965ceb4c657e2e2e9b8bdd946907";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2201},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2203},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2204}} as const;
export const projectionSha256 = "83aa507694aeb8ad90f288206620f0e7113cbc4da26ee804201d2c0b756a745b";
