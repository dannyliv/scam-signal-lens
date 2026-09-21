import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB023",
  "inputSha256": "6ad2b93c113ba16b62905c3007eb0914a2e6e5471ad422397d126f7ac3b50097",
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
      "end": 31,
      "text": "Your tax statement is available"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 59,
      "text": "Your tax statement is now available in the payroll portal. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 59,
      "end": 138,
      "text": "For your protection, this email does not contain an attachment or a login link."
    }
  ],
  "passA": {
    "requestSha256": "62ebb3c8155575cbf3e4c9879335e9c43007d00e9f7f0ad1d8b09f85c74b5002",
    "capturedAt": "2026-09-20T23:42:50.335Z",
    "elapsedMs": 171.4345000000003,
    "successfulAttemptElapsedMs": 170.51083300000028,
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
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.73
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.81
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0,
            "active_request": 0,
            "educational_or_quoted": 0,
            "informational": 1
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.71,
            "independently_established": 0.29,
            "sender_supplied": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.61
        }
      },
      "usage": {
        "input_tokens": 3288,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "a6f370b806f5f362bd194a6f298055167c50690fd90ecbb8d1b29b03dcab7396",
    "capturedAt": "2026-09-20T23:42:50.470Z",
    "elapsedMs": 132.27466600000025,
    "successfulAttemptElapsedMs": 130.70008299999972,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.06,
            "body:0": 0.54,
            "NONE": 0.37,
            "subject:0": 0.03
          },
          "confidence": 0.37
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.04,
            "body:0": 0.84,
            "NONE": 0.12,
            "subject:0": 0
          },
          "confidence": 0.77
        }
      },
      "usage": {
        "input_tokens": 916,
        "output_tokens": 118
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 306.72641699999986,
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
        "segmentId": "body:0"
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
    "seq": 109,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB023",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:50.164Z",
    "offsetMs": 0.5477499999997235
  },
  {
    "seq": 110,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB023",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:50.334Z",
    "offsetMs": 171.4352919999992,
    "elapsedMs": 170.51083300000028,
    "outcome": "success"
  },
  {
    "seq": 111,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB023",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:50.338Z",
    "offsetMs": 175.0975839999992
  },
  {
    "seq": 112,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB023",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:50.469Z",
    "offsetMs": 306.43262499999946,
    "elapsedMs": 130.70008299999972,
    "outcome": "success"
  },
  {
    "seq": 113,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB023",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:50.470Z",
    "offsetMs": 306.813709,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0ba3edd919e565dc1b460910bec65a80a44fb6831ae2bd7a9b68eb5d2355c89c";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":110},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":112},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":113}} as const;
export const projectionSha256 = "486021f956b2cc777764ee6495a94bcc62235f555458e22b91c5695439c8c205";
