import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-345",
  "inputSha256": "f51357f310b02dfbc613ca007fe8ee9d5ac633ea82c514e5d7658112f483f224",
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
    "requestSha256": "c78dd508e58396f01668cf893e013c83296525ac3175dce9b3a8a9a3ddc309df",
    "capturedAt": "2026-09-22T03:55:05.752Z",
    "elapsedMs": 680.9410730000236,
    "successfulAttemptElapsedMs": 679.1622230000212,
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
          "noul": 0.09
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
          "noul": 0.6
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.27
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
          "noul": 0.05
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
            "independently_established": 0,
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.43,
            "sender_supplied": 0.56
          },
          "confidence": 0.41
        }
      },
      "usage": {
        "input_tokens": 5052,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "0ce339ad19104f86c0124aafe09c414a80312a8c676979617ff1b5e93df9e1e6",
    "capturedAt": "2026-09-22T03:55:06.502Z",
    "elapsedMs": 748.378469999996,
    "successfulAttemptElapsedMs": 746.4499349999824,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 0.47,
            "body:4": 0.01,
            "body:0": 0,
            "body:6": 0.01,
            "body:5": 0,
            "subject:2": 0,
            "NONE": 0.08,
            "body:3": 0.42,
            "subject:1": 0,
            "subject:0": 0,
            "body:1": 0.01
          },
          "confidence": 0.41
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:5": 0.26,
            "body:4": 0,
            "body:0": 0.61,
            "body:6": 0,
            "body:2": 0.02,
            "subject:2": 0,
            "NONE": 0.05,
            "body:3": 0.02,
            "body:1": 0.03,
            "subject:1": 0,
            "subject:0": 0.01
          },
          "confidence": 0.56
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.02,
            "body:0": 0,
            "body:5": 0,
            "body:6": 0,
            "body:4": 0,
            "subject:2": 0,
            "NONE": 0.83,
            "body:3": 0.01,
            "subject:1": 0,
            "subject:0": 0,
            "body:1": 0.14
          },
          "confidence": 0.81
        }
      },
      "usage": {
        "input_tokens": 2427,
        "output_tokens": 360
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1431.1720689999638,
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
        "status": "low_confidence",
        "segmentId": null
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
    "seq": 1687,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-345",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:05.073Z",
    "offsetMs": 1.442557999980636
  },
  {
    "seq": 1688,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-345",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:05.752Z",
    "offsetMs": 680.9418210000149,
    "elapsedMs": 679.1622230000212,
    "outcome": "success"
  },
  {
    "seq": 1689,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-345",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:05.755Z",
    "offsetMs": 683.8781539999763
  },
  {
    "seq": 1690,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-345",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:06.502Z",
    "offsetMs": 1430.8379960000166,
    "elapsedMs": 746.4499349999824,
    "outcome": "success"
  },
  {
    "seq": 1691,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-345",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:06.502Z",
    "offsetMs": 1431.2447479999973,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "2d6036a72ed611faf6e0f6e37031037519b36aed5df0392f1522ea2deb999134";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1688},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1690},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1691}} as const;
export const projectionSha256 = "496ee5b2bc3a2d6ce966bad493923df5056da0cd0753d55e021b1a421e141169";
