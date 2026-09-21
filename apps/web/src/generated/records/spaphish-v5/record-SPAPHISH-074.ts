import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-074",
  "inputSha256": "0ef04b074db3ac60ac90faef7838c15f21ac95839ae4fabe6daff030ac4b8709",
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
      "text": "Si no tienes suficiente espacio en iCloud, puedes actualizar el plan de almacenamiento LLENA Detalles del pedido: ID de suscripción : 6050403 Producto: Espacio iCloud Fecha de caducidad: 20 Enero 2024 Sin espacio en iCloud, es posible que no pueda almacenar todos sus datos y archivos en el servicio de sincronización de iCloud proporcionado por Apple, que permite a los usuarios almacenar sus datos, como fotos, vídeos, documentos y más, en los servidores de Apple y puede acceder a ellos desde cualquier dispositivo de usuario Actualizar mi pago El equipo de iCloud El Equipo iCloud iCloud es un servicio proporcionado por Apple. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 903,
      "end": 939,
      "text": "Darse de baja Derechos de autor 2024"
    }
  ],
  "passA": {
    "requestSha256": "34a3ee4c2e7273166eb4ce172664762c1de5e7f3f4306b1f1a1155e331d1b425",
    "capturedAt": "2026-09-20T23:44:15.281Z",
    "elapsedMs": 172.46529200000077,
    "successfulAttemptElapsedMs": 171.10470899999927,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.07
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.83
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.66
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
          "noul": 0.05
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
            "educational_or_quoted": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.02,
            "independently_established": 0.01,
            "sender_supplied": 0.95,
            "mixed_or_unknown": 0.02
          },
          "confidence": 0.94
        }
      },
      "usage": {
        "input_tokens": 3694,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "5a19fe4bd04e18843e374987233db267ff2d7ceb4c8e9187fc3325e67bce7e48",
    "capturedAt": "2026-09-20T23:44:15.420Z",
    "elapsedMs": 137.41862500000207,
    "successfulAttemptElapsedMs": 136.30662499999744,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:3": 0,
            "body:1": 0.91,
            "body:2": 0.08,
            "NONE": 0.01
          },
          "confidence": 0.88
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0.01,
            "body:3": 0,
            "NONE": 0.05,
            "body:2": 0.41,
            "body:1": 0.53
          },
          "confidence": 0.43
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "subject:0": 0.44,
            "body:0": 0.23,
            "body:3": 0,
            "body:1": 0.22,
            "body:2": 0.11,
            "NONE": 0
          },
          "confidence": 0.33
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0.05,
            "body:3": 0,
            "body:1": 0.01,
            "body:2": 0.91,
            "NONE": 0.03
          },
          "confidence": 0.89
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:3": 0,
            "NONE": 0.96,
            "body:2": 0.01,
            "body:1": 0.03
          },
          "confidence": 0.95
        }
      },
      "usage": {
        "input_tokens": 3432,
        "output_tokens": 370
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 311.5327499999985,
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
    "seq": 360,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-074",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:15.109Z",
    "offsetMs": 0.8172909999993863
  },
  {
    "seq": 361,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-074",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:15.281Z",
    "offsetMs": 172.4678329999988,
    "elapsedMs": 171.10470899999927,
    "outcome": "success"
  },
  {
    "seq": 362,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-074",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:15.283Z",
    "offsetMs": 174.4552909999984
  },
  {
    "seq": 363,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-074",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:15.420Z",
    "offsetMs": 311.2559579999979,
    "elapsedMs": 136.30662499999744,
    "outcome": "success"
  },
  {
    "seq": 364,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-074",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:15.420Z",
    "offsetMs": 311.5807909999967,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "319dc810d7704613cfb6fd63ac3f8b70d60159e3db071b5aae9710c78bcb859a";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":361},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":363},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":364}} as const;
export const projectionSha256 = "690cde79087f1f5be3bc91822e63fe3b03348d99d671223a36eb9fcc309ccc09";
