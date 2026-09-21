import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB020",
  "inputSha256": "bc28d8bc143efcf6cdeaddd6eabc1d5d96a25b4f17b66b4b36f78292ad4b63b2",
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
      "text": "Saturday garden shift reminder"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 62,
      "text": "You are scheduled for the community garden at 09:00 Saturday. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 62,
      "end": 143,
      "text": "Reply to the coordinator in the volunteer directory if your availability changed."
    }
  ],
  "passA": {
    "requestSha256": "9f9dde984f0555428e7eeafc917f3f0ae9bbd1353222800a20a1de8945e9e7a4",
    "capturedAt": "2026-09-20T23:42:49.513Z",
    "elapsedMs": 172.37529199999972,
    "successfulAttemptElapsedMs": 171.0523750000002,
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
          "noul": 0.01
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.32
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
          "noul": 0.78
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.03,
            "mixed_or_unclear": 0,
            "active_request": 0.97,
            "educational_or_quoted": 0
          },
          "confidence": 0.95
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.76,
            "sender_supplied": 0.03,
            "independently_established": 0.21
          },
          "confidence": 0.68
        }
      },
      "usage": {
        "input_tokens": 3289,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "ab5349dd41cd2d5380481dcddfa710df1eaaf90fb6b4666ad9674198343c629f",
    "capturedAt": "2026-09-20T23:42:49.711Z",
    "elapsedMs": 195.83729200000016,
    "successfulAttemptElapsedMs": 194.43954199999916,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0.01,
            "body:1": 0.57,
            "subject:0": 0,
            "NONE": 0.42
          },
          "confidence": 0.43
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0.12,
            "body:1": 0.66,
            "subject:0": 0.02,
            "NONE": 0.2
          },
          "confidence": 0.55
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "body:1": 0.95,
            "subject:0": 0,
            "NONE": 0.05
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 1210,
        "output_tokens": 174
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 370.70224999999937,
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
        "status": "low_confidence",
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
    "seq": 94,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB020",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:49.341Z",
    "offsetMs": 0.7340409999997064
  },
  {
    "seq": 95,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB020",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:49.513Z",
    "offsetMs": 172.37670799999978,
    "elapsedMs": 171.0523750000002,
    "outcome": "success"
  },
  {
    "seq": 96,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB020",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:49.516Z",
    "offsetMs": 175.30891599999995
  },
  {
    "seq": 97,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB020",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:49.711Z",
    "offsetMs": 370.4345409999996,
    "elapsedMs": 194.43954199999916,
    "outcome": "success"
  },
  {
    "seq": 98,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB020",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:49.711Z",
    "offsetMs": 370.75691599999936,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "63b08d5e568c61ea99b82e8ecabd11fa97374f7112c2ce7cf90046f6eb67f135";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":95},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":97},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":98}} as const;
export const projectionSha256 = "73f1dd06a09d6d10639bd0d851fb2db92dddc86ea58bb190e1907336fbc0fc07";
