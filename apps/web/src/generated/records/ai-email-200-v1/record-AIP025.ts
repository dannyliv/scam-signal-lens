import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP025",
  "inputSha256": "c2cc00dfdce4787a10f69a9cbf1a8576eb16a455f45ce7a3b2dc9abfda64df4e",
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
      "end": 40,
      "text": "Your donation record needs a card update"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 131,
      "text": "Your contribution receipt cannot be issued until you reply with the card number used, its security code, and your billing password."
    }
  ],
  "passA": {
    "requestSha256": "fe9b7c0cf2adf3b3a39059164d3abfb4267eea31107e207a899606e375b934c6",
    "capturedAt": "2026-09-20T23:43:25.018Z",
    "elapsedMs": 161.4948330000043,
    "successfulAttemptElapsedMs": 160.26387499999691,
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
          "noul": 0.98
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.13
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.57
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.68
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.45
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.14
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
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
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0.04,
            "sender_supplied": 0.92,
            "mixed_or_unknown": 0.03,
            "no_sensitive_action": 0.01
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 3287,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "7ee9acd4d9d52e9688cb38a4cfadf9e770ee2acb5f8719794799e7d6aaa3f521",
    "capturedAt": "2026-09-20T23:43:25.202Z",
    "elapsedMs": 182.46095799999603,
    "successfulAttemptElapsedMs": 181.2450830000016,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "body:0": 1,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "body:0": 1,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0.9,
            "NONE": 0.1
          },
          "confidence": 0.85
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.11,
            "body:0": 0.34,
            "NONE": 0.55
          },
          "confidence": 0.33
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0.2,
            "NONE": 0.8
          },
          "confidence": 0.7
        }
      },
      "usage": {
        "input_tokens": 1743,
        "output_tokens": 236
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 345.57791699999507,
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
        "status": "selected",
        "segmentId": "body:0"
      },
      "authority_claim": {
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "none_selected",
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
    "seq": 613,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP025",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:24.857Z",
    "offsetMs": 0.7550829999963753
  },
  {
    "seq": 614,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP025",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:25.018Z",
    "offsetMs": 161.49612499999785,
    "elapsedMs": 160.26387499999691,
    "outcome": "success"
  },
  {
    "seq": 615,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP025",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:25.020Z",
    "offsetMs": 163.61183299999539
  },
  {
    "seq": 616,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP025",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:25.201Z",
    "offsetMs": 345.3136249999952,
    "elapsedMs": 181.2450830000016,
    "outcome": "success"
  },
  {
    "seq": 617,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP025",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:25.202Z",
    "offsetMs": 345.63262499999837,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "871b023b359875e4ea135cd494334756abf336418b5db12c49d95747eecae5dd";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":614},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":616},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":617}} as const;
export const projectionSha256 = "8574581980e9cf02acb04702d239a006ab4f1ffcdd36f48296895620a97f3b9a";
