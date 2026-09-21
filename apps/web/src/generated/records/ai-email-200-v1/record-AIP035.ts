import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP035",
  "inputSha256": "e0374ea654892f15f4f727d599d9c29a1e401c8d44c99ab4be0fbe3ca3775d75",
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
      "text": "Manager needs a quick confidential favor"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 36,
      "text": "I cannot access the payment system. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 36,
      "end": 141,
      "text": "Send a wire transfer to the attached beneficiary and do not verify this request with anyone until I call."
    }
  ],
  "passA": {
    "requestSha256": "8d6c35c086e82c659a7be2aec689b125e5125b431b9919b0cb6f4a2879418596",
    "capturedAt": "2026-09-20T23:43:28.328Z",
    "elapsedMs": 160.75545899999997,
    "successfulAttemptElapsedMs": 159.4476250000007,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.03
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.56
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.98
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.72
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.71
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.96
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.98
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.36
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
          "noul": 0.17
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.09
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
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0,
            "sender_supplied": 1
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 3289,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "29b915ea415d6997c97aa0694e16040daf1554e29c6b11721fcdfdd8ee46ceb8",
    "capturedAt": "2026-09-20T23:43:28.474Z",
    "elapsedMs": 143.75666600000113,
    "successfulAttemptElapsedMs": 142.18937500000175,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0.01,
            "body:1": 0.81,
            "NONE": 0.18
          },
          "confidence": 0.75
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:1": 1,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:1": 0.92,
            "NONE": 0.08
          },
          "confidence": 0.9
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0.23,
            "body:0": 0,
            "body:1": 0.65,
            "NONE": 0.12
          },
          "confidence": 0.54
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "subject:0": 0.99,
            "body:0": 0,
            "body:1": 0.01,
            "NONE": 0
          },
          "confidence": 0.98
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:1": 1,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0.01,
            "body:1": 0.49,
            "NONE": 0.5
          },
          "confidence": 0.34
        }
      },
      "usage": {
        "input_tokens": 2433,
        "output_tokens": 399
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 306.3483749999941,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H3"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "payment_request": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "unusual_payment_routing": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "urgency_pressure": {
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "subject:0"
      },
      "verification_bypass": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "advance_fee_or_refund_trap": {
        "status": "low_confidence",
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
    "seq": 663,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP035",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:28.168Z",
    "offsetMs": 0.7794159999975818
  },
  {
    "seq": 664,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP035",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:28.328Z",
    "offsetMs": 160.75641599999653,
    "elapsedMs": 159.4476250000007,
    "outcome": "success"
  },
  {
    "seq": 665,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP035",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:28.331Z",
    "offsetMs": 163.3302909999984
  },
  {
    "seq": 666,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP035",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:28.473Z",
    "offsetMs": 306.11858299999585,
    "elapsedMs": 142.18937500000175,
    "outcome": "success"
  },
  {
    "seq": 667,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP035",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:28.474Z",
    "offsetMs": 306.38820799999667,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d0c0c5d9f4ec94b34b40b5727ee8f77965cd634032da0d14a4e4f152d1432031";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":664},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":666},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":667}} as const;
export const projectionSha256 = "45bf3e9f081ad35c5e1ddcc47695f43c5b1c9caa875f9486ae6005f2d3e306a9";
