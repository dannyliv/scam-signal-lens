import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-259",
  "inputSha256": "1763ad037cfee3519a74356dfab46942341c32c6832a1038fdd8512a63cc4cbb",
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
      "end": 41,
      "text": "Pablito - Tiene (1) mensaje de nosotros. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 41,
      "end": 71,
      "text": "Haga clic abajo para abrirlo. "
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 71,
      "end": 73,
      "text": "📦"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 64,
      "text": "FedEx ® ☰ Fecha de envio : 07-20-2024 Falta de entrega a Marco! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 64,
      "end": 132,
      "text": "entrega de paquete suspendida ¿Cómo le gustaría recibir su paquete? "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 132,
      "end": 160,
      "text": "Quiero que me lo entreguen. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 160,
      "end": 180,
      "text": "Lo tomaré yo mismo. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 180,
      "end": 222,
      "text": "¿Dónde desea que le entreguen el paquete? "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 222,
      "end": 591,
      "text": "En casa Trabajar Información del paquete: Situación Detenido en el centro de distribución Enviar a través de Seguimiento de correspondencia internacional Dado: 07-20-2024 -------------------------------------------------------------------------------- CONSULTA AQUÍ Si ya no desea recibir estos correos electrónicos, puede darse de baja click en el enlace darse de baja"
    }
  ],
  "passA": {
    "requestSha256": "145b39ac62279b1c173cdf99b1732213584fd06ad9dbc763390e1f501d1c147d",
    "capturedAt": "2026-09-20T23:45:18.432Z",
    "elapsedMs": 190.1912910000101,
    "successfulAttemptElapsedMs": 186.90049999998882,
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
          "noul": 0.08
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.33
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.88
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.28
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
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
            "active_request": 0.99,
            "informational": 0.01,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.7,
            "independently_established": 0,
            "sender_supplied": 0.29,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.6
        }
      },
      "usage": {
        "input_tokens": 3593,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "80e0be35f9e8a11ed7e714bbd9c050f5c54395f1d63fab7f386692154b102075",
    "capturedAt": "2026-09-20T23:45:18.572Z",
    "elapsedMs": 139.01879099999496,
    "successfulAttemptElapsedMs": 137.69470900000306,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.79,
            "body:0": 0.01,
            "NONE": 0.18,
            "subject:0": 0,
            "subject:1": 0.01,
            "body:2": 0,
            "body:5": 0.01,
            "body:4": 0,
            "subject:2": 0,
            "body:3": 0
          },
          "confidence": 0.76
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.02,
            "body:0": 0.83,
            "NONE": 0.04,
            "subject:0": 0.09,
            "subject:1": 0,
            "body:2": 0.01,
            "body:5": 0.01,
            "body:4": 0,
            "subject:2": 0,
            "body:3": 0
          },
          "confidence": 0.81
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0,
            "body:0": 0,
            "NONE": 0.85,
            "subject:0": 0,
            "subject:1": 0.04,
            "body:5": 0.09,
            "body:2": 0.01,
            "body:3": 0.01,
            "subject:2": 0,
            "body:4": 0
          },
          "confidence": 0.83
        }
      },
      "usage": {
        "input_tokens": 2038,
        "output_tokens": 333
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 330.85337500000605,
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
        "segmentId": "body:1"
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
    "seq": 1268,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-259",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:18.244Z",
    "offsetMs": 2.601083000001381
  },
  {
    "seq": 1269,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-259",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:18.431Z",
    "offsetMs": 190.19341700000223,
    "elapsedMs": 186.90049999998882,
    "outcome": "success"
  },
  {
    "seq": 1270,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-259",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:18.434Z",
    "offsetMs": 192.43700000000536
  },
  {
    "seq": 1271,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-259",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:18.572Z",
    "offsetMs": 330.6392920000071,
    "elapsedMs": 137.69470900000306,
    "outcome": "success"
  },
  {
    "seq": 1272,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-259",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:18.572Z",
    "offsetMs": 330.9055420000077,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ca145c3d602af9b2bc2982f1dc851f6e8272c936c7bf642352be3525b12afecb";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1269},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1271},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1272}} as const;
export const projectionSha256 = "ec9430343d51432abaccf0f45c05b4f94ae1c77490741e63eb1e0e9454b2e2e9";
