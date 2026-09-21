import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB002",
  "inputSha256": "8b06e87ec185660289c8ac2fc10335450c609f67dbc4ad7fb32b2a1eba21e797",
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
      "end": 39,
      "text": "Reminder about your Tuesday appointment"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 77,
      "text": "This is a reminder of your appointment at Harbor Clinic on Tuesday at 10:30. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 77,
      "end": 158,
      "text": "If you need to reschedule, call the number already listed in your patient portal."
    }
  ],
  "passA": {
    "requestSha256": "d998c56764ccf7d1993898ab6438914bf6ed81db645367a66d28c2eb79c76389",
    "capturedAt": "2026-09-20T23:42:44.346Z",
    "elapsedMs": 162.352083,
    "successfulAttemptElapsedMs": 160.877208,
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
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.2
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.75
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
          "noul": 0.94
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0.01,
            "informational": 0.63,
            "active_request": 0.36
          },
          "confidence": 0.51
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "independently_established": 0.49,
            "no_sensitive_action": 0.51,
            "sender_supplied": 0
          },
          "confidence": 0.34
        }
      },
      "usage": {
        "input_tokens": 3299,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "5ec018c9201e73fd65f639a725cf53509e6fd9bfe16d8bc718bc17a8ab0a704d",
    "capturedAt": "2026-09-20T23:42:44.450Z",
    "elapsedMs": 102.02324999999996,
    "successfulAttemptElapsedMs": 100.72850000000005,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.14,
            "body:1": 0.15,
            "body:0": 0.7,
            "subject:0": 0.01
          },
          "confidence": 0.6
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0,
            "body:1": 1,
            "body:0": 0,
            "subject:0": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 949,
        "output_tokens": 118
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 267.019584,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence",
      "request_route_low_confidence"
    ],
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
        "segmentId": "body:1"
      },
      "analyzer_instruction": {
        "status": "not_requested",
        "segmentId": null
      }
    },
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 6,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB002",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:44.184Z",
    "offsetMs": 0.8039999999999736
  },
  {
    "seq": 7,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB002",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:44.345Z",
    "offsetMs": 162.36058400000002,
    "elapsedMs": 160.877208,
    "outcome": "success"
  },
  {
    "seq": 8,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB002",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:44.348Z",
    "offsetMs": 165.32654200000002
  },
  {
    "seq": 9,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB002",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:44.450Z",
    "offsetMs": 266.68833399999994,
    "elapsedMs": 100.72850000000005,
    "outcome": "success"
  },
  {
    "seq": 10,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB002",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:44.450Z",
    "offsetMs": 267.084959,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "f1a3bccecccb7d9093471baf1a962567dd4e143f5c0d0a700a493267ef92b1aa";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":7},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":9},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":10}} as const;
export const projectionSha256 = "dab9e5531d9354767e53c1502ae88634159d72aa78064a70f973ac7219eaf70d";
