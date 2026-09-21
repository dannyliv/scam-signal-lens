import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP023",
  "inputSha256": "ef5a011e18e230f7107d93a3cea1fc8c3560dff77a28547adb9dbf079d0b7f29",
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
      "end": 33,
      "text": "Guaranteed return available today"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 83,
      "text": "Transfer funds to the private wallet listed below before the market window closes. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 83,
      "end": 151,
      "text": "Keep this opportunity confidential while we reserve your allocation."
    }
  ],
  "passA": {
    "requestSha256": "9e0aaf1eec98e68ac1fa1a32eebd9c40979f4b291dec157df53ce8f2f2587e76",
    "capturedAt": "2026-09-20T23:43:24.286Z",
    "elapsedMs": 183.09999999999854,
    "successfulAttemptElapsedMs": 181.57179100000212,
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
          "noul": 0.57
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.98
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.8
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.95
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.08
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.78
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.75
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.94
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0,
            "sender_supplied": 1,
            "mixed_or_unknown": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 3287,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "d50c87cbbf0e2276e3d5147a22955d41606810f3ad8f16a49673266629789b89",
    "capturedAt": "2026-09-20T23:43:24.518Z",
    "elapsedMs": 229.04833299999882,
    "successfulAttemptElapsedMs": 227.29879100000107,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.28,
            "subject:0": 0,
            "body:0": 0.72,
            "body:1": 0
          },
          "confidence": 0.62
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0,
            "subject:0": 0,
            "body:0": 1,
            "body:1": 0
          },
          "confidence": 1
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.03,
            "subject:0": 0,
            "body:0": 0.97,
            "body:1": 0
          },
          "confidence": 0.96
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0,
            "subject:0": 0,
            "body:0": 1,
            "body:1": 0
          },
          "confidence": 0.99
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.06,
            "subject:0": 0,
            "body:0": 0.01,
            "body:1": 0.93
          },
          "confidence": 0.91
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.09,
            "subject:0": 0,
            "body:0": 0.91,
            "body:1": 0
          },
          "confidence": 0.88
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "NONE": 0,
            "subject:0": 1,
            "body:0": 0,
            "body:1": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 2413,
        "output_tokens": 401
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 415.38029199999437,
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
        "status": "not_requested",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "selected",
        "segmentId": "body:1"
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
        "status": "selected",
        "segmentId": "subject:0"
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
    "seq": 603,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP023",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:24.104Z",
    "offsetMs": 1.0212919999976293
  },
  {
    "seq": 604,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP023",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:24.286Z",
    "offsetMs": 183.1006669999988,
    "elapsedMs": 181.57179100000212,
    "outcome": "success"
  },
  {
    "seq": 605,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP023",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:24.290Z",
    "offsetMs": 187.03391699999338
  },
  {
    "seq": 606,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP023",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:24.518Z",
    "offsetMs": 415.05137499999546,
    "elapsedMs": 227.29879100000107,
    "outcome": "success"
  },
  {
    "seq": 607,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP023",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:24.518Z",
    "offsetMs": 415.43733399999473,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "677b7ee5486fc957d742ae767b96ed225dc167a16389c8ca3818327043e277a5";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":604},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":606},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":607}} as const;
export const projectionSha256 = "bffb493e9db7816bf69bd1e2b8de91c60f88e318152c327cd17bba35c81c720c";
