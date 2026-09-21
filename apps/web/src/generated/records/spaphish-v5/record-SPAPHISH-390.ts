import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-390",
  "inputSha256": "564b0cc7de1a488776bbec57d117fea6133227bf209aa597f2be880e75fcc2bc",
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
      "end": 33,
      "text": "¡Tu membresía Prime ha caducado! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 33,
      "end": 60,
      "text": "¡Tu membresía ha caducado! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 60,
      "end": 206,
      "text": "Su suscripción a Prime expiró el 05 May 2024 Intentamos renovar la suscripción al final de cada ciclo de facturación, pero su pago mensual falló. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 206,
      "end": 257,
      "text": "Por lo tanto, tuvimos que cancelar su suscripción. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 257,
      "end": 300,
      "text": "Obviamente, nos encantaría volver a verte. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 300,
      "end": 366,
      "text": "Si deseas renovar tu suscripción Haga clic en el enlace de abajo. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 366,
      "end": 655,
      "text": "ACTUALIZAR MIS DETALLES DE PAGO ID de suscripción : 9988776655443 Producto : Prime 90 días Fecha de caducidad : 05/05/2024 Confirmar Disponible SÓLO HOY Para detenerlos, vaya aquí o escriba a: 789 Ficción Way Ste.2-0000 Ciudad Sintética, CA 90210 La anunciante no gestiona su suscripción. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 655,
      "end": 803,
      "text": "Si prefieres no recibir más comunicaciones por favor cancele su suscripción aquí O escribe a: 123 Data Safe Blvd,Unit #5555 Villa Protegida UT 84101"
    }
  ],
  "passA": {
    "requestSha256": "18e0620f155b8c8d2d8e6ecf6f39f1cf832e686dd5cd31016937863ae820403e",
    "capturedAt": "2026-09-20T23:46:02.885Z",
    "elapsedMs": 166.3250420000113,
    "successfulAttemptElapsedMs": 163.78933400000096,
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
          "noul": 0.72
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
          "noul": 0.76
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.48
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
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 1,
            "mixed_or_unclear": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.99,
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 3719,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "978747ca469c1ae7997f7c97351e45d980e87f20cd0b6e1a3df8920c4f9aed96",
    "capturedAt": "2026-09-20T23:46:03.091Z",
    "elapsedMs": 203.46504100001766,
    "successfulAttemptElapsedMs": 200.38345900000422,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:7": 0,
            "body:1": 0,
            "body:2": 0,
            "subject:1": 0,
            "body:4": 0,
            "body:5": 0.06,
            "body:0": 0,
            "subject:0": 0,
            "NONE": 0.01,
            "body:3": 0,
            "body:6": 0.93
          },
          "confidence": 0.92
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:7": 0,
            "body:1": 0,
            "body:2": 0.01,
            "subject:1": 0,
            "body:4": 0,
            "body:5": 0.39,
            "body:0": 0,
            "subject:0": 0,
            "NONE": 0.07,
            "body:3": 0,
            "body:6": 0.53
          },
          "confidence": 0.47
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "body:7": 0,
            "body:1": 0,
            "body:2": 0,
            "subject:1": 0.78,
            "body:4": 0,
            "body:5": 0,
            "body:0": 0,
            "subject:0": 0,
            "NONE": 0,
            "body:3": 0,
            "body:6": 0.22
          },
          "confidence": 0.75
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:7": 0.02,
            "body:1": 0.01,
            "body:4": 0.01,
            "subject:1": 0.03,
            "NONE": 0.43,
            "body:5": 0.04,
            "body:0": 0.06,
            "subject:0": 0.03,
            "body:2": 0.19,
            "body:3": 0.04,
            "body:6": 0.14
          },
          "confidence": 0.38
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:7": 0.01,
            "body:1": 0,
            "body:2": 0,
            "subject:1": 0.01,
            "body:4": 0,
            "body:5": 0.07,
            "body:0": 0,
            "subject:0": 0,
            "NONE": 0.67,
            "body:3": 0,
            "body:6": 0.24
          },
          "confidence": 0.62
        }
      },
      "usage": {
        "input_tokens": 3932,
        "output_tokens": 593
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 372.4689579999831,
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
        "segmentId": "body:6"
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
    "seq": 1912,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-390",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:02.720Z",
    "offsetMs": 1.7322909999929834
  },
  {
    "seq": 1913,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-390",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:02.885Z",
    "offsetMs": 166.325582999998,
    "elapsedMs": 163.78933400000096,
    "outcome": "success"
  },
  {
    "seq": 1914,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-390",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:02.889Z",
    "offsetMs": 170.68829099999857
  },
  {
    "seq": 1915,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-390",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:03.090Z",
    "offsetMs": 372.05837499999325,
    "elapsedMs": 200.38345900000422,
    "outcome": "success"
  },
  {
    "seq": 1916,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-390",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:03.091Z",
    "offsetMs": 372.54570799999055,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "b9218c4ba33eadc3bb44cbdd1dcb91a7df700b1db04da860bbfc32cf47816efd";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1913},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1915},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1916}} as const;
export const projectionSha256 = "da437d686d8910c24d76397cc232e8bb01b2caa74f3b3038808ee3add62a0b95";
