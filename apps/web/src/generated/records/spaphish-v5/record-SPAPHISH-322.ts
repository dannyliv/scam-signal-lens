import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-322",
  "inputSha256": "bd27270f91615271c6fedae97013b8111c8bc5745d2db228edde019e0e72dd14",
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
      "end": 56,
      "text": "Urgente: Missxtranger ¡Tu cuenta de Netflix vencerá hoy!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 30,
      "text": "⚠️¡Su cuenta será suspendida! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 30,
      "end": 216,
      "text": "Por favor actualice sus detalles de pago N E T F L I X No pudimos validar su cuenta Estimada Marisol Ortega, Estamos teniendo algunos problemas con su información de facturación actual. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 216,
      "end": 314,
      "text": "Lo intentaremos de nuevo, pero mientras tanto es posible que desees actualizar tus datos de pago. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 314,
      "end": 635,
      "text": "ACTUALIZAR CUENTA AHORA Información sobre su cuenta: ID de suscripción : 583104972 Producto: Netflix Fecha de caducidad: 06 May 2024 -El equipo de Netflix ⚠️:En caso de desconocimiento, sus servicios quedarán completamente suspendidos dentro de las 24 horas siguientes según los términos definidos en nuestros contratos. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 635,
      "end": 671,
      "text": "Darse de baja Derechos de autor 2024"
    }
  ],
  "passA": {
    "requestSha256": "8320a0f0b9de605799db4329b2fb5092b7362a59c86ae3c948af1cefb5516c13",
    "capturedAt": "2026-09-20T23:45:40.131Z",
    "elapsedMs": 117.69999999999709,
    "successfulAttemptElapsedMs": 115.4542919999949,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.08
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.9
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.57
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.06
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.98
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.94
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.47
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.12
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
          "noul": 0.04
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
            "active_request": 1,
            "mixed_or_unclear": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.02,
            "sender_supplied": 0.95,
            "mixed_or_unknown": 0.03
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 3621,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "fde517ed9b920bcb73ab25b43e88e4dc46e35d18298b81b4a6504f0f114cfac4",
    "capturedAt": "2026-09-20T23:45:40.387Z",
    "elapsedMs": 253.35529200000747,
    "successfulAttemptElapsedMs": 251.2659999999887,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.01,
            "body:2": 0.04,
            "body:4": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:3": 0.16,
            "body:1": 0.79
          },
          "confidence": 0.75
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.15,
            "body:2": 0.05,
            "body:4": 0,
            "body:3": 0.12,
            "body:0": 0,
            "subject:0": 0,
            "body:1": 0.68
          },
          "confidence": 0.63
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "NONE": 0,
            "body:2": 0,
            "body:4": 0,
            "body:3": 0.95,
            "body:0": 0.02,
            "subject:0": 0.03,
            "body:1": 0
          },
          "confidence": 0.93
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "NONE": 0.01,
            "body:2": 0.01,
            "body:4": 0,
            "subject:0": 0.01,
            "body:0": 0,
            "body:3": 0.8,
            "body:1": 0.17
          },
          "confidence": 0.76
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.78,
            "body:2": 0.02,
            "body:4": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:3": 0.17,
            "body:1": 0.03
          },
          "confidence": 0.73
        }
      },
      "usage": {
        "input_tokens": 3064,
        "output_tokens": 415
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 373.4360830000078,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H5"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:1"
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
        "segmentId": "body:3"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:3"
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
      "avoid_sender_route",
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1574,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-322",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:40.015Z",
    "offsetMs": 1.459833000000799
  },
  {
    "seq": 1575,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-322",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:40.131Z",
    "offsetMs": 117.70116700000654,
    "elapsedMs": 115.4542919999949,
    "outcome": "success"
  },
  {
    "seq": 1576,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-322",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:40.134Z",
    "offsetMs": 121.17399999999907
  },
  {
    "seq": 1577,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-322",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:40.386Z",
    "offsetMs": 373.1212920000107,
    "elapsedMs": 251.2659999999887,
    "outcome": "success"
  },
  {
    "seq": 1578,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-322",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:40.387Z",
    "offsetMs": 373.497457999998,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "f9138b66157006e6456233a2f41359844c3c8f19ccf66ef5de754d9a7bda86b8";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1575},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1577},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1578}} as const;
export const projectionSha256 = "0f683295cff690c677a75b41798218a81a2404315720d4bf7e0ed977acde1e59";
