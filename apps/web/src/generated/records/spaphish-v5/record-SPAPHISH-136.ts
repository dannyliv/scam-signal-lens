import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-136",
  "inputSha256": "95aafe7866cfb676641694c785889f1ce86d779eb77107244f0b083c31e217aa",
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
      "end": 207,
      "text": "Su suscripción a Prime expiró el 02 June 2024 Intentamos renovar la suscripción al final de cada ciclo de facturación, pero su pago mensual falló. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 207,
      "end": 258,
      "text": "Por lo tanto, tuvimos que cancelar su suscripción. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 258,
      "end": 301,
      "text": "Obviamente, nos encantaría volver a verte. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 301,
      "end": 367,
      "text": "Si deseas renovar tu suscripción Haga clic en el enlace de abajo. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 367,
      "end": 658,
      "text": "ACTUALIZAR MIS DETALLES DE PAGO ID de suscripción : 1396290342528 Producto : Prime 90 días Fecha de caducidad : 06/02/2024 Confirmar *Disponible SÓLO HOY* Para detenerlos, vaya aquí o escriba a: 616 Corporate Way Ste.2-9092 Valley Cottage, NY 10989 La anunciante no gestiona su suscripción. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 658,
      "end": 796,
      "text": "Si prefieres no recibir más comunicaciones por favor cancele su suscripción aquí O escribe a: 964 High House Road,Unit #4179 Cary NC 27513"
    }
  ],
  "passA": {
    "requestSha256": "85780e203747bec597e7c39652434137fe3b3f28675779219155112a45cf8eb2",
    "capturedAt": "2026-09-20T23:44:34.385Z",
    "elapsedMs": 131.7480410000062,
    "successfulAttemptElapsedMs": 130.21637499999633,
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
          "noul": 0.82
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.74
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
          "noul": 0.48
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
            "mixed_or_unclear": 0.01,
            "active_request": 0.99,
            "informational": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0,
            "sender_supplied": 0.98,
            "mixed_or_unknown": 0.02,
            "independently_established": 0
          },
          "confidence": 0.97
        }
      },
      "usage": {
        "input_tokens": 3716,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "1e76770422ce22cfe65d2aaac5e8a471136c32fd2f15cbd26504d67d211ea4fc",
    "capturedAt": "2026-09-20T23:44:34.500Z",
    "elapsedMs": 111.6528330000001,
    "successfulAttemptElapsedMs": 109.88308400000096,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:2": 0,
            "body:0": 0,
            "body:6": 0.92,
            "body:3": 0,
            "subject:0": 0,
            "body:7": 0,
            "subject:1": 0,
            "body:5": 0.06,
            "body:1": 0,
            "body:4": 0,
            "NONE": 0.02
          },
          "confidence": 0.91
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:2": 0.01,
            "body:0": 0,
            "body:6": 0.53,
            "body:3": 0,
            "subject:0": 0,
            "body:1": 0,
            "subject:1": 0,
            "body:7": 0,
            "body:5": 0.37,
            "body:4": 0,
            "NONE": 0.09
          },
          "confidence": 0.47
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "body:2": 0,
            "body:0": 0,
            "body:6": 0.18,
            "body:3": 0,
            "subject:0": 0,
            "body:7": 0,
            "subject:1": 0.8200000000000001,
            "body:5": 0,
            "body:1": 0,
            "body:4": 0,
            "NONE": 0
          },
          "confidence": 0.79
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.18,
            "body:0": 0.06,
            "body:6": 0.13,
            "body:3": 0.04,
            "subject:0": 0.02,
            "body:1": 0.01,
            "subject:1": 0.04,
            "body:7": 0.01,
            "body:5": 0.03,
            "body:4": 0.01,
            "NONE": 0.47
          },
          "confidence": 0.43
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "body:0": 0,
            "body:6": 0.16,
            "body:3": 0,
            "subject:0": 0,
            "body:7": 0.02,
            "subject:1": 0.01,
            "body:1": 0,
            "body:5": 0.07,
            "body:4": 0,
            "NONE": 0.74
          },
          "confidence": 0.71
        }
      },
      "usage": {
        "input_tokens": 3914,
        "output_tokens": 593
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 246.93479099999968,
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
        "status": "none_selected",
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
    "seq": 667,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-136",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:34.254Z",
    "offsetMs": 0.9473330000037095
  },
  {
    "seq": 668,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-136",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:34.385Z",
    "offsetMs": 131.74870799999917,
    "elapsedMs": 130.21637499999633,
    "outcome": "success"
  },
  {
    "seq": 669,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-136",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:34.389Z",
    "offsetMs": 135.7789580000026
  },
  {
    "seq": 670,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-136",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:34.500Z",
    "offsetMs": 246.34766600000148,
    "elapsedMs": 109.88308400000096,
    "outcome": "success"
  },
  {
    "seq": 671,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-136",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:34.500Z",
    "offsetMs": 247.03495800000383,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "5b94047544fbc58118c84a9b55a190e04ef80efa2c6b6f85cccac2dd9d82472f";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":668},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":670},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":671}} as const;
export const projectionSha256 = "d2ef609004d1ce70bf862cdfa6a26858c96edcb81f44a3d9436303e4a68cc536";
