import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP043",
  "inputSha256": "d9f4e0bed58aef3549b4830d6801437a4a0ef7785d1cebaedbec5c572ae86f2a",
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
      "end": 30,
      "text": "Vault access will be suspended"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 100,
      "text": "Confirm your master password and recovery code in reply within ten minutes to keep the vault active."
    }
  ],
  "passA": {
    "requestSha256": "2ed5abd32fa545bead622995148622eee82d7062e2f29da1cec510a0be8d6e4d",
    "capturedAt": "2026-09-20T23:43:31.111Z",
    "elapsedMs": 129.56775000000198,
    "successfulAttemptElapsedMs": 127.36633400000574,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.97
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.56
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
          "noul": 0.41
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.56
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
          "noul": 0.04
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
            "informational": 0,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.79,
            "mixed_or_unknown": 0.01,
            "independently_established": 0.19,
            "no_sensitive_action": 0.01
          },
          "confidence": 0.72
        }
      },
      "usage": {
        "input_tokens": 3279,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "319fe0ea6ab601ae893981f8d8f867a6c349fc0f081aac75dc9fdc69c75884d9",
    "capturedAt": "2026-09-20T23:43:31.318Z",
    "elapsedMs": 205.44425000000047,
    "successfulAttemptElapsedMs": 204.16779100000713,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
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
            "subject:0": 0,
            "NONE": 0.31,
            "body:0": 0.69
          },
          "confidence": 0.54
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.01,
            "NONE": 0,
            "body:0": 0.99
          },
          "confidence": 0.99
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.05,
            "NONE": 0.73,
            "body:0": 0.22
          },
          "confidence": 0.6
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.52,
            "body:0": 0.48
          },
          "confidence": 0.28
        }
      },
      "usage": {
        "input_tokens": 1695,
        "output_tokens": 236
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 337.1968329999945,
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
        "status": "low_confidence",
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
    "seq": 703,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP043",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:30.982Z",
    "offsetMs": 1.4185419999994338
  },
  {
    "seq": 704,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP043",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:31.111Z",
    "offsetMs": 129.56874999999854,
    "elapsedMs": 127.36633400000574,
    "outcome": "success"
  },
  {
    "seq": 705,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP043",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:31.113Z",
    "offsetMs": 132.21616699999868
  },
  {
    "seq": 706,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP043",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:31.318Z",
    "offsetMs": 336.9214579999971,
    "elapsedMs": 204.16779100000713,
    "outcome": "success"
  },
  {
    "seq": 707,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP043",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:31.318Z",
    "offsetMs": 337.2490419999958,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "8333e6e725ef0bdb267d4a27491428936c0114d760bc7b201d470701078c8677";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":704},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":706},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":707}} as const;
export const projectionSha256 = "8c0b7bfe36fc59a7cc7345ca9ed221675b1d2824d51c357b6f482e60a65ed261";
