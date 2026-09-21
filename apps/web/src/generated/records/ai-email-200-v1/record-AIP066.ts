import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP066",
  "inputSha256": "ac49dca119a19cef340423bf34419a562d03cdc5f288d7093b6034f841e47295",
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
      "end": 36,
      "text": "Camera access requires remote repair"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 34,
      "text": "A security camera is compromised. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 34,
      "end": 108,
      "text": "Install the attached remote utility and give our operator the access code."
    }
  ],
  "passA": {
    "requestSha256": "faf60785f7420a370d63734e8564f8bcb0854cf4362e4b743a3f304e574c6c25",
    "capturedAt": "2026-09-20T23:43:39.076Z",
    "elapsedMs": 123.62058299999626,
    "successfulAttemptElapsedMs": 121.87316599999758,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.91
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.09
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.35
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.82
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.44
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.97
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
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
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0,
            "mixed_or_unknown": 0.04,
            "sender_supplied": 0.96,
            "independently_established": 0
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 3280,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "ef2171f75b8ba1535d431533f553204f890393e75134a52e50cd3d01f8deb51f",
    "capturedAt": "2026-09-20T23:43:39.206Z",
    "elapsedMs": 128.27329199999804,
    "successfulAttemptElapsedMs": 126.0934999999954,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:1": 1,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.01,
            "body:0": 0.14,
            "body:1": 0.26,
            "NONE": 0.59
          },
          "confidence": 0.45
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0.01,
            "body:1": 0.96,
            "NONE": 0.03
          },
          "confidence": 0.94
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:1": 0.23,
            "NONE": 0.77
          },
          "confidence": 0.68
        },
        "evidence_remote_access_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:1": 1,
            "NONE": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 1754,
        "output_tokens": 281
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 254.17725000000064,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H1"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "selected",
        "segmentId": "body:1"
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "verification_bypass": {
        "status": "none_selected",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "not_requested",
        "segmentId": null
      },
      "remote_access_request": {
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 818,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP066",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:38.953Z",
    "offsetMs": 1.1506249999947613
  },
  {
    "seq": 819,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP066",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:39.075Z",
    "offsetMs": 123.62120799999684,
    "elapsedMs": 121.87316599999758,
    "outcome": "success"
  },
  {
    "seq": 820,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP066",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:39.079Z",
    "offsetMs": 127.13212499999645
  },
  {
    "seq": 821,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP066",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:39.206Z",
    "offsetMs": 253.92037499999424,
    "elapsedMs": 126.0934999999954,
    "outcome": "success"
  },
  {
    "seq": 822,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP066",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:39.206Z",
    "offsetMs": 254.23162500000035,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0bf41367b244a59f0028f6348f4c80a0d0bc86536f8ea9f749d157fdcdd4981c";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":819},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":821},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":822}} as const;
export const projectionSha256 = "29ad95c95b26672c815541b663d4fe0effec8ee977f39bfb32e8d5fac6a60781";
