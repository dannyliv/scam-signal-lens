import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-386",
  "inputSha256": "77dec2984673ac2cc255a5c966db46962c50530e5cce59f0f5a8fd81dd31a481",
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
    "requestSha256": "cdbc5521ae2c30f38350c3d6631018745244e832b13aeeaa99aafa09fedf81cb",
    "capturedAt": "2026-09-20T23:46:01.604Z",
    "elapsedMs": 124.46720800000185,
    "successfulAttemptElapsedMs": 122.68558299999859,
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
          "noul": 0.85
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.7
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
          "noul": 0.71
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
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0,
            "active_request": 1
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.02,
            "sender_supplied": 0.98,
            "independently_established": 0,
            "no_sensitive_action": 0
          },
          "confidence": 0.97
        }
      },
      "usage": {
        "input_tokens": 3712,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "cc0c831dab9218a4ffeb7ef3a15e281b7b56fec1671be26953efe887da58e831",
    "capturedAt": "2026-09-21T00:57:30.777Z",
    "elapsedMs": 148.68225000000166,
    "successfulAttemptElapsedMs": 146.13604099999793,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:0": 0,
            "subject:0": 0,
            "body:7": 0,
            "body:4": 0,
            "NONE": 0.02,
            "subject:1": 0,
            "body:3": 0,
            "body:6": 0.89,
            "body:5": 0.09,
            "body:1": 0,
            "body:2": 0
          },
          "confidence": 0.86
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:0": 0,
            "subject:0": 0,
            "body:7": 0,
            "body:3": 0,
            "NONE": 0.05,
            "body:4": 0,
            "subject:1": 0,
            "body:6": 0.55,
            "body:5": 0.38,
            "body:1": 0,
            "body:2": 0.01
          },
          "confidence": 0.5
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "body:0": 0,
            "subject:0": 0,
            "body:7": 0,
            "body:3": 0,
            "subject:1": 0.75,
            "NONE": 0,
            "body:4": 0,
            "body:6": 0.25,
            "body:5": 0,
            "body:1": 0,
            "body:2": 0
          },
          "confidence": 0.72
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.05,
            "subject:0": 0.03,
            "body:7": 0.01,
            "body:4": 0.01,
            "NONE": 0.48,
            "subject:1": 0.02,
            "body:3": 0.04,
            "body:2": 0.2,
            "body:1": 0.01,
            "body:6": 0.12,
            "body:5": 0.03
          },
          "confidence": 0.42
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:7": 0.01,
            "body:4": 0,
            "subject:1": 0.01,
            "body:3": 0,
            "NONE": 0.67,
            "body:6": 0.24,
            "body:5": 0.07,
            "body:2": 0,
            "body:1": 0
          },
          "confidence": 0.63
        }
      },
      "usage": {
        "input_tokens": 3890,
        "output_tokens": 593
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 487.1004589999975,
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
    "seq": 1893,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-386",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:01.480Z",
    "offsetMs": 1.3246670000080485
  },
  {
    "seq": 1894,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-386",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:01.603Z",
    "offsetMs": 124.46758399999817,
    "elapsedMs": 122.68558299999859,
    "outcome": "success"
  },
  {
    "seq": 1895,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-386",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:01.606Z",
    "offsetMs": 127.35133400000632
  },
  {
    "seq": 1896,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-386",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:01.816Z",
    "offsetMs": 336.70333400000527,
    "elapsedMs": 208.74799999999232,
    "outcome": "success"
  },
  {
    "seq": 1897,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-386",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:01.816Z",
    "offsetMs": 336.9126249999972,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2759,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-386",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:30.630Z",
    "offsetMs": 3.029540999999881
  },
  {
    "seq": 2760,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-386",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:30.777Z",
    "offsetMs": 149.70495799999844,
    "elapsedMs": 146.13604099999793,
    "outcome": "success"
  },
  {
    "seq": 2761,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-386",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:30.777Z",
    "offsetMs": 150.09820799999943,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0026935d0c82edaacf639e5656c4d07d8eafb2ee4515c82917c04a2277e4c672";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1894},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2760},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2761}} as const;
export const projectionSha256 = "32a9cfd0a0e64afb761078bbe060790c0362661ca91ac472cd8135fbb825742f";
