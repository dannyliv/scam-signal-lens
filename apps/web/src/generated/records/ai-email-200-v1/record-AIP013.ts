import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP013",
  "inputSha256": "cf66aaf91d52cb0e6a2d6137500bac56e011fa803dbfe437a50f9db4e71dc486",
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
      "end": 32,
      "text": "You are approved for remote work"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 87,
      "text": "Your position is approved once you pay the equipment enrollment fee by cryptocurrency. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 87,
      "end": 136,
      "text": "Send the transaction receipt to reserve the role."
    }
  ],
  "passA": {
    "requestSha256": "721491ccdf9f41d8911933782141c563c61ef8492be16563504e90200fbc172a",
    "capturedAt": "2026-09-20T23:43:21.130Z",
    "elapsedMs": 207.8738330000051,
    "successfulAttemptElapsedMs": 206.45937500000582,
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
          "noul": 0.52
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.98
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.96
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.51
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.81
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.44
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.96
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.11
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.02
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "active_request": 1,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0.01,
            "no_sensitive_action": 0.03,
            "mixed_or_unknown": 0.03,
            "sender_supplied": 0.93
          },
          "confidence": 0.91
        }
      },
      "usage": {
        "input_tokens": 3285,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "ba4c672ad9d38fe5b179020fe58c300c9284d3d35fc1c28b41a86960e1de758b",
    "capturedAt": "2026-09-20T23:43:21.316Z",
    "elapsedMs": 183.71937500000058,
    "successfulAttemptElapsedMs": 182.05275000000256,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.33,
            "NONE": 0.28,
            "subject:0": 0,
            "body:0": 0.39
          },
          "confidence": 0.17
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.05,
            "NONE": 0,
            "subject:0": 0,
            "body:0": 0.95
          },
          "confidence": 0.93
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0,
            "NONE": 0,
            "subject:0": 0,
            "body:0": 1
          },
          "confidence": 0.99
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.6900000000000001,
            "NONE": 0.21,
            "subject:0": 0,
            "body:0": 0.1
          },
          "confidence": 0.58
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:1": 0.01,
            "NONE": 0.1,
            "subject:0": 0.49,
            "body:0": 0.4
          },
          "confidence": 0.32
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.05,
            "NONE": 0.87,
            "subject:0": 0,
            "body:0": 0.08
          },
          "confidence": 0.82
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.01,
            "NONE": 0,
            "subject:0": 0,
            "body:0": 0.99
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 2401,
        "output_tokens": 399
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 393.645875000002,
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
        "segmentId": "body:0"
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
    "seq": 553,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP013",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:20.923Z",
    "offsetMs": 0.9036669999986771
  },
  {
    "seq": 554,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP013",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:21.130Z",
    "offsetMs": 207.87629200000083,
    "elapsedMs": 206.45937500000582,
    "outcome": "success"
  },
  {
    "seq": 555,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP013",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:21.133Z",
    "offsetMs": 210.6882919999989
  },
  {
    "seq": 556,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP013",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:21.315Z",
    "offsetMs": 393.38037500000064,
    "elapsedMs": 182.05275000000256,
    "outcome": "success"
  },
  {
    "seq": 557,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP013",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:21.316Z",
    "offsetMs": 393.6963340000002,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "68b46ecaa67cedbe20d139b7a7af0ad76ff5854bed7b18076b14a6b31763757a";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":554},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":556},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":557}} as const;
export const projectionSha256 = "08ee518277b439a94bfa6295948b1dbbc951b27664853c0ad51f6d1cd3db7d50";
