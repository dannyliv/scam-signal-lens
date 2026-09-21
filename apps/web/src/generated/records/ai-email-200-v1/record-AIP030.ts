import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP030",
  "inputSha256": "deb2ef0ae7058910c217b4c4da3a91842cc3a4e7c193e39fbf41a9402dd372a0",
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
      "end": 28,
      "text": "Grant release requires a fee"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 33,
      "text": "Your student grant was approved. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 33,
      "end": 131,
      "text": "Pay the application release fee with gift cards and send the codes before the funding list closes."
    }
  ],
  "passA": {
    "requestSha256": "afccf5752ae8357d9f61369edd5703ac55966fd283c938d136900459b8b59e35",
    "capturedAt": "2026-09-20T23:43:26.786Z",
    "elapsedMs": 319.44112499999756,
    "successfulAttemptElapsedMs": 317.87479200000234,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.41
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.91
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.98
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.98
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.95
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.71
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.43
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.96
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.04
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
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
            "informational": 0,
            "educational_or_quoted": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.05,
            "no_sensitive_action": 0.04,
            "independently_established": 0.01,
            "sender_supplied": 0.9
          },
          "confidence": 0.87
        }
      },
      "usage": {
        "input_tokens": 3285,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "1208b62aab5929959dff751fef1ac491c4c3c5e766cd4b64a33e0086d3eee155",
    "capturedAt": "2026-09-20T23:43:26.893Z",
    "elapsedMs": 104.80062500000349,
    "successfulAttemptElapsedMs": 103.15316699999676,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.72,
            "body:0": 0,
            "NONE": 0.28,
            "subject:0": 0
          },
          "confidence": 0.62
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.99,
            "body:0": 0,
            "NONE": 0.01,
            "subject:0": 0
          },
          "confidence": 0.99
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 1,
            "body:0": 0,
            "NONE": 0,
            "subject:0": 0
          },
          "confidence": 1
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 1,
            "body:0": 0,
            "NONE": 0,
            "subject:0": 0
          },
          "confidence": 1
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 1,
            "body:0": 0,
            "NONE": 0,
            "subject:0": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.06,
            "body:0": 0.74,
            "NONE": 0.19,
            "subject:0": 0.01
          },
          "confidence": 0.65
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.2,
            "body:0": 0,
            "NONE": 0.8,
            "subject:0": 0
          },
          "confidence": 0.73
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.95,
            "body:0": 0,
            "NONE": 0,
            "subject:0": 0.05
          },
          "confidence": 0.94
        }
      },
      "usage": {
        "input_tokens": 2707,
        "output_tokens": 456
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 426.6465420000022,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H2",
      "H3",
      "H5"
    ],
    "contextWarnings": [],
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
        "segmentId": "body:0"
      },
      "verification_bypass": {
        "status": "none_selected",
        "segmentId": null
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
    "seq": 638,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP030",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:26.467Z",
    "offsetMs": 0.9757919999974547
  },
  {
    "seq": 639,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP030",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:26.786Z",
    "offsetMs": 319.44112499999756,
    "elapsedMs": 317.87479200000234,
    "outcome": "success"
  },
  {
    "seq": 640,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP030",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:26.788Z",
    "offsetMs": 322.3076250000013
  },
  {
    "seq": 641,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP030",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:26.892Z",
    "offsetMs": 426.125082999999,
    "elapsedMs": 103.15316699999676,
    "outcome": "success"
  },
  {
    "seq": 642,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP030",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:26.893Z",
    "offsetMs": 426.7415420000034,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "60844e9a082f622af3a274480070f1c1c37b9324c8cba3d7e42e7320b5b76cc9";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":639},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":641},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":642}} as const;
export const projectionSha256 = "4128f2eaa94178609b315d9e015c656f7a83351b02a6cec0307e557ab604448a";
