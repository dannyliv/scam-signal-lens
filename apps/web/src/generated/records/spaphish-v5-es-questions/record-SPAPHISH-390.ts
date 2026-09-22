import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-390",
  "inputSha256": "564b0cc7de1a488776bbec57d117fea6133227bf209aa597f2be880e75fcc2bc",
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
    "requestSha256": "022065bd1a4e1c7b9ccc88cee541e6a7a28c01ea1269c5755da9d932b2e9af79",
    "capturedAt": "2026-09-22T03:55:58.794Z",
    "elapsedMs": 685.8669019999797,
    "successfulAttemptElapsedMs": 684.2972140000202,
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
          "noul": 0.59
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.97
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.78
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.43
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.14
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.03
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.1
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
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
            "no_sensitive_action": 0.01,
            "independently_established": 0,
            "mixed_or_unknown": 0.04,
            "sender_supplied": 0.95
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 5169,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "f768751bcb44507f405cd1c5dedae7aa864362413cea39aa221d2d37b55452f7",
    "capturedAt": "2026-09-22T03:55:59.365Z",
    "elapsedMs": 568.6129549999605,
    "successfulAttemptElapsedMs": 566.0424339999445,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:5": 0.06,
            "body:3": 0,
            "body:6": 0.92,
            "subject:1": 0,
            "subject:0": 0,
            "NONE": 0.02,
            "body:7": 0,
            "body:2": 0,
            "body:1": 0,
            "body:0": 0,
            "body:4": 0
          },
          "confidence": 0.91
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:5": 0.34,
            "subject:0": 0,
            "body:6": 0.51,
            "subject:1": 0,
            "body:3": 0,
            "body:7": 0,
            "NONE": 0.14,
            "body:2": 0.01,
            "body:1": 0,
            "body:4": 0,
            "body:0": 0
          },
          "confidence": 0.45
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "body:5": 0,
            "body:3": 0,
            "body:6": 0.28,
            "subject:1": 0.72,
            "subject:0": 0,
            "NONE": 0,
            "body:7": 0,
            "body:2": 0,
            "body:1": 0,
            "body:4": 0,
            "body:0": 0
          },
          "confidence": 0.69
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:5": 0.06,
            "subject:0": 0.03,
            "body:6": 0.11,
            "subject:1": 0.01,
            "body:3": 0.05,
            "body:7": 0.02,
            "NONE": 0.35000000000000003,
            "body:2": 0.31,
            "body:0": 0.04,
            "body:4": 0.02,
            "body:1": 0
          },
          "confidence": 0.28
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:5": 0.06,
            "body:3": 0,
            "body:6": 0.23,
            "subject:1": 0.01,
            "subject:0": 0,
            "body:7": 0.02,
            "NONE": 0.67,
            "body:2": 0,
            "body:4": 0,
            "body:0": 0,
            "body:1": 0
          },
          "confidence": 0.63
        }
      },
      "usage": {
        "input_tokens": 4464,
        "output_tokens": 593
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1257.1545119999791,
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
    "seq": 1910,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-390",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:58.109Z",
    "offsetMs": 1.2475269999704324
  },
  {
    "seq": 1911,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-390",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:58.794Z",
    "offsetMs": 685.866886999982,
    "elapsedMs": 684.2972140000202,
    "outcome": "success"
  },
  {
    "seq": 1912,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-390",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:58.798Z",
    "offsetMs": 690.1812839999911
  },
  {
    "seq": 1913,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-390",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:59.365Z",
    "offsetMs": 1256.8504099999554,
    "elapsedMs": 566.0424339999445,
    "outcome": "success"
  },
  {
    "seq": 1914,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-390",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:59.365Z",
    "offsetMs": 1257.2045489999582,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "36b616835d0da16f6e859857d6b14346cc7e6f231c18680d0710ae1793f46950";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1911},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1913},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1914}} as const;
export const projectionSha256 = "b017952a013a4c782f4e90d79b130e3717ff9be9e47a4777ec44ef074f2eb623";
