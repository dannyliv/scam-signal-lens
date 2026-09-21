import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB080",
  "inputSha256": "6304f82fea308dc5ddc22fb6aa01741f2bdf8cfcd7d7455ecafa129851a5f8f9",
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
      "text": "Registration opens for cooking class"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 61,
      "text": "Registration opens tomorrow for the community cooking class. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 61,
      "end": 129,
      "text": "Payment is made in person at the recreation desk after registration."
    }
  ],
  "passA": {
    "requestSha256": "a62034937962d6e6cc14e1d22805fd2fdd8d5cbc65a01bb7092286c4d6aefed2",
    "capturedAt": "2026-09-20T23:43:08.125Z",
    "elapsedMs": 153.00391700000182,
    "successfulAttemptElapsedMs": 151.35000000000218,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.01
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.03
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.32
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.32
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.19
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.01
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.69
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 0.89,
            "educational_or_quoted": 0,
            "active_request": 0.11
          },
          "confidence": 0.84
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.55,
            "independently_established": 0.41,
            "sender_supplied": 0.03,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.39
        }
      },
      "usage": {
        "input_tokens": 3282,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "5dfda842a189f3204b0024a832f4df1c394816df1147914ba3431c814b9fb4e8",
    "capturedAt": "2026-09-20T23:43:08.360Z",
    "elapsedMs": 234.3023749999993,
    "successfulAttemptElapsedMs": 233.286415999999,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.34,
            "subject:0": 0,
            "body:1": 0.65,
            "body:0": 0.01
          },
          "confidence": 0.53
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.48,
            "subject:0": 0.01,
            "body:0": 0.51,
            "body:1": 0
          },
          "confidence": 0.35
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.05,
            "subject:0": 0,
            "body:0": 0,
            "body:1": 0.95
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 1180,
        "output_tokens": 172
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 388.497374999999,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
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
        "status": "low_confidence",
        "segmentId": null
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "low_confidence",
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
    "seq": 391,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB080",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:07.973Z",
    "offsetMs": 1.0215830000015558
  },
  {
    "seq": 392,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB080",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:08.125Z",
    "offsetMs": 153.00658300000214,
    "elapsedMs": 151.35000000000218,
    "outcome": "success"
  },
  {
    "seq": 393,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB080",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:08.127Z",
    "offsetMs": 154.5969580000019
  },
  {
    "seq": 394,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB080",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:08.360Z",
    "offsetMs": 388.3241249999992,
    "elapsedMs": 233.286415999999,
    "outcome": "success"
  },
  {
    "seq": 395,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB080",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:08.360Z",
    "offsetMs": 388.5399580000012,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ae5de97af1784f9759aa578b173e85667e5b9e1824d1de7840f4b53484e99bea";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":392},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":394},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":395}} as const;
export const projectionSha256 = "0a75fbd7772a3166aa7d597b2b76c4c0a8feda9ec046e66eabf11017a7aa6b1a";
