import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP082",
  "inputSha256": "13ddc945e958acafdda2472a781c14257532458ca99f4419ef9c5b373db36f12",
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
      "text": "Manager approval required now"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 47,
      "text": "Your manager approved a confidential transfer. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 47,
      "end": 123,
      "text": "Complete the wire and do not contact the manager because she is unavailable."
    }
  ],
  "passA": {
    "requestSha256": "ca4ead042a098d103958ecd3d3be9d9e4faee0744b5905f26675f249395950cb",
    "capturedAt": "2026-09-20T23:43:44.219Z",
    "elapsedMs": 123.55849999999919,
    "successfulAttemptElapsedMs": 121.74375000000146,
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
          "noul": 0.35
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.97
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.45
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.88
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.96
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.6
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.06
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 1
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0.02,
            "sender_supplied": 0.78,
            "mixed_or_unknown": 0.15,
            "no_sensitive_action": 0.05
          },
          "confidence": 0.7
        }
      },
      "usage": {
        "input_tokens": 3281,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "0f0f12618e59d43f8ad36f908b74376b541377ea289442cb61871a0fa0677427",
    "capturedAt": "2026-09-20T23:43:44.395Z",
    "elapsedMs": 174.56866700000683,
    "successfulAttemptElapsedMs": 172.61187500000233,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.01,
            "subject:0": 0,
            "body:1": 0.41,
            "NONE": 0.58
          },
          "confidence": 0.44
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "subject:0": 0,
            "body:1": 1,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0.05,
            "subject:0": 0,
            "body:1": 0.65,
            "NONE": 0.3
          },
          "confidence": 0.53
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:0": 0,
            "subject:0": 0.77,
            "body:1": 0.22,
            "NONE": 0.01
          },
          "confidence": 0.7
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.78,
            "subject:0": 0.16,
            "body:1": 0.06,
            "NONE": 0
          },
          "confidence": 0.71
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "subject:0": 0,
            "body:1": 1,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0.01,
            "subject:0": 0,
            "body:1": 0.79,
            "NONE": 0.2
          },
          "confidence": 0.72
        }
      },
      "usage": {
        "input_tokens": 2369,
        "output_tokens": 399
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 300.4536670000016,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H3"
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
        "status": "low_confidence",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "subject:0"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:0"
      },
      "verification_bypass": {
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 896,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP082",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:44.096Z",
    "offsetMs": 1.235291999997571
  },
  {
    "seq": 897,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP082",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:44.218Z",
    "offsetMs": 123.55966700000135,
    "elapsedMs": 121.74375000000146,
    "outcome": "success"
  },
  {
    "seq": 898,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP082",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:44.221Z",
    "offsetMs": 126.57195800000045
  },
  {
    "seq": 899,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP082",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:44.395Z",
    "offsetMs": 300.0330000000031,
    "elapsedMs": 172.61187500000233,
    "outcome": "success"
  },
  {
    "seq": 900,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP082",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:44.395Z",
    "offsetMs": 300.5509579999998,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "bb5864c24d90cc12b3597884e3a66168a54519a8a238f1ccf2f7580ab7e546d3";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":897},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":899},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":900}} as const;
export const projectionSha256 = "46fa8308862661b1188980521c0d0d93819f8cc916859f41c0ea9949644d98a9";
