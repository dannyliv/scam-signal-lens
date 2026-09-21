import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB010",
  "inputSha256": "5024fd1ffbff0288981c2307ab354eff01ea73ce198fa4a289bf61dcef3e85ef",
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
      "end": 29,
      "text": "Password updated successfully"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 71,
      "text": "Your account password was updated at 09:42 from a device you approved. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 71,
      "end": 162,
      "text": "If this was unexpected, use the security page you normally visit to review recent activity."
    }
  ],
  "passA": {
    "requestSha256": "67c46339577a7558306ced6b6fed0818a42148bfbb7a87b5cc84617784bec331",
    "capturedAt": "2026-09-20T23:42:46.974Z",
    "elapsedMs": 140.0967499999997,
    "successfulAttemptElapsedMs": 138.50225,
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
          "noul": 0.03
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
          "noul": 0.08
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.33
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
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
            "informational": 0.93,
            "active_request": 0.07,
            "educational_or_quoted": 0
          },
          "confidence": 0.9
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.34,
            "no_sensitive_action": 0.66,
            "sender_supplied": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.55
        }
      },
      "usage": {
        "input_tokens": 3294,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "ee075d56d3a96eb31d13430fb6700e2e3127b66843868f372e4b9b8ad1a61846",
    "capturedAt": "2026-09-20T23:42:47.073Z",
    "elapsedMs": 97.62745899999982,
    "successfulAttemptElapsedMs": 96.42708399999992,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.03,
            "subject:0": 0,
            "body:1": 0.1,
            "NONE": 0.87
          },
          "confidence": 0.82
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "subject:0": 0,
            "body:1": 0.98,
            "NONE": 0.02
          },
          "confidence": 0.97
        }
      },
      "usage": {
        "input_tokens": 934,
        "output_tokens": 116
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 239.8008749999999,
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
        "segmentId": "body:1"
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
    "seq": 46,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB010",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:46.834Z",
    "offsetMs": 0.9286250000000109
  },
  {
    "seq": 47,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB010",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:46.974Z",
    "offsetMs": 140.10899999999992,
    "elapsedMs": 138.50225,
    "outcome": "success"
  },
  {
    "seq": 48,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB010",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:46.976Z",
    "offsetMs": 142.46458399999983
  },
  {
    "seq": 49,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB010",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:47.073Z",
    "offsetMs": 239.48733399999992,
    "elapsedMs": 96.42708399999992,
    "outcome": "success"
  },
  {
    "seq": 50,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB010",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:47.073Z",
    "offsetMs": 239.87529199999972,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "cf469131295199f83561cbc39758bea9712b440dd72ad4fff9847c990a27fc4f";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":47},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":49},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":50}} as const;
export const projectionSha256 = "4f07e03588930aa733b7d8144d7d98c0c1a47cad4178df927a12ff396e2b65c8";
