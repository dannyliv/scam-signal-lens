import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP004",
  "inputSha256": "9f1abc162e012af940b6d605610096a1a2f45e999f394c2c480bfb2755b5ba51",
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
      "text": "Urgent change to payment instructions"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 39,
      "text": "Our bank account changed this morning. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 39,
      "end": 148,
      "text": "Cancel the scheduled invoice payment and send it to the new account details below before the transfer cutoff."
    }
  ],
  "passA": {
    "requestSha256": "903a4ce5642716e65f62006a94a24f3230e6841009fc781f8f00c48b6e3203ed",
    "capturedAt": "2026-09-20T23:43:17.001Z",
    "elapsedMs": 642.4436669999996,
    "successfulAttemptElapsedMs": 641.210541000004,
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
          "noul": 0.47
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.98
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.92
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.95
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.69
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.52
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.2
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
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "informational": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.99
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
        "input_tokens": 3288,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "7a5cf5017bb0d40e5fa235bbc6da489117caa3867a530d57877eb540d59bac97",
    "capturedAt": "2026-09-20T23:43:17.190Z",
    "elapsedMs": 187.62233399999968,
    "successfulAttemptElapsedMs": 186.09558400000242,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0.01,
            "NONE": 0.26,
            "body:1": 0.72,
            "body:0": 0.01
          },
          "confidence": 0.63
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0,
            "body:1": 1,
            "body:0": 0
          },
          "confidence": 1
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.01,
            "body:1": 0.98,
            "body:0": 0.01
          },
          "confidence": 0.98
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0.01,
            "NONE": 0,
            "body:1": 0.99,
            "body:0": 0
          },
          "confidence": 0.98
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.01,
            "NONE": 0.28,
            "body:1": 0.11,
            "body:0": 0.6
          },
          "confidence": 0.46
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.01,
            "NONE": 0.6,
            "body:1": 0.38,
            "body:0": 0.01
          },
          "confidence": 0.47
        }
      },
      "usage": {
        "input_tokens": 2122,
        "output_tokens": 339
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 832.5382919999975,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H3"
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
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 510,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP004",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:16.359Z",
    "offsetMs": 0.8118329999997513
  },
  {
    "seq": 511,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP004",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:17.000Z",
    "offsetMs": 642.4376669999983,
    "elapsedMs": 641.210541000004,
    "outcome": "success"
  },
  {
    "seq": 512,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP004",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:17.003Z",
    "offsetMs": 645.4891669999997
  },
  {
    "seq": 513,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP004",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:17.190Z",
    "offsetMs": 832.2495829999971,
    "elapsedMs": 186.09558400000242,
    "outcome": "success"
  },
  {
    "seq": 514,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP004",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:17.190Z",
    "offsetMs": 832.5854580000014,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a57565d06a576407c216ad3abf6f4f61cae0953900c00a43787af9f7d5202ed3";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":511},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":513},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":514}} as const;
export const projectionSha256 = "732c8fe07096c389c19253a2bccd83dc0dd5756bf7e34b828bffdd7e13ae2ff7";
