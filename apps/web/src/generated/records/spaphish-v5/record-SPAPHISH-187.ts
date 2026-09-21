import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-187",
  "inputSha256": "c2c91b91daf7ea9fdc95a7d4a96e183ccaaa713e835f7b0782180b68dab5ee51",
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
      "end": 62,
      "text": ">>Pablito!! -  Tienes un (1) paquete pendiente de entrega 📦. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 62,
      "end": 108,
      "text": "Usa tu código para seguirlo y recibirlo ___🚚."
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 108,
      "end": 109,
      "text": "X"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 71,
      "text": "FedEx ® ☰ Fecha de envío: 04-15-2025 ¡Fallo en la entrega para Miguel! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 71,
      "end": 134,
      "text": "Entrega del paquete suspendida ¿Cómo desea recibir su paquete? "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 134,
      "end": 223,
      "text": "Quiero que me lo entreguen Lo recogeré yo mismo ¿Dónde desea que se entregue el paquete? "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 223,
      "end": 592,
      "text": "En casa En el trabajo Información del paquete: Estado Detenido en el centro de distribución Envío a través de Correo internacional con seguimiento Fecha: 04-15-2025 -------------------------------------------------------------------------------- Ingrese la información de entrega Si ya no desea recibir estos correos electrónicos, puede darse de baja haciendo clic aquí"
    }
  ],
  "passA": {
    "requestSha256": "b2dc6221bed18f1538daaf4267575b12c983fa0915c94535805aa51706c566c8",
    "capturedAt": "2026-09-20T23:44:51.711Z",
    "elapsedMs": 126.55866700000479,
    "successfulAttemptElapsedMs": 125.86933400000271,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.11
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.11
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
          "noul": 0.29
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.87
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.24
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
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.28,
            "no_sensitive_action": 0.71,
            "independently_established": 0,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.6
        }
      },
      "usage": {
        "input_tokens": 3594,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "15b02316c535fefcffd6d36c21113f539d11defa29624173655c8436c05b921d",
    "capturedAt": "2026-09-20T23:44:51.907Z",
    "elapsedMs": 195.2922499999986,
    "successfulAttemptElapsedMs": 194.33795900000405,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0.06,
            "subject:2": 0.02,
            "body:1": 0.38,
            "subject:1": 0.1,
            "NONE": 0.37,
            "subject:0": 0.04,
            "body:2": 0,
            "body:3": 0.03
          },
          "confidence": 0.29
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.89,
            "subject:2": 0,
            "body:1": 0.01,
            "subject:1": 0,
            "NONE": 0.06,
            "subject:0": 0.02,
            "body:2": 0.01,
            "body:3": 0.01
          },
          "confidence": 0.86
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "subject:2": 0,
            "body:1": 0.01,
            "subject:1": 0.05,
            "subject:0": 0,
            "NONE": 0.89,
            "body:2": 0.01,
            "body:3": 0.04
          },
          "confidence": 0.87
        }
      },
      "usage": {
        "input_tokens": 1958,
        "output_tokens": 279
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 323.34704200000124,
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
    "seq": 915,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-187",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:51.585Z",
    "offsetMs": 0.4475830000010319
  },
  {
    "seq": 916,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-187",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:51.711Z",
    "offsetMs": 126.55958300000202,
    "elapsedMs": 125.86933400000271,
    "outcome": "success"
  },
  {
    "seq": 917,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-187",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:51.712Z",
    "offsetMs": 128.1754579999979
  },
  {
    "seq": 918,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-187",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:51.907Z",
    "offsetMs": 322.9248329999973,
    "elapsedMs": 194.33795900000405,
    "outcome": "success"
  },
  {
    "seq": 919,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-187",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:51.908Z",
    "offsetMs": 323.453207999999,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "35e2c0734f2ace19a8e8d8734e06e8544e657406e6c359809a6a9ed2d228d8fe";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":916},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":918},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":919}} as const;
export const projectionSha256 = "aea3ceb406a7a41ba9a75667450b7aa9d90cfe70898111740acf6816f081fcf6";
