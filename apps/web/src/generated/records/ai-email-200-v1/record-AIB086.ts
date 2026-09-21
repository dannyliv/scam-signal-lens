import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB086",
  "inputSha256": "150b089a82b5fbe473c7336c453f275a3be11b0ec6d93fa161a9d1a41fd357a2",
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
      "text": "Directory photo update available"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 72,
      "text": "You can update your directory photo during open office hours next week. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 72,
      "end": 96,
      "text": "The request is optional."
    }
  ],
  "passA": {
    "requestSha256": "221c05ad9046c8fefb8b8807c088ed9f123f009040db6951c4f313fd7bc794d1",
    "capturedAt": "2026-09-20T23:43:10.065Z",
    "elapsedMs": 203.22633300000234,
    "successfulAttemptElapsedMs": 201.54370799999742,
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
          "noul": 0.03
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
          "noul": 0.14
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.3
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
          "noul": 0.56
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "informational": 0.95,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "active_request": 0.05
          },
          "confidence": 0.93
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "independently_established": 0.01,
            "no_sensitive_action": 0.99,
            "sender_supplied": 0
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 3278,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "6e33c48577d827a546e3b26efeedee138b4849b0941fb3f9ae9d42599669c334",
    "capturedAt": "2026-09-20T23:43:10.233Z",
    "elapsedMs": 165.8457500000004,
    "successfulAttemptElapsedMs": 164.58970899999986,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.04,
            "body:0": 0.37,
            "NONE": 0.55,
            "subject:0": 0.04
          },
          "confidence": 0.4
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0,
            "body:0": 0.71,
            "NONE": 0.29,
            "subject:0": 0
          },
          "confidence": 0.6
        }
      },
      "usage": {
        "input_tokens": 886,
        "output_tokens": 116
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 370.5271250000005,
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
        "status": "low_confidence",
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
    "seq": 420,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB086",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:09.863Z",
    "offsetMs": 1.033332999999402
  },
  {
    "seq": 421,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB086",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:10.065Z",
    "offsetMs": 203.22912500000166,
    "elapsedMs": 201.54370799999742,
    "outcome": "success"
  },
  {
    "seq": 422,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB086",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:10.067Z",
    "offsetMs": 205.14120800000092
  },
  {
    "seq": 423,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB086",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:10.232Z",
    "offsetMs": 370.29741600000125,
    "elapsedMs": 164.58970899999986,
    "outcome": "success"
  },
  {
    "seq": 424,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB086",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:10.233Z",
    "offsetMs": 370.5799160000024,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "310913504bdcdf0ccf9fbcb6e8ea4b0674740f07367fc527d6bf826b5b40f175";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":421},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":423},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":424}} as const;
export const projectionSha256 = "99480d980a958c0ea0cc9218ee9c4fa425fe98175068c7587fd8d716bcb9424e";
