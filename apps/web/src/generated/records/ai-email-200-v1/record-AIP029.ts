import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP029",
  "inputSha256": "f7d52cc64fa1d114af529488942f7ff502aca977a423153288802316ec294a6b",
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
      "text": "SIM transfer request detected"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 115,
      "text": "Stop the transfer by replying with your account PIN, password, and the latest verification code sent to your phone."
    }
  ],
  "passA": {
    "requestSha256": "960d047d28fd4d08174c261844327aabb0ac8e2c0d5cfb9ca2a9d98b62cda0c9",
    "capturedAt": "2026-09-20T23:43:26.361Z",
    "elapsedMs": 173.80658299999777,
    "successfulAttemptElapsedMs": 172.23479200000293,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.98
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.94
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.2
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.79
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.33
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.73
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.07
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.99,
            "educational_or_quoted": 0.01,
            "mixed_or_unclear": 0,
            "informational": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.01,
            "independently_established": 0.06,
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.92
          },
          "confidence": 0.9
        }
      },
      "usage": {
        "input_tokens": 3284,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "ea7ae60a18871a16c472babcfcfcafefac70b6b85bbfe78e7732f78b16af8f4c",
    "capturedAt": "2026-09-20T23:43:26.464Z",
    "elapsedMs": 100.02637500000128,
    "successfulAttemptElapsedMs": 98.23970800000097,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 1,
            "NONE": 0,
            "subject:0": 0
          },
          "confidence": 1
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.94,
            "NONE": 0.06,
            "subject:0": 0
          },
          "confidence": 0.91
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.64,
            "NONE": 0.32,
            "subject:0": 0.04
          },
          "confidence": 0.45
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.09,
            "NONE": 0.68,
            "subject:0": 0.23
          },
          "confidence": 0.52
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.59,
            "NONE": 0.41,
            "subject:0": 0
          },
          "confidence": 0.38
        }
      },
      "usage": {
        "input_tokens": 1725,
        "output_tokens": 238
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 276.3702919999996,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H1"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "selected",
        "segmentId": "body:0"
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:0"
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "low_confidence",
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
    "adviceTemplateIds": [
      "avoid_sender_route",
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 633,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP029",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:26.188Z",
    "offsetMs": 1.00224999999773
  },
  {
    "seq": 634,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP029",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:26.361Z",
    "offsetMs": 173.80695800000103,
    "elapsedMs": 172.23479200000293,
    "outcome": "success"
  },
  {
    "seq": 635,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP029",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:26.364Z",
    "offsetMs": 177.2094169999982
  },
  {
    "seq": 636,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP029",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:26.463Z",
    "offsetMs": 276.0619999999981,
    "elapsedMs": 98.23970800000097,
    "outcome": "success"
  },
  {
    "seq": 637,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP029",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:26.464Z",
    "offsetMs": 276.42208299999766,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a139be142b40883e781499a66825059ee0d3e8d5709c2291bbbb47d928630942";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":634},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":636},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":637}} as const;
export const projectionSha256 = "6864dfbaa77727c7bd724c1f2985244e5d448d48dd8c024c1ac579726f8f2b9c";
