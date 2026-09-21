import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB053",
  "inputSha256": "89e0fcfbd54e369d8ea3bb2645adf724092b32d06e4043b6e2e7592b5daaa8df",
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
      "text": "Water service interruption"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 71,
      "text": "Water service will pause from 10:00 to noon while a valve is replaced. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 71,
      "end": 129,
      "text": "Building staff do not need to enter individual apartments."
    }
  ],
  "passA": {
    "requestSha256": "45a40df9d6f484379cb525d8dca614208f4e7ed85d25a20caa8b8ac56dbae055",
    "capturedAt": "2026-09-20T23:42:59.419Z",
    "elapsedMs": 160.04183300000113,
    "successfulAttemptElapsedMs": 158.49779200000012,
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
          "noul": 0.01
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
          "noul": 0.05
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.47
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
          "noul": 0.03
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
            "active_request": 0,
            "mixed_or_unclear": 0,
            "informational": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "sender_supplied": 0,
            "independently_established": 0,
            "no_sensitive_action": 1
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3288,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "deb53733e60d3bc570ad717638568ea92dc19890e36e3a493801618eae53813c",
    "capturedAt": "2026-09-20T23:42:59.580Z",
    "elapsedMs": 159.2280410000003,
    "successfulAttemptElapsedMs": 157.60308299999997,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0.02,
            "NONE": 0.43,
            "body:1": 0.47,
            "body:0": 0.08
          },
          "confidence": 0.3
        }
      },
      "usage": {
        "input_tokens": 617,
        "output_tokens": 59
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 322.1315829999985,
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
        "status": "not_requested",
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
    "seq": 257,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB053",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:59.259Z",
    "offsetMs": 0.9310829999994894
  },
  {
    "seq": 258,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB053",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:59.418Z",
    "offsetMs": 160.04137499999888,
    "elapsedMs": 158.49779200000012,
    "outcome": "success"
  },
  {
    "seq": 259,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB053",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:59.422Z",
    "offsetMs": 163.6855829999986
  },
  {
    "seq": 260,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB053",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:59.580Z",
    "offsetMs": 321.9607079999987,
    "elapsedMs": 157.60308299999997,
    "outcome": "success"
  },
  {
    "seq": 261,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB053",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:59.580Z",
    "offsetMs": 322.1745409999985,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "08119e5cfcd9b1d08fbad8b0d07bcee10ea6cc49986ebc520ebcbac8f9b41b3a";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":258},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":260},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":261}} as const;
export const projectionSha256 = "afe26c29c133c4934bef5a7ddf7920639a689f0b2b53f17d731804991b89d1ad";
