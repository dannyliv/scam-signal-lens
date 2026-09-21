import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB041",
  "inputSha256": "e6142905a64ecfdabc44977cf85c1cffa513221f5e15cda85ee4e226d3ca1d6b",
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
      "end": 29,
      "text": "Prescription ready for pickup"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 52,
      "text": "Your prescription is ready at the pharmacy counter. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 52,
      "end": 141,
      "text": "Contact the pharmacy through the number on your prescription label if you have questions."
    }
  ],
  "passA": {
    "requestSha256": "1e06d253d6f3eac11927fe546a63af6e1860ee54f312e3e79b6290aae8d3b687",
    "capturedAt": "2026-09-20T23:42:55.533Z",
    "elapsedMs": 122.03949999999895,
    "successfulAttemptElapsedMs": 120.59791699999914,
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
          "noul": 0.05
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.53
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
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.87
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 0.11,
            "mixed_or_unclear": 0,
            "informational": 0.89
          },
          "confidence": 0.85
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.34,
            "sender_supplied": 0.02,
            "no_sensitive_action": 0.64,
            "mixed_or_unknown": 0
          },
          "confidence": 0.52
        }
      },
      "usage": {
        "input_tokens": 3286,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "301acface914c6da78bd1d4d4df1987cb54818ea62eeafa2451c4c3ddbd66c11",
    "capturedAt": "2026-09-20T23:42:55.682Z",
    "elapsedMs": 146.57625000000007,
    "successfulAttemptElapsedMs": 145.15741700000035,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.36,
            "NONE": 0.47,
            "body:0": 0.15,
            "subject:0": 0.02
          },
          "confidence": 0.3
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
        "input_tokens": 910,
        "output_tokens": 116
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 270.97533399999884,
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
    "seq": 198,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB041",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:55.412Z",
    "offsetMs": 0.8719169999985752
  },
  {
    "seq": 199,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB041",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:55.533Z",
    "offsetMs": 122.04133399999955,
    "elapsedMs": 120.59791699999914,
    "outcome": "success"
  },
  {
    "seq": 200,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB041",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:55.536Z",
    "offsetMs": 125.02275000000009
  },
  {
    "seq": 201,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB041",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:55.682Z",
    "offsetMs": 270.81866699999955,
    "elapsedMs": 145.15741700000035,
    "outcome": "success"
  },
  {
    "seq": 202,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB041",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:55.682Z",
    "offsetMs": 271.0209999999988,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "be34f20e2851277bfabd92f3a489266939ff03f16194a42c0f7320d4f05e5f66";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":199},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":201},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":202}} as const;
export const projectionSha256 = "eb41412a3cfec00f77ca79b6f9b249f456c9625840cb70206bf167e961135e86";
