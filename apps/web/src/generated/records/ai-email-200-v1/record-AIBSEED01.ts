import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIBSEED01",
  "inputSha256": "492c05ecc317a04c5bfd1922b6083175768812948438dfbea28bf2491ac16da2",
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
      "end": 59,
      "text": "Your Parcel Trail order PT-1042 is out for delivery today. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 59,
      "end": 134,
      "text": "Status details are available at hxxps://parceltrail.example/track/PT-1042. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 134,
      "end": 185,
      "text": "You can also open the store app and select Orders. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 185,
      "end": 215,
      "text": "No payment or reply is needed."
    },
    {
      "id": "userContext:0",
      "source": "userContext",
      "start": 0,
      "end": 66,
      "text": "I ordered this item and turned on shipping texts during checkout. "
    },
    {
      "id": "userContext:1",
      "source": "userContext",
      "start": 66,
      "end": 114,
      "text": "The store app shows the same tracking reference."
    }
  ],
  "passA": {
    "requestSha256": "d334d08d609d47f8f178ae036a7110f69dad9010c5fc9859e7a31a09a67da07c",
    "capturedAt": "2026-09-20T23:43:11.641Z",
    "elapsedMs": 164.83124999999927,
    "successfulAttemptElapsedMs": 163.2846669999999,
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
          "noul": 0.05
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.46
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.07
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
          "noul": 0.91
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 1,
            "educational_or_quoted": 0,
            "active_request": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "sender_supplied": 0.02,
            "independently_established": 0.14,
            "no_sensitive_action": 0.84
          },
          "confidence": 0.78
        }
      },
      "usage": {
        "input_tokens": 3333,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "18868327657c8a16871d631416b0ee5a101da6fa79c81b9ab96313a82de91391",
    "capturedAt": "2026-09-20T23:43:11.752Z",
    "elapsedMs": 108.2667500000025,
    "successfulAttemptElapsedMs": 106.70991700000013,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.01,
            "body:3": 0.02,
            "NONE": 0.82,
            "body:2": 0.01,
            "body:0": 0.14
          },
          "confidence": 0.77
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:1": 0,
            "body:3": 0,
            "NONE": 0,
            "body:0": 0,
            "body:2": 1
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 1041,
        "output_tokens": 134
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 276.0394579999993,
  "derived": {
    "concern": "few_warning_signs",
    "triggeredRuleIds": [],
    "contextWarnings": [],
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
        "status": "none_selected",
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
        "segmentId": "body:2"
      },
      "analyzer_instruction": {
        "status": "not_requested",
        "segmentId": null
      }
    },
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 435,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED01",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:11.477Z",
    "offsetMs": 0.9620419999992009
  },
  {
    "seq": 436,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED01",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:11.641Z",
    "offsetMs": 164.8324999999968,
    "elapsedMs": 163.2846669999999,
    "outcome": "success"
  },
  {
    "seq": 437,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED01",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:11.644Z",
    "offsetMs": 168.48758299999827
  },
  {
    "seq": 438,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED01",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:11.752Z",
    "offsetMs": 275.851749999998,
    "elapsedMs": 106.70991700000013,
    "outcome": "success"
  },
  {
    "seq": 439,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED01",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:11.752Z",
    "offsetMs": 276.08066699999836,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "9b0f69678bc4705303bdb04188dcf4df57dc84c3e1883938ae8292532835f381";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":436},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":438},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":439}} as const;
export const projectionSha256 = "a2563f1ff258339e93794779054ce221cd8dc2fa3515a18fbc6fd795d8bdd000";
