import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-007",
  "inputSha256": "a3a8d1b3a5befae82ef8788c997b24b0960cc4e2d14b0437f4675705881e6dc3",
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
      "end": 54,
      "text": "Pablito ! - ¡Tienes (1) paquete en espera de entrega! "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 54,
      "end": 104,
      "text": "Usa tu código para rastrearlo y recibirlo, ID#3216"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 69,
      "text": "FedEx ® ☰ Fecha de envío: 04-09-2025 ¡Fallo en la entrega para Raúl! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 69,
      "end": 132,
      "text": "Entrega del paquete suspendida ¿Cómo desea recibir su paquete? "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 132,
      "end": 221,
      "text": "Quiero que me lo entreguen Lo recogeré yo mismo ¿Dónde desea que se entregue el paquete? "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 221,
      "end": 589,
      "text": "En casa En el trabajo Información del paquete: Estado Detenido en el centro de distribución Envío a través de Correo internacional con seguimiento Fecha: 04-09-2025-------------------------------------------------------------------------------- Ingrese la información de entrega Si ya no desea recibir estos correos electrónicos, puede darse de baja haciendo clic aquí"
    }
  ],
  "passA": {
    "requestSha256": "0f5ad2403ff20c7f0d3dc00f7175f088d1ccb09e08a5a78da4211f52fe471198",
    "capturedAt": "2026-09-20T23:43:53.261Z",
    "elapsedMs": 138.32787499999995,
    "successfulAttemptElapsedMs": 137.28491600000007,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.14
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.13
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.23
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.88
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.26
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
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.08
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
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.31,
            "no_sensitive_action": 0.67,
            "mixed_or_unknown": 0.02
          },
          "confidence": 0.56
        }
      },
      "usage": {
        "input_tokens": 3593,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "348c7935e560b641944f675bc5ee1d9f15206060c194fe4b46ff676b15f54eb1",
    "capturedAt": "2026-09-20T23:43:53.469Z",
    "elapsedMs": 205.79974999999968,
    "successfulAttemptElapsedMs": 204.82724999999982,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:1": 0.02,
            "body:0": 0.03,
            "subject:0": 0.02,
            "body:1": 0.43,
            "body:2": 0.01,
            "body:3": 0.04,
            "NONE": 0.45
          },
          "confidence": 0.36
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0.01,
            "body:0": 0.89,
            "subject:0": 0,
            "body:1": 0.01,
            "NONE": 0.08,
            "subject:1": 0,
            "body:3": 0.01
          },
          "confidence": 0.87
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "body:0": 0,
            "subject:0": 0,
            "body:1": 0.01,
            "NONE": 0.85,
            "subject:1": 0.06,
            "body:3": 0.08
          },
          "confidence": 0.83
        }
      },
      "usage": {
        "input_tokens": 1915,
        "output_tokens": 250
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 346.0661670000004,
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
    "seq": 31,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-007",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:53.123Z",
    "offsetMs": 0.6139580000003662
  },
  {
    "seq": 32,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-007",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:53.261Z",
    "offsetMs": 138.33566700000029,
    "elapsedMs": 137.28491600000007,
    "outcome": "success"
  },
  {
    "seq": 33,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-007",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:53.263Z",
    "offsetMs": 140.47608300000002
  },
  {
    "seq": 34,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-007",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:53.468Z",
    "offsetMs": 345.73154200000045,
    "elapsedMs": 204.82724999999982,
    "outcome": "success"
  },
  {
    "seq": 35,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-007",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:53.469Z",
    "offsetMs": 346.12837500000023,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6506833362227030d23bb3fab9e54fba2bcb5ca3392823b24d1539f0b133e164";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":32},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":34},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":35}} as const;
export const projectionSha256 = "c99b8d5817ddeb67c47ca3240049ea6afdb4185dd11e9b61061fae832dc1aaa6";
