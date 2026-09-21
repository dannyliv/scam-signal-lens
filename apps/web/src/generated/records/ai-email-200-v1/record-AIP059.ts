import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP059",
  "inputSha256": "d13f860728cf44c8fcf05d92f1b059dd0633ac3c010284f11c494a69c225066c",
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
      "end": 41,
      "text": "Shared file requires a login confirmation"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 65,
      "text": "Open the attached file and enter your email password to view it. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 65,
      "end": 126,
      "text": "Complete this within twenty minutes before access is removed."
    }
  ],
  "passA": {
    "requestSha256": "21a02499a04b5c703b2f5e064d736ef6bb2c605682c8580b464f3c85b963eb2d",
    "capturedAt": "2026-09-20T23:43:36.599Z",
    "elapsedMs": 149.23474999999598,
    "successfulAttemptElapsedMs": 147.78995900000155,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.95
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.69
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
          "noul": 0.98
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.08
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.49
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.05,
            "independently_established": 0.01,
            "sender_supplied": 0.9,
            "no_sensitive_action": 0.04
          },
          "confidence": 0.86
        }
      },
      "usage": {
        "input_tokens": 3285,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "f9ac41fc98a80a8a227540a817c2f74ffc0f0cd35444f83aa582998aa0215957",
    "capturedAt": "2026-09-20T23:43:36.739Z",
    "elapsedMs": 137.52316599999904,
    "successfulAttemptElapsedMs": 135.76870799999597,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0,
            "subject:0": 0,
            "NONE": 0,
            "body:0": 1
          },
          "confidence": 1
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0,
            "subject:0": 0,
            "NONE": 0.25,
            "body:0": 0.75
          },
          "confidence": 0.66
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 1,
            "subject:0": 0,
            "NONE": 0,
            "body:0": 0
          },
          "confidence": 1
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.1,
            "subject:0": 0,
            "NONE": 0.86,
            "body:0": 0.04
          },
          "confidence": 0.81
        }
      },
      "usage": {
        "input_tokens": 1508,
        "output_tokens": 227
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 288.7052909999984,
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
        "segmentId": "body:1"
      },
      "authority_claim": {
        "status": "not_requested",
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
    "seq": 783,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP059",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:36.451Z",
    "offsetMs": 0.9764579999973648
  },
  {
    "seq": 784,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP059",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:36.599Z",
    "offsetMs": 149.2355000000025,
    "elapsedMs": 147.78995900000155,
    "outcome": "success"
  },
  {
    "seq": 785,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP059",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:36.602Z",
    "offsetMs": 151.9942910000027
  },
  {
    "seq": 786,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP059",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:36.738Z",
    "offsetMs": 288.4808750000011,
    "elapsedMs": 135.76870799999597,
    "outcome": "success"
  },
  {
    "seq": 787,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP059",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:36.739Z",
    "offsetMs": 288.75570799999696,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "59a64ac80026f3517e4cc16311df80a4e6fc275a4c6f9f1e0a84985e28540d79";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":784},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":786},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":787}} as const;
export const projectionSha256 = "4abc67baa89823955c02cb8dc532242b361dc3ae95a953fb70ca780eee75ae52";
