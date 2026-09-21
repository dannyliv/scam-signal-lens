import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-427",
  "inputSha256": "fd10aa9002592d4349209389cbed18a6ae444a76339764e33731374ff9339a70",
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
      "end": 29,
      "text": "Resultado del test metabolico"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 103,
      "text": "Muchas gracias por realizar nuestro test metabolico, hecho desde su email: SofiaRojasVargas@gmail.com. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 103,
      "end": 182,
      "text": "En el test metabolico, el resultado es que usted es ligeramente tipo Proteína. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 182,
      "end": 307,
      "text": "Si quieres mejorar tu dieta, aqu te damos unos consejos muy prcticos: https://sofia-gomez.net/tipo-balanceado-50-proteina-50/"
    }
  ],
  "passA": {
    "requestSha256": "0c04329086d4c56c718d36b141d7fb8e414389f5acfdb5d9c4a516d091dc8478",
    "capturedAt": "2026-09-20T23:46:15.443Z",
    "elapsedMs": 202.7573749999865,
    "successfulAttemptElapsedMs": 200.48770899997908,
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
          "noul": 0.03
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.03
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
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 0.41,
            "informational": 0.59
          },
          "confidence": 0.44
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.96,
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "sender_supplied": 0.04
          },
          "confidence": 0.95
        }
      },
      "usage": {
        "input_tokens": 3515,
        "output_tokens": 350
      }
    }
  },
  "passB": null,
  "evidencePassStatus": "not_needed",
  "processingElapsedMs": 203.9810830000206,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence"
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 2096,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-427",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:15.242Z",
    "offsetMs": 1.7302910000144038
  },
  {
    "seq": 2097,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-427",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:15.443Z",
    "offsetMs": 202.7601250000007,
    "elapsedMs": 200.48770899997908,
    "outcome": "success"
  },
  {
    "seq": 2098,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-427",
    "pass": "B",
    "attempt": null,
    "kind": "pass_skipped",
    "at": "2026-09-20T23:46:15.444Z",
    "offsetMs": 203.9385000000184,
    "reasonCode": "schema_error"
  },
  {
    "seq": 2099,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-427",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:15.444Z",
    "offsetMs": 204.01091599999927,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "f32527ed6828c25a9f075fba734c7112fbe0153190ef27473a2b7b639ebac9a1";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2097},"passB":null,"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2099}} as const;
export const projectionSha256 = "843b3683b9358b947751d093422e91744a8e3b9825e0711f3d84c01291da0ee5";
