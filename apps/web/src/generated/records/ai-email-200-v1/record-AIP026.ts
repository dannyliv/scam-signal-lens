import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP026",
  "inputSha256": "7d9e10024f6e61d48571617eba0cdbcc17ac09e655e95cc9d3da8af489d2d1ae",
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
      "end": 35,
      "text": "Final legal notice requires payment"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 118,
      "text": "Avoid a court filing by buying gift cards for the settlement amount and sending photographs of the codes before 17:00."
    }
  ],
  "passA": {
    "requestSha256": "8735295ec26f6ebe0e5d2fc3f1ce2a56bb364f9d58e278b54d4350b844cba3b7",
    "capturedAt": "2026-09-20T23:43:25.373Z",
    "elapsedMs": 168.95666700000584,
    "successfulAttemptElapsedMs": 167.606749999999,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.31
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.62
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.98
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.96
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.98
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.57
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.76
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.69
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
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 1,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0.01,
            "no_sensitive_action": 0.04,
            "sender_supplied": 0.83,
            "mixed_or_unknown": 0.12
          },
          "confidence": 0.78
        }
      },
      "usage": {
        "input_tokens": 3287,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "352e931b4c30fe31b637569376fb66b6d58cd41e7e8b60e98ac2a14ed822b3f0",
    "capturedAt": "2026-09-20T23:43:25.550Z",
    "elapsedMs": 174.22520800000348,
    "successfulAttemptElapsedMs": 172.56570900000224,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.3,
            "body:0": 0.7
          },
          "confidence": 0.54
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.1,
            "body:0": 0.9
          },
          "confidence": 0.84
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0,
            "body:0": 1
          },
          "confidence": 0.99
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0,
            "body:0": 1
          },
          "confidence": 1
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0,
            "body:0": 1
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "subject:0": 0.67,
            "NONE": 0.24,
            "body:0": 0.09
          },
          "confidence": 0.51
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.42,
            "body:0": 0.58
          },
          "confidence": 0.37
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.04,
            "NONE": 0.13,
            "body:0": 0.83
          },
          "confidence": 0.75
        }
      },
      "usage": {
        "input_tokens": 2613,
        "output_tokens": 386
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 346.575582999998,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H3"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "low_confidence",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:0"
      },
      "payment_request": {
        "status": "selected",
        "segmentId": "body:0"
      },
      "unusual_payment_routing": {
        "status": "selected",
        "segmentId": "body:0"
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
        "status": "low_confidence",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 618,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP026",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:25.204Z",
    "offsetMs": 0.8909579999963171
  },
  {
    "seq": 619,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP026",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:25.372Z",
    "offsetMs": 168.9569579999952,
    "elapsedMs": 167.606749999999,
    "outcome": "success"
  },
  {
    "seq": 620,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP026",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:25.377Z",
    "offsetMs": 173.1592909999963
  },
  {
    "seq": 621,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP026",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:25.550Z",
    "offsetMs": 346.36779099999694,
    "elapsedMs": 172.56570900000224,
    "outcome": "success"
  },
  {
    "seq": 622,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP026",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:25.550Z",
    "offsetMs": 346.61866599999485,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "52bbeb96b2b19c078b66befbbadb6d62da9e12e91b6255fce9265f6d6d6c3133";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":619},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":621},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":622}} as const;
export const projectionSha256 = "1b4eab9acf290f9fcc88929095324f9732f83c46e816ac6036e9ca39fbad45ae";
