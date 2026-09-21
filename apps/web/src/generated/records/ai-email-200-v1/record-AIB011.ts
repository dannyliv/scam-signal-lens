import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB011",
  "inputSha256": "cb6bf19ab85db85d0c121d301d5a03b127a50c8dfd39c600bef033cce24ab61a",
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
      "text": "Your requested sign in code"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 61,
      "text": "Use this code only in the sign in screen you opened: 482917. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 61,
      "end": 114,
      "text": "Do not share it with anyone, including support staff."
    }
  ],
  "passA": {
    "requestSha256": "a95f5b292584a95c178fef6a21af737f754b8e343a9561ab820a93ff5b349024",
    "capturedAt": "2026-09-20T23:42:47.202Z",
    "elapsedMs": 125.54925000000003,
    "successfulAttemptElapsedMs": 124.05270799999971,
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
          "noul": 0.03
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
          "noul": 0.12
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.26
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.28
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
          "noul": 0.06
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
            "informational": 0.28,
            "active_request": 0.72,
            "educational_or_quoted": 0
          },
          "confidence": 0.61
        },
        "request_route": {
          "type": "choice",
          "choice": "independently_established",
          "probabilities": {
            "independently_established": 0.54,
            "mixed_or_unknown": 0.02,
            "no_sensitive_action": 0.3,
            "sender_supplied": 0.14
          },
          "confidence": 0.38
        }
      },
      "usage": {
        "input_tokens": 3292,
        "output_tokens": 353
      }
    }
  },
  "passB": {
    "requestSha256": "3db7581eda530d3ac0f94e15bb11c5d5349e670374b261ab0680d93f8236b9ae",
    "capturedAt": "2026-09-20T23:42:47.318Z",
    "elapsedMs": 112.82170799999994,
    "successfulAttemptElapsedMs": 111.40887500000008,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.19,
            "subject:0": 0.03,
            "NONE": 0.77,
            "body:0": 0.01
          },
          "confidence": 0.69
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.32,
            "subject:0": 0,
            "NONE": 0.67,
            "body:0": 0.01
          },
          "confidence": 0.56
        }
      },
      "usage": {
        "input_tokens": 924,
        "output_tokens": 113
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 242.47791700000016,
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
        "status": "none_selected",
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
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 51,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB011",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:47.077Z",
    "offsetMs": 0.8795000000000073
  },
  {
    "seq": 52,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB011",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:47.201Z",
    "offsetMs": 125.5578330000003,
    "elapsedMs": 124.05270799999971,
    "outcome": "success"
  },
  {
    "seq": 53,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB011",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:47.206Z",
    "offsetMs": 130.1622080000002
  },
  {
    "seq": 54,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB011",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:47.318Z",
    "offsetMs": 242.22299999999996,
    "elapsedMs": 111.40887500000008,
    "outcome": "success"
  },
  {
    "seq": 55,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB011",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:47.318Z",
    "offsetMs": 242.53099999999995,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "8d587ee33ec0ba83f25097fb9f1c670c1abfc45a3097d299c495316468f76609";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":52},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":54},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":55}} as const;
export const projectionSha256 = "f62e8ea4522a666be5be77c3a3f21653f157dffada8405042139d492eb75e0d7";
