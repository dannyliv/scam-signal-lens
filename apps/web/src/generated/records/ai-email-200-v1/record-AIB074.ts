import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB074",
  "inputSha256": "3cf41a93c2447698886d26aa88e13c46080e3f193557a3a7b3e9603dd5d63a22",
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
      "text": "Agenda for Tuesday board meeting"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 85,
      "text": "The board agenda and supporting documents are available in the governance workspace. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 85,
      "end": 138,
      "text": "Printed copies will also be available at the meeting."
    }
  ],
  "passA": {
    "requestSha256": "dd630f2a64db1c423ff4c8ffde038be7a02a9635bbc7e1071f5990c78d365884",
    "capturedAt": "2026-09-20T23:43:05.644Z",
    "elapsedMs": 125.55487499999799,
    "successfulAttemptElapsedMs": 124.08812500000204,
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
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.22
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
          "noul": 0.71
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.99,
            "sender_supplied": 0,
            "mixed_or_unknown": 0,
            "independently_established": 0.01
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 3285,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "3d0ba28b036073b25de3898fdfdf931a3dc79b6fde664049f8393068fc96137e",
    "capturedAt": "2026-09-20T23:43:05.763Z",
    "elapsedMs": 117.38008400000035,
    "successfulAttemptElapsedMs": 116.38879200000156,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.01,
            "NONE": 0.79,
            "body:0": 0.08,
            "subject:0": 0.12
          },
          "confidence": 0.72
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.14,
            "subject:0": 0,
            "body:0": 0.75,
            "NONE": 0.11
          },
          "confidence": 0.65
        }
      },
      "usage": {
        "input_tokens": 909,
        "output_tokens": 116
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 244.8583749999998,
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
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 361,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB074",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:05.519Z",
    "offsetMs": 0.9517090000008466
  },
  {
    "seq": 362,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB074",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:05.644Z",
    "offsetMs": 125.55750000000262,
    "elapsedMs": 124.08812500000204,
    "outcome": "success"
  },
  {
    "seq": 363,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB074",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:05.646Z",
    "offsetMs": 127.56258400000297
  },
  {
    "seq": 364,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB074",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:05.763Z",
    "offsetMs": 244.3922500000008,
    "elapsedMs": 116.38879200000156,
    "outcome": "success"
  },
  {
    "seq": 365,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB074",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:05.763Z",
    "offsetMs": 244.9510420000006,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "3202b735b3a1592b47ca67962ceeb454877ba9cacf529095d8d28a5b052f6199";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":362},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":364},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":365}} as const;
export const projectionSha256 = "3591279cde661dd12242b961737fddf14ac59a755200de106fb3a14cfee3e7fa";
