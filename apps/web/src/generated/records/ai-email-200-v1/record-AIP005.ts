import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP005",
  "inputSha256": "ab11710a2a5931a1e07b398ca6c653e1fc9afe88bf0ffa134e8dfa44211a70bc",
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
      "end": 34,
      "text": "You were selected for a cash award"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 21,
      "text": "Your award is ready. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 21,
      "end": 132,
      "text": "Purchase gift cards totaling 300 dollars to cover release fees, then email the card numbers to the claims desk."
    }
  ],
  "passA": {
    "requestSha256": "eed60fa8b88e8c158de13f8bffb0cbee23618ea013da1f366f82c0cc5c29144b",
    "capturedAt": "2026-09-20T23:43:17.460Z",
    "elapsedMs": 267.361625000005,
    "successfulAttemptElapsedMs": 265.744749999998,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.14
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.98
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.98
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.98
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.32
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.56
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.43
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.97
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.44
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
            "active_request": 1,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.01,
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "sender_supplied": 0.98
          },
          "confidence": 0.97
        }
      },
      "usage": {
        "input_tokens": 3292,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "9c4d95c7a9bfc742d742e9b478fb89d72e2ed65bc177919116a7026f8b70411b",
    "capturedAt": "2026-09-20T23:43:17.633Z",
    "elapsedMs": 170.90645799999766,
    "successfulAttemptElapsedMs": 169.24366700000246,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 1,
            "body:0": 0,
            "NONE": 0,
            "subject:0": 0
          },
          "confidence": 1
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 1,
            "NONE": 0,
            "body:0": 0,
            "subject:0": 0
          },
          "confidence": 1
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 1,
            "NONE": 0,
            "body:0": 0,
            "subject:0": 0
          },
          "confidence": 1
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.39,
            "NONE": 0.54,
            "body:0": 0.06,
            "subject:0": 0.01
          },
          "confidence": 0.39
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.59,
            "body:0": 0.05,
            "NONE": 0.28,
            "subject:0": 0.08
          },
          "confidence": 0.46
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.2,
            "NONE": 0.8,
            "body:0": 0,
            "subject:0": 0
          },
          "confidence": 0.73
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 1,
            "NONE": 0,
            "body:0": 0,
            "subject:0": 0
          },
          "confidence": 1
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.02,
            "NONE": 0.53,
            "body:0": 0.01,
            "subject:0": 0.44
          },
          "confidence": 0.37
        }
      },
      "usage": {
        "input_tokens": 2753,
        "output_tokens": 451
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 440.3222089999981,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H2",
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
        "segmentId": "body:1"
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "low_confidence",
        "segmentId": null
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
        "status": "low_confidence",
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
    "seq": 515,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP005",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:17.193Z",
    "offsetMs": 1.0167090000031749
  },
  {
    "seq": 516,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP005",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:17.460Z",
    "offsetMs": 267.3641669999997,
    "elapsedMs": 265.744749999998,
    "outcome": "success"
  },
  {
    "seq": 517,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP005",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:17.462Z",
    "offsetMs": 270.01995899999747
  },
  {
    "seq": 518,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP005",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:17.632Z",
    "offsetMs": 439.9287089999998,
    "elapsedMs": 169.24366700000246,
    "outcome": "success"
  },
  {
    "seq": 519,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP005",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:17.633Z",
    "offsetMs": 440.3888339999976,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "f5950bbbd030b5e9bf03364e88534b30400de0d2807549e1215b72a4a2961650";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":516},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":518},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":519}} as const;
export const projectionSha256 = "8587be89026157701dfd01f0af04e6c62e6b0dc18a3dbf3238dad08cb2bbe5af";
