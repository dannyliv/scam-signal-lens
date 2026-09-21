import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB078",
  "inputSha256": "5e12c97f8d4d88d284f6e226e8412cb305354a59509ba7c553259e7fd48bb005",
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
      "end": 23,
      "text": "Receiving dock schedule"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 70,
      "text": "The receiving dock will accept deliveries from 08:00 to 15:00 Friday. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 70,
      "end": 117,
      "text": "Drivers should use the posted entrance signage."
    }
  ],
  "passA": {
    "requestSha256": "9dc412d8f61326ed0949d5ca8040ee24fcdddbbe6fcb261fb2769abcad8b6f4b",
    "capturedAt": "2026-09-20T23:43:07.566Z",
    "elapsedMs": 152.2388749999991,
    "successfulAttemptElapsedMs": 150.75391600000148,
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
          "noul": 0.01
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
          "noul": 0.06
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.17
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
          "noul": 0.29
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "informational": 0.9400000000000001,
            "mixed_or_unclear": 0,
            "active_request": 0.06,
            "educational_or_quoted": 0
          },
          "confidence": 0.91
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 1,
            "sender_supplied": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3290,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "13660be6408b1e74cae9732081b4be77ed1730ccca599bbf527d935ff3a16de0",
    "capturedAt": "2026-09-20T23:43:07.692Z",
    "elapsedMs": 123.54320899999948,
    "successfulAttemptElapsedMs": 121.86870799999815,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.69,
            "body:1": 0.3,
            "body:0": 0.01
          },
          "confidence": 0.59
        }
      },
      "usage": {
        "input_tokens": 624,
        "output_tokens": 60
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 279.17462499999965,
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
    "seq": 381,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB078",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:07.414Z",
    "offsetMs": 0.8847910000004049
  },
  {
    "seq": 382,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB078",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:07.565Z",
    "offsetMs": 152.23983299999963,
    "elapsedMs": 150.75391600000148,
    "outcome": "success"
  },
  {
    "seq": 383,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB078",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:07.570Z",
    "offsetMs": 156.41312500000276
  },
  {
    "seq": 384,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB078",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:07.692Z",
    "offsetMs": 278.9955829999999,
    "elapsedMs": 121.86870799999815,
    "outcome": "success"
  },
  {
    "seq": 385,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB078",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:07.692Z",
    "offsetMs": 279.2195000000029,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d1cd503ecaec0b1f660f9418c503c909305f7ce80ed0331b7889dffd4b27d33f";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":382},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":384},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":385}} as const;
export const projectionSha256 = "53cb1dcecde1cb07f232ea93de7acabe0712556126e8274917c8ce986ee63b6a";
