import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB068",
  "inputSha256": "1a24c4adf85afe2f8336ef0d6c49e95bb938a3271609196293e26d9806dd72f4",
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
      "end": 36,
      "text": "Your hotel confirmation is available"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 93,
      "text": "Your hotel confirmation is available in the travel booking account used for the reservation. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 93,
      "end": 134,
      "text": "Check in at the desk with identification."
    }
  ],
  "passA": {
    "requestSha256": "186abc0a4c2b134ac06f3f022a507457564af5fa6949f3321bfb1d79ee689cc8",
    "capturedAt": "2026-09-20T23:43:03.777Z",
    "elapsedMs": 142.79833299999882,
    "successfulAttemptElapsedMs": 141.27270800000042,
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
          "noul": 0.07
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
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.27
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.95
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0.01,
            "informational": 0.58,
            "active_request": 0.41,
            "educational_or_quoted": 0
          },
          "confidence": 0.44
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.84,
            "independently_established": 0.16,
            "sender_supplied": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.78
        }
      },
      "usage": {
        "input_tokens": 3284,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "aacba9b3e9ad7effc5e0a15e5093685c33b1881df62c851e03df18331e7a1552",
    "capturedAt": "2026-09-20T23:43:03.936Z",
    "elapsedMs": 155.7814580000013,
    "successfulAttemptElapsedMs": 153.74695799999972,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.79,
            "body:1": 0.14,
            "body:0": 0.06,
            "subject:0": 0.01
          },
          "confidence": 0.72
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0,
            "body:1": 0.07,
            "body:0": 0.93,
            "subject:0": 0
          },
          "confidence": 0.9
        }
      },
      "usage": {
        "input_tokens": 904,
        "output_tokens": 116
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 302.68729099999837,
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
        "status": "none_selected",
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
        "segmentId": "body:0"
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
    "seq": 331,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB068",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:03.634Z",
    "offsetMs": 1.0184159999989788
  },
  {
    "seq": 332,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB068",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:03.776Z",
    "offsetMs": 142.7997499999983,
    "elapsedMs": 141.27270800000042,
    "outcome": "success"
  },
  {
    "seq": 333,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB068",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:03.781Z",
    "offsetMs": 147.92012500000055
  },
  {
    "seq": 334,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB068",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:03.936Z",
    "offsetMs": 302.4517500000002,
    "elapsedMs": 153.74695799999972,
    "outcome": "success"
  },
  {
    "seq": 335,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB068",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:03.936Z",
    "offsetMs": 302.7360829999998,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "94d40150963613bd351ee204f5a3a7aed7b9353e08398a2e338abacee7e29607";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":332},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":334},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":335}} as const;
export const projectionSha256 = "7a3805764f3ec2944aaad118b493c6cec440b26d90c7f3ad755bb1a0c8fb0e8e";
