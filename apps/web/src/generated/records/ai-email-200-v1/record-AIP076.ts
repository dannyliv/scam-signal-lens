import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP076",
  "inputSha256": "6ae9049a5d2f91a002f0493e3a1e04cb0620f24fed6968afce1c004cefb948cc",
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
      "end": 27,
      "text": "Private travel favor needed"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 19,
      "text": "I am boarding now. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 19,
      "end": 96,
      "text": "Wire the travel advance to the account below and keep the request between us."
    }
  ],
  "passA": {
    "requestSha256": "87537cd9c912e777b93cb1daad05c33feab5dba51e022ca04e6f8011bfe43563",
    "capturedAt": "2026-09-20T23:43:42.043Z",
    "elapsedMs": 178.8692910000027,
    "successfulAttemptElapsedMs": 177.85216699999728,
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
          "noul": 0.69
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.98
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.52
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.88
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.16
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.88
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.38
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
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.08
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0,
            "sender_supplied": 1,
            "no_sensitive_action": 0,
            "independently_established": 0
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 3280,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "9e4f9c19de2c88757217dfb8a1fe682e831185ae8bd47b9b6373c60744aa9055",
    "capturedAt": "2026-09-21T00:56:45.296Z",
    "elapsedMs": 148.01145800000018,
    "successfulAttemptElapsedMs": 145.87304199999994,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "body:1": 0.95,
            "subject:0": 0,
            "NONE": 0.05
          },
          "confidence": 0.93
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "body:1": 1,
            "subject:0": 0,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "body:1": 0.95,
            "subject:0": 0,
            "NONE": 0.05
          },
          "confidence": 0.93
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.77,
            "body:1": 0.22,
            "subject:0": 0,
            "NONE": 0.01
          },
          "confidence": 0.69
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "body:1": 0.96,
            "subject:0": 0.01,
            "NONE": 0.03
          },
          "confidence": 0.95
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "body:1": 0.7,
            "subject:0": 0,
            "NONE": 0.3
          },
          "confidence": 0.59
        }
      },
      "usage": {
        "input_tokens": 2073,
        "output_tokens": 345
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 527.2629169999998,
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
        "status": "selected",
        "segmentId": "body:0"
      },
      "authority_claim": {
        "status": "not_requested",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "advance_fee_or_refund_trap": {
        "status": "low_confidence",
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
    "seq": 866,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP076",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:41.865Z",
    "offsetMs": 0.6165419999961159
  },
  {
    "seq": 867,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP076",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:42.043Z",
    "offsetMs": 178.8681249999936,
    "elapsedMs": 177.85216699999728,
    "outcome": "success"
  },
  {
    "seq": 868,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP076",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:42.046Z",
    "offsetMs": 182.01620899999398
  },
  {
    "seq": 869,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP076",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:42.241Z",
    "offsetMs": 377.19974999999977,
    "elapsedMs": 194.55091700000048,
    "outcome": "success"
  },
  {
    "seq": 870,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP076",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:42.242Z",
    "offsetMs": 377.39245899999514,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 1007,
    "captureSessionId": "e25842bf-8fab-457a-8c0a-d76f81eb2d72",
    "exampleId": "AIP076",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:56:45.149Z",
    "offsetMs": 2.783625000000029
  },
  {
    "seq": 1008,
    "captureSessionId": "e25842bf-8fab-457a-8c0a-d76f81eb2d72",
    "exampleId": "AIP076",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:56:45.296Z",
    "offsetMs": 149.32416700000022,
    "elapsedMs": 145.87304199999994,
    "outcome": "success"
  },
  {
    "seq": 1009,
    "captureSessionId": "e25842bf-8fab-457a-8c0a-d76f81eb2d72",
    "exampleId": "AIP076",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:56:45.296Z",
    "offsetMs": 149.8340830000002,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "98be9f68a1e5544dd1c637c6cb3d48854969fc932933358d7fea0205f4d3c989";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":867},"passB":{"captureSessionId":"e25842bf-8fab-457a-8c0a-d76f81eb2d72","seq":1008},"complete":{"captureSessionId":"e25842bf-8fab-457a-8c0a-d76f81eb2d72","seq":1009}} as const;
export const projectionSha256 = "d8de8c86d1f67283bba5af1cf7b90f88b548a51bbb6c3a65df32aeafc83a80db";
