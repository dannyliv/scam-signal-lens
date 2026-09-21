import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-152",
  "inputSha256": "f7032c893eece92c6dd4529f90ee323673d72bd8ee8fba7affb24233d90b0bd7",
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
      "text": "¡Tu membresía ha caducado!\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 27,
      "end": 72,
      "text": "Su suscripción a Prime expiró el 21 Jun 2025\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 72,
      "end": 173,
      "text": "Intentamos renovar la suscripción al final de cada ciclo de facturación, pero su pago mensual falló. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 173,
      "end": 224,
      "text": "Por lo tanto, tuvimos que cancelar su suscripción. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 224,
      "end": 267,
      "text": "Obviamente, nos encantaría volver a verte.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 267,
      "end": 268,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 268,
      "end": 301,
      "text": "Si deseas renovar tu suscripción\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 301,
      "end": 334,
      "text": "Haga clic en el enlace de abajo.\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 334,
      "end": 335,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 335,
      "end": 367,
      "text": "ACTUALIZAR MIS DETALLES DE PAGO\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 367,
      "end": 368,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 368,
      "end": 402,
      "text": "ID de suscripción : 8745206937811\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 402,
      "end": 427,
      "text": "Producto : Prime 90 días\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 427,
      "end": 459,
      "text": "Fecha de caducidad : 06/21/2025\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 459,
      "end": 460,
      "text": "\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 460,
      "end": 490,
      "text": "Confirmar Disponible SÓLO HOY\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 490,
      "end": 491,
      "text": "\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 491,
      "end": 531,
      "text": "Para detenerlos, vaya aquí o escriba a:\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 531,
      "end": 582,
      "text": "412 Greenfield Ave Ste.5-3280 Brookhaven, PA 19015\n"
    },
    {
      "id": "body:19",
      "source": "body",
      "start": 582,
      "end": 583,
      "text": "\n"
    },
    {
      "id": "body:20",
      "source": "body",
      "start": 583,
      "end": 625,
      "text": "La anunciante no gestiona su suscripción.\n"
    },
    {
      "id": "body:21",
      "source": "body",
      "start": 625,
      "end": 706,
      "text": "Si prefieres no recibir más comunicaciones por favor cancele su suscripción aquí\n"
    },
    {
      "id": "body:22",
      "source": "body",
      "start": 706,
      "end": 766,
      "text": "O escribe a: 221 Northbridge Lane,Unit #3025 Weston TX 75410"
    }
  ],
  "passA": {
    "requestSha256": "f525f86ee922ec44e89b93da78f506193488e998e843317121707c420011d375",
    "capturedAt": "2026-09-20T23:44:39.251Z",
    "elapsedMs": 155.32645800000319,
    "successfulAttemptElapsedMs": 153.845917000006,
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
          "noul": 0.77
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
          "noul": 0.7
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.5
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.11
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
            "active_request": 0.99,
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0.01
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.98,
            "independently_established": 0,
            "no_sensitive_action": 0,
            "mixed_or_unknown": 0.02
          },
          "confidence": 0.97
        }
      },
      "usage": {
        "input_tokens": 3718,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "353b3dfa33795249f35f1a40d471a8f3d772da414be42f0b2f93768f0b43c6dc",
    "capturedAt": "2026-09-21T00:57:19.936Z",
    "elapsedMs": 153.04933399999936,
    "successfulAttemptElapsedMs": 150.38758400000006,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:9",
          "probabilities": {
            "body:3": 0,
            "body:13": 0,
            "body:19": 0,
            "body:12": 0,
            "body:15": 0,
            "body:1": 0,
            "body:4": 0,
            "body:18": 0,
            "body:10": 0,
            "body:20": 0,
            "NONE": 0.01,
            "body:9": 0.99,
            "body:5": 0,
            "body:2": 0,
            "body:11": 0,
            "body:6": 0,
            "body:21": 0,
            "body:22": 0,
            "body:0": 0,
            "body:17": 0,
            "subject:1": 0,
            "body:16": 0,
            "subject:0": 0,
            "body:8": 0,
            "body:14": 0,
            "body:7": 0
          },
          "confidence": 0.98
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:9",
          "probabilities": {
            "body:3": 0,
            "body:13": 0,
            "body:19": 0,
            "body:12": 0,
            "body:4": 0,
            "body:1": 0,
            "body:15": 0,
            "body:18": 0,
            "body:10": 0,
            "body:20": 0,
            "NONE": 0.05,
            "body:9": 0.93,
            "body:5": 0,
            "subject:0": 0,
            "body:11": 0,
            "body:21": 0,
            "body:7": 0.01,
            "subject:1": 0,
            "body:0": 0,
            "body:17": 0,
            "body:6": 0.01,
            "body:16": 0,
            "body:2": 0,
            "body:8": 0,
            "body:14": 0,
            "body:22": 0
          },
          "confidence": 0.92
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "body:3": 0,
            "body:13": 0,
            "body:19": 0,
            "body:12": 0,
            "body:4": 0,
            "body:1": 0,
            "body:15": 0.12,
            "body:18": 0,
            "body:10": 0,
            "body:20": 0,
            "NONE": 0,
            "body:9": 0,
            "body:2": 0,
            "subject:0": 0,
            "body:11": 0,
            "body:22": 0,
            "subject:1": 0.88,
            "body:7": 0,
            "body:0": 0,
            "body:17": 0,
            "body:6": 0,
            "body:16": 0,
            "body:21": 0,
            "body:14": 0,
            "body:5": 0,
            "body:8": 0
          },
          "confidence": 0.87
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:3": 0.03,
            "body:13": 0,
            "body:19": 0.01,
            "body:12": 0,
            "body:15": 0.01,
            "body:1": 0.02,
            "body:4": 0.01,
            "body:18": 0.01,
            "body:10": 0.01,
            "body:20": 0.06,
            "NONE": 0.53,
            "body:9": 0.08,
            "body:2": 0.08,
            "body:5": 0,
            "body:11": 0.01,
            "body:22": 0,
            "body:21": 0.01,
            "body:7": 0.02,
            "body:0": 0.03,
            "body:17": 0.01,
            "body:6": 0.01,
            "body:16": 0,
            "subject:1": 0.04,
            "body:8": 0.01,
            "body:14": 0,
            "subject:0": 0.01
          },
          "confidence": 0.51
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:3": 0,
            "body:13": 0,
            "body:19": 0,
            "body:12": 0,
            "body:15": 0.03,
            "body:1": 0,
            "body:4": 0,
            "body:18": 0,
            "body:10": 0.01,
            "body:20": 0.05,
            "NONE": 0.67,
            "body:9": 0.09,
            "body:5": 0,
            "subject:0": 0,
            "body:11": 0,
            "body:6": 0,
            "body:7": 0.05,
            "body:21": 0.01,
            "body:0": 0,
            "body:17": 0.06,
            "body:22": 0.01,
            "body:16": 0,
            "body:2": 0,
            "body:8": 0,
            "body:14": 0,
            "subject:1": 0.01
          },
          "confidence": 0.65
        }
      },
      "usage": {
        "input_tokens": 4961,
        "output_tokens": 1333
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 538.2852510000012,
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
        "segmentId": "body:9"
      },
      "payment_request": {
        "status": "selected",
        "segmentId": "body:9"
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
    "seq": 744,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-152",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:39.096Z",
    "offsetMs": 0.9994169999990845
  },
  {
    "seq": 745,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-152",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:39.251Z",
    "offsetMs": 155.32774999999674,
    "elapsedMs": 153.845917000006,
    "outcome": "success"
  },
  {
    "seq": 746,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-152",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:39.255Z",
    "offsetMs": 159.4745419999963
  },
  {
    "seq": 747,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-152",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:39.479Z",
    "offsetMs": 383.45920900000056,
    "elapsedMs": 223.26487500000076,
    "outcome": "success"
  },
  {
    "seq": 748,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-152",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:39.479Z",
    "offsetMs": 383.6275000000023,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2567,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-152",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:19.785Z",
    "offsetMs": 3.081250000000182
  },
  {
    "seq": 2568,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-152",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:19.936Z",
    "offsetMs": 154.12995899999987,
    "elapsedMs": 150.38758400000006,
    "outcome": "success"
  },
  {
    "seq": 2569,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-152",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:19.936Z",
    "offsetMs": 154.63016699999935,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "83a17105f6d62b17f7a2db5b95165d28884194b72eb766f50c0e8d52034d32c4";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":745},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2568},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2569}} as const;
export const projectionSha256 = "74901ae412f16d6f67a0598f914ee4f0c24ca5475566161843727a2d09d6d3f8";
