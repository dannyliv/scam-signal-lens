import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP037",
  "inputSha256": "9a2be84f9d028eacb19056830c673afb69658b1433a74023afd8f906a6aef7e2",
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
      "text": "Refund processing is nearly complete"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 112,
      "text": "Send your card security code and online banking login to finish the refund before the case closes automatically."
    }
  ],
  "passA": {
    "requestSha256": "df9f72a36ded93ce296bf2f172e1f8f6128e2c9073b4d9e2c21867c4e1f9dceb",
    "capturedAt": "2026-09-20T23:43:29.029Z",
    "elapsedMs": 223.59008300000278,
    "successfulAttemptElapsedMs": 222.21937500000058,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.92
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.98
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.14
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.07
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.96
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.67
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.68
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.28
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 1,
            "mixed_or_unclear": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0.02,
            "sender_supplied": 0.85,
            "no_sensitive_action": 0.04,
            "mixed_or_unknown": 0.09
          },
          "confidence": 0.81
        }
      },
      "usage": {
        "input_tokens": 3281,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "338fe146b75282b10afcf330588a038e14f27600cfd670dfd9fa02e24b9757be",
    "capturedAt": "2026-09-20T23:43:29.133Z",
    "elapsedMs": 103.17962499999703,
    "successfulAttemptElapsedMs": 101.80054099999688,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.01,
            "body:0": 0.99,
            "subject:0": 0
          },
          "confidence": 0.99
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0,
            "body:0": 1,
            "subject:0": 0
          },
          "confidence": 1
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0,
            "body:0": 1,
            "subject:0": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.44,
            "body:0": 0.38,
            "subject:0": 0.18
          },
          "confidence": 0.16
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.4,
            "body:0": 0.6,
            "subject:0": 0
          },
          "confidence": 0.39
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.6,
            "body:0": 0.4,
            "subject:0": 0
          },
          "confidence": 0.39
        }
      },
      "usage": {
        "input_tokens": 1989,
        "output_tokens": 287
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 328.5263750000013,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H1",
      "H5"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "selected",
        "segmentId": "body:0"
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:0"
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
        "segmentId": "body:0"
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
    "seq": 673,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP037",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:28.806Z",
    "offsetMs": 0.9420000000027358
  },
  {
    "seq": 674,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP037",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:29.028Z",
    "offsetMs": 223.59204099999624,
    "elapsedMs": 222.21937500000058,
    "outcome": "success"
  },
  {
    "seq": 675,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP037",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:29.031Z",
    "offsetMs": 225.86716599999636
  },
  {
    "seq": 676,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP037",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:29.133Z",
    "offsetMs": 328.27116599999863,
    "elapsedMs": 101.80054099999688,
    "outcome": "success"
  },
  {
    "seq": 677,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP037",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:29.133Z",
    "offsetMs": 328.57254100000137,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1aaa95ba850f1eadce6c08c5f0adefd2e93e2ae3110dcb051f24fb8525b95423";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":674},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":676},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":677}} as const;
export const projectionSha256 = "7d5747b5c3313a2c4f30848a948c9a7530a45a9d94a6ac6bd1746e5269fa9ea7";
