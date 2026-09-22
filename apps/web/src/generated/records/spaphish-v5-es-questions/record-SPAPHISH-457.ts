import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-457",
  "inputSha256": "8bd93688b8f8249b2c205c1a9b0fd08ddb3e85d4eb9f9acabb695ecc5c38037d",
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
      "text": "ID#6087"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 57,
      "text": "estafeta® Querido Carlos Tienes (1) mensaje de nosotros. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 57,
      "end": 104,
      "text": "Por favor, haz clic en confirmar para abrirlo. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 104,
      "end": 251,
      "text": "Su código de seguimiento: 998877665 Continuar ➢ ¡Programe su entrega y suscríbase a nuestras notificaciones para evitar que esto vuelva a suceder! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 251,
      "end": 321,
      "text": "Programar entrega ahora Gracias por su pronta atención a este asunto. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 321,
      "end": 348,
      "text": "Esperamos su confirmación. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 348,
      "end": 448,
      "text": "Atentamente, estafeta Sobre Nosotros | Contacto | Administrar Preferencias © 2025 estafeta Limited. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 448,
      "end": 478,
      "text": "Todos los derechos reservados."
    }
  ],
  "passA": {
    "requestSha256": "999c117fe2e7824e768692f60cbf388d2190afa21d183070c0fd4b66d1a55f24",
    "capturedAt": "2026-09-22T03:57:17.648Z",
    "elapsedMs": 618.8750729999738,
    "successfulAttemptElapsedMs": 617.348999000038,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.16
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.09
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.59
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.29
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
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.4,
            "sender_supplied": 0.59,
            "independently_established": 0
          },
          "confidence": 0.45
        }
      },
      "usage": {
        "input_tokens": 5051,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "51333d3619e87a54e625368d5a755bb49ac488ea95328150abc9dfe81223817f",
    "capturedAt": "2026-09-22T03:57:18.192Z",
    "elapsedMs": 542.5015949999215,
    "successfulAttemptElapsedMs": 541.0557130000088,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "NONE": 0.05,
            "subject:0": 0,
            "subject:2": 0,
            "body:2": 0.52,
            "body:1": 0.01,
            "body:3": 0.41,
            "body:5": 0,
            "subject:1": 0,
            "body:0": 0,
            "body:4": 0.01,
            "body:6": 0
          },
          "confidence": 0.46
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.01,
            "NONE": 0.06,
            "subject:2": 0,
            "body:2": 0.02,
            "body:5": 0.29,
            "body:3": 0.03,
            "body:1": 0.05,
            "subject:1": 0,
            "body:0": 0.53,
            "body:4": 0.01,
            "body:6": 0
          },
          "confidence": 0.48
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.86,
            "subject:2": 0,
            "body:2": 0.01,
            "body:1": 0.13,
            "body:3": 0,
            "body:5": 0,
            "body:0": 0,
            "subject:1": 0,
            "body:4": 0,
            "body:6": 0
          },
          "confidence": 0.84
        }
      },
      "usage": {
        "input_tokens": 2423,
        "output_tokens": 360
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1163.0942209999776,
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
    "seq": 2244,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-457",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:17.030Z",
    "offsetMs": 1.2217250000685453
  },
  {
    "seq": 2245,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-457",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:17.648Z",
    "offsetMs": 618.8756200000644,
    "elapsedMs": 617.348999000038,
    "outcome": "success"
  },
  {
    "seq": 2246,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-457",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:17.650Z",
    "offsetMs": 621.3683140000794
  },
  {
    "seq": 2247,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-457",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:18.192Z",
    "offsetMs": 1162.6980650000041,
    "elapsedMs": 541.0557130000088,
    "outcome": "success"
  },
  {
    "seq": 2248,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-457",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:18.192Z",
    "offsetMs": 1163.1450350000523,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "df6e07287551c6f7ff91f67414232148b518fba15e0b72ef62be6075325a9923";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2245},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2247},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2248}} as const;
export const projectionSha256 = "273df776c54a25467c6cde5f09f64b35ca9aeb3358d472180a0705b476abdf9d";
