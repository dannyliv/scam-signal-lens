import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-067",
  "inputSha256": "864cdb78dc00b16d785ac3191caf94eeecf4c1cce1039cddc0f0be523126f2ec",
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
      "text": "ID#9047"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 42,
      "text": "estafeta® Tienes (1) mensaje de nosotros. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 42,
      "end": 89,
      "text": "Por favor, haz clic en confirmar para abrirlo. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 89,
      "end": 236,
      "text": "Su código de seguimiento: 345987601 Continuar ➢ ¡Programe su entrega y suscríbase a nuestras notificaciones para evitar que esto vuelva a suceder! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 236,
      "end": 306,
      "text": "Programar entrega ahora Gracias por su pronta atención a este asunto. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 306,
      "end": 333,
      "text": "Esperamos su confirmación. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 333,
      "end": 433,
      "text": "Atentamente, estafeta Sobre Nosotros | Contacto | Administrar Preferencias © 2025 estafeta Limited. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 433,
      "end": 464,
      "text": "Todos los derechos reservados. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 464,
      "end": 554,
      "text": "Si ya no desea recibir estos correos electrónicos, puede darse de baja haciendo clic aquí."
    }
  ],
  "passA": {
    "requestSha256": "c6034307992c0c5561104c0d3c93ff0e84f116ce5114a191cc2da9d369bd89ba",
    "capturedAt": "2026-09-22T03:49:32.705Z",
    "elapsedMs": 677.2930290000077,
    "successfulAttemptElapsedMs": 675.7853679999971,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.12
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
          "noul": 0.6
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.91
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
            "educational_or_quoted": 0,
            "informational": 0,
            "active_request": 1,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.52,
            "no_sensitive_action": 0.47,
            "independently_established": 0
          },
          "confidence": 0.36
        }
      },
      "usage": {
        "input_tokens": 5066,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "2133b9060f68166aa2e96d46136d8faec2af2f06999117fea4016839352dd42a",
    "capturedAt": "2026-09-22T03:49:33.358Z",
    "elapsedMs": 651.2766110000084,
    "successfulAttemptElapsedMs": 650.3346770000062,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "subject:2": 0,
            "body:7": 0,
            "body:1": 0,
            "body:0": 0,
            "body:2": 0.71,
            "body:3": 0.24,
            "body:6": 0,
            "NONE": 0.04,
            "body:4": 0.01,
            "body:5": 0,
            "subject:1": 0,
            "subject:0": 0
          },
          "confidence": 0.67
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:2": 0,
            "body:7": 0,
            "body:1": 0.06,
            "body:0": 0.55,
            "body:2": 0.01,
            "body:3": 0.02,
            "body:6": 0,
            "subject:1": 0,
            "body:4": 0.01,
            "body:5": 0.31,
            "NONE": 0.03,
            "subject:0": 0.01
          },
          "confidence": 0.5
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:2": 0,
            "body:7": 0,
            "body:1": 0.19,
            "body:0": 0,
            "body:2": 0.01,
            "body:3": 0,
            "body:6": 0,
            "NONE": 0.8,
            "body:4": 0,
            "body:5": 0,
            "subject:1": 0,
            "subject:0": 0
          },
          "confidence": 0.77
        }
      },
      "usage": {
        "input_tokens": 2525,
        "output_tokens": 387
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1330.7678319999977,
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
        "segmentId": "body:2"
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
    "seq": 326,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-067",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:32.028Z",
    "offsetMs": 1.0952720000059344
  },
  {
    "seq": 327,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-067",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:32.704Z",
    "offsetMs": 677.2943620000005,
    "elapsedMs": 675.7853679999971,
    "outcome": "success"
  },
  {
    "seq": 328,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-067",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:32.707Z",
    "offsetMs": 679.640155000001
  },
  {
    "seq": 329,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-067",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:33.357Z",
    "offsetMs": 1330.313645000002,
    "elapsedMs": 650.3346770000062,
    "outcome": "success"
  },
  {
    "seq": 330,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-067",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:33.358Z",
    "offsetMs": 1330.847357000006,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "9db8cb98b1bac2a5840d0ed75117b8631869c46bef14355718b1d2c7fcf1bc7d";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":327},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":329},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":330}} as const;
export const projectionSha256 = "6f79c56b040075847f642621fa4e6750ecc345e3424c8930e0f350834ad2e767";
