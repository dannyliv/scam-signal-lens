import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIPSEED05",
  "inputSha256": "aa8aa0f7bbe3a0023945257d1e003aa0365b8a6004b39fe6cbe14cc9779ae01a",
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
      "end": 32,
      "text": "Welcome aboard — equipment setup"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 45,
      "text": "You are hired for the remote assistant role. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 45,
      "end": 149,
      "text": "Deposit our $2,400 check, keep $400 for onboarding, and send $2,000 to our equipment coordinator today. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 149,
      "end": 200,
      "text": "You can order the laptop after you send the money. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 200,
      "end": 223,
      "text": "No interview is needed."
    },
    {
      "id": "userContext:0",
      "source": "userContext",
      "start": 0,
      "end": 99,
      "text": "I applied to several jobs but have not interviewed with this sender or signed employment paperwork."
    }
  ],
  "passA": {
    "requestSha256": "0a7a95c8c62d221d25deaecb0e05580c225adae13fc0a3a16e2bbff25dacabf5",
    "capturedAt": "2026-09-20T23:43:47.830Z",
    "elapsedMs": 194.18162499999744,
    "successfulAttemptElapsedMs": 192.15195799999492,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.03
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.36
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.99
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.57
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.9
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.87
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.78
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.98
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.2
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.02
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "mixed_or_unknown": 0.03,
            "sender_supplied": 0.96,
            "no_sensitive_action": 0.01
          },
          "confidence": 0.95
        }
      },
      "usage": {
        "input_tokens": 3338,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "1b6090e1f368b97a7ea75b6dcfdb4ac2b7bc7894fa9bb7d901949c5fed798a23",
    "capturedAt": "2026-09-20T23:43:48.006Z",
    "elapsedMs": 173.69745899999543,
    "successfulAttemptElapsedMs": 171.98104199999943,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.5700000000000001,
            "body:0": 0,
            "NONE": 0.43,
            "subject:0": 0,
            "body:2": 0,
            "body:3": 0
          },
          "confidence": 0.47
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 1,
            "body:0": 0,
            "NONE": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:2": 0
          },
          "confidence": 1
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.93,
            "body:0": 0,
            "NONE": 0.07,
            "subject:0": 0,
            "body:2": 0,
            "body:3": 0
          },
          "confidence": 0.91
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.99,
            "body:0": 0,
            "NONE": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:2": 0.01
          },
          "confidence": 0.98
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.72,
            "body:0": 0.23,
            "NONE": 0.03,
            "subject:0": 0.02,
            "body:3": 0,
            "body:2": 0
          },
          "confidence": 0.66
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:1": 0.07,
            "body:0": 0,
            "NONE": 0.21,
            "subject:0": 0,
            "body:2": 0.01,
            "body:3": 0.71
          },
          "confidence": 0.65
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 1,
            "body:0": 0,
            "NONE": 0,
            "subject:0": 0,
            "body:2": 0,
            "body:3": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 2902,
        "output_tokens": 527
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 370.83454200000415,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H2"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "low_confidence",
        "segmentId": null
      },
      "payment_request": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "unusual_payment_routing": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "verification_bypass": {
        "status": "selected",
        "segmentId": "body:3"
      },
      "advance_fee_or_refund_trap": {
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 946,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED05",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:47.637Z",
    "offsetMs": 1.3234579999989364
  },
  {
    "seq": 947,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED05",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:47.829Z",
    "offsetMs": 194.1832080000022,
    "elapsedMs": 192.15195799999492,
    "outcome": "success"
  },
  {
    "seq": 948,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED05",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:47.833Z",
    "offsetMs": 197.43445800000336
  },
  {
    "seq": 949,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED05",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:48.005Z",
    "offsetMs": 370.031167000001,
    "elapsedMs": 171.98104199999943,
    "outcome": "success"
  },
  {
    "seq": 950,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED05",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:48.006Z",
    "offsetMs": 370.9488330000022,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6cdb57b5cfa57e359f1ca0e43a29d3a215ba352cfd2dba2628627a5339ba9431";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":947},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":949},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":950}} as const;
export const projectionSha256 = "aaf96be339dcfc75f87ceed1f08dca698073eb50dcf822adcd1231775c9d51bc";
