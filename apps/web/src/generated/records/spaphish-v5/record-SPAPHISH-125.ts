import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-125",
  "inputSha256": "88a002639962cb6d5de4585d770d08db71ae9065f2ed16192c7ac1d512f08761",
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
      "end": 907,
      "text": "Si no tienes suficiente espacio en iCloud, puedes actualizar el plan de almacenamiento LLENA Detalles del pedido: ID de suscripción : 816509217708 Producto: Espacio iCloud Fecha de caducidad: 12 July 2024 Sin espacio en iCloud, es posible que no pueda almacenar todos sus datos y archivos en el servicio de sincronización de iCloud proporcionado por Apple, que permite a los usuarios almacenar sus datos, como fotos, vídeos, documentos y más, en los servidores de Apple y puede acceder a ellos desde cualquier dispositivo de usuario Actualizar mi pago El equipo de iCloud El Equipo iCloud iCloud es un servicio proporcionado por Apple. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 907,
      "end": 1117,
      "text": "Darse de baja Derechos de autor 2024 El anunciante no gestiona su suscripción Si prefiere no recibir más comunicaciones, anule la suscripción aquí O escriba a: 550 Technology Dr Ste 100#500, Cheyenne, WY, 82001"
    }
  ],
  "passA": {
    "requestSha256": "318cccb7a84358fc91d0a0395293f9bb7ce425672878ed16d5313c4d82920992",
    "capturedAt": "2026-09-20T23:44:31.341Z",
    "elapsedMs": 147.62533400000393,
    "successfulAttemptElapsedMs": 146.104416999995,
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
          "noul": 0.08
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
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
            "independently_established": 0,
            "no_sensitive_action": 0.01,
            "sender_supplied": 0.97,
            "mixed_or_unknown": 0.02
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
    "requestSha256": "4120a70c577f8cef20d7052082ecf8c43cd8fc7f17d9f124d828bb933f4fcd26",
    "capturedAt": "2026-09-20T23:44:31.442Z",
    "elapsedMs": 99.26174999999785,
    "successfulAttemptElapsedMs": 97.63300000000163,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0.14,
            "body:3": 0,
            "body:0": 0,
            "body:1": 0.84,
            "NONE": 0.02,
            "subject:0": 0
          },
          "confidence": 0.81
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:3": 0.01,
            "body:0": 0.01,
            "body:1": 0.51,
            "NONE": 0.03,
            "body:2": 0.44
          },
          "confidence": 0.42
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:2": 0.06,
            "body:3": 0,
            "body:1": 0.27,
            "body:0": 0.24,
            "NONE": 0,
            "subject:0": 0.43
          },
          "confidence": 0.31
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 0.88,
            "body:3": 0.01,
            "body:0": 0.06,
            "subject:0": 0,
            "NONE": 0.03,
            "body:1": 0.02
          },
          "confidence": 0.86
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.02,
            "body:3": 0.05,
            "body:0": 0,
            "body:1": 0.08,
            "NONE": 0.85,
            "subject:0": 0
          },
          "confidence": 0.81
        }
      },
      "usage": {
        "input_tokens": 3840,
        "output_tokens": 370
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 249.29599999999482,
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
    "seq": 613,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-125",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:31.194Z",
    "offsetMs": 0.9577080000017304
  },
  {
    "seq": 614,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-125",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:31.341Z",
    "offsetMs": 147.62479099999473,
    "elapsedMs": 146.104416999995,
    "outcome": "success"
  },
  {
    "seq": 615,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-125",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:31.344Z",
    "offsetMs": 150.66916599999968
  },
  {
    "seq": 616,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-125",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:31.442Z",
    "offsetMs": 248.9164579999997,
    "elapsedMs": 97.63300000000163,
    "outcome": "success"
  },
  {
    "seq": 617,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-125",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:31.443Z",
    "offsetMs": 249.36629099999845,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "f8eebe8c5d454f6de004bd48cd154694e549c7fc4f6abc8a42e688dc643fb5f5";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":614},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":616},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":617}} as const;
export const projectionSha256 = "815bb6b127ea5313dc803f4320a7652d2bd3e38ecf274212697cfc421f7629e2";
