import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP012",
  "inputSha256": "3acb37c96c28e33cffbc69a68b3647dca9e6aa2cfdc03478c259ef73571eb59c",
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
      "end": 28,
      "text": "Files scheduled for deletion"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 41,
      "text": "Your stored files will be deleted today. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 41,
      "end": 132,
      "text": "Verify your identity by sending your account password and the code from your authenticator."
    }
  ],
  "passA": {
    "requestSha256": "f6de02133652f30bfd7d0cf5795e8e83a3b9ceebb3af6c2dbb0072144ae7b0af",
    "capturedAt": "2026-09-21T00:56:44.674Z",
    "elapsedMs": 183.04779200000007,
    "successfulAttemptElapsedMs": 181.330375,
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
          "noul": 0.93
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.97
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.41
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.42
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.04
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
            "no_sensitive_action": 0.02,
            "sender_supplied": 0.84,
            "mixed_or_unknown": 0.06,
            "independently_established": 0.08
          },
          "confidence": 0.78
        }
      },
      "usage": {
        "input_tokens": 3285,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "ad9302bb77681953e09acab4f22815ac488273f52a29d5a4730ea700f0ab2f8c",
    "capturedAt": "2026-09-21T00:56:44.831Z",
    "elapsedMs": 153.83804099999998,
    "successfulAttemptElapsedMs": 150.996042,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
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
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.05,
            "body:1": 0.95,
            "body:0": 0
          },
          "confidence": 0.94
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.01,
            "NONE": 0,
            "body:1": 0,
            "body:0": 0.99
          },
          "confidence": 0.98
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.02,
            "NONE": 0.64,
            "body:1": 0.18,
            "body:0": 0.16
          },
          "confidence": 0.53
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.74,
            "body:1": 0.25,
            "body:0": 0.01
          },
          "confidence": 0.66
        }
      },
      "usage": {
        "input_tokens": 1801,
        "output_tokens": 281
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 458.755250000002,
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
        "segmentId": "body:1"
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
        "segmentId": "body:0"
      },
      "authority_claim": {
        "status": "low_confidence",
        "segmentId": null
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
    "seq": 550,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP012",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:20.803Z",
    "offsetMs": 0.7170420000038575
  },
  {
    "seq": 551,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP012",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:20.920Z",
    "offsetMs": 118.30233399999997,
    "elapsedMs": 117.1654170000038,
    "outcome": "success"
  },
  {
    "seq": 552,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP012",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:20.921Z",
    "offsetMs": 118.47995900000387,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 997,
    "captureSessionId": "e25842bf-8fab-457a-8c0a-d76f81eb2d72",
    "exampleId": "AIP012",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:56:44.492Z",
    "offsetMs": 1.1698330000000396
  },
  {
    "seq": 998,
    "captureSessionId": "e25842bf-8fab-457a-8c0a-d76f81eb2d72",
    "exampleId": "AIP012",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:56:44.674Z",
    "offsetMs": 183.053542,
    "elapsedMs": 181.330375,
    "outcome": "success"
  },
  {
    "seq": 999,
    "captureSessionId": "e25842bf-8fab-457a-8c0a-d76f81eb2d72",
    "exampleId": "AIP012",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:56:44.679Z",
    "offsetMs": 187.95795800000008
  },
  {
    "seq": 1000,
    "captureSessionId": "e25842bf-8fab-457a-8c0a-d76f81eb2d72",
    "exampleId": "AIP012",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:56:44.831Z",
    "offsetMs": 339.94266700000003,
    "elapsedMs": 150.996042,
    "outcome": "success"
  },
  {
    "seq": 1001,
    "captureSessionId": "e25842bf-8fab-457a-8c0a-d76f81eb2d72",
    "exampleId": "AIP012",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:56:44.831Z",
    "offsetMs": 340.329125,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ef0682cdcde4c3ad35e2dedb1b87b9a8c33c0d3fa98f2d580f17848a83453b0e";
export const replayAnchors = {"passA":{"captureSessionId":"e25842bf-8fab-457a-8c0a-d76f81eb2d72","seq":998},"passB":{"captureSessionId":"e25842bf-8fab-457a-8c0a-d76f81eb2d72","seq":1000},"complete":{"captureSessionId":"e25842bf-8fab-457a-8c0a-d76f81eb2d72","seq":1001}} as const;
export const projectionSha256 = "eae4ed04268afb1b91f98b692d580fb23150814b3edc3d108f4744a47c174f05";
