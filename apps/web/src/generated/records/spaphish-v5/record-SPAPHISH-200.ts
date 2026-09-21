import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-200",
  "inputSha256": "a532d10a10e4005d5799f87d9eac936e3b6de920e2a24d46850ea446d84c1017",
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
      "end": 58,
      "text": "Tu opinión es muy importante✍️¡contesta, participa y gana!"
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 58,
      "end": 60,
      "text": "🎉"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 1,
      "text": ":"
    }
  ],
  "passA": {
    "requestSha256": "c0bbf5d962021cae99d81ac70d396225efa86966aea47563df4dd140beb9842b",
    "capturedAt": "2026-09-20T23:44:57.830Z",
    "elapsedMs": 162.08349999999336,
    "successfulAttemptElapsedMs": 160.37812499998836,
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
          "noul": 0.09
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.14
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.09
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.06
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.11
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.05
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "educational_or_quoted": 0,
            "active_request": 0.98,
            "mixed_or_unclear": 0.02
          },
          "confidence": 0.97
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.02,
            "mixed_or_unknown": 0.04,
            "no_sensitive_action": 0.94,
            "independently_established": 0
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 3443,
        "output_tokens": 348
      }
    }
  },
  "passB": null,
  "evidencePassStatus": "not_needed",
  "processingElapsedMs": 163.73958299998776,
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
    "seq": 977,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-200",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:57.669Z",
    "offsetMs": 1.1510829999897396
  },
  {
    "seq": 978,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-200",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:57.830Z",
    "offsetMs": 162.08874999999534,
    "elapsedMs": 160.37812499998836,
    "outcome": "success"
  },
  {
    "seq": 979,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-200",
    "pass": "B",
    "attempt": null,
    "kind": "pass_skipped",
    "at": "2026-09-20T23:44:57.831Z",
    "offsetMs": 163.6904169999907,
    "reasonCode": "schema_error"
  },
  {
    "seq": 980,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-200",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:57.831Z",
    "offsetMs": 163.77879199999734,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d7e3173691535d55370f6a96b8b4b8b2ce8967c39a34d663ea0cd4a398ee7b51";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":978},"passB":null,"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":980}} as const;
export const projectionSha256 = "1e52e27bdfb6e94934226894538c9cbc1b39c52ffa0b611187fff5c556a0148f";
