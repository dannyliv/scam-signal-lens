import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP070",
  "inputSha256": "cfc9a6a4d1375e10f91fc8ba7e172b322275419d50e04d1abb0d090a00d9e85f",
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
      "text": "Visa processing fee is due"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 116,
      "text": "Buy a prepaid voucher for the visa processing fee and email the voucher number before your application is cancelled."
    }
  ],
  "passA": {
    "requestSha256": "b133b8b342e61482103caa594edc3b19f17bb79c4f03e3372902cfbe71e24b9e",
    "capturedAt": "2026-09-20T23:43:40.326Z",
    "elapsedMs": 190.94383299999754,
    "successfulAttemptElapsedMs": 189.04891599999974,
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
          "noul": 0.31
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.97
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.7
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.93
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.29
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.44
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.39
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
          "noul": 0.06
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
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.83,
            "mixed_or_unknown": 0.09,
            "independently_established": 0.05,
            "no_sensitive_action": 0.03
          },
          "confidence": 0.77
        }
      },
      "usage": {
        "input_tokens": 3281,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "f031f6f629088206fb0daf2d3dc71fbbfd4ff4de3d0a5e3a36a8bdc344d231bc",
    "capturedAt": "2026-09-20T23:43:40.472Z",
    "elapsedMs": 144.90258399999584,
    "successfulAttemptElapsedMs": 143.25670900000114,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.01,
            "body:0": 0.51,
            "NONE": 0.48
          },
          "confidence": 0.26
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "body:0": 1,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0.97,
            "NONE": 0.03
          },
          "confidence": 0.96
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "body:0": 1,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.1,
            "body:0": 0.1,
            "NONE": 0.8
          },
          "confidence": 0.7
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0.38,
            "NONE": 0.62
          },
          "confidence": 0.42
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.03,
            "body:0": 0.7,
            "NONE": 0.27
          },
          "confidence": 0.55
        }
      },
      "usage": {
        "input_tokens": 2271,
        "output_tokens": 334
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 337.9386669999949,
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
        "status": "none_selected",
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
    "seq": 838,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP070",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:40.136Z",
    "offsetMs": 1.2475829999966663
  },
  {
    "seq": 839,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP070",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:40.325Z",
    "offsetMs": 190.94633299999987,
    "elapsedMs": 189.04891599999974,
    "outcome": "success"
  },
  {
    "seq": 840,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP070",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:40.328Z",
    "offsetMs": 193.8330419999984
  },
  {
    "seq": 841,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP070",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:40.472Z",
    "offsetMs": 337.74183300000004,
    "elapsedMs": 143.25670900000114,
    "outcome": "success"
  },
  {
    "seq": 842,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP070",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:40.472Z",
    "offsetMs": 337.98408299999574,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "760b51d16b84f2ce7fc19ef427e9e4338e94aee3906a37de78485632ac0d7d79";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":839},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":841},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":842}} as const;
export const projectionSha256 = "06f31b9f8f82fcb1ae155529f661634a356944d65021a841b777a6576666e3c5";
