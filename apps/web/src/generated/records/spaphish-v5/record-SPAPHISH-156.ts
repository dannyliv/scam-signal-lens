import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-156",
  "inputSha256": "2652792f57207cf298200e7e2fc9047cba91717650b1f5651adee9db8fd07715",
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
    "requestSha256": "a2fac3a7063e9946d2fcc8f61cf3917c4038c07b57c5d354bca3f0f3e61366da",
    "capturedAt": "2026-09-20T23:44:40.655Z",
    "elapsedMs": 249.8243749999965,
    "successfulAttemptElapsedMs": 248.2068339999969,
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
          "noul": 0.42
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
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "informational": 0,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.97,
            "mixed_or_unknown": 0.02,
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
    "requestSha256": "82921c74bf19ac8617d183ef14e552e5568c47144dedba933c256f0f4c761f02",
    "capturedAt": "2026-09-20T23:44:40.795Z",
    "elapsedMs": 138.45612499999697,
    "successfulAttemptElapsedMs": 137.3735830000005,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:3": 0,
            "subject:0": 0,
            "body:0": 0,
            "NONE": 0.01,
            "body:1": 0.86,
            "body:2": 0.13
          },
          "confidence": 0.83
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:3": 0,
            "subject:0": 0,
            "body:0": 0.01,
            "NONE": 0.05,
            "body:1": 0.49,
            "body:2": 0.45
          },
          "confidence": 0.39
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:3": 0,
            "subject:0": 0.43,
            "body:0": 0.32,
            "NONE": 0,
            "body:1": 0.2,
            "body:2": 0.05
          },
          "confidence": 0.3
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:3": 0.01,
            "subject:0": 0,
            "body:0": 0.06,
            "NONE": 0.03,
            "body:1": 0.01,
            "body:2": 0.89
          },
          "confidence": 0.86
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:3": 0.08,
            "subject:0": 0,
            "body:0": 0,
            "NONE": 0.82,
            "body:1": 0.07,
            "body:2": 0.03
          },
          "confidence": 0.78
        }
      },
      "usage": {
        "input_tokens": 3840,
        "output_tokens": 370
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 389.8753329999963,
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
    "seq": 763,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-156",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:40.406Z",
    "offsetMs": 1.0657500000015716
  },
  {
    "seq": 764,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-156",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:40.655Z",
    "offsetMs": 249.82729100000142,
    "elapsedMs": 248.2068339999969,
    "outcome": "success"
  },
  {
    "seq": 765,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-156",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:40.657Z",
    "offsetMs": 251.51654099999723
  },
  {
    "seq": 766,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-156",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:40.794Z",
    "offsetMs": 389.35154099999636,
    "elapsedMs": 137.3735830000005,
    "outcome": "success"
  },
  {
    "seq": 767,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-156",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:40.795Z",
    "offsetMs": 389.9752079999962,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7aa4a28b6ad7d8117e5959ac9e74ccd192bffb783e97654b8d02966ddebab445";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":764},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":766},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":767}} as const;
export const projectionSha256 = "5e89a56d5f0260292ac4923e0c02998b6c8b32a2632b5828d87e10a2203bf92c";
