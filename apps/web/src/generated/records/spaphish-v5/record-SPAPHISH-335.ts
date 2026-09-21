import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-335",
  "inputSha256": "87c93b03a06e012dc18c3eeb148c71d2f620220a28893fa66cd6c4c23b08e69b",
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
      "end": 364,
      "text": "Si no tienes suficiente espacio en iCloud, puedes actualizar el plan de almacenamiento LLENA\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 364,
      "end": 385,
      "text": "Detalles del pedido:\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 385,
      "end": 413,
      "text": "ID de suscripción : 9157042\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 413,
      "end": 438,
      "text": "Producto: Espacio iCloud\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 438,
      "end": 474,
      "text": "Fecha de caducidad: 15 January 2024\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 474,
      "end": 475,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 475,
      "end": 803,
      "text": "Sin espacio en iCloud, es posible que no pueda almacenar todos sus datos y archivos en el servicio de sincronización de iCloud proporcionado por Apple, que permite a los usuarios almacenar sus datos, como fotos, vídeos, documentos y más, en los servidores de Apple y puede acceder a ellos desde cualquier dispositivo de usuario\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 803,
      "end": 804,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 804,
      "end": 823,
      "text": "Actualizar mi pago\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 823,
      "end": 843,
      "text": "El equipo de iCloud\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 843,
      "end": 860,
      "text": "El Equipo iCloud\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 860,
      "end": 907,
      "text": "iCloud es un servicio proporcionado por Apple.\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 907,
      "end": 921,
      "text": "Darse de baja\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 921,
      "end": 944,
      "text": "Derechos de autor 2024\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 944,
      "end": 985,
      "text": "El anunciante no gestiona su suscripción\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 985,
      "end": 1054,
      "text": "Si prefiere no recibir más comunicaciones, anule la suscripción aquí\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 1054,
      "end": 1118,
      "text": "O escriba a: 219 Westbridge St Ste 402#1198, Lakeview, IL, 62841"
    }
  ],
  "passA": {
    "requestSha256": "434fb0851507926d7e9299f7c187580f40f2510073de728622bbc103f7a15f3b",
    "capturedAt": "2026-09-20T23:45:44.849Z",
    "elapsedMs": 177.29145800000697,
    "successfulAttemptElapsedMs": 175.21158399998967,
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
          "noul": 0.8
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.64
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
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.42
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.11
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
            "informational": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.95,
            "mixed_or_unknown": 0.04,
            "no_sensitive_action": 0.01
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 3773,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "0913cce0390cebd19b1abda80ad0566a1f36e47c14a91a203d56c3bab4cb5a70",
    "capturedAt": "2026-09-20T23:45:45.084Z",
    "elapsedMs": 233.18645899998955,
    "successfulAttemptElapsedMs": 231.71162499999627,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:6": 0,
            "body:13": 0,
            "body:18": 0,
            "body:9": 0,
            "body:15": 0,
            "body:14": 0,
            "body:4": 0,
            "body:1": 0.5,
            "body:8": 0,
            "body:3": 0,
            "body:2": 0,
            "subject:0": 0,
            "NONE": 0.02,
            "body:10": 0.48,
            "body:0": 0,
            "body:11": 0,
            "body:5": 0,
            "body:16": 0,
            "body:12": 0,
            "body:7": 0,
            "body:17": 0
          },
          "confidence": 0.46
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:10",
          "probabilities": {
            "body:6": 0,
            "body:13": 0,
            "body:18": 0,
            "body:9": 0,
            "body:14": 0,
            "body:15": 0,
            "body:4": 0,
            "body:1": 0.17,
            "body:8": 0,
            "body:3": 0,
            "body:17": 0,
            "subject:0": 0,
            "NONE": 0.02,
            "body:5": 0,
            "body:0": 0.01,
            "body:11": 0,
            "body:12": 0,
            "body:16": 0,
            "body:7": 0,
            "body:2": 0.06,
            "body:10": 0.74
          },
          "confidence": 0.72
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:6": 0.03,
            "body:13": 0,
            "body:18": 0,
            "body:9": 0,
            "body:14": 0,
            "body:15": 0,
            "body:4": 0,
            "body:1": 0.15,
            "body:8": 0,
            "body:3": 0,
            "body:17": 0,
            "subject:0": 0.44,
            "NONE": 0,
            "body:10": 0.02,
            "body:0": 0.36,
            "body:2": 0,
            "body:5": 0,
            "body:16": 0,
            "body:12": 0,
            "body:11": 0,
            "body:7": 0
          },
          "confidence": 0.4
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:11",
          "probabilities": {
            "body:6": 0,
            "body:18": 0,
            "body:13": 0.02,
            "body:9": 0,
            "body:14": 0,
            "body:15": 0,
            "body:4": 0,
            "body:1": 0.01,
            "body:8": 0.01,
            "body:3": 0,
            "body:7": 0,
            "subject:0": 0,
            "NONE": 0.01,
            "body:11": 0.81,
            "body:0": 0.03,
            "body:5": 0,
            "body:2": 0,
            "body:16": 0,
            "body:17": 0,
            "body:10": 0.02,
            "body:12": 0.09
          },
          "confidence": 0.79
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0,
            "body:18": 0.05,
            "body:13": 0,
            "body:9": 0,
            "body:15": 0,
            "body:14": 0,
            "body:4": 0,
            "body:1": 0.04,
            "body:8": 0,
            "body:3": 0,
            "body:17": 0,
            "subject:0": 0,
            "NONE": 0.76,
            "body:12": 0,
            "body:0": 0,
            "body:11": 0,
            "body:7": 0,
            "body:16": 0.04,
            "body:5": 0,
            "body:10": 0.11,
            "body:2": 0
          },
          "confidence": 0.74
        }
      },
      "usage": {
        "input_tokens": 4931,
        "output_tokens": 1092
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 412.5305410000001,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "payment_request": {
        "status": "selected",
        "segmentId": "body:10"
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
        "segmentId": "body:11"
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
    "seq": 1639,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-335",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:44.673Z",
    "offsetMs": 1.4324159999960102
  },
  {
    "seq": 1640,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-335",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:44.849Z",
    "offsetMs": 177.29479099999298,
    "elapsedMs": 175.21158399998967,
    "outcome": "success"
  },
  {
    "seq": 1641,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-335",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:44.851Z",
    "offsetMs": 179.43416599999182
  },
  {
    "seq": 1642,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-335",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:45.083Z",
    "offsetMs": 411.71224999999686,
    "elapsedMs": 231.71162499999627,
    "outcome": "success"
  },
  {
    "seq": 1643,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-335",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:45.084Z",
    "offsetMs": 412.65358299999207,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "47a8df70c9dd63b78c7357a3e7743a4fd844954a5e1165dab1040aabe1b74152";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1640},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1642},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1643}} as const;
export const projectionSha256 = "13b738041934ec66defeec96fb2eec24721de7b7d502689b91561f1625f24e53";
