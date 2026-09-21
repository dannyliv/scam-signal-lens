import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIPSEED02",
  "inputSha256": "6931e11a48fde3727344de1fbf7c98388f78e90c408deb421c89672a68d8ab17",
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
      "end": 35,
      "text": "This is Harbor Bank fraud support. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 35,
      "end": 74,
      "text": "A transfer is waiting on your account. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 74,
      "end": 151,
      "text": "Reply with the six-digit sign-in code we just triggered so we can cancel it. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 151,
      "end": 199,
      "text": "Do not open the app while we secure the account."
    },
    {
      "id": "userContext:0",
      "source": "userContext",
      "start": 0,
      "end": 46,
      "text": "I did not start a sign-in or contact support. "
    },
    {
      "id": "userContext:1",
      "source": "userContext",
      "start": 46,
      "end": 85,
      "text": "The sender claims to represent my bank."
    }
  ],
  "passA": {
    "requestSha256": "43e6b464aaa835f349c31a821d5d87fa09d207a38a303681c9f07e7767bc54ad",
    "capturedAt": "2026-09-20T23:43:46.744Z",
    "elapsedMs": 153.16816700000345,
    "successfulAttemptElapsedMs": 151.44774999999936,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.98
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.82
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.07
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.93
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.98
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.89
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.06
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
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0.01,
            "mixed_or_unknown": 0,
            "sender_supplied": 0.99,
            "no_sensitive_action": 0
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 3317,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "9d7dc5c874dfedbf6fb257f80a748b5350b8ac5cc40d6d483bd7f30310c21d22",
    "capturedAt": "2026-09-20T23:43:46.925Z",
    "elapsedMs": 178.6185839999962,
    "successfulAttemptElapsedMs": 176.75979200000438,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 1,
            "NONE": 0,
            "body:3": 0,
            "body:1": 0,
            "body:0": 0
          },
          "confidence": 1
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 0.95,
            "NONE": 0.05,
            "body:3": 0,
            "body:1": 0,
            "body:0": 0
          },
          "confidence": 0.94
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 0.78,
            "NONE": 0.01,
            "body:3": 0.02,
            "body:1": 0.19,
            "body:0": 0
          },
          "confidence": 0.71
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0,
            "NONE": 0,
            "body:3": 0,
            "body:1": 0,
            "body:0": 1
          },
          "confidence": 1
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:2": 0.01,
            "NONE": 0.01,
            "body:3": 0.98,
            "body:1": 0,
            "body:0": 0
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 1978,
        "output_tokens": 330
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 334.3932089999944,
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
        "segmentId": "body:2"
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:2"
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
        "segmentId": "body:2"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:0"
      },
      "verification_bypass": {
        "status": "selected",
        "segmentId": "body:3"
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
    "seq": 931,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED02",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:46.592Z",
    "offsetMs": 1.1270000000004075
  },
  {
    "seq": 932,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED02",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:46.744Z",
    "offsetMs": 153.16829199999484,
    "elapsedMs": 151.44774999999936,
    "outcome": "success"
  },
  {
    "seq": 933,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED02",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:46.747Z",
    "offsetMs": 156.575499999999
  },
  {
    "seq": 934,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED02",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:46.925Z",
    "offsetMs": 334.0547499999957,
    "elapsedMs": 176.75979200000438,
    "outcome": "success"
  },
  {
    "seq": 935,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED02",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:46.925Z",
    "offsetMs": 334.4597089999952,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "2972a301d92db4d6e8a6d8054cd8ee14760156527ad49d8bff926f21db41ec9f";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":932},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":934},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":935}} as const;
export const projectionSha256 = "fc438e2d15567d2373d65d84c97d6ba41a9d4a217917fbb3703986930050bf4f";
