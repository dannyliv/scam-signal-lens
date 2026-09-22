import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-133",
  "inputSha256": "88094e78926a91a7a304119ff6e05acf29b649aa6e025e1a872db957b71382a7",
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
    "requestSha256": "3040db53fc995f9dc86df862f55a9489129642d400fa5e4a8bbef1b2add5b820",
    "capturedAt": "2026-09-22T03:50:53.249Z",
    "elapsedMs": 583.0360999999975,
    "successfulAttemptElapsedMs": 581.9482070000086,
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
          "noul": 0.36
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
          "noul": 0.33
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.93
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.18
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.82,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0.18
          },
          "confidence": 0.76
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.13,
            "mixed_or_unknown": 0.03,
            "independently_established": 0.21,
            "no_sensitive_action": 0.63
          },
          "confidence": 0.49
        }
      },
      "usage": {
        "input_tokens": 5083,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "a052bb18d4ce5b0b29e9c082ea6aa3035e6c42435c2790dd19f4bab7e4f1c9ca",
    "capturedAt": "2026-09-22T03:50:53.766Z",
    "elapsedMs": 516.1844960000017,
    "successfulAttemptElapsedMs": 515.3147239999962,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "NONE": 0.4,
            "body:1": 0,
            "body:3": 0,
            "body:5": 0.11,
            "body:13": 0,
            "body:7": 0.47000000000000003,
            "subject:0": 0,
            "body:11": 0,
            "body:0": 0,
            "body:12": 0,
            "body:10": 0,
            "body:8": 0,
            "body:9": 0,
            "body:4": 0.02,
            "body:2": 0,
            "body:6": 0
          },
          "confidence": 0.42
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "NONE": 0.29,
            "body:1": 0,
            "body:3": 0,
            "body:5": 0.03,
            "body:13": 0,
            "body:7": 0.06,
            "subject:0": 0,
            "body:11": 0,
            "body:0": 0,
            "body:12": 0,
            "body:10": 0,
            "body:8": 0,
            "body:9": 0,
            "body:4": 0.62,
            "body:2": 0,
            "body:6": 0
          },
          "confidence": 0.58
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "NONE": 0.04,
            "body:1": 0,
            "body:3": 0,
            "body:5": 0.04,
            "body:13": 0,
            "body:11": 0.01,
            "subject:0": 0,
            "body:7": 0.07,
            "body:0": 0.24,
            "body:12": 0,
            "body:10": 0,
            "body:4": 0.51,
            "body:9": 0.08,
            "body:8": 0.01,
            "body:2": 0,
            "body:6": 0
          },
          "confidence": 0.47
        }
      },
      "usage": {
        "input_tokens": 2760,
        "output_tokens": 506
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1100.7685019999917,
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
    "seq": 646,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-133",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:52.666Z",
    "offsetMs": 0.7708569999958854
  },
  {
    "seq": 647,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-133",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:53.248Z",
    "offsetMs": 583.0376640000031,
    "elapsedMs": 581.9482070000086,
    "outcome": "success"
  },
  {
    "seq": 648,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-133",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:53.250Z",
    "offsetMs": 584.7887559999945
  },
  {
    "seq": 649,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-133",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:53.766Z",
    "offsetMs": 1100.463533000002,
    "elapsedMs": 515.3147239999962,
    "outcome": "success"
  },
  {
    "seq": 650,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-133",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:53.766Z",
    "offsetMs": 1100.8161439999822,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0ac5487d71c03f52efb15223e860942b0a7b0a4da4f2fe9713e8eca9f37a0f70";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":647},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":649},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":650}} as const;
export const projectionSha256 = "0a96872602bef90751942c0c0ff795096629841e849beb47919dcd502e2022e4";
