import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP042",
  "inputSha256": "2c2a8dc245d685ccc7ec0a88b1c57899ef564e5293db65dd8f553cf3860ba4f2",
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
      "end": 26,
      "text": "Please help me immediately"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 31,
      "text": "I am stranded and cannot call. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 31,
      "end": 132,
      "text": "Buy gift cards and send the numbers in reply so I can pay for transportation without alerting anyone."
    }
  ],
  "passA": {
    "requestSha256": "af816792b656c18bc6a608a2ff12e73af782d36ed9cd59f057e91ca732aa4f1a",
    "capturedAt": "2026-09-20T23:43:30.832Z",
    "elapsedMs": 166.38591599999927,
    "successfulAttemptElapsedMs": 164.82533300000068,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.04
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.43
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.98
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.97
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.93
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.07
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.94
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.22
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
            "active_request": 1,
            "informational": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.93,
            "no_sensitive_action": 0.02,
            "mixed_or_unknown": 0.01,
            "independently_established": 0.04
          },
          "confidence": 0.9
        }
      },
      "usage": {
        "input_tokens": 3288,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "6aa03c08ab2d1d4790300aa1deb85047e47c5ceb79e719d0cd6242e513e2fbae",
    "capturedAt": "2026-09-20T23:43:30.978Z",
    "elapsedMs": 144.25716699999612,
    "successfulAttemptElapsedMs": 143.0922919999939,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0.81,
            "NONE": 0.19,
            "body:0": 0
          },
          "confidence": 0.75
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:1": 1,
            "NONE": 0,
            "body:0": 0
          },
          "confidence": 1
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:1": 1,
            "NONE": 0,
            "body:0": 0
          },
          "confidence": 1
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "subject:0": 0.93,
            "body:1": 0.07,
            "NONE": 0,
            "body:0": 0
          },
          "confidence": 0.9
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0.98,
            "NONE": 0.01,
            "body:0": 0.01
          },
          "confidence": 0.98
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0.26,
            "NONE": 0.74,
            "body:0": 0
          },
          "confidence": 0.66
        }
      },
      "usage": {
        "input_tokens": 2129,
        "output_tokens": 343
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 312.82229099999677,
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
        "status": "selected",
        "segmentId": "subject:0"
      },
      "authority_claim": {
        "status": "not_requested",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "advance_fee_or_refund_trap": {
        "status": "none_selected",
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
    "seq": 698,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP042",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:30.667Z",
    "offsetMs": 1.010707999994338
  },
  {
    "seq": 699,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP042",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:30.832Z",
    "offsetMs": 166.38624999999593,
    "elapsedMs": 164.82533300000068,
    "outcome": "success"
  },
  {
    "seq": 700,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP042",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:30.834Z",
    "offsetMs": 168.807624999994
  },
  {
    "seq": 701,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP042",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:30.978Z",
    "offsetMs": 312.3943749999962,
    "elapsedMs": 143.0922919999939,
    "outcome": "success"
  },
  {
    "seq": 702,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP042",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:30.978Z",
    "offsetMs": 312.91074999999546,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "370a9872e32ba0257cf72ee495c0ff5a7eb53d819efd0e1bb96d208c1265674e";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":699},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":701},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":702}} as const;
export const projectionSha256 = "b8582bc8c1f98dde78f42c5ad69f4b139516c98e72bbeee780212fd3818ff13a";
