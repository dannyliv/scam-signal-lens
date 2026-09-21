import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-133",
  "inputSha256": "88094e78926a91a7a304119ff6e05acf29b649aa6e025e1a872db957b71382a7",
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
      "end": 31,
      "text": "Contratos primer trimestre 2025"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 30,
      "text": "Buenos días personal docente,\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 30,
      "end": 31,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 31,
      "end": 94,
      "text": "Espero que encuentres muy bien y que tengan un excelente 2025.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 94,
      "end": 95,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 95,
      "end": 335,
      "text": "Por medio del presente se les informa que en los próximos días estaremos solicitando su apoyo para ingresar al sistema y realizar la validación de acuerdo correspondiente al segundo semestre del 2025 así como la declaración de actividades. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 335,
      "end": 563,
      "text": "Recuerden que deben de tener su Firma Electrónica Avanzada (FEA) del Organismo Tributario Vigentes para que puedan llevar a cabo la firma de estos documentos y demás procesos en el sistema Portal de Servicios al Personal (PSP).\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 563,
      "end": 564,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 564,
      "end": 756,
      "text": "Para personal docente de nuevo ingreso les pedimos de favor que tengan listos todos sus documentos vigentes, escaneados y a la mano para que los carguen en cuanto a nosotros les notifiquemos.\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 756,
      "end": 757,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 757,
      "end": 806,
      "text": "Cualquier duda o comentario quedamos a la orden.\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 806,
      "end": 807,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 807,
      "end": 825,
      "text": "Saludos cordiales\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 825,
      "end": 826,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 826,
      "end": 828,
      "text": "--"
    }
  ],
  "passA": {
    "requestSha256": "e7d40fa5cc5c83f66844318958aba581c0e226240e40d86afa5fbb88b692c37f",
    "capturedAt": "2026-09-20T23:44:33.559Z",
    "elapsedMs": 102.45254099999875,
    "successfulAttemptElapsedMs": 101.50391600000148,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.03
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.3
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.24
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.87
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.2
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.79,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 0.21
          },
          "confidence": 0.72
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.59,
            "sender_supplied": 0.03,
            "mixed_or_unknown": 0.04,
            "independently_established": 0.34
          },
          "confidence": 0.46
        }
      },
      "usage": {
        "input_tokens": 3633,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "d3ece4a67683d56575584b7f09ea50c2123aeac97cfc594dc8bfab67edab4b47",
    "capturedAt": "2026-09-21T00:57:19.442Z",
    "elapsedMs": 140.90937500000018,
    "successfulAttemptElapsedMs": 139.2455829999999,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "body:0": 0,
            "body:3": 0,
            "NONE": 0.21,
            "body:10": 0,
            "body:1": 0,
            "body:8": 0,
            "body:12": 0,
            "body:2": 0,
            "body:7": 0.46,
            "body:9": 0,
            "body:5": 0.32,
            "body:11": 0,
            "body:6": 0,
            "body:13": 0,
            "subject:0": 0,
            "body:4": 0.01
          },
          "confidence": 0.42
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "subject:0": 0,
            "body:3": 0,
            "NONE": 0.34,
            "body:10": 0,
            "body:1": 0,
            "body:8": 0,
            "body:12": 0,
            "body:2": 0,
            "body:7": 0.08,
            "body:5": 0.06,
            "body:9": 0,
            "body:11": 0,
            "body:13": 0,
            "body:6": 0,
            "body:0": 0,
            "body:4": 0.52
          },
          "confidence": 0.48
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "subject:0": 0,
            "body:3": 0,
            "NONE": 0.04,
            "body:10": 0,
            "body:1": 0,
            "body:8": 0.01,
            "body:12": 0,
            "body:2": 0,
            "body:7": 0.11,
            "body:5": 0.2,
            "body:9": 0.05,
            "body:11": 0.01,
            "body:13": 0,
            "body:6": 0,
            "body:0": 0.28,
            "body:4": 0.3
          },
          "confidence": 0.25
        }
      },
      "usage": {
        "input_tokens": 2442,
        "output_tokens": 506
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 423.3049170000004,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "request_route_low_confidence"
    ],
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
        "status": "not_requested",
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
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 652,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-133",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:33.457Z",
    "offsetMs": 0.5654579999973066
  },
  {
    "seq": 653,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-133",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:33.559Z",
    "offsetMs": 102.45037500000035,
    "elapsedMs": 101.50391600000148,
    "outcome": "success"
  },
  {
    "seq": 654,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-133",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:33.562Z",
    "offsetMs": 106.03600000000006
  },
  {
    "seq": 655,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-133",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:33.737Z",
    "offsetMs": 281.01845799999865,
    "elapsedMs": 174.3111659999995,
    "outcome": "success"
  },
  {
    "seq": 656,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-133",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:33.737Z",
    "offsetMs": 281.2408329999962,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2558,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-133",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:19.302Z",
    "offsetMs": 2.010750000000371
  },
  {
    "seq": 2559,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-133",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:19.442Z",
    "offsetMs": 141.66662500000075,
    "elapsedMs": 139.2455829999999,
    "outcome": "success"
  },
  {
    "seq": 2560,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-133",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:19.442Z",
    "offsetMs": 141.9862920000005,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7a881c1107c3b4e257fef7fc9046df0217c8b6717e806eecb91c6465c0774d87";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":653},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2559},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2560}} as const;
export const projectionSha256 = "891e1b90317dff3d7675492914bfbc33397554d1d65c859d7849d84f072a1a75";
