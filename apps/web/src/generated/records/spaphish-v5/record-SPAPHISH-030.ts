import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-030",
  "inputSha256": "3d281744d4759d3c6314da1e653cd1df4c06e595879d6eba49189252645fda47",
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
      "end": 907,
      "text": "Si no tienes suficiente espacio en iCloud, puedes actualizar el plan de almacenamiento LLENA Detalles del pedido: ID de suscripción : 9125048 Producto: Espacio iCloud Fecha de caducidad: 09 September 2024 Sin espacio en iCloud, es posible que no pueda almacenar todos sus datos y archivos en el servicio de sincronización de iCloud proporcionado por Apple, que permite a los usuarios almacenar sus datos, como fotos, vídeos, documentos y más, en los servidores de Apple y puede acceder a ellos desde cualquier dispositivo de usuario Actualizar mi pago El equipo de iCloud El Equipo iCloud iCloud es un servicio proporcionado por Apple. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 907,
      "end": 1118,
      "text": "Darse de baja Derechos de autor 2023 El anunciante no gestiona su suscripción Si prefiere no recibir más comunicaciones, anule la suscripción aquí O escriba a: 219 Westbridge St Ste 402#1198, Lakeview, IL, 62841"
    }
  ],
  "passA": {
    "requestSha256": "5924945714172e9e34d870adbb11dbbfb39d5c1c632848b23822f2243ad130ba",
    "capturedAt": "2026-09-20T23:44:01.068Z",
    "elapsedMs": 280.00533299999915,
    "successfulAttemptElapsedMs": 278.5014169999995,
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
          "noul": 0.69
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
          "noul": 0.07
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
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
            "mixed_or_unknown": 0.03,
            "sender_supplied": 0.96,
            "independently_established": 0,
            "no_sensitive_action": 0.01
          },
          "confidence": 0.95
        }
      },
      "usage": {
        "input_tokens": 3762,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "3e4f026bedd61eb1855e4591f95d3d042e709df3cc645a2fe5fc7ea0df24c199",
    "capturedAt": "2026-09-20T23:44:01.254Z",
    "elapsedMs": 185.95116700000108,
    "successfulAttemptElapsedMs": 185.42162500000086,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.02,
            "body:0": 0,
            "body:2": 0.11,
            "body:3": 0,
            "subject:0": 0,
            "body:1": 0.87
          },
          "confidence": 0.85
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.03,
            "body:3": 0,
            "body:2": 0.41,
            "subject:0": 0,
            "body:0": 0,
            "body:1": 0.56
          },
          "confidence": 0.45
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0,
            "body:3": 0,
            "body:2": 0.04,
            "subject:0": 0.34,
            "body:0": 0.38,
            "body:1": 0.24
          },
          "confidence": 0.24
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "NONE": 0.03,
            "body:3": 0.01,
            "body:2": 0.87,
            "subject:0": 0,
            "body:0": 0.07,
            "body:1": 0.02
          },
          "confidence": 0.85
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.87,
            "body:0": 0,
            "subject:0": 0,
            "body:3": 0.03,
            "body:2": 0.02,
            "body:1": 0.08
          },
          "confidence": 0.84
        }
      },
      "usage": {
        "input_tokens": 3840,
        "output_tokens": 370
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 466.8491670000003,
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
    "seq": 144,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-030",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:00.788Z",
    "offsetMs": 0.9705419999991136
  },
  {
    "seq": 145,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-030",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:01.067Z",
    "offsetMs": 280.0109169999996,
    "elapsedMs": 278.5014169999995,
    "outcome": "success"
  },
  {
    "seq": 146,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-030",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:01.068Z",
    "offsetMs": 280.95037500000035
  },
  {
    "seq": 147,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-030",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:01.254Z",
    "offsetMs": 466.59279199999946,
    "elapsedMs": 185.42162500000086,
    "outcome": "success"
  },
  {
    "seq": 148,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-030",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:01.254Z",
    "offsetMs": 466.8949169999996,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "233a2ac436d012f3fdfb44231cc674ca8a265422906045e18ebf90d10d9022ad";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":145},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":147},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":148}} as const;
export const projectionSha256 = "97c3f8cf5af0cd0d06eb12db2d32d33339999b21c2d211672a21a061848a38f4";
