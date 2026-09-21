import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-014",
  "inputSha256": "d86aa65eb61e34df2e170b2eeab25945b2bad90519f73ac17748b5c7b34b3e6d",
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
      "end": 25,
      "text": "Sobre cambio de categoría"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 30,
      "text": "Hola Daniel, buenas tardes!!!\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 30,
      "end": 31,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 31,
      "end": 206,
      "text": "Daniel, según yo, creo que este año luego de concluir primavera ya contaría con los requerimientos para solicitar el cambio de categoría, pero no estoy seguro de que así sea. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 206,
      "end": 304,
      "text": "Tienes idea de con quién puedo aclarar esta duda, y dado el caso, cómo poder solicitar el cambio?\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 304,
      "end": 305,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 305,
      "end": 321,
      "text": "Muchas gracias!\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 321,
      "end": 322,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 322,
      "end": 331,
      "text": "Saludos! "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 331,
      "end": 339,
      "text": "Ricardo."
    }
  ],
  "passA": {
    "requestSha256": "f4eb8f0162e53eec55e7c473878bbf1c15322ce18e0c96b605bc0820f1e25eef",
    "capturedAt": "2026-09-20T23:43:55.600Z",
    "elapsedMs": 171.2885839999999,
    "successfulAttemptElapsedMs": 169.6116660000007,
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
          "noul": 0.02
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.18
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.14
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "sender_supplied": 0,
            "no_sensitive_action": 1
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 3513,
        "output_tokens": 348
      }
    }
  },
  "passB": null,
  "evidencePassStatus": "not_needed",
  "processingElapsedMs": 173.7141249999995,
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
        "status": "not_requested",
        "segmentId": null
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
    "seq": 65,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-014",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:55.429Z",
    "offsetMs": 1.0789999999997235
  },
  {
    "seq": 66,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-014",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:55.599Z",
    "offsetMs": 171.28908299999966,
    "elapsedMs": 169.6116660000007,
    "outcome": "success"
  },
  {
    "seq": 67,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-014",
    "pass": "B",
    "attempt": null,
    "kind": "pass_skipped",
    "at": "2026-09-20T23:43:55.602Z",
    "offsetMs": 173.64729199999965,
    "reasonCode": "schema_error"
  },
  {
    "seq": 68,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-014",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:55.602Z",
    "offsetMs": 173.75462499999958,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "451ad177e24d7fd4e4170ee6d08dece690a28d171420ceb099cf1d0f08defd1d";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":66},"passB":null,"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":68}} as const;
export const projectionSha256 = "6060c34d644a1fdd422e191783afdfcbfb14a9d777885b182daa1b3c4ba113e6";
