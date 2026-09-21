import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP038",
  "inputSha256": "882b2a1cd5d33c22aecf8b6f0510d8af1ee891977c80fb08c654ee1fff503208",
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
      "end": 27,
      "text": "Travel document fee due now"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 49,
      "text": "Your boarding document requires a payment today. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 49,
      "end": 124,
      "text": "Purchase a voucher and reply with the voucher number to avoid a travel ban."
    }
  ],
  "passA": {
    "requestSha256": "3acfa18c4abb7347bca8fb6fcacbe5f53a09b77374427828c2eb5a3db7d5e2f0",
    "capturedAt": "2026-09-20T23:43:29.329Z",
    "elapsedMs": 192.81033300000126,
    "successfulAttemptElapsedMs": 191.24445800000103,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.44
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.98
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.74
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.98
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.47
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.53
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.49
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
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "mixed_or_unclear": 0,
            "informational": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.94,
            "mixed_or_unknown": 0.02,
            "independently_established": 0.03,
            "no_sensitive_action": 0.01
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 3284,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "f366592d361d274bf71313ef4a33d96c171369a145e9068f69b776c497b0a564",
    "capturedAt": "2026-09-20T23:43:29.481Z",
    "elapsedMs": 149.49524999999994,
    "successfulAttemptElapsedMs": 147.48070900000312,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.48,
            "NONE": 0.45,
            "body:0": 0.06,
            "subject:0": 0.01
          },
          "confidence": 0.3
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.99,
            "NONE": 0,
            "body:0": 0.01,
            "subject:0": 0
          },
          "confidence": 0.98
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.98,
            "NONE": 0.02,
            "body:0": 0,
            "subject:0": 0
          },
          "confidence": 0.97
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.94,
            "NONE": 0,
            "body:0": 0.03,
            "subject:0": 0.03
          },
          "confidence": 0.92
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.1,
            "NONE": 0.72,
            "body:0": 0.15,
            "subject:0": 0.03
          },
          "confidence": 0.62
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.44,
            "NONE": 0.56,
            "body:0": 0,
            "subject:0": 0
          },
          "confidence": 0.4
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.41000000000000003,
            "NONE": 0.37,
            "body:0": 0.21,
            "subject:0": 0.01
          },
          "confidence": 0.2
        }
      },
      "usage": {
        "input_tokens": 2393,
        "output_tokens": 397
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 345.76708399999916,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "low_confidence",
        "segmentId": null
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
        "segmentId": "body:1"
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
        "status": "low_confidence",
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
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 678,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP038",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:29.136Z",
    "offsetMs": 0.9984170000025188
  },
  {
    "seq": 679,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP038",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:29.328Z",
    "offsetMs": 192.81187499999942,
    "elapsedMs": 191.24445800000103,
    "outcome": "success"
  },
  {
    "seq": 680,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP038",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:29.333Z",
    "offsetMs": 197.14670900000056
  },
  {
    "seq": 681,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP038",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:29.481Z",
    "offsetMs": 345.49900000000343,
    "elapsedMs": 147.48070900000312,
    "outcome": "success"
  },
  {
    "seq": 682,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP038",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:29.481Z",
    "offsetMs": 345.8184590000019,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "b2654ead1bfc9777629af0a86aa6cb2a43c6ee42022bb7a3bafdaa81f958f69e";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":679},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":681},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":682}} as const;
export const projectionSha256 = "b6c2d946039ea5dad48c8e8146ff1b5a1398e8c26890968d532ecfa582652b30";
