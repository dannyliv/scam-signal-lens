import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB027",
  "inputSha256": "a85316f856cc6d4f4c3df07d93a5a70e987078d0c8193cd1d2331f70bbd49df3",
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
      "end": 35,
      "text": "Laptop return appointment confirmed"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 68,
      "text": "Your equipment return appointment is confirmed for Friday at 13:00. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 68,
      "end": 124,
      "text": "Bring the issued laptop and charger to the service desk."
    }
  ],
  "passA": {
    "requestSha256": "4d6f32a6e23606cb67447bf1ea0cd732ba181beb0623c1e87a93b5d81fd76c04",
    "capturedAt": "2026-09-20T23:42:51.237Z",
    "elapsedMs": 121.30258400000002,
    "successfulAttemptElapsedMs": 119.28820799999994,
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
          "noul": 0.24
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.57
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
          "noul": 0.31
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.25,
            "mixed_or_unclear": 0,
            "active_request": 0.75,
            "educational_or_quoted": 0
          },
          "confidence": 0.66
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.05,
            "sender_supplied": 0,
            "no_sensitive_action": 0.95,
            "mixed_or_unknown": 0
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 3289,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "bcf5f7f054f4388f89f816fcf85b4d28bf125de511477c227257eb4fff29445a",
    "capturedAt": "2026-09-20T23:42:51.343Z",
    "elapsedMs": 105.03625000000011,
    "successfulAttemptElapsedMs": 104.14649999999983,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.13,
            "NONE": 0.5599999999999999,
            "body:1": 0.3,
            "subject:0": 0.01
          },
          "confidence": 0.42
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0.09,
            "NONE": 0.27,
            "body:1": 0.62,
            "subject:0": 0.02
          },
          "confidence": 0.49
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0.01,
            "NONE": 0.43,
            "subject:0": 0,
            "body:1": 0.56
          },
          "confidence": 0.41
        }
      },
      "usage": {
        "input_tokens": 1210,
        "output_tokens": 172
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 227.80595900000026,
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
        "status": "low_confidence",
        "segmentId": null
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
    "seq": 128,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB027",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:51.116Z",
    "offsetMs": 0.9052499999997963
  },
  {
    "seq": 129,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB027",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:51.237Z",
    "offsetMs": 121.3060000000005,
    "elapsedMs": 119.28820799999994,
    "outcome": "success"
  },
  {
    "seq": 130,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB027",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:51.238Z",
    "offsetMs": 123.04295900000034
  },
  {
    "seq": 131,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB027",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:51.343Z",
    "offsetMs": 227.56870900000013,
    "elapsedMs": 104.14649999999983,
    "outcome": "success"
  },
  {
    "seq": 132,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB027",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:51.343Z",
    "offsetMs": 227.85466700000052,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "146cd73eb143def0d65cb164c91f9c926f0af443059d054380fa4fd051babcdf";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":129},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":131},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":132}} as const;
export const projectionSha256 = "f6f20abfe5192d10da789d4c10b50b7891cc12a2280769532ddefdaf79582f95";
