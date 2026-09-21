import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB005",
  "inputSha256": "e113aa3ed6ce9943e43139703820fec7e6c30acde78d0f3629f6d7d0c33e9e1c",
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
      "end": 38,
      "text": "Your monthly energy statement is ready"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 57,
      "text": "Your September statement is ready in the account portal. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 57,
      "end": 159,
      "text": "This message is for notification only; payment choices remain available from your normal account page."
    }
  ],
  "passA": {
    "requestSha256": "8e7e9e612874cb131ee5c43a48465a79f7822dbe54a393240b7bbe56f7c94224",
    "capturedAt": "2026-09-20T23:42:45.150Z",
    "elapsedMs": 120.87800000000016,
    "successfulAttemptElapsedMs": 119.57133299999987,
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
          "noul": 0.52
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.84
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 1,
            "mixed_or_unclear": 0,
            "active_request": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0,
            "independently_established": 0.3,
            "no_sensitive_action": 0.7,
            "mixed_or_unknown": 0
          },
          "confidence": 0.59
        }
      },
      "usage": {
        "input_tokens": 3289,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "f0bbe873e2963ca7e5e48f3d8876ae7d0cbb0cbf82e5c4633ece56c45f4a33e6",
    "capturedAt": "2026-09-20T23:42:45.259Z",
    "elapsedMs": 107.387833,
    "successfulAttemptElapsedMs": 106.33870899999988,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.07,
            "subject:0": 0.05,
            "NONE": 0.8,
            "body:0": 0.08
          },
          "confidence": 0.74
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0.71,
            "NONE": 0.04,
            "body:0": 0.25
          },
          "confidence": 0.61
        }
      },
      "usage": {
        "input_tokens": 919,
        "output_tokens": 116
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 230.00920799999994,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "request_route_low_confidence"
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
        "status": "none_selected",
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 21,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB005",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:45.029Z",
    "offsetMs": 0.7303749999998672
  },
  {
    "seq": 22,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB005",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:45.150Z",
    "offsetMs": 120.88674999999989,
    "elapsedMs": 119.57133299999987,
    "outcome": "success"
  },
  {
    "seq": 23,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB005",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:45.152Z",
    "offsetMs": 122.82049999999981
  },
  {
    "seq": 24,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB005",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:45.258Z",
    "offsetMs": 229.69933300000002,
    "elapsedMs": 106.33870899999988,
    "outcome": "success"
  },
  {
    "seq": 25,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB005",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:45.259Z",
    "offsetMs": 230.079166,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "129715ceb5dcca14dbca50c9be74c13bc4a6aa4d6abb6602cf75a35cd0214183";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":22},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":24},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":25}} as const;
export const projectionSha256 = "8829c971d8f056476a464df8b214ce93190df883277dcfff11b96e63e3a7a5c6";
