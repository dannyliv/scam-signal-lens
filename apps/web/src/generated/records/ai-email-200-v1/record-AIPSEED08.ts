import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIPSEED08",
  "inputSha256": "3b365d06a9cbda52a4a9c6b6a2c62982a3ef857f4684f7c98546db88c6f7a985",
  "questionBundleSha256": "e8f1e66cf768b6c7314f1f4b6ad6fe743f7e945c487259b6087353d93f311dd6",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "synthetic_sanitized",
  "policySha256": "3435135d6058476d4262ecbc936abf95af4993b455dfab35adc8b17f3fe6ad6a",
  "requestedModel": "jev-1.13.0",
  "segments": [
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 23,
      "text": "It is me, your nephew. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 23,
      "end": 69,
      "text": "My phone broke and I am using a borrowed one. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 69,
      "end": 138,
      "text": "I need $750 sent to my friend right away to get out of an emergency. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 138,
      "end": 186,
      "text": "Please do not call my parents or my old number. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 186,
      "end": 215,
      "text": "I will explain after you pay."
    },
    {
      "id": "userContext:0",
      "source": "userContext",
      "start": 0,
      "end": 34,
      "text": "The number is not in my contacts. "
    },
    {
      "id": "userContext:1",
      "source": "userContext",
      "start": 34,
      "end": 98,
      "text": "I have not reached my nephew through a previously known channel."
    }
  ],
  "passA": {
    "requestSha256": "a42b09a6fc61c603c08d9009ecc78588cfa1b82c8f28bc56f7f2ba12569e4f79",
    "capturedAt": "2026-09-20T23:43:49.001Z",
    "elapsedMs": 214.0449579999986,
    "successfulAttemptElapsedMs": 212.176833000005,
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
          "noul": 0.36
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.99
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.6
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.93
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.97
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.97
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.15
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
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0,
            "sender_supplied": 1,
            "independently_established": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3330,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "fc01caef177621fb8c306066e0cabaf7c1f174c050320d5e4a00af3acce1c2bc",
    "capturedAt": "2026-09-20T23:43:49.199Z",
    "elapsedMs": 195.89870799999335,
    "successfulAttemptElapsedMs": 194.26237499999843,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 0.59,
            "body:1": 0,
            "body:4": 0.01,
            "NONE": 0.4,
            "body:3": 0,
            "body:0": 0
          },
          "confidence": 0.5
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 1,
            "body:1": 0,
            "body:4": 0,
            "NONE": 0,
            "body:3": 0,
            "body:0": 0
          },
          "confidence": 1
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 0.95,
            "body:1": 0,
            "body:4": 0,
            "NONE": 0.05,
            "body:3": 0,
            "body:0": 0
          },
          "confidence": 0.94
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 0.99,
            "body:1": 0,
            "body:4": 0.01,
            "NONE": 0,
            "body:3": 0,
            "body:0": 0
          },
          "confidence": 0.98
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0,
            "body:1": 0,
            "body:4": 0,
            "NONE": 0,
            "body:3": 0,
            "body:0": 1
          },
          "confidence": 0.99
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:2": 0,
            "body:1": 0,
            "body:4": 0,
            "NONE": 0,
            "body:3": 1,
            "body:0": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 2476,
        "output_tokens": 449
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 412.5654580000046,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H3"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "low_confidence",
        "segmentId": null
      },
      "payment_request": {
        "status": "selected",
        "segmentId": "body:2"
      },
      "unusual_payment_routing": {
        "status": "selected",
        "segmentId": "body:2"
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:2"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:0"
      },
      "verification_bypass": {
        "status": "selected",
        "segmentId": "body:3"
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
      "avoid_sender_route",
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 961,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED08",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:48.788Z",
    "offsetMs": 1.2683749999996508
  },
  {
    "seq": 962,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED08",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:49.001Z",
    "offsetMs": 214.04695800000627,
    "elapsedMs": 212.176833000005,
    "outcome": "success"
  },
  {
    "seq": 963,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED08",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:49.004Z",
    "offsetMs": 217.19450000000506
  },
  {
    "seq": 964,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED08",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:49.199Z",
    "offsetMs": 412.09387499999866,
    "elapsedMs": 194.26237499999843,
    "outcome": "success"
  },
  {
    "seq": 965,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED08",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:49.199Z",
    "offsetMs": 412.6681250000038,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "afcbfca45dd36ac311c827b1756b1cfb8b179296a6e5b022b4ac6438616ceb61";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":962},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":964},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":965}} as const;
export const projectionSha256 = "66200b022ecd547c1ee8459ed108f4b71c10db9861acaac797379c414f7120df";
