import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-492",
  "inputSha256": "201357af5181b7d201b25f70ae2e95f83bc9e23a8f62d893d0832e064584fcce",
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
      "text": "Su suscripción a Prime expiró el 13 March 2024 Intentamos renovar la suscripción al final de cada ciclo de facturación, pero su pago mensual falló. "
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
      "end": 655,
      "text": "ACTUALIZAR MIS DETALLES DE PAGO ID de suscripción : 9988776655443 Producto : Prime 90 días Fecha de caducidad : 03/13/2024 Confirmar Disponible SÓLO HOY Para detenerlos, vaya aquí o escriba a: 750 Commerce St Ste.2-8080 Greenwood Lake, NY 10950 La anunciante no gestiona su suscripción. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 655,
      "end": 798,
      "text": "Si prefieres no recibir más comunicaciones por favor cancele su suscripción aquí O escribe a: 888 Technology Blvd, Unit #4179 Raleigh, NC 27601"
    }
  ],
  "passA": {
    "requestSha256": "e3507d13701f9faf43259cc43e5e791368685932ba99ad9bbecce86e6e7e798a",
    "capturedAt": "2026-09-20T23:46:36.894Z",
    "elapsedMs": 149.75629099999787,
    "successfulAttemptElapsedMs": 146.79120800000965,
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
          "noul": 0.49
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
            "informational": 0,
            "active_request": 0.99,
            "mixed_or_unclear": 0.01,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0,
            "independently_established": 0,
            "sender_supplied": 0.98,
            "mixed_or_unknown": 0.02
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
    "requestSha256": "14a0ddf863ab149bfa65d7889ec6b2580f71477bd21a4ecd848fc9b51564c68a",
    "capturedAt": "2026-09-21T00:57:35.097Z",
    "elapsedMs": 193.3185420000009,
    "successfulAttemptElapsedMs": 190.78054100000008,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:7": 0,
            "body:0": 0,
            "subject:0": 0,
            "body:5": 0.09,
            "body:2": 0,
            "subject:1": 0,
            "body:1": 0,
            "NONE": 0.02,
            "body:6": 0.89,
            "body:3": 0,
            "body:4": 0
          },
          "confidence": 0.87
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:5": 0.3,
            "body:0": 0,
            "body:7": 0,
            "subject:0": 0,
            "body:2": 0.01,
            "subject:1": 0,
            "body:1": 0,
            "NONE": 0.07,
            "body:6": 0.62,
            "body:3": 0,
            "body:4": 0
          },
          "confidence": 0.57
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "body:5": 0,
            "body:0": 0,
            "subject:0": 0,
            "body:7": 0,
            "body:2": 0,
            "subject:1": 0.75,
            "body:1": 0,
            "body:3": 0,
            "body:6": 0.25,
            "NONE": 0,
            "body:4": 0
          },
          "confidence": 0.72
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:5": 0.04,
            "body:0": 0.06,
            "subject:0": 0.03,
            "body:7": 0.01,
            "body:2": 0.17,
            "subject:1": 0.03,
            "body:1": 0.01,
            "NONE": 0.5,
            "body:6": 0.1,
            "body:3": 0.04,
            "body:4": 0.01
          },
          "confidence": 0.45
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:5": 0.07,
            "body:0": 0,
            "subject:0": 0,
            "body:7": 0.01,
            "body:2": 0,
            "subject:1": 0.01,
            "body:1": 0,
            "body:3": 0,
            "body:6": 0.24,
            "NONE": 0.67,
            "body:4": 0
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
  "processingElapsedMs": 580.163708,
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
    "seq": 2417,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-492",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:36.746Z",
    "offsetMs": 2.2674999999871943
  },
  {
    "seq": 2418,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-492",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:36.894Z",
    "offsetMs": 149.7592500000028,
    "elapsedMs": 146.79120800000965,
    "outcome": "success"
  },
  {
    "seq": 2419,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-492",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:36.899Z",
    "offsetMs": 154.46033299999544
  },
  {
    "seq": 2420,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-492",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:37.129Z",
    "offsetMs": 385.36087499998393,
    "elapsedMs": 229.67212499998277,
    "outcome": "success"
  },
  {
    "seq": 2421,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-492",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:37.130Z",
    "offsetMs": 385.54033299998264,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2833,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-492",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:34.905Z",
    "offsetMs": 2.903542000000016
  },
  {
    "seq": 2834,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-492",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:35.097Z",
    "offsetMs": 194.29820800000016,
    "elapsedMs": 190.78054100000008,
    "outcome": "success"
  },
  {
    "seq": 2835,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-492",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:35.097Z",
    "offsetMs": 194.55554199999824,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "41ecf6576d4494ca340280329ec3673fdc5b4196ccad3a561d4268c8807c2cae";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2418},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2834},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2835}} as const;
export const projectionSha256 = "669c0cfe76a95f06048996dcecd4a8b9f2636233a91c0c30ae330e4484b81187";
