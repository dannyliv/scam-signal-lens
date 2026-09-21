import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIP044",
  "inputSha256": "4bc45ec1de4f2b858d289194938c8012cb0a750fe480bc244661be38a05ff9ae",
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
      "end": 34,
      "text": "Domain name will be released today"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 40,
      "text": "Your domain registration expires today. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 40,
      "end": 147,
      "text": "Send the registrar password and card security code in reply so we can prevent another buyer from taking it."
    }
  ],
  "passA": {
    "requestSha256": "ec3980952dbbe9d05ae3ef4513133400a4834ece0b35a9f326c68514e614148b",
    "capturedAt": "2026-09-20T23:43:31.496Z",
    "elapsedMs": 175.20987500000047,
    "successfulAttemptElapsedMs": 173.50233399999706,
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
          "noul": 0.98
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.24
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.06
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.97
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.48
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.65
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.02
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
            "independently_established": 0.06,
            "no_sensitive_action": 0.01,
            "sender_supplied": 0.92,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.9
        }
      },
      "usage": {
        "input_tokens": 3288,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "315eb3c312fed8384b87b2b2b5e820613102b7ee3f12e2d56b706e1deca23cd3",
    "capturedAt": "2026-09-20T23:43:31.625Z",
    "elapsedMs": 125.3237500000032,
    "successfulAttemptElapsedMs": 123.45816700000432,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 1,
            "NONE": 0,
            "body:0": 0,
            "subject:0": 0
          },
          "confidence": 1
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 1,
            "NONE": 0,
            "body:0": 0,
            "subject:0": 0
          },
          "confidence": 1
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.6900000000000001,
            "NONE": 0.31,
            "body:0": 0,
            "subject:0": 0
          },
          "confidence": 0.58
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.55,
            "NONE": 0,
            "body:0": 0.36,
            "subject:0": 0.09
          },
          "confidence": 0.4
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.48,
            "NONE": 0.39,
            "body:0": 0.12,
            "subject:0": 0.01
          },
          "confidence": 0.32
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.56,
            "NONE": 0.44,
            "body:0": 0,
            "subject:0": 0
          },
          "confidence": 0.41
        }
      },
      "usage": {
        "input_tokens": 2113,
        "output_tokens": 339
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 304.42854200000147,
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
        "segmentId": "body:1"
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "payment_request": {
        "status": "low_confidence",
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
    "seq": 708,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP044",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:31.321Z",
    "offsetMs": 1.1151670000035665
  },
  {
    "seq": 709,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP044",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:31.495Z",
    "offsetMs": 175.20758300000307,
    "elapsedMs": 173.50233399999706,
    "outcome": "success"
  },
  {
    "seq": 710,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP044",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:31.500Z",
    "offsetMs": 180.05154200000106
  },
  {
    "seq": 711,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP044",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:31.624Z",
    "offsetMs": 304.2062500000029,
    "elapsedMs": 123.45816700000432,
    "outcome": "success"
  },
  {
    "seq": 712,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIP044",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:31.625Z",
    "offsetMs": 304.4666670000006,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a0f0c4378ddeaa0eca6e0945a5162a2b27babb599643fbdf04d44eaa59823b25";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":709},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":711},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":712}} as const;
export const projectionSha256 = "878db1afcb6bed8b5a1fd1081dee98235d835fe7fef9c31255a587f8de893f41";
