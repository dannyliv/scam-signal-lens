import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-144",
  "inputSha256": "19d7ef63f1814ee20b5cf686360975e4d1f996ef34624de40d62773220ba9f3c",
  "questionBundleSha256": "9631a5b623f8c05b491dc5a5f67ab9b62e5b1898446a722339eaa0c16a40af8b",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "source_messages",
  "policySha256": "42e51b1f7b8706dae7188d0d3fa8c6ac83b855b21f393196bd63bc16d4b91d93",
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
    "requestSha256": "3ad793806da0aec163b80091a48ff4a321197be90d7043b63fb8812a10f9226b",
    "capturedAt": "2026-09-22T03:51:05.356Z",
    "elapsedMs": 649.5768720000051,
    "successfulAttemptElapsedMs": 648.6920430000173,
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
          "noul": 0.05
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
          "noul": 0.2
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.07
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.03
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0.01,
            "active_request": 0,
            "informational": 0.99
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 1,
            "sender_supplied": 0,
            "independently_established": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 4949,
        "output_tokens": 350
      }
    }
  },
  "passB": null,
  "evidencePassStatus": "not_needed",
  "processingElapsedMs": 651.0297219999775,
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
    "seq": 699,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-144",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:04.707Z",
    "offsetMs": 0.5748059999896213
  },
  {
    "seq": 700,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-144",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:05.356Z",
    "offsetMs": 649.5761530000018,
    "elapsedMs": 648.6920430000173,
    "outcome": "success"
  },
  {
    "seq": 701,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-144",
    "pass": "B",
    "attempt": null,
    "kind": "pass_skipped",
    "at": "2026-09-22T03:51:05.357Z",
    "offsetMs": 650.9249009999912,
    "reasonCode": "schema_error"
  },
  {
    "seq": 702,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-144",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:51:05.357Z",
    "offsetMs": 651.0704489999916,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0ca4b65a83a607e3917dc982a92031bde92f5475cef50a1aa04ff567b316e626";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":700},"passB":null,"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":702}} as const;
export const projectionSha256 = "84115dbb686f70ace51603d4a3ffbbdb974d8e4aef3a120404c0dc2c59de6c53";
