import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-093",
  "inputSha256": "e021991c11c22e0d754fe8220b7eac8f6ee3fd572780f640f22a566c7d5b8003",
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
    "requestSha256": "7ed2e45c7984ab820f4a190914e998042864135403300d278db87abf4acd781a",
    "capturedAt": "2026-09-22T03:50:03.020Z",
    "elapsedMs": 628.4962400000077,
    "successfulAttemptElapsedMs": 627.4937749999954,
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
          "noul": 0.46
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
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
          "noul": 0.22
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
            "active_request": 0.91,
            "mixed_or_unclear": 0,
            "informational": 0.09
          },
          "confidence": 0.87
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "sender_supplied": 0.01,
            "no_sensitive_action": 0.98,
            "independently_established": 0.01
          },
          "confidence": 0.97
        }
      },
      "usage": {
        "input_tokens": 5050,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "6e49ef0ab488ed4e3e510b65137ae20e9c8abae7750ce57d9d323af55f442b76",
    "capturedAt": "2026-09-22T03:50:03.614Z",
    "elapsedMs": 592.5155000000086,
    "successfulAttemptElapsedMs": 591.6377600000123,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.22,
            "body:5": 0,
            "subject:0": 0,
            "body:4": 0,
            "body:0": 0.68,
            "body:3": 0,
            "body:2": 0,
            "NONE": 0.1
          },
          "confidence": 0.62
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:1": 0,
            "body:5": 0.99,
            "subject:0": 0,
            "body:4": 0,
            "body:0": 0,
            "body:3": 0,
            "body:2": 0,
            "NONE": 0.01
          },
          "confidence": 0.98
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.08,
            "body:5": 0,
            "subject:0": 0,
            "body:4": 0,
            "body:0": 0.02,
            "body:2": 0.38,
            "body:3": 0.09999999999999999,
            "NONE": 0.42
          },
          "confidence": 0.33
        }
      },
      "usage": {
        "input_tokens": 2286,
        "output_tokens": 280
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1222.769834000006,
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
    "seq": 449,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-093",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:02.392Z",
    "offsetMs": 0.5229439999966417
  },
  {
    "seq": 450,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-093",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:03.020Z",
    "offsetMs": 628.4957270000014,
    "elapsedMs": 627.4937749999954,
    "outcome": "success"
  },
  {
    "seq": 451,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-093",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:03.022Z",
    "offsetMs": 630.5570129999978
  },
  {
    "seq": 452,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-093",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:03.614Z",
    "offsetMs": 1222.5396559999936,
    "elapsedMs": 591.6377600000123,
    "outcome": "success"
  },
  {
    "seq": 453,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-093",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:03.614Z",
    "offsetMs": 1222.8123079999932,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d9cc310a4dfc8e4065f1af1f0f7c484411b1994a489daaf27d765e89c16377e0";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":450},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":452},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":453}} as const;
export const projectionSha256 = "87da92396d2770e0b14aed76a1800cfb6052e10961d4af73b91ff6de06f8fa9d";
