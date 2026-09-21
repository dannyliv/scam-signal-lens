import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-110",
  "inputSha256": "337710e5bc94660652ba707d0e82fd09e38d23fef6cf85a49a0c68518620d4af",
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
      "end": 69,
      "text": "Ezequiela Miguelina - Tienes (1) paquete esperando ser entregado 📦. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 69,
      "end": 118,
      "text": "Usa tu código para rastrearlo y recibirlo ___🚚. "
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 118,
      "end": 125,
      "text": "ID#7182"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 7,
      "text": "❒GLS . "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 7,
      "end": 54,
      "text": "■ Tienes (1) paquete esperando ser entregado . "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 54,
      "end": 97,
      "text": "Usa tu código para rastrearlo y recibirlo. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 97,
      "end": 260,
      "text": "Tu código de seguimiento : 983440712 Continuar ➢ ■ Programa tu entrega y suscríbete a nuestras notificaciones de calendario para evitar que esto vuelva a suceder. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 260,
      "end": 325,
      "text": "Programar Entrega  Gracias por tu pronta atención a este asunto. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 325,
      "end": 352,
      "text": "Esperamos tu confirmación. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 352,
      "end": 451,
      "text": "Saludos cordiales, GLS® Sobre Nosotros | Contáctanos | Gestionar Preferencias © 2025 GLS® Limited. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 451,
      "end": 482,
      "text": "Todos los derechos reservados. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 482,
      "end": 574,
      "text": "Si ya no deseas recibir estos correos electrónicos, puedes darte de baja haciendo clic aquí."
    }
  ],
  "passA": {
    "requestSha256": "9f490839329b92e867ce972dd6d1b1750d14578e590c0fb2300ad2e32c57a4e1",
    "capturedAt": "2026-09-20T23:44:26.817Z",
    "elapsedMs": 167.2603339999987,
    "successfulAttemptElapsedMs": 165.9455420000013,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.07
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.85
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.14
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
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
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.63,
            "sender_supplied": 0.36,
            "independently_established": 0
          },
          "confidence": 0.5
        }
      },
      "usage": {
        "input_tokens": 3626,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "fc0aca3e52fbeb3448593ca49e5342a176567537ef3c918f5f4e21d4a02e2f18",
    "capturedAt": "2026-09-20T23:44:26.963Z",
    "elapsedMs": 144.10104200000205,
    "successfulAttemptElapsedMs": 142.9672500000015,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:5": 0.02,
            "body:2": 0.01,
            "NONE": 0.1,
            "body:3": 0.53,
            "body:8": 0,
            "body:7": 0,
            "subject:2": 0,
            "body:1": 0.01,
            "body:0": 0,
            "subject:1": 0.01,
            "subject:0": 0,
            "body:4": 0.32,
            "body:6": 0
          },
          "confidence": 0.49
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:5": 0.01,
            "NONE": 0.14,
            "body:3": 0.04,
            "body:2": 0.01,
            "body:8": 0,
            "subject:1": 0,
            "subject:2": 0,
            "body:1": 0.01,
            "body:0": 0.31,
            "body:7": 0,
            "subject:0": 0.01,
            "body:4": 0.05,
            "body:6": 0.42
          },
          "confidence": 0.36
        }
      },
      "usage": {
        "input_tokens": 1697,
        "output_tokens": 277
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 313.4304170000032,
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
    "seq": 538,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-110",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:26.651Z",
    "offsetMs": 0.8746250000040163
  },
  {
    "seq": 539,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-110",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:26.817Z",
    "offsetMs": 167.26216700000077,
    "elapsedMs": 165.9455420000013,
    "outcome": "success"
  },
  {
    "seq": 540,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-110",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:26.819Z",
    "offsetMs": 169.74120799999946
  },
  {
    "seq": 541,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-110",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:26.963Z",
    "offsetMs": 313.14729200000147,
    "elapsedMs": 142.9672500000015,
    "outcome": "success"
  },
  {
    "seq": 542,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-110",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:26.963Z",
    "offsetMs": 313.4939999999988,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "24b9a681021280ca339bc5f8bb4ba312f8789fce342d84f279054157f73c9e1f";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":539},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":541},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":542}} as const;
export const projectionSha256 = "10ec3591596b5f1e4d77c79d89c149a4f9fbe6bb090f3448f13b0626799f4cc8";
