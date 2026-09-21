import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP018",
  "inputSha256": "160f9aed31ac76c71927bc74efa917aa49d4c1c45f830ad7e69cda9d0c1bb25a",
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
      "end": 33,
      "text": "Confirm ownership of your profile"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 87,
      "text": "Your profile will be removed unless you send your password and the code we texted you. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 87,
      "end": 139,
      "text": "Our recovery team needs both within fifteen minutes."
    }
  ],
  "passA": {
    "requestSha256": "b79301ed8c81cb7f5764e3bb15d8238768650b75b64064b2adca5cdf7796b4d9",
    "capturedAt": "2026-09-20T23:43:22.734Z",
    "elapsedMs": 123.95387499999924,
    "successfulAttemptElapsedMs": 122.2870000000039,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.98
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.68
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.99
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.69
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.02,
            "mixed_or_unknown": 0.18,
            "sender_supplied": 0.75,
            "independently_established": 0.05
          },
          "confidence": 0.66
        }
      },
      "usage": {
        "input_tokens": 3288,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "135420e71b46f0b77af19176f9d8ddeed612b535e2e7adf37cdf66740da92728",
    "capturedAt": "2026-09-20T23:43:22.911Z",
    "elapsedMs": 174.5554159999956,
    "successfulAttemptElapsedMs": 172.30841599999985,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0,
            "subject:0": 0,
            "body:0": 0.99,
            "body:1": 0.01
          },
          "confidence": 0.98
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.03,
            "subject:0": 0,
            "body:0": 0.71,
            "NONE": 0.26
          },
          "confidence": 0.62
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0,
            "subject:0": 0,
            "body:0": 0.45,
            "body:1": 0.55
          },
          "confidence": 0.39
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.01,
            "subject:0": 0,
            "body:0": 0,
            "body:1": 0.99
          },
          "confidence": 0.97
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.66,
            "subject:0": 0,
            "body:0": 0.15,
            "body:1": 0.19
          },
          "confidence": 0.55
        }
      },
      "usage": {
        "input_tokens": 1819,
        "output_tokens": 283
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 300.9889169999951,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H1"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "selected",
        "segmentId": "body:0"
      },
      "sensitive_data_request": {
        "status": "low_confidence",
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
        "status": "low_confidence",
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
        "status": "not_requested",
        "segmentId": null
      },
      "analyzer_instruction": {
        "status": "not_requested",
        "segmentId": null
      }
    },
    "adviceTemplateIds": [
      "avoid_sender_route",
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 578,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP018",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:22.611Z",
    "offsetMs": 1.0542920000007143
  },
  {
    "seq": 579,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP018",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:22.734Z",
    "offsetMs": 123.95599999999831,
    "elapsedMs": 122.2870000000039,
    "outcome": "success"
  },
  {
    "seq": 580,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP018",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:22.737Z",
    "offsetMs": 127.22845799999777
  },
  {
    "seq": 581,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP018",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:22.910Z",
    "offsetMs": 300.5639579999988,
    "elapsedMs": 172.30841599999985,
    "outcome": "success"
  },
  {
    "seq": 582,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP018",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:22.911Z",
    "offsetMs": 301.08733299999585,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "73d1085259dda5975838413c3f88630fa01f699e5bd38ff04fca58239c66b869";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":579},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":581},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":582}} as const;
export const projectionSha256 = "b24a617030ab66e271238310f879eccfb09c0b6f1723e05f2020821ab9b2d145";
