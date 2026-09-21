import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB073",
  "inputSha256": "67ac9b58121fd5ff90a253aa98045d806ff1e80083254e2a9a46cc7351ea5d66",
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
      "text": "License renewal completed"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 49,
      "text": "The design software license renewal is complete. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 49,
      "end": 109,
      "text": "Continue signing in through the company single sign on page."
    }
  ],
  "passA": {
    "requestSha256": "1bee3f7b11ddbab47bd0cbf20bbdba8f180d9b4203f83825b425c2f2cae37457",
    "capturedAt": "2026-09-20T23:43:05.367Z",
    "elapsedMs": 208.5852500000001,
    "successfulAttemptElapsedMs": 206.94187500000044,
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
          "noul": 0.02
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
          "noul": 0.43
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.73
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
            "active_request": 0.49,
            "informational": 0.5
          },
          "confidence": 0.33
        },
        "request_route": {
          "type": "choice",
          "choice": "independently_established",
          "probabilities": {
            "no_sensitive_action": 0.41,
            "mixed_or_unknown": 0.01,
            "independently_established": 0.5599999999999999,
            "sender_supplied": 0.02
          },
          "confidence": 0.42
        }
      },
      "usage": {
        "input_tokens": 3278,
        "output_tokens": 355
      }
    }
  },
  "passB": {
    "requestSha256": "105057265886e377f42b019e47841646e76ab100e3a0d558905075a86e0efc0d",
    "capturedAt": "2026-09-20T23:43:05.516Z",
    "elapsedMs": 146.9916250000024,
    "successfulAttemptElapsedMs": 145.55962499999805,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0.01,
            "subject:0": 0,
            "body:1": 0.81,
            "NONE": 0.18
          },
          "confidence": 0.74
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "subject:0": 0,
            "body:1": 0.97,
            "NONE": 0.03
          },
          "confidence": 0.95
        }
      },
      "usage": {
        "input_tokens": 886,
        "output_tokens": 118
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 357.79079099999944,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence",
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
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 356,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB073",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:05.159Z",
    "offsetMs": 1.0262079999993148
  },
  {
    "seq": 357,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB073",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:05.367Z",
    "offsetMs": 208.58658300000025,
    "elapsedMs": 206.94187500000044,
    "outcome": "success"
  },
  {
    "seq": 358,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB073",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:05.370Z",
    "offsetMs": 211.32204099999944
  },
  {
    "seq": 359,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB073",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:05.516Z",
    "offsetMs": 357.4914580000004,
    "elapsedMs": 145.55962499999805,
    "outcome": "success"
  },
  {
    "seq": 360,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB073",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:05.516Z",
    "offsetMs": 357.8742910000001,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a566bcb6ece5f00d0a8847ab2f744c6c4bf074e1e95b59d9d93692f5695c5c67";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":357},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":359},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":360}} as const;
export const projectionSha256 = "48eb8b17f0d6285fd4b1f9e2691ba579e076d4c179e41ea7c95e81d3477fb47e";
