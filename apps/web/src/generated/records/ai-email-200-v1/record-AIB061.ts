import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB061",
  "inputSha256": "8ef9fc36df7dff14c57c59f581a39eebd3d15175588ff4c08bbe7fe748523d28",
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
      "text": "Package room holiday schedule"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 57,
      "text": "The package room will close at 16:00 on the holiday eve. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 57,
      "end": 125,
      "text": "Items already logged will remain secure until the next business day."
    }
  ],
  "passA": {
    "requestSha256": "8d2e8570b1658cfd272ad9908754c46326a6da00dd9cdf06912ef47f86ed0045",
    "capturedAt": "2026-09-20T23:43:01.719Z",
    "elapsedMs": 103.88570799999798,
    "successfulAttemptElapsedMs": 102.38333399999829,
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
          "noul": 0.13
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.32
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "informational": 1,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 1,
            "independently_established": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3289,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "da3ee9792e08c083ef00724a2d90105af4b0582d6a1afbe287c2325d75af8a9e",
    "capturedAt": "2026-09-20T23:43:01.893Z",
    "elapsedMs": 171.42483300000094,
    "successfulAttemptElapsedMs": 169.5602089999993,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.08,
            "NONE": 0.72,
            "body:1": 0.04,
            "body:0": 0.16
          },
          "confidence": 0.64
        }
      },
      "usage": {
        "input_tokens": 619,
        "output_tokens": 57
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 278.3559580000001,
  "derived": {
    "concern": "few_warning_signs",
    "triggeredRuleIds": [],
    "contextWarnings": [],
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
        "status": "not_requested",
        "segmentId": null
      },
      "analyzer_instruction": {
        "status": "not_requested",
        "segmentId": null
      }
    },
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 296,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB061",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:01.615Z",
    "offsetMs": 0.8856250000026193
  },
  {
    "seq": 297,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB061",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:01.718Z",
    "offsetMs": 103.8863330000022,
    "elapsedMs": 102.38333399999829,
    "outcome": "success"
  },
  {
    "seq": 298,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB061",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:01.722Z",
    "offsetMs": 107.6755000000012
  },
  {
    "seq": 299,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB061",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:01.892Z",
    "offsetMs": 278.05483300000196,
    "elapsedMs": 169.5602089999993,
    "outcome": "success"
  },
  {
    "seq": 300,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB061",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:01.893Z",
    "offsetMs": 278.43575000000055,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "20a93d2f1a46f6ee6a764f76debd933c3bfea008ef5e3f8d10ae41abb79f6293";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":297},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":299},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":300}} as const;
export const projectionSha256 = "fcd684fae1bb6ccfcf9ab3da4b49ee8ccef74c064b042a67660bf530d0884486";
