import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-104",
  "inputSha256": "513a246b63452fad1e1866b929a11ae37d566ce0e110c6f8298a45777f30b0e2",
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
      "end": 18,
      "text": "Acción Requerida !"
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 18,
      "end": 24,
      "text": "#faxSC"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 35,
      "text": "¡Necesitamos tu ayuda con el pago! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 35,
      "end": 107,
      "text": "Hola, Notamos que hubo un problema al intentar procesar tu último pago. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 107,
      "end": 192,
      "text": "Es posible que tu tarjeta haya vencido o que algunos datos ya no estén actualizados. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 192,
      "end": 300,
      "text": "Para que sigas disfrutando del servicio sin interrupciones, por favor revisa y actualiza tu método de pago. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 300,
      "end": 327,
      "text": "Solo te tomará un momento. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 327,
      "end": 467,
      "text": "Si no realizas la actualización en las próximas 24 horas, tu cuenta podría quedar temporalmente suspendida hasta resolver el inconveniente. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 467,
      "end": 526,
      "text": "Actualizar Método de Pago ¿Tienes dudas o necesitas ayuda? "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 526,
      "end": 606,
      "text": "Nuestro equipo de soporte está disponible para acompañarte en lo que necesites. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 606,
      "end": 632,
      "text": "Gracias por tu confianza. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 632,
      "end": 655,
      "text": "Seguimos aquí para ti. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 655,
      "end": 683,
      "text": "© 2025 TuServicio en Línea. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 683,
      "end": 714,
      "text": "Todos los derechos reservados. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 714,
      "end": 754,
      "text": "Este mensaje se generó automáticamente. "
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 754,
      "end": 782,
      "text": "No es necesario responderlo."
    }
  ],
  "passA": {
    "requestSha256": "d8446c58ad3a2658fd994666e83582de77665252a8fc91636f4f400ff3fde856",
    "capturedAt": "2026-09-22T03:50:16.530Z",
    "elapsedMs": 656.7874109999975,
    "successfulAttemptElapsedMs": 655.9381189999986,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.04
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.74
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.34
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.97
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.15
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.06
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
            "sender_supplied": 0.85,
            "no_sensitive_action": 0.07,
            "mixed_or_unknown": 0.08,
            "independently_established": 0
          },
          "confidence": 0.8
        }
      },
      "usage": {
        "input_tokens": 5079,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "62476dd3b1f03a6a6e6376eb6f64f1fec75aabc8e0355ef4c267dd0f2b2d0ea6",
    "capturedAt": "2026-09-22T03:50:17.076Z",
    "elapsedMs": 544.0052739999956,
    "successfulAttemptElapsedMs": 542.5921600000001,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:6": 0.39,
            "body:11": 0,
            "body:8": 0,
            "body:12": 0,
            "body:0": 0,
            "body:10": 0,
            "body:9": 0,
            "body:13": 0,
            "body:4": 0,
            "body:3": 0.49,
            "body:1": 0,
            "NONE": 0.11,
            "subject:0": 0,
            "body:2": 0.01,
            "subject:1": 0,
            "body:5": 0,
            "body:7": 0
          },
          "confidence": 0.44
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0.07,
            "body:0": 0.06,
            "body:3": 0.28,
            "body:12": 0,
            "body:11": 0,
            "body:10": 0,
            "body:4": 0,
            "body:13": 0,
            "body:1": 0,
            "body:8": 0,
            "body:9": 0,
            "NONE": 0.59,
            "subject:0": 0,
            "subject:1": 0,
            "body:2": 0,
            "body:5": 0,
            "body:7": 0
          },
          "confidence": 0.55
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:6": 0,
            "body:11": 0,
            "body:9": 0,
            "body:1": 0,
            "body:0": 0,
            "body:10": 0,
            "body:3": 0,
            "body:13": 0,
            "body:8": 0,
            "body:4": 0,
            "body:12": 0,
            "NONE": 0,
            "subject:0": 0,
            "body:2": 0,
            "subject:1": 0,
            "body:5": 1,
            "body:7": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "body:6": 0.03,
            "body:0": 0.01,
            "body:8": 0,
            "body:1": 0,
            "body:12": 0,
            "body:10": 0,
            "body:9": 0,
            "body:13": 0,
            "body:4": 0,
            "body:3": 0.01,
            "body:11": 0,
            "NONE": 0.01,
            "subject:0": 0,
            "body:2": 0,
            "subject:1": 0,
            "body:5": 0,
            "body:7": 0.93
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 3592,
        "output_tokens": 706
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1203.0871099999931,
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
        "segmentId": "body:5"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:7"
      },
      "verification_bypass": {
        "status": "not_requested",
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
    "seq": 503,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-104",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:15.873Z",
    "offsetMs": 0.5268409999989672
  },
  {
    "seq": 504,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-104",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:16.530Z",
    "offsetMs": 656.7869499999942,
    "elapsedMs": 655.9381189999986,
    "outcome": "success"
  },
  {
    "seq": 505,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-104",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:16.532Z",
    "offsetMs": 659.474000999995
  },
  {
    "seq": 506,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-104",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:17.075Z",
    "offsetMs": 1202.6863909999956,
    "elapsedMs": 542.5921600000001,
    "outcome": "success"
  },
  {
    "seq": 507,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-104",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:17.076Z",
    "offsetMs": 1203.1405590000068,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "5913a8a5ee7fa543c405fb76055e91f550ed82b77df04e674993607f504dd570";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":504},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":506},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":507}} as const;
export const projectionSha256 = "2c9a35cb8874ef2700d651ea7c7bd048d331a89d427e1bc1d226597c3f9e6881";
