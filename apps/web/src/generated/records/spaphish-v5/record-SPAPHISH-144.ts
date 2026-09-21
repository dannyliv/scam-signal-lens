import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-144",
  "inputSha256": "19d7ef63f1814ee20b5cf686360975e4d1f996ef34624de40d62773220ba9f3c",
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
      "end": 62,
      "text": "INV-20970-JCJMTS Daily billing report on 2025/08/01 OM5LV9VIH2"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 73,
      "text": "ID : AIMKAQDD/11352627 Ref: 9652909901 E-Receipts: MPLKJSXK Domen Shigeki"
    }
  ],
  "passA": {
    "requestSha256": "b4d06a2f57c0c12e3fc9aa47b2dcdf66d584bb37f93614908361c6898725af30",
    "capturedAt": "2026-09-20T23:44:36.516Z",
    "elapsedMs": 175.7921669999996,
    "successfulAttemptElapsedMs": 174.64908399999695,
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
          "noul": 0.04
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
          "noul": 0.05
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.19
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.05
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "informational": 1,
            "active_request": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 1,
            "independently_established": 0,
            "sender_supplied": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3499,
        "output_tokens": 350
      }
    }
  },
  "passB": null,
  "evidencePassStatus": "not_needed",
  "processingElapsedMs": 178.7112500000003,
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
    "seq": 705,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-144",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:36.340Z",
    "offsetMs": 0.6740830000053393
  },
  {
    "seq": 706,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-144",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:36.515Z",
    "offsetMs": 175.79087500000605,
    "elapsedMs": 174.64908399999695,
    "outcome": "success"
  },
  {
    "seq": 707,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-144",
    "pass": "B",
    "attempt": null,
    "kind": "pass_skipped",
    "at": "2026-09-20T23:44:36.518Z",
    "offsetMs": 178.62850000000617,
    "reasonCode": "schema_error"
  },
  {
    "seq": 708,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-144",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:36.518Z",
    "offsetMs": 178.77112500000658,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "bc3918728028d490a0bc39cc836cb602bb082c29f165b63b92a82fc0124e3553";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":706},"passB":null,"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":708}} as const;
export const projectionSha256 = "bc27c57d0f4375792de1908aefc10ecbc9286f1b7c8a765496dd455e23e62cf6";
