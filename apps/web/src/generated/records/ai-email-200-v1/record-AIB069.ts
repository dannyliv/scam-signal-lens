import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB069",
  "inputSha256": "3e2a57900a661bd6251415cb62c9468d3913e4e013de7152dab5b5b54c3100cc",
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
      "text": "Irrigation testing tomorrow"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 62,
      "text": "The garden irrigation system will be tested at dawn tomorrow. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 62,
      "end": 102,
      "text": "Avoid the east path until the test ends."
    }
  ],
  "passA": {
    "requestSha256": "ac23dfd90610331e82e70348ffe8d3c1082325f9f9bfd0fd7dd474e34c620e99",
    "capturedAt": "2026-09-20T23:43:04.126Z",
    "elapsedMs": 188.39287499999773,
    "successfulAttemptElapsedMs": 187.01808300000266,
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
          "noul": 0.01
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
          "noul": 0.67
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.1,
            "educational_or_quoted": 0,
            "active_request": 0.9,
            "mixed_or_unclear": 0
          },
          "confidence": 0.86
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 1,
            "sender_supplied": 0,
            "mixed_or_unknown": 0,
            "independently_established": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3282,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "35a4ef3d898d264c75b4e712dbc41d69401accaf6eaf5a2e80e27dcc6613a0a1",
    "capturedAt": "2026-09-20T23:43:04.225Z",
    "elapsedMs": 96.32800000000134,
    "successfulAttemptElapsedMs": 93.99145800000042,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0.01,
            "subject:0": 0,
            "NONE": 0.18,
            "body:1": 0.81
          },
          "confidence": 0.75
        }
      },
      "usage": {
        "input_tokens": 599,
        "output_tokens": 59
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 287.3765000000021,
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
        "status": "selected",
        "segmentId": "body:1"
      },
      "authority_claim": {
        "status": "not_requested",
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
    "seq": 336,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB069",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:03.938Z",
    "offsetMs": 0.8448750000025029
  },
  {
    "seq": 337,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB069",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:04.126Z",
    "offsetMs": 188.39300000000003,
    "elapsedMs": 187.01808300000266,
    "outcome": "success"
  },
  {
    "seq": 338,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB069",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:04.130Z",
    "offsetMs": 192.14800000000105
  },
  {
    "seq": 339,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB069",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:04.225Z",
    "offsetMs": 287.16279100000247,
    "elapsedMs": 93.99145800000042,
    "outcome": "success"
  },
  {
    "seq": 340,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB069",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:04.225Z",
    "offsetMs": 287.41979100000026,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "dea1b925839fc8ef1555bf3ce6f15b1bb3e4d85761511d7e364596607f7e263c";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":337},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":339},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":340}} as const;
export const projectionSha256 = "dd6a3ca12670d11641bf7299d1b0226044f2ae6439cff584c329eb348064e006";
