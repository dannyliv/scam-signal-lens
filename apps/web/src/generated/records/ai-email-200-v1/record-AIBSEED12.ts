import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIBSEED12",
  "inputSha256": "84d72ca32fc021b17de07883d31dc393a8fec80035d91ef6dcb6413d6cf53a83",
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
      "text": "Exercise: identify the warning signs"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 29,
      "text": "Security-awareness exercise. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 29,
      "end": 127,
      "text": "Example of a suspicious message: “Buy gift cards now, send me the PINs, and do not tell finance.” "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 127,
      "end": 183,
      "text": "That is a quotation for discussion, not an instruction. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 183,
      "end": 221,
      "text": "Do not buy anything or send any code. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 221,
      "end": 277,
      "text": "Discuss why the request should be independently checked."
    },
    {
      "id": "userContext:0",
      "source": "userContext",
      "start": 0,
      "end": 83,
      "text": "This is the text of an assigned security-awareness exercise in the learning portal."
    }
  ],
  "passA": {
    "requestSha256": "f4822bb03e6d60c47992451d891cba8051498d1f4759e1b73dc1c6e4e018c121",
    "capturedAt": "2026-09-20T23:43:15.253Z",
    "elapsedMs": 162.23212499999863,
    "successfulAttemptElapsedMs": 160.91345899999942,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.1
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.05
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.07
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.12
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.13
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.16
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.12
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.17
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.42
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "educational_or_quoted",
          "probabilities": {
            "educational_or_quoted": 0.93,
            "mixed_or_unclear": 0,
            "informational": 0,
            "active_request": 0.07
          },
          "confidence": 0.91
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.99,
            "sender_supplied": 0.01,
            "mixed_or_unknown": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 3338,
        "output_tokens": 353
      }
    }
  },
  "passB": {
    "requestSha256": "99b0916c31003d351133bff4d5450ab0a553e06d2617c118e47aedc62cee9c24",
    "capturedAt": "2026-09-20T23:43:15.440Z",
    "elapsedMs": 185.80104100000244,
    "successfulAttemptElapsedMs": 184.58958300000086,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:2": 0,
            "NONE": 0.24,
            "body:3": 0,
            "body:0": 0,
            "body:1": 0,
            "body:4": 0.76,
            "subject:0": 0
          },
          "confidence": 0.71
        }
      },
      "usage": {
        "input_tokens": 745,
        "output_tokens": 89
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 349.91770899999756,
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
        "status": "not_requested",
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
        "segmentId": "body:4"
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
    "seq": 490,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED12",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:15.091Z",
    "offsetMs": 0.8108339999998861
  },
  {
    "seq": 491,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED12",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:15.252Z",
    "offsetMs": 162.23312499999884,
    "elapsedMs": 160.91345899999942,
    "outcome": "success"
  },
  {
    "seq": 492,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED12",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:15.255Z",
    "offsetMs": 164.61874999999782
  },
  {
    "seq": 493,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED12",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:15.440Z",
    "offsetMs": 349.72083399999974,
    "elapsedMs": 184.58958300000086,
    "outcome": "success"
  },
  {
    "seq": 494,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED12",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:15.440Z",
    "offsetMs": 349.97441699999763,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "4670cf76ea833cc5d0bb054d3720a6b8e5c26ca593259a9cbca158186ca7b450";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":491},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":493},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":494}} as const;
export const projectionSha256 = "db54b59271d7722f2d04c7b5b314b92e8ba8753b45536af007fa2789fd895b0c";
