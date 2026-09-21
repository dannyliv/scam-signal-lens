import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIBSEED11",
  "inputSha256": "42daf86afa13133a26d698fd77343032d2068a39fba7baaf1a85c10c1c04ae5d",
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
      "end": 33,
      "text": "Forms before your scheduled visit"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 40,
      "text": "Your appointment is tomorrow at 10 a.m. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 40,
      "end": 159,
      "text": "Please review your contact information in the patient portal you normally use, or bring corrections to the front desk. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 159,
      "end": 224,
      "text": "Do not send medical details or payment-card information by email."
    },
    {
      "id": "userContext:0",
      "source": "userContext",
      "start": 0,
      "end": 82,
      "text": "I scheduled this visit last week and have used the clinic’s patient portal before."
    }
  ],
  "passA": {
    "requestSha256": "b595530679fd85a591dcd502c697af4edbde877dc66c8ad6e35b647bd21a4d69",
    "capturedAt": "2026-09-20T23:43:14.988Z",
    "elapsedMs": 152.22899999999936,
    "successfulAttemptElapsedMs": 151.11287500000253,
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
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.79
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.71
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.96
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.99,
            "informational": 0.01,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.98
        },
        "request_route": {
          "type": "choice",
          "choice": "independently_established",
          "probabilities": {
            "independently_established": 0.64,
            "no_sensitive_action": 0.36,
            "sender_supplied": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.51
        }
      },
      "usage": {
        "input_tokens": 3321,
        "output_tokens": 353
      }
    }
  },
  "passB": {
    "requestSha256": "92768d7cc42bc1f563bfe9b41938d8720917f45c05ef4f563860e33eea61ce3b",
    "capturedAt": "2026-09-20T23:43:15.088Z",
    "elapsedMs": 98.6942080000008,
    "successfulAttemptElapsedMs": 97.52116599999863,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "body:1": 0.65,
            "NONE": 0.08,
            "subject:0": 0.11,
            "body:0": 0.16
          },
          "confidence": 0.56
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0.02,
            "body:1": 0.51,
            "subject:0": 0.01,
            "NONE": 0.38,
            "body:0": 0.08
          },
          "confidence": 0.39
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "body:1": 1,
            "NONE": 0,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 1332,
        "output_tokens": 201
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 252.95545800000036,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "request_route_low_confidence"
    ],
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
        "status": "low_confidence",
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 485,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED11",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:14.836Z",
    "offsetMs": 0.737582999998267
  },
  {
    "seq": 486,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED11",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:14.988Z",
    "offsetMs": 152.23050000000148,
    "elapsedMs": 151.11287500000253,
    "outcome": "success"
  },
  {
    "seq": 487,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED11",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:14.990Z",
    "offsetMs": 154.69245800000135
  },
  {
    "seq": 488,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED11",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:15.088Z",
    "offsetMs": 252.71608299999934,
    "elapsedMs": 97.52116599999863,
    "outcome": "success"
  },
  {
    "seq": 489,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED11",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:15.088Z",
    "offsetMs": 253.01204199999847,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "23f3426ead230be966e7488cfb7813a8bb63adc68f822f3783716f0687ce471d";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":486},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":488},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":489}} as const;
export const projectionSha256 = "e75f37360be86800546efb688722b7da3cf5213a1f5d3e591e09ca9299b625ae";
