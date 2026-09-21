import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB012",
  "inputSha256": "44c5840bb13c5baf68071519f6ddd1f939a8d9d21ef1b9068a340565e1e60506",
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
      "text": "Invoice INV-2048 received for review"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 64,
      "text": "We received invoice INV-2048 and routed it to Accounts Payable. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 64,
      "end": 129,
      "text": "The vendor will receive an update through the procurement system."
    }
  ],
  "passA": {
    "requestSha256": "e9a393adb01a575742a586f556692dd321c80c140ede6d63dcb590842994900f",
    "capturedAt": "2026-09-20T23:42:47.464Z",
    "elapsedMs": 143.7271249999999,
    "successfulAttemptElapsedMs": 142.53324999999995,
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
          "noul": 0.03
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
          "noul": 0.28
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
          "noul": 0.23
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 0,
            "informational": 1,
            "mixed_or_unclear": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.95,
            "independently_established": 0.05,
            "sender_supplied": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 3294,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "8f3f502d310096c072c98c327c01ff55400586d6634267c9036d530ef89077c7",
    "capturedAt": "2026-09-20T23:42:47.573Z",
    "elapsedMs": 107.19691700000021,
    "successfulAttemptElapsedMs": 105.84287500000028,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0.15,
            "body:1": 0.02,
            "NONE": 0.83
          },
          "confidence": 0.76
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "NONE": 0.91,
            "body:1": 0.09
          },
          "confidence": 0.87
        }
      },
      "usage": {
        "input_tokens": 934,
        "output_tokens": 114
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 253.52583400000003,
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
        "status": "none_selected",
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
    "seq": 56,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB012",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:47.321Z",
    "offsetMs": 0.6870840000001408
  },
  {
    "seq": 57,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB012",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:47.464Z",
    "offsetMs": 143.7278339999998,
    "elapsedMs": 142.53324999999995,
    "outcome": "success"
  },
  {
    "seq": 58,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB012",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:47.467Z",
    "offsetMs": 146.766709
  },
  {
    "seq": 59,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB012",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:47.573Z",
    "offsetMs": 253.2209170000001,
    "elapsedMs": 105.84287500000028,
    "outcome": "success"
  },
  {
    "seq": 60,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB012",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:47.574Z",
    "offsetMs": 253.60750000000007,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "32855c1b95b5e6db2730d977ca7f28b17c242afcf15a0da8371954e479c197d7";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":57},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":59},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":60}} as const;
export const projectionSha256 = "7460d3e12571b69586cda2423fd3ff3428c8ee4c3106a5b35e84c6fca70a5b1c";
