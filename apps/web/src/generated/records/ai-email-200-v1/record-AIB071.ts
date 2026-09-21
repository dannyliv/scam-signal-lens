import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB071",
  "inputSha256": "b0287f2d17969fd9f68821a30e5df23234c14f3719f0a34bf1d384b890c076ef",
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
      "text": "Understanding repayment options"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 84,
      "text": "The financial aid office is hosting an information session about repayment options. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 84,
      "end": 138,
      "text": "Sign up through the student events page if interested."
    }
  ],
  "passA": {
    "requestSha256": "313d23d67308d58de5a137cfad0ca9b44d829d2f6c7a430e3469ad81e6a9feb3",
    "capturedAt": "2026-09-20T23:43:04.643Z",
    "elapsedMs": 125.87887499999852,
    "successfulAttemptElapsedMs": 124.30929099999776,
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
          "noul": 0.76
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.6
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.61,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0.39
          },
          "confidence": 0.47
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.01,
            "independently_established": 0.08,
            "no_sensitive_action": 0.91,
            "mixed_or_unknown": 0
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 3282,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "2bdbf6fccc6ff4cb94b8d18909aa17aa604ed38c4695e552682d43ed2038fe95",
    "capturedAt": "2026-09-20T23:43:04.763Z",
    "elapsedMs": 115.87504100000297,
    "successfulAttemptElapsedMs": 113.02929199999926,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0.88,
            "NONE": 0.08,
            "body:1": 0.04
          },
          "confidence": 0.84
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "NONE": 0.1,
            "body:1": 0.9
          },
          "confidence": 0.86
        }
      },
      "usage": {
        "input_tokens": 898,
        "output_tokens": 118
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 246.17479200000162,
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
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 346,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB071",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:04.518Z",
    "offsetMs": 0.9157090000007884
  },
  {
    "seq": 347,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB071",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:04.642Z",
    "offsetMs": 125.88124999999854,
    "elapsedMs": 124.30929099999776,
    "outcome": "success"
  },
  {
    "seq": 348,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB071",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:04.649Z",
    "offsetMs": 131.97750000000087
  },
  {
    "seq": 349,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB071",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:04.762Z",
    "offsetMs": 245.921709000002,
    "elapsedMs": 113.02929199999926,
    "outcome": "success"
  },
  {
    "seq": 350,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB071",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:04.763Z",
    "offsetMs": 246.2295840000006,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "f1c95b8b99b049ba3481c05fcaaed77f90271c51a25aa911a05c98bb12220f98";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":347},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":349},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":350}} as const;
export const projectionSha256 = "a97b40b9ef9e998774d6bce3fc80a1a5b8076e04845b4d5d9404b417ddaafdf5";
