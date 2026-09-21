import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB081",
  "inputSha256": "8971375dd2aaf25c173ed435b874797676ff64c7f9e5c0009c0e102eeae9883d",
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
      "text": "Vehicle service completed"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 44,
      "text": "Your scheduled vehicle service is complete. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 44,
      "end": 118,
      "text": "The inspection report is in the dealership account used to book the visit."
    }
  ],
  "passA": {
    "requestSha256": "c2c32ffbc5abf809414226d253f9b99b35eb0fe0b24ccf13aed4d29ebd66a65a",
    "capturedAt": "2026-09-20T23:43:08.529Z",
    "elapsedMs": 166.81595799999923,
    "successfulAttemptElapsedMs": 165.74212499999703,
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
          "noul": 0.02
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.58
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.87
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 1,
            "active_request": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "sender_supplied": 0,
            "independently_established": 0.08,
            "no_sensitive_action": 0.92
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 3280,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "e630b86612296f500cb309c7262cb9cfeb84fd5146f0256d03b286a2deaa2466",
    "capturedAt": "2026-09-20T23:43:08.673Z",
    "elapsedMs": 142.61970799999835,
    "successfulAttemptElapsedMs": 140.81624999999985,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.49,
            "body:0": 0.08,
            "NONE": 0.41,
            "subject:0": 0.02
          },
          "confidence": 0.33
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.99,
            "body:0": 0,
            "subject:0": 0,
            "NONE": 0.01
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 892,
        "output_tokens": 118
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 311.67525000000023,
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
    "seq": 396,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB081",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:08.362Z",
    "offsetMs": 0.6635420000020531
  },
  {
    "seq": 397,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB081",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:08.528Z",
    "offsetMs": 166.8148340000007,
    "elapsedMs": 165.74212499999703,
    "outcome": "success"
  },
  {
    "seq": 398,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB081",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:08.531Z",
    "offsetMs": 169.61966700000266
  },
  {
    "seq": 399,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB081",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:08.673Z",
    "offsetMs": 311.3027920000022,
    "elapsedMs": 140.81624999999985,
    "outcome": "success"
  },
  {
    "seq": 400,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB081",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:08.673Z",
    "offsetMs": 311.74275000000125,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "775b5d23102a0f34cf1c99fbae2234d9d64b0d41c1ec3739661351b7c9d062ed";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":397},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":399},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":400}} as const;
export const projectionSha256 = "a4d2c6e8f6208bba146e337f8f16ee98bc5b5ddb7c6f63552693dfc17425b04d";
