import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-156",
  "inputSha256": "2652792f57207cf298200e7e2fc9047cba91717650b1f5651adee9db8fd07715",
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
      "text": "Si no tienes suficiente espacio en iCloud, puedes actualizar el plan de almacenamiento LLENA Detalles del pedido: ID de suscripción : 816509217708 Producto: Espacio iCloud Fecha de caducidad: 09 April 2025 Sin espacio en iCloud, es posible que no pueda almacenar todos sus datos y archivos en el servicio de sincronización de iCloud proporcionado por Apple, que permite a los usuarios almacenar sus datos, como fotos, vídeos, documentos y más, en los servidores de Apple y puede acceder a ellos desde cualquier dispositivo de usuario Actualizar mi pago El equipo de iCloud El Equipo iCloud iCloud es un servicio proporcionado por Apple. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 908,
      "end": 1118,
      "text": "Darse de baja Derechos de autor 2025 El anunciante no gestiona su suscripción Si prefiere no recibir más comunicaciones, anule la suscripción aquí O escriba a: 550 Technology Dr Ste 100#500, Cheyenne, WY, 82001"
    }
  ],
  "passA": {
    "requestSha256": "7c288a34ea40b472b914e6123eb0e80272802d702bd3f3319df0253a2bc3e897",
    "capturedAt": "2026-09-22T03:51:18.729Z",
    "elapsedMs": 585.444227,
    "successfulAttemptElapsedMs": 584.0646410000045,
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
          "noul": 0.51
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
          "noul": 0.39
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
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.02,
            "mixed_or_unknown": 0.03,
            "sender_supplied": 0.95,
            "independently_established": 0
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
    "requestSha256": "94fdf4f655e5ccc44ad126ef00cb6c048cb3da1412fd88045ab64ec03cbfb3bc",
    "capturedAt": "2026-09-22T03:51:19.341Z",
    "elapsedMs": 611.6045750000048,
    "successfulAttemptElapsedMs": 610.6839320000145,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:2": 0.08,
            "body:0": 0,
            "body:1": 0.91,
            "body:3": 0,
            "NONE": 0.01
          },
          "confidence": 0.9
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:2": 0.42,
            "body:0": 0.01,
            "body:1": 0.44,
            "body:3": 0.01,
            "NONE": 0.12
          },
          "confidence": 0.34
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "subject:0": 0.49,
            "body:2": 0.06,
            "body:0": 0.24,
            "body:1": 0.21,
            "body:3": 0,
            "NONE": 0
          },
          "confidence": 0.38
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "subject:0": 0,
            "body:2": 0.92,
            "body:0": 0.04,
            "body:1": 0.01,
            "body:3": 0.01,
            "NONE": 0.02
          },
          "confidence": 0.9
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:2": 0.03,
            "body:0": 0,
            "body:1": 0.11,
            "body:3": 0.06,
            "NONE": 0.8
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
  "processingElapsedMs": 1198.5208290000155,
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
    "seq": 757,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-156",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:18.144Z",
    "offsetMs": 1.1215650000085589
  },
  {
    "seq": 758,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-156",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:18.728Z",
    "offsetMs": 585.4446870000102,
    "elapsedMs": 584.0646410000045,
    "outcome": "success"
  },
  {
    "seq": 759,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-156",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:18.730Z",
    "offsetMs": 587.3028979999945
  },
  {
    "seq": 760,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-156",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:19.341Z",
    "offsetMs": 1198.252616999991,
    "elapsedMs": 610.6839320000145,
    "outcome": "success"
  },
  {
    "seq": 761,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-156",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:51:19.342Z",
    "offsetMs": 1198.5662120000052,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "aacc698511fcaa3ad8a59090611a35b1e63c98c62f57ee60f226a5f33d3fac9f";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":758},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":760},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":761}} as const;
export const projectionSha256 = "31c75df97369665714c018be363c100f809a56147a2571e85ddbfbb9e71306d7";
