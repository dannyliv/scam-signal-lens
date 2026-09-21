import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP061",
  "inputSha256": "b0a1882827943e1ac9c6bbfb5f363aa885a2f9332a1685883f852dd1adb6d242",
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
      "end": 42,
      "text": "Receipt correction needs bank verification"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 98,
      "text": "Reply with your routing number and online banking password so we can correct the donation receipt."
    }
  ],
  "passA": {
    "requestSha256": "606d735eeb3aa4cd268db17b1cd249ad35ab0e31ecc6ae04925752de86a52b5c",
    "capturedAt": "2026-09-20T23:43:37.589Z",
    "elapsedMs": 201.14108300000225,
    "successfulAttemptElapsedMs": 199.3788330000025,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.99
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.98
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.08
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.09
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.1
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.68
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.44
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.09
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
          "noul": 0.04
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
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.01,
            "sender_supplied": 0.96,
            "independently_established": 0.02,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.94
        }
      },
      "usage": {
        "input_tokens": 3278,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "de1bdd663f9080f9589b2a7a8d38c4e1580e37f7689a6d52bba98987f22c81c0",
    "capturedAt": "2026-09-20T23:43:37.827Z",
    "elapsedMs": 236.22204200000124,
    "successfulAttemptElapsedMs": 234.37449999999808,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0,
            "body:0": 1
          },
          "confidence": 1
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0,
            "body:0": 1
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.16,
            "NONE": 0.29,
            "body:0": 0.55
          },
          "confidence": 0.33
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.76,
            "body:0": 0.24
          },
          "confidence": 0.63
        }
      },
      "usage": {
        "input_tokens": 1423,
        "output_tokens": 191
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 440.2260410000017,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H1"
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
        "status": "not_requested",
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
    "seq": 793,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP061",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:37.388Z",
    "offsetMs": 1.1457500000033178
  },
  {
    "seq": 794,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP061",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:37.588Z",
    "offsetMs": 201.14150000000518,
    "elapsedMs": 199.3788330000025,
    "outcome": "success"
  },
  {
    "seq": 795,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP061",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:37.592Z",
    "offsetMs": 204.97675000000163
  },
  {
    "seq": 796,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP061",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:37.827Z",
    "offsetMs": 439.9775000000009,
    "elapsedMs": 234.37449999999808,
    "outcome": "success"
  },
  {
    "seq": 797,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP061",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:37.827Z",
    "offsetMs": 440.27804100000503,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "66b6861632db9d4d0f396ccfde8d4bf49a66ea21f1cbf30a33f0c88cdc076118";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":794},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":796},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":797}} as const;
export const projectionSha256 = "d9641a747f9be72ac8f1bbe01607dd045dbfb6cab52484501959934dc7af1592";
