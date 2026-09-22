import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-060",
  "inputSha256": "c9a67c881f6873fdf5bde6ab7f6fb845d859633ca7eb0f81e589cb3c38c4709a",
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
    "requestSha256": "8ee0e78163ae8df1fd55f06a6c41552fbe68e849a0bd67b4586467b3c0b8695b",
    "capturedAt": "2026-09-22T03:49:23.864Z",
    "elapsedMs": 642.599596,
    "successfulAttemptElapsedMs": 641.2412310000072,
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
          "noul": 0.83
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.62
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.06
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.96
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
          "noul": 0.15
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
          "noul": 0.09
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
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.03,
            "independently_established": 0,
            "sender_supplied": 0.96,
            "no_sensitive_action": 0.01
          },
          "confidence": 0.94
        }
      },
      "usage": {
        "input_tokens": 5158,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "b4c2a8c7b2ec84d1df0d26b09ad66ef5f36f17f86a92cbec5c0e1ca089ecbba8",
    "capturedAt": "2026-09-22T03:49:24.533Z",
    "elapsedMs": 666.8829279999918,
    "successfulAttemptElapsedMs": 666.133456999989,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:6": 0,
            "subject:1": 0,
            "body:3": 0,
            "body:4": 0.07,
            "subject:0": 0,
            "NONE": 0.01,
            "body:5": 0.92,
            "body:1": 0,
            "body:2": 0,
            "body:0": 0
          },
          "confidence": 0.9
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:6": 0,
            "subject:1": 0,
            "body:3": 0,
            "body:4": 0.33,
            "subject:0": 0,
            "NONE": 0.12,
            "body:5": 0.54,
            "body:1": 0.01,
            "body:2": 0,
            "body:0": 0
          },
          "confidence": 0.48
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "body:6": 0,
            "subject:1": 0.74,
            "body:3": 0,
            "body:4": 0,
            "subject:0": 0,
            "NONE": 0,
            "body:5": 0.26,
            "body:2": 0,
            "body:0": 0,
            "body:1": 0
          },
          "confidence": 0.71
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0.01,
            "subject:1": 0.02,
            "body:3": 0.02,
            "body:4": 0.06,
            "subject:0": 0.04,
            "NONE": 0.35,
            "body:5": 0.1,
            "body:1": 0.26,
            "body:2": 0.11,
            "body:0": 0.03
          },
          "confidence": 0.29
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0.02,
            "subject:1": 0.01,
            "body:3": 0,
            "body:4": 0.06,
            "subject:0": 0,
            "NONE": 0.59,
            "body:5": 0.32,
            "body:2": 0,
            "body:1": 0,
            "body:0": 0
          },
          "confidence": 0.53
        }
      },
      "usage": {
        "input_tokens": 4328,
        "output_tokens": 548
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1311.1052829999971,
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
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-060",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:23.222Z",
    "offsetMs": 0.44672999999602325
  },
  {
    "seq": 292,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-060",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:23.864Z",
    "offsetMs": 642.5987899999891,
    "elapsedMs": 641.2412310000072,
    "outcome": "success"
  },
  {
    "seq": 293,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-060",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:23.866Z",
    "offsetMs": 644.3111499999941
  },
  {
    "seq": 294,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-060",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:24.532Z",
    "offsetMs": 1310.8062009999994,
    "elapsedMs": 666.133456999989,
    "outcome": "success"
  },
  {
    "seq": 295,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-060",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:24.533Z",
    "offsetMs": 1311.1528339999932,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ba74d24164c8b032dda914fb2dad4b0df3e967a78efb4f08110351218e22ae64";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":292},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":294},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":295}} as const;
export const projectionSha256 = "7ad6a96820381d673be70fa94be6141c8640f16a2600fb3b40221e90e0b1c2c1";
