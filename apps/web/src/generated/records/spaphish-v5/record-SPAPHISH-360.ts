import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-360",
  "inputSha256": "3bfe0387ad3aeb225fa72806e0280a3c25dc27c1d9e5b9a5630242fdf8573e95",
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
      "text": "ID#7897"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 57,
      "text": "estafeta® Querido Andrés Tienes (1) mensaje de nosotros. "
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
      "text": "Su código de seguimiento: 345987601 Continuar ➢ ¡Programe su entrega y suscríbase a nuestras notificaciones para evitar que esto vuelva a suceder! "
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
    "requestSha256": "f50797f84dc1cb58ae504211b27ef48cce0500f50ecae2196da578c756b0ec0b",
    "capturedAt": "2026-09-20T23:45:53.751Z",
    "elapsedMs": 226.93562499999825,
    "successfulAttemptElapsedMs": 224.84958399999596,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.21
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
          "noul": 0.64
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.9
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.3
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
            "active_request": 1,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.29,
            "mixed_or_unknown": 0.02,
            "independently_established": 0,
            "sender_supplied": 0.69
          },
          "confidence": 0.58
        }
      },
      "usage": {
        "input_tokens": 3601,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "afddbccdaa099022541aee6f526cdb5be1b7b3a2943e78fcacfedd2948b479fc",
    "capturedAt": "2026-09-20T23:45:53.860Z",
    "elapsedMs": 107.91650000000664,
    "successfulAttemptElapsedMs": 106.6193329999951,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "subject:2": 0,
            "body:4": 0.01,
            "NONE": 0.77,
            "body:1": 0.1,
            "body:6": 0,
            "subject:1": 0.03,
            "body:0": 0,
            "body:5": 0,
            "body:3": 0,
            "body:2": 0.09
          },
          "confidence": 0.74
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "subject:0": 0,
            "subject:2": 0,
            "body:4": 0,
            "NONE": 0.03,
            "body:1": 0.01,
            "body:6": 0,
            "subject:1": 0,
            "body:0": 0,
            "body:5": 0,
            "body:3": 0.37,
            "body:2": 0.59
          },
          "confidence": 0.54
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.02,
            "body:6": 0,
            "body:4": 0,
            "NONE": 0.04,
            "subject:2": 0,
            "body:1": 0.04,
            "subject:1": 0,
            "body:5": 0.18,
            "body:0": 0.7,
            "body:3": 0.01,
            "body:2": 0.01
          },
          "confidence": 0.66
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "subject:2": 0,
            "body:4": 0,
            "body:1": 0.08,
            "body:6": 0,
            "NONE": 0.91,
            "subject:1": 0,
            "body:5": 0,
            "body:0": 0,
            "body:3": 0,
            "body:2": 0.01
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 2680,
        "output_tokens": 478
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 336.5018749999872,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "request_route_low_confidence"
    ],
    "evidence": {
      "credential_request": {
        "status": "none_selected",
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
    "seq": 1764,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-360",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:53.525Z",
    "offsetMs": 1.4657079999888083
  },
  {
    "seq": 1765,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-360",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:53.751Z",
    "offsetMs": 226.9375,
    "elapsedMs": 224.84958399999596,
    "outcome": "success"
  },
  {
    "seq": 1766,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-360",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:53.753Z",
    "offsetMs": 228.99899999999616
  },
  {
    "seq": 1767,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-360",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:53.860Z",
    "offsetMs": 336.0146659999882,
    "elapsedMs": 106.6193329999951,
    "outcome": "success"
  },
  {
    "seq": 1768,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-360",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:53.860Z",
    "offsetMs": 336.56370799998695,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "344f7499c8610adf3b3803aa62d813fd7b21a109ff03682e1ec419a877a25972";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1765},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1767},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1768}} as const;
export const projectionSha256 = "bb03d4e7487446347bff14153ef4f501ed3c2f2c8043a81011a3849caab495ff";
