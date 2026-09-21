import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-443",
  "inputSha256": "8f863eaf9475c933206f7a8c546dbfbbabb531b5e60519baae682278d50ee058",
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
      "text": "Si no tienes suficiente espacio en iCloud, puedes actualizar el plan de almacenamiento LLENA Detalles del pedido: ID de suscripción : 4455667 Producto: Espacio iCloud Fecha de caducidad: 20 Noviembre 2024 Sin espacio en iCloud, es posible que no pueda almacenar todos sus datos y archivos en el servicio de sincronización de iCloud proporcionado por Apple, que permite a los usuarios almacenar sus datos, como fotos, vídeos, documentos y más, en los servidores de Apple y puede acceder a ellos desde cualquier dispositivo de usuario Actualizar mi pago El equipo de iCloud El Equipo iCloud iCloud es un servicio proporcionado por Apple. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 907,
      "end": 1127,
      "text": "Darse de baja Derechos de autor 2024 El anunciante no gestiona su suscripción Si prefiere no recibir más comunicaciones, anule la suscripción aquí O escriba a: 123 Avenida del Norte Ste 789#3050, Villa Hermosa, TX, 78501"
    }
  ],
  "passA": {
    "requestSha256": "17751eecc6f576c24b45a2bacc926f8e3dda2a320fca76e74a9a85462b4d9310",
    "capturedAt": "2026-09-20T23:46:20.933Z",
    "elapsedMs": 179.32529199999408,
    "successfulAttemptElapsedMs": 177.12662500000442,
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
          "noul": 0.81
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.7
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
          "noul": 0.93
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
            "sender_supplied": 0.96,
            "no_sensitive_action": 0.01,
            "independently_established": 0,
            "mixed_or_unknown": 0.03
          },
          "confidence": 0.94
        }
      },
      "usage": {
        "input_tokens": 3761,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "a927eac299b6d211e6e8453faefeb1e65bc016484ae60fc568f41d83bf35df1b",
    "capturedAt": "2026-09-20T23:46:21.128Z",
    "elapsedMs": 193.7127080000064,
    "successfulAttemptElapsedMs": 191.7278749999823,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.89,
            "body:0": 0,
            "body:2": 0.1,
            "subject:0": 0,
            "NONE": 0.01,
            "body:3": 0
          },
          "confidence": 0.85
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.49,
            "body:0": 0.01,
            "body:2": 0.47,
            "subject:0": 0,
            "NONE": 0.03,
            "body:3": 0
          },
          "confidence": 0.38
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:1": 0.23,
            "body:0": 0.25,
            "body:2": 0.07,
            "subject:0": 0.45,
            "NONE": 0,
            "body:3": 0
          },
          "confidence": 0.33
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:1": 0.02,
            "body:0": 0.09,
            "body:2": 0.84,
            "subject:0": 0,
            "NONE": 0.04,
            "body:3": 0.01
          },
          "confidence": 0.81
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "body:1": 0.06,
            "body:2": 0.03,
            "subject:0": 0,
            "NONE": 0.87,
            "body:3": 0.04
          },
          "confidence": 0.83
        }
      },
      "usage": {
        "input_tokens": 3834,
        "output_tokens": 370
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 375.01137500000186,
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
    "seq": 2175,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-443",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:20.755Z",
    "offsetMs": 1.6940419999882579
  },
  {
    "seq": 2176,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-443",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:20.933Z",
    "offsetMs": 179.3260420000006,
    "elapsedMs": 177.12662500000442,
    "outcome": "success"
  },
  {
    "seq": 2177,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-443",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:20.936Z",
    "offsetMs": 182.5227920000034
  },
  {
    "seq": 2178,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-443",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:21.128Z",
    "offsetMs": 374.7403340000019,
    "elapsedMs": 191.7278749999823,
    "outcome": "success"
  },
  {
    "seq": 2179,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-443",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:21.128Z",
    "offsetMs": 375.07004200000665,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d877277ffed13e4dd4fef73e4f94b70d80278901369d12a289bb41b2635b08e5";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2176},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2178},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2179}} as const;
export const projectionSha256 = "ccc22a97ce89f6761405bf80f7b08c623e1a066584a1ae9a17d23dd808d4212e";
