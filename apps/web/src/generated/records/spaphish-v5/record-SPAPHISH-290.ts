import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-290",
  "inputSha256": "25a9b5331a0d9e9e3d6ccfacd8bdc628ec017a4257c24f5f19707987d080a52c",
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
      "end": 53,
      "text": "Convocatoria de Ingreso, Permanencia o Promoción 2022"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 540,
      "text": "A las y los miembros del Sistema Nacional de Becarios (SNB) interesados en participar en la Convocatoria de Ingreso, Permanencia o Promoción 2022, los invitamos a consultar el Reglamento del SNB<https://cnbe.gob.mx/wp-content/uploads/snb/marco_legal/Reglamento_Sistema_Nacional_de_Becarios_15_septiembre_2020.pdf> vigente en la página del CNBE así como las bases de la Convocatoria<https://cnbe.gob.mx/wp-content/uploads/convocatorias/snb/convocatorias/2022/Convocatoria_SNB_2022.pdf> que fue aprobada el día de hoy por el Consejo General.\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 540,
      "end": 541,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 541,
      "end": 779,
      "text": "El día de mañana, 10 de diciembre a las diez horas, están cordialmente invitados a seguir la transmisión de la sesión informativa sobre el Reglamento del SNB y de la Convocatoria 2022 a través del siguiente enlace https://bit.ly/4JhGfSg.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 779,
      "end": 780,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 780,
      "end": 855,
      "text": "Sin otro particular aprovecho la ocasión para enviarles un cordial saludo.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 855,
      "end": 856,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 856,
      "end": 861,
      "text": "Dra. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 861,
      "end": 868,
      "text": "Ana R. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 868,
      "end": 882,
      "text": "Ramírez López\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 882,
      "end": 883,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 883,
      "end": 923,
      "text": "Directora de Proyectos Académicos y del\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 923,
      "end": 924,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 924,
      "end": 952,
      "text": "Sistema Nacional de Becarios"
    }
  ],
  "passA": {
    "requestSha256": "a878c2f39de1d1ea26c0f8c2d45666d938c87ddd9982e1f72f89bdffabad5327",
    "capturedAt": "2026-09-20T23:45:29.087Z",
    "elapsedMs": 145.02583400000003,
    "successfulAttemptElapsedMs": 143.24729200000002,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.02
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.03
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.2
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
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.18
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.69,
            "mixed_or_unclear": 0,
            "informational": 0.31,
            "educational_or_quoted": 0
          },
          "confidence": 0.59
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.04,
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "no_sensitive_action": 0.96
          },
          "confidence": 0.94
        }
      },
      "usage": {
        "input_tokens": 3721,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "d2f15e0966decc7a5de654d9d71ad313d8ef204b17337885e3c823ac199d4d1b",
    "capturedAt": "2026-09-20T23:45:29.216Z",
    "elapsedMs": 127.78654200000165,
    "successfulAttemptElapsedMs": 126.29612499999348,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:10",
          "probabilities": {
            "body:11": 0,
            "body:10": 0.62,
            "body:3": 0,
            "body:2": 0.01,
            "subject:0": 0,
            "NONE": 0.01,
            "body:12": 0.19,
            "body:6": 0.11,
            "body:8": 0,
            "body:1": 0,
            "body:4": 0,
            "body:5": 0,
            "body:9": 0,
            "body:7": 0,
            "body:0": 0.06
          },
          "confidence": 0.59
        }
      },
      "usage": {
        "input_tokens": 1308,
        "output_tokens": 162
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 274.28250000000116,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence"
    ],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "not_requested",
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
        "status": "not_requested",
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
    "seq": 1419,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-290",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:28.943Z",
    "offsetMs": 1.2462500000110595
  },
  {
    "seq": 1420,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-290",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:29.087Z",
    "offsetMs": 145.02908300000126,
    "elapsedMs": 143.24729200000002,
    "outcome": "success"
  },
  {
    "seq": 1421,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-290",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:29.089Z",
    "offsetMs": 147.1796250000043
  },
  {
    "seq": 1422,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-290",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:29.216Z",
    "offsetMs": 274.06183299999975,
    "elapsedMs": 126.29612499999348,
    "outcome": "success"
  },
  {
    "seq": 1423,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-290",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:29.216Z",
    "offsetMs": 274.3439580000122,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "990cd2c3c84c03c387cefcb83eae91bea08d674084b0ae50d3e4028d5145d89d";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1420},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1422},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1423}} as const;
export const projectionSha256 = "f7a1776907599a888f1008bf5bddd6641e5ef4e47cf31b04b044a8dccc53ffc4";
