import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP046",
  "inputSha256": "3dac2d8fb8c0e58acc5b3f7c3be80e8472eb03935d19b56652d24bfcaa9969cd",
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
      "end": 26,
      "text": "Reply with your reset code"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 45,
      "text": "We sent a password reset code to your phone. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 45,
      "end": 122,
      "text": "Forward the code and your current password so our agent can finish the reset."
    }
  ],
  "passA": {
    "requestSha256": "db5b2857226ec338973bbf433a95efc334ec3920cdb6718992e8a33034bc33ec",
    "capturedAt": "2026-09-20T23:43:32.154Z",
    "elapsedMs": 156.9031249999971,
    "successfulAttemptElapsedMs": 155.18150000000605,
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
          "noul": 0.44
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
          "noul": 0.13
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.86
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.55
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.07
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "educational_or_quoted": 0,
            "active_request": 1,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.88,
            "no_sensitive_action": 0.01,
            "independently_established": 0.08,
            "mixed_or_unknown": 0.03
          },
          "confidence": 0.84
        }
      },
      "usage": {
        "input_tokens": 3286,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "9e7420335b796c416c473a84ef1287ffca4a620e1ba13d47030c13c527a2c83c",
    "capturedAt": "2026-09-20T23:43:32.300Z",
    "elapsedMs": 144.70283400000335,
    "successfulAttemptElapsedMs": 143.56104200000118,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.95,
            "body:0": 0,
            "NONE": 0,
            "subject:0": 0.05
          },
          "confidence": 0.93
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.38,
            "body:0": 0,
            "NONE": 0.61,
            "subject:0": 0.01
          },
          "confidence": 0.48
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.86,
            "body:0": 0.07,
            "NONE": 0.07,
            "subject:0": 0
          },
          "confidence": 0.81
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.31,
            "body:0": 0,
            "NONE": 0.68,
            "subject:0": 0.01
          },
          "confidence": 0.57
        }
      },
      "usage": {
        "input_tokens": 1519,
        "output_tokens": 225
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 303.2002500000017,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H1"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "sensitive_data_request": {
        "status": "low_confidence",
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
        "segmentId": "body:1"
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
      "avoid_sender_route",
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 718,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP046",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:31.998Z",
    "offsetMs": 1.1403340000033495
  },
  {
    "seq": 719,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP046",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:32.154Z",
    "offsetMs": 156.90587500000402,
    "elapsedMs": 155.18150000000605,
    "outcome": "success"
  },
  {
    "seq": 720,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP046",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:32.156Z",
    "offsetMs": 158.85995900000125
  },
  {
    "seq": 721,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP046",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:32.300Z",
    "offsetMs": 302.9015839999993,
    "elapsedMs": 143.56104200000118,
    "outcome": "success"
  },
  {
    "seq": 722,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP046",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:32.300Z",
    "offsetMs": 303.27612500000396,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "80d6c1efc24db39575c932346cc52a92b909eb46cfb678e7deb5fa389fb7c717";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":719},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":721},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":722}} as const;
export const projectionSha256 = "b1fd2a81779f7dcbf209faa8dbed1946d0e860aafe312a22abfd943f8531f489";
