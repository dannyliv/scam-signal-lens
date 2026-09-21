import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP033",
  "inputSha256": "49c1814c6ab6adc56ca822d4d05d15aba939cc8a1250b4c94abcab2f366f828c",
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
      "text": "Exclusive survey reward waiting"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 109,
      "text": "Complete the survey by sending your card number and security code to confirm where we should send the reward."
    }
  ],
  "passA": {
    "requestSha256": "69b29bc25113b5e6bef8883f784f7ef2f9b43b3a0ca970a86027e3bf051fb651",
    "capturedAt": "2026-09-20T23:43:27.659Z",
    "elapsedMs": 155.9352080000026,
    "successfulAttemptElapsedMs": 154.36054200000217,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.46
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.98
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.43
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.65
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.31
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.21
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.3
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.3
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.03
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
            "active_request": 1,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.02,
            "independently_established": 0.01,
            "sender_supplied": 0.95,
            "mixed_or_unknown": 0.02
          },
          "confidence": 0.94
        }
      },
      "usage": {
        "input_tokens": 3280,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "38769f4fa4cb750fd37eabc2875e22dfe9671548f0f1d739419436c6e47eddd3",
    "capturedAt": "2026-09-20T23:43:27.811Z",
    "elapsedMs": 149.3978750000024,
    "successfulAttemptElapsedMs": 147.62820900000224,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.29,
            "body:0": 0.71,
            "subject:0": 0
          },
          "confidence": 0.56
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0,
            "body:0": 1,
            "subject:0": 0
          },
          "confidence": 1
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.21,
            "subject:0": 0,
            "body:0": 0.79
          },
          "confidence": 0.69
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.09,
            "body:0": 0.91,
            "subject:0": 0
          },
          "confidence": 0.87
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.56,
            "body:0": 0.21,
            "subject:0": 0.23
          },
          "confidence": 0.35
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.91,
            "body:0": 0.08,
            "subject:0": 0.01
          },
          "confidence": 0.86
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.83,
            "body:0": 0.17,
            "subject:0": 0
          },
          "confidence": 0.74
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.4,
            "subject:0": 0,
            "body:0": 0.6
          },
          "confidence": 0.39
        }
      },
      "usage": {
        "input_tokens": 2550,
        "output_tokens": 380
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 308.5550839999996,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "low_confidence",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:0"
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "none_selected",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "none_selected",
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
    "seq": 653,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP033",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:27.504Z",
    "offsetMs": 1.0025840000016615
  },
  {
    "seq": 654,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP033",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:27.659Z",
    "offsetMs": 155.9356670000052,
    "elapsedMs": 154.36054200000217,
    "outcome": "success"
  },
  {
    "seq": 655,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP033",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:27.663Z",
    "offsetMs": 159.8704590000052
  },
  {
    "seq": 656,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP033",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:27.811Z",
    "offsetMs": 308.2444170000017,
    "elapsedMs": 147.62820900000224,
    "outcome": "success"
  },
  {
    "seq": 657,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP033",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:27.811Z",
    "offsetMs": 308.6099170000016,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "9cda318dde79e3bfc80ce7b11e5a9c6998ff98a69e00b8e042fc350238e79fdb";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":654},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":656},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":657}} as const;
export const projectionSha256 = "19c67bf6039a15995faf4c3fc3520065f089f3df2b194c937b048c2e5b8aa48f";
