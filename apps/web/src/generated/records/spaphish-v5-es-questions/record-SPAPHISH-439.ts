import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-439",
  "inputSha256": "5208cc96390f7c48eb713b0a5502399f571428671a900fdcfe83e4ff47022044",
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
    "requestSha256": "3fd30005e9c1feefbcdc39ab1d913dc571e4fc2d496fe0289ea6024119d9fd9d",
    "capturedAt": "2026-09-22T03:56:55.967Z",
    "elapsedMs": 620.2826480000513,
    "successfulAttemptElapsedMs": 618.4214570000768,
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
          "noul": 0.83
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.5
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
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.37
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
            "independently_established": 0,
            "mixed_or_unknown": 0.05,
            "sender_supplied": 0.93,
            "no_sensitive_action": 0.02
          },
          "confidence": 0.91
        }
      },
      "usage": {
        "input_tokens": 5208,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "0bcd69c03a0b3ba71a571cccb192d4bcca63f90e6191a2b8bec5df912d606659",
    "capturedAt": "2026-09-22T03:56:56.600Z",
    "elapsedMs": 630.2770969999256,
    "successfulAttemptElapsedMs": 628.2191679999232,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.01,
            "body:1": 0.9,
            "body:2": 0.09,
            "body:3": 0,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 0.87
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.15,
            "body:1": 0.45,
            "body:2": 0.38,
            "body:3": 0.01,
            "subject:0": 0,
            "body:0": 0.01
          },
          "confidence": 0.34
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "NONE": 0,
            "body:1": 0.19,
            "body:2": 0.11,
            "body:3": 0,
            "subject:0": 0.46,
            "body:0": 0.24
          },
          "confidence": 0.34
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "NONE": 0.01,
            "body:1": 0.02,
            "body:2": 0.92,
            "body:3": 0.01,
            "subject:0": 0,
            "body:0": 0.04
          },
          "confidence": 0.9
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.85,
            "subject:0": 0,
            "body:2": 0.02,
            "body:3": 0.04,
            "body:1": 0.09,
            "body:0": 0
          },
          "confidence": 0.82
        }
      },
      "usage": {
        "input_tokens": 4348,
        "output_tokens": 370
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1253.3196669999743,
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
    "seq": 2154,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-439",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:55.348Z",
    "offsetMs": 1.5787319999653846
  },
  {
    "seq": 2155,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-439",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:55.967Z",
    "offsetMs": 620.2834299999522,
    "elapsedMs": 618.4214570000768,
    "outcome": "success"
  },
  {
    "seq": 2156,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-439",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:55.970Z",
    "offsetMs": 623.9745589999948
  },
  {
    "seq": 2157,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-439",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:56.599Z",
    "offsetMs": 1253.022867999971,
    "elapsedMs": 628.2191679999232,
    "outcome": "success"
  },
  {
    "seq": 2158,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-439",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:56.600Z",
    "offsetMs": 1253.3642729999265,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "999892be8516b307f0a0b669ee1d9f6a613db9961bb7affecb069a657e404970";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2155},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2157},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2158}} as const;
export const projectionSha256 = "ae7df7017ad25e7571a1fbe1d0f9f889f8803431e1db3b53d6e6d81642c6b78f";
