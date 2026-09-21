import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-091",
  "inputSha256": "79e28d61d7b9f527cb77983c7a09f0471394c865846bec3096c7fce98448e4d5",
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
      "end": 56,
      "text": "Missxtranger, Has ganado una Caja Misteriosa de Amazon🎉"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 29,
      "text": "SHEIN ¡Eres nuestro ganador! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 29,
      "end": 189,
      "text": "Recompensa: Caja misteriosa de Shein Número de cliente: #998877665544 » Haga clic aquí para solicitar « Darse de baja El anunciante no gestiona su suscripción. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 189,
      "end": 327,
      "text": "Si prefieres no recibir más comunicaciones, darse de baja aqui O escribe a: 900 Calle de la Moda Ste 100#2000, Ciudad Tendencia, CA, 90210"
    }
  ],
  "passA": {
    "requestSha256": "be3fc34078b26ebcb066422db54eb1a25d6ad75efafe961edb359638fe6ea1a0",
    "capturedAt": "2026-09-20T23:44:20.742Z",
    "elapsedMs": 134.22762499999953,
    "successfulAttemptElapsedMs": 132.55616600000212,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.06
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.28
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.23
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.06
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.18
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.5
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.3
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.29
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.07
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0.02,
            "educational_or_quoted": 0,
            "informational": 0,
            "active_request": 0.98
          },
          "confidence": 0.98
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.85,
            "no_sensitive_action": 0.13,
            "mixed_or_unknown": 0.02
          },
          "confidence": 0.8
        }
      },
      "usage": {
        "input_tokens": 3550,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "c9925585559a76aa6d229266cc6c3a804dbc2deb25a501909e9b0c4db8458e4e",
    "capturedAt": "2026-09-20T23:44:20.849Z",
    "elapsedMs": 105.375208999998,
    "successfulAttemptElapsedMs": 103.79858400000012,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "NONE": 0.81,
            "subject:0": 0,
            "body:2": 0,
            "body:1": 0.19
          },
          "confidence": 0.75
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "NONE": 0.81,
            "body:2": 0.01,
            "body:1": 0.18,
            "subject:0": 0
          },
          "confidence": 0.76
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.42,
            "NONE": 0.47,
            "subject:0": 0.01,
            "body:2": 0.03,
            "body:1": 0.07
          },
          "confidence": 0.34
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "NONE": 0.9,
            "subject:0": 0,
            "body:2": 0.02,
            "body:1": 0.08
          },
          "confidence": 0.87
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "NONE": 0.82,
            "subject:0": 0,
            "body:2": 0,
            "body:1": 0.18
          },
          "confidence": 0.77
        }
      },
      "usage": {
        "input_tokens": 2511,
        "output_tokens": 321
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 242.1793749999997,
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
        "status": "none_selected",
        "segmentId": null
      },
      "payment_request": {
        "status": "none_selected",
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
        "status": "none_selected",
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
    "seq": 444,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-091",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:20.608Z",
    "offsetMs": 1.069707999999082
  },
  {
    "seq": 445,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-091",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:20.741Z",
    "offsetMs": 134.22937499999898,
    "elapsedMs": 132.55616600000212,
    "outcome": "success"
  },
  {
    "seq": 446,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-091",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:20.744Z",
    "offsetMs": 137.18570799999725
  },
  {
    "seq": 447,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-091",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:20.849Z",
    "offsetMs": 241.67908299999908,
    "elapsedMs": 103.79858400000012,
    "outcome": "success"
  },
  {
    "seq": 448,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-091",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:20.850Z",
    "offsetMs": 242.2826669999995,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "4c4378ca99ba0b51de7a60214309fe96456630be7120a354d6ed536d8acd8fc6";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":445},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":447},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":448}} as const;
export const projectionSha256 = "230f223eb20c2637f0129640ab9bc6923219a8f368ae4f2cd8b2239ac6ce9d39";
