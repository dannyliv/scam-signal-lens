import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP071",
  "inputSha256": "66893b19d1ae35679b5eea9997b2f03d1d1ed609fa54e6a250ddcc15e1c087d8",
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
      "end": 35,
      "text": "Open invoice attachment immediately"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 113,
      "text": "Enable content in the attached invoice and sign in with your finance account to view the revised payment details."
    }
  ],
  "passA": {
    "requestSha256": "5cdbc4bb0ce0db0c080a272955152afab1256e24521801a2ed4daa675692db44",
    "capturedAt": "2026-09-21T00:56:44.981Z",
    "elapsedMs": 110.01095900000007,
    "successfulAttemptElapsedMs": 109.104334,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.46
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.65
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.17
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.59
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.39
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.49
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.15
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.09
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
            "active_request": 1,
            "informational": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.05,
            "no_sensitive_action": 0.02,
            "independently_established": 0.01,
            "sender_supplied": 0.92
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 3280,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "ace0703f0a08b91a5529246ba64e269b5f3acadb035e536cd6f1d27ec3fb316d",
    "capturedAt": "2026-09-21T00:56:45.139Z",
    "elapsedMs": 156.13525000000004,
    "successfulAttemptElapsedMs": 154.29612499999985,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.27,
            "body:0": 0.73,
            "subject:0": 0
          },
          "confidence": 0.59
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.25,
            "body:0": 0.75,
            "subject:0": 0
          },
          "confidence": 0.62
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "NONE": 0.05,
            "body:0": 0.01,
            "subject:0": 0.94
          },
          "confidence": 0.92
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.6,
            "body:0": 0.38,
            "subject:0": 0.02
          },
          "confidence": 0.41
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.76,
            "body:0": 0.19,
            "subject:0": 0.05
          },
          "confidence": 0.64
        }
      },
      "usage": {
        "input_tokens": 1701,
        "output_tokens": 236
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 414.30245799999557,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "low_confidence",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "low_confidence",
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
        "status": "selected",
        "segmentId": "subject:0"
      },
      "authority_claim": {
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "low_confidence",
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
        "status": "not_requested",
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
    "seq": 843,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP071",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:40.474Z",
    "offsetMs": 0.7053329999980633
  },
  {
    "seq": 844,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP071",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:40.619Z",
    "offsetMs": 145.70908300000156,
    "elapsedMs": 144.5971669999999,
    "outcome": "success"
  },
  {
    "seq": 845,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP071",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:40.620Z",
    "offsetMs": 145.96495799999684,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 1002,
    "captureSessionId": "e25842bf-8fab-457a-8c0a-d76f81eb2d72",
    "exampleId": "AIP071",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:56:44.872Z",
    "offsetMs": 0.6256669999999076
  },
  {
    "seq": 1003,
    "captureSessionId": "e25842bf-8fab-457a-8c0a-d76f81eb2d72",
    "exampleId": "AIP071",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:56:44.981Z",
    "offsetMs": 110.01733399999989,
    "elapsedMs": 109.104334,
    "outcome": "success"
  },
  {
    "seq": 1004,
    "captureSessionId": "e25842bf-8fab-457a-8c0a-d76f81eb2d72",
    "exampleId": "AIP071",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:56:44.984Z",
    "offsetMs": 113.09962500000006
  },
  {
    "seq": 1005,
    "captureSessionId": "e25842bf-8fab-457a-8c0a-d76f81eb2d72",
    "exampleId": "AIP071",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:56:45.139Z",
    "offsetMs": 268.041375,
    "elapsedMs": 154.29612499999985,
    "outcome": "success"
  },
  {
    "seq": 1006,
    "captureSessionId": "e25842bf-8fab-457a-8c0a-d76f81eb2d72",
    "exampleId": "AIP071",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:56:45.139Z",
    "offsetMs": 268.3940419999999,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "b7df5886726fb782c6b865d3ab5f895600e5e1ffe27e88907bc9b150efefba63";
export const replayAnchors = {"passA":{"captureSessionId":"e25842bf-8fab-457a-8c0a-d76f81eb2d72","seq":1003},"passB":{"captureSessionId":"e25842bf-8fab-457a-8c0a-d76f81eb2d72","seq":1005},"complete":{"captureSessionId":"e25842bf-8fab-457a-8c0a-d76f81eb2d72","seq":1006}} as const;
export const projectionSha256 = "e5cdc2eb019bf28a8fc399f6f24898147dc96140d1d704ea4b9f039ea181fd12";
