import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP008",
  "inputSha256": "5ec31a52e31cb86c00101f6e3bc51745b35fefa6baef5644d76ad475741529b5",
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
      "end": 36,
      "text": "Confidential request from leadership"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 35,
      "text": "I am in a meeting and cannot talk. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 35,
      "end": 132,
      "text": "Buy four digital gift cards, scratch the backs, and send me the codes before anyone else is told."
    }
  ],
  "passA": {
    "requestSha256": "c129ad4d814cfbfe759471e92fdc605f3368f720d740f5fadaec7ed3cdb14fce",
    "capturedAt": "2026-09-20T23:43:18.591Z",
    "elapsedMs": 190.71091600000364,
    "successfulAttemptElapsedMs": 189.49654200000077,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.39
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.69
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.98
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.97
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.84
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.91
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.84
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.4
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
          "noul": 0.07
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 0,
            "active_request": 1,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.34,
            "sender_supplied": 0.48,
            "independently_established": 0.09,
            "no_sensitive_action": 0.09
          },
          "confidence": 0.32
        }
      },
      "usage": {
        "input_tokens": 3292,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "c2449d18ed1fcfcf7171da665c7b0f365c5e80bdb07dc74eeace11f59e901564",
    "capturedAt": "2026-09-20T23:43:18.789Z",
    "elapsedMs": 195.62049999999726,
    "successfulAttemptElapsedMs": 194.39379200000258,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:1": 0.58,
            "NONE": 0.42
          },
          "confidence": 0.44
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:1": 0.85,
            "NONE": 0.15
          },
          "confidence": 0.79
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:1": 1,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:1": 1,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0.03,
            "body:1": 0.92,
            "NONE": 0.05
          },
          "confidence": 0.89
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "subject:0": 0.98,
            "body:0": 0.01,
            "body:1": 0.01,
            "NONE": 0
          },
          "confidence": 0.98
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0.01,
            "body:0": 0.01,
            "body:1": 0.94,
            "NONE": 0.04
          },
          "confidence": 0.92
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:1": 0.67,
            "NONE": 0.33
          },
          "confidence": 0.56
        }
      },
      "usage": {
        "input_tokens": 2770,
        "output_tokens": 458
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 388.3857500000013,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H3"
    ],
    "contextWarnings": [
      "request_route_low_confidence"
    ],
    "evidence": {
      "credential_request": {
        "status": "low_confidence",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:1"
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
        "segmentId": "subject:0"
      },
      "verification_bypass": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "advance_fee_or_refund_trap": {
        "status": "low_confidence",
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
      "avoid_sender_route",
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 530,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP008",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:18.401Z",
    "offsetMs": 0.7832080000007409
  },
  {
    "seq": 531,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP008",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:18.591Z",
    "offsetMs": 190.7149170000048,
    "elapsedMs": 189.49654200000077,
    "outcome": "success"
  },
  {
    "seq": 532,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP008",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:18.594Z",
    "offsetMs": 193.18529200000194
  },
  {
    "seq": 533,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP008",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:18.789Z",
    "offsetMs": 388.1069170000046,
    "elapsedMs": 194.39379200000258,
    "outcome": "success"
  },
  {
    "seq": 534,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP008",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:18.789Z",
    "offsetMs": 388.4414170000018,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "44fc95f250810f7e7a18ab47cdc2f09e2bb85faa038f2f44696f957163057717";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":531},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":533},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":534}} as const;
export const projectionSha256 = "f06dfb0f6407c5494c73bcc15ba40102f94ac84c657fa80a09c34f7490a20068";
