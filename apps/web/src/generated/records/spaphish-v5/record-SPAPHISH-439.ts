import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-439",
  "inputSha256": "5208cc96390f7c48eb713b0a5502399f571428671a900fdcfe83e4ff47022044",
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
      "end": 903,
      "text": "Si no tienes suficiente espacio en iCloud, puedes actualizar el plan de almacenamiento LLENA Detalles del pedido: ID de suscripción : 9988776 Producto: Espacio iCloud Fecha de caducidad: 10 Marzo 2024 Sin espacio en iCloud, es posible que no pueda almacenar todos sus datos y archivos en el servicio de sincronización de iCloud proporcionado por Apple, que permite a los usuarios almacenar sus datos, como fotos, vídeos, documentos y más, en los servidores de Apple y puede acceder a ellos desde cualquier dispositivo de usuario Actualizar mi pago El equipo de iCloud El Equipo iCloud iCloud es un servicio proporcionado por Apple. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 903,
      "end": 1116,
      "text": "Darse de baja Derechos de autor 2024 El anunciante no gestiona su suscripción Si prefiere no recibir más comunicaciones, anule la suscripción aquí O escriba a: 123 Calle Central Ste 456#7890, Metropolis, AZ, 85001"
    }
  ],
  "passA": {
    "requestSha256": "f74354c36056b29e297055e07c261684407ba0c9c75be617570db2ddd38d788c",
    "capturedAt": "2026-09-20T23:46:19.587Z",
    "elapsedMs": 198.21616699997685,
    "successfulAttemptElapsedMs": 195.98400000002584,
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
          "noul": 0.68
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
          "noul": 0.36
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
          "noul": 0.08
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
            "independently_established": 0,
            "no_sensitive_action": 0.01,
            "sender_supplied": 0.96,
            "mixed_or_unknown": 0.03
          },
          "confidence": 0.94
        }
      },
      "usage": {
        "input_tokens": 3758,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "9c67ffb2809d499aca5f05f9d54649d57bdcce62489affa04bef3d45036cdde2",
    "capturedAt": "2026-09-20T23:46:19.764Z",
    "elapsedMs": 174.68862499998068,
    "successfulAttemptElapsedMs": 172.2259999999951,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0.09,
            "body:3": 0,
            "body:0": 0,
            "subject:0": 0,
            "NONE": 0.01,
            "body:1": 0.9
          },
          "confidence": 0.87
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0.4,
            "body:3": 0,
            "body:0": 0,
            "subject:0": 0,
            "NONE": 0.05,
            "body:1": 0.55
          },
          "confidence": 0.46
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:2": 0.09,
            "body:3": 0,
            "body:1": 0.21,
            "body:0": 0.3,
            "NONE": 0,
            "subject:0": 0.4
          },
          "confidence": 0.27
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "subject:0": 0,
            "body:3": 0.01,
            "body:1": 0.01,
            "body:0": 0.07,
            "NONE": 0.02,
            "body:2": 0.89
          },
          "confidence": 0.85
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.02,
            "body:3": 0.05,
            "body:1": 0.08,
            "body:0": 0,
            "NONE": 0.85,
            "subject:0": 0
          },
          "confidence": 0.82
        }
      },
      "usage": {
        "input_tokens": 3816,
        "output_tokens": 370
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 375.97345900000073,
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
    "seq": 2155,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-439",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:19.390Z",
    "offsetMs": 1.5950000000011642
  },
  {
    "seq": 2156,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-439",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:19.586Z",
    "offsetMs": 198.21595900002285,
    "elapsedMs": 195.98400000002584,
    "outcome": "success"
  },
  {
    "seq": 2157,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-439",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:19.591Z",
    "offsetMs": 202.88750000001164
  },
  {
    "seq": 2158,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-439",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:19.764Z",
    "offsetMs": 375.74920900000143,
    "elapsedMs": 172.2259999999951,
    "outcome": "success"
  },
  {
    "seq": 2159,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-439",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:19.764Z",
    "offsetMs": 376.023125000007,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "192ffbab72310e491b4a314e6bf6c741bd65abb665f3c3c70addd319acbeb92f";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2156},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2158},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2159}} as const;
export const projectionSha256 = "271ed9a1f779e4c67fcb92b21779f346918d6a9264f664f67aede96aea335ae9";
