import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP009",
  "inputSha256": "1507c3b7590545d4b1cd85906a2a2289c013418e94544b0e5d7eaeec6b2aa9e9",
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
      "end": 22,
      "text": "Password expires today"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 46,
      "text": "Your password will be disabled in 30 minutes. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 46,
      "end": 129,
      "text": "Reply with your current password and a new password so the help desk can update it."
    }
  ],
  "passA": {
    "requestSha256": "ff027881f20068edb821a159b82609b642d2f7ee9dda6d45259deb5bfd284b14",
    "capturedAt": "2026-09-20T23:43:18.971Z",
    "elapsedMs": 180.03758300000482,
    "successfulAttemptElapsedMs": 178.64170799999556,
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
          "noul": 0.38
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
          "noul": 0.98
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
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
          "noul": 0.02
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
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0,
            "active_request": 1
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.91,
            "no_sensitive_action": 0.01,
            "independently_established": 0.07,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 3287,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "b0eb4297a3d25c5b9b9a2fcf51b55bda909c6be11f93f0f6c71e95127d3d8fbb",
    "capturedAt": "2026-09-20T23:43:19.427Z",
    "elapsedMs": 453.78245900000184,
    "successfulAttemptElapsedMs": 452.2041670000035,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 1,
            "NONE": 0,
            "body:0": 0,
            "subject:0": 0
          },
          "confidence": 1
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.52,
            "NONE": 0.48,
            "body:0": 0,
            "subject:0": 0
          },
          "confidence": 0.35
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.01,
            "NONE": 0,
            "body:0": 0.98,
            "subject:0": 0.01
          },
          "confidence": 0.99
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 1,
            "NONE": 0,
            "body:0": 0,
            "subject:0": 0
          },
          "confidence": 0.99
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.53,
            "NONE": 0.46,
            "body:0": 0.01,
            "subject:0": 0
          },
          "confidence": 0.37
        }
      },
      "usage": {
        "input_tokens": 1813,
        "output_tokens": 285
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 636.0371250000026,
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
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 535,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP009",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:18.792Z",
    "offsetMs": 0.9136670000007143
  },
  {
    "seq": 536,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP009",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:18.971Z",
    "offsetMs": 180.03854200000205,
    "elapsedMs": 178.64170799999556,
    "outcome": "success"
  },
  {
    "seq": 537,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP009",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:18.973Z",
    "offsetMs": 182.68604200000118
  },
  {
    "seq": 538,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP009",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:19.426Z",
    "offsetMs": 635.6410840000026,
    "elapsedMs": 452.2041670000035,
    "outcome": "success"
  },
  {
    "seq": 539,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP009",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:19.427Z",
    "offsetMs": 636.0840420000022,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7494fc54f5e4b1553f10b5c9eb5e952f9c629c7eb090d41c7173c0e183daa360";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":536},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":538},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":539}} as const;
export const projectionSha256 = "6873a1050b0cc47d2319c5943919083143c41f2a5e52fb67398b3bd3821b569d";
