import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-250",
  "inputSha256": "eae5e34d5fbb3c2c48ae014f6cf415e8f52512596fef9f5430a2b48a31e31584",
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
      "end": 30,
      "text": "Revise sus credenciales de red"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 267,
      "text": "Saludos a todos: Debido a las numerosas filtraciones recientes a instituciones financieras y de gestión de identidades de alto perfil, es importante que los empleados de Instituto Universitario Horizonte Campus Villa Central verifiquen que no se han visto afectados. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 267,
      "end": 457,
      "text": "Las credenciales de la red de nuestra organización son un objetivo principal para los hackers, y nuestros clientes confían en nosotros para garantizar que mantengamos segura su información. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 457,
      "end": 578,
      "text": "Use el siguiente enlace para verificar que sus credenciales de inicio de sesión a la red no hayan quedado comprometidas. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 578,
      "end": 593,
      "text": "¿Fui hackeado? "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 593,
      "end": 616,
      "text": "Gracias, Gerencia de TI"
    }
  ],
  "passA": {
    "requestSha256": "f1190322e580ee7c1523c1a91603a2883e929dd07e14e1285dd0937f0a5eb9fe",
    "capturedAt": "2026-09-20T23:45:14.471Z",
    "elapsedMs": 186.6367920000048,
    "successfulAttemptElapsedMs": 184.91395800000464,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.31
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.23
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.28
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.96
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.32
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
            "active_request": 1,
            "educational_or_quoted": 0,
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
            "sender_supplied": 0.86,
            "no_sensitive_action": 0.13,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.82
        }
      },
      "usage": {
        "input_tokens": 3561,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "c45ad92c74029f0aa481b9682ae0af5a521a38c1c6cca9df2a568caf0b389cd5",
    "capturedAt": "2026-09-20T23:45:14.673Z",
    "elapsedMs": 199.8093749999971,
    "successfulAttemptElapsedMs": 197.92245800000092,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "NONE": 0.48,
            "body:2": 0.5,
            "body:1": 0,
            "body:0": 0,
            "subject:0": 0.01,
            "body:4": 0,
            "body:3": 0.01
          },
          "confidence": 0.41
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.85,
            "body:2": 0.14,
            "body:3": 0.01,
            "subject:0": 0,
            "body:0": 0,
            "body:4": 0,
            "body:1": 0
          },
          "confidence": 0.82
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.4,
            "body:2": 0.1,
            "body:1": 0.21,
            "body:0": 0.21,
            "subject:0": 0.03,
            "body:4": 0,
            "body:3": 0.05
          },
          "confidence": 0.3
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:2": 0.01,
            "NONE": 0,
            "body:3": 0,
            "subject:0": 0,
            "body:0": 0.12,
            "body:4": 0.82,
            "body:1": 0.05
          },
          "confidence": 0.79
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.77,
            "body:2": 0.23,
            "body:3": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:4": 0,
            "body:1": 0
          },
          "confidence": 0.72
        }
      },
      "usage": {
        "input_tokens": 2724,
        "output_tokens": 414
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 388.4676250000048,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "low_confidence",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "none_selected",
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
        "segmentId": "body:4"
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
    "seq": 1223,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-250",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:14.286Z",
    "offsetMs": 1.1494999999995343
  },
  {
    "seq": 1224,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-250",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:14.471Z",
    "offsetMs": 186.63862500000687,
    "elapsedMs": 184.91395800000464,
    "outcome": "success"
  },
  {
    "seq": 1225,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-250",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:14.474Z",
    "offsetMs": 189.63945899999817
  },
  {
    "seq": 1226,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-250",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:14.673Z",
    "offsetMs": 388.2216250000056,
    "elapsedMs": 197.92245800000092,
    "outcome": "success"
  },
  {
    "seq": 1227,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-250",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:14.673Z",
    "offsetMs": 388.5161250000092,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d7c4b67f29057bf1b47f0f45b91df36b30572b3a616e322621fd6bb75ae6ac53";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1224},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1226},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1227}} as const;
export const projectionSha256 = "aea9717a08781fabc98abd24e048ad33031bb9c906daf9331a6d1c0a6af3bedb";
