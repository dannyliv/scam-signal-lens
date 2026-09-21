import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIBSEED09",
  "inputSha256": "1f2c9183fc7e388ff3d392af70580cdd40ee6b4e982767a947aa9fafed1836d8",
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
      "end": 41,
      "text": "Your Harbor Bank sign-in code is 482193. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 41,
      "end": 89,
      "text": "Enter it only in the sign-in screen you opened. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 89,
      "end": 171,
      "text": "Never give this code to another person, including someone claiming to be support. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 171,
      "end": 222,
      "text": "Ignore this message if you did not start a sign-in."
    },
    {
      "id": "userContext:0",
      "source": "userContext",
      "start": 0,
      "end": 97,
      "text": "I opened the bank app myself and requested a sign-in code immediately before receiving this text."
    }
  ],
  "passA": {
    "requestSha256": "feb527992c22de2a8234eaf414f928adb32fdfcdba8425164254bd91a8b43d44",
    "capturedAt": "2026-09-20T23:43:14.393Z",
    "elapsedMs": 102.73329100000046,
    "successfulAttemptElapsedMs": 101.30795900000157,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.04
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.07
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
          "noul": 0.16
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.82
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.14
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
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 0.86,
            "informational": 0.14,
            "mixed_or_unclear": 0
          },
          "confidence": 0.81
        },
        "request_route": {
          "type": "choice",
          "choice": "independently_established",
          "probabilities": {
            "no_sensitive_action": 0.05,
            "mixed_or_unknown": 0,
            "independently_established": 0.93,
            "sender_supplied": 0.02
          },
          "confidence": 0.91
        }
      },
      "usage": {
        "input_tokens": 3326,
        "output_tokens": 353
      }
    }
  },
  "passB": {
    "requestSha256": "f064983a74c0b8600fe0523b043c4e824f6b898fc0d9afcd9badea38666dab65",
    "capturedAt": "2026-09-20T23:43:14.546Z",
    "elapsedMs": 152.00395800000115,
    "successfulAttemptElapsedMs": 149.7804580000011,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.51,
            "body:0": 0.41,
            "body:2": 0.08,
            "body:3": 0,
            "body:1": 0
          },
          "confidence": 0.38
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.58,
            "body:3": 0.02,
            "body:2": 0.01,
            "body:0": 0,
            "body:1": 0.39
          },
          "confidence": 0.47
        }
      },
      "usage": {
        "input_tokens": 1026,
        "output_tokens": 132
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 256.66975000000093,
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
    "seq": 475,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED09",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:14.291Z",
    "offsetMs": 0.9283329999998386
  },
  {
    "seq": 476,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED09",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:14.392Z",
    "offsetMs": 102.73462500000096,
    "elapsedMs": 101.30795900000157,
    "outcome": "success"
  },
  {
    "seq": 477,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED09",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:14.395Z",
    "offsetMs": 105.6553750000021
  },
  {
    "seq": 478,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED09",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:14.546Z",
    "offsetMs": 256.44454100000075,
    "elapsedMs": 149.7804580000011,
    "outcome": "success"
  },
  {
    "seq": 479,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED09",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:14.546Z",
    "offsetMs": 256.7167499999996,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d96866056a3672e587dcbef0a5e65571f94a9a1886c6cdddad46d76df2ea81e2";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":476},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":478},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":479}} as const;
export const projectionSha256 = "fbda234f1daafc541a9a5d709da83a0a01b38921f194a9cf5d5fb847858b21d1";
