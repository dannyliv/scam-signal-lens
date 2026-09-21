import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-167",
  "inputSha256": "6abab33c0677ba83cd01d575fe5111955a1e57650b12a92c2d82fec42e7c91ba",
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
      "end": 48,
      "text": "Your account has been suspended (Ref - 08745117)"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 73,
      "text": "Estimado cliente, Su cuenta de PayPal ha sido restringida temporalmente. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 73,
      "end": 171,
      "text": "Hemos detectado actividad sospechosa en las tarjetas de crédito vinculadas a su cuenta de PayPal. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 171,
      "end": 268,
      "text": "Debe confirmar su identidad para verificar que usted es el propietario de la tarjeta de crédito. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 268,
      "end": 370,
      "text": "Para mantener la seguridad de la cuenta, por favor proporcione documentos que confirmen su identidad. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 370,
      "end": 542,
      "text": "Inicie sesión en PayPal Después de completar la tarea solicitada, revisaremos la cuenta y nos pondremos en contacto con usted acerca de su estado dentro de 5 días hábiles. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 542,
      "end": 582,
      "text": "Gracias por su atención a este problema."
    }
  ],
  "passA": {
    "requestSha256": "420dccf4e97f6dc88749e945bb735b8c372833d1a4bf5c2913382390f1e2777f",
    "capturedAt": "2026-09-20T23:44:44.428Z",
    "elapsedMs": 118.29404200000135,
    "successfulAttemptElapsedMs": 116.45479199999681,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.07
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.91
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.43
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.93
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.25
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.49
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "independently_established",
          "probabilities": {
            "mixed_or_unknown": 0.07,
            "independently_established": 0.61,
            "no_sensitive_action": 0.02,
            "sender_supplied": 0.3
          },
          "confidence": 0.48
        }
      },
      "usage": {
        "input_tokens": 3574,
        "output_tokens": 353
      }
    }
  },
  "passB": {
    "requestSha256": "16a0a11d3a2392f5a0303800b4da3143d2cf4086a1f8bd85ad5165f45ef238d6",
    "capturedAt": "2026-09-20T23:44:44.623Z",
    "elapsedMs": 193.48045800000546,
    "successfulAttemptElapsedMs": 191.03279199999815,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:0": 0,
            "body:1": 0,
            "body:4": 0,
            "body:3": 0.99,
            "NONE": 0,
            "body:5": 0,
            "subject:0": 0,
            "body:2": 0.01
          },
          "confidence": 0.98
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:5": 0,
            "body:1": 0.02,
            "body:4": 0.12,
            "body:3": 0.15,
            "body:0": 0.09,
            "NONE": 0.17,
            "subject:0": 0.17,
            "body:2": 0.28
          },
          "confidence": 0.17
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.05,
            "body:1": 0.13,
            "body:4": 0.07,
            "body:3": 0.18,
            "body:5": 0,
            "body:0": 0.51,
            "subject:0": 0.02,
            "body:2": 0.04
          },
          "confidence": 0.45
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "body:1": 0,
            "body:4": 0.07,
            "body:3": 0.03,
            "NONE": 0.9,
            "body:5": 0,
            "subject:0": 0,
            "body:2": 0
          },
          "confidence": 0.88
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:0": 0,
            "body:1": 0,
            "body:4": 0.86,
            "body:3": 0,
            "NONE": 0.14,
            "body:5": 0,
            "subject:0": 0,
            "body:2": 0
          },
          "confidence": 0.83
        }
      },
      "usage": {
        "input_tokens": 2862,
        "output_tokens": 465
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 314.4467089999962,
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
        "status": "selected",
        "segmentId": "body:3"
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
        "status": "selected",
        "segmentId": "body:4"
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
    "seq": 818,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-167",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:44.310Z",
    "offsetMs": 1.1677920000001905
  },
  {
    "seq": 819,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-167",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:44.427Z",
    "offsetMs": 118.29612500000076,
    "elapsedMs": 116.45479199999681,
    "outcome": "success"
  },
  {
    "seq": 820,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-167",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:44.431Z",
    "offsetMs": 122.1527089999945
  },
  {
    "seq": 821,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-167",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:44.623Z",
    "offsetMs": 314.12712499999907,
    "elapsedMs": 191.03279199999815,
    "outcome": "success"
  },
  {
    "seq": 822,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-167",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:44.623Z",
    "offsetMs": 314.51858399999765,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "3c84d4e510ab863323d55318ab80c32d51234490cb0d3638ff8b15a0671c4fe6";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":819},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":821},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":822}} as const;
export const projectionSha256 = "081ab48a50d393fae83a3c6172d3ec3d811db53f67bf3abfcccda4d0b197a1a3";
