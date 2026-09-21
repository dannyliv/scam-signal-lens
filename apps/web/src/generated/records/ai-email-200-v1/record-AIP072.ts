import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP072",
  "inputSha256": "47dce1455dc182a57924854c1798914770d006e687ca1b43dd7919067399ad48",
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
      "end": 42,
      "text": "Overpayment recovery needs your bank login"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 39,
      "text": "We must return a benefits overpayment. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 39,
      "end": 107,
      "text": "Send your bank login and password so the refund team can deposit it."
    }
  ],
  "passA": {
    "requestSha256": "fd917d6af989cc831deee2b2f9b949765a915009105a5dad0ac1a9d561c0d4ce",
    "capturedAt": "2026-09-20T23:43:40.732Z",
    "elapsedMs": 109.64533400000073,
    "successfulAttemptElapsedMs": 107.89337499999965,
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
          "noul": 0.36
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.23
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.24
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.91
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.37
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.54
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
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
            "active_request": 1,
            "mixed_or_unclear": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.03,
            "sender_supplied": 0.91,
            "independently_established": 0.01,
            "mixed_or_unknown": 0.05
          },
          "confidence": 0.87
        }
      },
      "usage": {
        "input_tokens": 3288,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "346a7ce94de2df7f701bdfcea6c486997e029b4eb11f8e0db3111320ab0b712d",
    "capturedAt": "2026-09-20T23:43:40.894Z",
    "elapsedMs": 160.13170900000114,
    "successfulAttemptElapsedMs": 158.3407920000027,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:1": 1
          },
          "confidence": 1
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.99,
            "subject:0": 0.01,
            "body:0": 0,
            "NONE": 0
          },
          "confidence": 0.99
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.39,
            "subject:0": 0.01,
            "body:0": 0.07,
            "body:1": 0.53
          },
          "confidence": 0.38
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.49,
            "subject:0": 0.02,
            "body:0": 0,
            "body:1": 0.49
          },
          "confidence": 0.32
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.83,
            "subject:0": 0.01,
            "body:0": 0.07,
            "body:1": 0.09
          },
          "confidence": 0.77
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.75,
            "subject:0": 0.01,
            "body:0": 0.22,
            "NONE": 0.02
          },
          "confidence": 0.67
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.17,
            "subject:0": 0,
            "body:0": 0,
            "NONE": 0.83
          },
          "confidence": 0.77
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.78,
            "subject:0": 0.03,
            "body:0": 0.01,
            "NONE": 0.18
          },
          "confidence": 0.71
        }
      },
      "usage": {
        "input_tokens": 2734,
        "output_tokens": 454
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 272.0127500000017,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H1",
      "H5"
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
        "status": "low_confidence",
        "segmentId": null
      },
      "unusual_payment_routing": {
        "status": "low_confidence",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "none_selected",
        "segmentId": null
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 846,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP072",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:40.623Z",
    "offsetMs": 1.1457500000033178
  },
  {
    "seq": 847,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP072",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:40.731Z",
    "offsetMs": 109.6472500000018,
    "elapsedMs": 107.89337499999965,
    "outcome": "success"
  },
  {
    "seq": 848,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP072",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:40.734Z",
    "offsetMs": 112.61787500000355
  },
  {
    "seq": 849,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP072",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:40.893Z",
    "offsetMs": 271.7197920000035,
    "elapsedMs": 158.3407920000027,
    "outcome": "success"
  },
  {
    "seq": 850,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP072",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:40.894Z",
    "offsetMs": 272.0696250000037,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "93d71032b4c818b82d686b92adb9d312faf84e93bc66b8e42aadc117ad2e3103";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":847},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":849},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":850}} as const;
export const projectionSha256 = "f1eb2c0a7a428abb57900f1cb3e393c83c417c1b962cb13d6a6b0c75e957deb5";
