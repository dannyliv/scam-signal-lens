import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP052",
  "inputSha256": "ccf743e85302138df1ecd4009ae91fb9747d58d06fa06bb3d7a522cdba710610",
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
      "end": 35,
      "text": "Mailbox migration needs credentials"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 110,
      "text": "The email migration team needs your password and authenticator code to move your mailbox before service stops."
    }
  ],
  "passA": {
    "requestSha256": "7f25e0787cde30b21440bfc35fe2c0c2f4c67e3d7de1564beec2ab8b5e609176",
    "capturedAt": "2026-09-20T23:43:34.259Z",
    "elapsedMs": 215.7781249999971,
    "successfulAttemptElapsedMs": 214.1185420000038,
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
          "noul": 0.57
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.93
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.36
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
            "educational_or_quoted": 0,
            "informational": 0,
            "active_request": 1
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0.01,
            "sender_supplied": 0.84,
            "no_sensitive_action": 0.04,
            "mixed_or_unknown": 0.11
          },
          "confidence": 0.79
        }
      },
      "usage": {
        "input_tokens": 3281,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "361c5a42dfd20d45003860aa705ff639d4f3f5ae3fbedc07ad62192fb5880277",
    "capturedAt": "2026-09-20T23:43:34.426Z",
    "elapsedMs": 165.40125000000262,
    "successfulAttemptElapsedMs": 163.5512910000034,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "body:0": 1,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.01,
            "body:0": 0.68,
            "NONE": 0.31
          },
          "confidence": 0.52
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "body:0": 1,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "body:0": 1,
            "NONE": 0
          },
          "confidence": 0.99
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0.15,
            "NONE": 0.85
          },
          "confidence": 0.77
        }
      },
      "usage": {
        "input_tokens": 1707,
        "output_tokens": 238
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 383.3101250000036,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H1"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "selected",
        "segmentId": "body:0"
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
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 748,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP052",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:34.044Z",
    "offsetMs": 1.1057080000027781
  },
  {
    "seq": 749,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP052",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:34.258Z",
    "offsetMs": 215.77912500000093,
    "elapsedMs": 214.1185420000038,
    "outcome": "success"
  },
  {
    "seq": 750,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP052",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:34.261Z",
    "offsetMs": 218.83716699999786
  },
  {
    "seq": 751,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP052",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:34.426Z",
    "offsetMs": 383.05854199999885,
    "elapsedMs": 163.5512910000034,
    "outcome": "success"
  },
  {
    "seq": 752,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP052",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:34.426Z",
    "offsetMs": 383.3603330000042,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "e57699a8185e566b97a420bb8eda26b3e8864a3b1c2677fba691642d6bd3f089";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":749},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":751},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":752}} as const;
export const projectionSha256 = "66c4018a2325282d29f315b6e81a177f2ee9c6cdca852caaffd96605ead6fc44";
