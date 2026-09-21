import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-058",
  "inputSha256": "1f2a4a92f43c55751dc6933c26b1dfda253f1c4baff07f85a0c8d8b518ac77b5",
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
      "end": 16,
      "text": "Aviso importante"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 29,
      "text": "Estimados Padres de Familia:\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 29,
      "end": 30,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 30,
      "end": 104,
      "text": "Espero se encuentren muy bien, por este medio les informamos que debido a\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 104,
      "end": 176,
      "text": "los cambios en las fechas de aplicación de exámenes correspondientes al\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 176,
      "end": 253,
      "text": "primer parcial, la firma de boletas se cambia para el martes 12 de noviembre\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 253,
      "end": 269,
      "text": "a las 8:30 a.m.\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 269,
      "end": 270,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 270,
      "end": 297,
      "text": "Gracias por su comprensión."
    }
  ],
  "passA": {
    "requestSha256": "203721479ca4bb8e1058e5395b0a37fcba3297332520c30707b874cb09edfcfb",
    "capturedAt": "2026-09-20T23:44:09.330Z",
    "elapsedMs": 153.96962500000154,
    "successfulAttemptElapsedMs": 152.361917000002,
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
          "noul": 0.02
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.13
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.83
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.02
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 1,
            "educational_or_quoted": 0,
            "active_request": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0,
            "no_sensitive_action": 1,
            "independently_established": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3508,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "1a1741c44c98452825164ca8e7c665b995da89452a74dccd6b16158e07f7f6c6",
    "capturedAt": "2026-09-20T23:44:09.469Z",
    "elapsedMs": 136.32274999999936,
    "successfulAttemptElapsedMs": 133.97979199999827,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "body:5": 0,
            "NONE": 0.05,
            "body:4": 0.03,
            "body:6": 0,
            "body:0": 0.83,
            "body:2": 0.08,
            "body:7": 0,
            "body:3": 0.01,
            "body:1": 0
          },
          "confidence": 0.8
        }
      },
      "usage": {
        "input_tokens": 810,
        "output_tokens": 113
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 292.93054199999824,
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
        "status": "selected",
        "segmentId": "body:0"
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
        "status": "not_requested",
        "segmentId": null
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
    "seq": 281,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-058",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:09.177Z",
    "offsetMs": 0.9539169999989099
  },
  {
    "seq": 282,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-058",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:09.330Z",
    "offsetMs": 153.97187499999927,
    "elapsedMs": 152.361917000002,
    "outcome": "success"
  },
  {
    "seq": 283,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-058",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:09.334Z",
    "offsetMs": 157.85625000000073
  },
  {
    "seq": 284,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-058",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:09.468Z",
    "offsetMs": 292.55674999999974,
    "elapsedMs": 133.97979199999827,
    "outcome": "success"
  },
  {
    "seq": 285,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-058",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:09.469Z",
    "offsetMs": 293.01587500000096,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "132c8b6de40a53b5d6377a738e577773a1767e3b3e451967a5f7f137319ff668";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":282},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":284},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":285}} as const;
export const projectionSha256 = "42e5c069a0d55471b22633d263d684d1f49d8a414afe0a7c242b1526531429f0";
