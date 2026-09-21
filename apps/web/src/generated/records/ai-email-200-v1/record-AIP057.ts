import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP057",
  "inputSha256": "466f3ee150f415e14aaad2ae5c8caa970cc76c7f9346d46b456b86b8157ece50",
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
      "end": 38,
      "text": "New servicing account takes effect now"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 65,
      "text": "Make this month's loan payment by wire to the new account below. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 65,
      "end": 102,
      "text": "Do not use the existing payment page."
    }
  ],
  "passA": {
    "requestSha256": "a20a660749205160106601b9d53a4317717ed6cd2d5d155c58d6f9868ba4d17d",
    "capturedAt": "2026-09-20T23:43:35.910Z",
    "elapsedMs": 167.7046249999985,
    "successfulAttemptElapsedMs": 166.26054200000362,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.03
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.47
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.98
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.73
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.61
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.53
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.84
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.07
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
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
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3284,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "b813ddb1de2f84d4df88ba58ff9d1013c72d29a2cb252f587c4d4c4b7fbc840a",
    "capturedAt": "2026-09-20T23:43:36.160Z",
    "elapsedMs": 246.98995800000557,
    "successfulAttemptElapsedMs": 245.1146660000013,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.01,
            "NONE": 0.23,
            "body:1": 0.01,
            "body:0": 0.75
          },
          "confidence": 0.68
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0,
            "subject:0": 0,
            "body:1": 0,
            "body:0": 1
          },
          "confidence": 1
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.01,
            "NONE": 0.06,
            "body:1": 0.03,
            "body:0": 0.9
          },
          "confidence": 0.87
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.16,
            "subject:0": 0.09,
            "body:1": 0,
            "body:0": 0.75
          },
          "confidence": 0.67
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.2,
            "NONE": 0.67,
            "body:1": 0.01,
            "body:0": 0.12
          },
          "confidence": 0.57
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.05,
            "body:1": 0.94,
            "body:0": 0.01
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 2094,
        "output_tokens": 339
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 417.85837500000343,
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
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 773,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP057",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:35.743Z",
    "offsetMs": 0.9716669999979786
  },
  {
    "seq": 774,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP057",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:35.910Z",
    "offsetMs": 167.70379200000025,
    "elapsedMs": 166.26054200000362,
    "outcome": "success"
  },
  {
    "seq": 775,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP057",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:35.914Z",
    "offsetMs": 171.7232920000024
  },
  {
    "seq": 776,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP057",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:36.159Z",
    "offsetMs": 417.46991700000217,
    "elapsedMs": 245.1146660000013,
    "outcome": "success"
  },
  {
    "seq": 777,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP057",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:36.160Z",
    "offsetMs": 417.94654200000514,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "8e6abf5229f19b923fbdf6be44b730aa5029b87640e9693d906a78abe6596744";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":774},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":776},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":777}} as const;
export const projectionSha256 = "9bc64bbe5c0973462546e4dcf8233cfeebd32a85d3050ea276683d9910441ed5";
