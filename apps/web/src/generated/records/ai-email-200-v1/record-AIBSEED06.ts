import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIBSEED06",
  "inputSha256": "f0e41c51049071b1127dabb938187b7f61c5efec2c4599104d5f8a4a60e12574",
  "questionBundleSha256": "e8f1e66cf768b6c7314f1f4b6ad6fe743f7e945c487259b6087353d93f311dd6",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "synthetic_sanitized",
  "policySha256": "3435135d6058476d4262ecbc936abf95af4993b455dfab35adc8b17f3fe6ad6a",
  "requestedModel": "jev-1.13.0",
  "segments": [
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 41,
      "text": "Is the bicycle still available for $300? "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 41,
      "end": 153,
      "text": "I can meet at the community center Saturday, inspect it, and pay the agreed amount in cash when we exchange it. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 153,
      "end": 218,
      "text": "I do not need your email, bank details, or any verification code."
    },
    {
      "id": "userContext:0",
      "source": "userContext",
      "start": 0,
      "end": 70,
      "text": "This message is inside the marketplace thread for my bicycle listing. "
    },
    {
      "id": "userContext:1",
      "source": "userContext",
      "start": 70,
      "end": 90,
      "text": "We have not met yet."
    }
  ],
  "passA": {
    "requestSha256": "d2288489878dd3b9ac564699a17c5385672bacecaf0a05055da2b41d3b6edfc7",
    "capturedAt": "2026-09-20T23:43:13.548Z",
    "elapsedMs": 149.47895900000003,
    "successfulAttemptElapsedMs": 148.0457499999975,
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
          "noul": 0.03
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.11
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.06
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.7
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.04,
            "mixed_or_unclear": 0.01,
            "active_request": 0.95,
            "educational_or_quoted": 0
          },
          "confidence": 0.93
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.28,
            "sender_supplied": 0.02,
            "no_sensitive_action": 0.69,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.59
        }
      },
      "usage": {
        "input_tokens": 3323,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "2c16ff3cdc4f8e99f4a1d49fcc31a61f57d534bbe6f67f857a32e41aef8869c8",
    "capturedAt": "2026-09-20T23:43:13.726Z",
    "elapsedMs": 176.22145799999998,
    "successfulAttemptElapsedMs": 174.80295899999692,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 0.59,
            "body:0": 0,
            "body:1": 0.02,
            "NONE": 0.39
          },
          "confidence": 0.45
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0.01,
            "body:0": 0,
            "body:1": 0.88,
            "NONE": 0.11
          },
          "confidence": 0.84
        }
      },
      "usage": {
        "input_tokens": 988,
        "output_tokens": 120
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 327.38645899999756,
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
        "status": "not_requested",
        "segmentId": null
      },
      "authority_claim": {
        "status": "not_requested",
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
    "seq": 460,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED06",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:13.400Z",
    "offsetMs": 0.9024589999971795
  },
  {
    "seq": 461,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED06",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:13.548Z",
    "offsetMs": 149.48129199999676,
    "elapsedMs": 148.0457499999975,
    "outcome": "success"
  },
  {
    "seq": 462,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED06",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:13.551Z",
    "offsetMs": 151.7870839999996
  },
  {
    "seq": 463,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED06",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:13.726Z",
    "offsetMs": 327.1863749999975,
    "elapsedMs": 174.80295899999692,
    "outcome": "success"
  },
  {
    "seq": 464,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED06",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:13.726Z",
    "offsetMs": 327.4339169999985,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "863ad383165290c8eb37d829c70b6d3032169248a197185f44aec42da5dd69cf";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":461},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":463},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":464}} as const;
export const projectionSha256 = "0f51439a5e98704d04bc7f79f07e6ad51a1121fa18e33e55b97d87cdb8961179";
