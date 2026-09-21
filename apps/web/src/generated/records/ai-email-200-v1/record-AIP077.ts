import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP077",
  "inputSha256": "932be158d2647d75d508d8395c3ec821330d1c1aab8037e4ca23e494760cf9b1",
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
      "text": "Policy violation detected"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 95,
      "text": "Send your network password and temporary MFA code now or your workstation will be disconnected."
    }
  ],
  "passA": {
    "requestSha256": "e6ecf019119a29a12cfa82537638f1c0adb084e7c399708e41b4c2ade933c291",
    "capturedAt": "2026-09-20T23:43:42.445Z",
    "elapsedMs": 201.1800000000003,
    "successfulAttemptElapsedMs": 199.58558300000004,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.98
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.53
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
          "noul": 0.98
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.63
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.65
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0.01,
            "informational": 0,
            "mixed_or_unclear": 0,
            "active_request": 0.99
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0.02,
            "sender_supplied": 0.76,
            "mixed_or_unknown": 0.17,
            "no_sensitive_action": 0.05
          },
          "confidence": 0.67
        }
      },
      "usage": {
        "input_tokens": 3275,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "1998c06bce55e4e58b367afd20aa4c4aecccf2a6b7d7fa6d7bc066925a748dcc",
    "capturedAt": "2026-09-20T23:43:42.607Z",
    "elapsedMs": 160.23904200000106,
    "successfulAttemptElapsedMs": 158.56316700000025,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 1,
            "subject:0": 0,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.59,
            "subject:0": 0,
            "NONE": 0.41
          },
          "confidence": 0.38
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 1,
            "subject:0": 0,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.41,
            "subject:0": 0.3,
            "NONE": 0.29
          },
          "confidence": 0.12
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.52,
            "subject:0": 0,
            "NONE": 0.48
          },
          "confidence": 0.27
        }
      },
      "usage": {
        "input_tokens": 1671,
        "output_tokens": 240
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 363.7955409999995,
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
    "seq": 871,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP077",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:42.245Z",
    "offsetMs": 1.0252500000060536
  },
  {
    "seq": 872,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP077",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:42.445Z",
    "offsetMs": 201.18129100000078,
    "elapsedMs": 199.58558300000004,
    "outcome": "success"
  },
  {
    "seq": 873,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP077",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:42.448Z",
    "offsetMs": 204.2975409999999
  },
  {
    "seq": 874,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP077",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:42.607Z",
    "offsetMs": 363.45670800000516,
    "elapsedMs": 158.56316700000025,
    "outcome": "success"
  },
  {
    "seq": 875,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP077",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:42.608Z",
    "offsetMs": 363.87512500000594,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "aa4cf0d1fdbf315dff3932eec4b6632a4d1b8dbc7ba9a9318bb704897bdb7c39";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":872},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":874},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":875}} as const;
export const projectionSha256 = "98ba90e10c7345a66d5158175de009171163c9e2f701390a0089f65e5a92d7ad";
