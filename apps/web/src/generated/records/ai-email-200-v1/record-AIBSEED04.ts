import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIBSEED04",
  "inputSha256": "5afec55baacf4cc4050477ed9391c7bdc487f3141b063d778d27c00bc869dc70",
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
      "end": 25,
      "text": "Invoice 1842 is available"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 52,
      "text": "Invoice 1842 for last month’s maintenance is ready. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 52,
      "end": 74,
      "text": "It is due in 14 days. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 74,
      "end": 177,
      "text": "Use the payment method already recorded in your vendor portal; our receiving details have not changed. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 177,
      "end": 249,
      "text": "Questions can go to the accounts contact in your existing vendor record."
    },
    {
      "id": "userContext:0",
      "source": "userContext",
      "start": 0,
      "end": 56,
      "text": "The maintenance was completed under our purchase order. "
    },
    {
      "id": "userContext:1",
      "source": "userContext",
      "start": 56,
      "end": 123,
      "text": "I can find invoice 1842 by opening the vendor portal independently."
    }
  ],
  "passA": {
    "requestSha256": "aa3aad8495a941049d87ab7b1f92faca178dae9aafcfe3665935c54d8610ad94",
    "capturedAt": "2026-09-20T23:43:12.889Z",
    "elapsedMs": 612.3685420000002,
    "successfulAttemptElapsedMs": 611.210959,
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
          "noul": 0.04
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.78
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.25
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.58
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.07
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
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.93
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.44,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "active_request": 0.56
          },
          "confidence": 0.4
        },
        "request_route": {
          "type": "choice",
          "choice": "independently_established",
          "probabilities": {
            "independently_established": 0.96,
            "no_sensitive_action": 0.04,
            "sender_supplied": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.94
        }
      },
      "usage": {
        "input_tokens": 3343,
        "output_tokens": 353
      }
    }
  },
  "passB": {
    "requestSha256": "04c68ce51e20be9dfb2eb198f50e0db08ddb48dedd2c9bf18d986a996949ae35",
    "capturedAt": "2026-09-21T00:56:44.469Z",
    "elapsedMs": 93.35979199999997,
    "successfulAttemptElapsedMs": 92.01075000000003,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:1": 0.02,
            "body:0": 0,
            "subject:0": 0,
            "NONE": 0.05,
            "body:3": 0,
            "body:2": 0.93
          },
          "confidence": 0.91
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.97,
            "body:0": 0,
            "subject:0": 0,
            "NONE": 0.03,
            "body:2": 0,
            "body:3": 0
          },
          "confidence": 0.96
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:1": 0,
            "body:0": 0,
            "subject:0": 0,
            "NONE": 0.23,
            "body:3": 0.66,
            "body:2": 0.11
          },
          "confidence": 0.57
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:1": 0,
            "body:0": 0,
            "subject:0": 0,
            "NONE": 0,
            "body:2": 0.83,
            "body:3": 0.17
          },
          "confidence": 0.8
        }
      },
      "usage": {
        "input_tokens": 1787,
        "output_tokens": 300
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 874.0128330000034,
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
        "status": "selected",
        "segmentId": "body:2"
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "authority_claim": {
        "status": "low_confidence",
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
        "status": "selected",
        "segmentId": "body:2"
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
    "seq": 450,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED04",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:12.277Z",
    "offsetMs": 0.7023750000007567
  },
  {
    "seq": 451,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED04",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:12.888Z",
    "offsetMs": 612.3677910000006,
    "elapsedMs": 611.210959,
    "outcome": "success"
  },
  {
    "seq": 452,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED04",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:12.892Z",
    "offsetMs": 615.625041000003
  },
  {
    "seq": 453,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED04",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:13.055Z",
    "offsetMs": 779.090916000001,
    "elapsedMs": 162.94858400000157,
    "outcome": "success"
  },
  {
    "seq": 454,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED04",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:13.055Z",
    "offsetMs": 779.2852080000011,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 994,
    "captureSessionId": "e25842bf-8fab-457a-8c0a-d76f81eb2d72",
    "exampleId": "AIBSEED04",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:56:44.376Z",
    "offsetMs": 1.4334160000000224
  },
  {
    "seq": 995,
    "captureSessionId": "e25842bf-8fab-457a-8c0a-d76f81eb2d72",
    "exampleId": "AIBSEED04",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:56:44.468Z",
    "offsetMs": 94.13729100000006,
    "elapsedMs": 92.01075000000003,
    "outcome": "success"
  },
  {
    "seq": 996,
    "captureSessionId": "e25842bf-8fab-457a-8c0a-d76f81eb2d72",
    "exampleId": "AIBSEED04",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:56:44.469Z",
    "offsetMs": 94.66866599999997,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "3e3f769126b65e9b36d80f3722ef709c5fa2f79d671450074e81ec2cb3b30a72";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":451},"passB":{"captureSessionId":"e25842bf-8fab-457a-8c0a-d76f81eb2d72","seq":995},"complete":{"captureSessionId":"e25842bf-8fab-457a-8c0a-d76f81eb2d72","seq":996}} as const;
export const projectionSha256 = "56ea1fb46be946f8eccd733e3dbfe1b51080e9e4ed30de70ccd499d2ce3d178e";
