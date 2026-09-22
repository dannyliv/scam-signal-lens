import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-051",
  "inputSha256": "55df54f8030d7708945cbad1a33b49b90ae4c3eb8745e1c5a149af4e8eb0320f",
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
      "end": 215,
      "text": "Por favor actualice sus detalles de pago N E T F L I X No pudimos validar su cuenta Estimada María Lantier, Estamos teniendo algunos problemas con su información de facturación actual. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 215,
      "end": 313,
      "text": "Lo intentaremos de nuevo, pero mientras tanto es posible que desees actualizar tus datos de pago. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 313,
      "end": 634,
      "text": "ACTUALIZAR CUENTA AHORA Información sobre su cuenta: ID de suscripción : 984722619 Producto: Netflix Fecha de caducidad: 13 May 2024 -El equipo de Netflix ⚠️:En caso de desconocimiento, sus servicios quedarán completamente suspendidos dentro de las 24 horas siguientes según los términos definidos en nuestros contratos. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 634,
      "end": 713,
      "text": "Darse de baja Derechos de autor 2024 El anunciante no gestiona su suscripción. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 713,
      "end": 849,
      "text": "Si prefiere no recibir más comunicaciones, anule la suscripción aquí O escriba a: 128 Willow Crest Rd Ste 402#5912, Northwood, VT, 05744"
    }
  ],
  "passA": {
    "requestSha256": "7fb4890c441754299a0262f908862b22f1547f8bf342402608e90bc79ada4731",
    "capturedAt": "2026-09-22T03:49:13.211Z",
    "elapsedMs": 654.8585390000007,
    "successfulAttemptElapsedMs": 654.107047999998,
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
          "noul": 0.49
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
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.55
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.13
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
            "no_sensitive_action": 0.02,
            "sender_supplied": 0.9,
            "mixed_or_unknown": 0.08,
            "independently_established": 0
          },
          "confidence": 0.86
        }
      },
      "usage": {
        "input_tokens": 5138,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "84676b58b1ab281a59eb37e6515c300b7c18014942f2f9d9a6a1c07b6324051d",
    "capturedAt": "2026-09-22T03:49:13.850Z",
    "elapsedMs": 637.3265699999974,
    "successfulAttemptElapsedMs": 636.5083550000054,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:4": 0,
            "body:0": 0,
            "body:3": 0.24,
            "body:1": 0.68,
            "body:5": 0.01,
            "body:2": 0.07,
            "NONE": 0
          },
          "confidence": 0.63
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:4": 0,
            "body:0": 0,
            "body:3": 0.14,
            "body:1": 0.52,
            "body:5": 0.02,
            "body:2": 0.05,
            "NONE": 0.27
          },
          "confidence": 0.44
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "subject:0": 0.03,
            "body:4": 0,
            "body:0": 0.02,
            "body:3": 0.95,
            "body:1": 0,
            "body:5": 0,
            "body:2": 0,
            "NONE": 0
          },
          "confidence": 0.94
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "subject:0": 0,
            "body:4": 0,
            "body:0": 0,
            "body:3": 0.84,
            "body:2": 0.01,
            "body:5": 0.01,
            "body:1": 0.13,
            "NONE": 0.01
          },
          "confidence": 0.82
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:4": 0.06,
            "body:0": 0.01,
            "body:3": 0.15,
            "body:1": 0.06,
            "body:5": 0.14,
            "body:2": 0.04,
            "NONE": 0.54
          },
          "confidence": 0.47
        }
      },
      "usage": {
        "input_tokens": 4068,
        "output_tokens": 460
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1293.872534999995,
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
        "status": "low_confidence",
        "segmentId": null
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
    "seq": 247,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-051",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:12.557Z",
    "offsetMs": 0.4777639999956591
  },
  {
    "seq": 248,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-051",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:13.211Z",
    "offsetMs": 654.8592339999959,
    "elapsedMs": 654.107047999998,
    "outcome": "success"
  },
  {
    "seq": 249,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-051",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:13.213Z",
    "offsetMs": 656.6433839999954
  },
  {
    "seq": 250,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-051",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:13.850Z",
    "offsetMs": 1293.5418359999967,
    "elapsedMs": 636.5083550000054,
    "outcome": "success"
  },
  {
    "seq": 251,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-051",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:13.850Z",
    "offsetMs": 1293.9238009999972,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "3a33a4c1257ea58d830fbb29cbee69fb4928a3dbec6024a0ff02e4bfd64080ce";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":248},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":250},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":251}} as const;
export const projectionSha256 = "8f4f3ea9e41353ac73dd0618785b395d28ed3e513fae4fc4d5ddfbe25a38feb9";
