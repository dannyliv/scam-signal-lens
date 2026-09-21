import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-262",
  "inputSha256": "1fe59fe9d9d989237de0fa6db724d311963b6802ddb7842eb86d2e01f79ac720",
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
      "text": "Fwd: Equipo de cuentas"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 342,
      "text": "Estimado usuario tiene una notificacion importante de microsoft : laura.gomez@correo-seguro.com 05/12/25. - Su cuenta sera suspendida por actividad inusual, si desea cancelar esta suspencion por favor ingresa al siguiente enlace y valide: https://microsoft.seguridad.net/validar De no hacerlo su correo sera suspendido en las proximas horas. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 342,
      "end": 365,
      "text": "Equipo Microsoft 2025@."
    }
  ],
  "passA": {
    "requestSha256": "51d96665b135bac431d8b6af7796e6f2134260dcf3a0c2d44c2e44adcdb6346d",
    "capturedAt": "2026-09-20T23:45:19.411Z",
    "elapsedMs": 167.4088749999937,
    "successfulAttemptElapsedMs": 165.17345899999782,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.47
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.42
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.98
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.96
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.57
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
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
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.01,
            "independently_established": 0,
            "sender_supplied": 0.99
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 3531,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "23c6af7921d0fc3b14dddaa6f54c254e7962eb56a12041bd8b6dc0405ea5efe5",
    "capturedAt": "2026-09-20T23:45:19.525Z",
    "elapsedMs": 112.65133300000161,
    "successfulAttemptElapsedMs": 110.90041599998949,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.31,
            "subject:0": 0,
            "body:1": 0,
            "body:0": 0.6900000000000001
          },
          "confidence": 0.57
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.68,
            "body:1": 0,
            "subject:0": 0,
            "body:0": 0.32
          },
          "confidence": 0.56
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0,
            "body:1": 0,
            "subject:0": 0,
            "body:0": 1
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.01,
            "subject:0": 0.11,
            "body:1": 0.59,
            "body:0": 0.29
          },
          "confidence": 0.45
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.68,
            "body:1": 0,
            "subject:0": 0,
            "body:0": 0.32
          },
          "confidence": 0.57
        }
      },
      "usage": {
        "input_tokens": 2334,
        "output_tokens": 281
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 282.30008299999463,
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
        "status": "low_confidence",
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
        "segmentId": "body:0"
      },
      "authority_claim": {
        "status": "low_confidence",
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
    "seq": 1283,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-262",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:19.244Z",
    "offsetMs": 1.477416000008816
  },
  {
    "seq": 1284,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-262",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:19.410Z",
    "offsetMs": 167.4117910000059,
    "elapsedMs": 165.17345899999782,
    "outcome": "success"
  },
  {
    "seq": 1285,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-262",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:19.413Z",
    "offsetMs": 170.4179160000058
  },
  {
    "seq": 1286,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-262",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:19.525Z",
    "offsetMs": 281.93333300000813,
    "elapsedMs": 110.90041599998949,
    "outcome": "success"
  },
  {
    "seq": 1287,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-262",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:19.525Z",
    "offsetMs": 282.38520800000697,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6d5f11211072f62b35cc06509d1f10645d35bbb08ba1443e41ad1d7216ef3840";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1284},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1286},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1287}} as const;
export const projectionSha256 = "33a9942015d1192fc0d84901186b0ba4199f95ac4b76075272212b6eeff1e319";
