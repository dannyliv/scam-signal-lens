import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB077",
  "inputSha256": "ce21f2a6204ea95ca98c6b0c9ff0c94157a5328501ccd170744c8c4136f14566",
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
      "end": 20,
      "text": "Claim status updated"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 43,
      "text": "Your claim status changed to under review. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 43,
      "end": 107,
      "text": "Any requested documents will appear in your secure claim portal."
    }
  ],
  "passA": {
    "requestSha256": "2d7ba217bb72deeac11cfce625190f3ae7291ae2a8c117aeb5b1f2d8df29e74e",
    "capturedAt": "2026-09-20T23:43:07.224Z",
    "elapsedMs": 156.5992920000026,
    "successfulAttemptElapsedMs": 155.05162500000006,
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
          "noul": 0.06
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.43
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.65
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
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.77,
            "independently_established": 0.21,
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.01
          },
          "confidence": 0.69
        }
      },
      "usage": {
        "input_tokens": 3278,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "9c1043aa0ddd633ee88aa382a69de32717ca55e38ed23b1071feb1d0b2a94cc3",
    "capturedAt": "2026-09-20T23:43:07.411Z",
    "elapsedMs": 185.5382920000011,
    "successfulAttemptElapsedMs": 184.11883300000045,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.15,
            "subject:0": 0.02,
            "body:1": 0.25,
            "NONE": 0.58
          },
          "confidence": 0.45
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "subject:0": 0,
            "body:1": 0.93,
            "NONE": 0.07
          },
          "confidence": 0.9
        }
      },
      "usage": {
        "input_tokens": 886,
        "output_tokens": 116
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 344.3425840000018,
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
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 376,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB077",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:07.068Z",
    "offsetMs": 0.9638750000012806
  },
  {
    "seq": 377,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB077",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:07.223Z",
    "offsetMs": 156.60083400000076,
    "elapsedMs": 155.05162500000006,
    "outcome": "success"
  },
  {
    "seq": 378,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB077",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:07.226Z",
    "offsetMs": 159.440125000001
  },
  {
    "seq": 379,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB077",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:07.411Z",
    "offsetMs": 344.1088340000024,
    "elapsedMs": 184.11883300000045,
    "outcome": "success"
  },
  {
    "seq": 380,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB077",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:07.411Z",
    "offsetMs": 344.3999590000021,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "b6f5ec61cf4cd33f178e22eecbd641ca8f7d70cb7fda8ade7bf70be508f47e15";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":377},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":379},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":380}} as const;
export const projectionSha256 = "1419a467ea5ae9736f41e0678c397ce8840573ed666fbf988c1d5a7c2e7cfe91";
