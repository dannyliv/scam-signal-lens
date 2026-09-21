import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB013",
  "inputSha256": "a197d362797e2f442ab83ab16e82eb82836ee643a4536431ea5788b5734115b7",
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
      "text": "Field trip form due next week"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 57,
      "text": "The science museum permission form is due next Thursday. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 57,
      "end": 139,
      "text": "A paper copy is in your student folder and the school office can answer questions."
    }
  ],
  "passA": {
    "requestSha256": "653e21193cb9d6869c709f0a9ab5840b3641b1ee66e0427f605024f08c2d7418",
    "capturedAt": "2026-09-20T23:42:47.706Z",
    "elapsedMs": 129.68495800000028,
    "successfulAttemptElapsedMs": 128.30587500000001,
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
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.76
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.51
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
          "noul": 0.86
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "active_request": 0.69,
            "informational": 0.31,
            "educational_or_quoted": 0
          },
          "confidence": 0.59
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "independently_established": 0.02,
            "sender_supplied": 0,
            "no_sensitive_action": 0.98
          },
          "confidence": 0.97
        }
      },
      "usage": {
        "input_tokens": 3288,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "afba4338f0b8814f052a0ce3e25d8f653137d66cedcec1d2edc818bf682e9b0e",
    "capturedAt": "2026-09-20T23:42:47.802Z",
    "elapsedMs": 93.21025000000009,
    "successfulAttemptElapsedMs": 91.74891700000035,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.26,
            "body:0": 0.71,
            "body:1": 0,
            "NONE": 0.03
          },
          "confidence": 0.61
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0.01,
            "body:0": 0.05,
            "body:1": 0.73,
            "NONE": 0.21
          },
          "confidence": 0.65
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:1": 0.97,
            "NONE": 0.03
          },
          "confidence": 0.95
        }
      },
      "usage": {
        "input_tokens": 1206,
        "output_tokens": 174
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 225.61762499999986,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence"
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
        "status": "low_confidence",
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 61,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB013",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:47.577Z",
    "offsetMs": 0.800166999999874
  },
  {
    "seq": 62,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB013",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:47.706Z",
    "offsetMs": 129.6854589999998,
    "elapsedMs": 128.30587500000001,
    "outcome": "success"
  },
  {
    "seq": 63,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB013",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:47.709Z",
    "offsetMs": 132.8556669999998
  },
  {
    "seq": 64,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB013",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:47.802Z",
    "offsetMs": 225.2957919999999,
    "elapsedMs": 91.74891700000035,
    "outcome": "success"
  },
  {
    "seq": 65,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB013",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:47.802Z",
    "offsetMs": 225.695917,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "131a272f956cad58777004e2d9cebd7569396adf059be69452448b26d410a762";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":62},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":64},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":65}} as const;
export const projectionSha256 = "87bfbf25e64c4882d83691ba31ed3ddf81ec783e016738a1131bc978f768a8cc";
