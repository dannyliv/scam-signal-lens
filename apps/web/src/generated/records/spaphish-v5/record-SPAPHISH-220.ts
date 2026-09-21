import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-220",
  "inputSha256": "fbc53f8c70398cc8ae4b5931c7d39eba1d2817b0179f92c33e57d007b70c3361",
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
      "end": 41,
      "text": "Aviso de selección de (Access Industries)"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 55,
      "text": "Buenos días, Mi nombre es Sir Marcelo Esteban Voronov. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 55,
      "end": 167,
      "text": "Usted se encuentra entre las personas seleccionadas para recibir una donación de mi empresa, Access Industries. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 167,
      "end": 293,
      "text": "He decidido donar $600,000.00 (seiscientos mil dólares estadounidenses) a cada persona seleccionada al azar en todo el mundo. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 293,
      "end": 386,
      "text": "Al recibir este correo electrónico, puede considerarse uno de los afortunados destinatarios. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 386,
      "end": 456,
      "text": "Su dirección de correo electrónico fue seleccionada al azar en línea. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 456,
      "end": 558,
      "text": "Por favor, responda lo antes posible para confirmar que su dirección de correo electrónico es válida. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 558,
      "end": 654,
      "text": "Puede leer más sobre mí en el siguiente enlace: https://en.m.wikipedia.org/wiki/Marcelo_Voronov\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 654,
      "end": 731,
      "text": " Saludos cordiales, Sir Marcelo Esteban Voronov Presidente, Access Industries"
    }
  ],
  "passA": {
    "requestSha256": "493bac6bcfaac5f03b58014a171f7aca42ee73484a4305db1cc4d15a34dd3729",
    "capturedAt": "2026-09-20T23:45:04.446Z",
    "elapsedMs": 158.53329200000735,
    "successfulAttemptElapsedMs": 156.78608299999905,
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
          "noul": 0.12
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.12
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.57
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.88
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.17
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.3
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.86
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.28,
            "independently_established": 0.01,
            "sender_supplied": 0.7
          },
          "confidence": 0.61
        }
      },
      "usage": {
        "input_tokens": 3609,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "79ef1a4e86352278292f719010de1c9d7a5ef53d396c9b1603859ad41a060f36",
    "capturedAt": "2026-09-20T23:45:04.584Z",
    "elapsedMs": 135.66912500000035,
    "successfulAttemptElapsedMs": 133.77595799999835,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:6": 0,
            "subject:0": 0,
            "body:7": 0,
            "NONE": 0.04,
            "body:4": 0,
            "body:1": 0,
            "body:0": 0,
            "body:2": 0,
            "body:3": 0,
            "body:5": 0.96
          },
          "confidence": 0.95
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "body:7": 0.66,
            "subject:0": 0.01,
            "body:6": 0,
            "NONE": 0.03,
            "body:4": 0,
            "body:1": 0.26,
            "body:0": 0.02,
            "body:3": 0,
            "body:2": 0,
            "body:5": 0.02
          },
          "confidence": 0.61
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0,
            "subject:0": 0,
            "body:7": 0,
            "NONE": 0.86,
            "body:4": 0,
            "body:1": 0,
            "body:0": 0,
            "body:2": 0,
            "body:3": 0,
            "body:5": 0.14
          },
          "confidence": 0.84
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:7": 0,
            "subject:0": 0,
            "body:6": 0,
            "NONE": 0.08,
            "body:4": 0,
            "body:1": 0.01,
            "body:0": 0,
            "body:2": 0.89,
            "body:3": 0.01,
            "body:5": 0.01
          },
          "confidence": 0.87
        }
      },
      "usage": {
        "input_tokens": 2655,
        "output_tokens": 445
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 297.2248330000002,
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
        "segmentId": "body:5"
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
        "status": "none_selected",
        "segmentId": null
      },
      "remote_access_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "unrealistic_reward": {
        "status": "selected",
        "segmentId": "body:2"
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
    "seq": 1075,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-220",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:04.288Z",
    "offsetMs": 1.1458330000023125
  },
  {
    "seq": 1076,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-220",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:04.445Z",
    "offsetMs": 158.53450000000885,
    "elapsedMs": 156.78608299999905,
    "outcome": "success"
  },
  {
    "seq": 1077,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-220",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:04.449Z",
    "offsetMs": 162.57066700000723
  },
  {
    "seq": 1078,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-220",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:04.584Z",
    "offsetMs": 297.039082999996,
    "elapsedMs": 133.77595799999835,
    "outcome": "success"
  },
  {
    "seq": 1079,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-220",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:04.584Z",
    "offsetMs": 297.2694999999949,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7e3f214e2c60d097028f4f0f3b964ccb41d68f074ddf000b18b2ea5c94660529";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1076},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1078},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1079}} as const;
export const projectionSha256 = "d0fa90077c15a2f08b0f69fe2af4d736f653ebea2149ffdb84b2ce71e1aa1afc";
