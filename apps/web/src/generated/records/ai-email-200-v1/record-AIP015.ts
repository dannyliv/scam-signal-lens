import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP015",
  "inputSha256": "907fb4181ccd57c2a69210d84b28d1e1c47b72b7a2b10c5f0db28196d9b1ed12",
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
      "text": "Card activity must be verified"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 21,
      "text": "We blocked a charge. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 21,
      "end": 123,
      "text": "Reply with your card number, expiration date, security code, and one time code to release the account."
    }
  ],
  "passA": {
    "requestSha256": "576ed2f91174219a6b376b7108935b344ae860e4afcdf459359bdc584d1c64f8",
    "capturedAt": "2026-09-20T23:43:21.926Z",
    "elapsedMs": 316.0408749999988,
    "successfulAttemptElapsedMs": 314.6302499999947,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.93
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.99
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.1
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.83
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.79
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.72
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.02
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
            "independently_established": 0.04,
            "no_sensitive_action": 0,
            "sender_supplied": 0.95,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 3287,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "c586f3d2ed490195d3af10640885e8c2ab8fde67f16da7073d21396c69eaf6a5",
    "capturedAt": "2026-09-20T23:43:22.095Z",
    "elapsedMs": 166.66895799999475,
    "successfulAttemptElapsedMs": 165.0459170000031,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:1": 1
          },
          "confidence": 0.99
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:1": 1
          },
          "confidence": 1
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.66,
            "subject:0": 0.02,
            "body:0": 0.26,
            "NONE": 0.06
          },
          "confidence": 0.55
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.27,
            "subject:0": 0.04,
            "body:0": 0.6,
            "body:1": 0.09
          },
          "confidence": 0.48
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.52,
            "subject:0": 0,
            "body:0": 0.01,
            "NONE": 0.47
          },
          "confidence": 0.36
        }
      },
      "usage": {
        "input_tokens": 1813,
        "output_tokens": 285
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 484.9114580000023,
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
        "segmentId": "body:1"
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:1"
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
      "avoid_sender_route",
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 563,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP015",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:21.611Z",
    "offsetMs": 0.9240829999980633
  },
  {
    "seq": 564,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP015",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:21.926Z",
    "offsetMs": 316.04125000000204,
    "elapsedMs": 314.6302499999947,
    "outcome": "success"
  },
  {
    "seq": 565,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP015",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:21.929Z",
    "offsetMs": 318.91258299999754
  },
  {
    "seq": 566,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP015",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:22.095Z",
    "offsetMs": 484.6187080000018,
    "elapsedMs": 165.0459170000031,
    "outcome": "success"
  },
  {
    "seq": 567,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP015",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:22.095Z",
    "offsetMs": 484.96650000000227,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0186bdda61b9ea8ed411628f238e799e7ce486ac430555c85d402561f221ff33";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":564},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":566},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":567}} as const;
export const projectionSha256 = "ae493e18f64b8e906e86db991bc52f9a01354e06b4bca8ce9046c5eeed174473";
