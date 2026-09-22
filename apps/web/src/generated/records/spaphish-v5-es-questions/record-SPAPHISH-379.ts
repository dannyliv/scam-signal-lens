import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-379",
  "inputSha256": "e6e42a5a10dde6c1ccf37c5dddb62347be5bef70a8f0ec39521712be2b6896ba",
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
    "requestSha256": "f04bd8c54169212d4941416f9476ebcc793eb43ae890a0098471613574977a8f",
    "capturedAt": "2026-09-22T03:55:46.072Z",
    "elapsedMs": 619.714655000018,
    "successfulAttemptElapsedMs": 618.006882000016,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.03
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.19
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.08
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.18
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
          "noul": 0.15
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0,
            "active_request": 1
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.54,
            "no_sensitive_action": 0.45,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.39
        }
      },
      "usage": {
        "input_tokens": 5023,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "27dd80d02e8f200b0bd02c8ec86f9955fa5c4bdae9212d67f7a8f8ddf8adca46",
    "capturedAt": "2026-09-22T03:55:46.698Z",
    "elapsedMs": 624.2064800000517,
    "successfulAttemptElapsedMs": 622.0769300000393,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0,
            "body:4": 0.99,
            "body:5": 0,
            "body:1": 0,
            "body:3": 0.01,
            "body:6": 0,
            "body:2": 0,
            "body:0": 0,
            "body:7": 0
          },
          "confidence": 0.98
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.05,
            "body:4": 0,
            "body:1": 0.01,
            "body:5": 0,
            "body:3": 0.08,
            "body:6": 0.01,
            "body:0": 0,
            "body:2": 0.01,
            "body:7": 0.84
          },
          "confidence": 0.82
        }
      },
      "usage": {
        "input_tokens": 1654,
        "output_tokens": 223
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1246.045530000003,
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
    "seq": 1856,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-379",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:45.453Z",
    "offsetMs": 1.2818020000122488
  },
  {
    "seq": 1857,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-379",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:46.071Z",
    "offsetMs": 619.7158500000369,
    "elapsedMs": 618.006882000016,
    "outcome": "success"
  },
  {
    "seq": 1858,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-379",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:46.075Z",
    "offsetMs": 623.1053400000092
  },
  {
    "seq": 1859,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-379",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:46.697Z",
    "offsetMs": 1245.7417680000071,
    "elapsedMs": 622.0769300000393,
    "outcome": "success"
  },
  {
    "seq": 1860,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-379",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:46.698Z",
    "offsetMs": 1246.1065490000183,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "95048fa3f5ddffafa213627a53bbffa6cc64009dc3a17cbcc51f14b50fce1649";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1857},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1859},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1860}} as const;
export const projectionSha256 = "93a2bfea3de321c864ef250aa6b07f4862bacf0eab832c39b9b8c9ed8fe56de4";
