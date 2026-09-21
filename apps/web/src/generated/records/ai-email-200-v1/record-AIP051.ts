import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP051",
  "inputSha256": "6fbde5efe590596fe356c45d440ef91c8541a818fdb3a2c2e0e84a53bd3f738e",
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
      "end": 26,
      "text": "Points will expire tonight"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 117,
      "text": "Keep your loyalty points by sending the account password and the verification number from your phone before midnight."
    }
  ],
  "passA": {
    "requestSha256": "eb8332536f8c2867d589607c15e8c2e265943728b0f9b7f7cd78865467780714",
    "capturedAt": "2026-09-20T23:43:33.833Z",
    "elapsedMs": 155.39229199999681,
    "successfulAttemptElapsedMs": 153.13879100000486,
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
          "noul": 0.91
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.15
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.98
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.51
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.62
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.03,
            "mixed_or_unknown": 0.13,
            "independently_established": 0.02,
            "sender_supplied": 0.82
          },
          "confidence": 0.77
        }
      },
      "usage": {
        "input_tokens": 3279,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "889bc97cee0415b7eadb622d9408fc247aa06e13521daf604976e0d831c3e209",
    "capturedAt": "2026-09-20T23:43:34.041Z",
    "elapsedMs": 205.75633299999754,
    "successfulAttemptElapsedMs": 204.26141700000153,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 1,
            "NONE": 0,
            "subject:0": 0
          },
          "confidence": 1
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.92,
            "NONE": 0.08,
            "subject:0": 0
          },
          "confidence": 0.88
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.79,
            "NONE": 0,
            "subject:0": 0.21
          },
          "confidence": 0.68
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.28,
            "NONE": 0.71,
            "subject:0": 0.01
          },
          "confidence": 0.56
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.51,
            "NONE": 0.49,
            "subject:0": 0
          },
          "confidence": 0.26
        }
      },
      "usage": {
        "input_tokens": 1695,
        "output_tokens": 238
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 363.3264160000035,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H1",
      "H5"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "selected",
        "segmentId": "body:0"
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:0"
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
        "status": "selected",
        "segmentId": "body:0"
      },
      "authority_claim": {
        "status": "low_confidence",
        "segmentId": null
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
    "seq": 743,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP051",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:33.679Z",
    "offsetMs": 1.5914580000026035
  },
  {
    "seq": 744,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP051",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:33.833Z",
    "offsetMs": 155.3927079999994,
    "elapsedMs": 153.13879100000486,
    "outcome": "success"
  },
  {
    "seq": 745,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP051",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:33.836Z",
    "offsetMs": 158.27412500000355
  },
  {
    "seq": 746,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP051",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:34.040Z",
    "offsetMs": 363.0837079999983,
    "elapsedMs": 204.26141700000153,
    "outcome": "success"
  },
  {
    "seq": 747,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP051",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:34.041Z",
    "offsetMs": 363.37712499999907,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a1b30481b88271294643930ad409e00f78648052652238081d91661a48e82ec1";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":744},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":746},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":747}} as const;
export const projectionSha256 = "f3ee5d1fee2cc51f4c0db7a4a341016860200135a8477508cad72687df299436";
