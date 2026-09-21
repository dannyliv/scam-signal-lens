import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB076",
  "inputSha256": "b93c2353dfcf40ccdb77d2af724ab0ed74f378508ff42ae645781cd1512d1db6",
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
      "end": 22,
      "text": "Optional feedback form"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 60,
      "text": "Your instructor invites optional feedback about the course. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 60,
      "end": 124,
      "text": "Use the learning system survey link you already see after class."
    }
  ],
  "passA": {
    "requestSha256": "d4f0dede6bb8c930590e2822749d6385f1511a68ab83cc2e80f08342dab36e52",
    "capturedAt": "2026-09-20T23:43:06.699Z",
    "elapsedMs": 134.3380419999994,
    "successfulAttemptElapsedMs": 132.62525000000096,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.02
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.81
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.76
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
            "educational_or_quoted": 0,
            "informational": 0.3,
            "active_request": 0.7
          },
          "confidence": 0.6
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.34,
            "sender_supplied": 0,
            "no_sensitive_action": 0.66,
            "mixed_or_unknown": 0
          },
          "confidence": 0.54
        }
      },
      "usage": {
        "input_tokens": 3280,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "b3abadcf059bceb193e9f6dd2743a5804d587cdaac1cf59eeeb3f483220159cb",
    "capturedAt": "2026-09-20T23:43:07.065Z",
    "elapsedMs": 363.24275000000125,
    "successfulAttemptElapsedMs": 361.5751249999994,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.01,
            "NONE": 0.03,
            "body:0": 0.96,
            "subject:0": 0
          },
          "confidence": 0.95
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 1,
            "body:0": 0,
            "NONE": 0,
            "subject:0": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 892,
        "output_tokens": 118
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 500.63350000000355,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence",
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
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 371,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB076",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:06.565Z",
    "offsetMs": 1.0536670000001322
  },
  {
    "seq": 372,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB076",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:06.698Z",
    "offsetMs": 134.33795800000007,
    "elapsedMs": 132.62525000000096,
    "outcome": "success"
  },
  {
    "seq": 373,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB076",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:06.702Z",
    "offsetMs": 138.16270800000348
  },
  {
    "seq": 374,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB076",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:07.065Z",
    "offsetMs": 500.4013750000013,
    "elapsedMs": 361.5751249999994,
    "outcome": "success"
  },
  {
    "seq": 375,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB076",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:07.065Z",
    "offsetMs": 500.69287500000064,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0e16e80c2b014b02ef23d8c689eba4979d32a773b127b7b57f4dc108cffb3a45";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":372},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":374},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":375}} as const;
export const projectionSha256 = "ac464a70d29f8d82623d01bfc8dc995550ca098e539fe53001b1daf977b9bf8c";
