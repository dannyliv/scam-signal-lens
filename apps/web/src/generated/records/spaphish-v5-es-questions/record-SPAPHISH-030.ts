import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-030",
  "inputSha256": "3d281744d4759d3c6314da1e653cd1df4c06e595879d6eba49189252645fda47",
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
    "requestSha256": "fecb5bc6103d9333773a2d652940fc2296ea967b854431bb4b1484203eabdc0d",
    "capturedAt": "2026-09-22T03:48:47.305Z",
    "elapsedMs": 651.558401000002,
    "successfulAttemptElapsedMs": 650.7746939999997,
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
          "noul": 0.84
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.52
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.93
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.36
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
            "mixed_or_unknown": 0.04,
            "independently_established": 0,
            "no_sensitive_action": 0.02,
            "sender_supplied": 0.94
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 5212,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "6996f66f718062f8af0439a6c95494258dd9f471fd52ed1c5af0be56f14262c7",
    "capturedAt": "2026-09-22T03:48:47.875Z",
    "elapsedMs": 568.9594550000038,
    "successfulAttemptElapsedMs": 568.2217450000026,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0.1,
            "body:1": 0.89,
            "body:0": 0,
            "subject:0": 0,
            "body:3": 0,
            "NONE": 0.01
          },
          "confidence": 0.87
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 0.44,
            "body:1": 0.42,
            "body:0": 0.01,
            "NONE": 0.12,
            "body:3": 0.01,
            "subject:0": 0
          },
          "confidence": 0.32
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:2": 0.08,
            "body:1": 0.21,
            "NONE": 0,
            "subject:0": 0.46,
            "body:3": 0,
            "body:0": 0.25
          },
          "confidence": 0.34
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 0.94,
            "body:1": 0.01,
            "body:0": 0.03,
            "subject:0": 0,
            "body:3": 0.01,
            "NONE": 0.01
          },
          "confidence": 0.93
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.02,
            "body:1": 0.1,
            "body:0": 0,
            "NONE": 0.8,
            "body:3": 0.07,
            "subject:0": 0
          },
          "confidence": 0.76
        }
      },
      "usage": {
        "input_tokens": 4372,
        "output_tokens": 370
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1222.732667999997,
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
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-030",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:46.653Z",
    "offsetMs": 0.45624300000054063
  },
  {
    "seq": 145,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-030",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:47.304Z",
    "offsetMs": 651.5596179999993,
    "elapsedMs": 650.7746939999997,
    "outcome": "success"
  },
  {
    "seq": 146,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-030",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:47.307Z",
    "offsetMs": 653.8887429999959
  },
  {
    "seq": 147,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-030",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:47.875Z",
    "offsetMs": 1222.4312319999954,
    "elapsedMs": 568.2217450000026,
    "outcome": "success"
  },
  {
    "seq": 148,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-030",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:48:47.875Z",
    "offsetMs": 1222.7741679999963,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "36069056ac209c2f57b1b6a2bf392329aa7d7bed0c4a3be2d8e3f8d74368c781";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":145},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":147},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":148}} as const;
export const projectionSha256 = "d45748c3b13c72e831bcae63bf8379ae36f5413ac6f59c93303dff3f1ad6821e";
