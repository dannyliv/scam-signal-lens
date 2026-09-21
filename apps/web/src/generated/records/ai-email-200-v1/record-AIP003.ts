import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP003",
  "inputSha256": "f04354a0b1387319dee97a4ccc8218e1fd06595d7178d194e7dcdce822331cfe",
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
      "text": "Computer infection requires remote repair"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 54,
      "text": "A technician found harmful activity on your computer. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 54,
      "end": 161,
      "text": "Install the remote support tool from the attached instructions and give the technician control immediately."
    }
  ],
  "passA": {
    "requestSha256": "050c9a0090bab21b47c6d3f1aca569a5cc78d512c4d50283f128570cb7aa1cc8",
    "capturedAt": "2026-09-20T23:43:16.223Z",
    "elapsedMs": 134.3863339999989,
    "successfulAttemptElapsedMs": 133.22258299999885,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.07
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.9
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.94
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.61
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.98
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.02
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 0,
            "active_request": 1
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.01,
            "independently_established": 0,
            "sender_supplied": 0.99,
            "mixed_or_unknown": 0
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 3286,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "b4d7550149503a96e5f020b722f1e316f249950765bc256c55154840af179d66",
    "capturedAt": "2026-09-20T23:43:16.356Z",
    "elapsedMs": 131.28933400000096,
    "successfulAttemptElapsedMs": 129.96487500000148,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0,
            "body:1": 1,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 0.99
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0,
            "body:1": 0.2,
            "subject:0": 0,
            "body:0": 0.8
          },
          "confidence": 0.73
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.59,
            "body:1": 0.41,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 0.44
        },
        "evidence_remote_access_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0,
            "body:1": 1,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 1483,
        "output_tokens": 226
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 267.5764159999999,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H4"
    ],
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
        "status": "selected",
        "segmentId": "body:1"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:0"
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
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 505,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP003",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:16.089Z",
    "offsetMs": 0.7489999999997963
  },
  {
    "seq": 506,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP003",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:16.223Z",
    "offsetMs": 134.38704100000177,
    "elapsedMs": 133.22258299999885,
    "outcome": "success"
  },
  {
    "seq": 507,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP003",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:16.225Z",
    "offsetMs": 136.8573749999996
  },
  {
    "seq": 508,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP003",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:16.356Z",
    "offsetMs": 267.35241600000154,
    "elapsedMs": 129.96487500000148,
    "outcome": "success"
  },
  {
    "seq": 509,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP003",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:16.356Z",
    "offsetMs": 267.62262499999997,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "2e313194f8d12fda60253ec15aa547cadb4410a8bc8bd896dbb2e352e95b8556";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":506},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":508},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":509}} as const;
export const projectionSha256 = "d49d9984a06857618ad3ef4c1c787ca55e9b2bae628c767a88fe5ec583e79c59";
