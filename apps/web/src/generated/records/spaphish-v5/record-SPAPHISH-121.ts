import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-121",
  "inputSha256": "bfbaf2c2ff8e8b98fa529bafddd59a5913fea6c010ee69cc7acfbdd16643f901",
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
      "end": 38,
      "text": "QUIERO TRANSFERIRTE FONDOS: 16/07/2024"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 30,
      "text": "Buenos días, mi nombre es Sr. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 30,
      "end": 68,
      "text": "Marcos Ledezma, primo hermano del Sr. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 68,
      "end": 109,
      "text": "Daniel Kunda ex presidente de Sudáfrica. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 109,
      "end": 287,
      "text": "Deseo transferir la cantidad de US$54,500,000.00 dólares Cincuenta y cuatro millones quinientos mil dólares estadounidenses a su cuenta en el extranjero para fines de inversión. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 287,
      "end": 493,
      "text": "Por favor necesito su ayuda para invertir en cualquier buen negocio en su país, mi interés es en Construcción, Bienes Raíces, Agricultura, Transporte o cualquier negocio que usted pueda tener conocimiento. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 493,
      "end": 551,
      "text": "Si estás interesado, por favor ponte en contacto conmigo. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 551,
      "end": 665,
      "text": "He asignado el 30% de la suma total para usted y el 70% se utilizará para mis propósitos de inversión en su país. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 665,
      "end": 769,
      "text": "Por favor contáctame a mi correo electrónico privado: contacto.ledezma.inversiones@correo-sintetico.com\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 769,
      "end": 809,
      "text": ": Atentamente, INGENIERO Marcos Ledezma."
    }
  ],
  "passA": {
    "requestSha256": "98fb833ac51c29fdd7a29f3c70523070a0e50c81a5bd141f308479671d881e8b",
    "capturedAt": "2026-09-20T23:44:29.960Z",
    "elapsedMs": 172.6204579999976,
    "successfulAttemptElapsedMs": 171.12000000000262,
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
          "noul": 0.45
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.66
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.18
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.96
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.19
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.5
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.22
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
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
            "educational_or_quoted": 0,
            "active_request": 1,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.86,
            "no_sensitive_action": 0.14,
            "mixed_or_unknown": 0,
            "independently_established": 0
          },
          "confidence": 0.8
        }
      },
      "usage": {
        "input_tokens": 3664,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "330619fc19d71f9faaa044da752e79033496c7a73aa71f64c7205cbf19d8ffd1",
    "capturedAt": "2026-09-20T23:44:30.105Z",
    "elapsedMs": 142.61899999999878,
    "successfulAttemptElapsedMs": 140.89379100000224,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:8": 0,
            "body:3": 0.36,
            "body:4": 0,
            "body:0": 0,
            "body:6": 0,
            "body:1": 0,
            "body:7": 0.09,
            "body:2": 0,
            "body:5": 0.04,
            "subject:0": 0,
            "NONE": 0.51
          },
          "confidence": 0.45
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:8": 0,
            "body:3": 0.71,
            "body:4": 0.03,
            "body:0": 0,
            "body:6": 0.08,
            "body:2": 0,
            "body:7": 0.01,
            "body:1": 0,
            "body:5": 0.01,
            "subject:0": 0.07,
            "NONE": 0.09
          },
          "confidence": 0.67
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:8": 0,
            "body:3": 0,
            "body:4": 0,
            "body:0": 0.01,
            "body:6": 0,
            "body:2": 0.08,
            "body:7": 0,
            "body:1": 0.91,
            "body:5": 0,
            "subject:0": 0,
            "NONE": 0
          },
          "confidence": 0.89
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:8": 0,
            "body:3": 0.02,
            "body:4": 0.01,
            "body:7": 0.03,
            "body:6": 0.07,
            "body:2": 0,
            "body:0": 0,
            "body:1": 0,
            "body:5": 0.02,
            "subject:0": 0,
            "NONE": 0.85
          },
          "confidence": 0.83
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:8": 0,
            "body:3": 0.02,
            "body:4": 0.02,
            "body:0": 0,
            "body:6": 0.52,
            "body:1": 0,
            "body:2": 0,
            "body:7": 0,
            "body:5": 0,
            "subject:0": 0,
            "NONE": 0.44
          },
          "confidence": 0.46
        }
      },
      "usage": {
        "input_tokens": 3612,
        "output_tokens": 595
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 318.10175000000163,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "payment_request": {
        "status": "selected",
        "segmentId": "body:3"
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
        "status": "selected",
        "segmentId": "body:1"
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
        "status": "low_confidence",
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
    "seq": 593,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-121",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:29.788Z",
    "offsetMs": 0.9166669999976875
  },
  {
    "seq": 594,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-121",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:29.960Z",
    "offsetMs": 172.6212499999965,
    "elapsedMs": 171.12000000000262,
    "outcome": "success"
  },
  {
    "seq": 595,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-121",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:29.963Z",
    "offsetMs": 175.90783299999748
  },
  {
    "seq": 596,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-121",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:30.105Z",
    "offsetMs": 317.5349169999972,
    "elapsedMs": 140.89379100000224,
    "outcome": "success"
  },
  {
    "seq": 597,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-121",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:30.105Z",
    "offsetMs": 318.20700000000215,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "716fe877b9f26b6abc94cc7bcc2fd926711e8a0e393949badccabececb25e4a7";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":594},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":596},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":597}} as const;
export const projectionSha256 = "120448db14c665aad6629c8a97f79ddb595ab900fa3418b01e53c901ca016aaa";
