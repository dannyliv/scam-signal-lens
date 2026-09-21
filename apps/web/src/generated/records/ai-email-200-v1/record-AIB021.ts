import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB021",
  "inputSha256": "c7a85601a29c9cbb05d423a07bababc2aae51c18bff82de63d71957e57d92e30",
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
      "end": 31,
      "text": "Optional campus services survey"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 70,
      "text": "The university is collecting optional feedback about campus services. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 70,
      "end": 150,
      "text": "The survey is available from the student dashboard and takes about five minutes."
    }
  ],
  "passA": {
    "requestSha256": "da652bbe02db5e260ed4a13597adf10696e1fec606d630cde40d2ccf98c07690",
    "capturedAt": "2026-09-20T23:42:49.841Z",
    "elapsedMs": 127.3754170000002,
    "successfulAttemptElapsedMs": 126.07554100000016,
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
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.78
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.68,
            "educational_or_quoted": 0,
            "informational": 0.32,
            "mixed_or_unclear": 0
          },
          "confidence": 0.57
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.85,
            "sender_supplied": 0,
            "independently_established": 0.15,
            "mixed_or_unknown": 0
          },
          "confidence": 0.8
        }
      },
      "usage": {
        "input_tokens": 3284,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "3a788d06415ae0bc6ace3d31935f247dffe4bb26c2b423b952bc914b149c2d21",
    "capturedAt": "2026-09-20T23:42:49.930Z",
    "elapsedMs": 87.16008299999976,
    "successfulAttemptElapsedMs": 85.44225000000006,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0,
            "NONE": 0.12,
            "subject:0": 0.01,
            "body:0": 0.87
          },
          "confidence": 0.82
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.89,
            "NONE": 0.11,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 0.85
        }
      },
      "usage": {
        "input_tokens": 904,
        "output_tokens": 118
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 216.90841700000055,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence"
    ],
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
        "status": "selected",
        "segmentId": "body:0"
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 99,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB021",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:49.714Z",
    "offsetMs": 0.7396250000001601
  },
  {
    "seq": 100,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB021",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:49.841Z",
    "offsetMs": 127.37595800000054,
    "elapsedMs": 126.07554100000016,
    "outcome": "success"
  },
  {
    "seq": 101,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB021",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:49.844Z",
    "offsetMs": 130.3740830000006
  },
  {
    "seq": 102,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB021",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:49.930Z",
    "offsetMs": 216.54129199999988,
    "elapsedMs": 85.44225000000006,
    "outcome": "success"
  },
  {
    "seq": 103,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB021",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:49.930Z",
    "offsetMs": 217.00337500000023,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "4b5ad9b9bbca24f7a82799451826be5c8f144c64d4f2cfca738b69e0a917c7c7";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":100},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":102},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":103}} as const;
export const projectionSha256 = "1f9669730fe40ac55386f3486566aa0a7674fc45f884f4710958912adeb040b9";
