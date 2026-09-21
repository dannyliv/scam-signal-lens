import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-093",
  "inputSha256": "e021991c11c22e0d754fe8220b7eac8f6ee3fd572780f640f22a566c7d5b8003",
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
      "end": 56,
      "text": "PRESENTACION DE POSTER - SEGUNDA FECHA: AVANCES DE TESIS"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 240,
      "text": "Estimados todos, Escribo para informarles a los que no tuvieron la oportunidad de presentar su poster el pasado viernes que la nueva fecha de presentación del poster con sus avances de tesis será este viernes 24 de mayo de 10:30-12:00 hrs. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 240,
      "end": 381,
      "text": "Por lo cual, deberán incluir en el poster los avances parciales de su propuesta de tesis, y revisar con sus asesores el trabajo a presentar. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 381,
      "end": 482,
      "text": "En caso de un imprevisto avisar a sus asesores y enviar el poster para que lo evalúen sus sinodales. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 482,
      "end": 523,
      "text": "Para cualquier duda quedo a sus órdenes.\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 523,
      "end": 524,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 524,
      "end": 620,
      "text": "Saludos Cordiales Javier Pérez Representante Docente Maestría en Ingeniería de Software Aplicado"
    }
  ],
  "passA": {
    "requestSha256": "ae4fe933b83d5f527ed741cc76f2cb53eef762dcf8f348b06253f055be313672",
    "capturedAt": "2026-09-20T23:44:21.334Z",
    "elapsedMs": 143.4796669999996,
    "successfulAttemptElapsedMs": 142.0073749999974,
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
          "noul": 0.02
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
          "noul": 0.68
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
          "noul": 0.37
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.93,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0.07
          },
          "confidence": 0.91
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.01,
            "independently_established": 0.01,
            "no_sensitive_action": 0.98,
            "mixed_or_unknown": 0
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 3600,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "3c049090d6353fdd3c3c7314cc1292a3eb25d1a1999f8981638d0bed2d4b8ce5",
    "capturedAt": "2026-09-20T23:44:21.482Z",
    "elapsedMs": 146.43425000000207,
    "successfulAttemptElapsedMs": 145.04133399999773,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.6,
            "body:1": 0.31,
            "NONE": 0.08,
            "subject:0": 0,
            "body:2": 0.01,
            "body:3": 0,
            "body:4": 0,
            "body:5": 0
          },
          "confidence": 0.54
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:0": 0,
            "body:1": 0.01,
            "NONE": 0,
            "subject:0": 0,
            "body:5": 0.99,
            "body:3": 0,
            "body:4": 0,
            "body:2": 0
          },
          "confidence": 0.98
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "body:1": 0.17,
            "NONE": 0.51,
            "subject:0": 0,
            "body:2": 0.26,
            "body:3": 0.05,
            "body:4": 0,
            "body:5": 0.01
          },
          "confidence": 0.43
        }
      },
      "usage": {
        "input_tokens": 1980,
        "output_tokens": 280
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 292.2122500000005,
  "derived": {
    "concern": "few_warning_signs",
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:5"
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
        "status": "low_confidence",
        "segmentId": null
      },
      "analyzer_instruction": {
        "status": "not_requested",
        "segmentId": null
      }
    },
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 454,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-093",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:21.191Z",
    "offsetMs": 0.929416000002675
  },
  {
    "seq": 455,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-093",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:21.334Z",
    "offsetMs": 143.48137500000303,
    "elapsedMs": 142.0073749999974,
    "outcome": "success"
  },
  {
    "seq": 456,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-093",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:21.336Z",
    "offsetMs": 146.27950000000055
  },
  {
    "seq": 457,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-093",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:21.482Z",
    "offsetMs": 291.8918330000015,
    "elapsedMs": 145.04133399999773,
    "outcome": "success"
  },
  {
    "seq": 458,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-093",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:21.482Z",
    "offsetMs": 292.27879100000064,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "495415151e1c1c80b7539928c207ccbaebb9192413e5c01cdf80fbfaa841648c";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":455},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":457},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":458}} as const;
export const projectionSha256 = "c05a058003da8dc1eae2d9fbd9cf48ed0de254878b5e2b504a11eb0ba9b86c5b";
