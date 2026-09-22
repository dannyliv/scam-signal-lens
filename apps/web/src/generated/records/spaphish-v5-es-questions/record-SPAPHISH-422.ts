import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-422",
  "inputSha256": "5d088fbea68e6e5ea6323bc3f2dbba94fbf7c0d384a7cda7394711a386ab1581",
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
    "requestSha256": "5a868666702d8e9170ea05fba4eadb0fc2c0c281a01aff430575a0a621e5e33b",
    "capturedAt": "2026-09-22T03:56:35.955Z",
    "elapsedMs": 634.8650469999993,
    "successfulAttemptElapsedMs": 633.1909209999721,
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
          "noul": 0.16
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.12
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.73
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.86
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.01
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.12
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
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0.02
          },
          "confidence": 0.97
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.03,
            "independently_established": 0.03,
            "mixed_or_unknown": 0.02,
            "no_sensitive_action": 0.92
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 5026,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "f01731e67d5d1416e11cb501ec4969a856acdb339a75c8286054d1fd13c8ce73",
    "capturedAt": "2026-09-22T03:56:36.482Z",
    "elapsedMs": 524.3854140000185,
    "successfulAttemptElapsedMs": 522.8011979999719,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:5": 0,
            "NONE": 0.02,
            "body:0": 0,
            "body:7": 0,
            "body:8": 0,
            "body:1": 0,
            "body:6": 0,
            "body:4": 0.8,
            "body:2": 0.18,
            "subject:0": 0,
            "body:3": 0
          },
          "confidence": 0.77
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:4": 0.15,
            "NONE": 0.09,
            "body:0": 0.37,
            "body:7": 0,
            "body:8": 0,
            "body:6": 0,
            "body:1": 0,
            "body:5": 0,
            "body:2": 0.38,
            "body:3": 0,
            "subject:0": 0.01
          },
          "confidence": 0.31
        }
      },
      "usage": {
        "input_tokens": 1673,
        "output_tokens": 241
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1162.1083520000102,
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
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 2069,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-422",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:35.321Z",
    "offsetMs": 1.3611389999859966
  },
  {
    "seq": 2070,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-422",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:35.955Z",
    "offsetMs": 634.86575300002,
    "elapsedMs": 633.1909209999721,
    "outcome": "success"
  },
  {
    "seq": 2071,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-422",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:35.959Z",
    "offsetMs": 638.7146780000185
  },
  {
    "seq": 2072,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-422",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:36.482Z",
    "offsetMs": 1161.851703000022,
    "elapsedMs": 522.8011979999719,
    "outcome": "success"
  },
  {
    "seq": 2073,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-422",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:36.482Z",
    "offsetMs": 1162.149395000015,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "2fcb4aa85f111c12c601e2203fe051156af474a34fdc791f6962eb0a72e11eb7";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2070},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2072},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2073}} as const;
export const projectionSha256 = "c019d8c27f7e57821335db1a518f3dd0f87ee12a4ecf956b08cd26b837d23dc2";
