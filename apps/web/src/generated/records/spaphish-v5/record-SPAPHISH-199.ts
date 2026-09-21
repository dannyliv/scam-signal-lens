import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-199",
  "inputSha256": "0ccb3a3cd34b176b40b8bceaf24b00c8f0230303ef6a33d3bcb4393c29efa976",
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
      "end": 35,
      "text": "INFORMACIÓN CICLO ESCOLAR 2022-2023"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 33,
      "text": "ESTIMADA FAMILIA Torres Aguilar:\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 33,
      "end": 34,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 34,
      "end": 149,
      "text": "Buenos días, por este medio le envío la información general de Colegio Monteverde para el ciclo escolar 2022–2023.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 149,
      "end": 150,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 150,
      "end": 241,
      "text": "Agradecemos su interés y confianza para que su hijo(a) forme parte de nuestra institución.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 241,
      "end": 242,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 242,
      "end": 293,
      "text": "Esperamos que esta información sea de su utilidad.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 293,
      "end": 294,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 294,
      "end": 446,
      "text": "Nos remitimos a sus órdenes para agendar una cita presencial y brindarle información académica, costos adicionales, así como del proceso de Admisiones.\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 446,
      "end": 447,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 447,
      "end": 502,
      "text": "Le invitamos cordialmente a visitar nuestra página web\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 502,
      "end": 535,
      "text": "https://colegiomonteverde.edu.mx\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 535,
      "end": 536,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 536,
      "end": 591,
      "text": "donde encontrará la galería de nuestras instalaciones.\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 591,
      "end": 592,
      "text": "\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 592,
      "end": 652,
      "text": "Sin más por el momento, quedo en espera de sus indicaciones."
    }
  ],
  "passA": {
    "requestSha256": "ff3812434087d2ef2be7389fa8268d67f240ff6882fbff5ccc617f42be21bf3a",
    "capturedAt": "2026-09-20T23:44:57.534Z",
    "elapsedMs": 157.6396250000107,
    "successfulAttemptElapsedMs": 155.75224999999045,
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
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.86
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
          "noul": 0.6
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.83,
            "educational_or_quoted": 0,
            "informational": 0.16,
            "mixed_or_unclear": 0.01
          },
          "confidence": 0.78
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.12,
            "no_sensitive_action": 0.88,
            "mixed_or_unknown": 0,
            "independently_established": 0
          },
          "confidence": 0.84
        }
      },
      "usage": {
        "input_tokens": 3609,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "529e54b143a49e453cbb865dbc8a5ebe8fc8b973309d172e334fa24fea9eae23",
    "capturedAt": "2026-09-20T23:44:57.665Z",
    "elapsedMs": 129.1060829999915,
    "successfulAttemptElapsedMs": 127.47849999999744,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:12": 0,
            "body:9": 0.01,
            "body:4": 0.23,
            "subject:0": 0.01,
            "body:7": 0.01,
            "body:2": 0.36,
            "body:15": 0,
            "body:3": 0,
            "body:1": 0,
            "body:5": 0.01,
            "NONE": 0.04,
            "body:13": 0,
            "body:6": 0,
            "body:14": 0,
            "body:10": 0.02,
            "body:0": 0.06,
            "body:8": 0.24,
            "body:11": 0.01
          },
          "confidence": 0.33
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:8",
          "probabilities": {
            "body:12": 0,
            "body:9": 0,
            "body:4": 0,
            "subject:0": 0,
            "body:7": 0,
            "body:2": 0,
            "body:15": 0,
            "body:3": 0,
            "body:1": 0,
            "body:5": 0,
            "NONE": 0.07,
            "body:13": 0,
            "body:8": 0.85,
            "body:14": 0,
            "body:10": 0.05,
            "body:0": 0,
            "body:6": 0,
            "body:11": 0.03
          },
          "confidence": 0.83
        }
      },
      "usage": {
        "input_tokens": 1775,
        "output_tokens": 382
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 289.3519579999993,
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
        "status": "selected",
        "segmentId": "body:8"
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
    "seq": 972,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-199",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:57.377Z",
    "offsetMs": 1.283832999994047
  },
  {
    "seq": 973,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-199",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:57.533Z",
    "offsetMs": 157.64066599999205,
    "elapsedMs": 155.75224999999045,
    "outcome": "success"
  },
  {
    "seq": 974,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-199",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:57.537Z",
    "offsetMs": 160.92791600000055
  },
  {
    "seq": 975,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-199",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:57.665Z",
    "offsetMs": 289.0309159999888,
    "elapsedMs": 127.47849999999744,
    "outcome": "success"
  },
  {
    "seq": 976,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-199",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:57.665Z",
    "offsetMs": 289.4203750000015,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ce06d51fdc4cf8d3a5bd4a7cc9cf1d651074c2adb7371de3d6853f6c09624108";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":973},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":975},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":976}} as const;
export const projectionSha256 = "c7316a0ae3633d2ec695a241258551de86fd3a88ecb34613464a5b1d3242dadc";
