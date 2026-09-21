import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB036",
  "inputSha256": "41e54c080a255c28bc2f100a59655285bdaf97dbf289aa1ce24df43b9f5a5dd1",
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
      "end": 32,
      "text": "Orientation checklist for Monday"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 57,
      "text": "Orientation begins at 09:00 Monday in the training room. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 57,
      "end": 150,
      "text": "Bring photo identification for building access; human resources will collect forms in person."
    }
  ],
  "passA": {
    "requestSha256": "dd815de9537efdaf48c59ab9a2b6e36014c1ab9c117276e1b818b287bd8dfefa",
    "capturedAt": "2026-09-20T23:42:53.969Z",
    "elapsedMs": 205.61050000000068,
    "successfulAttemptElapsedMs": 203.72887499999888,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.02
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.39
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
          "noul": 0.52
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.6
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
          "noul": 0.51
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
            "informational": 0.2,
            "active_request": 0.8,
            "educational_or_quoted": 0
          },
          "confidence": 0.73
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.06,
            "no_sensitive_action": 0.94,
            "sender_supplied": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 3290,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "9d88cba5b0a370e8acab466d0990a7709e18718b1f91308f9681485400721e7b",
    "capturedAt": "2026-09-20T23:42:54.220Z",
    "elapsedMs": 250.06295800000044,
    "successfulAttemptElapsedMs": 249.26774999999907,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.07,
            "body:0": 0,
            "body:1": 0.93,
            "subject:0": 0
          },
          "confidence": 0.91
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.42,
            "body:0": 0.09,
            "body:1": 0.46,
            "subject:0": 0.03
          },
          "confidence": 0.28
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.12,
            "body:0": 0.01,
            "body:1": 0.87,
            "subject:0": 0
          },
          "confidence": 0.83
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.17,
            "body:0": 0,
            "body:1": 0.83,
            "subject:0": 0
          },
          "confidence": 0.76
        }
      },
      "usage": {
        "input_tokens": 1524,
        "output_tokens": 229
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 457.03237499999886,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 173,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB036",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:53.765Z",
    "offsetMs": 1.2576669999998558
  },
  {
    "seq": 174,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB036",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:53.969Z",
    "offsetMs": 205.61512500000026,
    "elapsedMs": 203.72887499999888,
    "outcome": "success"
  },
  {
    "seq": 175,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB036",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:53.971Z",
    "offsetMs": 207.06362499999886
  },
  {
    "seq": 176,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB036",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:54.220Z",
    "offsetMs": 456.6519589999989,
    "elapsedMs": 249.26774999999907,
    "outcome": "success"
  },
  {
    "seq": 177,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB036",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:54.221Z",
    "offsetMs": 457.12616700000035,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "b1b5ba10fc49aa407ef92734ae6f989131c77669525a96002e201c75ec6c4969";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":174},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":176},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":177}} as const;
export const projectionSha256 = "fc901588198119b28eadf7ecde21798fee256727e9f6bf9fe908057b0e2beae6";
