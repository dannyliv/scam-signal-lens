import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP048",
  "inputSha256": "ce085ed3ebb309238b607710ecdb6530f7ca84fb235cacbb3d335bf739e86a47",
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
      "text": "Vendor record needs an urgent update"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 109,
      "text": "To keep invoices moving, reply with the vendor portal login and bank authorization token for a record update."
    }
  ],
  "passA": {
    "requestSha256": "8a93b6843787656b53e9fdf6e48d181effe33e07fa3f09967e9d7be651145050",
    "capturedAt": "2026-09-20T23:43:32.730Z",
    "elapsedMs": 115.41266700000415,
    "successfulAttemptElapsedMs": 113.53837499999645,
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
          "noul": 0.96
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.11
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.2
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.86
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.38
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.46
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.06
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 1,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0,
            "sender_supplied": 0.97,
            "independently_established": 0.02,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 3282,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "bf7ff93004a2f3ea40f2a476986a1c1bc8bde5adb85137b375730a2cce975fc7",
    "capturedAt": "2026-09-20T23:43:32.913Z",
    "elapsedMs": 181.42799999999988,
    "successfulAttemptElapsedMs": 180.28345800000534,
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
            "body:0": 0.98,
            "subject:0": 0,
            "NONE": 0.02
          },
          "confidence": 0.97
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.79,
            "subject:0": 0.2,
            "NONE": 0.01
          },
          "confidence": 0.68
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.38,
            "subject:0": 0.07,
            "NONE": 0.55
          },
          "confidence": 0.33
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.43,
            "subject:0": 0,
            "NONE": 0.57
          },
          "confidence": 0.35
        }
      },
      "usage": {
        "input_tokens": 1713,
        "output_tokens": 236
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 298.7047079999975,
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
    "seq": 728,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP048",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:32.616Z",
    "offsetMs": 1.2458750000005239
  },
  {
    "seq": 729,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP048",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:32.730Z",
    "offsetMs": 115.41474999999627,
    "elapsedMs": 113.53837499999645,
    "outcome": "success"
  },
  {
    "seq": 730,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP048",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:32.732Z",
    "offsetMs": 117.5811659999963
  },
  {
    "seq": 731,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP048",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:32.913Z",
    "offsetMs": 298.3362909999996,
    "elapsedMs": 180.28345800000534,
    "outcome": "success"
  },
  {
    "seq": 732,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP048",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:32.914Z",
    "offsetMs": 298.84166600000026,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d05aae098c98d6d4d4e8a070f36651b20b3ce42b0f9321d476127c4a2278ab3d";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":729},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":731},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":732}} as const;
export const projectionSha256 = "668db99183c6c195f6de66da20f23688369505a62454bae9d5345195491b41aa";
