import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP019",
  "inputSha256": "4523953463eedb9adf80c77ab0f843a42262bf6b836d48cf0554256be13b63b9",
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
      "end": 39,
      "text": "Refund available from your recent visit"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 29,
      "text": "We owe you a medical refund. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 29,
      "end": 129,
      "text": "Reply with your bank account number, routing number, and date of birth to receive it this afternoon."
    }
  ],
  "passA": {
    "requestSha256": "76696cc7c529c81e3154467628f214b9e042d2eae912f65346136365bd550c1f",
    "capturedAt": "2026-09-20T23:43:23.017Z",
    "elapsedMs": 104.06529199999932,
    "successfulAttemptElapsedMs": 102.37949999999546,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.1
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.98
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.17
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.17
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.81
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.79
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.38
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.11
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.04
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
            "mixed_or_unclear": 0,
            "informational": 0,
            "educational_or_quoted": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.97,
            "no_sensitive_action": 0,
            "independently_established": 0.03,
            "mixed_or_unknown": 0
          },
          "confidence": 0.95
        }
      },
      "usage": {
        "input_tokens": 3290,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "4a337dab8b363673d818f373df8b7f53a3595038488efe50e53708942c16598d",
    "capturedAt": "2026-09-20T23:43:23.148Z",
    "elapsedMs": 127.82837499999732,
    "successfulAttemptElapsedMs": 126.07900000000518,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0,
            "body:1": 1,
            "body:0": 0
          },
          "confidence": 1
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.02,
            "body:1": 0.98,
            "body:0": 0
          },
          "confidence": 0.98
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.05,
            "NONE": 0.14,
            "body:1": 0.02,
            "body:0": 0.79
          },
          "confidence": 0.72
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.84,
            "body:1": 0.16,
            "body:0": 0
          },
          "confidence": 0.79
        }
      },
      "usage": {
        "input_tokens": 1520,
        "output_tokens": 226
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 235.0547499999957,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H5"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:1"
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
        "segmentId": "body:1"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:0"
      },
      "verification_bypass": {
        "status": "none_selected",
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
    "seq": 583,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP019",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:22.914Z",
    "offsetMs": 1.1440829999992275
  },
  {
    "seq": 584,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP019",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:23.017Z",
    "offsetMs": 104.06549999999697,
    "elapsedMs": 102.37949999999546,
    "outcome": "success"
  },
  {
    "seq": 585,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP019",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:23.021Z",
    "offsetMs": 107.87016600000061
  },
  {
    "seq": 586,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP019",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:23.147Z",
    "offsetMs": 234.62645799999882,
    "elapsedMs": 126.07900000000518,
    "outcome": "success"
  },
  {
    "seq": 587,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP019",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:23.148Z",
    "offsetMs": 235.11824999999953,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "c85ae70c376da75e7085729a6895ca5a75e6534c0028fab87a2aa78952a85753";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":584},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":586},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":587}} as const;
export const projectionSha256 = "0e53fc8340acb8b2792b820a16d4cd606941d508a3a3f6052e90835670cbc2b1";
