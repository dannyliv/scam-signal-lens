import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB088",
  "inputSha256": "6af711356db66aaf1883af6e33ccf8ff0b91fc64a57ec23e2b26487713f4b78b",
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
      "end": 29,
      "text": "How delivery protection works"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 68,
      "text": "Delivery protection details are available in the order help center. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 68,
      "end": 125,
      "text": "Do not send card information by email to change coverage."
    }
  ],
  "passA": {
    "requestSha256": "3bb7a61e61e1253b8f0903c2d60e9cca2fc104e5b26814d22ff49b74deef26f4",
    "capturedAt": "2026-09-20T23:43:11.379Z",
    "elapsedMs": 250.86983299999702,
    "successfulAttemptElapsedMs": 249.96462500000052,
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
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.05
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.41
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.09
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.68
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.07
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "informational": 0.93,
            "mixed_or_unclear": 0.01,
            "active_request": 0.05,
            "educational_or_quoted": 0.01
          },
          "confidence": 0.91
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "independently_established": 0.09,
            "sender_supplied": 0,
            "no_sensitive_action": 0.91
          },
          "confidence": 0.87
        }
      },
      "usage": {
        "input_tokens": 3282,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "db85a7d46095747c3c0f87cd43df4ded3db8d55d96a4dafcc080c8becef82c52",
    "capturedAt": "2026-09-20T23:43:11.474Z",
    "elapsedMs": 92.35008299999754,
    "successfulAttemptElapsedMs": 90.39416699999856,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.16,
            "NONE": 0.75,
            "subject:0": 0.01,
            "body:1": 0.08
          },
          "confidence": 0.66
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.21,
            "subject:0": 0,
            "body:0": 0.77,
            "body:1": 0.02
          },
          "confidence": 0.68
        }
      },
      "usage": {
        "input_tokens": 898,
        "output_tokens": 116
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 345.8717089999991,
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
    "seq": 430,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB088",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:11.128Z",
    "offsetMs": 0.5657920000012382
  },
  {
    "seq": 431,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB088",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:11.379Z",
    "offsetMs": 250.86716700000034,
    "elapsedMs": 249.96462500000052,
    "outcome": "success"
  },
  {
    "seq": 432,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB088",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:11.382Z",
    "offsetMs": 254.47854200000074
  },
  {
    "seq": 433,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB088",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:11.473Z",
    "offsetMs": 345.6559589999997,
    "elapsedMs": 90.39416699999856,
    "outcome": "success"
  },
  {
    "seq": 434,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB088",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:11.474Z",
    "offsetMs": 345.9182919999985,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "bbcdb13cf493d75f5b9b17ccca459732a267b08f1346574ed19c7b4c2f09f579";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":431},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":433},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":434}} as const;
export const projectionSha256 = "15aaad0e771f9b0ac2f08c7b4c7966253d0f76a916d0b215cfee4931a6334f67";
