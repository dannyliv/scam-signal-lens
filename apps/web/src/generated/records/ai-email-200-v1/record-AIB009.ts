import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB009",
  "inputSha256": "e6e5edc06f43de4ba8b2de669de90b8170e1bf120a6edd161d7711878f6b0434",
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
      "end": 31,
      "text": "Your pay statement is available"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 63,
      "text": "Your current pay statement is available in the payroll portal. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 63,
      "end": 113,
      "text": "We do not send pay statement attachments by email."
    }
  ],
  "passA": {
    "requestSha256": "a9548c02b899377b17f0dbd2d3289881dc2e25f21ad03b42132984bdae46af7b",
    "capturedAt": "2026-09-20T23:42:46.711Z",
    "elapsedMs": 251.2963749999999,
    "successfulAttemptElapsedMs": 249.73966599999994,
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
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.66
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.81
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
            "informational": 0.97,
            "educational_or_quoted": 0,
            "active_request": 0.03
          },
          "confidence": 0.96
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.58,
            "independently_established": 0.41,
            "sender_supplied": 0.01
          },
          "confidence": 0.44
        }
      },
      "usage": {
        "input_tokens": 3282,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "d90e521f056aaaa4176e955092c062d11f68b2c1172aa38b50effc4076499b7d",
    "capturedAt": "2026-09-20T23:42:46.832Z",
    "elapsedMs": 119.22691699999996,
    "successfulAttemptElapsedMs": 117.93516700000009,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.47,
            "body:0": 0.33,
            "body:1": 0.16,
            "subject:0": 0.04
          },
          "confidence": 0.3
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.02,
            "body:0": 0.97,
            "subject:0": 0,
            "body:1": 0.01
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 898,
        "output_tokens": 116
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 372.75704099999984,
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
    "seq": 41,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB009",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:46.460Z",
    "offsetMs": 0.9464159999997719
  },
  {
    "seq": 42,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB009",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:46.710Z",
    "offsetMs": 251.306333,
    "elapsedMs": 249.73966599999994,
    "outcome": "success"
  },
  {
    "seq": 43,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB009",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:46.713Z",
    "offsetMs": 253.88774999999987
  },
  {
    "seq": 44,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB009",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:46.831Z",
    "offsetMs": 372.48370799999975,
    "elapsedMs": 117.93516700000009,
    "outcome": "success"
  },
  {
    "seq": 45,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB009",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:46.832Z",
    "offsetMs": 372.81595800000014,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "abe6ec69b97038a10456a899611265ddc0c983a7f9d55dc91986e6c7e38da230";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":42},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":44},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":45}} as const;
export const projectionSha256 = "d562b06a4cfebf7bce6463ab3c3ba980133fbd734a77698ed0a6df98a7e10980";
