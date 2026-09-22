import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-386",
  "inputSha256": "77dec2984673ac2cc255a5c966db46962c50530e5cce59f0f5a8fd81dd31a481",
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
      "end": 207,
      "text": "Su suscripción a Prime expiró el 11 July 2024 Intentamos renovar la suscripción al final de cada ciclo de facturación, pero su pago mensual falló. "
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
      "end": 654,
      "text": "ACTUALIZAR MIS DETALLES DE PAGO ID de suscripción : 9988776655443 Producto : Prime 90 días Fecha de caducidad : 07/11/2024 Confirmar Disponible SÓLO HOY Para detenerlos, vaya aquí o escriba a: 750 Commerce St Ste.2-8080 Greenwood Lake, NY 10950 La anunciante no gestiona su suscripción. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 654,
      "end": 797,
      "text": "Si prefieres no recibir más comunicaciones por favor cancele su suscripción aquí O escribe a: 888 Technology Blvd, Unit #4179 Raleigh, NC 27601"
    }
  ],
  "passA": {
    "requestSha256": "93c478e0a95f04cc8615e1355c25ca274f4a8dec80e2573202619212ca072ebf",
    "capturedAt": "2026-09-22T03:55:54.635Z",
    "elapsedMs": 705.4259499999462,
    "successfulAttemptElapsedMs": 703.9941560000298,
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
          "noul": 0.64
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
          "noul": 0.45
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.15
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.03
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
            "active_request": 1,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.05,
            "sender_supplied": 0.94,
            "no_sensitive_action": 0.01,
            "independently_established": 0
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 5162,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "0f424edbc8d13fb41d5f216cc56d4a1d4064194dc4036431dda5aaa5c83411ca",
    "capturedAt": "2026-09-22T03:55:55.199Z",
    "elapsedMs": 562.0483949999907,
    "successfulAttemptElapsedMs": 560.8734510000213,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:4": 0,
            "NONE": 0.01,
            "body:0": 0,
            "body:7": 0,
            "body:6": 0.89,
            "body:5": 0.1,
            "body:1": 0,
            "subject:1": 0,
            "body:2": 0,
            "subject:0": 0,
            "body:3": 0
          },
          "confidence": 0.87
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "subject:1": 0,
            "NONE": 0.12,
            "body:0": 0,
            "body:7": 0,
            "body:5": 0.37,
            "body:4": 0,
            "body:6": 0.5,
            "subject:0": 0,
            "body:2": 0.01,
            "body:3": 0,
            "body:1": 0
          },
          "confidence": 0.44
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "body:5": 0,
            "NONE": 0,
            "body:0": 0,
            "body:7": 0,
            "subject:1": 0.69,
            "body:4": 0,
            "subject:0": 0,
            "body:6": 0.31,
            "body:2": 0,
            "body:1": 0,
            "body:3": 0
          },
          "confidence": 0.66
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:4": 0.02,
            "NONE": 0.39,
            "body:0": 0.04,
            "body:7": 0.01,
            "subject:1": 0.01,
            "body:5": 0.06,
            "body:1": 0,
            "body:6": 0.12,
            "body:2": 0.27,
            "body:3": 0.05,
            "subject:0": 0.03
          },
          "confidence": 0.33
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:5": 0.08,
            "NONE": 0.61,
            "body:0": 0,
            "body:7": 0.02,
            "body:4": 0,
            "subject:0": 0,
            "subject:1": 0.01,
            "body:6": 0.28,
            "body:2": 0,
            "body:3": 0,
            "body:1": 0
          },
          "confidence": 0.56
        }
      },
      "usage": {
        "input_tokens": 4422,
        "output_tokens": 593
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1269.727504999959,
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
    "seq": 1891,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-386",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:53.930Z",
    "offsetMs": 1.1138599999831058
  },
  {
    "seq": 1892,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-386",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:54.634Z",
    "offsetMs": 705.4272190000047,
    "elapsedMs": 703.9941560000298,
    "outcome": "success"
  },
  {
    "seq": 1893,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-386",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:54.637Z",
    "offsetMs": 708.2166089999955
  },
  {
    "seq": 1894,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-386",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:55.198Z",
    "offsetMs": 1269.4165299999877,
    "elapsedMs": 560.8734510000213,
    "outcome": "success"
  },
  {
    "seq": 1895,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-386",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:55.199Z",
    "offsetMs": 1269.7770930000115,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "93629f9a56c06bcfef6d81f0ef9661901567ce40675d0b7c8c868184cc41dcee";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1892},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1894},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1895}} as const;
export const projectionSha256 = "0a2dcee5e4b63e9a3bcd4751565f1d87d4cbd22c6360ecb1ec32b16da679f576";
