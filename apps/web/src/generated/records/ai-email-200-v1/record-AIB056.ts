import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB056",
  "inputSha256": "198d5703d69fdb6e71b0a5bb1b77a8a6498b20ace5b44443f35c4c5ffe2647bd",
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
      "text": "Recording available for review"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 68,
      "text": "The town hall recording is available in the internal video library. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 68,
      "end": 125,
      "text": "Captions and the written transcript are posted beside it."
    }
  ],
  "passA": {
    "requestSha256": "61030bc0722daf33a37874db520c88de4db63b8cede8492ce5e8742c2866deaa",
    "capturedAt": "2026-09-20T23:43:00.328Z",
    "elapsedMs": 154.06445800000074,
    "successfulAttemptElapsedMs": 152.80595800000083,
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
          "noul": 0.02
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.14
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
          "noul": 0.61
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 0,
            "informational": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.98,
            "sender_supplied": 0,
            "independently_established": 0.02
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 3283,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "bf05550a6a958eab45d3ab88121e14d2e32db3efeef849353bf1487c32fdd62a",
    "capturedAt": "2026-09-20T23:43:00.420Z",
    "elapsedMs": 89.61645900000076,
    "successfulAttemptElapsedMs": 88.0636659999982,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0.61,
            "body:1": 0.02,
            "NONE": 0.37
          },
          "confidence": 0.47
        }
      },
      "usage": {
        "input_tokens": 610,
        "output_tokens": 62
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 246.95633400000224,
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
    "seq": 272,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB056",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:00.174Z",
    "offsetMs": 0.786459000002651
  },
  {
    "seq": 273,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB056",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:00.327Z",
    "offsetMs": 154.06358399999954,
    "elapsedMs": 152.80595800000083,
    "outcome": "success"
  },
  {
    "seq": 274,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB056",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:00.331Z",
    "offsetMs": 158.0577919999996
  },
  {
    "seq": 275,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB056",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:00.420Z",
    "offsetMs": 246.74304200000188,
    "elapsedMs": 88.0636659999982,
    "outcome": "success"
  },
  {
    "seq": 276,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB056",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:00.420Z",
    "offsetMs": 247.018167000002,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0a4668a5f735ccc10aba844d5aa5038ccd3887c0b5f78e325b50e1ae2d6e21a0";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":273},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":275},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":276}} as const;
export const projectionSha256 = "7965ad0c22564b683db3632cef8e67af51b2817840620b215f59012ca2b459e6";
