import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIBSEED03",
  "inputSha256": "579032d24c756a108e11ed03ca6860ac38f7e4df38b203b296e802b65bfda8b5",
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
      "end": 94,
      "text": "For Riley’s birthday, would you pick up a $25 bookstore gift card on your next shopping trip? "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 94,
      "end": 196,
      "text": "Bring the physical card to lunch on Friday, and submit the receipt through our usual expense process. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 196,
      "end": 235,
      "text": "Keep the birthday surprise until lunch."
    },
    {
      "id": "userContext:0",
      "source": "userContext",
      "start": 0,
      "end": 82,
      "text": "This is in our ongoing team chat with the colleague organizing the birthday lunch."
    }
  ],
  "passA": {
    "requestSha256": "74bf439ca50c533257590b4bb1d99d313d874faefe0f7793a2b9a78a307114dd",
    "capturedAt": "2026-09-20T23:43:12.159Z",
    "elapsedMs": 134.05912499999977,
    "successfulAttemptElapsedMs": 132.50741700000071,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.01
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.03
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.95
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.46
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.37
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
          "noul": 0.57
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
            "informational": 0,
            "active_request": 1
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.49,
            "independently_established": 0.49,
            "sender_supplied": 0.01
          },
          "confidence": 0.33
        }
      },
      "usage": {
        "input_tokens": 3318,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "25b0221cc95114a5cd0f79dab30709561b8fc9bd957de63af8a525de58c579b6",
    "capturedAt": "2026-09-20T23:43:12.275Z",
    "elapsedMs": 113.40491699999984,
    "successfulAttemptElapsedMs": 111.85525000000052,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0,
            "body:1": 0.01,
            "NONE": 0,
            "body:0": 0.99
          },
          "confidence": 0.99
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0.02,
            "body:1": 0.62,
            "NONE": 0.3,
            "body:0": 0.06
          },
          "confidence": 0.49
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0.01,
            "body:1": 0.68,
            "NONE": 0.27,
            "body:0": 0.04
          },
          "confidence": 0.57
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "body:1": 0.93,
            "NONE": 0.07,
            "body:0": 0
          },
          "confidence": 0.9
        }
      },
      "usage": {
        "input_tokens": 1598,
        "output_tokens": 228
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 249.73925000000236,
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
        "status": "selected",
        "segmentId": "body:0"
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
        "status": "low_confidence",
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
    "seq": 445,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED03",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:12.026Z",
    "offsetMs": 0.9629170000007434
  },
  {
    "seq": 446,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED03",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:12.159Z",
    "offsetMs": 134.05933300000106,
    "elapsedMs": 132.50741700000071,
    "outcome": "success"
  },
  {
    "seq": 447,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED03",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:12.162Z",
    "offsetMs": 137.07645799999955
  },
  {
    "seq": 448,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED03",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:12.274Z",
    "offsetMs": 249.52991699999984,
    "elapsedMs": 111.85525000000052,
    "outcome": "success"
  },
  {
    "seq": 449,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED03",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:12.275Z",
    "offsetMs": 249.79804200000217,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "f20bd5c538b400125c44aac29c99de6df924b532595c40515288c79664808c45";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":446},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":448},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":449}} as const;
export const projectionSha256 = "fb008162e7a15d58c2be111b726b199701571cd87b1af4b7250d228b0778b9d7";
