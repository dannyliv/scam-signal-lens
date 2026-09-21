import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-090",
  "inputSha256": "1bb0e4d1203ad675d4f061fd578eaa99aae26c4b94f7d36c632014fd7ca957a1",
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
      "end": 208,
      "text": "Su suscripción a Prime expiró el 16 March 2024 Intentamos renovar la suscripción al final de cada ciclo de facturación, pero su pago mensual falló. "
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
      "end": 582,
      "text": "ACTUALIZAR MIS DETALLES DE PAGO ID de suscripción : 9845527194432 Producto : Prime 90 días Fecha de caducidad : 03/16/2024 Confirmar Disponible SÓLO HOY Para detenerlos, vaya aquí o escriba a: 742 Maple Bridge Rd. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 582,
      "end": 656,
      "text": "Ste.5-4123 Clearfield, VT 05488 La anunciante no gestiona su suscripción. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 656,
      "end": 800,
      "text": "Si prefieres no recibir más comunicaciones por favor cancele su suscripción aquí O escribe a: 128 Willow Crest Ave,Unit #5920 Northwood VT 05744"
    }
  ],
  "passA": {
    "requestSha256": "848f659df873d44c71a3ec2377ca467da9eedfff18a246169b6f3a6fd6e9077f",
    "capturedAt": "2026-09-20T23:44:20.470Z",
    "elapsedMs": 120.75304200000028,
    "successfulAttemptElapsedMs": 119.37008300000161,
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
          "noul": 0.72
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.52
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
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "mixed_or_unknown": 0.03,
            "sender_supplied": 0.97,
            "no_sensitive_action": 0
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 3718,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "ba70f89e39969faf38e12e7cce1ce05bb8dd08d99561341cb14c03eceea4b6f7",
    "capturedAt": "2026-09-20T23:44:20.605Z",
    "elapsedMs": 132.2298750000009,
    "successfulAttemptElapsedMs": 130.40016599999944,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "subject:0": 0,
            "body:4": 0,
            "body:5": 0.05,
            "body:1": 0,
            "body:2": 0,
            "body:0": 0,
            "body:6": 0.92,
            "body:8": 0,
            "body:3": 0,
            "body:7": 0,
            "NONE": 0.03,
            "subject:1": 0
          },
          "confidence": 0.91
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:0": 0,
            "body:4": 0,
            "body:5": 0.34,
            "body:2": 0.01,
            "body:1": 0,
            "subject:0": 0,
            "body:6": 0.58,
            "body:8": 0,
            "body:3": 0,
            "body:7": 0,
            "NONE": 0.07,
            "subject:1": 0
          },
          "confidence": 0.53
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0,
            "body:2": 0,
            "body:4": 0,
            "body:5": 0,
            "body:0": 0,
            "body:6": 0.28,
            "body:8": 0,
            "body:3": 0,
            "body:7": 0,
            "NONE": 0,
            "subject:1": 0.72
          },
          "confidence": 0.69
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.02,
            "body:4": 0.01,
            "body:2": 0.19,
            "body:1": 0.01,
            "body:5": 0.04,
            "body:0": 0.05,
            "body:6": 0.07,
            "body:8": 0.01,
            "body:3": 0.03,
            "body:7": 0.04,
            "NONE": 0.51,
            "subject:1": 0.02
          },
          "confidence": 0.47
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0,
            "body:5": 0.12,
            "body:0": 0,
            "body:4": 0,
            "body:2": 0,
            "body:6": 0.14,
            "body:8": 0.02,
            "body:3": 0.01,
            "body:7": 0.07,
            "NONE": 0.63,
            "subject:1": 0.01
          },
          "confidence": 0.6
        }
      },
      "usage": {
        "input_tokens": 3996,
        "output_tokens": 638
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 255.52362500000163,
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
    "seq": 439,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-090",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:20.350Z",
    "offsetMs": 0.8590420000000449
  },
  {
    "seq": 440,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-090",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:20.470Z",
    "offsetMs": 120.75379199999952,
    "elapsedMs": 119.37008300000161,
    "outcome": "success"
  },
  {
    "seq": 441,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-090",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:20.473Z",
    "offsetMs": 123.96133299999929
  },
  {
    "seq": 442,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-090",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:20.604Z",
    "offsetMs": 255.117000000002,
    "elapsedMs": 130.40016599999944,
    "outcome": "success"
  },
  {
    "seq": 443,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-090",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:20.605Z",
    "offsetMs": 255.59358300000167,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d95d54a692aa2aba6e21d8bb549445b6734756062f3de3cf4dbdd8ed8c275e23";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":440},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":442},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":443}} as const;
export const projectionSha256 = "0021f39b8db0600c86ae4823692e1945b9b6b397ea52a9d03a0140265f558d6e";
