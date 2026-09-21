import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB066",
  "inputSha256": "22e28b2b6f5ed9147407107869f5adbc9b5cc9837bd916f9f31093c87b075e3c",
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
      "text": "Community patrol schedule"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 67,
      "text": "The volunteer patrol schedule is posted on the neighborhood board. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 67,
      "end": 137,
      "text": "It is informational and does not request donations or account details."
    }
  ],
  "passA": {
    "requestSha256": "e7bc4ab600d0840682d9d8f200ae8d31a8547bb9b0250fa2c8dc05b3b2e04d7a",
    "capturedAt": "2026-09-20T23:43:03.205Z",
    "elapsedMs": 138.09458300000188,
    "successfulAttemptElapsedMs": 136.4955000000009,
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
          "noul": 0.02
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.16
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
          "noul": 0.57
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.06
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 1,
            "active_request": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 1,
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "sender_supplied": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 3282,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "528b0263301c9aeac527c3a62f7d7630922d5fa073914fc5f7b9c9be3f26e877",
    "capturedAt": "2026-09-20T23:43:03.327Z",
    "elapsedMs": 119.7120419999992,
    "successfulAttemptElapsedMs": 118.0816670000022,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.3,
            "body:0": 0.69,
            "body:1": 0.01,
            "subject:0": 0
          },
          "confidence": 0.58
        }
      },
      "usage": {
        "input_tokens": 608,
        "output_tokens": 62
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 260.9931660000002,
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
    "seq": 321,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB066",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:03.067Z",
    "offsetMs": 0.9352910000015981
  },
  {
    "seq": 322,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB066",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:03.204Z",
    "offsetMs": 138.09533300000112,
    "elapsedMs": 136.4955000000009,
    "outcome": "success"
  },
  {
    "seq": 323,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB066",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:03.208Z",
    "offsetMs": 142.05187500000102
  },
  {
    "seq": 324,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB066",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:03.327Z",
    "offsetMs": 260.7748329999995,
    "elapsedMs": 118.0816670000022,
    "outcome": "success"
  },
  {
    "seq": 325,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB066",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:03.327Z",
    "offsetMs": 261.04341600000043,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ee1a8fb0e0d4362f25833afa6415403f4e8d6b64a76e6d7ea8da393dae133f1e";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":322},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":324},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":325}} as const;
export const projectionSha256 = "52e25d235a43a12e8c1e9a4811e1b17c22088d90727f2918ab3f3d0818ddea04";
