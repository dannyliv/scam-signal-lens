import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-301",
  "inputSha256": "d8d5f49a33d903434a13051ea462926b391e5acc22085327463b87b40054031c",
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
      "end": 52,
      "text": "A𝅺c𝅺c𝅴o𝅸u𝅴n𝅸t𝅸 𝅷R𝅴e𝅸s𝅷t𝅸r𝅸i𝅺c⁠t𝅺e𝅸d⁠"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 82,
      "text": "Hola juan.perez@correo.net Tu cuenta de PayPal ha sido restringida temporalmente. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 82,
      "end": 195,
      "text": "Recientemente se te pidió que tomaras una acción en tu cuenta y parece que no recibimos la respuesta solicitada. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 195,
      "end": 291,
      "text": "Hemos encontrado actividad sospechosa en la tarjeta de crédito vinculada a tu cuenta de PayPal. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 291,
      "end": 385,
      "text": "Debes confirmar tu identidad para verificar que eres el propietario de la tarjeta de crédito. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 385,
      "end": 487,
      "text": "Para mantener la seguridad de la cuenta, por favor proporciona documentos que confirmen tu identidad. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 487,
      "end": 574,
      "text": "También hemos impuesto límites temporales en ciertas funciones de tu cuenta de PayPal. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 574,
      "end": 643,
      "text": "Inicia sesión en tu cuenta de PayPal y realiza los pasos requeridos. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 643,
      "end": 703,
      "text": "Iniciar sesión en PayPal Gracias por ser cliente de PayPal. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 703,
      "end": 722,
      "text": "Atentamente, PayPal"
    }
  ],
  "passA": {
    "requestSha256": "3cd09f95f54a6d477e888a3e3414d612b8d535b6e8d4e4a49f1bcc4e0c062fd4",
    "capturedAt": "2026-09-20T23:45:32.654Z",
    "elapsedMs": 141.77483300000313,
    "successfulAttemptElapsedMs": 139.56662500000675,
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
          "noul": 0.91
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.94
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
          "noul": 0.47
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
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.02,
            "mixed_or_unknown": 0.06,
            "independently_established": 0.32,
            "sender_supplied": 0.6
          },
          "confidence": 0.47
        }
      },
      "usage": {
        "input_tokens": 3654,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "94b545e7b7166c5181b91a3c7e9784838fcd03472ec3b1987b2a62ff292595b6",
    "capturedAt": "2026-09-20T23:45:32.783Z",
    "elapsedMs": 126.85550000000512,
    "successfulAttemptElapsedMs": 125.02833400000236,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0,
            "NONE": 0,
            "body:2": 0,
            "body:4": 0.95,
            "body:0": 0,
            "body:6": 0.01,
            "body:8": 0,
            "body:3": 0.04,
            "body:7": 0,
            "body:5": 0
          },
          "confidence": 0.94
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:1": 0.13,
            "subject:0": 0.02,
            "NONE": 0.12,
            "body:2": 0.03,
            "body:4": 0.06,
            "body:0": 0.07,
            "body:6": 0.15,
            "body:8": 0,
            "body:3": 0.22,
            "body:7": 0,
            "body:5": 0.2
          },
          "confidence": 0.15
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:8",
          "probabilities": {
            "body:1": 0.01,
            "subject:0": 0,
            "NONE": 0.01,
            "body:0": 0.08,
            "body:4": 0.12,
            "body:2": 0.06,
            "body:6": 0.01,
            "body:8": 0.64,
            "body:3": 0.04,
            "body:7": 0.03,
            "body:5": 0
          },
          "confidence": 0.6
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0,
            "NONE": 0.88,
            "body:2": 0,
            "body:4": 0.01,
            "body:0": 0,
            "body:6": 0.09,
            "body:8": 0,
            "body:3": 0,
            "body:7": 0.02,
            "body:5": 0
          },
          "confidence": 0.86
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0,
            "NONE": 0.11,
            "body:0": 0,
            "body:4": 0,
            "body:2": 0,
            "body:6": 0.85,
            "body:8": 0,
            "body:3": 0,
            "body:7": 0.04,
            "body:5": 0
          },
          "confidence": 0.82
        }
      },
      "usage": {
        "input_tokens": 3562,
        "output_tokens": 600
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 271.20858299999963,
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
        "status": "selected",
        "segmentId": "body:4"
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
        "status": "selected",
        "segmentId": "body:6"
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
    "seq": 1473,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-301",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:32.513Z",
    "offsetMs": 1.4870829999999842
  },
  {
    "seq": 1474,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-301",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:32.653Z",
    "offsetMs": 141.77391700001317,
    "elapsedMs": 139.56662500000675,
    "outcome": "success"
  },
  {
    "seq": 1475,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-301",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:32.656Z",
    "offsetMs": 145.06095800000185
  },
  {
    "seq": 1476,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-301",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:32.782Z",
    "offsetMs": 270.76958300000115,
    "elapsedMs": 125.02833400000236,
    "outcome": "success"
  },
  {
    "seq": 1477,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-301",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:32.783Z",
    "offsetMs": 271.28066700001364,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d3bae3cc91a1d22f5d6e23afef70a046c7e25eea34720bc97a0da9dca3592000";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1474},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1476},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1477}} as const;
export const projectionSha256 = "31a7b3a7d73e16bf3eceb583d9a97edad7945ef550e164a74c88721b91a34e55";
