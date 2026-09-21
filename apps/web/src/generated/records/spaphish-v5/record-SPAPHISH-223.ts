import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-223",
  "inputSha256": "08bc888bd34fe69e6e6237c84c97acc22486b554a188237fcf5dc5cf28d3140b",
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
      "end": 20,
      "text": "amazon ¡Felicidades!"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 20,
      "end": 94,
      "text": "Has sido elegido para recibir un Para estrenar Caja Misteriosa De Amazon! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 94,
      "end": 299,
      "text": "Para reclamar, simplemente Responda algunas preguntas rápidas sobre su experiencia. con nosotros Atención:Esta oferta vence hoy, 11/20/2025 COMENZAR Darse de baja El anunciante no gestiona su suscripción. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 299,
      "end": 424,
      "text": "Si prefieres no recibir más comunicaciones, date de baja aquí Ou écrire a: 550 Technology Dr Ste 100#500, Cheyenne, WY, 82001"
    }
  ],
  "passA": {
    "requestSha256": "3414b8ae80f8127d497a97a28b73406054736d141df2fe1eafdc3ccfa391b6bf",
    "capturedAt": "2026-09-20T23:45:05.563Z",
    "elapsedMs": 155.3944579999952,
    "successfulAttemptElapsedMs": 153.75812500000757,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.04
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.21
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.09
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.95
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.64
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.27
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
          "noul": 0.08
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
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.18,
            "sender_supplied": 0.81,
            "mixed_or_unknown": 0.01,
            "independently_established": 0
          },
          "confidence": 0.75
        }
      },
      "usage": {
        "input_tokens": 3564,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "9e876e0980613b180ad008be075f6f31afc7afecf39b0b8a168c96c23efd7a80",
    "capturedAt": "2026-09-20T23:45:05.708Z",
    "elapsedMs": 143.39470799999253,
    "successfulAttemptElapsedMs": 141.81566700000258,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:1": 0,
            "body:3": 0.01,
            "body:2": 0.18,
            "NONE": 0.81
          },
          "confidence": 0.76
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:3": 0,
            "body:0": 0,
            "body:1": 0,
            "subject:0": 0,
            "body:2": 1,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:3": 0.02,
            "body:0": 0.47000000000000003,
            "body:1": 0.02,
            "subject:0": 0.01,
            "body:2": 0.07,
            "NONE": 0.41
          },
          "confidence": 0.35
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:3": 0.01,
            "body:0": 0,
            "body:1": 0,
            "subject:0": 0,
            "body:2": 0.11,
            "NONE": 0.88
          },
          "confidence": 0.86
        }
      },
      "usage": {
        "input_tokens": 2206,
        "output_tokens": 296
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 301.31070799999,
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
        "status": "not_requested",
        "segmentId": null
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:2"
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
    "seq": 1090,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-223",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:05.408Z",
    "offsetMs": 1.0999999999912689
  },
  {
    "seq": 1091,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-223",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:05.562Z",
    "offsetMs": 155.3971249999886,
    "elapsedMs": 153.75812500000757,
    "outcome": "success"
  },
  {
    "seq": 1092,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-223",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:05.566Z",
    "offsetMs": 158.64066699999967
  },
  {
    "seq": 1093,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-223",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:05.708Z",
    "offsetMs": 300.9683329999971,
    "elapsedMs": 141.81566700000258,
    "outcome": "success"
  },
  {
    "seq": 1094,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-223",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:05.708Z",
    "offsetMs": 301.3742499999935,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "feb43fb0f8a9671a2367ef8774c9049d7e0a5718b64ef364554e755051e84d98";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1091},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1093},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1094}} as const;
export const projectionSha256 = "8091950157e72b6625e42296f5140b6523485ed400414bfecd02570b14ee2f02";
