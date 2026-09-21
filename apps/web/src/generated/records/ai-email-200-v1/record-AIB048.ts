import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB048",
  "inputSha256": "6bc4ba2528ef5602fce219f7f1560091cbe253331f5b226bfbb042713a892480",
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
      "end": 29,
      "text": "Reminder for annual pet visit"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 64,
      "text": "Your pet has an annual wellness visit scheduled next Wednesday. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 64,
      "end": 133,
      "text": "Please bring the vaccination card you already keep with your records."
    }
  ],
  "passA": {
    "requestSha256": "87b3704b8d79a8464070d6ed313aadc84f287d9e48bbaf7840d65e3aa18a5c58",
    "capturedAt": "2026-09-20T23:42:57.803Z",
    "elapsedMs": 189.5784169999988,
    "successfulAttemptElapsedMs": 188.23762499999975,
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
          "noul": 0.41
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.5
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
          "noul": 0.33
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 0.96,
            "informational": 0.04
          },
          "confidence": 0.95
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.01,
            "no_sensitive_action": 0.99,
            "sender_supplied": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 3284,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "04701f650e674c0c980527f993758c8f28e1321116ec50796457b099a1b4e3e7",
    "capturedAt": "2026-09-20T23:42:57.994Z",
    "elapsedMs": 188.99341699999968,
    "successfulAttemptElapsedMs": 187.59937499999978,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.01,
            "body:1": 0.11,
            "body:0": 0.43,
            "NONE": 0.45
          },
          "confidence": 0.27
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.05,
            "body:1": 0.19,
            "body:0": 0.11,
            "NONE": 0.65
          },
          "confidence": 0.54
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0.73,
            "body:0": 0.01,
            "NONE": 0.26
          },
          "confidence": 0.65
        }
      },
      "usage": {
        "input_tokens": 1190,
        "output_tokens": 170
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 380.91841600000043,
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
    "seq": 232,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB048",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:57.614Z",
    "offsetMs": 0.8250410000000556
  },
  {
    "seq": 233,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB048",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:57.803Z",
    "offsetMs": 189.58054100000118,
    "elapsedMs": 188.23762499999975,
    "outcome": "success"
  },
  {
    "seq": 234,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB048",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:57.806Z",
    "offsetMs": 192.30504100000144
  },
  {
    "seq": 235,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB048",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:57.994Z",
    "offsetMs": 380.53499999999985,
    "elapsedMs": 187.59937499999978,
    "outcome": "success"
  },
  {
    "seq": 236,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB048",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:57.994Z",
    "offsetMs": 381.00337500000023,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "10a842dfd55ab5b0580de0a44b0acfba6af9d5273f799e50e0e3e8e35957ff24";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":233},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":235},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":236}} as const;
export const projectionSha256 = "1c52798af8b17e78e0ecd191ab18175080a8f31cb972c848a7ee428545507130";
