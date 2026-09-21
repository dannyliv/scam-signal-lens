import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-202",
  "inputSha256": "71d4b531bf195e482634dc68e9da15a990289f8289c5dbd22bd139e5970cb8c6",
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
      "end": 90,
      "text": "Mensaje importante del administrador de Universidad Iberoamericana Campus Ciudad de México"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 73,
      "text": "Tiene (2) mensajes importantes sin leer de nuestro equipo administrador. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 73,
      "end": 124,
      "text": "Haga clic en revisar para leer el (los) mensaje(s)."
    }
  ],
  "passA": {
    "requestSha256": "87358089b2fc6c7ad0ce9631871602124b75fa0753ee87b2298146e315977ced",
    "capturedAt": "2026-09-20T23:44:58.466Z",
    "elapsedMs": 208.75337500000023,
    "successfulAttemptElapsedMs": 206.75574999999662,
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
          "noul": 0.04
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
          "noul": 0.15
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.14
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
          "noul": 0.08
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 0.97,
            "informational": 0.03,
            "mixed_or_unclear": 0
          },
          "confidence": 0.96
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.86,
            "mixed_or_unknown": 0.03,
            "independently_established": 0,
            "sender_supplied": 0.11
          },
          "confidence": 0.81
        }
      },
      "usage": {
        "input_tokens": 3466,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "58ab0d5fd9dc2a09538b3c936f68e046190df6ee94da5d81b3857852f9470c43",
    "capturedAt": "2026-09-20T23:44:58.625Z",
    "elapsedMs": 157.49666699999943,
    "successfulAttemptElapsedMs": 156.27158300000883,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "NONE": 0,
            "subject:0": 0.78,
            "body:0": 0.21,
            "body:1": 0.01
          },
          "confidence": 0.71
        }
      },
      "usage": {
        "input_tokens": 649,
        "output_tokens": 59
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 367.749834000002,
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
        "segmentId": "subject:0"
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
    "seq": 986,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-202",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:58.259Z",
    "offsetMs": 1.2541669999918668
  },
  {
    "seq": 987,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-202",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:58.466Z",
    "offsetMs": 208.7560419999936,
    "elapsedMs": 206.75574999999662,
    "outcome": "success"
  },
  {
    "seq": 988,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-202",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:58.468Z",
    "offsetMs": 210.78445900000224
  },
  {
    "seq": 989,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-202",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:58.625Z",
    "offsetMs": 367.5336249999964,
    "elapsedMs": 156.27158300000883,
    "outcome": "success"
  },
  {
    "seq": 990,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-202",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:58.625Z",
    "offsetMs": 367.80529199999,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ac110f0fce313e6c62f398e892f1716a0673a27f560f17f917e1767065bc697f";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":987},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":989},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":990}} as const;
export const projectionSha256 = "a69cd4150fb9ebf8dd5af990583bcae5d4f8d8f436b6f2f1018b9915b2ebf6e6";
