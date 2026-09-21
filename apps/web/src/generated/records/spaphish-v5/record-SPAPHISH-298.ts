import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-298",
  "inputSha256": "0a3acda3258c1671a30598bad942ab3d971b7ad19f01da1beaf6b19e77e51b25",
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
      "end": 26,
      "text": "Su paquete ha sido enviado"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 44,
      "text": "Tienes (1) paquete esperando ser entregado. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 44,
      "end": 76,
      "text": "Confirma tu dirección de envío. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 76,
      "end": 98,
      "text": "Programe su entrega >>"
    }
  ],
  "passA": {
    "requestSha256": "938489660c50d037202fb64597a139a96d1132bccb059e5996ff1728fdbc56ca",
    "capturedAt": "2026-09-20T23:45:31.730Z",
    "elapsedMs": 174.39279100000567,
    "successfulAttemptElapsedMs": 172.99800000000687,
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
          "noul": 0.16
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.06
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.3
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.45
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.2
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.07
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
          "noul": 0.06
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
            "sender_supplied": 0.62,
            "mixed_or_unknown": 0.03,
            "independently_established": 0,
            "no_sensitive_action": 0.35
          },
          "confidence": 0.49
        }
      },
      "usage": {
        "input_tokens": 3454,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "b6fcd9398631a4359c540945cac291cff8d953186e9fcefeb25a014017478a9a",
    "capturedAt": "2026-09-20T23:45:31.895Z",
    "elapsedMs": 163.79204200000095,
    "successfulAttemptElapsedMs": 161.8578339999949,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.16,
            "body:0": 0.07,
            "NONE": 0.46,
            "subject:0": 0,
            "body:2": 0.31
          },
          "confidence": 0.32
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.03,
            "body:0": 0.03,
            "NONE": 0.86,
            "subject:0": 0.05,
            "body:2": 0.03
          },
          "confidence": 0.83
        }
      },
      "usage": {
        "input_tokens": 953,
        "output_tokens": 129
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 340.61454100000265,
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
    "seq": 1458,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-298",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:31.556Z",
    "offsetMs": 0.8988749999989523
  },
  {
    "seq": 1459,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-298",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:31.729Z",
    "offsetMs": 174.39262499999313,
    "elapsedMs": 172.99800000000687,
    "outcome": "success"
  },
  {
    "seq": 1460,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-298",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:31.733Z",
    "offsetMs": 177.67674999999872
  },
  {
    "seq": 1461,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-298",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:31.895Z",
    "offsetMs": 340.13370799999393,
    "elapsedMs": 161.8578339999949,
    "outcome": "success"
  },
  {
    "seq": 1462,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-298",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:31.896Z",
    "offsetMs": 340.69504099999904,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "69d03ff6b13630be77d909562f76974a9159d5ab4e388ff6ff40e98959075038";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1459},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1461},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1462}} as const;
export const projectionSha256 = "508ffe1fba441a242ad995a63a91d219dfcd8bde540cfdd7acc97d73c87d9406";
