import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-393",
  "inputSha256": "3800e5322b029ca3353ead36f5394a0d02889e00ffd747947cd618a346bf3ea3",
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
      "end": 48,
      "text": "Entrega pendiente – Confirma tu dirección y pago"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 172,
      "text": "Correos de México - Notificación de paquete Correos de México Tienes un mensaje importante sobre tu paquete Hola, Te informamos que tienes un paquete pendiente de entrega. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 172,
      "end": 263,
      "text": "Para proceder con el envío, es necesario pagar los gastos de envío por un monto de 85 MXN. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 263,
      "end": 497,
      "text": "Fecha: 20 de diciembre de 2025 Monto a pagar: 85 MXN Haz clic en el botón de abajo para pagar los gastos y recibir tu paquete en la dirección indicada: Pagar los gastos Si tienes alguna pregunta o inquietud, no dudes en contactarnos. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 497,
      "end": 538,
      "text": "Gracias por confiar en nuestro servicio. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 538,
      "end": 615,
      "text": "Correos de México Desuscríbete si no deseas recibir más correos electrónicos."
    }
  ],
  "passA": {
    "requestSha256": "d75eda766047b260d4bd759e3907bccb25606a65bb106df1d495591c393f0868",
    "capturedAt": "2026-09-20T23:46:03.927Z",
    "elapsedMs": 177.58137500000885,
    "successfulAttemptElapsedMs": 175.73649999999907,
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
          "noul": 0.72
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.98
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.35
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.27
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.66
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
            "informational": 0,
            "mixed_or_unclear": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0,
            "sender_supplied": 1,
            "independently_established": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 3587,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "ae1640a47ba28d37d6d08a1335bfeb1d78be015df5580ee365d0bf0bd405c011",
    "capturedAt": "2026-09-20T23:46:04.079Z",
    "elapsedMs": 148.93399999997928,
    "successfulAttemptElapsedMs": 146.0124590000196,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "subject:0": 0.05,
            "NONE": 0.28,
            "body:2": 0.63,
            "body:3": 0,
            "body:4": 0,
            "body:1": 0.04,
            "body:0": 0
          },
          "confidence": 0.56
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0.01,
            "body:4": 0,
            "body:2": 0.49,
            "body:3": 0,
            "NONE": 0,
            "body:1": 0.5,
            "body:0": 0
          },
          "confidence": 0.42
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.04,
            "NONE": 0.38,
            "body:2": 0.3,
            "body:3": 0,
            "body:4": 0,
            "body:1": 0.27,
            "body:0": 0.01
          },
          "confidence": 0.28
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.01,
            "body:2": 0,
            "body:3": 0,
            "body:4": 0.03,
            "body:1": 0,
            "body:0": 0.96
          },
          "confidence": 0.95
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.92,
            "body:2": 0.08,
            "body:3": 0,
            "body:4": 0,
            "body:1": 0,
            "body:0": 0
          },
          "confidence": 0.9
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0.01,
            "NONE": 0.1,
            "body:2": 0.27,
            "body:3": 0,
            "body:4": 0,
            "body:1": 0.62,
            "body:0": 0
          },
          "confidence": 0.55
        }
      },
      "usage": {
        "input_tokens": 3354,
        "output_tokens": 500
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 329.6388330000045,
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
        "segmentId": "body:0"
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
    "seq": 1927,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-393",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:03.750Z",
    "offsetMs": 1.3112499999988358
  },
  {
    "seq": 1928,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-393",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:03.927Z",
    "offsetMs": 177.58079199999338,
    "elapsedMs": 175.73649999999907,
    "outcome": "success"
  },
  {
    "seq": 1929,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-393",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:03.931Z",
    "offsetMs": 182.19324999998207
  },
  {
    "seq": 1930,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-393",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:04.078Z",
    "offsetMs": 329.09466699999757,
    "elapsedMs": 146.0124590000196,
    "outcome": "success"
  },
  {
    "seq": 1931,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-393",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:04.079Z",
    "offsetMs": 329.7261249999865,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "58f84511d9999142173300e4dc6f7d2f14ee96516ad1ae2ac68955858dfb013a";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1928},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1930},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1931}} as const;
export const projectionSha256 = "458ceb056bd9ee493b3c81ae252735e1d1ce6d6063b295090fef006bc370f262";
