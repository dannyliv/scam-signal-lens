import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP016",
  "inputSha256": "efd5f13d9e5e4cd8cec2b04efe40409d1471f624f6c81539790026315d3e54a4",
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
      "text": "Please reroute today's payment"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 51,
      "text": "The invoice payment was sent to the wrong account. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 51,
      "end": 156,
      "text": "Use the new beneficiary details below and do not call the number on the invoice because the line is busy."
    }
  ],
  "passA": {
    "requestSha256": "42e2e5293f9b54caa2c85f0965acb8e6615053137fe3ca0eb2c7f76796fcd507",
    "capturedAt": "2026-09-20T23:43:22.252Z",
    "elapsedMs": 155.26408400000219,
    "successfulAttemptElapsedMs": 153.8608749999985,
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
          "noul": 0.61
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.9
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.89
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.74
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.14
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.95
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.25
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
          "noul": 0.11
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 0,
            "active_request": 1
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "no_sensitive_action": 0,
            "sender_supplied": 1
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 3293,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "472de166e7f26b0e9b1096c84cde5a66ea18b5c4714773edeea45b474ff493cb",
    "capturedAt": "2026-09-20T23:43:22.367Z",
    "elapsedMs": 112.87720800000534,
    "successfulAttemptElapsedMs": 111.7541659999988,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.16,
            "body:0": 0,
            "subject:0": 0.01,
            "body:1": 0.83
          },
          "confidence": 0.77
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "NONE": 0,
            "body:0": 0,
            "subject:0": 0.89,
            "body:1": 0.11
          },
          "confidence": 0.84
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.02,
            "body:0": 0,
            "subject:0": 0.03,
            "body:1": 0.95
          },
          "confidence": 0.92
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "NONE": 0.07,
            "body:0": 0,
            "subject:0": 0.92,
            "body:1": 0.01
          },
          "confidence": 0.9
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.01,
            "body:0": 0,
            "subject:0": 0,
            "body:1": 0.99
          },
          "confidence": 0.99
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.76,
            "body:0": 0.01,
            "subject:0": 0.09,
            "body:1": 0.14
          },
          "confidence": 0.68
        }
      },
      "usage": {
        "input_tokens": 2164,
        "output_tokens": 343
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 269.91329199999745,
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
        "segmentId": "subject:0"
      },
      "unusual_payment_routing": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "subject:0"
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
        "status": "none_selected",
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
    "seq": 568,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP016",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:22.098Z",
    "offsetMs": 0.9013339999946766
  },
  {
    "seq": 569,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP016",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:22.252Z",
    "offsetMs": 155.26633399999992,
    "elapsedMs": 153.8608749999985,
    "outcome": "success"
  },
  {
    "seq": 570,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP016",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:22.254Z",
    "offsetMs": 157.40699999999924
  },
  {
    "seq": 571,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP016",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:22.366Z",
    "offsetMs": 269.5948749999952,
    "elapsedMs": 111.7541659999988,
    "outcome": "success"
  },
  {
    "seq": 572,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP016",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:22.367Z",
    "offsetMs": 269.9658339999951,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "08402808285c4ddb6baed56fd1bf6c3959982791864474a096884a9549f2cb2a";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":569},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":571},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":572}} as const;
export const projectionSha256 = "2efa9c54d650656f2e4105976657a8ec298e7cf4c71b4b3616114776ebc93135";
