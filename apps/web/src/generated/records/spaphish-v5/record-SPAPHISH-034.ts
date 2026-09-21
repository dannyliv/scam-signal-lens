import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-034",
  "inputSha256": "057e13c4819a9aec253fd0b43ef10fd4da991c8da24f7f442ead7972d38fbda1",
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
      "end": 173,
      "text": "Su suscripción a Prime expiró el 26 May 2024 Intentamos renovar la suscripción al final de cada ciclo de facturación, pero su pago mensual falló. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 173,
      "end": 224,
      "text": "Por lo tanto, tuvimos que cancelar su suscripción. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 224,
      "end": 267,
      "text": "Obviamente, nos encantaría volver a verte. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 267,
      "end": 333,
      "text": "Si deseas renovar tu suscripción Haga clic en el enlace de abajo. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 333,
      "end": 620,
      "text": "ACTUALIZAR MIS DETALLES DE PAGO ID de suscripción : 9988776655443 Producto : Prime 90 días Fecha de caducidad : 05/26/2024 Confirmar Disponible SÓLO HOY Para detenerlos, vaya aquí o escriba a: 750 Commerce St Ste.2-8080 Greenwood Lake, NY 10950 La anunciante no gestiona su suscripción. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 620,
      "end": 763,
      "text": "Si prefieres no recibir más comunicaciones por favor cancele su suscripción aquí O escribe a: 888 Technology Blvd, Unit #4179 Raleigh, NC 27601"
    }
  ],
  "passA": {
    "requestSha256": "801b8ba409ddc6444b26e9907c87b75825b1fb11d75411f8a98fe415e2fca33c",
    "capturedAt": "2026-09-20T23:44:02.435Z",
    "elapsedMs": 154.67000000000007,
    "successfulAttemptElapsedMs": 153.41799999999967,
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
          "noul": 0.86
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.76
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
          "noul": 0.73
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.51
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
            "informational": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0,
            "independently_established": 0,
            "sender_supplied": 0.99
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 3701,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "1a22b9d7c51be9de9415ee26aa7340c7ee806ebfd6fa972e691f722c88b7558d",
    "capturedAt": "2026-09-21T00:57:15.840Z",
    "elapsedMs": 139.85562499999992,
    "successfulAttemptElapsedMs": 137.51025000000004,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:1": 0,
            "body:5": 0.89,
            "body:0": 0,
            "body:4": 0.09,
            "subject:0": 0,
            "body:2": 0,
            "body:3": 0,
            "body:6": 0,
            "NONE": 0.02,
            "subject:1": 0
          },
          "confidence": 0.87
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:1": 0.01,
            "body:4": 0.36,
            "body:0": 0,
            "body:5": 0.58,
            "subject:0": 0,
            "body:3": 0,
            "body:2": 0,
            "body:6": 0,
            "NONE": 0.05,
            "subject:1": 0
          },
          "confidence": 0.52
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "body:1": 0,
            "body:4": 0,
            "body:0": 0,
            "subject:1": 0.6900000000000001,
            "subject:0": 0,
            "body:3": 0,
            "body:6": 0,
            "body:2": 0,
            "NONE": 0,
            "body:5": 0.31
          },
          "confidence": 0.65
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.27,
            "body:5": 0.14,
            "body:0": 0.08,
            "subject:1": 0.05,
            "subject:0": 0.01,
            "body:3": 0.01,
            "body:6": 0.01,
            "body:2": 0.07,
            "NONE": 0.34,
            "body:4": 0.02
          },
          "confidence": 0.26
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0,
            "subject:1": 0.01,
            "body:0": 0,
            "body:5": 0.29000000000000004,
            "subject:0": 0,
            "body:2": 0,
            "body:3": 0,
            "body:6": 0.02,
            "NONE": 0.62,
            "body:4": 0.06
          },
          "confidence": 0.57
        }
      },
      "usage": {
        "input_tokens": 3754,
        "output_tokens": 548
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 473.8860410000009,
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
        "status": "low_confidence",
        "segmentId": null
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
    "seq": 164,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-034",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:02.281Z",
    "offsetMs": 0.7697500000012951
  },
  {
    "seq": 165,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-034",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:02.435Z",
    "offsetMs": 154.67020799999955,
    "elapsedMs": 153.41799999999967,
    "outcome": "success"
  },
  {
    "seq": 166,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-034",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:02.438Z",
    "offsetMs": 157.78541600000062
  },
  {
    "seq": 167,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-034",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:02.612Z",
    "offsetMs": 332.15258300000096,
    "elapsedMs": 173.75729200000023,
    "outcome": "success"
  },
  {
    "seq": 168,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-034",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:02.612Z",
    "offsetMs": 332.40500000000065,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2486,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-034",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:15.702Z",
    "offsetMs": 2.6765000000000327
  },
  {
    "seq": 2487,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-034",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:15.840Z",
    "offsetMs": 140.77354100000002,
    "elapsedMs": 137.51025000000004,
    "outcome": "success"
  },
  {
    "seq": 2488,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-034",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:15.840Z",
    "offsetMs": 141.358833,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d2c9aa55d1bde5b78f65e5f0acca95ca03770076b7c901ea0a75b57c8e99fd8b";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":165},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2487},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2488}} as const;
export const projectionSha256 = "de311c0ab1d54b11910e3528952db90b27fc55fc8c2de7eb179f20a08d88e479";
