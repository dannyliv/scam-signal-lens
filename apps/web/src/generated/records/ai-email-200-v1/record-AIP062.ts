import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP062",
  "inputSha256": "51b4878e448359637c323abe799d6cfd53659125be18c8ca667fcd0b9084c806",
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
      "end": 30,
      "text": "Service interruption scheduled"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 105,
      "text": "Prevent disconnection by sending your mobile account PIN and the current texted code to our service desk."
    }
  ],
  "passA": {
    "requestSha256": "96fcff7a682e10c3f7f51096e9383788e6839d52024ca646e9ade8154f962736",
    "capturedAt": "2026-09-20T23:43:38.001Z",
    "elapsedMs": 170.893250000001,
    "successfulAttemptElapsedMs": 168.47683300000062,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.96
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.86
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.06
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.5
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.92
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.9
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.65
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.01,
            "sender_supplied": 0.78,
            "independently_established": 0.12,
            "mixed_or_unknown": 0.09
          },
          "confidence": 0.71
        }
      },
      "usage": {
        "input_tokens": 3282,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "40b1073b64f04a91420545b4c937e3be5298814950cf743ece36ed3a6d19a70b",
    "capturedAt": "2026-09-20T23:43:38.119Z",
    "elapsedMs": 115.95254199999908,
    "successfulAttemptElapsedMs": 114.38524999999936,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 1,
            "NONE": 0,
            "subject:0": 0
          },
          "confidence": 1
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.89,
            "NONE": 0.11,
            "subject:0": 0
          },
          "confidence": 0.83
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.89,
            "NONE": 0.11,
            "subject:0": 0
          },
          "confidence": 0.84
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.98,
            "NONE": 0,
            "subject:0": 0.02
          },
          "confidence": 0.97
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.96,
            "NONE": 0.02,
            "subject:0": 0.02
          },
          "confidence": 0.94
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.53,
            "NONE": 0.47,
            "subject:0": 0
          },
          "confidence": 0.28
        }
      },
      "usage": {
        "input_tokens": 2011,
        "output_tokens": 290
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 289.8808749999953,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H1",
      "H5"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "selected",
        "segmentId": "body:0"
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:0"
      },
      "payment_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "unusual_payment_routing": {
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 798,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP062",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:37.831Z",
    "offsetMs": 1.4872079999986454
  },
  {
    "seq": 799,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP062",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:38.000Z",
    "offsetMs": 170.89454199999454,
    "elapsedMs": 168.47683300000062,
    "outcome": "success"
  },
  {
    "seq": 800,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP062",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:38.004Z",
    "offsetMs": 174.62254199999734
  },
  {
    "seq": 801,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP062",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:38.119Z",
    "offsetMs": 289.5997079999943,
    "elapsedMs": 114.38524999999936,
    "outcome": "success"
  },
  {
    "seq": 802,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP062",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:38.119Z",
    "offsetMs": 289.94120799999655,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0d5a6ddd6658dba8d12d80242341bd1fe6a5321ba5b9003e8abd7523e694b73a";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":799},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":801},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":802}} as const;
export const projectionSha256 = "ddd7733c6f5708d810c049c66e626dfbd790f4e4b5f87c9fb6c893f3720d8475";
