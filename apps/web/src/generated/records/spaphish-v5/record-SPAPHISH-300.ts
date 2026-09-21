import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-300",
  "inputSha256": "e7becbeb8433d87a64f7d469328bc48e68b706387a88c07bef92ee5b018e6195",
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
      "text": "iCloud ® No se pudo intentar realizar el pago al renovar su Suscripción de almacenamiento en la nube 5 GB 48.9GB /50 GB No pudimos renovar su almacenamiento de iCloud ¡Tus fotos y videos serán eliminados! "
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
      "end": 908,
      "text": "Si no tienes suficiente espacio en iCloud, puedes actualizar el plan de almacenamiento LLENA Detalles del pedido: ID de suscripción : 816509217708 Producto: Espacio iCloud Fecha de caducidad: 01 April 2024 Sin espacio en iCloud, es posible que no pueda almacenar todos sus datos y archivos en el servicio de sincronización de iCloud proporcionado por Apple, que permite a los usuarios almacenar sus datos, como fotos, vídeos, documentos y más, en los servidores de Apple y puede acceder a ellos desde cualquier dispositivo de usuario Actualizar mi pago El equipo de iCloud El Equipo iCloud iCloud es un servicio proporcionado por Apple. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 908,
      "end": 1118,
      "text": "Darse de baja Derechos de autor 2024 El anunciante no gestiona su suscripción Si prefiere no recibir más comunicaciones, anule la suscripción aquí O escriba a: 550 Technology Dr Ste 100#500, Cheyenne, WY, 82001"
    }
  ],
  "passA": {
    "requestSha256": "2308eacce8576a3faf780d8691b58f86515c7d951938086275d2552a9f69d338",
    "capturedAt": "2026-09-20T23:45:32.326Z",
    "elapsedMs": 138.98233400000026,
    "successfulAttemptElapsedMs": 137.12954100000206,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.07
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.81
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.67
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
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.4
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.09
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
          "noul": 0.07
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
            "educational_or_quoted": 0,
            "informational": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.02,
            "no_sensitive_action": 0.01,
            "independently_established": 0,
            "sender_supplied": 0.97
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 3762,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "476d85108892d43e7bd9e97081933925552654596384aa156317a74188cb2172",
    "capturedAt": "2026-09-20T23:45:32.509Z",
    "elapsedMs": 179.8056660000002,
    "successfulAttemptElapsedMs": 177.388374999995,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0.11,
            "subject:0": 0,
            "body:1": 0.88,
            "body:0": 0,
            "body:3": 0,
            "NONE": 0.01
          },
          "confidence": 0.85
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0.42,
            "subject:0": 0,
            "body:1": 0.53,
            "body:0": 0,
            "body:3": 0.01,
            "NONE": 0.04
          },
          "confidence": 0.43
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:2": 0.06,
            "NONE": 0,
            "body:1": 0.22,
            "body:0": 0.3,
            "body:3": 0,
            "subject:0": 0.42
          },
          "confidence": 0.31
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 0.86,
            "body:1": 0.02,
            "NONE": 0.03,
            "body:0": 0.08,
            "body:3": 0.01,
            "subject:0": 0
          },
          "confidence": 0.83
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.02,
            "subject:0": 0,
            "body:1": 0.11,
            "body:0": 0,
            "body:3": 0.06,
            "NONE": 0.81
          },
          "confidence": 0.76
        }
      },
      "usage": {
        "input_tokens": 3840,
        "output_tokens": 370
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 321.60545800000546,
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
    "seq": 1468,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-300",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:32.188Z",
    "offsetMs": 1.3467499999969732
  },
  {
    "seq": 1469,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-300",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:32.326Z",
    "offsetMs": 138.9828750000015,
    "elapsedMs": 137.12954100000206,
    "outcome": "success"
  },
  {
    "seq": 1470,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-300",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:32.330Z",
    "offsetMs": 142.9128330000094
  },
  {
    "seq": 1471,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-300",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:32.508Z",
    "offsetMs": 321.0707079999993,
    "elapsedMs": 177.388374999995,
    "outcome": "success"
  },
  {
    "seq": 1472,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-300",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:32.509Z",
    "offsetMs": 321.71554099999776,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d860773bca0ee365a101ffd3a1cdbc5666ccf54fb77f9903cf57c71716b1f26f";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1469},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1471},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1472}} as const;
export const projectionSha256 = "19ff5cf176956e387d6d7483461503be1b4f47d14ccf91c0b1570f9167ef1164";
