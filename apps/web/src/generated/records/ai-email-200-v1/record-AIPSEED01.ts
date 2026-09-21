import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIPSEED01",
  "inputSha256": "21ce96c825055ef0aac5670d4320328c7dde361a41c851a76b1efa024400299a",
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
      "end": 72,
      "text": "Parcel Desk: Your delivery is paused because the address is incomplete. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 72,
      "end": 221,
      "text": "Pay the $1.65 redelivery charge and enter your full card details at hxxps://parcel-desk.example/fee within 30 minutes or the parcel will be returned."
    },
    {
      "id": "userContext:0",
      "source": "userContext",
      "start": 0,
      "end": 60,
      "text": "This message arrived without a tracking-alert subscription. "
    },
    {
      "id": "userContext:1",
      "source": "userContext",
      "start": 60,
      "end": 108,
      "text": "I have not checked any order or carrier account."
    }
  ],
  "passA": {
    "requestSha256": "63c108419ec506b483d573780f7abb8bb176ef5d3952f49017df382b0aa3a67e",
    "capturedAt": "2026-09-20T23:43:46.437Z",
    "elapsedMs": 158.55050000000483,
    "successfulAttemptElapsedMs": 156.7926660000012,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.09
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.98
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.97
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.98
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.82
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.55
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.45
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
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0,
            "sender_supplied": 1,
            "independently_established": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3327,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "295d5aac4d0bf0c5956df2fe2f5f97733a93be096869e7ee5005311b4e1789b5",
    "capturedAt": "2026-09-20T23:43:46.588Z",
    "elapsedMs": 148.56245900000067,
    "successfulAttemptElapsedMs": 146.7925830000022,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0,
            "body:1": 1,
            "body:0": 0
          },
          "confidence": 1
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0,
            "body:1": 1,
            "body:0": 0
          },
          "confidence": 1
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0,
            "body:1": 1,
            "body:0": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.17,
            "body:1": 0.11,
            "body:0": 0.72
          },
          "confidence": 0.58
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.67,
            "body:1": 0.33,
            "body:0": 0
          },
          "confidence": 0.5
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.35,
            "body:1": 0.65,
            "body:0": 0
          },
          "confidence": 0.46
        }
      },
      "usage": {
        "input_tokens": 2194,
        "output_tokens": 286
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 309.9268329999977,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
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
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 926,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED01",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:46.279Z",
    "offsetMs": 1.1376249999957508
  },
  {
    "seq": 927,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED01",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:46.437Z",
    "offsetMs": 158.5510409999988,
    "elapsedMs": 156.7926660000012,
    "outcome": "success"
  },
  {
    "seq": 928,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED01",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:46.440Z",
    "offsetMs": 162.04395799999475
  },
  {
    "seq": 929,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED01",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:46.588Z",
    "offsetMs": 309.51095799999894,
    "elapsedMs": 146.7925830000022,
    "outcome": "success"
  },
  {
    "seq": 930,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED01",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:46.588Z",
    "offsetMs": 310.0181659999944,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "91c8cfbb76bdb7c6fdba9b04d934b8b5c163b4ab949a0137d4ec8ca8b783fca4";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":927},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":929},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":930}} as const;
export const projectionSha256 = "e7e049ed11c83a86026e00a35edb0a5b4f41b3b9abdb96767f0204407d5e29ae";
