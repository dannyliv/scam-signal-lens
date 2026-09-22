import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-469",
  "inputSha256": "faf547d07210a6bc76b21fcd15b19d85a5fe3d3e9c3858dbad805080a4b01263",
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
      "text": "Su suscripción a Prime expiró el 20 May 2024 Intentamos renovar la suscripción al final de cada ciclo de facturación, pero su pago mensual falló. "
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
      "text": "ACTUALIZAR MIS DETALLES DE PAGO ID de suscripción : 7845206194375 Producto : Prime 90 días Fecha de caducidad : 05/20/2024 Confirmar Disponible SÓLO HOY Para detenerlos, vaya aquí o escriba a: 410 Hudson Ridge Dr Ste.5-1432 White Plains, NY 10603 La anunciante no gestiona su suscripción. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 655,
      "end": 735,
      "text": "Si prefieres no recibir más comunicaciones por favor cancele su suscripción aquí"
    }
  ],
  "passA": {
    "requestSha256": "be09ec625f4b0905c51dcddd42104039e9ea3ebf93473f4a5c3818fb52cfb6c9",
    "capturedAt": "2026-09-22T03:57:31.273Z",
    "elapsedMs": 704.1905000000261,
    "successfulAttemptElapsedMs": 702.7602839999599,
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
          "noul": 0.84
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.66
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
          "noul": 0.77
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.47
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.17
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
          "noul": 0.13
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
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0,
            "mixed_or_unknown": 0.05,
            "sender_supplied": 0.95,
            "independently_established": 0
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 5137,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "8029a1cdd2bac09691b410bfded7bcc3e1eb52e6a7b3226fdf9f94f86adeca92",
    "capturedAt": "2026-09-22T03:57:31.885Z",
    "elapsedMs": 610.8008570000529,
    "successfulAttemptElapsedMs": 609.1660439999541,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:1": 0,
            "subject:1": 0,
            "body:0": 0,
            "body:2": 0,
            "subject:0": 0,
            "body:3": 0,
            "NONE": 0.01,
            "body:6": 0.92,
            "body:4": 0,
            "body:7": 0,
            "body:5": 0.07
          },
          "confidence": 0.91
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:5": 0.36,
            "body:1": 0,
            "body:0": 0,
            "body:2": 0.01,
            "subject:0": 0,
            "body:3": 0,
            "NONE": 0.12,
            "body:6": 0.51,
            "body:4": 0,
            "body:7": 0,
            "subject:1": 0
          },
          "confidence": 0.45
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "body:1": 0,
            "subject:1": 0.73,
            "body:0": 0,
            "body:2": 0,
            "subject:0": 0,
            "body:3": 0,
            "NONE": 0,
            "body:6": 0.27,
            "body:4": 0,
            "body:7": 0,
            "body:5": 0
          },
          "confidence": 0.69
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0,
            "subject:1": 0.01,
            "body:0": 0.04,
            "body:2": 0.31,
            "subject:0": 0.02,
            "body:3": 0.05,
            "NONE": 0.34,
            "body:6": 0.15,
            "body:4": 0.02,
            "body:7": 0.01,
            "body:5": 0.05
          },
          "confidence": 0.26
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:5": 0.09,
            "body:4": 0,
            "body:0": 0,
            "body:2": 0,
            "subject:0": 0,
            "body:3": 0,
            "NONE": 0.56,
            "body:6": 0.32,
            "body:1": 0,
            "body:7": 0.01,
            "subject:1": 0.01
          },
          "confidence": 0.5
        }
      },
      "usage": {
        "input_tokens": 4272,
        "output_tokens": 593
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1316.8352560000494,
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
    "seq": 2303,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-469",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:30.570Z",
    "offsetMs": 1.1966890000039712
  },
  {
    "seq": 2304,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-469",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:31.272Z",
    "offsetMs": 704.1912749999901,
    "elapsedMs": 702.7602839999599,
    "outcome": "success"
  },
  {
    "seq": 2305,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-469",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:31.275Z",
    "offsetMs": 707.1193010000279
  },
  {
    "seq": 2306,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-469",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:31.885Z",
    "offsetMs": 1316.57493100001,
    "elapsedMs": 609.1660439999541,
    "outcome": "success"
  },
  {
    "seq": 2307,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-469",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:31.885Z",
    "offsetMs": 1316.8928480000468,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "e6a253f8082ecc8076704e5a820863f37a086bc0a4c3cb4445802606786ca5c3";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2304},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2306},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2307}} as const;
export const projectionSha256 = "6ec2fef3497e5983e8e00f8e971d80510e90d98ea1f87e394d6c5f8b90586ed5";
