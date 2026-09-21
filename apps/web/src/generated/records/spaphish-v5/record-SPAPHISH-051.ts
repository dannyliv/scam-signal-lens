import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-051",
  "inputSha256": "55df54f8030d7708945cbad1a33b49b90ae4c3eb8745e1c5a149af4e8eb0320f",
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
      "end": 215,
      "text": "Por favor actualice sus detalles de pago N E T F L I X No pudimos validar su cuenta Estimada María Lantier, Estamos teniendo algunos problemas con su información de facturación actual. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 215,
      "end": 313,
      "text": "Lo intentaremos de nuevo, pero mientras tanto es posible que desees actualizar tus datos de pago. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 313,
      "end": 634,
      "text": "ACTUALIZAR CUENTA AHORA Información sobre su cuenta: ID de suscripción : 984722619 Producto: Netflix Fecha de caducidad: 13 May 2024 -El equipo de Netflix ⚠️:En caso de desconocimiento, sus servicios quedarán completamente suspendidos dentro de las 24 horas siguientes según los términos definidos en nuestros contratos. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 634,
      "end": 713,
      "text": "Darse de baja Derechos de autor 2024 El anunciante no gestiona su suscripción. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 713,
      "end": 849,
      "text": "Si prefiere no recibir más comunicaciones, anule la suscripción aquí O escriba a: 128 Willow Crest Rd Ste 402#5912, Northwood, VT, 05744"
    }
  ],
  "passA": {
    "requestSha256": "dbb0a54766d97854e92b6ed95a4ee4a8b4ea3fba9a88d448210ae98b1107adbd",
    "capturedAt": "2026-09-20T23:44:07.207Z",
    "elapsedMs": 125.23691700000018,
    "successfulAttemptElapsedMs": 123.74387500000012,
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
          "noul": 0.88
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.6
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
          "noul": 0.54
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.11
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.08
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "educational_or_quoted": 0,
            "active_request": 1,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.01,
            "sender_supplied": 0.97,
            "mixed_or_unknown": 0.02,
            "independently_established": 0
          },
          "confidence": 0.97
        }
      },
      "usage": {
        "input_tokens": 3688,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "b40d406f253eaa0b3cdd1bf80c74402cfb4a142accd1c9929020b3b8645ea301",
    "capturedAt": "2026-09-20T23:44:07.370Z",
    "elapsedMs": 160.84120799999982,
    "successfulAttemptElapsedMs": 159.55179099999987,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "body:1": 0.83,
            "subject:0": 0,
            "body:4": 0,
            "body:2": 0.03,
            "NONE": 0.01,
            "body:3": 0.11,
            "body:5": 0.02
          },
          "confidence": 0.81
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "body:1": 0.68,
            "subject:0": 0,
            "body:4": 0,
            "body:2": 0.03,
            "NONE": 0.17,
            "body:3": 0.1,
            "body:5": 0.02
          },
          "confidence": 0.63
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:0": 0.02,
            "body:1": 0,
            "subject:0": 0.03,
            "body:4": 0,
            "body:2": 0,
            "NONE": 0,
            "body:3": 0.95,
            "body:5": 0
          },
          "confidence": 0.95
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:0": 0,
            "body:1": 0.15,
            "subject:0": 0.01,
            "body:4": 0,
            "body:2": 0.01,
            "NONE": 0.02,
            "body:3": 0.81,
            "body:5": 0
          },
          "confidence": 0.78
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "body:1": 0.04,
            "subject:0": 0,
            "body:4": 0.03,
            "body:2": 0.02,
            "NONE": 0.71,
            "body:3": 0.13,
            "body:5": 0.07
          },
          "confidence": 0.67
        }
      },
      "usage": {
        "input_tokens": 3536,
        "output_tokens": 460
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 289.06187500000124,
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
    "seq": 247,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-051",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:07.082Z",
    "offsetMs": 0.8822499999987485
  },
  {
    "seq": 248,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-051",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:07.207Z",
    "offsetMs": 125.2372919999998,
    "elapsedMs": 123.74387500000012,
    "outcome": "success"
  },
  {
    "seq": 249,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-051",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:07.210Z",
    "offsetMs": 128.56045900000026
  },
  {
    "seq": 250,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-051",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:07.370Z",
    "offsetMs": 288.6795000000002,
    "elapsedMs": 159.55179099999987,
    "outcome": "success"
  },
  {
    "seq": 251,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-051",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:07.371Z",
    "offsetMs": 289.13008399999853,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "013cc9a6870c9ac799bc4f18e8fe507f164e3c08c40b81616f425d500e50f950";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":248},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":250},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":251}} as const;
export const projectionSha256 = "5679c53fb317e8ba3308ef9a179e546ee61023def1218b5e7f75f2cfdcc47b34";
