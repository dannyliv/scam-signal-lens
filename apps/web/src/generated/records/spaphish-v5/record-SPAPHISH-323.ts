import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-323",
  "inputSha256": "21135fe66c562a6757bc342c5ab4f00887518b59b436851e38a059e411a36e07",
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
      "end": 35,
      "text": "¿cómo fue su experiencia de compra?"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 18,
      "text": "¿Cómo le pareció? "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 18,
      "end": 49,
      "text": "Gracias por comprar con Apple. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 49,
      "end": 141,
      "text": "Cuéntenos cómo fue su experiencia al hacer su pedido, incluso si todavía no lo ha recibido. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 141,
      "end": 217,
      "text": "¡Responda la encuesta y podrá ganar un dispositivo de Apple cuando termine! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 217,
      "end": 240,
      "text": "Responder la encuesta ="
    }
  ],
  "passA": {
    "requestSha256": "41b3824965d8a3ed3f2ab4e501d763cae1d738388c77bc6842f84a0f8c0f2c84",
    "capturedAt": "2026-09-20T23:45:40.541Z",
    "elapsedMs": 152.24704099999508,
    "successfulAttemptElapsedMs": 150.70733299999847,
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
          "noul": 0.09
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.08
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.8
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.08
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.72,
            "independently_established": 0,
            "mixed_or_unknown": 0.02,
            "sender_supplied": 0.26
          },
          "confidence": 0.62
        }
      },
      "usage": {
        "input_tokens": 3491,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "80f0a06015050e6c879b75c06db008ac1050e6fed78122b2e2acc73cabe5c1ca",
    "capturedAt": "2026-09-20T23:45:40.732Z",
    "elapsedMs": 188.91437500000757,
    "successfulAttemptElapsedMs": 186.1778750000085,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0.01,
            "body:1": 0.84,
            "subject:0": 0,
            "NONE": 0.12,
            "body:4": 0,
            "body:0": 0,
            "body:3": 0.03
          },
          "confidence": 0.8
        }
      },
      "usage": {
        "input_tokens": 741,
        "output_tokens": 86
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 343.33695899999293,
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1579,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-323",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:40.390Z",
    "offsetMs": 1.072874999998021
  },
  {
    "seq": 1580,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-323",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:40.541Z",
    "offsetMs": 152.24720899999375,
    "elapsedMs": 150.70733299999847,
    "outcome": "success"
  },
  {
    "seq": 1581,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-323",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:40.544Z",
    "offsetMs": 155.80929199999082
  },
  {
    "seq": 1582,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-323",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:40.732Z",
    "offsetMs": 343.0911669999914,
    "elapsedMs": 186.1778750000085,
    "outcome": "success"
  },
  {
    "seq": 1583,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-323",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:40.732Z",
    "offsetMs": 343.41879199999676,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "18e38e4588ca2e69bdbe408d55bca2976f8f53697ef3f66e71d3b3a0c44dec80";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1580},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1582},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1583}} as const;
export const projectionSha256 = "1daac5f0d75140bf81a60fff81adf710644517f4a0690c9869a38883d1dab548";
