import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIBSEED07",
  "inputSha256": "f06931ea74c28b8fd51e2e50190d1c3e313f24d1dacb423fe525867f5e0cf1f0",
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
      "end": 32,
      "text": "Your scheduled help-desk session"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 40,
      "text": "Your help-desk appointment is at 2 p.m. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 40,
      "end": 141,
      "text": "Open the support app already installed by your IT team to join the scheduled screen-sharing session. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 141,
      "end": 194,
      "text": "Confirm ticket IT-284 in your employee portal first. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 194,
      "end": 274,
      "text": "You can end sharing whenever you choose; no passwords or payments are requested."
    },
    {
      "id": "userContext:0",
      "source": "userContext",
      "start": 0,
      "end": 83,
      "text": "I opened ticket IT-284 through the employee portal and chose this appointment time."
    }
  ],
  "passA": {
    "requestSha256": "1130597978daa988b430cc555ae490d74834274c67ed2ab8e0507683e1f4a769",
    "capturedAt": "2026-09-20T23:43:13.885Z",
    "elapsedMs": 156.14079200000197,
    "successfulAttemptElapsedMs": 154.59879100000035,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.03
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.02
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.14
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.89
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.07
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.95
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.89
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 0.91,
            "mixed_or_unclear": 0,
            "informational": 0.09
          },
          "confidence": 0.88
        },
        "request_route": {
          "type": "choice",
          "choice": "independently_established",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.03,
            "independently_established": 0.86,
            "no_sensitive_action": 0.1
          },
          "confidence": 0.81
        }
      },
      "usage": {
        "input_tokens": 3338,
        "output_tokens": 353
      }
    }
  },
  "passB": {
    "requestSha256": "7bb26e0cea68aa21931fd31e6e356c2ca248a3a320390bf4ff5c70079b7238d8",
    "capturedAt": "2026-09-20T23:43:14.052Z",
    "elapsedMs": 165.890790999998,
    "successfulAttemptElapsedMs": 163.95650000000023,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0.06,
            "body:1": 0.8,
            "subject:0": 0.08,
            "NONE": 0.01,
            "body:3": 0.01,
            "body:0": 0.04
          },
          "confidence": 0.76
        },
        "evidence_remote_access_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "body:1": 0.99,
            "subject:0": 0,
            "NONE": 0.01,
            "body:3": 0,
            "body:0": 0
          },
          "confidence": 0.99
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0.48,
            "body:1": 0.52,
            "subject:0": 0,
            "NONE": 0,
            "body:3": 0,
            "body:0": 0
          },
          "confidence": 0.41
        }
      },
      "usage": {
        "input_tokens": 1437,
        "output_tokens": 227
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 323.9664159999993,
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
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 465,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED07",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:13.729Z",
    "offsetMs": 1.001124999998865
  },
  {
    "seq": 466,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED07",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:13.884Z",
    "offsetMs": 156.1427079999994,
    "elapsedMs": 154.59879100000035,
    "outcome": "success"
  },
  {
    "seq": 467,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED07",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:13.887Z",
    "offsetMs": 159.17162499999904
  },
  {
    "seq": 468,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED07",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:14.052Z",
    "offsetMs": 323.6983330000003,
    "elapsedMs": 163.95650000000023,
    "outcome": "success"
  },
  {
    "seq": 469,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIBSEED07",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:14.052Z",
    "offsetMs": 324.01224999999977,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "3efb92ad82e60af9f3d1b345680e838aeacbaf1fee14fd97b49c33012d7c1981";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":466},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":468},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":469}} as const;
export const projectionSha256 = "a279312c6ce7833e0bdc98de3b54fa387ee5104c050c6c05b2806904d28b5d55";
