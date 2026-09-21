import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB035",
  "inputSha256": "b2bfdcdc7fc8b080e94a94ff06be8660f897f3ce7298eecf01f2aab42cf39f39",
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
      "end": 23,
      "text": "Your data usage summary"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 52,
      "text": "You used 72 percent of your monthly data allowance. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 52,
      "end": 128,
      "text": "You can review plan options in the carrier app if you want to make a change."
    }
  ],
  "passA": {
    "requestSha256": "626b553fe37f36908d854ef1eed6c82c914ce2132ab99eb7e366fa837a85d4f4",
    "capturedAt": "2026-09-20T23:42:53.590Z",
    "elapsedMs": 159.902333,
    "successfulAttemptElapsedMs": 158.6333340000001,
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
          "noul": 0.04
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
          "noul": 0.48
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
          "noul": 0.81
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "informational": 0.96,
            "mixed_or_unclear": 0,
            "active_request": 0.04,
            "educational_or_quoted": 0
          },
          "confidence": 0.94
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "independently_established": 0.08,
            "sender_supplied": 0,
            "no_sensitive_action": 0.92
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 3289,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "9de912f30c5d17668aceb8fafa73dbc9235551346459c7601c454679b2d6268d",
    "capturedAt": "2026-09-20T23:42:53.760Z",
    "elapsedMs": 167.93445799999972,
    "successfulAttemptElapsedMs": 166.39041700000053,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.01,
            "subject:0": 0.03,
            "NONE": 0.58,
            "body:1": 0.38
          },
          "confidence": 0.44
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "subject:0": 0,
            "NONE": 0.01,
            "body:1": 0.99
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 919,
        "output_tokens": 116
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 330.3257910000011,
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
    "seq": 168,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB035",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:53.431Z",
    "offsetMs": 0.7349160000012489
  },
  {
    "seq": 169,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB035",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:53.590Z",
    "offsetMs": 159.90020800000093,
    "elapsedMs": 158.6333340000001,
    "outcome": "success"
  },
  {
    "seq": 170,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB035",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:53.593Z",
    "offsetMs": 163.03741600000103
  },
  {
    "seq": 171,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB035",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:53.760Z",
    "offsetMs": 330.06483300000036,
    "elapsedMs": 166.39041700000053,
    "outcome": "success"
  },
  {
    "seq": 172,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB035",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:53.760Z",
    "offsetMs": 330.38795800000116,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "5aef088aa317b2a818f577dad2ccbbc421f731b77b053d85158069d88f792dc5";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":169},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":171},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":172}} as const;
export const projectionSha256 = "076e4f2e3ccfa8f9aba87104d0a22ec6e6ad789a38658e6e32fb830b72b1e319";
