import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP054",
  "inputSha256": "71c2ead44e527156fc8199bfb9b0800ef89bb60c37c04f6d0b10fc2d37daaf41",
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
      "text": "Company match requires a payment card"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 101,
      "text": "Your donation can be matched if you provide a card number, security code, and payroll login in reply."
    }
  ],
  "passA": {
    "requestSha256": "6ff8d2b6c50564f5c051c4763738a2a1cbfe5a7cb0c661ff0f35f1cc73a15738",
    "capturedAt": "2026-09-20T23:43:34.980Z",
    "elapsedMs": 171.7069580000025,
    "successfulAttemptElapsedMs": 170.00400000000081,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.82
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.98
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.34
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.16
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.82
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.25
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.29
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.03
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.03,
            "no_sensitive_action": 0,
            "independently_established": 0.01,
            "sender_supplied": 0.96
          },
          "confidence": 0.94
        }
      },
      "usage": {
        "input_tokens": 3283,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "9b028c47b611e1f73ac037d608de1b497a1151ef6478aa628ed27b3b22624b62",
    "capturedAt": "2026-09-20T23:43:35.169Z",
    "elapsedMs": 187.3940419999999,
    "successfulAttemptElapsedMs": 186.20887499999662,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.96,
            "subject:0": 0,
            "NONE": 0.04
          },
          "confidence": 0.94
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 1,
            "subject:0": 0,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.66,
            "subject:0": 0.03,
            "NONE": 0.31
          },
          "confidence": 0.5
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.49,
            "subject:0": 0.46,
            "NONE": 0.05
          },
          "confidence": 0.24
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.13,
            "subject:0": 0,
            "NONE": 0.87
          },
          "confidence": 0.8
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.43,
            "subject:0": 0.05,
            "NONE": 0.52
          },
          "confidence": 0.28
        }
      },
      "usage": {
        "input_tokens": 2007,
        "output_tokens": 285
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 360.7754580000037,
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
        "status": "low_confidence",
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
    "seq": 758,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP054",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:34.809Z",
    "offsetMs": 1.1254580000022543
  },
  {
    "seq": 759,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP054",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:34.980Z",
    "offsetMs": 171.7101660000044,
    "elapsedMs": 170.00400000000081,
    "outcome": "success"
  },
  {
    "seq": 760,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP054",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:34.982Z",
    "offsetMs": 173.67825000000448
  },
  {
    "seq": 761,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP054",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:35.169Z",
    "offsetMs": 360.3780410000036,
    "elapsedMs": 186.20887499999662,
    "outcome": "success"
  },
  {
    "seq": 762,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP054",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:35.169Z",
    "offsetMs": 360.86212499999965,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "e0b595c413625ed7801f5e49827e445dc00ae8108aef8756f362b76a02ebc54d";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":759},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":761},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":762}} as const;
export const projectionSha256 = "24ad34c8afb1bbb373f47eaf8c6d0a575a1294e8d9badc617382e2925626ddef";
