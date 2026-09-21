import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-015",
  "inputSha256": "a67a0ce819c0efc4ce58d1bf7c7fc7151c910ed436fd8cac7b5e56372234f7d6",
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
    "requestSha256": "58f808af11d6665053ae115e977c3cf7af62eb72aac473fb93913efc95b344b3",
    "capturedAt": "2026-09-20T23:43:55.824Z",
    "elapsedMs": 220.2153330000001,
    "successfulAttemptElapsedMs": 219.11595800000032,
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
          "noul": 0.84
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.71
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
          "noul": 0.74
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
            "active_request": 1,
            "informational": 0,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.02,
            "no_sensitive_action": 0,
            "independently_established": 0,
            "sender_supplied": 0.98
          },
          "confidence": 0.97
        }
      },
      "usage": {
        "input_tokens": 3708,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "aba97787d0332239d3c0154d3bd048b4df75029bd6f1e781db09daffe5a8fce3",
    "capturedAt": "2026-09-20T23:43:55.978Z",
    "elapsedMs": 150.90895799999998,
    "successfulAttemptElapsedMs": 149.47037499999988,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:1": 0,
            "subject:0": 0,
            "NONE": 0.01,
            "body:2": 0,
            "body:4": 0.07,
            "body:0": 0,
            "body:6": 0,
            "subject:1": 0,
            "body:3": 0,
            "body:5": 0.92
          },
          "confidence": 0.91
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:1": 0.01,
            "subject:0": 0,
            "NONE": 0.08,
            "body:2": 0,
            "body:4": 0.43,
            "body:0": 0,
            "subject:1": 0,
            "body:6": 0,
            "body:3": 0,
            "body:5": 0.48
          },
          "confidence": 0.42
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "body:1": 0,
            "subject:0": 0,
            "NONE": 0,
            "body:2": 0,
            "body:4": 0,
            "body:0": 0,
            "body:6": 0,
            "subject:1": 0.75,
            "body:3": 0,
            "body:5": 0.25
          },
          "confidence": 0.72
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.02,
            "body:1": 0.26,
            "NONE": 0.36,
            "body:2": 0.07,
            "body:4": 0.04,
            "body:0": 0.07,
            "subject:1": 0.04,
            "body:6": 0.02,
            "body:3": 0.01,
            "body:5": 0.11
          },
          "confidence": 0.29
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0,
            "NONE": 0.61,
            "body:0": 0,
            "body:4": 0.06,
            "body:2": 0,
            "subject:1": 0.01,
            "body:6": 0.02,
            "body:3": 0,
            "body:5": 0.3
          },
          "confidence": 0.56
        }
      },
      "usage": {
        "input_tokens": 3796,
        "output_tokens": 548
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 374.6592920000003,
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
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-015",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:55.604Z",
    "offsetMs": 0.6119170000001759
  },
  {
    "seq": 70,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-015",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:55.823Z",
    "offsetMs": 220.2157500000003,
    "elapsedMs": 219.11595800000032,
    "outcome": "success"
  },
  {
    "seq": 71,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-015",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:55.827Z",
    "offsetMs": 223.89879199999996
  },
  {
    "seq": 72,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-015",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:55.977Z",
    "offsetMs": 374.0583749999996,
    "elapsedMs": 149.47037499999988,
    "outcome": "success"
  },
  {
    "seq": 73,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-015",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:55.978Z",
    "offsetMs": 374.7555000000002,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "387984809b5934817666a623f967845b9da63e4cc3e0d3a11ecf640da45e075c";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":70},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":72},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":73}} as const;
export const projectionSha256 = "34429f92d229999463ce502c659655262cd92cef8089d6e09596409babb71863";
