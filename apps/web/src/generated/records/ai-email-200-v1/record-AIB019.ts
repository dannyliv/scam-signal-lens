import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB019",
  "inputSha256": "dfe8136f897e859b1a945e08e706afd145d2874e89ce3a41cd4c70fe9f23bb27",
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
      "text": "Locker pickup code for your order"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 33,
      "text": "Your locker pickup code is 7134. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 33,
      "end": 108,
      "text": "Enter it only at the locker when collecting the order you placed yesterday."
    }
  ],
  "passA": {
    "requestSha256": "5499186fcc9f73aab22270596d510eeb09adff9c99f313a3ef3f792eb0dd266f",
    "capturedAt": "2026-09-20T23:42:49.164Z",
    "elapsedMs": 199.54312500000015,
    "successfulAttemptElapsedMs": 198.7221669999999,
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
          "noul": 0.02
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.09
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.27
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.07
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
          "noul": 0.39
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "active_request": 0.71,
            "informational": 0.29
          },
          "confidence": 0.61
        },
        "request_route": {
          "type": "choice",
          "choice": "independently_established",
          "probabilities": {
            "independently_established": 0.38,
            "mixed_or_unknown": 0.02,
            "no_sensitive_action": 0.37,
            "sender_supplied": 0.23
          },
          "confidence": 0.17
        }
      },
      "usage": {
        "input_tokens": 3287,
        "output_tokens": 353
      }
    }
  },
  "passB": {
    "requestSha256": "3bf6ca12175daab16ef21f5c4b030b05f1eeea7b2f5dd4bbf38f1f80e1a8189f",
    "capturedAt": "2026-09-20T23:42:49.338Z",
    "elapsedMs": 172.03420900000037,
    "successfulAttemptElapsedMs": 170.35699999999997,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.02,
            "body:1": 0.06,
            "NONE": 0.91,
            "subject:0": 0.01
          },
          "confidence": 0.88
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0.01,
            "subject:0": 0,
            "body:1": 0.68,
            "NONE": 0.31
          },
          "confidence": 0.58
        }
      },
      "usage": {
        "input_tokens": 913,
        "output_tokens": 116
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 374.0809159999999,
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
        "status": "low_confidence",
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
    "seq": 89,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB019",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:48.964Z",
    "offsetMs": 0.4568329999992784
  },
  {
    "seq": 90,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB019",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:49.163Z",
    "offsetMs": 199.5419579999998,
    "elapsedMs": 198.7221669999999,
    "outcome": "success"
  },
  {
    "seq": 91,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB019",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:49.167Z",
    "offsetMs": 202.79920799999945
  },
  {
    "seq": 92,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB019",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:49.338Z",
    "offsetMs": 373.87033299999985,
    "elapsedMs": 170.35699999999997,
    "outcome": "success"
  },
  {
    "seq": 93,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB019",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:49.338Z",
    "offsetMs": 374.13545799999974,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7923281f3fd7edcea526c21a15ac50a9daf9908b945a840e65d3bca25e36a0e1";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":90},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":92},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":93}} as const;
export const projectionSha256 = "cb1dd849a1607ea90f1e14071e172c9d3df7f5cf55e16ab749edd3db086e8347";
