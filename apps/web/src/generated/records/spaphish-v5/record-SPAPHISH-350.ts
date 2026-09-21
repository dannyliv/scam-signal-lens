import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-350",
  "inputSha256": "8139c11ac7a5a38cc72cc81d20856660726272a8a685acbe0a8a694e12ae433a",
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
      "end": 8,
      "text": "info   !"
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 8,
      "end": 14,
      "text": "#oEFDa"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 50,
      "text": "Es momento de actualizar tu método de pago ¡Hola! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 50,
      "end": 92,
      "text": "Esperamos que estés teniendo un gran día. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 92,
      "end": 258,
      "text": "Queremos informarte que no fue posible realizar el cobro de tu última suscripción debido a un inconveniente con el método de pago que tienes registrado en tu cuenta. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 258,
      "end": 445,
      "text": "Para evitar la interrupción del servicio y seguir disfrutando de toda tu música sin anuncios ni interrupciones, te pedimos que actualices tu información de pago en las próximas 48 horas. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 445,
      "end": 565,
      "text": "Actualizar método de pago ¡Gracias por seguir formando parte de la familia Spoti­­­­­­­­­­­­­­­­­­fy­­­­­­­­­­­­­­­­­­! "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 565,
      "end": 597,
      "text": "Valoramos mucho tu preferencia. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 597,
      "end": 693,
      "text": "Spoti­­­­­­­­­­­­­­­­­­fy­­­­­­­­­­­­­­­­­­ AB, Riverside Square 48, 119 72, Nordholm, Terranova"
    }
  ],
  "passA": {
    "requestSha256": "8a5bb838b16fe86ccf1037058792b6dc27a65fbc97d017f9011de9f73c6a8f13",
    "capturedAt": "2026-09-20T23:45:50.264Z",
    "elapsedMs": 195.24749999999767,
    "successfulAttemptElapsedMs": 192.98633300000802,
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
          "noul": 0.62
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.54
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.96
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.9
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.15
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
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
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
            "mixed_or_unknown": 0.27,
            "independently_established": 0.02,
            "sender_supplied": 0.53,
            "no_sensitive_action": 0.18
          },
          "confidence": 0.36
        }
      },
      "usage": {
        "input_tokens": 3665,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "050a15045db69e68bf0e739451ff43259a8cd5a1fe3652dc56d80aef88e988db",
    "capturedAt": "2026-09-20T23:45:50.495Z",
    "elapsedMs": 229.39475000000675,
    "successfulAttemptElapsedMs": 227.26087499999267,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "subject:1": 0,
            "NONE": 0.1,
            "body:4": 0.03,
            "body:5": 0,
            "body:6": 0,
            "body:1": 0,
            "body:0": 0.01,
            "body:3": 0.86,
            "body:2": 0,
            "subject:0": 0
          },
          "confidence": 0.83
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "subject:1": 0,
            "NONE": 0.24000000000000002,
            "body:4": 0.03,
            "body:5": 0,
            "body:6": 0,
            "body:1": 0,
            "body:0": 0.02,
            "body:3": 0.71,
            "body:2": 0,
            "subject:0": 0
          },
          "confidence": 0.67
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "subject:1": 0,
            "body:2": 0,
            "body:4": 0,
            "body:5": 0,
            "body:6": 0,
            "body:1": 0,
            "body:0": 0,
            "body:3": 1,
            "NONE": 0,
            "subject:0": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "subject:1": 0,
            "body:2": 0.04,
            "body:4": 0.85,
            "body:5": 0,
            "body:6": 0.05,
            "body:1": 0,
            "body:0": 0.01,
            "body:3": 0.04,
            "NONE": 0.01,
            "subject:0": 0
          },
          "confidence": 0.82
        }
      },
      "usage": {
        "input_tokens": 2926,
        "output_tokens": 440
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 427.45299999999406,
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
        "status": "selected",
        "segmentId": "body:3"
      },
      "payment_request": {
        "status": "selected",
        "segmentId": "body:3"
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:3"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:4"
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
    "seq": 1714,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-350",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:50.070Z",
    "offsetMs": 1.6218339999904856
  },
  {
    "seq": 1715,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-350",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:50.263Z",
    "offsetMs": 195.24887499999022,
    "elapsedMs": 192.98633300000802,
    "outcome": "success"
  },
  {
    "seq": 1716,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-350",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:50.267Z",
    "offsetMs": 199.33387499999662
  },
  {
    "seq": 1717,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-350",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:50.495Z",
    "offsetMs": 427.234375,
    "elapsedMs": 227.26087499999267,
    "outcome": "success"
  },
  {
    "seq": 1718,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-350",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:50.495Z",
    "offsetMs": 427.50824999999895,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d5f666c452708281e2779b3abc214fe7c2b6e384ee685707aa4d3f9f6496febd";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1715},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1717},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1718}} as const;
export const projectionSha256 = "b10e65bab15cc89676c818d2edc828885d55f252d3e82e0353fba0699f77a95d";
