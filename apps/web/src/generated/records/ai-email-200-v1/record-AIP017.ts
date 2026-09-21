import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP017",
  "inputSha256": "ce47f6e3ac8bf5d99299d2fd8e1a9a166bb19b1e9a6ba43832b834e52a3bbce5",
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
      "text": "Estate funds await your assistance"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 44,
      "text": "A distant relative left funds in your name. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 44,
      "end": 143,
      "text": "Pay the legal filing charge by wire today and send a photo of your identification to begin release."
    }
  ],
  "passA": {
    "requestSha256": "aebeee3b5e3c45c892823349598b748b7dfb9b4e2319ea8b9be26857a55a3d94",
    "capturedAt": "2026-09-20T23:43:22.504Z",
    "elapsedMs": 134.9764170000053,
    "successfulAttemptElapsedMs": 133.61324999999488,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.98
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.98
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.16
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.94
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.91
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.41
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.97
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.16
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.02
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.93,
            "independently_established": 0,
            "no_sensitive_action": 0.01,
            "mixed_or_unknown": 0.06
          },
          "confidence": 0.9
        }
      },
      "usage": {
        "input_tokens": 3290,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "ef02605d64fc12134f5ee1f88958af34f77a315d75c6abdaf3aa0c36e7a45c47",
    "capturedAt": "2026-09-20T23:43:22.608Z",
    "elapsedMs": 101.49004199999763,
    "successfulAttemptElapsedMs": 99.78583400000207,
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
        "evidence_payment_request": {
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
            "NONE": 0,
            "body:1": 1,
            "body:0": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.01,
            "NONE": 0.01,
            "body:1": 0.04,
            "body:0": 0.94
          },
          "confidence": 0.93
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.79,
            "body:1": 0.21,
            "body:0": 0
          },
          "confidence": 0.72
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0,
            "body:1": 1,
            "body:0": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 2121,
        "output_tokens": 340
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 238.86595800000214,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H2",
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
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 573,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP017",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:22.370Z",
    "offsetMs": 0.8706250000032014
  },
  {
    "seq": 574,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP017",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:22.504Z",
    "offsetMs": 134.97616600000038,
    "elapsedMs": 133.61324999999488,
    "outcome": "success"
  },
  {
    "seq": 575,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP017",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:22.507Z",
    "offsetMs": 138.05429100000038
  },
  {
    "seq": 576,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP017",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:22.607Z",
    "offsetMs": 238.5189160000009,
    "elapsedMs": 99.78583400000207,
    "outcome": "success"
  },
  {
    "seq": 577,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP017",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:22.608Z",
    "offsetMs": 238.92920800000138,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a675b2ef3fff46b69a7575981a4668f05faf5afc16cbd13a44938979ac4cb09c";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":574},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":576},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":577}} as const;
export const projectionSha256 = "0f83bf6d7cb9aa53999ebbc3bbbfd1b95b925ef1ba287822f22d6da409d2deeb";
