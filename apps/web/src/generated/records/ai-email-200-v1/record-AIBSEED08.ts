import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIBSEED08",
  "inputSha256": "e71079510577b08e72da5879ed67eabaf516cb73dee3659cbced3ed4d2e30648",
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
      "end": 58,
      "text": "Can you pick me up at the library entrance in 15 minutes? "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 58,
      "end": 106,
      "text": "My bus was canceled and the library is closing. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 106,
      "end": 175,
      "text": "Call me on my usual number before you leave so I know you are coming."
    },
    {
      "id": "userContext:0",
      "source": "userContext",
      "start": 0,
      "end": 58,
      "text": "This is in an existing conversation with a family member. "
    },
    {
      "id": "userContext:1",
      "source": "userContext",
      "start": 58,
      "end": 101,
      "text": "I have their usual number saved separately."
    }
  ],
  "passA": {
    "requestSha256": "07109393151f871bcd37dcd4d63751f103e941ac89c652fc2a36427ffa91d714",
    "capturedAt": "2026-09-20T23:43:14.152Z",
    "elapsedMs": 98.07262499999706,
    "successfulAttemptElapsedMs": 96.95316699999967,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.01
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
          "noul": 0.01
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.96
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.65
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.05
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.01
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.95
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
          "choice": "independently_established",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.17,
            "sender_supplied": 0,
            "independently_established": 0.83
          },
          "confidence": 0.77
        }
      },
      "usage": {
        "input_tokens": 3315,
        "output_tokens": 353
      }
    }
  },
  "passB": {
    "requestSha256": "9f15673394289415373729786bfe694d7256cdccd7d3913532de56a6c6d428b3",
    "capturedAt": "2026-09-20T23:43:14.288Z",
    "elapsedMs": 134.19104100000186,
    "successfulAttemptElapsedMs": 133.00950000000012,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0.02,
            "body:1": 0.28,
            "NONE": 0,
            "body:0": 0.7
          },
          "confidence": 0.59
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 0.52,
            "body:1": 0.01,
            "NONE": 0.36,
            "body:0": 0.11
          },
          "confidence": 0.36
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 1,
            "body:1": 0,
            "NONE": 0,
            "body:0": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 1263,
        "output_tokens": 174
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 234.11899999999878,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "low_confidence",
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
    "seq": 470,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED08",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:14.055Z",
    "offsetMs": 0.7096669999991718
  },
  {
    "seq": 471,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED08",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:14.152Z",
    "offsetMs": 98.07287499999802,
    "elapsedMs": 96.95316699999967,
    "outcome": "success"
  },
  {
    "seq": 472,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED08",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:14.154Z",
    "offsetMs": 100.47833299999911
  },
  {
    "seq": 473,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED08",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:14.288Z",
    "offsetMs": 233.92962500000067,
    "elapsedMs": 133.00950000000012,
    "outcome": "success"
  },
  {
    "seq": 474,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED08",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:14.288Z",
    "offsetMs": 234.16429199999766,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0150006a3ff51583314ddf58b69c9352c46a7d95ef02eb6bfc6a99c529462110";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":471},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":473},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":474}} as const;
export const projectionSha256 = "be0f0136ba8dfcc89e1c0983d65888f491f008efe50782091f53ddb605d8de28";
