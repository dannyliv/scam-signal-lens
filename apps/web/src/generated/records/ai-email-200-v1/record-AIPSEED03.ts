import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIPSEED03",
  "inputSha256": "9c428f2d37debbf5e92728e244e4fa0b276fd9dd8423c129c91d6be91ae6e422",
  "questionBundleSha256": "e8f1e66cf768b6c7314f1f4b6ad6fe743f7e945c487259b6087353d93f311dd6",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "synthetic_sanitized",
  "policySha256": "3435135d6058476d4262ecbc936abf95af4993b455dfab35adc8b17f3fe6ad6a",
  "requestedModel": "jev-1.13.0",
  "segments": [
    {
      "id": "subject:0",
      "source": "subject",
      "start": 0,
      "end": 29,
      "text": "Quick favor before my meeting"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 90,
      "text": "I am in a closed meeting and need you to buy four $100 gift cards for a client right now. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 90,
      "end": 132,
      "text": "Send photos of the numbers and PINs here. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 132,
      "end": 189,
      "text": "Keep this away from finance until I explain it tomorrow. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 189,
      "end": 223,
      "text": "I will reimburse you. —Morgan, CEO"
    },
    {
      "id": "userContext:0",
      "source": "userContext",
      "start": 0,
      "end": 51,
      "text": "This arrived outside our usual purchasing process. "
    },
    {
      "id": "userContext:1",
      "source": "userContext",
      "start": 51,
      "end": 109,
      "text": "I have not contacted Morgan through the company directory."
    }
  ],
  "passA": {
    "requestSha256": "d77f5252aff4d7fd6cf0366d96b20fff0ca8575d5110978bfdc69399e4abe0de",
    "capturedAt": "2026-09-20T23:43:47.130Z",
    "elapsedMs": 202.0559160000048,
    "successfulAttemptElapsedMs": 200.02825000000303,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.28
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.93
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.99
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.97
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.94
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.97
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.96
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.24
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
          "noul": 0.06
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
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0.03,
            "sender_supplied": 0.94,
            "no_sensitive_action": 0.01,
            "mixed_or_unknown": 0.02
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 3335,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "804081ae3a3f07b6e22d4272b3b37fd6c6fd4e500523c4b60b4f39a7c815ca5c",
    "capturedAt": "2026-09-21T00:56:45.440Z",
    "elapsedMs": 122.10779200000002,
    "successfulAttemptElapsedMs": 120.4758330000002,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.38,
            "body:2": 0,
            "body:3": 0,
            "body:1": 0.62,
            "body:0": 0,
            "subject:0": 0
          },
          "confidence": 0.54
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.01,
            "body:2": 0,
            "body:3": 0,
            "body:1": 0.99,
            "body:0": 0,
            "subject:0": 0
          },
          "confidence": 0.99
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:3": 0,
            "body:2": 0,
            "NONE": 0,
            "subject:0": 0,
            "body:0": 1,
            "body:1": 0
          },
          "confidence": 1
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0,
            "body:2": 0,
            "body:3": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:1": 1
          },
          "confidence": 1
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0,
            "body:2": 0.03,
            "body:3": 0,
            "body:1": 0,
            "body:0": 0.9,
            "subject:0": 0.06999999999999999
          },
          "confidence": 0.87
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "NONE": 0,
            "body:2": 0.01,
            "body:3": 0.96,
            "subject:0": 0,
            "body:0": 0.03,
            "body:1": 0
          },
          "confidence": 0.95
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "NONE": 0,
            "body:2": 1,
            "body:3": 0,
            "body:1": 0,
            "body:0": 0,
            "subject:0": 0
          },
          "confidence": 1
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.5,
            "body:2": 0,
            "body:3": 0.1,
            "subject:0": 0,
            "body:0": 0.36,
            "body:1": 0.04
          },
          "confidence": 0.41
        }
      },
      "usage": {
        "input_tokens": 3237,
        "output_tokens": 600
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 484.2087090000023,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H3",
      "H5"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "low_confidence",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "payment_request": {
        "status": "selected",
        "segmentId": "body:0"
      },
      "unusual_payment_routing": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:0"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:3"
      },
      "verification_bypass": {
        "status": "selected",
        "segmentId": "body:2"
      },
      "advance_fee_or_refund_trap": {
        "status": "low_confidence",
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
      "avoid_sender_route",
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 936,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED03",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:46.929Z",
    "offsetMs": 1.2871250000025611
  },
  {
    "seq": 937,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED03",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:47.129Z",
    "offsetMs": 202.05729100000462,
    "elapsedMs": 200.02825000000303,
    "outcome": "success"
  },
  {
    "seq": 938,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED03",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:47.133Z",
    "offsetMs": 205.69650000000547
  },
  {
    "seq": 939,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED03",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:47.287Z",
    "offsetMs": 360.148125000007,
    "elapsedMs": 153.794249999999,
    "outcome": "success"
  },
  {
    "seq": 940,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED03",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:47.288Z",
    "offsetMs": 360.33670800000255,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 1010,
    "captureSessionId": "e25842bf-8fab-457a-8c0a-d76f81eb2d72",
    "exampleId": "AIPSEED03",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:56:45.319Z",
    "offsetMs": 2.345874999999978
  },
  {
    "seq": 1011,
    "captureSessionId": "e25842bf-8fab-457a-8c0a-d76f81eb2d72",
    "exampleId": "AIPSEED03",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:56:45.440Z",
    "offsetMs": 123.35424999999987,
    "elapsedMs": 120.4758330000002,
    "outcome": "success"
  },
  {
    "seq": 1012,
    "captureSessionId": "e25842bf-8fab-457a-8c0a-d76f81eb2d72",
    "exampleId": "AIPSEED03",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:56:45.440Z",
    "offsetMs": 123.80950000000007,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "8fb8c674ba2e933f8216a751ea99f37397b8c0b89dff9de2b87d59ae8ab3cea5";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":937},"passB":{"captureSessionId":"e25842bf-8fab-457a-8c0a-d76f81eb2d72","seq":1011},"complete":{"captureSessionId":"e25842bf-8fab-457a-8c0a-d76f81eb2d72","seq":1012}} as const;
export const projectionSha256 = "1811a46f931bd3bf1af2f51b5ef48a888f1900a5a68f1218afafd6daa1a0f071";
