import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB070",
  "inputSha256": "bd47dece098fd155dc285fb41a8e9d0aa26b7523536344cf06d08b6d2eb4cf82",
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
      "end": 29,
      "text": "Results posted to your portal"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 59,
      "text": "Your routine lab results are posted to the patient portal. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 59,
      "end": 122,
      "text": "A clinician will contact you separately if follow up is needed."
    }
  ],
  "passA": {
    "requestSha256": "00db0e5cd2953ffcfb6efe010ff568b061851faa762661e9aff2925806207934",
    "capturedAt": "2026-09-20T23:43:04.404Z",
    "elapsedMs": 176.51141700000153,
    "successfulAttemptElapsedMs": 174.98416599999837,
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
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.68
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
          "noul": 0.72
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 1,
            "educational_or_quoted": 0,
            "active_request": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "sender_supplied": 0,
            "independently_established": 0.07,
            "no_sensitive_action": 0.93
          },
          "confidence": 0.9
        }
      },
      "usage": {
        "input_tokens": 3285,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "dd2e7c96cf5b12b0adac70913bfdb45b490dfb623ae5db3debd039e8bf782521",
    "capturedAt": "2026-09-21T00:56:44.358Z",
    "elapsedMs": 279.476667,
    "successfulAttemptElapsedMs": 278.83341599999994,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0.01,
            "body:0": 0.05,
            "NONE": 0.25,
            "body:1": 0.69
          },
          "confidence": 0.59
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.13,
            "body:0": 0.55,
            "body:1": 0.03,
            "NONE": 0.29
          },
          "confidence": 0.39
        }
      },
      "usage": {
        "input_tokens": 907,
        "output_tokens": 118
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 568.011624,
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
    "seq": 341,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB070",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:04.228Z",
    "offsetMs": 0.9536249999982829
  },
  {
    "seq": 342,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB070",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:04.404Z",
    "offsetMs": 176.5109999999986,
    "elapsedMs": 174.98416599999837,
    "outcome": "success"
  },
  {
    "seq": 343,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB070",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:04.407Z",
    "offsetMs": 180.4005419999994
  },
  {
    "seq": 344,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB070",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:04.514Z",
    "offsetMs": 286.846458,
    "elapsedMs": 105.62975000000006,
    "outcome": "success"
  },
  {
    "seq": 345,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB070",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:04.514Z",
    "offsetMs": 287.26816699999836,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 991,
    "captureSessionId": "e25842bf-8fab-457a-8c0a-d76f81eb2d72",
    "exampleId": "AIB070",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:56:44.079Z",
    "offsetMs": 0.9820829999999887
  },
  {
    "seq": 992,
    "captureSessionId": "e25842bf-8fab-457a-8c0a-d76f81eb2d72",
    "exampleId": "AIB070",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:56:44.358Z",
    "offsetMs": 280.045416,
    "elapsedMs": 278.83341599999994,
    "outcome": "success"
  },
  {
    "seq": 993,
    "captureSessionId": "e25842bf-8fab-457a-8c0a-d76f81eb2d72",
    "exampleId": "AIB070",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:56:44.358Z",
    "offsetMs": 280.450041,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ec82d6a4f0197ae35796b04aaf9c5c8af179a1fc5a0ab10fa75ff729a88614e7";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":342},"passB":{"captureSessionId":"e25842bf-8fab-457a-8c0a-d76f81eb2d72","seq":992},"complete":{"captureSessionId":"e25842bf-8fab-457a-8c0a-d76f81eb2d72","seq":993}} as const;
export const projectionSha256 = "f5b79f995dd7402bf64e53c4ecb6758b00389e435f8bb63f4a0d26e5b8806b81";
