import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP036",
  "inputSha256": "3a72c0342726bad4aaa4715678b7740d66500b4b89ddd804bfad9d39b600ca15",
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
      "text": "Your messaging account needs verification"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 115,
      "text": "Send the six digit sign in code you received and your account password so our verification bot can restore service."
    }
  ],
  "passA": {
    "requestSha256": "a5308546d8a439706bb946fdad710f74736aeece89f2b91991c76b65b0e767ec",
    "capturedAt": "2026-09-20T23:43:28.631Z",
    "elapsedMs": 156.27408300000388,
    "successfulAttemptElapsedMs": 155.02658299999894,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.99
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.62
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
          "noul": 0.64
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.69
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.44
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
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.99,
            "informational": 0,
            "educational_or_quoted": 0.01,
            "mixed_or_unclear": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.89,
            "no_sensitive_action": 0.03,
            "mixed_or_unknown": 0.06,
            "independently_established": 0.02
          },
          "confidence": 0.85
        }
      },
      "usage": {
        "input_tokens": 3282,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "64f2c6509d520ad5f95ac74b2a081a3fffcac53007c90776b2deae9a1e982b44",
    "capturedAt": "2026-09-20T23:43:28.803Z",
    "elapsedMs": 169.74954200000502,
    "successfulAttemptElapsedMs": 168.16441699999996,
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
            "body:0": 1
          },
          "confidence": 1
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.45,
            "subject:0": 0,
            "body:0": 0.55
          },
          "confidence": 0.33
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.38,
            "subject:0": 0.14,
            "body:0": 0.48
          },
          "confidence": 0.21
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.24,
            "subject:0": 0.1,
            "body:0": 0.66
          },
          "confidence": 0.5
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.82,
            "subject:0": 0,
            "body:0": 0.18
          },
          "confidence": 0.73
        }
      },
      "usage": {
        "input_tokens": 1713,
        "output_tokens": 238
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 328.1888340000005,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "none_selected",
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
    "seq": 668,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP036",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:28.475Z",
    "offsetMs": 0.7259999999951106
  },
  {
    "seq": 669,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP036",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:28.631Z",
    "offsetMs": 156.2742089999956,
    "elapsedMs": 155.02658299999894,
    "outcome": "success"
  },
  {
    "seq": 670,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP036",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:28.634Z",
    "offsetMs": 159.1202090000006
  },
  {
    "seq": 671,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP036",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:28.803Z",
    "offsetMs": 327.94549999999435,
    "elapsedMs": 168.16441699999996,
    "outcome": "success"
  },
  {
    "seq": 672,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP036",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:28.803Z",
    "offsetMs": 328.24045900000056,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ba6a3d17554eff7774a329de686a5722d0dd47e99e5e5b821b30459b6c15a482";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":669},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":671},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":672}} as const;
export const projectionSha256 = "19bc2cb6a7217065099b29378da0ac745b3885aa824a1ce043d400fe5b67436c";
