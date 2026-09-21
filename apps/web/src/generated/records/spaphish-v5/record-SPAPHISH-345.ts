import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-345",
  "inputSha256": "f51357f310b02dfbc613ca007fe8ee9d5ac633ea82c514e5d7658112f483f224",
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
      "end": 57,
      "text": "Pablito - Tienes (1) paquete esperando ser entregado 📦. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 57,
      "end": 106,
      "text": "Usa tu código para rastrearlo y recibirlo ___🚚. "
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 106,
      "end": 113,
      "text": "ID#7905"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 64,
      "text": "estafeta® Querido Miguel Duarte Tienes (1) mensaje de nosotros. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 64,
      "end": 111,
      "text": "Por favor, haz clic en confirmar para abrirlo. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 111,
      "end": 258,
      "text": "Su código de seguimiento: 892774613 Continuar ➢ ¡Programe su entrega y suscríbase a nuestras notificaciones para evitar que esto vuelva a suceder! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 258,
      "end": 328,
      "text": "Programar entrega ahora Gracias por su pronta atención a este asunto. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 328,
      "end": 355,
      "text": "Esperamos su confirmación. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 355,
      "end": 455,
      "text": "Atentamente, estafeta Sobre Nosotros | Contacto | Administrar Preferencias © 2025 estafeta Limited. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 455,
      "end": 485,
      "text": "Todos los derechos reservados."
    }
  ],
  "passA": {
    "requestSha256": "ce99a79e5a3dba82c4ede8057094ac0b0ba11ba400d58dc871d99a9222415c4c",
    "capturedAt": "2026-09-20T23:45:48.509Z",
    "elapsedMs": 176.79183299999568,
    "successfulAttemptElapsedMs": 174.7614590000012,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.2
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.07
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
          "noul": 0.57
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.9
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.31
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
            "active_request": 1,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.02,
            "independently_established": 0,
            "no_sensitive_action": 0.29,
            "sender_supplied": 0.69
          },
          "confidence": 0.59
        }
      },
      "usage": {
        "input_tokens": 3602,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "794ad9f927e95ff02a3d46818fdcbbc3125de46bef7e7a5c15433e27dff0de93",
    "capturedAt": "2026-09-20T23:45:48.740Z",
    "elapsedMs": 228.6759999999922,
    "successfulAttemptElapsedMs": 226.2857079999958,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 0.53,
            "subject:0": 0.01,
            "subject:2": 0,
            "body:1": 0.01,
            "body:3": 0.4,
            "body:6": 0,
            "body:0": 0,
            "NONE": 0.04,
            "body:4": 0.01,
            "body:5": 0,
            "subject:1": 0
          },
          "confidence": 0.49
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:3": 0.01,
            "subject:0": 0.01,
            "subject:2": 0,
            "body:1": 0.02,
            "body:2": 0.01,
            "body:6": 0,
            "body:0": 0.73,
            "NONE": 0.04,
            "body:4": 0,
            "body:5": 0.18,
            "subject:1": 0
          },
          "confidence": 0.69
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:3": 0,
            "subject:0": 0,
            "subject:2": 0,
            "body:1": 0.06,
            "body:2": 0.02,
            "body:6": 0,
            "body:0": 0,
            "NONE": 0.92,
            "body:4": 0,
            "body:5": 0,
            "subject:1": 0
          },
          "confidence": 0.9
        }
      },
      "usage": {
        "input_tokens": 2119,
        "output_tokens": 360
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 407.88620799999626,
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
    "seq": 1689,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-345",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:48.334Z",
    "offsetMs": 1.4777909999975236
  },
  {
    "seq": 1690,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-345",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:48.509Z",
    "offsetMs": 176.79475000000093,
    "elapsedMs": 174.7614590000012,
    "outcome": "success"
  },
  {
    "seq": 1691,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-345",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:48.513Z",
    "offsetMs": 180.5154579999944
  },
  {
    "seq": 1692,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-345",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:48.740Z",
    "offsetMs": 407.629958000005,
    "elapsedMs": 226.2857079999958,
    "outcome": "success"
  },
  {
    "seq": 1693,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-345",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:48.740Z",
    "offsetMs": 407.9467500000028,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "960eea59f2d88814a8ef9d26868df59c361f14e5b88d86a2ed293b4b2da3352f";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1690},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1692},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1693}} as const;
export const projectionSha256 = "f1f1974cf00478a9624ffbab4798d7f49f11c2c5105a4681d02e3f4c12f1b60d";
