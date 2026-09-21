import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB032",
  "inputSha256": "81ff561fe58258f2f20770db1c10164235f0fb15abb5c7604cc31c64b262115e",
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
      "text": "Registration opens Monday"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 65,
      "text": "Course registration opens Monday at 07:00 in the student system. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 65,
      "end": 111,
      "text": "Review the course catalog before you register."
    }
  ],
  "passA": {
    "requestSha256": "9ba7d9bd56928730a297b17d78ffd5cdd52f559356d87623d067985039c214c4",
    "capturedAt": "2026-09-20T23:42:52.713Z",
    "elapsedMs": 115.68449999999939,
    "successfulAttemptElapsedMs": 114.2096249999995,
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
          "noul": 0.28
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.18
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
          "noul": 0.53
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 0.36,
            "educational_or_quoted": 0,
            "active_request": 0.64
          },
          "confidence": 0.51
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "independently_established": 0.04,
            "sender_supplied": 0,
            "no_sensitive_action": 0.96
          },
          "confidence": 0.95
        }
      },
      "usage": {
        "input_tokens": 3283,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "3eaf928185e1538001fbe8f97dd220073edd54246c54b49ca3e7658b9ba8d056",
    "capturedAt": "2026-09-20T23:42:52.857Z",
    "elapsedMs": 142.5243330000012,
    "successfulAttemptElapsedMs": 141.15966600000138,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.23,
            "body:0": 0.18,
            "NONE": 0.49,
            "subject:0": 0.1
          },
          "confidence": 0.33
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.16,
            "body:0": 0.56,
            "NONE": 0.28,
            "subject:0": 0
          },
          "confidence": 0.41
        }
      },
      "usage": {
        "input_tokens": 895,
        "output_tokens": 116
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 260.29012499999953,
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
        "status": "low_confidence",
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 153,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB032",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:52.597Z",
    "offsetMs": 0.9789579999996931
  },
  {
    "seq": 154,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB032",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:52.712Z",
    "offsetMs": 115.68604099999902,
    "elapsedMs": 114.2096249999995,
    "outcome": "success"
  },
  {
    "seq": 155,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB032",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:52.715Z",
    "offsetMs": 118.44733300000007
  },
  {
    "seq": 156,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB032",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:52.857Z",
    "offsetMs": 260.1581249999999,
    "elapsedMs": 141.15966600000138,
    "outcome": "success"
  },
  {
    "seq": 157,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB032",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:52.857Z",
    "offsetMs": 260.3259999999991,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "c134f114b5658465bdd9fec5035d1e76dfbc61028616b36e3b7f3ca47d2da1dd";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":154},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":156},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":157}} as const;
export const projectionSha256 = "2fcc6de38becb5bb3655d28c000029899a671b5d6bc7a86b5844c4058a697149";
