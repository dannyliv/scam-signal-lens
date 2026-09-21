import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIPSEED12",
  "inputSha256": "890ad7469653714264a8b77f1b41ca10b74c0270524d1c78f6d2dcd92dbbe1a2",
  "questionBundleSha256": "e8f1e66cf768b6c7314f1f4b6ad6fe743f7e945c487259b6087353d93f311dd6",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "synthetic_sanitized",
  "policySha256": "3435135d6058476d4262ecbc936abf95af4993b455dfab35adc8b17f3fe6ad6a",
  "requestedModel": "jev-1.13.0",
  "segments": [
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 83,
      "text": "Citylight Energy disconnect team: Your electricity will be shut off in 20 minutes. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 83,
      "end": 166,
      "text": "Buy a $200 prepaid gift card and send the card number here to stop the technician. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 166,
      "end": 221,
      "text": "Our billing line cannot help during a disconnect order."
    },
    {
      "id": "userContext:0",
      "source": "userContext",
      "start": 0,
      "end": 81,
      "text": "I have not reviewed my account or called the utility using the number on my bill."
    }
  ],
  "passA": {
    "requestSha256": "66a3ca0b47206a596173e28e2b634723d7bfd15b6739af48196e60d80fd3b3af",
    "capturedAt": "2026-09-20T23:43:50.378Z",
    "elapsedMs": 147.21187500000815,
    "successfulAttemptElapsedMs": 145.33166599999822,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.18
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.96
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.98
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.98
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
          "noul": 0.94
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.53
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
          "noul": 0.07
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.07
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
            "mixed_or_unknown": 0,
            "sender_supplied": 1,
            "no_sensitive_action": 0,
            "independently_established": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 3320,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "edb005e969dd67005495bb28f11e6f17f9c96fba9105c6ae38acc37ea6acca84",
    "capturedAt": "2026-09-20T23:43:50.483Z",
    "elapsedMs": 102.2585420000105,
    "successfulAttemptElapsedMs": 100.69787499999802,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "body:1": 0.99,
            "body:2": 0,
            "NONE": 0.01
          },
          "confidence": 0.99
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "body:1": 1,
            "body:2": 0,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "body:1": 1,
            "body:2": 0,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.88,
            "body:1": 0.12,
            "body:2": 0,
            "NONE": 0
          },
          "confidence": 0.84
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.92,
            "body:1": 0.03,
            "body:2": 0.04,
            "NONE": 0.01
          },
          "confidence": 0.9
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:0": 0,
            "NONE": 0.03,
            "body:2": 0.81,
            "body:1": 0.16
          },
          "confidence": 0.74
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "body:1": 0.74,
            "body:2": 0,
            "NONE": 0.26
          },
          "confidence": 0.65
        }
      },
      "usage": {
        "input_tokens": 2576,
        "output_tokens": 401
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 251.6707080000051,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H3",
      "H5"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "payment_request": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "unusual_payment_routing": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:0"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:0"
      },
      "verification_bypass": {
        "status": "selected",
        "segmentId": "body:2"
      },
      "advance_fee_or_refund_trap": {
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 981,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED12",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:50.232Z",
    "offsetMs": 1.2938750000030268
  },
  {
    "seq": 982,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED12",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:50.378Z",
    "offsetMs": 147.21337500000664,
    "elapsedMs": 145.33166599999822,
    "outcome": "success"
  },
  {
    "seq": 983,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED12",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:50.381Z",
    "offsetMs": 150.111791000003
  },
  {
    "seq": 984,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED12",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:50.482Z",
    "offsetMs": 251.3992500000022,
    "elapsedMs": 100.69787499999802,
    "outcome": "success"
  },
  {
    "seq": 985,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED12",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:50.483Z",
    "offsetMs": 251.72725000001083,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "e61e22ff99d38303188fd6c951fa21dd8fcb5c981bbf1ecc3b5bdf421358617c";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":982},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":984},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":985}} as const;
export const projectionSha256 = "465337da2a13aa7d12d5dcfeb9df80e8cc720c2ce01027f9eb4240a5e0a9c546";
