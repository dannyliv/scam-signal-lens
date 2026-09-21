import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-120",
  "inputSha256": "7c5c16e242f8b54625643c9e1c6f1f98ee784a6631211eedd2df7354ef342388",
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
      "end": 905,
      "text": "Si no tienes suficiente espacio en iCloud, puedes actualizar el plan de almacenamiento LLENA Detalles del pedido: ID de suscripción : 6050403 Producto: Espacio iCloud Fecha de caducidad: 20 Febrero 2028 Sin espacio en iCloud, es posible que no pueda almacenar todos sus datos y archivos en el servicio de sincronización de iCloud proporcionado por Apple, que permite a los usuarios almacenar sus datos, como fotos, vídeos, documentos y más, en los servidores de Apple y puede acceder a ellos desde cualquier dispositivo de usuario Actualizar mi pago El equipo de iCloud El Equipo iCloud iCloud es un servicio proporcionado por Apple. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 905,
      "end": 1125,
      "text": "Darse de baja Derechos de autor 2028 El anunciante no gestiona su suscripción Si prefiere no recibir más comunicaciones, anule la suscripción aquí O escriba a: 700 Avenida del Valle Ste 200#500, Ciudad del Sol, UT, 84003"
    }
  ],
  "passA": {
    "requestSha256": "9eb2e33a1547995c3a6b30b623f77b643b4dfd023fcdd91760b8565d23c32f37",
    "capturedAt": "2026-09-20T23:44:29.617Z",
    "elapsedMs": 136.48904100000073,
    "successfulAttemptElapsedMs": 134.90933299999597,
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
          "noul": 0.68
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
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.38
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.1
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
            "mixed_or_unknown": 0.03,
            "no_sensitive_action": 0.01,
            "independently_established": 0,
            "sender_supplied": 0.96
          },
          "confidence": 0.94
        }
      },
      "usage": {
        "input_tokens": 3759,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "0a9dc172467fcd4fdff7c79a3f28f94adee0d0652a64e49f52a47948bd4761a9",
    "capturedAt": "2026-09-20T23:44:29.784Z",
    "elapsedMs": 165.19358300000022,
    "successfulAttemptElapsedMs": 163.7045419999995,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.02,
            "body:1": 0.91,
            "body:3": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:2": 0.07
          },
          "confidence": 0.89
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.03,
            "body:1": 0.58,
            "body:3": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:2": 0.39
          },
          "confidence": 0.49
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "NONE": 0,
            "body:1": 0.25,
            "subject:0": 0.43,
            "body:3": 0,
            "body:0": 0.26,
            "body:2": 0.06
          },
          "confidence": 0.32
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "NONE": 0.03,
            "body:1": 0.02,
            "body:3": 0.01,
            "subject:0": 0,
            "body:0": 0.08,
            "body:2": 0.86
          },
          "confidence": 0.82
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.84,
            "body:1": 0.09,
            "subject:0": 0,
            "body:3": 0.05,
            "body:0": 0,
            "body:2": 0.02
          },
          "confidence": 0.81
        }
      },
      "usage": {
        "input_tokens": 3822,
        "output_tokens": 370
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 303.81870800000615,
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
    "seq": 588,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-120",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:29.482Z",
    "offsetMs": 1.0696660000030533
  },
  {
    "seq": 589,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-120",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:29.617Z",
    "offsetMs": 136.49083300000348,
    "elapsedMs": 134.90933299999597,
    "outcome": "success"
  },
  {
    "seq": 590,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-120",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:29.620Z",
    "offsetMs": 139.19650000000547
  },
  {
    "seq": 591,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-120",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:29.784Z",
    "offsetMs": 303.45629100000224,
    "elapsedMs": 163.7045419999995,
    "outcome": "success"
  },
  {
    "seq": 592,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-120",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:29.784Z",
    "offsetMs": 303.87516600000527,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "fd0a020ea517d2b8999f92e4b8d64aa91cc9bce96b80486a423c1cb3d6e33666";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":589},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":591},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":592}} as const;
export const projectionSha256 = "1ee34fb08813f55839352e1767e93e10b5406455453e5326f5cfbbebd0d6c393";
