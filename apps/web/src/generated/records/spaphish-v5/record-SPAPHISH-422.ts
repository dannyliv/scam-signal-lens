import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-422",
  "inputSha256": "5d088fbea68e6e5ea6323bc3f2dbba94fbf7c0d384a7cda7394711a386ab1581",
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
      "end": 13,
      "text": "Reinscripción"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 29,
      "text": "Estimados padres de familia:\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 29,
      "end": 30,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 30,
      "end": 208,
      "text": "Los saludo con el gusto de siempre y a la vez me permito recordarles que el día de mañana 1 de febrero iniciamos clases correspondientes al segundo semestre del ciclo 2024-2025.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 208,
      "end": 209,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 209,
      "end": 482,
      "text": "Para poder ingresar a sus hijos a lista de asistencia, es indispensable haber realizado la inscripción administrativa que consiste en entregar la solicitud de inscripción y la carta de lineamientos anexas al mismo, así como una copia de su recibo de pago de reinscripción.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 482,
      "end": 483,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 483,
      "end": 550,
      "text": "Si ya entregó los documentos, por favor haga caso omiso del mismo.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 550,
      "end": 551,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 551,
      "end": 602,
      "text": "Gracias por su atención, que pasen excelente tarde."
    }
  ],
  "passA": {
    "requestSha256": "98476cac177d47c289a4bb7ed0b62167143ed1982abc1866bf9c7499d5690aa3",
    "capturedAt": "2026-09-20T23:46:13.695Z",
    "elapsedMs": 141.65012499998556,
    "successfulAttemptElapsedMs": 139.38466700000572,
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
          "noul": 0.09
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.18
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.82
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.88
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.15
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.98,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 0.02
          },
          "confidence": 0.97
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.09,
            "independently_established": 0.11,
            "no_sensitive_action": 0.75,
            "sender_supplied": 0.05
          },
          "confidence": 0.66
        }
      },
      "usage": {
        "input_tokens": 3576,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "e4d8484f580edb5cf0e978051fba9eb01f9c7f11975b5f2c48306c6d04538500",
    "capturedAt": "2026-09-20T23:46:13.888Z",
    "elapsedMs": 190.93825000000652,
    "successfulAttemptElapsedMs": 188.32683299999917,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:7": 0,
            "body:0": 0,
            "body:5": 0,
            "body:2": 0.11,
            "body:3": 0,
            "body:4": 0.88,
            "subject:0": 0,
            "body:6": 0,
            "body:1": 0,
            "NONE": 0.01,
            "body:8": 0
          },
          "confidence": 0.86
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:7": 0,
            "body:0": 0.74,
            "body:5": 0,
            "body:2": 0.09,
            "body:3": 0,
            "body:4": 0.16,
            "subject:0": 0,
            "body:6": 0,
            "body:1": 0,
            "NONE": 0.01,
            "body:8": 0
          },
          "confidence": 0.71
        }
      },
      "usage": {
        "input_tokens": 1471,
        "output_tokens": 241
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 335.24970800001756,
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
        "status": "selected",
        "segmentId": "body:4"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:0"
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
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 2071,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-422",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:13.555Z",
    "offsetMs": 1.7306250000256114
  },
  {
    "seq": 2072,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-422",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:13.695Z",
    "offsetMs": 141.65070800000103,
    "elapsedMs": 139.38466700000572,
    "outcome": "success"
  },
  {
    "seq": 2073,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-422",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:13.699Z",
    "offsetMs": 145.87350000001607
  },
  {
    "seq": 2074,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-422",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:13.888Z",
    "offsetMs": 334.900083000015,
    "elapsedMs": 188.32683299999917,
    "outcome": "success"
  },
  {
    "seq": 2075,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-422",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:13.888Z",
    "offsetMs": 335.3400000000256,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "52a4cce552b0447f053feb35c4e911b74635b3c9c9a69fac4d10187e4688b4f4";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2072},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2074},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2075}} as const;
export const projectionSha256 = "d5e66688c6702a75bef847820e271228d636d06457d4a1dc482501d3bf58dd03";
