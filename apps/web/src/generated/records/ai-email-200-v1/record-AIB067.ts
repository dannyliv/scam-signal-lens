import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB067",
  "inputSha256": "c84af35c0b5b80b2ffe81fa96b68c40b8191ae4aaf81a86fae6a3998c9578c8e",
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
      "end": 26,
      "text": "Records retention reminder"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 75,
      "text": "Please place completed project records in the shared archive by month end. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 75,
      "end": 135,
      "text": "The records team will handle final retention classification."
    }
  ],
  "passA": {
    "requestSha256": "05b7dcdfd6117245e8dbf925040a90fdb3008c5c8a1cf21e2373ccefaa700a8b",
    "capturedAt": "2026-09-20T23:43:03.450Z",
    "elapsedMs": 120.47208300000057,
    "successfulAttemptElapsedMs": 118.97520799999984,
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
          "noul": 0.69
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.75
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
          "noul": 0.08
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
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.99,
            "sender_supplied": 0,
            "mixed_or_unknown": 0,
            "independently_established": 0.01
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 3281,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "a2f54a07d3b6a8548efb575abe61a71c1100d91144ef04f6a288eb2e598431c1",
    "capturedAt": "2026-09-20T23:43:03.631Z",
    "elapsedMs": 180.0710829999989,
    "successfulAttemptElapsedMs": 178.94725000000108,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0.98,
            "NONE": 0.02,
            "body:1": 0
          },
          "confidence": 0.97
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0.02,
            "body:0": 0.13,
            "NONE": 0.14,
            "body:1": 0.71
          },
          "confidence": 0.61
        }
      },
      "usage": {
        "input_tokens": 886,
        "output_tokens": 115
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 301.9267499999987,
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
        "segmentId": "body:0"
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
    "seq": 326,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB067",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:03.330Z",
    "offsetMs": 0.9451669999980368
  },
  {
    "seq": 327,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB067",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:03.450Z",
    "offsetMs": 120.47529199999917,
    "elapsedMs": 118.97520799999984,
    "outcome": "success"
  },
  {
    "seq": 328,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB067",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:03.451Z",
    "offsetMs": 122.24841699999888
  },
  {
    "seq": 329,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB067",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:03.631Z",
    "offsetMs": 301.69495800000004,
    "elapsedMs": 178.94725000000108,
    "outcome": "success"
  },
  {
    "seq": 330,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB067",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:03.631Z",
    "offsetMs": 301.9752919999992,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "04f9f1cc7260c04dc7b41124ac471f3f4553a410f7296b78a705a631cbf237b5";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":327},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":329},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":330}} as const;
export const projectionSha256 = "000c2c12bc3ec8a45b42c00371cbe0e03c33cea6f96d079f3627e389cff964c8";
