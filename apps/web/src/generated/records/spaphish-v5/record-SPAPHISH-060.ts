import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-060",
  "inputSha256": "c9a67c881f6873fdf5bde6ab7f6fb845d859633ca7eb0f81e589cb3c38c4709a",
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
      "end": 15,
      "text": "Missxtranger ! "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 15,
      "end": 63,
      "text": "Su cuenta Prime será eliminada hoy ¡tome acción!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 27,
      "text": "¡Tu membresía ha caducado! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 27,
      "end": 175,
      "text": "Su suscripción a Prime expiró el 24 April 2024 Intentamos renovar la suscripción al final de cada ciclo de facturación, pero su pago mensual falló. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 175,
      "end": 226,
      "text": "Por lo tanto, tuvimos que cancelar su suscripción. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 226,
      "end": 269,
      "text": "Obviamente, nos encantaría volver a verte. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 269,
      "end": 335,
      "text": "Si deseas renovar tu suscripción Haga clic en el enlace de abajo. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 335,
      "end": 624,
      "text": "ACTUALIZAR MIS DETALLES DE PAGO ID de suscripción : 9988776655443 Producto : Prime 90 días Fecha de caducidad : 04/24/2024 Confirmar Disponible SÓLO HOY Para detenerlos, vaya aquí o escriba a: 789 Ficción Way Ste.2-0000 Ciudad Sintética, CA 90210 La anunciante no gestiona su suscripción. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 624,
      "end": 772,
      "text": "Si prefieres no recibir más comunicaciones por favor cancele su suscripción aquí O escribe a: 123 Data Safe Blvd,Unit #5555 Villa Protegida UT 84101"
    }
  ],
  "passA": {
    "requestSha256": "3220ec720e768de6492980a97892b257dbd37f785818a8ec604afca5d8e7d7c0",
    "capturedAt": "2026-09-20T23:44:10.223Z",
    "elapsedMs": 257.3517079999983,
    "successfulAttemptElapsedMs": 256.1992500000015,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.09
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.84
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.76
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.06
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.97
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.73
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.49
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
          "noul": 0.07
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
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0,
            "sender_supplied": 0.99,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 3708,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "7f6de2a725ebd16812752941b5c73df1274d18b1b66aeff9ba31aba4912d6337",
    "capturedAt": "2026-09-20T23:44:10.383Z",
    "elapsedMs": 157.56379200000083,
    "successfulAttemptElapsedMs": 156.06616600000052,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:6": 0,
            "body:0": 0,
            "body:1": 0,
            "subject:0": 0,
            "body:4": 0.07,
            "subject:1": 0,
            "body:2": 0,
            "NONE": 0.02,
            "body:3": 0,
            "body:5": 0.91
          },
          "confidence": 0.89
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:6": 0,
            "body:0": 0,
            "body:1": 0.01,
            "subject:0": 0,
            "body:4": 0.4,
            "subject:1": 0,
            "body:2": 0,
            "NONE": 0.07,
            "body:3": 0,
            "body:5": 0.52
          },
          "confidence": 0.45
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "body:6": 0,
            "body:0": 0,
            "body:1": 0,
            "subject:0": 0,
            "body:4": 0,
            "subject:1": 0.78,
            "body:2": 0,
            "NONE": 0,
            "body:3": 0,
            "body:5": 0.22
          },
          "confidence": 0.74
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0.02,
            "body:0": 0.05,
            "body:1": 0.23,
            "subject:0": 0.03,
            "body:4": 0.03,
            "subject:1": 0.03,
            "body:2": 0.06,
            "NONE": 0.39,
            "body:3": 0.01,
            "body:5": 0.15
          },
          "confidence": 0.32
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0.01,
            "body:0": 0,
            "body:1": 0,
            "subject:0": 0,
            "body:4": 0.04,
            "subject:1": 0.01,
            "body:2": 0,
            "NONE": 0.65,
            "body:3": 0,
            "body:5": 0.29
          },
          "confidence": 0.6
        }
      },
      "usage": {
        "input_tokens": 3796,
        "output_tokens": 548
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 417.4641249999986,
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
        "segmentId": "body:5"
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
        "segmentId": "subject:1"
      },
      "authority_claim": {
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "low_confidence",
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
    "seq": 291,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-060",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:09.966Z",
    "offsetMs": 0.6792919999970763
  },
  {
    "seq": 292,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-060",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:10.222Z",
    "offsetMs": 257.35137499999837,
    "elapsedMs": 256.1992500000015,
    "outcome": "success"
  },
  {
    "seq": 293,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-060",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:10.225Z",
    "offsetMs": 260.22708299999795
  },
  {
    "seq": 294,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-060",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:10.382Z",
    "offsetMs": 416.96124999999665,
    "elapsedMs": 156.06616600000052,
    "outcome": "success"
  },
  {
    "seq": 295,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-060",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:10.383Z",
    "offsetMs": 417.5727079999997,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "5fb0137257305b3f1361f5d0675424956ebe0ec470f537f8d17238e7dc789295";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":292},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":294},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":295}} as const;
export const projectionSha256 = "6a3eb4b6c271546f557db4b5781675e5066b5cc1978f2f3124ceedfae0ad32ab";
