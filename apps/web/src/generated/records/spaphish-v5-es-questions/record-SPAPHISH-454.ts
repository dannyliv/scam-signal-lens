import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-454",
  "inputSha256": "468314b8ba42b91439738837b78746bb4208ed189ed27bfb481cf890bdafb8d5",
  "questionBundleSha256": "9631a5b623f8c05b491dc5a5f67ab9b62e5b1898446a722339eaa0c16a40af8b",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "source_messages",
  "policySha256": "42e51b1f7b8706dae7188d0d3fa8c6ac83b855b21f393196bd63bc16d4b91d93",
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
    "requestSha256": "d6985412d56a2b2275e30c011ce7520deb7c48a610005fe29846f09f7aed4fcc",
    "capturedAt": "2026-09-22T03:57:14.137Z",
    "elapsedMs": 609.9740720000118,
    "successfulAttemptElapsedMs": 608.5782149999868,
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
          "noul": 0.8
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.63
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.92
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.93
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.26
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.03,
            "mixed_or_unknown": 0.04,
            "independently_established": 0,
            "sender_supplied": 0.9299999999999999
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 5227,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "67886d3f9fbbb5be6054ad3e0cfcb11b7f9f0c9ad9ffc55f45f28c4637b025e4",
    "capturedAt": "2026-09-22T03:57:14.695Z",
    "elapsedMs": 556.479508999968,
    "successfulAttemptElapsedMs": 555.1462850000244,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.01,
            "body:4": 0,
            "body:5": 0,
            "body:1": 0.92,
            "body:0": 0,
            "body:2": 0,
            "body:3": 0.07
          },
          "confidence": 0.9
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.05,
            "body:4": 0,
            "body:5": 0,
            "body:1": 0.67,
            "body:0": 0.01,
            "body:2": 0.06,
            "body:3": 0.21
          },
          "confidence": 0.62
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "subject:0": 0.41000000000000003,
            "NONE": 0,
            "body:4": 0,
            "body:1": 0.13,
            "body:5": 0,
            "body:0": 0.36,
            "body:2": 0.09,
            "body:3": 0.01
          },
          "confidence": 0.32
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.02,
            "body:4": 0,
            "body:5": 0,
            "body:1": 0.02,
            "body:0": 0.01,
            "body:2": 0,
            "body:3": 0.95
          },
          "confidence": 0.93
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.91,
            "body:4": 0.01,
            "body:1": 0.06,
            "body:5": 0.01,
            "body:3": 0.01,
            "body:2": 0,
            "body:0": 0
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 4582,
        "output_tokens": 460
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1167.9660700000823,
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
    "seq": 2229,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-454",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:13.528Z",
    "offsetMs": 1.1754030000884086
  },
  {
    "seq": 2230,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-454",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:14.137Z",
    "offsetMs": 609.9736390000908,
    "elapsedMs": 608.5782149999868,
    "outcome": "success"
  },
  {
    "seq": 2231,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-454",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:14.139Z",
    "offsetMs": 612.2890780000016
  },
  {
    "seq": 2232,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-454",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:14.694Z",
    "offsetMs": 1167.670014000032,
    "elapsedMs": 555.1462850000244,
    "outcome": "success"
  },
  {
    "seq": 2233,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-454",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:14.695Z",
    "offsetMs": 1168.02618600009,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "785721238b1e69f9e6b0acc7d714b3b220f64c176750b2e87991bd10582e73c7";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2230},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2232},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2233}} as const;
export const projectionSha256 = "f746c870ea44e913e0272fee782f8ac5b00d83dac5be985f807ad5278bffe903";
