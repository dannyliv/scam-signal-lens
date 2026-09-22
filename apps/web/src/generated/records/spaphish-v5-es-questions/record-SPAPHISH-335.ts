import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-335",
  "inputSha256": "87c93b03a06e012dc18c3eeb148c71d2f620220a28893fa66cd6c4c23b08e69b",
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
    "requestSha256": "c6ceeb9aba2137daaf434155c4981239f4a61d1b3f20aa73d46a1d21d36f7e3f",
    "capturedAt": "2026-09-22T03:54:52.697Z",
    "elapsedMs": 649.8527469999972,
    "successfulAttemptElapsedMs": 648.6067550000153,
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
          "noul": 0.55
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
          "noul": 0.94
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.35
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
            "informational": 0,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.94,
            "mixed_or_unknown": 0.04,
            "independently_established": 0,
            "no_sensitive_action": 0.02
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 5223,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "7d2fef71b59d6b29ec96eccede0aa133b8b3c6a484325482f38f21ffd0dc1c9c",
    "capturedAt": "2026-09-22T03:54:53.293Z",
    "elapsedMs": 592.7249660000089,
    "successfulAttemptElapsedMs": 591.4852510000346,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:14": 0,
            "body:7": 0,
            "NONE": 0.01,
            "body:2": 0,
            "body:18": 0,
            "body:4": 0,
            "body:1": 0.52,
            "body:16": 0,
            "body:12": 0,
            "body:5": 0,
            "body:9": 0,
            "body:3": 0,
            "body:8": 0,
            "subject:0": 0,
            "body:15": 0,
            "body:6": 0,
            "body:11": 0,
            "body:10": 0.47,
            "body:17": 0,
            "body:13": 0,
            "body:0": 0
          },
          "confidence": 0.49
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:10",
          "probabilities": {
            "body:14": 0,
            "body:7": 0,
            "NONE": 0.11,
            "body:2": 0.04,
            "body:18": 0,
            "body:1": 0.25,
            "body:4": 0,
            "body:16": 0,
            "body:12": 0,
            "body:5": 0,
            "body:9": 0,
            "body:3": 0,
            "body:10": 0.59,
            "body:6": 0,
            "body:15": 0,
            "body:8": 0,
            "body:11": 0,
            "subject:0": 0,
            "body:17": 0,
            "body:13": 0,
            "body:0": 0.01
          },
          "confidence": 0.56
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:14": 0,
            "NONE": 0,
            "body:7": 0,
            "body:2": 0,
            "body:18": 0,
            "body:4": 0,
            "body:1": 0.15,
            "body:16": 0,
            "body:12": 0,
            "body:5": 0,
            "body:9": 0,
            "subject:0": 0.52,
            "body:10": 0.01,
            "body:6": 0.04,
            "body:15": 0,
            "body:8": 0,
            "body:11": 0,
            "body:3": 0.01,
            "body:17": 0,
            "body:13": 0,
            "body:0": 0.27
          },
          "confidence": 0.49
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:11",
          "probabilities": {
            "body:14": 0,
            "body:7": 0,
            "body:18": 0,
            "body:2": 0,
            "NONE": 0.01,
            "body:4": 0,
            "body:1": 0.02,
            "body:16": 0,
            "body:12": 0.06,
            "body:5": 0,
            "body:9": 0,
            "subject:0": 0,
            "body:10": 0.02,
            "body:3": 0,
            "body:15": 0,
            "body:8": 0.01,
            "body:11": 0.85,
            "body:6": 0,
            "body:17": 0,
            "body:13": 0.01,
            "body:0": 0.02
          },
          "confidence": 0.83
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:14": 0,
            "NONE": 0.77,
            "body:7": 0,
            "body:2": 0,
            "body:18": 0.03,
            "body:4": 0,
            "body:1": 0.06,
            "body:12": 0,
            "body:16": 0.04,
            "body:5": 0,
            "body:9": 0,
            "subject:0": 0,
            "body:10": 0.09,
            "body:3": 0,
            "body:15": 0,
            "body:6": 0,
            "body:11": 0,
            "body:8": 0,
            "body:17": 0.01,
            "body:13": 0,
            "body:0": 0
          },
          "confidence": 0.75
        }
      },
      "usage": {
        "input_tokens": 5463,
        "output_tokens": 1092
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1246.4109349999926,
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
    "seq": 1637,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-335",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:52.048Z",
    "offsetMs": 1.0294359999825247
  },
  {
    "seq": 1638,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-335",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:52.696Z",
    "offsetMs": 649.853226999985,
    "elapsedMs": 648.6067550000153,
    "outcome": "success"
  },
  {
    "seq": 1639,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-335",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:52.701Z",
    "offsetMs": 654.2325870000059
  },
  {
    "seq": 1640,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-335",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:53.293Z",
    "offsetMs": 1246.0745779999997,
    "elapsedMs": 591.4852510000346,
    "outcome": "success"
  },
  {
    "seq": 1641,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-335",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:53.293Z",
    "offsetMs": 1246.462633999996,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "b820c0b64521aa823745682feb7c9658c86c8eebb4735516965c5a26798ba2c0";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1638},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1640},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1641}} as const;
export const projectionSha256 = "9cd4773adc2bd52886857076fe5046b4df4731ed05cb46c644975f119babe437";
