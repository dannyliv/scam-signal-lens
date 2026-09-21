import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIPSEED07",
  "inputSha256": "19b8b8bba68bee88a07b37411ee870bd1f51d33345ddebab16f80435d025f776",
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
      "end": 32,
      "text": "Immediate device repair required"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 52,
      "text": "We detected a dangerous infection on your computer. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 52,
      "end": 174,
      "text": "Install the remote-control utility at hxxps://device-rescue.example/connect and give our technician the session code now. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 174,
      "end": 255,
      "text": "Keep this session open and do not contact another repair service until we finish."
    },
    {
      "id": "userContext:0",
      "source": "userContext",
      "start": 0,
      "end": 86,
      "text": "I did not request technical support and have not observed any reported problem myself."
    }
  ],
  "passA": {
    "requestSha256": "bd8b05f181a99e0780d7b449e456501cd4f8bb08c47e2cf0bb8ef5be779e7e72",
    "capturedAt": "2026-09-20T23:43:48.621Z",
    "elapsedMs": 176.87345799999457,
    "successfulAttemptElapsedMs": 175.57266700000037,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.56
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.08
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.95
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.84
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.95
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 0,
            "active_request": 1,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0,
            "sender_supplied": 1,
            "independently_established": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3323,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "6f0ca88f981a059eb9251c75a0006603c256211937c239138693702367d9db23",
    "capturedAt": "2026-09-20T23:43:48.784Z",
    "elapsedMs": 160.6831250000032,
    "successfulAttemptElapsedMs": 158.93654100000276,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.09,
            "body:0": 0,
            "subject:0": 0,
            "body:2": 0,
            "body:1": 0.91
          },
          "confidence": 0.88
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0,
            "body:0": 0.01,
            "subject:0": 0.38,
            "body:2": 0.13,
            "body:1": 0.48
          },
          "confidence": 0.35
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.05,
            "body:0": 0.09,
            "subject:0": 0.01,
            "body:2": 0.06,
            "body:1": 0.79
          },
          "confidence": 0.74
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "NONE": 0,
            "body:0": 0,
            "subject:0": 0,
            "body:2": 1,
            "body:1": 0
          },
          "confidence": 1
        },
        "evidence_remote_access_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0,
            "body:0": 0,
            "body:2": 0,
            "subject:0": 0,
            "body:1": 1
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 2007,
        "output_tokens": 330
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 339.6793749999997,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H4"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "selected",
        "segmentId": "body:1"
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "verification_bypass": {
        "status": "selected",
        "segmentId": "body:2"
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
    "seq": 956,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED07",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:48.445Z",
    "offsetMs": 0.8312500000029104
  },
  {
    "seq": 957,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED07",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:48.621Z",
    "offsetMs": 176.87529099999665,
    "elapsedMs": 175.57266700000037,
    "outcome": "success"
  },
  {
    "seq": 958,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED07",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:48.624Z",
    "offsetMs": 179.60345799999777
  },
  {
    "seq": 959,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED07",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:48.784Z",
    "offsetMs": 339.2183329999971,
    "elapsedMs": 158.93654100000276,
    "outcome": "success"
  },
  {
    "seq": 960,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED07",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:48.784Z",
    "offsetMs": 339.7746659999975,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1766af11958bede1fecad2da24103a779d1645c6788791b46a6ea2457c5faa00";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":957},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":959},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":960}} as const;
export const projectionSha256 = "ba0d3bf3f9a764287c1e2def623aa592d7e80f3f1f4539404258b848bca61c63";
