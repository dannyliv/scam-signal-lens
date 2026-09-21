import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP031",
  "inputSha256": "756676f43c4fb24596bf1684fbe53c81ec5076a80a543d0472ef849927a2cb7b",
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
      "end": 34,
      "text": "Use this private purchasing method"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 45,
      "text": "The usual procurement system is unavailable. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 45,
      "end": 135,
      "text": "Send the purchase amount by wire to the account below and delete this email after payment."
    }
  ],
  "passA": {
    "requestSha256": "4d6d18958a7376d0f78d9ad484c017fba10b482167d24a66f34d88eb33042d77",
    "capturedAt": "2026-09-20T23:43:26.995Z",
    "elapsedMs": 98.80225000000064,
    "successfulAttemptElapsedMs": 96.81262499999866,
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
          "noul": 0.73
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.98
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.81
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.39
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.24
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.91
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.39
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.07
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "mixed_or_unclear": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0,
            "sender_supplied": 1,
            "independently_established": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3285,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "08ea38cea0bb09bde04458e8d645d8eb5b2cd9a6f01f44dd0ec41eea5edc7e91",
    "capturedAt": "2026-09-20T23:43:27.146Z",
    "elapsedMs": 148.53870800000004,
    "successfulAttemptElapsedMs": 146.7991669999974,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.95,
            "subject:0": 0,
            "NONE": 0.05,
            "body:0": 0
          },
          "confidence": 0.93
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 1,
            "subject:0": 0,
            "NONE": 0,
            "body:0": 0
          },
          "confidence": 1
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.97,
            "subject:0": 0,
            "NONE": 0.03,
            "body:0": 0
          },
          "confidence": 0.96
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.52,
            "subject:0": 0,
            "NONE": 0.41,
            "body:0": 0.07
          },
          "confidence": 0.36
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.04,
            "subject:0": 0.01,
            "NONE": 0.68,
            "body:0": 0.27
          },
          "confidence": 0.57
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.65,
            "subject:0": 0.18,
            "NONE": 0.01,
            "body:0": 0.16
          },
          "confidence": 0.53
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.83,
            "subject:0": 0,
            "NONE": 0.17,
            "body:0": 0
          },
          "confidence": 0.76
        }
      },
      "usage": {
        "input_tokens": 2401,
        "output_tokens": 399
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 250.97920899999735,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H3"
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
        "status": "selected",
        "segmentId": "body:1"
      },
      "unusual_payment_routing": {
        "status": "selected",
        "segmentId": "body:1"
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
        "status": "low_confidence",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 643,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP031",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:26.897Z",
    "offsetMs": 1.1751250000015716
  },
  {
    "seq": 644,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP031",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:26.994Z",
    "offsetMs": 98.80308399999922,
    "elapsedMs": 96.81262499999866,
    "outcome": "success"
  },
  {
    "seq": 645,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP031",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:26.999Z",
    "offsetMs": 103.27295900000172
  },
  {
    "seq": 646,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP031",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:27.146Z",
    "offsetMs": 250.6975420000017,
    "elapsedMs": 146.7991669999974,
    "outcome": "success"
  },
  {
    "seq": 647,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP031",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:27.146Z",
    "offsetMs": 251.03149999999732,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "efda88c18c094f18b66aa1ae414faf1736f305b0cd01f6ee285513e2f4460c0c";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":644},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":646},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":647}} as const;
export const projectionSha256 = "dbb0e69005a438e399c2939c901e08dd748cba7677f655a8750c7fe5bed08fc2";
