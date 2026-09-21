import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB001",
  "inputSha256": "ea3760037a307989b73cd143bbf09f6ee0270a9da8571a45709148126f86aa12",
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
      "end": 26,
      "text": "Enrollment window reminder"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 44,
      "text": "The benefits portal is open through Friday. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 44,
      "end": 143,
      "text": "Review your current selections in the employee portal, then save only if you want to make a change."
    }
  ],
  "passA": {
    "requestSha256": "1592a6c213edf5e91d0b6296d0e78ce48a29b89e0f9be4ccadd036a08c616c44",
    "capturedAt": "2026-09-20T23:42:44.046Z",
    "elapsedMs": 335.505458,
    "successfulAttemptElapsedMs": 334.862709,
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
          "noul": 0.02
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
          "noul": 0.8
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.58
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.76
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "active_request": 0.87,
            "informational": 0.13,
            "educational_or_quoted": 0
          },
          "confidence": 0.83
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "independently_established": 0.15,
            "no_sensitive_action": 0.85,
            "sender_supplied": 0
          },
          "confidence": 0.8
        }
      },
      "usage": {
        "input_tokens": 3289,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "f9df8b08de7f030da93512b0c27f32240783780195eb90ef751a803de4456e07",
    "capturedAt": "2026-09-20T23:42:44.180Z",
    "elapsedMs": 131.677459,
    "successfulAttemptElapsedMs": 130.044417,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.02,
            "body:1": 0.01,
            "subject:0": 0.04,
            "body:0": 0.93
          },
          "confidence": 0.9
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0.08,
            "body:1": 0.56,
            "subject:0": 0.05,
            "NONE": 0.31
          },
          "confidence": 0.41
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.03,
            "body:1": 0.96,
            "subject:0": 0,
            "body:0": 0.01
          },
          "confidence": 0.95
        }
      },
      "usage": {
        "input_tokens": 1210,
        "output_tokens": 174
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 471.426125,
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
        "status": "selected",
        "segmentId": "body:0"
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
        "segmentId": "body:1"
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
    "seq": 1,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB001",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:43.710Z",
    "offsetMs": 0.428291999999999
  },
  {
    "seq": 2,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB001",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:44.045Z",
    "offsetMs": 335.591042,
    "elapsedMs": 334.862709,
    "outcome": "success"
  },
  {
    "seq": 3,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB001",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:44.049Z",
    "offsetMs": 339.151583
  },
  {
    "seq": 4,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB001",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:44.180Z",
    "offsetMs": 470.21495799999997,
    "elapsedMs": 130.044417,
    "outcome": "success"
  },
  {
    "seq": 5,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB001",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:44.181Z",
    "offsetMs": 471.526625,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "9ccac8ab0ed82131ec6fd7264b06bdc7ec747d22aba4d9d9a4d6f8b8b4a62688";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":2},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":4},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":5}} as const;
export const projectionSha256 = "0d0b4d3d0ba5e97040f67b88d4006f6f1f77d0dc01702282e348594f89fd8a74";
