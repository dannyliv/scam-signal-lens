import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB052",
  "inputSha256": "7bf06d9cffd8995291e9a5795498195636ff8468a5bac5b9b447d67db5eac960",
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
      "end": 19,
      "text": "Lab access reminder"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 77,
      "text": "Please wear the required safety equipment before entering the chemistry lab. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 77,
      "end": 124,
      "text": "The safety checklist is posted at the entrance."
    }
  ],
  "passA": {
    "requestSha256": "ef47e259ec59e6b0172adaf117f34f5c15500269ea1b7ee0e782bc9531e7948e",
    "capturedAt": "2026-09-20T23:42:59.029Z",
    "elapsedMs": 203.5685420000009,
    "successfulAttemptElapsedMs": 201.98733300000094,
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
          "noul": 0.14
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.21
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
          "noul": 0.47
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.96,
            "educational_or_quoted": 0,
            "informational": 0.04,
            "mixed_or_unclear": 0
          },
          "confidence": 0.95
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0,
            "independently_established": 0,
            "no_sensitive_action": 1,
            "mixed_or_unknown": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3280,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "1e6bf565631275bc6f8b85b702577364f9780c077b3ae63e962b89ba60eae2de",
    "capturedAt": "2026-09-20T23:42:59.256Z",
    "elapsedMs": 224.9239579999994,
    "successfulAttemptElapsedMs": 223.7242499999993,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.7,
            "body:1": 0.01,
            "body:0": 0.2,
            "subject:0": 0.09
          },
          "confidence": 0.6
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.76,
            "body:1": 0.23,
            "body:0": 0.01,
            "subject:0": 0
          },
          "confidence": 0.67
        }
      },
      "usage": {
        "input_tokens": 892,
        "output_tokens": 114
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 430.53441700000076,
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
    "seq": 252,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB052",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:58.826Z",
    "offsetMs": 0.9063340000011522
  },
  {
    "seq": 253,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB052",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:59.029Z",
    "offsetMs": 203.56958400000076,
    "elapsedMs": 201.98733300000094,
    "outcome": "success"
  },
  {
    "seq": 254,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB052",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:59.032Z",
    "offsetMs": 206.039084
  },
  {
    "seq": 255,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB052",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:59.256Z",
    "offsetMs": 430.2688340000004,
    "elapsedMs": 223.7242499999993,
    "outcome": "success"
  },
  {
    "seq": 256,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB052",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:59.256Z",
    "offsetMs": 430.5801250000004,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "5e9fc4c33a4904e5014eff8506079fdd9d17a01b2fd9e1273f57b3a91558cf1a";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":253},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":255},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":256}} as const;
export const projectionSha256 = "7bb4676950d331535b2bf6efcb118c089eec04875986d74ecf2a410fa37414a9";
