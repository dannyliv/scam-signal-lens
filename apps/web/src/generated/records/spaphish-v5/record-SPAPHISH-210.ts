import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-210",
  "inputSha256": "f101c77b7ef28f10b3272193654951cd0ae5600184e949d273e7eae3ea3d8837",
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
      "end": 56,
      "text": "Urgente: Missxtranger ¡Tu cuenta de Netflix vencerá hoy!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 30,
      "text": "⚠️¡Su cuenta será suspendida! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 30,
      "end": 214,
      "text": "Por favor actualice sus detalles de pago N E T F L I X No pudimos validar su cuenta Estimada Elena Montes, Estamos teniendo algunos problemas con su información de facturación actual. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 214,
      "end": 312,
      "text": "Lo intentaremos de nuevo, pero mientras tanto es posible que desees actualizar tus datos de pago. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 312,
      "end": 635,
      "text": "ACTUALIZAR CUENTA AHORA Información sobre su cuenta: ID de suscripción : 789012345 Producto: Netflix Fecha de caducidad: 05 Marzo 2024 -El equipo de Netflix ⚠️:En caso de desconocimiento, sus servicios quedarán completamente suspendidos dentro de las 24 horas siguientes según los términos definidos en nuestros contratos. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 635,
      "end": 714,
      "text": "Darse de baja Derechos de autor 2024 El anunciante no gestiona su suscripción. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 714,
      "end": 856,
      "text": "Si prefiere no recibir más comunicaciones, anule la suscripción aquí O escriba a: 404 Calle Industrial Ste 202#5050, Ciudad Central, CO, 80012"
    }
  ],
  "passA": {
    "requestSha256": "3da9fa404cfe07272dccd748f86473f6ad1ad91f84f44e2dc9fe8e5ffa6bd3f0",
    "capturedAt": "2026-09-20T23:45:01.183Z",
    "elapsedMs": 155.22820800000045,
    "successfulAttemptElapsedMs": 153.4383749999979,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.08
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.89
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.59
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.06
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.98
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.93
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.5
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.12
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
            "sender_supplied": 0.97,
            "no_sensitive_action": 0.01,
            "independently_established": 0
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 3684,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "910c24f10341a0fd8d807964c4e72fdf643c6b62ead39f985ee0dd34af1489ad",
    "capturedAt": "2026-09-20T23:45:01.415Z",
    "elapsedMs": 229.62983400000667,
    "successfulAttemptElapsedMs": 227.83779100001266,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0.79,
            "body:4": 0,
            "body:5": 0.01,
            "body:2": 0.03,
            "body:3": 0.16,
            "body:0": 0,
            "NONE": 0.01
          },
          "confidence": 0.76
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0.65,
            "body:4": 0,
            "body:5": 0.01,
            "body:2": 0.04,
            "body:3": 0.13,
            "body:0": 0,
            "NONE": 0.17
          },
          "confidence": 0.59
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "subject:0": 0.03,
            "body:1": 0,
            "body:4": 0,
            "body:5": 0,
            "body:2": 0,
            "body:3": 0.95,
            "body:0": 0.02,
            "NONE": 0
          },
          "confidence": 0.94
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "subject:0": 0.01,
            "body:1": 0.12,
            "body:4": 0,
            "body:5": 0,
            "body:2": 0.01,
            "body:3": 0.84,
            "body:0": 0,
            "NONE": 0.02
          },
          "confidence": 0.83
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0.04,
            "body:4": 0.02,
            "body:5": 0.07,
            "body:2": 0.02,
            "body:3": 0.14,
            "body:0": 0,
            "NONE": 0.71
          },
          "confidence": 0.66
        }
      },
      "usage": {
        "input_tokens": 3512,
        "output_tokens": 460
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 388.00462499998685,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H5"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "payment_request": {
        "status": "low_confidence",
        "segmentId": null
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
        "segmentId": "body:3"
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
      "avoid_sender_route",
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1026,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-210",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:01.029Z",
    "offsetMs": 1.1709169999958249
  },
  {
    "seq": 1027,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-210",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:01.183Z",
    "offsetMs": 155.23016699998698,
    "elapsedMs": 153.4383749999979,
    "outcome": "success"
  },
  {
    "seq": 1028,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-210",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:01.186Z",
    "offsetMs": 159.0329589999892
  },
  {
    "seq": 1029,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-210",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:01.415Z",
    "offsetMs": 387.5127089999878,
    "elapsedMs": 227.83779100001266,
    "outcome": "success"
  },
  {
    "seq": 1030,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-210",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:01.415Z",
    "offsetMs": 388.0974589999969,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "b48a3fc2630aeb56b0f6dd190e32b173ab7e6e2c4f1995e3dcb406c20e0b7abf";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1027},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1029},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1030}} as const;
export const projectionSha256 = "335bc460f7dd28860df7336645df8475f2af5579cec1b9b6d04418ac78e93582";
