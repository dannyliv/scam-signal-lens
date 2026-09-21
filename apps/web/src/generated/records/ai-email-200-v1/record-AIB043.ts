import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB043",
  "inputSha256": "777ef5e145a09a7b9cc58d1d4c7f5273a734a6153d2a6c6ebff48eceab1c6adc",
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
      "end": 28,
      "text": "Training completion recorded"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 54,
      "text": "Your annual safety training was recorded as complete. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 54,
      "end": 121,
      "text": "A certificate is available in the learning portal for your records."
    }
  ],
  "passA": {
    "requestSha256": "82d34ee3469bae3b0303f82ae99aba0847888c02f5c7cdccf036730f6b491b06",
    "capturedAt": "2026-09-20T23:42:56.119Z",
    "elapsedMs": 228.45416699999987,
    "successfulAttemptElapsedMs": 227.32466699999895,
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
          "noul": 0.02
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.52
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
          "noul": 0.5
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 0,
            "informational": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.98,
            "mixed_or_unknown": 0,
            "independently_established": 0.02,
            "sender_supplied": 0
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 3280,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "2f90968b4a8b19301f492d421de498d4d83810bb4d3f983226f7c0241561f48f",
    "capturedAt": "2026-09-20T23:42:56.255Z",
    "elapsedMs": 133.41825000000063,
    "successfulAttemptElapsedMs": 131.77912500000093,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.3,
            "subject:0": 0.03,
            "body:1": 0.08,
            "NONE": 0.59
          },
          "confidence": 0.44
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0.01,
            "subject:0": 0,
            "body:1": 0.64,
            "NONE": 0.35
          },
          "confidence": 0.52
        }
      },
      "usage": {
        "input_tokens": 892,
        "output_tokens": 116
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 364.50033299999996,
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
        "status": "low_confidence",
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
    "seq": 207,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB043",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:55.891Z",
    "offsetMs": 0.648417000000336
  },
  {
    "seq": 208,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB043",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:56.119Z",
    "offsetMs": 228.45395800000006,
    "elapsedMs": 227.32466699999895,
    "outcome": "success"
  },
  {
    "seq": 209,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB043",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:56.122Z",
    "offsetMs": 231.8952500000014
  },
  {
    "seq": 210,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB043",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:56.254Z",
    "offsetMs": 364.408875000001,
    "elapsedMs": 131.77912500000093,
    "outcome": "success"
  },
  {
    "seq": 211,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB043",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:56.255Z",
    "offsetMs": 364.52495799999997,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "650ffe51de02b8740724b6f8885544be603fcd9f207969cb5583d87c0fb611c9";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":208},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":210},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":211}} as const;
export const projectionSha256 = "3433e8497a8a017abcf1809d7dd2c630e7d8789c0c6f9ecf0e7895c6fbbad5ab";
