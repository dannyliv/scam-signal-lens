import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB033",
  "inputSha256": "822a3be0ff42220ec3edd051a21f32c5b0492d068a92572c100008557cee2836",
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
      "end": 33,
      "text": "Updated policy document available"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 62,
      "text": "An updated policy document is ready in your customer account. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 62,
      "end": 135,
      "text": "Your coverage remains active unless you receive a separate mailed notice."
    }
  ],
  "passA": {
    "requestSha256": "441c598db634db2debbbb9df95fad2fc96579f47b838db17203429d4adcdb055",
    "capturedAt": "2026-09-20T23:42:53.044Z",
    "elapsedMs": 186.03291699999863,
    "successfulAttemptElapsedMs": 185.08358299999963,
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
          "noul": 0.03
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
          "noul": 0.06
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.46
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.1
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.71
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0,
            "active_request": 0,
            "educational_or_quoted": 0,
            "informational": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.95,
            "sender_supplied": 0,
            "independently_established": 0.05
          },
          "confidence": 0.94
        }
      },
      "usage": {
        "input_tokens": 3283,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "f146e07f7759d1a9bc30de7b0d5a71b3ee044bbe1f10cecd5e4eb417e03a1ed3",
    "capturedAt": "2026-09-20T23:42:53.189Z",
    "elapsedMs": 142.9525420000009,
    "successfulAttemptElapsedMs": 141.0991670000003,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.13,
            "body:0": 0.28,
            "NONE": 0.56,
            "subject:0": 0.03
          },
          "confidence": 0.42
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.02,
            "body:0": 0.84,
            "NONE": 0.14,
            "subject:0": 0
          },
          "confidence": 0.78
        }
      },
      "usage": {
        "input_tokens": 901,
        "output_tokens": 116
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 331.52566600000137,
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
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 158,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB033",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:52.858Z",
    "offsetMs": 0.5761660000007396
  },
  {
    "seq": 159,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB033",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:53.044Z",
    "offsetMs": 186.03129100000115,
    "elapsedMs": 185.08358299999963,
    "outcome": "success"
  },
  {
    "seq": 160,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB033",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:53.047Z",
    "offsetMs": 189.46708300000137
  },
  {
    "seq": 161,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB033",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:53.189Z",
    "offsetMs": 331.31375000000116,
    "elapsedMs": 141.0991670000003,
    "outcome": "success"
  },
  {
    "seq": 162,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB033",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:53.189Z",
    "offsetMs": 331.5745829999996,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "35d10c62837a44bd4c6f3251a7550b7fc92d89c663129e89acc91a87b1c5dc54";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":159},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":161},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":162}} as const;
export const projectionSha256 = "3f2c8d470e4bdab087dfba4c72224f77521d4a0f830ef1c99330af281901f08a";
