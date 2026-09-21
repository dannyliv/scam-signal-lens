import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-377",
  "inputSha256": "350564a7129743c62b8aad237bd260ad6faecdc63a035e9d730e736eb723dc63",
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
      "end": 21,
      "text": "Tiene nuevos mensajes"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 36,
      "text": "Hola, ricardo@empresa.ficticia.com:\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 36,
      "end": 37,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 37,
      "end": 171,
      "text": "Usted tiene nuevas notificaciones importantes de servicio relacionadas con su correo electrónico que requieren su atención inmediata. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 171,
      "end": 240,
      "text": "Se requiere que siga los pasos necesarios usando el siguiente botón.\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 240,
      "end": 241,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 241,
      "end": 259,
      "text": "Leer este mensaje\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 259,
      "end": 260,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 260,
      "end": 356,
      "text": "Estamos trabajando constantemente para prestarle un excelente servicio en todas nuestras redes. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 356,
      "end": 432,
      "text": "Si no sigue los pasos, podría estar en riesgo de perder todos sus mensajes.\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 432,
      "end": 433,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 433,
      "end": 477,
      "text": "Atentamente, Equipo de servicios de correo ="
    }
  ],
  "passA": {
    "requestSha256": "84f7ed55d3f8e41635fbddf4f5cc7c8059a8a3be7f430975e7a10d7f12b27964",
    "capturedAt": "2026-09-20T23:45:58.850Z",
    "elapsedMs": 151.37895900000876,
    "successfulAttemptElapsedMs": 149.99837500001013,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.18
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.13
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.95
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.9
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.49
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
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
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.22,
            "sender_supplied": 0.76,
            "mixed_or_unknown": 0.02
          },
          "confidence": 0.68
        }
      },
      "usage": {
        "input_tokens": 3521,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "5d6f92e45c6d3b377af410ebf2e828d540becb2dcf3b6ef38935d6912ea4804a",
    "capturedAt": "2026-09-20T23:45:59.014Z",
    "elapsedMs": 162.5194579999952,
    "successfulAttemptElapsedMs": 160.36216600000625,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:8",
          "probabilities": {
            "body:8": 0.93,
            "subject:0": 0,
            "body:5": 0,
            "body:9": 0,
            "body:6": 0,
            "body:4": 0,
            "body:10": 0,
            "body:0": 0,
            "NONE": 0,
            "body:2": 0.07,
            "body:3": 0,
            "body:7": 0,
            "body:1": 0
          },
          "confidence": 0.92
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:10",
          "probabilities": {
            "body:8": 0,
            "subject:0": 0,
            "body:5": 0,
            "body:9": 0,
            "body:6": 0,
            "body:4": 0,
            "body:10": 0.74,
            "body:0": 0,
            "NONE": 0.01,
            "body:2": 0.17,
            "body:3": 0.01,
            "body:7": 0.07,
            "body:1": 0
          },
          "confidence": 0.71
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:8": 0.08,
            "subject:0": 0,
            "body:5": 0.02,
            "body:9": 0,
            "body:6": 0,
            "body:4": 0,
            "body:10": 0,
            "body:0": 0,
            "NONE": 0.75,
            "body:2": 0,
            "body:3": 0.14,
            "body:7": 0,
            "body:1": 0.01
          },
          "confidence": 0.73
        }
      },
      "usage": {
        "input_tokens": 1858,
        "output_tokens": 418
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 316.2485000000015,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
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
        "status": "selected",
        "segmentId": "body:8"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:10"
      },
      "verification_bypass": {
        "status": "none_selected",
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
    "seq": 1848,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-377",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:58.699Z",
    "offsetMs": 0.9338750000024447
  },
  {
    "seq": 1849,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-377",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:58.849Z",
    "offsetMs": 151.37750000000233,
    "elapsedMs": 149.99837500001013,
    "outcome": "success"
  },
  {
    "seq": 1850,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-377",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:58.853Z",
    "offsetMs": 154.81654200000048
  },
  {
    "seq": 1851,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-377",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:59.014Z",
    "offsetMs": 315.8907920000056,
    "elapsedMs": 160.36216600000625,
    "outcome": "success"
  },
  {
    "seq": 1852,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-377",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:59.014Z",
    "offsetMs": 316.3154590000049,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "2a7d43bb76d517b0d3dde81fc517e2bfa1ca10fbdeacc26deaa918d60c30e979";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1849},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1851},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1852}} as const;
export const projectionSha256 = "27780b89be480170fe251c6ad639443c406408df45e28cb2febfa8121ef35b75";
