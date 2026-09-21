import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP014",
  "inputSha256": "2a535cc878a3d6fee52853ca13af2be41514f281efe64a13f134193f8b5626b6",
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
      "end": 37,
      "text": "Supplier portal verification required"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 37,
      "text": "The supplier portal is under review. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 37,
      "end": 125,
      "text": "Enter your company login, password, and finance approval code in the attached worksheet."
    }
  ],
  "passA": {
    "requestSha256": "e69e7919e40737391b5cbadcede0ebe538d72e5e266a2f7be3185c1fcd95d79e",
    "capturedAt": "2026-09-20T23:43:21.455Z",
    "elapsedMs": 136.8792919999978,
    "successfulAttemptElapsedMs": 135.50020800000493,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.96
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.81
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.07
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.17
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.73
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.31
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.07
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
          "noul": 0.04
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
            "mixed_or_unknown": 0.04,
            "independently_established": 0.02,
            "sender_supplied": 0.92,
            "no_sensitive_action": 0.02
          },
          "confidence": 0.9
        }
      },
      "usage": {
        "input_tokens": 3283,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "8a50a2b563041b20699227275f66d46fc87246d9a2f2d8b4c18ebb5dc99432af",
    "capturedAt": "2026-09-20T23:43:21.608Z",
    "elapsedMs": 151.83958300000086,
    "successfulAttemptElapsedMs": 150.38729199999943,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 1,
            "subject:0": 0,
            "body:0": 0,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.86,
            "NONE": 0.14,
            "body:0": 0,
            "subject:0": 0
          },
          "confidence": 0.81
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.38,
            "NONE": 0.19,
            "body:0": 0.27,
            "subject:0": 0.16
          },
          "confidence": 0.18
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.18,
            "NONE": 0.81,
            "body:0": 0.01,
            "subject:0": 0
          },
          "confidence": 0.75
        }
      },
      "usage": {
        "input_tokens": 1504,
        "output_tokens": 227
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 290.7167499999996,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H1"
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
        "status": "not_requested",
        "segmentId": null
      },
      "authority_claim": {
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "none_selected",
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
    "seq": 558,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP014",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:21.318Z",
    "offsetMs": 0.8615419999987353
  },
  {
    "seq": 559,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP014",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:21.454Z",
    "offsetMs": 136.87949999999546,
    "elapsedMs": 135.50020800000493,
    "outcome": "success"
  },
  {
    "seq": 560,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP014",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:21.457Z",
    "offsetMs": 139.47229199999856
  },
  {
    "seq": 561,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP014",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:21.608Z",
    "offsetMs": 290.4201249999969,
    "elapsedMs": 150.38729199999943,
    "outcome": "success"
  },
  {
    "seq": 562,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP014",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:21.608Z",
    "offsetMs": 290.7631249999977,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "fbfa68a3cf82462a3a4780018bdd8813c6bc84225e70878c08484adc0ae48820";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":559},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":561},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":562}} as const;
export const projectionSha256 = "16b93c409655bab583d167e116ecc22068252e1122b59314a478c0a636f460fe";
