import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-424",
  "inputSha256": "6af309bf6831feb61fe816221923bb10c49bf1a8f38adca00b60a71b58866b24",
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
      "end": 72,
      "text": "Comprobante de pago No. 67 del 10/08/25 04:45:29 p. m. del mes de agosto"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 86,
      "text": "MENSAGEM: Estimado contribuyente: Le informamos que su pago se realizó correctamente. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 86,
      "end": 260,
      "text": "Le sugerimos que utilice su correo electrónico como contraseña para acceder a su recibo: ricardo.lopez@mailsecure.net --- Atentamente: Servicio de Administración Tributaria. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 260,
      "end": 322,
      "text": "\"Favor de no responder a este mensaje, es un envío automático\""
    }
  ],
  "passA": {
    "requestSha256": "bc8c2ef77d06642708cb3a282c60d9e2bd83132562ed672f86e1597da719e8d0",
    "capturedAt": "2026-09-20T23:46:14.350Z",
    "elapsedMs": 134.7075420000183,
    "successfulAttemptElapsedMs": 131.911334000004,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.33
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.15
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.39
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.06
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.07
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 0.19,
            "mixed_or_unclear": 0.01,
            "active_request": 0.8
          },
          "confidence": 0.73
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0.01,
            "sender_supplied": 0.88,
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.1
          },
          "confidence": 0.84
        }
      },
      "usage": {
        "input_tokens": 3540,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "0fa3ae9c567b9da8d8f36eb301bc0db723e4f91a7c8ae0086c2d8438cecd414f",
    "capturedAt": "2026-09-20T23:46:14.586Z",
    "elapsedMs": 234.35316699999385,
    "successfulAttemptElapsedMs": 232.65550000002258,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "body:1": 0.87,
            "body:0": 0,
            "NONE": 0.13,
            "subject:0": 0
          },
          "confidence": 0.83
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "body:1": 0.97,
            "body:0": 0.02,
            "NONE": 0.01,
            "subject:0": 0
          },
          "confidence": 0.96
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.12,
            "body:1": 0.27,
            "body:0": 0,
            "NONE": 0.61,
            "subject:0": 0
          },
          "confidence": 0.51
        }
      },
      "usage": {
        "input_tokens": 1635,
        "output_tokens": 199
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 370.76895800000057,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "selected",
        "segmentId": "body:1"
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
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 2081,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-424",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:14.217Z",
    "offsetMs": 2.192125000001397
  },
  {
    "seq": 2082,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-424",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:14.350Z",
    "offsetMs": 134.71091699998942,
    "elapsedMs": 131.911334000004,
    "outcome": "success"
  },
  {
    "seq": 2083,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-424",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:14.352Z",
    "offsetMs": 137.21991700000945
  },
  {
    "seq": 2084,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-424",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:14.585Z",
    "offsetMs": 370.37583299999824,
    "elapsedMs": 232.65550000002258,
    "outcome": "success"
  },
  {
    "seq": 2085,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-424",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:14.586Z",
    "offsetMs": 370.85083300000406,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "4d80f5a42a17dd7f7a61934dfbb47d4c8b38571caec8e85393208976402d1ace";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2082},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2084},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2085}} as const;
export const projectionSha256 = "a5204cade92a94ac5ed83fa165dcb184e795091ba4e512a6ac8b5487b2b8c4a1";
