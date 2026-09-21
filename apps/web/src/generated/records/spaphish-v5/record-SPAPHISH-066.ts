import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-066",
  "inputSha256": "13f69bc3f1e532601283052a6839640c2f59ac0b87d7b3fed9b53c72d9cc2c99",
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
      "end": 28,
      "text": "Pagar derechos de aduana   !"
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 28,
      "end": 34,
      "text": "#qpDYM"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 35,
      "text": "Entrega detenida: acción necesaria\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 35,
      "end": 55,
      "text": "Estimado/a usuario,\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 55,
      "end": 176,
      "text": "Tu paquete se encuentra actualmente retenido ya que no se ha realizado el pago correspondiente a los derechos de aduana.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 176,
      "end": 204,
      "text": "Monto pendiente: $58.40 MXN\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 204,
      "end": 332,
      "text": "Para liberar tu envío y evitar que sea devuelto al remitente, te solicitamos completar el pago dentro de las próximas 48 horas.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 332,
      "end": 353,
      "text": "Realizar Pago Seguro\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 353,
      "end": 447,
      "text": "Este mensaje ha sido generado automáticamente por el sistema de rastreo de Correos de México.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 447,
      "end": 451,
      "text": "Av. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 451,
      "end": 530,
      "text": "Mirador 1520, Parque Industrial del Norte, Naucalpan, Estado de México, México."
    }
  ],
  "passA": {
    "requestSha256": "883623186b54dc1dc93f12a3b3ef2021228a2935e47777b55350895bece7d3d4",
    "capturedAt": "2026-09-20T23:44:12.666Z",
    "elapsedMs": 123.64679199999955,
    "successfulAttemptElapsedMs": 122.28499999999985,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.68
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.97
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.97
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.91
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.21
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.33
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
          "noul": 0.04
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
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.98,
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.01
          },
          "confidence": 0.97
        }
      },
      "usage": {
        "input_tokens": 3574,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "227039ebe5a7bf9c54647db88e70d62b091d9731074d10d407b78fc21103e2ce",
    "capturedAt": "2026-09-20T23:44:12.827Z",
    "elapsedMs": 158.0409589999981,
    "successfulAttemptElapsedMs": 156.54441700000098,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:6": 0,
            "body:7": 0,
            "body:3": 0,
            "subject:1": 0,
            "body:5": 0.47,
            "subject:0": 0.01,
            "NONE": 0.31,
            "body:2": 0,
            "body:8": 0,
            "body:4": 0.21,
            "body:1": 0,
            "body:0": 0
          },
          "confidence": 0.42
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:6": 0,
            "body:7": 0,
            "body:3": 0,
            "subject:1": 0,
            "body:5": 0.17,
            "subject:0": 0.03,
            "NONE": 0,
            "body:2": 0,
            "body:4": 0.8,
            "body:8": 0,
            "body:1": 0,
            "body:0": 0
          },
          "confidence": 0.78
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:6": 0,
            "body:7": 0,
            "body:3": 0,
            "subject:1": 0,
            "body:5": 0,
            "subject:0": 0,
            "NONE": 0,
            "body:2": 0,
            "body:8": 0,
            "body:4": 1,
            "body:1": 0,
            "body:0": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:6": 0.95,
            "body:7": 0,
            "body:3": 0,
            "subject:1": 0,
            "body:5": 0,
            "subject:0": 0,
            "body:8": 0,
            "body:2": 0,
            "NONE": 0.01,
            "body:4": 0.04,
            "body:1": 0,
            "body:0": 0
          },
          "confidence": 0.93
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:1": 0,
            "body:7": 0,
            "body:3": 0,
            "body:6": 0.01,
            "body:5": 0.03,
            "subject:0": 0,
            "body:8": 0,
            "body:2": 0,
            "NONE": 0.93,
            "body:4": 0.03,
            "body:1": 0,
            "body:0": 0
          },
          "confidence": 0.92
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "subject:1": 0,
            "body:7": 0,
            "body:3": 0.01,
            "body:6": 0,
            "body:5": 0.08,
            "subject:0": 0.03,
            "body:8": 0,
            "body:2": 0.02,
            "NONE": 0.41000000000000003,
            "body:4": 0.45,
            "body:1": 0,
            "body:0": 0
          },
          "confidence": 0.39
        }
      },
      "usage": {
        "input_tokens": 3629,
        "output_tokens": 772
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 285.0187499999993,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
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
        "segmentId": "body:4"
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
        "segmentId": "body:6"
      },
      "verification_bypass": {
        "status": "none_selected",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "low_confidence",
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
    "seq": 321,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-066",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:12.543Z",
    "offsetMs": 0.8649169999989681
  },
  {
    "seq": 322,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-066",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:12.666Z",
    "offsetMs": 123.64679199999955,
    "elapsedMs": 122.28499999999985,
    "outcome": "success"
  },
  {
    "seq": 323,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-066",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:12.670Z",
    "offsetMs": 127.48616699999911
  },
  {
    "seq": 324,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-066",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:12.827Z",
    "offsetMs": 284.64529200000106,
    "elapsedMs": 156.54441700000098,
    "outcome": "success"
  },
  {
    "seq": 325,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-066",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:12.827Z",
    "offsetMs": 285.07483299999876,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "c617caf3826fee6ed3261580b2f40276b748aa117884f83ca56c9949398c535b";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":322},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":324},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":325}} as const;
export const projectionSha256 = "b6cbfe502ebdc5a8f04425fcf9cf92831372ee00e5eff61a8b75b1fb1ce1f1a4";
