import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP001",
  "inputSha256": "3e5611f6f84516e420772d4e89fe4c10acdc22ae256967a7586803398c73e7f9",
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
      "text": "Action needed for your account"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 41,
      "text": "We detected a problem with your account. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 41,
      "end": 142,
      "text": "Send your username, password, and current verification code by reply so we can remove the hold today."
    }
  ],
  "passA": {
    "requestSha256": "e27d21a831181c254bfa0910c1488286ccbb34236b1bdad996ccdf9e4a287aa2",
    "capturedAt": "2026-09-20T23:43:15.629Z",
    "elapsedMs": 186.92224999999962,
    "successfulAttemptElapsedMs": 185.77133299999696,
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
          "noul": 0.91
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
          "noul": 0.91
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.78
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.59
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "active_request": 1,
            "informational": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.91,
            "independently_established": 0.09,
            "no_sensitive_action": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 3289,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "7801aecb66f4bda2d771bde63cb5b4c6aac6d7d5deb360cc38fd81377f52ffee",
    "capturedAt": "2026-09-20T23:43:15.817Z",
    "elapsedMs": 186.20724999999948,
    "successfulAttemptElapsedMs": 184.06354099999953,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 1,
            "subject:0": 0,
            "body:0": 0,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.88,
            "subject:0": 0,
            "body:0": 0,
            "NONE": 0.12
          },
          "confidence": 0.83
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.97,
            "subject:0": 0.03,
            "body:0": 0,
            "NONE": 0
          },
          "confidence": 0.96
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.27,
            "NONE": 0.13,
            "subject:0": 0.02,
            "body:0": 0.58
          },
          "confidence": 0.44
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.49,
            "subject:0": 0,
            "body:0": 0,
            "NONE": 0.51
          },
          "confidence": 0.34
        }
      },
      "usage": {
        "input_tokens": 1825,
        "output_tokens": 283
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 375.00795800000196,
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
        "status": "not_requested",
        "segmentId": null
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
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
    "seq": 495,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP001",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:15.442Z",
    "offsetMs": 0.7440410000017437
  },
  {
    "seq": 496,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP001",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:15.629Z",
    "offsetMs": 186.92412500000137,
    "elapsedMs": 185.77133299999696,
    "outcome": "success"
  },
  {
    "seq": 497,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP001",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:15.632Z",
    "offsetMs": 190.07766600000105
  },
  {
    "seq": 498,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP001",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:15.816Z",
    "offsetMs": 374.76254100000006,
    "elapsedMs": 184.06354099999953,
    "outcome": "success"
  },
  {
    "seq": 499,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP001",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:15.817Z",
    "offsetMs": 375.04766599999857,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "487a742c09e6909bb74349d34e73114d1b4447e439bdf19e105988cbb9cb1e1c";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":496},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":498},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":499}} as const;
export const projectionSha256 = "2dbad16506db01e24338a905d5793866db07296ce780ecdaf892132a3e2765ea";
