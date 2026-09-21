import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-454",
  "inputSha256": "468314b8ba42b91439738837b78746bb4208ed189ed27bfb481cf890bdafb8d5",
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
      "end": 218,
      "text": "iCloud ® Intento de pago para la renovación de la suscripción de almacenamiento en la Nube fallido 0 GB 48.9GB /50 GB No pudimos renovar tu suscripción de almacenamiento en iCloud ¡Tus fotos y videos serán eliminados! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 218,
      "end": 295,
      "text": "Tu método de pago ha expirado: ¡Por favor, actualiza tu información de pago! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 295,
      "end": 850,
      "text": "Si no tienes suficiente espacio de almacenamiento en iCloud, puedes actualizar tu suscripción COMPLETAR Detalles del pedido: ID de Suscripción: 9988776655443 Producto: Almacenamiento en iCloud Fecha de expiración: 17 November 2024 Sin espacio de almacenamiento en iCloud, es posible que no puedas guardar todos tus datos y archivos en el servicio de sincronización iCloud proporcionado por Apple, que permite a los usuarios almacenar sus datos como fotos, videos, documentos y más en los servidores de Apple y acceder a ellos desde cualquier dispositivo. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 850,
      "end": 939,
      "text": "Actualizar pago El equipo de iCloud El equipo de iCloud, iCloud es un servicio de Apple. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 939,
      "end": 1016,
      "text": "Cancelar suscripción Copyright 2024 El remitente no gestiona tu suscripción. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 1016,
      "end": 1152,
      "text": "Si ya no deseas recibir comunicaciones, cancela la suscripción aquí o escribe a: 123 Ficción St Ste 687#2043, Villa Protegida, CA, 90210"
    }
  ],
  "passA": {
    "requestSha256": "19d0d35fcf90b7cda6b26bce35075fa28fabf378e117deb3ebd32d8cebaaa342",
    "capturedAt": "2026-09-20T23:46:24.313Z",
    "elapsedMs": 140.63987499999348,
    "successfulAttemptElapsedMs": 138.13333300000522,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.82
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.71
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.94
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.34
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
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.96,
            "no_sensitive_action": 0.01,
            "mixed_or_unknown": 0.02,
            "independently_established": 0.01
          },
          "confidence": 0.94
        }
      },
      "usage": {
        "input_tokens": 3777,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "1cd258368c7dbcb45ce2a007bf4d8cc04c897ee1c6f686a4609e90ff1cef2d20",
    "capturedAt": "2026-09-20T23:46:24.565Z",
    "elapsedMs": 249.4196659999725,
    "successfulAttemptElapsedMs": 246.88112500001444,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:5": 0,
            "body:2": 0,
            "NONE": 0.01,
            "body:3": 0.07,
            "body:1": 0.92,
            "body:0": 0,
            "subject:0": 0,
            "body:4": 0
          },
          "confidence": 0.91
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:5": 0,
            "NONE": 0.02,
            "body:3": 0.32,
            "body:2": 0.03,
            "body:1": 0.63,
            "body:0": 0,
            "subject:0": 0,
            "body:4": 0
          },
          "confidence": 0.57
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:5": 0,
            "body:2": 0.07,
            "NONE": 0,
            "body:3": 0.02,
            "body:1": 0.16,
            "body:0": 0.39,
            "subject:0": 0.36,
            "body:4": 0
          },
          "confidence": 0.31
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:5": 0,
            "body:2": 0,
            "NONE": 0.02,
            "body:3": 0.92,
            "body:1": 0.03,
            "body:0": 0.03,
            "subject:0": 0,
            "body:4": 0
          },
          "confidence": 0.9
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:5": 0.02,
            "body:2": 0,
            "NONE": 0.92,
            "body:3": 0.01,
            "body:1": 0.04,
            "body:0": 0,
            "subject:0": 0,
            "body:4": 0.01
          },
          "confidence": 0.9
        }
      },
      "usage": {
        "input_tokens": 4050,
        "output_tokens": 460
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 392.89345900001354,
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
    "seq": 2230,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-454",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:24.174Z",
    "offsetMs": 1.8562090000195894
  },
  {
    "seq": 2231,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-454",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:24.313Z",
    "offsetMs": 140.639542000019,
    "elapsedMs": 138.13333300000522,
    "outcome": "success"
  },
  {
    "seq": 2232,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-454",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:24.317Z",
    "offsetMs": 144.845209000021
  },
  {
    "seq": 2233,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-454",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:24.565Z",
    "offsetMs": 392.4025419999962,
    "elapsedMs": 246.88112500001444,
    "outcome": "success"
  },
  {
    "seq": 2234,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-454",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:24.565Z",
    "offsetMs": 392.99608400001307,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "5607dea6222cfb279452b8d5e12b3e7769d0e5671c4beb691335580f7fe09899";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2231},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2233},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2234}} as const;
export const projectionSha256 = "648e169fe0dc86acf682dba8d6bfc09b375496c3e9d6beb2c05151dceadcdd16";
