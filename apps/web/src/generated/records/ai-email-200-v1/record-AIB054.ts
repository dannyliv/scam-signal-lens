import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB054",
  "inputSha256": "83f353ca29491615ce9ece2edec6f4b697b221509f4d54452ff596a23d23aab2",
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
      "text": "You moved from the event waitlist"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 38,
      "text": "A seat is available for the workshop. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 38,
      "end": 110,
      "text": "Confirm attendance from the event account you used to join the waitlist."
    }
  ],
  "passA": {
    "requestSha256": "5939f94f790118262cf7754ff817f07183b24b32051ab3ce7db70ac807c6c2c2",
    "capturedAt": "2026-09-20T23:42:59.735Z",
    "elapsedMs": 152.8023749999993,
    "successfulAttemptElapsedMs": 151.8262080000004,
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
          "noul": 0.04
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
          "noul": 0.29
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.27
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.78
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "mixed_or_unclear": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.35,
            "no_sensitive_action": 0.59,
            "sender_supplied": 0.03,
            "mixed_or_unknown": 0.03
          },
          "confidence": 0.46
        }
      },
      "usage": {
        "input_tokens": 3287,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "f242a0ee75b266abd11358e56a754224d514e9e8d1c6ca9eaab646fef625b822",
    "capturedAt": "2026-09-20T23:42:59.852Z",
    "elapsedMs": 113.90604200000053,
    "successfulAttemptElapsedMs": 112.3150829999995,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.01,
            "body:0": 0.03,
            "body:1": 0.38,
            "NONE": 0.58
          },
          "confidence": 0.44
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.16,
            "subject:0": 0.01,
            "body:0": 0.01,
            "NONE": 0.82
          },
          "confidence": 0.76
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:1": 1,
            "NONE": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 1202,
        "output_tokens": 170
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 269.7832920000001,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "request_route_low_confidence"
    ],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "not_requested",
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "none_selected",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "not_requested",
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
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 262,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB054",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:59.582Z",
    "offsetMs": 0.592583999999988
  },
  {
    "seq": 263,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB054",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:59.735Z",
    "offsetMs": 152.80116699999962,
    "elapsedMs": 151.8262080000004,
    "outcome": "success"
  },
  {
    "seq": 264,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB054",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:59.738Z",
    "offsetMs": 156.54412500000035
  },
  {
    "seq": 265,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB054",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:59.851Z",
    "offsetMs": 269.5619999999999,
    "elapsedMs": 112.3150829999995,
    "outcome": "success"
  },
  {
    "seq": 266,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB054",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:59.852Z",
    "offsetMs": 269.82616699999926,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "3cef93f56bea236d92728037a635c87467da3066aaefc936dc855c0454c7822f";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":263},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":265},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":266}} as const;
export const projectionSha256 = "62f30b6d11b54637dd390b54ea50ee5c243b4c2ecaf4c134c7bf5bc0bb428f48";
