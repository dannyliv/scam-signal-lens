import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIBSEED10",
  "inputSha256": "0705313881ae707ff1fbe757cb355b910376df3b9f2ff0700de22343a6174968",
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
      "end": 28,
      "text": "Weekend sale for subscribers"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 88,
      "text": "Our weekend sale ends Sunday night: selected notebooks are 15% off while supplies last. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 88,
      "end": 132,
      "text": "Browse the store using your usual bookmark. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 132,
      "end": 237,
      "text": "No purchase is required to keep your account, and you can unsubscribe from marketing in account settings."
    },
    {
      "id": "userContext:0",
      "source": "userContext",
      "start": 0,
      "end": 71,
      "text": "I subscribed to this shop’s marketing emails after a previous purchase."
    }
  ],
  "passA": {
    "requestSha256": "4e524a52d792fae96498e0a8cd7c198257cc7184a118598309478de5f3b6bc8b",
    "capturedAt": "2026-09-20T23:43:14.682Z",
    "elapsedMs": 133.82654200000252,
    "successfulAttemptElapsedMs": 132.49320899999657,
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
          "noul": 0.42
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.78
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.05
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.01
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.75
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 0.52,
            "active_request": 0.48,
            "educational_or_quoted": 0
          },
          "confidence": 0.36
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "independently_established": 0.17,
            "no_sensitive_action": 0.83,
            "sender_supplied": 0
          },
          "confidence": 0.77
        }
      },
      "usage": {
        "input_tokens": 3321,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "92e7b1a0237178edab507cc7e184441aba6665308322dec0d67d71999143ead2",
    "capturedAt": "2026-09-20T23:43:14.834Z",
    "elapsedMs": 149.57970800000112,
    "successfulAttemptElapsedMs": 148.18691600000238,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.3,
            "body:0": 0.3,
            "body:2": 0.01,
            "subject:0": 0.01,
            "NONE": 0.38
          },
          "confidence": 0.22
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0,
            "body:0": 1,
            "body:2": 0,
            "subject:0": 0,
            "NONE": 0
          },
          "confidence": 0.99
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.99,
            "body:0": 0,
            "body:2": 0.01,
            "subject:0": 0,
            "NONE": 0
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 1339,
        "output_tokens": 197
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 285.5405830000018,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence"
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
        "status": "low_confidence",
        "segmentId": null
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
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
    "seq": 480,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED10",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:14.549Z",
    "offsetMs": 0.8459580000017013
  },
  {
    "seq": 481,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED10",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:14.682Z",
    "offsetMs": 133.82737500000076,
    "elapsedMs": 132.49320899999657,
    "outcome": "success"
  },
  {
    "seq": 482,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED10",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:14.685Z",
    "offsetMs": 136.50074999999924
  },
  {
    "seq": 483,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED10",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:14.833Z",
    "offsetMs": 285.27695799999856,
    "elapsedMs": 148.18691600000238,
    "outcome": "success"
  },
  {
    "seq": 484,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED10",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:14.834Z",
    "offsetMs": 285.59950000000026,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d0ff3f7e5b4905ed0b0d4b0c8e693638124f34fe8f5fd75e3e4a0a62f1f353f4";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":481},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":483},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":484}} as const;
export const projectionSha256 = "7e583815dfeb5bf3ee5d66ea7bb3afa1590b11a110ed262a3aeef4b17c91e727";
