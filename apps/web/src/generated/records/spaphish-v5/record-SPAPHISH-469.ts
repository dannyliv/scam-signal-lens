import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-469",
  "inputSha256": "faf547d07210a6bc76b21fcd15b19d85a5fe3d3e9c3858dbad805080a4b01263",
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
    "requestSha256": "36235047288124545168bcedf872020ec80af92b779c74cc3e60a5f71d0eace4",
    "capturedAt": "2026-09-20T23:46:29.306Z",
    "elapsedMs": 135.6905829999887,
    "successfulAttemptElapsedMs": 133.24687499998254,
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
          "noul": 0.85
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
          "noul": 0.53
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
          "noul": 0.11
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
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0,
            "sender_supplied": 0.97,
            "independently_established": 0,
            "mixed_or_unknown": 0.03
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 3687,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "fc20e2c63295485c7cf81ed3d24cba5360ee885767e2a0161a0286c482bcf087",
    "capturedAt": "2026-09-21T00:57:34.079Z",
    "elapsedMs": 160.81825000000026,
    "successfulAttemptElapsedMs": 158.26533299999937,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:6": 0.89,
            "body:7": 0,
            "body:0": 0,
            "body:2": 0,
            "NONE": 0.02,
            "body:4": 0,
            "body:5": 0.09,
            "subject:1": 0,
            "body:3": 0,
            "subject:0": 0,
            "body:1": 0
          },
          "confidence": 0.87
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:6": 0.52,
            "body:7": 0,
            "body:0": 0,
            "body:2": 0.01,
            "NONE": 0.06,
            "body:4": 0,
            "body:5": 0.41,
            "body:3": 0,
            "subject:1": 0,
            "subject:0": 0,
            "body:1": 0
          },
          "confidence": 0.46
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "body:6": 0.22,
            "body:7": 0,
            "body:0": 0,
            "body:2": 0,
            "NONE": 0,
            "body:4": 0,
            "body:5": 0,
            "subject:1": 0.78,
            "body:3": 0,
            "subject:0": 0,
            "body:1": 0
          },
          "confidence": 0.76
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0.15,
            "body:7": 0.01,
            "body:0": 0.05,
            "body:2": 0.2,
            "NONE": 0.45,
            "body:4": 0.01,
            "body:5": 0.04,
            "subject:0": 0.02,
            "body:3": 0.03,
            "subject:1": 0.03,
            "body:1": 0.01
          },
          "confidence": 0.39
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0.25,
            "body:7": 0.01,
            "body:0": 0,
            "body:2": 0,
            "NONE": 0.61,
            "body:4": 0,
            "body:5": 0.12,
            "body:3": 0,
            "subject:1": 0.01,
            "subject:0": 0,
            "body:1": 0
          },
          "confidence": 0.56
        }
      },
      "usage": {
        "input_tokens": 3740,
        "output_tokens": 593
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 427.6917499999945,
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
    "seq": 2304,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-469",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:29.172Z",
    "offsetMs": 1.9023750000051223
  },
  {
    "seq": 2305,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-469",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:29.306Z",
    "offsetMs": 135.69287500000792,
    "elapsedMs": 133.24687499998254,
    "outcome": "success"
  },
  {
    "seq": 2306,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-469",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:29.309Z",
    "offsetMs": 139.04145900000003
  },
  {
    "seq": 2307,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-469",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:29.434Z",
    "offsetMs": 263.7922499999986,
    "elapsedMs": 124.27537499999744,
    "outcome": "success"
  },
  {
    "seq": 2308,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-469",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:29.434Z",
    "offsetMs": 263.9573340000061,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2812,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-469",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:33.918Z",
    "offsetMs": 3.0010419999998703
  },
  {
    "seq": 2813,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-469",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:34.077Z",
    "offsetMs": 161.84583399999974,
    "elapsedMs": 158.26533299999937,
    "outcome": "success"
  },
  {
    "seq": 2814,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-469",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:34.079Z",
    "offsetMs": 163.72266699999818,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "60be9d3127baf9fb30dd56bf3ed690e2b9fcf0b28f30a4716a85cffcf65cba08";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2305},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2813},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2814}} as const;
export const projectionSha256 = "05573f60cefddbdf021a194a25cec0a3dec61c6414567c359c7986e0d85db78a";
