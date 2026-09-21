import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-378",
  "inputSha256": "fc359027209e991d02fb465acae7c73fa45a4b1ea490d2c1a4d1f5ba787cfb3e",
  "questionBundleSha256": "c38d45be636041965e7e231cffdf2831ec083c7780ea13a94086fdf24bf7bc08",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "source_messages",
  "policySha256": "3435135d6058476d4262ecbc936abf95af4993b455dfab35adc8b17f3fe6ad6a",
  "requestedModel": "jev-1.13.0",
  "segments": [
    {
      "id": "subject:0",
      "source": "subject",
      "start": 0,
      "end": 6,
      "text": "Listo!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 73,
      "text": "Hola Manuel... verifica que ya puedes acceder a la bibliografia en Drive\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 73,
      "end": 74,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 74,
      "end": 82,
      "text": "Saludos!"
    }
  ],
  "passA": {
    "requestSha256": "c316f9a6b3592dc8d80144d1746ce044439e1ec080ef91ca2d4c3349175ec5be",
    "capturedAt": "2026-09-20T23:45:59.164Z",
    "elapsedMs": 147.39958400001342,
    "successfulAttemptElapsedMs": 145.23045800000546,
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
          "noul": 0.12
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.47
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.03,
            "mixed_or_unclear": 0,
            "active_request": 0.97,
            "educational_or_quoted": 0
          },
          "confidence": 0.96
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.87,
            "mixed_or_unknown": 0.02,
            "independently_established": 0.06,
            "sender_supplied": 0.05
          },
          "confidence": 0.84
        }
      },
      "usage": {
        "input_tokens": 3447,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "65b831ed6b5fc82e853f5042dd169fac0ba047d435b5674378e7150e29a1c8e7",
    "capturedAt": "2026-09-20T23:45:59.286Z",
    "elapsedMs": 119.8114590000041,
    "successfulAttemptElapsedMs": 117.37950000001001,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.65,
            "body:1": 0,
            "subject:0": 0,
            "body:2": 0,
            "NONE": 0.35
          },
          "confidence": 0.55
        }
      },
      "usage": {
        "input_tokens": 627,
        "output_tokens": 71
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 269.5395830000052,
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
        "status": "not_requested",
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
    "seq": 1853,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-378",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:59.018Z",
    "offsetMs": 1.5858330000046408
  },
  {
    "seq": 1854,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-378",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:59.164Z",
    "offsetMs": 147.39912499999627,
    "elapsedMs": 145.23045800000546,
    "outcome": "success"
  },
  {
    "seq": 1855,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-378",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:59.167Z",
    "offsetMs": 151.20270799999707
  },
  {
    "seq": 1856,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-378",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:59.286Z",
    "offsetMs": 269.33504200000607,
    "elapsedMs": 117.37950000001001,
    "outcome": "success"
  },
  {
    "seq": 1857,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-378",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:59.286Z",
    "offsetMs": 269.58283300000767,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7fae914f562de49a1191f92dd1f9756f07cfa5296580497a1106df2e8c78eb3c";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1854},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1856},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1857}} as const;
export const projectionSha256 = "75e2d34b457bba1cd09fdcabfe5d8b402592ac72208fd8c6213953ac0f35cf95";
