import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIBSEED05",
  "inputSha256": "ffe712ca60301f6efab36e016579fb32b1e114c97a1ac8dee411953fdd62ab81",
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
      "end": 36,
      "text": "Interview times for your application"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 44,
      "text": "Thank you for applying to our support role. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 44,
      "end": 105,
      "text": "Are you available Tuesday or Thursday for a video interview? "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 105,
      "end": 183,
      "text": "You can confirm the invitation through the careers account where you applied. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 183,
      "end": 270,
      "text": "There is no applicant fee, and we are not requesting banking information at this stage."
    },
    {
      "id": "userContext:0",
      "source": "userContext",
      "start": 0,
      "end": 87,
      "text": "I submitted an application for this role through the employer’s careers site yesterday."
    }
  ],
  "passA": {
    "requestSha256": "f8a4b7df4129e280e135d5c1ea22c58e2c958f85e883c65f00a27d9d7f514273",
    "capturedAt": "2026-09-20T23:43:13.228Z",
    "elapsedMs": 170.4670839999999,
    "successfulAttemptElapsedMs": 168.78562500000044,
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
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.07
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.8
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.88
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
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "independently_established",
          "probabilities": {
            "no_sensitive_action": 0.33,
            "independently_established": 0.66,
            "sender_supplied": 0.01,
            "mixed_or_unknown": 0
          },
          "confidence": 0.55
        }
      },
      "usage": {
        "input_tokens": 3326,
        "output_tokens": 353
      }
    }
  },
  "passB": {
    "requestSha256": "29f3095759358dd56181c9cbc87d2a78bb6c69da15e6f4d32a6d85ba115c3cfc",
    "capturedAt": "2026-09-20T23:43:13.397Z",
    "elapsedMs": 166.58266699999876,
    "successfulAttemptElapsedMs": 164.94908399999986,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.48,
            "subject:0": 0.02,
            "body:2": 0.21,
            "NONE": 0.2,
            "body:3": 0.03,
            "body:1": 0.06
          },
          "confidence": 0.38
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:0": 0,
            "subject:0": 0,
            "body:2": 1,
            "NONE": 0,
            "body:3": 0,
            "body:1": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 1056,
        "output_tokens": 154
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 339.7615829999995,
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
        "segmentId": "body:2"
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
    "seq": 455,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED05",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:13.058Z",
    "offsetMs": 1.0772499999984575
  },
  {
    "seq": 456,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED05",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:13.228Z",
    "offsetMs": 170.46800000000076,
    "elapsedMs": 168.78562500000044,
    "outcome": "success"
  },
  {
    "seq": 457,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED05",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:13.231Z",
    "offsetMs": 173.89924999999857
  },
  {
    "seq": 458,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED05",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:13.397Z",
    "offsetMs": 339.5251250000001,
    "elapsedMs": 164.94908399999986,
    "outcome": "success"
  },
  {
    "seq": 459,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED05",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:13.397Z",
    "offsetMs": 339.81687500000044,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "23d195a502c43f7912ec8ac6e0888fc5035d983f89d98b23eed900e8314db3db";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":456},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":458},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":459}} as const;
export const projectionSha256 = "419fbd23974e7abd9fbddaffbd0eb4385a391e2c8b4844a10e74030507977836";
