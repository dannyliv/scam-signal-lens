import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIPSEED11",
  "inputSha256": "64cac4b6474c3f9fdc62a2e51f993564004ca557788ee7e87bc9268acbd5025f",
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
      "end": 24,
      "text": "Your cash award is ready"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 49,
      "text": "You have been selected for a $15,000 cash award. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 49,
      "end": 123,
      "text": "Before we release it, send a $125 processing payment to the payout agent. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 123,
      "end": 165,
      "text": "We cannot deduct this fee from the award. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 165,
      "end": 219,
      "text": "Your prize will be reassigned if you do not pay today."
    },
    {
      "id": "userContext:0",
      "source": "userContext",
      "start": 0,
      "end": 49,
      "text": "I did not enter a competition run by this sender."
    }
  ],
  "passA": {
    "requestSha256": "c7e5bdb3e5cd6f2ffbcd2ac8a163b0d13e40f00f297eee9cd6e846329f9ddbb7",
    "capturedAt": "2026-09-20T23:43:50.050Z",
    "elapsedMs": 142.562208000003,
    "successfulAttemptElapsedMs": 140.82095899998967,
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
          "noul": 0.41
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.99
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.18
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.98
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.25
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.47
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.97
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.72
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.02
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "mixed_or_unclear": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.01,
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "sender_supplied": 0.99
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 3329,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "d86b67f5ef82ab08f4e6ae4ac7d97f3dee9284ab7999b82682657437eb986182",
    "capturedAt": "2026-09-20T23:43:50.229Z",
    "elapsedMs": 177.62937500000407,
    "successfulAttemptElapsedMs": 176.09187499999825,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.55,
            "body:2": 0,
            "body:0": 0,
            "body:3": 0.01,
            "NONE": 0.44,
            "subject:0": 0
          },
          "confidence": 0.46
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 1,
            "body:2": 0,
            "body:0": 0,
            "body:3": 0,
            "NONE": 0,
            "subject:0": 0
          },
          "confidence": 1
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:1": 0.01,
            "body:2": 0,
            "body:0": 0,
            "body:3": 0.99,
            "NONE": 0,
            "subject:0": 0
          },
          "confidence": 0.99
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.21,
            "body:2": 0.01,
            "body:0": 0.01,
            "body:3": 0.01,
            "NONE": 0.76,
            "subject:0": 0
          },
          "confidence": 0.71
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.05,
            "body:2": 0,
            "body:0": 0,
            "body:3": 0.14,
            "NONE": 0.81,
            "subject:0": 0
          },
          "confidence": 0.77
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 1,
            "body:2": 0,
            "body:0": 0,
            "body:3": 0,
            "NONE": 0,
            "subject:0": 0
          },
          "confidence": 1
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.01,
            "body:2": 0,
            "body:0": 0.72,
            "body:3": 0,
            "NONE": 0.26,
            "subject:0": 0.01
          },
          "confidence": 0.66
        }
      },
      "usage": {
        "input_tokens": 2846,
        "output_tokens": 520
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 322.205833,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H2"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "low_confidence",
        "segmentId": null
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
        "segmentId": "body:3"
      },
      "authority_claim": {
        "status": "none_selected",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "none_selected",
        "segmentId": null
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
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 976,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED11",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:49.908Z",
    "offsetMs": 1.1742919999960577
  },
  {
    "seq": 977,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED11",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:50.049Z",
    "offsetMs": 142.56387499999255,
    "elapsedMs": 140.82095899998967,
    "outcome": "success"
  },
  {
    "seq": 978,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED11",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:50.052Z",
    "offsetMs": 145.153999999995
  },
  {
    "seq": 979,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED11",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:50.229Z",
    "offsetMs": 321.8950419999892,
    "elapsedMs": 176.09187499999825,
    "outcome": "success"
  },
  {
    "seq": 980,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED11",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:50.229Z",
    "offsetMs": 322.2645829999965,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d9e5c7580c9ee14a9e016e9c1df0e4b59393321ed1d3f8b7eb744f0752faed12";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":977},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":979},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":980}} as const;
export const projectionSha256 = "699ba2f3e3ca945adbd1401ead44381cf8856cd3f118a6b22e20ed3a3777490a";
