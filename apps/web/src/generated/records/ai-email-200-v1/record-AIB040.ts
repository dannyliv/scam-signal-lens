import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB040",
  "inputSha256": "b01d8c6fe8f7f5546cff3a13486af6e1dc72706b7a29af9c460c7d7d20d3cfe5",
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
      "end": 41,
      "text": "Your conference registration is confirmed"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 68,
      "text": "Your registration for the October research conference is confirmed. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 68,
      "end": 141,
      "text": "Your badge pickup instructions will appear in the event portal next week."
    }
  ],
  "passA": {
    "requestSha256": "b4f89e2ceced9b06eaa7057829179fdd8b5180af130584bd9c282f7a4824103d",
    "capturedAt": "2026-09-20T23:42:55.281Z",
    "elapsedMs": 176.06662499999948,
    "successfulAttemptElapsedMs": 174.6830829999999,
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
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.4
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.59
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 0,
            "mixed_or_unclear": 0,
            "informational": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.97,
            "sender_supplied": 0,
            "independently_established": 0.03,
            "mixed_or_unknown": 0
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 3284,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "bab61cfe0f48f59da36ae1976a16dedd7783edfb0c2653c98e55b23dd9c02a02",
    "capturedAt": "2026-09-20T23:42:55.409Z",
    "elapsedMs": 125.92383399999926,
    "successfulAttemptElapsedMs": 124.5062080000007,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.84,
            "subject:0": 0.04,
            "body:1": 0.04,
            "body:0": 0.08
          },
          "confidence": 0.78
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.1,
            "subject:0": 0,
            "body:1": 0.9,
            "body:0": 0
          },
          "confidence": 0.87
        }
      },
      "usage": {
        "input_tokens": 904,
        "output_tokens": 116
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 304.22141700000066,
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
    "seq": 193,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB040",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:55.106Z",
    "offsetMs": 0.8445420000007289
  },
  {
    "seq": 194,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB040",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:55.281Z",
    "offsetMs": 176.06737500000054,
    "elapsedMs": 174.6830829999999,
    "outcome": "success"
  },
  {
    "seq": 195,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB040",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:55.284Z",
    "offsetMs": 178.91520800000035
  },
  {
    "seq": 196,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB040",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:55.409Z",
    "offsetMs": 303.99712499999987,
    "elapsedMs": 124.5062080000007,
    "outcome": "success"
  },
  {
    "seq": 197,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB040",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:55.409Z",
    "offsetMs": 304.2703330000004,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "9cb8928a64c159647411075330bf42e4c7e2450d5e713944c191fcdbc16f079e";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":194},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":196},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":197}} as const;
export const projectionSha256 = "aba963b7bb278d8accf8f5c222ddf8c7d54c70210cf86bf3bedcf3dbbab198da";
