import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-379",
  "inputSha256": "e6e42a5a10dde6c1ccf37c5dddb62347be5bef70a8f0ec39521712be2b6896ba",
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
      "end": 38,
      "text": "Su paquete está pronto a ser entregado"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 72,
      "text": "Estimado usuario, El paquete que llegó el 14 junio, 2025 será devuelto. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 72,
      "end": 140,
      "text": "Desafortunadamente, no pudimos verificar la dirección del receptor. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 140,
      "end": 240,
      "text": "La nueva entrega de este paquete se organizará después de confirmar la información de su solicitud. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 240,
      "end": 332,
      "text": "Visite nuestro sitio web y complete el formulario para enviar una nueva solicitud de envío. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 332,
      "end": 492,
      "text": "Encuentre aquí la información sobre el paquete Tenga en cuenta que, si no se programa un nuevo envío en 48 horas, no podrá enviar una nueva solicitud de envío. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 492,
      "end": 541,
      "text": "No se harán reembolsos por envío y manipulación. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 541,
      "end": 550,
      "text": "Gracias. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 550,
      "end": 576,
      "text": "El equipo de envíos de DHL"
    }
  ],
  "passA": {
    "requestSha256": "4e49cf78e66bf1f0e0e746272f0e4c9df515ad4d2ce960fc9d2f99d4028f8bd2",
    "capturedAt": "2026-09-20T23:45:59.453Z",
    "elapsedMs": 165.4004169999971,
    "successfulAttemptElapsedMs": 163.78024999999616,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.04
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.15
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.07
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.17
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.06
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.16
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
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.53,
            "no_sensitive_action": 0.45,
            "independently_established": 0.01,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.38
        }
      },
      "usage": {
        "input_tokens": 3573,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "4ce0ecb4bf20794d9b1895d6b7fc52b02541cbabeb6d7e0c7730f20184698179",
    "capturedAt": "2026-09-20T23:45:59.631Z",
    "elapsedMs": 175.1112920000014,
    "successfulAttemptElapsedMs": 170.41329099998984,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:6": 0,
            "subject:0": 0,
            "body:7": 0,
            "NONE": 0,
            "body:4": 1,
            "body:1": 0,
            "body:0": 0,
            "body:3": 0,
            "body:2": 0,
            "body:5": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "body:6": 0,
            "subject:0": 0,
            "body:7": 0.91,
            "NONE": 0.05,
            "body:4": 0,
            "body:1": 0.01,
            "body:0": 0,
            "body:3": 0.03,
            "body:2": 0,
            "body:5": 0
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 1452,
        "output_tokens": 223
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 343.7027079999971,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "request_route_low_confidence"
    ],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "payment_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:4"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:7"
      },
      "verification_bypass": {
        "status": "not_requested",
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
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1858,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-379",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:59.289Z",
    "offsetMs": 1.1149579999910202
  },
  {
    "seq": 1859,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-379",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:59.453Z",
    "offsetMs": 165.3969999999972,
    "elapsedMs": 163.78024999999616,
    "outcome": "success"
  },
  {
    "seq": 1860,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-379",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:59.460Z",
    "offsetMs": 172.3336249999993
  },
  {
    "seq": 1861,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-379",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:59.631Z",
    "offsetMs": 343.46983299999556,
    "elapsedMs": 170.41329099998984,
    "outcome": "success"
  },
  {
    "seq": 1862,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-379",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:59.631Z",
    "offsetMs": 343.7530410000036,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "aeb00472af4a34cff4bc923f45e8ef2ba61718565b36f628b754df9c9f084b35";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1859},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1861},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1862}} as const;
export const projectionSha256 = "5b54963d857243ebf4ad43554152a84988d01ca519b700e41d980e414c610128";
