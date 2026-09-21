import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP047",
  "inputSha256": "27c458319f4002683f2131f6fcd6cc9b36ec974b9bfe553fcb7f06aec608d29a",
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
      "text": "Toll debt will increase today"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 105,
      "text": "Pay the toll debt with a prepaid voucher and send the voucher number in reply before penalties are added."
    }
  ],
  "passA": {
    "requestSha256": "c09f03015719c10a72cc992b42282956aaccb25dd6dae6b79538cff91fa78df0",
    "capturedAt": "2026-09-20T23:43:32.474Z",
    "elapsedMs": 170.86004200000025,
    "successfulAttemptElapsedMs": 169.02579200000037,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.29
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.96
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.73
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.96
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.21
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.52
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.26
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
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.92,
            "independently_established": 0.06,
            "no_sensitive_action": 0.01,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 3282,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "a2610d928ea8f11e35dbd69a4b3f5f8e39b8c3f627aecee42f523069a26fdee4",
    "capturedAt": "2026-09-20T23:43:32.613Z",
    "elapsedMs": 136.49049999999988,
    "successfulAttemptElapsedMs": 134.4523330000011,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.59,
            "subject:0": 0,
            "NONE": 0.41
          },
          "confidence": 0.38
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 1,
            "subject:0": 0,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.97,
            "subject:0": 0,
            "NONE": 0.03
          },
          "confidence": 0.95
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.96,
            "subject:0": 0.04,
            "NONE": 0
          },
          "confidence": 0.94
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.06,
            "subject:0": 0,
            "NONE": 0.94
          },
          "confidence": 0.9
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.5,
            "subject:0": 0,
            "NONE": 0.5
          },
          "confidence": 0.25
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.44,
            "subject:0": 0,
            "NONE": 0.56
          },
          "confidence": 0.34
        }
      },
      "usage": {
        "input_tokens": 2279,
        "output_tokens": 332
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 309.6971249999988,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
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
        "segmentId": "body:0"
      },
      "unusual_payment_routing": {
        "status": "selected",
        "segmentId": "body:0"
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:0"
      },
      "authority_claim": {
        "status": "none_selected",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "low_confidence",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "low_confidence",
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
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 723,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP047",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:32.304Z",
    "offsetMs": 1.191541000000143
  },
  {
    "seq": 724,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP047",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:32.474Z",
    "offsetMs": 170.8614579999994,
    "elapsedMs": 169.02579200000037,
    "outcome": "success"
  },
  {
    "seq": 725,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP047",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:32.477Z",
    "offsetMs": 174.0038330000025
  },
  {
    "seq": 726,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP047",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:32.612Z",
    "offsetMs": 309.37991599999805,
    "elapsedMs": 134.4523330000011,
    "outcome": "success"
  },
  {
    "seq": 727,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP047",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:32.613Z",
    "offsetMs": 309.75945800000045,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "07b1d048e42f916d54020a538df7eb931d5b75cb9c4a4b51d609304476953223";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":724},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":726},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":727}} as const;
export const projectionSha256 = "5b3b7e3931e037f3f353952d6b59b7a66ca0135d941b5b349497907cbb9cbfa8";
