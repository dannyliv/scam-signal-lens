import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB065",
  "inputSha256": "8fb35857dff8359806d297edc77b5bd483f836e6f9923d1467db177ef897c989",
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
      "end": 26,
      "text": "Registered letter received"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 48,
      "text": "A registered letter for you is at the mailroom. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 48,
      "end": 109,
      "text": "Bring your employee badge to collect it during service hours."
    }
  ],
  "passA": {
    "requestSha256": "08c514a8a62729ffcd14f9dd194b421060567f49b668816ff6f0c7b6e4a05ef9",
    "capturedAt": "2026-09-20T23:43:02.917Z",
    "elapsedMs": 147.8966670000009,
    "successfulAttemptElapsedMs": 146.5247500000005,
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
          "noul": 0.08
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
          "noul": 0.07
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.59
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.8
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.09,
            "mixed_or_unclear": 0,
            "active_request": 0.91,
            "educational_or_quoted": 0
          },
          "confidence": 0.88
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.91,
            "sender_supplied": 0,
            "independently_established": 0.09
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 3282,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "b0ce3385bdf2f821ad95e97a0ccc7375bd5accf0eb45dbeb8e696eb5be11e3bb",
    "capturedAt": "2026-09-20T23:43:03.064Z",
    "elapsedMs": 145.6629580000008,
    "successfulAttemptElapsedMs": 144.48858299999847,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0.06,
            "subject:0": 0,
            "body:1": 0.77,
            "NONE": 0.17
          },
          "confidence": 0.69
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0.93,
            "body:0": 0.01,
            "NONE": 0.06
          },
          "confidence": 0.91
        }
      },
      "usage": {
        "input_tokens": 898,
        "output_tokens": 118
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 295.15804200000275,
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
        "status": "selected",
        "segmentId": "body:1"
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
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 316,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB065",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:02.770Z",
    "offsetMs": 0.8520420000022568
  },
  {
    "seq": 317,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB065",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:02.917Z",
    "offsetMs": 147.89862500000163,
    "elapsedMs": 146.5247500000005,
    "outcome": "success"
  },
  {
    "seq": 318,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB065",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:02.919Z",
    "offsetMs": 149.80916699999943
  },
  {
    "seq": 319,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB065",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:03.064Z",
    "offsetMs": 294.8530840000021,
    "elapsedMs": 144.48858299999847,
    "outcome": "success"
  },
  {
    "seq": 320,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB065",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:03.064Z",
    "offsetMs": 295.218667000001,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "bcfaaf721ed1bae48cdf23cdb6a5642b00b072d2ae232449985ae0808bff8624";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":317},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":319},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":320}} as const;
export const projectionSha256 = "789d9b4a4d9125b544fe30a6b7ed30e370adce065007f975a955692147e0730c";
