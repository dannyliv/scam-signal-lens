import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-039",
  "inputSha256": "311ead4e7df2d029ed23a6d9a4b88c80da95d7c00d2e4695f61b8a6d3f2d68c8",
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
      "end": 47,
      "text": "ÚLTIMA ALERTA: ¡TODAS TUS FOTOS SERÁN BORRADAS!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 205,
      "text": "iCloud ® No se pudo intentar realizar el pago al renovar su Suscripción de almacenamiento en la nube 0 GB 48.9GB /50 GB No pudimos renovar su almacenamiento de iCloud ¡Tus fotos y videos serán eliminados! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 205,
      "end": 271,
      "text": "Tu método de pago ha caducado: ¡Actualiza tu información de pago! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 271,
      "end": 906,
      "text": "Si no tienes suficiente espacio en iCloud, puedes actualizar el plan de almacenamiento LLENA Detalles del pedido: ID de suscripción : 5543219 Producto: Espacio iCloud Fecha de caducidad: 21 February 2024 Sin espacio en iCloud, es posible que no pueda almacenar todos sus datos y archivos en el servicio de sincronización de iCloud proporcionado por Apple, que permite a los usuarios almacenar sus datos, como fotos, vídeos, documentos y más, en los servidores de Apple y puede acceder a ellos desde cualquier dispositivo de usuario Actualizar mi pago El equipo de iCloud El Equipo iCloud iCloud es un servicio proporcionado por Apple. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 906,
      "end": 1115,
      "text": "Darse de baja Derechos de autor 2023 El anunciante no gestiona su suscripción Si prefiere no recibir más comunicaciones, anule la suscripción aquí O escriba a: 12 Calle Falsa Piso 3#1020, Villa Nube, ZX, 99999"
    }
  ],
  "passA": {
    "requestSha256": "c1d1d873eb19b44b38e7112ee338e840b84053a4dbb7cca5231f3e644117b45e",
    "capturedAt": "2026-09-20T23:44:03.959Z",
    "elapsedMs": 140.59083400000054,
    "successfulAttemptElapsedMs": 139.2117500000004,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.06
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.82
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.73
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.95
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.93
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.41
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.09
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
            "mixed_or_unclear": 0,
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.02,
            "independently_established": 0,
            "no_sensitive_action": 0.01,
            "sender_supplied": 0.97
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 3756,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "f8b441d0361a4d63b29c48a7d1c14ac55b63a05af8c71e4779d73f1349b0c493",
    "capturedAt": "2026-09-20T23:44:04.084Z",
    "elapsedMs": 123.2080420000002,
    "successfulAttemptElapsedMs": 122.21949999999924,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.01,
            "body:2": 0.09,
            "body:3": 0,
            "body:0": 0,
            "body:1": 0.9,
            "subject:0": 0
          },
          "confidence": 0.87
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0.4,
            "NONE": 0.02,
            "subject:0": 0,
            "body:3": 0,
            "body:1": 0.58,
            "body:0": 0
          },
          "confidence": 0.48
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "NONE": 0,
            "body:2": 0.05,
            "subject:0": 0.48,
            "body:3": 0,
            "body:1": 0.23,
            "body:0": 0.24
          },
          "confidence": 0.37
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 0.85,
            "NONE": 0.03,
            "body:0": 0.1,
            "subject:0": 0,
            "body:1": 0.01,
            "body:3": 0.01
          },
          "confidence": 0.82
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.02,
            "NONE": 0.83,
            "body:3": 0.08,
            "body:0": 0,
            "body:1": 0.07,
            "subject:0": 0
          },
          "confidence": 0.78
        }
      },
      "usage": {
        "input_tokens": 3804,
        "output_tokens": 370
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 265.5379589999993,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:2"
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
    "seq": 188,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-039",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:03.819Z",
    "offsetMs": 0.8387499999989814
  },
  {
    "seq": 189,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-039",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:03.959Z",
    "offsetMs": 140.5936669999992,
    "elapsedMs": 139.2117500000004,
    "outcome": "success"
  },
  {
    "seq": 190,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-039",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:03.961Z",
    "offsetMs": 142.43508399999882
  },
  {
    "seq": 191,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-039",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:04.083Z",
    "offsetMs": 265.1124170000003,
    "elapsedMs": 122.21949999999924,
    "outcome": "success"
  },
  {
    "seq": 192,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-039",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:04.084Z",
    "offsetMs": 265.6239999999998,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "dfb325731f01bd1180291285b4845d5f6db757fee1367fffea532f451a3ed519";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":189},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":191},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":192}} as const;
export const projectionSha256 = "43707008129680745d0dfd433d8213085772d15da2269b810c84e8e67c308cb2";
