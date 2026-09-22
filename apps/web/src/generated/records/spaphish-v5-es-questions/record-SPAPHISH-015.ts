import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-015",
  "inputSha256": "a67a0ce819c0efc4ce58d1bf7c7fc7151c910ed436fd8cac7b5e56372234f7d6",
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
      "end": 174,
      "text": "Su suscripción a Prime expiró el 02 June 2024 Intentamos renovar la suscripción al final de cada ciclo de facturación, pero su pago mensual falló. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 174,
      "end": 225,
      "text": "Por lo tanto, tuvimos que cancelar su suscripción. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 225,
      "end": 268,
      "text": "Obviamente, nos encantaría volver a verte. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 268,
      "end": 334,
      "text": "Si deseas renovar tu suscripción Haga clic en el enlace de abajo. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 334,
      "end": 623,
      "text": "ACTUALIZAR MIS DETALLES DE PAGO ID de suscripción : 9988776655443 Producto : Prime 90 días Fecha de caducidad : 06/02/2024 Confirmar Disponible SÓLO HOY Para detenerlos, vaya aquí o escriba a: 789 Ficción Way Ste.2-0000 Ciudad Sintética, CA 90210 La anunciante no gestiona su suscripción. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 623,
      "end": 771,
      "text": "Si prefieres no recibir más comunicaciones por favor cancele su suscripción aquí O escribe a: 123 Data Safe Blvd,Unit #5555 Villa Protegida UT 84101"
    }
  ],
  "passA": {
    "requestSha256": "58c64be0de843ccb09d05e09161d989843900e958a4292f165833956681a3f89",
    "capturedAt": "2026-09-22T03:48:27.938Z",
    "elapsedMs": 629.4944380000015,
    "successfulAttemptElapsedMs": 628.7328359999992,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.1
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.83
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.63
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
          "noul": 0.81
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.45
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.14
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.03
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.08
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
            "mixed_or_unknown": 0.04,
            "no_sensitive_action": 0.01,
            "sender_supplied": 0.95,
            "independently_established": 0
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
    "requestSha256": "782f2e72d87421a6479fdf654affaa365ebd9ec835b67e13dcdedd4bf44a2e78",
    "capturedAt": "2026-09-22T03:48:28.576Z",
    "elapsedMs": 634.9481369999994,
    "successfulAttemptElapsedMs": 633.9689370000015,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:5": 0.9,
            "body:3": 0,
            "body:6": 0,
            "subject:1": 0,
            "subject:0": 0,
            "NONE": 0.02,
            "body:2": 0,
            "body:4": 0.08,
            "body:0": 0,
            "body:1": 0
          },
          "confidence": 0.89
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:5": 0.48,
            "subject:0": 0,
            "body:6": 0,
            "subject:1": 0,
            "body:3": 0,
            "NONE": 0.18,
            "body:2": 0,
            "body:1": 0.01,
            "body:4": 0.33,
            "body:0": 0
          },
          "confidence": 0.41
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "body:5": 0.22,
            "body:3": 0,
            "body:6": 0,
            "subject:1": 0.78,
            "subject:0": 0,
            "NONE": 0,
            "body:2": 0,
            "body:4": 0,
            "body:1": 0,
            "body:0": 0
          },
          "confidence": 0.75
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:5": 0.12,
            "body:3": 0.01,
            "body:6": 0.01,
            "subject:1": 0.02,
            "subject:0": 0.04,
            "NONE": 0.38,
            "body:2": 0.09,
            "body:0": 0.03,
            "body:1": 0.25,
            "body:4": 0.05
          },
          "confidence": 0.31
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:5": 0.32,
            "body:3": 0,
            "body:6": 0.02,
            "subject:1": 0.01,
            "subject:0": 0,
            "NONE": 0.6,
            "body:2": 0,
            "body:4": 0.05,
            "body:0": 0,
            "body:1": 0
          },
          "confidence": 0.54
        }
      },
      "usage": {
        "input_tokens": 4328,
        "output_tokens": 548
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1267.4083499999979,
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
    "seq": 69,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-015",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:27.309Z",
    "offsetMs": 0.44872299999769893
  },
  {
    "seq": 70,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-015",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:27.938Z",
    "offsetMs": 629.4954980000002,
    "elapsedMs": 628.7328359999992,
    "outcome": "success"
  },
  {
    "seq": 71,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-015",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:27.941Z",
    "offsetMs": 632.6434960000006
  },
  {
    "seq": 72,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-015",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:28.575Z",
    "offsetMs": 1267.0335349999987,
    "elapsedMs": 633.9689370000015,
    "outcome": "success"
  },
  {
    "seq": 73,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-015",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:48:28.576Z",
    "offsetMs": 1267.4560500000007,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0681c1bef59823ae1c6c47eb413b5995950712ed96ebc1d3f7b0c8d158244137";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":70},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":72},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":73}} as const;
export const projectionSha256 = "957af52d7deed8c11894907927acc047eb53b13494080f2347bdfbbefcaf0f7a";
