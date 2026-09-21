import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB039",
  "inputSha256": "10e040b40821b3c2a4b21a997819397f3ffc203a71b10b39214c6ab061d79f95",
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
      "end": 31,
      "text": "Your monthly statement is ready"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 55,
      "text": "Your monthly statement is available in online banking. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 55,
      "end": 128,
      "text": "For security, open the banking app directly instead of using email links."
    }
  ],
  "passA": {
    "requestSha256": "8660967c7f7ebeb0e82fa62b1ad8e530a7021cb97d85fda09a5d99ef7eb04c2c",
    "capturedAt": "2026-09-20T23:42:54.959Z",
    "elapsedMs": 100.40058300000055,
    "successfulAttemptElapsedMs": 98.69549999999981,
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
          "noul": 0.62
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.94
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0.42,
            "informational": 0.57,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0.01
          },
          "confidence": 0.43
        },
        "request_route": {
          "type": "choice",
          "choice": "independently_established",
          "probabilities": {
            "no_sensitive_action": 0.49,
            "sender_supplied": 0,
            "mixed_or_unknown": 0,
            "independently_established": 0.51
          },
          "confidence": 0.35
        }
      },
      "usage": {
        "input_tokens": 3284,
        "output_tokens": 355
      }
    }
  },
  "passB": {
    "requestSha256": "d7094f1868d9f36706ad58c500e39c95a412fb52034094f17a70bdd12256ca27",
    "capturedAt": "2026-09-20T23:42:55.103Z",
    "elapsedMs": 141.98841700000048,
    "successfulAttemptElapsedMs": 140.95416699999987,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.04,
            "NONE": 0.44,
            "body:1": 0.4,
            "body:0": 0.12
          },
          "confidence": 0.26
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.01,
            "body:1": 0.87,
            "body:0": 0.12
          },
          "confidence": 0.82
        }
      },
      "usage": {
        "input_tokens": 904,
        "output_tokens": 116
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 243.8613749999986,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence",
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 188,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB039",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:54.860Z",
    "offsetMs": 1.053541999999652
  },
  {
    "seq": 189,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB039",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:54.959Z",
    "offsetMs": 100.40370799999982,
    "elapsedMs": 98.69549999999981,
    "outcome": "success"
  },
  {
    "seq": 190,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB039",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:54.961Z",
    "offsetMs": 102.10379199999988
  },
  {
    "seq": 191,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB039",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:55.102Z",
    "offsetMs": 243.5640829999993,
    "elapsedMs": 140.95416699999987,
    "outcome": "success"
  },
  {
    "seq": 192,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB039",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:55.103Z",
    "offsetMs": 243.94645800000035,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1785587f5b977abfe7e21a8d21a6921474829091caa8d177fa0ccf27e025d607";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":189},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":191},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":192}} as const;
export const projectionSha256 = "bb2f1272ddfda0e90f6cb67590028d0faf2bd54bd5058f260657865d6658eb44";
