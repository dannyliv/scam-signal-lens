import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP080",
  "inputSha256": "00c25e02c39004c5221883ad69303f51696f482ca91339bb1f0f20228d9f9ac8",
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
      "text": "Encrypted message requires your password"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 98,
      "text": "The secure message cannot open until you email your password and the code from your authenticator."
    }
  ],
  "passA": {
    "requestSha256": "cb2a7cfdfcdae3564f0ea83a4c926d594e63b4e3ff88b553a2ca65759a6d642e",
    "capturedAt": "2026-09-20T23:43:43.489Z",
    "elapsedMs": 235.7397920000003,
    "successfulAttemptElapsedMs": 234.0986669999984,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.99
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.71
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
          "noul": 0.55
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.2
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.39
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
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
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.02,
            "sender_supplied": 0.76,
            "independently_established": 0.15,
            "mixed_or_unknown": 0.07
          },
          "confidence": 0.68
        }
      },
      "usage": {
        "input_tokens": 3283,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "a44957cf00cd7cb7130bd787e753924188bf4f2bb671930e85353d10262c8045",
    "capturedAt": "2026-09-20T23:43:43.695Z",
    "elapsedMs": 203.27412499999627,
    "successfulAttemptElapsedMs": 201.4155829999945,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.01,
            "body:0": 0.99,
            "NONE": 0
          },
          "confidence": 0.99
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.02,
            "body:0": 0.78,
            "NONE": 0.2
          },
          "confidence": 0.67
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.01,
            "body:0": 0.74,
            "NONE": 0.25
          },
          "confidence": 0.6
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0.21,
            "NONE": 0.79
          },
          "confidence": 0.69
        }
      },
      "usage": {
        "input_tokens": 1442,
        "output_tokens": 191
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 442.87454199999775,
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
    "seq": 886,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP080",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:43.253Z",
    "offsetMs": 1.0541250000023865
  },
  {
    "seq": 887,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP080",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:43.488Z",
    "offsetMs": 235.73837500000081,
    "elapsedMs": 234.0986669999984,
    "outcome": "success"
  },
  {
    "seq": 888,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP080",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:43.492Z",
    "offsetMs": 240.43566699999792
  },
  {
    "seq": 889,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP080",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:43.694Z",
    "offsetMs": 442.54133400000137,
    "elapsedMs": 201.4155829999945,
    "outcome": "success"
  },
  {
    "seq": 890,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP080",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:43.695Z",
    "offsetMs": 442.9532919999983,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "abacbe806e22a095e73bc0621d031b1a77559dd627347a2dcb5ff81f76fa2869";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":887},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":889},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":890}} as const;
export const projectionSha256 = "15e0ad34caf6f6d8acf6e3ab90ba8df7a7849daf89fa6c6790d673d60c10f181";
