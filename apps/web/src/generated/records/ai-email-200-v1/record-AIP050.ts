import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP050",
  "inputSha256": "b668ce0801df9b46b14c9de92072d3378800eed81b45de5194662efcc912d0d5",
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
      "text": "Respond before the court deadline"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 55,
      "text": "Avoid a warrant by wiring the settlement amount today. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 55,
      "end": 124,
      "text": "Do not discuss the notice with local staff until payment is complete."
    }
  ],
  "passA": {
    "requestSha256": "62b1651ade5fa79a5321fae43cb1ef437e1c4c6d135a13c2f68513c99b71c113",
    "capturedAt": "2026-09-20T23:43:33.508Z",
    "elapsedMs": 204.205750000001,
    "successfulAttemptElapsedMs": 202.57574999999633,
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
          "noul": 0.46
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.98
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.16
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.98
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.4
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.95
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.47
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.06
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.64,
            "no_sensitive_action": 0.04,
            "independently_established": 0.03,
            "mixed_or_unknown": 0.29
          },
          "confidence": 0.53
        }
      },
      "usage": {
        "input_tokens": 3284,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "ea835cdea1fc9d306e33780dda73d89d42a6fef0833d5cab35f867ab10fb8d0d",
    "capturedAt": "2026-09-20T23:43:33.675Z",
    "elapsedMs": 163.40158299999894,
    "successfulAttemptElapsedMs": 161.6202919999996,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.33,
            "subject:0": 0,
            "body:1": 0.01,
            "body:0": 0.66
          },
          "confidence": 0.55
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0,
            "subject:0": 0,
            "body:1": 0,
            "body:0": 1
          },
          "confidence": 1
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0,
            "body:1": 0,
            "subject:0": 0.25,
            "body:0": 0.75
          },
          "confidence": 0.66
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.37,
            "subject:0": 0.34,
            "body:1": 0.08,
            "body:0": 0.21
          },
          "confidence": 0.15
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0,
            "subject:0": 0,
            "body:1": 1,
            "body:0": 0
          },
          "confidence": 1
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.17,
            "body:1": 0.01,
            "subject:0": 0,
            "body:0": 0.82
          },
          "confidence": 0.76
        }
      },
      "usage": {
        "input_tokens": 2079,
        "output_tokens": 340
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 371.0980419999978,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H3"
    ],
    "contextWarnings": [
      "request_route_low_confidence"
    ],
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
        "status": "selected",
        "segmentId": "body:1"
      },
      "advance_fee_or_refund_trap": {
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 738,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP050",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:33.305Z",
    "offsetMs": 1.0765829999945709
  },
  {
    "seq": 739,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP050",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:33.508Z",
    "offsetMs": 204.20683299999655,
    "elapsedMs": 202.57574999999633,
    "outcome": "success"
  },
  {
    "seq": 740,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP050",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:33.512Z",
    "offsetMs": 208.49012499999662
  },
  {
    "seq": 741,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP050",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:33.675Z",
    "offsetMs": 370.81029199999466,
    "elapsedMs": 161.6202919999996,
    "outcome": "success"
  },
  {
    "seq": 742,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP050",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:33.675Z",
    "offsetMs": 371.15820799999346,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "4ddd68b36533b0460f168629f74e289f8c522be216336386c1c34eeeb347829a";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":739},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":741},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":742}} as const;
export const projectionSha256 = "6da5abba139416a11f2f323895626fe5fe100a306b99ff340790c252016d3dad";
