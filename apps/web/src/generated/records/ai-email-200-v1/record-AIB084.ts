import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB084",
  "inputSha256": "4325f371cacfffa230ebf0190361f62c3e00d62e63e36bf07e6a439fa94b80b5",
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
      "end": 25,
      "text": "October alumni newsletter"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 56,
      "text": "The October newsletter is available on the alumni site. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 56,
      "end": 102,
      "text": "It includes event dates and volunteer stories."
    }
  ],
  "passA": {
    "requestSha256": "429d7a22c4db510dd96170f53a417e16b6b250245ad37aa6d037ed8d63e8f945",
    "capturedAt": "2026-09-20T23:43:09.284Z",
    "elapsedMs": 127.75950000000012,
    "successfulAttemptElapsedMs": 126.56470900000204,
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
          "noul": 0.02
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
          "noul": 0.02
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.2
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
          "noul": 0.57
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0.01,
            "informational": 0.99,
            "mixed_or_unclear": 0,
            "active_request": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.99,
            "independently_established": 0.01,
            "sender_supplied": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 3277,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "ffe772f118a9336326a24bd113e10f90d3b965ee4730038c18013ca01c54feb6",
    "capturedAt": "2026-09-20T23:43:09.467Z",
    "elapsedMs": 180.16795800000182,
    "successfulAttemptElapsedMs": 178.3394159999989,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0,
            "subject:0": 0,
            "NONE": 0.14,
            "body:0": 0.86
          },
          "confidence": 0.8
        }
      },
      "usage": {
        "input_tokens": 598,
        "output_tokens": 62
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 311.127540999998,
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
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 410,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB084",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:09.156Z",
    "offsetMs": 0.7001249999993888
  },
  {
    "seq": 411,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB084",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:09.283Z",
    "offsetMs": 127.75708300000042,
    "elapsedMs": 126.56470900000204,
    "outcome": "success"
  },
  {
    "seq": 412,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB084",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:09.287Z",
    "offsetMs": 131.85208299999795
  },
  {
    "seq": 413,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB084",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:09.466Z",
    "offsetMs": 310.9253329999992,
    "elapsedMs": 178.3394159999989,
    "outcome": "success"
  },
  {
    "seq": 414,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB084",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:09.467Z",
    "offsetMs": 311.1688749999994,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "e68c94895ee28276a362d5a59c0f5fd999f838a32cfab839167634ff6b85f975";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":411},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":413},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":414}} as const;
export const projectionSha256 = "44939bb8f0bf6b9b9170c0fba690e7cf71921ab7d6504cacef57111cf7a7ec7e";
