import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB004",
  "inputSha256": "486e371783709a4c1b19056eeac1df8c1a35993d560d1be490dbabc71d2a5070",
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
      "text": "Wednesday planning meeting moved"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 65,
      "text": "The Wednesday planning meeting will start at 2:00 in Room Cedar. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 65,
      "end": 134,
      "text": "The calendar invitation has been updated for everyone on the project."
    }
  ],
  "passA": {
    "requestSha256": "06d4f7384acdece9b31728434af2fa6adf37e4c936d9a6871b2d02774993bb61",
    "capturedAt": "2026-09-20T23:42:44.907Z",
    "elapsedMs": 177.20445799999993,
    "successfulAttemptElapsedMs": 175.7239579999998,
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
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.15
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
          "noul": 0.01
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.29
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 1,
            "sender_supplied": 0,
            "independently_established": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3288,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "6bea0758670e25ac79a752e02ac08580ba450f3a4385180e7902cf488ef90ef0",
    "capturedAt": "2026-09-20T23:42:45.027Z",
    "elapsedMs": 117.96420799999987,
    "successfulAttemptElapsedMs": 116.54995799999983,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.38,
            "subject:0": 0,
            "body:0": 0,
            "NONE": 0.62
          },
          "confidence": 0.49
        }
      },
      "usage": {
        "input_tokens": 620,
        "output_tokens": 60
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 297.93337500000007,
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
    "seq": 16,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB004",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:44.730Z",
    "offsetMs": 0.8468750000001819
  },
  {
    "seq": 17,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB004",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:44.906Z",
    "offsetMs": 177.20545900000002,
    "elapsedMs": 175.7239579999998,
    "outcome": "success"
  },
  {
    "seq": 18,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB004",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:44.909Z",
    "offsetMs": 180.43920900000012
  },
  {
    "seq": 19,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB004",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:45.027Z",
    "offsetMs": 297.69550000000004,
    "elapsedMs": 116.54995799999983,
    "outcome": "success"
  },
  {
    "seq": 20,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB004",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:45.027Z",
    "offsetMs": 297.9855,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1d303d2a4e382e114b2e9e2ec5795b01526a2071acedacd81860d23f5ada55a2";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":17},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":19},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":20}} as const;
export const projectionSha256 = "fa315a2ae4533d9b0e5dc1e8ce7e226443d2fd65be42ab253c9ed858f9857722";
