import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-492",
  "inputSha256": "201357af5181b7d201b25f70ae2e95f83bc9e23a8f62d893d0832e064584fcce",
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
      "end": 208,
      "text": "Su suscripción a Prime expiró el 13 March 2024 Intentamos renovar la suscripción al final de cada ciclo de facturación, pero su pago mensual falló. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 208,
      "end": 259,
      "text": "Por lo tanto, tuvimos que cancelar su suscripción. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 259,
      "end": 302,
      "text": "Obviamente, nos encantaría volver a verte. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 302,
      "end": 368,
      "text": "Si deseas renovar tu suscripción Haga clic en el enlace de abajo. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 368,
      "end": 655,
      "text": "ACTUALIZAR MIS DETALLES DE PAGO ID de suscripción : 9988776655443 Producto : Prime 90 días Fecha de caducidad : 03/13/2024 Confirmar Disponible SÓLO HOY Para detenerlos, vaya aquí o escriba a: 750 Commerce St Ste.2-8080 Greenwood Lake, NY 10950 La anunciante no gestiona su suscripción. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 655,
      "end": 798,
      "text": "Si prefieres no recibir más comunicaciones por favor cancele su suscripción aquí O escribe a: 888 Technology Blvd, Unit #4179 Raleigh, NC 27601"
    }
  ],
  "passA": {
    "requestSha256": "562865732ba6632b47c6b238b7fcd00fabecb8d42debed66fba9604e59d66196",
    "capturedAt": "2026-09-22T03:57:59.161Z",
    "elapsedMs": 751.650867999997,
    "successfulAttemptElapsedMs": 749.6664349999046,
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
          "noul": 0.82
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.62
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.96
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.77
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.46
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.15
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
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 0,
            "active_request": 1
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0,
            "sender_supplied": 0.92,
            "mixed_or_unknown": 0.08
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 5162,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "55a4aa3c555989e3f612afcf59defa29a32160bf6b4e3b0926b7d4a5582377de",
    "capturedAt": "2026-09-22T03:57:59.751Z",
    "elapsedMs": 587.2510800000746,
    "successfulAttemptElapsedMs": 585.5814499999397,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:5": 0.13,
            "NONE": 0.02,
            "body:0": 0,
            "body:7": 0,
            "body:4": 0,
            "subject:1": 0,
            "body:1": 0,
            "body:6": 0.85,
            "body:2": 0,
            "body:3": 0,
            "subject:0": 0
          },
          "confidence": 0.83
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:4": 0,
            "NONE": 0.14,
            "body:0": 0,
            "body:7": 0,
            "body:6": 0.45,
            "subject:1": 0,
            "body:5": 0.4,
            "subject:0": 0,
            "body:2": 0.01,
            "body:1": 0,
            "body:3": 0
          },
          "confidence": 0.39
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "body:4": 0,
            "NONE": 0,
            "body:0": 0,
            "body:7": 0,
            "body:6": 0.3,
            "body:3": 0,
            "body:5": 0,
            "subject:1": 0.7,
            "body:2": 0,
            "body:1": 0,
            "subject:0": 0
          },
          "confidence": 0.66
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:4": 0.02,
            "NONE": 0.39,
            "body:0": 0.05,
            "body:7": 0.01,
            "body:6": 0.11,
            "subject:1": 0.01,
            "body:5": 0.07,
            "body:1": 0,
            "body:2": 0.25,
            "body:3": 0.05,
            "subject:0": 0.04
          },
          "confidence": 0.33
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:5": 0.08,
            "NONE": 0.59,
            "body:0": 0,
            "body:7": 0.02,
            "subject:1": 0.01,
            "body:6": 0.3,
            "body:4": 0,
            "body:3": 0,
            "body:2": 0,
            "subject:0": 0,
            "body:1": 0
          },
          "confidence": 0.53
        }
      },
      "usage": {
        "input_tokens": 4422,
        "output_tokens": 593
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1341.6615880000172,
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
    "seq": 2416,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-492",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:58.411Z",
    "offsetMs": 1.4237899999134243
  },
  {
    "seq": 2417,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-492",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:59.161Z",
    "offsetMs": 751.6522649999242,
    "elapsedMs": 749.6664349999046,
    "outcome": "success"
  },
  {
    "seq": 2418,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-492",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:59.165Z",
    "offsetMs": 755.3991329999408
  },
  {
    "seq": 2419,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-492",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:59.751Z",
    "offsetMs": 1341.3786419999087,
    "elapsedMs": 585.5814499999397,
    "outcome": "success"
  },
  {
    "seq": 2420,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-492",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:59.751Z",
    "offsetMs": 1341.7082089999458,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6fdde466a2d7ffaa63f08a42552e8a65ebf69a1bc4e9c236720fd0608f63c7cb";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2417},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2419},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2420}} as const;
export const projectionSha256 = "1ee8e8da5d82f1b5604c1adf8c703e9984fab8f0e4ef58fd5f6e3e9b52838993";
