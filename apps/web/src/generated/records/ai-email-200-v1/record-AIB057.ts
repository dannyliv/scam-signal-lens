import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB057",
  "inputSha256": "54bf055c2eb0e2b58a1aeac6f7f7455015a87c885e01a0adb4279309393aac93",
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
      "text": "Branch holiday hours"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 65,
      "text": "The credit union branch will close early Friday for the holiday. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 65,
      "end": 106,
      "text": "Online banking availability is unchanged."
    }
  ],
  "passA": {
    "requestSha256": "027b9b1edda3f0ba8197de6bebf3347500e8fc8134a79034ea79ca6f558fdc3a",
    "capturedAt": "2026-09-20T23:43:00.539Z",
    "elapsedMs": 116.34504100000049,
    "successfulAttemptElapsedMs": 114.87554100000125,
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
          "noul": 0.54
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
          "noul": 0.42
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
            "active_request": 0,
            "educational_or_quoted": 0,
            "informational": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 1,
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "sender_supplied": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3277,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "fe8c6ec605ac4e5eaa6f4ca88056113d3578da47fe2d70ae579be0268cf63149",
    "capturedAt": "2026-09-20T23:43:00.681Z",
    "elapsedMs": 140.3448329999992,
    "successfulAttemptElapsedMs": 138.96337499999936,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.01,
            "body:0": 0.56,
            "subject:0": 0.03,
            "NONE": 0.4
          },
          "confidence": 0.41
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.32,
            "body:0": 0.01,
            "subject:0": 0,
            "NONE": 0.67
          },
          "confidence": 0.55
        }
      },
      "usage": {
        "input_tokens": 883,
        "output_tokens": 116
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 259.0529170000009,
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
    "seq": 277,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB057",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:00.423Z",
    "offsetMs": 0.889500000001135
  },
  {
    "seq": 278,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB057",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:00.539Z",
    "offsetMs": 116.34612500000003,
    "elapsedMs": 114.87554100000125,
    "outcome": "success"
  },
  {
    "seq": 279,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB057",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:00.542Z",
    "offsetMs": 119.30575000000317
  },
  {
    "seq": 280,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB057",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:00.681Z",
    "offsetMs": 258.8974580000031,
    "elapsedMs": 138.96337499999936,
    "outcome": "success"
  },
  {
    "seq": 281,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB057",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:00.681Z",
    "offsetMs": 259.0969170000026,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "be384962794707a06db68c7df2b95d95592472ac9150adc3979b8fe486d96dc0";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":278},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":280},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":281}} as const;
export const projectionSha256 = "766febdf5ce545627f3cde5d3f5406eb56fe076c6cde4e320f5acfa3073c0c51";
