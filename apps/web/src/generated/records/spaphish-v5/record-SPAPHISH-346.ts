import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-346",
  "inputSha256": "249ef2553568e85e5574e4e69d0de4efc861414850c362b5e69b67662e740ed8",
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
      "end": 22,
      "text": "Business Opportunity!!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 18,
      "text": "-- ¡Saludos a ti! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 18,
      "end": 167,
      "text": "Estoy participando en una discusión comercial imperativa que me gustaría compartir con ustedes porque estoy seguro de que les resultará beneficiosa. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 167,
      "end": 272,
      "text": "Por eso me comuniqué contigo; Espero realizar una inversión asociada con usted debido a su conocimiento. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 272,
      "end": 384,
      "text": "Por lo tanto, si está interesado en participar en este proyecto, comuníquese conmigo para obtener más detalles. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 384,
      "end": 561,
      "text": "Si encuentra este mensaje en su carpeta de correo no deseado o basura, tenga en cuenta que es el resultado de un problema del servidor, así que muévalo a su bandeja de entrada. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 561,
      "end": 645,
      "text": "En vista de la urgencia de este asunto, agradecería una respuesta lo antes posible. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 645,
      "end": 667,
      "text": "Tuyo sinceramente Sr. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 667,
      "end": 681,
      "text": "Javier Cortés,"
    }
  ],
  "passA": {
    "requestSha256": "abb58ce64090daa149801f8fcc37f2ca01228097512a7103da8f20e348e3674a",
    "capturedAt": "2026-09-20T23:45:48.944Z",
    "elapsedMs": 201.49562499999593,
    "successfulAttemptElapsedMs": 200.10866600000008,
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
          "noul": 0.06
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.21
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.73
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.15
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.29
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.16
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.12
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.08
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "informational": 0,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.22,
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "no_sensitive_action": 0.77
          },
          "confidence": 0.69
        }
      },
      "usage": {
        "input_tokens": 3585,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "db3be176a266a9c45ba2d22f79f35fd6e13637a8642c65ecd386c9b519da980c",
    "capturedAt": "2026-09-20T23:45:49.104Z",
    "elapsedMs": 158.4987919999985,
    "successfulAttemptElapsedMs": 156.3624579999887,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:6": 0,
            "body:7": 0,
            "body:0": 0,
            "body:2": 0.54,
            "NONE": 0.39,
            "body:4": 0,
            "body:5": 0,
            "body:3": 0.07,
            "subject:0": 0,
            "body:1": 0
          },
          "confidence": 0.47
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:6": 0,
            "body:7": 0,
            "body:0": 0,
            "body:2": 0,
            "NONE": 0,
            "body:4": 0,
            "body:5": 1,
            "body:3": 0,
            "subject:0": 0,
            "body:1": 0
          },
          "confidence": 1
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0,
            "body:7": 0,
            "body:0": 0,
            "body:2": 0,
            "NONE": 0.61,
            "body:4": 0.3,
            "body:5": 0.05,
            "body:3": 0.04,
            "subject:0": 0,
            "body:1": 0
          },
          "confidence": 0.56
        }
      },
      "usage": {
        "input_tokens": 2010,
        "output_tokens": 331
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 362.6912080000038,
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
        "status": "low_confidence",
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
        "status": "not_requested",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "low_confidence",
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
    "seq": 1694,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-346",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:48.743Z",
    "offsetMs": 0.9679159999941476
  },
  {
    "seq": 1695,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-346",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:48.943Z",
    "offsetMs": 201.49525000000722,
    "elapsedMs": 200.10866600000008,
    "outcome": "success"
  },
  {
    "seq": 1696,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-346",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:48.947Z",
    "offsetMs": 205.3346659999952
  },
  {
    "seq": 1697,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-346",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:49.104Z",
    "offsetMs": 362.3542080000043,
    "elapsedMs": 156.3624579999887,
    "outcome": "success"
  },
  {
    "seq": 1698,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-346",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:49.105Z",
    "offsetMs": 362.7598330000037,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "c8b28425a5273f5c9c5c1f752d2fa749b3d42825a7ae8f160b887bb6611101dc";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1695},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1697},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1698}} as const;
export const projectionSha256 = "5458203b6c27b3aae85cec86e36c5f8d7ba4dabacf60310ebf6e585229e2c1bb";
