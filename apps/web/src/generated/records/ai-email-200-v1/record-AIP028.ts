import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP028",
  "inputSha256": "341ef7b4d20b82d9a84416d009e61f7b89018d3746354f193f9c0110dd82f8b4",
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
      "end": 37,
      "text": "Withdrawal blocked until verification"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 28,
      "text": "Your withdrawal is blocked. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 28,
      "end": 128,
      "text": "Transfer a verification deposit to the listed wallet and provide your account password to unlock it."
    }
  ],
  "passA": {
    "requestSha256": "42ee2a6b3f15ecbc5d81906f31af9ad492d1d612a59b80839372cd563f1f1a6a",
    "capturedAt": "2026-09-20T23:43:26.017Z",
    "elapsedMs": 162.55470799999603,
    "successfulAttemptElapsedMs": 161.0164999999979,
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
          "noul": 0.9
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.98
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.75
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.61
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.41
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.45
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.95
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.03
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
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.03,
            "sender_supplied": 0.97,
            "no_sensitive_action": 0,
            "independently_established": 0
          },
          "confidence": 0.95
        }
      },
      "usage": {
        "input_tokens": 3285,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "77c6b7f4197aef957b9b53abad5979a8d2a7ca643581eb2bad2dd1844a03d459",
    "capturedAt": "2026-09-20T23:43:26.185Z",
    "elapsedMs": 165.49112500000047,
    "successfulAttemptElapsedMs": 163.84866700000566,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "subject:0": 0,
            "body:1": 1,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "subject:0": 0,
            "body:1": 0.93,
            "NONE": 0.07
          },
          "confidence": 0.9
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "subject:0": 0,
            "body:1": 1,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "subject:0": 0,
            "body:1": 0.96,
            "NONE": 0.04
          },
          "confidence": 0.94
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0.08,
            "subject:0": 0.13,
            "body:1": 0.53,
            "NONE": 0.26
          },
          "confidence": 0.36
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.04,
            "subject:0": 0.02,
            "body:1": 0.08,
            "NONE": 0.86
          },
          "confidence": 0.82
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "subject:0": 0,
            "body:1": 0.18,
            "NONE": 0.8200000000000001
          },
          "confidence": 0.75
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "subject:0": 0,
            "body:1": 1,
            "NONE": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 2707,
        "output_tokens": 454
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 330.50220799999806,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H1",
      "H2"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "selected",
        "segmentId": "body:1"
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
        "status": "none_selected",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "none_selected",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 628,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP028",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:25.855Z",
    "offsetMs": 0.9857080000001588
  },
  {
    "seq": 629,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP028",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:26.017Z",
    "offsetMs": 162.5554159999956,
    "elapsedMs": 161.0164999999979,
    "outcome": "success"
  },
  {
    "seq": 630,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP028",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:26.020Z",
    "offsetMs": 165.54279099999985
  },
  {
    "seq": 631,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP028",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:26.184Z",
    "offsetMs": 330.03545799999847,
    "elapsedMs": 163.84866700000566,
    "outcome": "success"
  },
  {
    "seq": 632,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP028",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:26.185Z",
    "offsetMs": 330.5974999999962,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "bfb5f6800e240b2fa92c714bb790ad94ae7b62e22f5f59b4b82fbddc3e0f063e";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":629},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":631},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":632}} as const;
export const projectionSha256 = "051bf8bac74d7e3723285e15c03cc198ffea37c5abf1a442d8ea526e150861ab";
