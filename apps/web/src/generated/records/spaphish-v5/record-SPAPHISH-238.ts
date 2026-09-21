import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-238",
  "inputSha256": "64b0fbdf135e1fd550e738f131fc51d03691064e9db29bce629325b10a74c5d4",
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
      "end": 34,
      "text": "Has ganado la freidora Ninja Air !"
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 34,
      "end": 41,
      "text": "# 4Y9Tf"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 41,
      "text": "Oferta Especial - Freidora de Aire Ninja\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 41,
      "end": 60,
      "text": "Freír A Perfección\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 60,
      "end": 90,
      "text": "Oferta limitada de Sam's Club\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 90,
      "end": 109,
      "text": "¡Consíguelo ahora!\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 109,
      "end": 110,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 110,
      "end": 133,
      "text": "Freidora de aire Ninja\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 133,
      "end": 134,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 134,
      "end": 148,
      "text": "¡Felicidades!\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 148,
      "end": 221,
      "text": "¡Has sido elegido para participar en nuestro Programa de Lealtad GRATIS!\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 221,
      "end": 222,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 222,
      "end": 238,
      "text": "¡CONFIRMA AHORA!"
    }
  ],
  "passA": {
    "requestSha256": "a2e3217300d6e95fa997d0e9f415c7ef09a79f99bb7acc2945e297aed8b5d7fe",
    "capturedAt": "2026-09-20T23:45:10.016Z",
    "elapsedMs": 190.74520800000755,
    "successfulAttemptElapsedMs": 188.68379200001073,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.09
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.17
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.45
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.75
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.72
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.27
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.23
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
          "noul": 0.04
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
            "mixed_or_unclear": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.16,
            "sender_supplied": 0.28,
            "independently_established": 0,
            "no_sensitive_action": 0.56
          },
          "confidence": 0.42
        }
      },
      "usage": {
        "input_tokens": 3506,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "982b578b99750d07266d5f574305251d60a700d1f1f63f15ae760b3a699a3ff8",
    "capturedAt": "2026-09-20T23:45:10.249Z",
    "elapsedMs": 230.42520800000057,
    "successfulAttemptElapsedMs": 228.69654200000514,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:9": 0,
            "body:2": 0.01,
            "body:7": 0,
            "subject:1": 0,
            "NONE": 0.69,
            "body:3": 0.21,
            "subject:0": 0,
            "body:5": 0,
            "body:6": 0,
            "body:1": 0,
            "body:4": 0,
            "body:10": 0.07,
            "body:0": 0.01,
            "body:8": 0.01
          },
          "confidence": 0.66
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:10",
          "probabilities": {
            "body:9": 0,
            "body:2": 0.1,
            "body:7": 0,
            "subject:1": 0,
            "NONE": 0,
            "body:3": 0.1,
            "subject:0": 0,
            "body:5": 0,
            "body:6": 0,
            "body:1": 0,
            "body:4": 0,
            "body:10": 0.8,
            "body:0": 0,
            "body:8": 0
          },
          "confidence": 0.77
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:9": 0,
            "subject:0": 0,
            "body:7": 0,
            "subject:1": 0,
            "NONE": 0.21,
            "body:3": 0,
            "body:2": 0.66,
            "body:5": 0,
            "body:6": 0,
            "body:1": 0,
            "body:4": 0,
            "body:10": 0.01,
            "body:0": 0.01,
            "body:8": 0.11
          },
          "confidence": 0.62
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:9": 0,
            "body:2": 0,
            "body:7": 0,
            "body:10": 0.09,
            "NONE": 0.89,
            "subject:1": 0,
            "subject:0": 0,
            "body:5": 0,
            "body:6": 0,
            "body:1": 0,
            "body:4": 0,
            "body:3": 0.02,
            "body:0": 0,
            "body:8": 0
          },
          "confidence": 0.87
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:9": 0,
            "body:2": 0,
            "body:7": 0,
            "subject:1": 0,
            "NONE": 0.9,
            "body:10": 0.08,
            "subject:0": 0,
            "body:5": 0,
            "body:6": 0,
            "body:1": 0,
            "body:4": 0,
            "body:3": 0.01,
            "body:0": 0,
            "body:8": 0.01
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 2814,
        "output_tokens": 737
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 423.44425000000047,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "request_route_low_confidence"
    ],
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
        "status": "low_confidence",
        "segmentId": null
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:10"
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
        "status": "none_selected",
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
    "seq": 1163,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-238",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:09.827Z",
    "offsetMs": 1.4392079999961425
  },
  {
    "seq": 1164,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-238",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:10.016Z",
    "offsetMs": 190.74720800000068,
    "elapsedMs": 188.68379200001073,
    "outcome": "success"
  },
  {
    "seq": 1165,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-238",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:10.019Z",
    "offsetMs": 193.72991699998965
  },
  {
    "seq": 1166,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-238",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:10.248Z",
    "offsetMs": 423.0634999999893,
    "elapsedMs": 228.69654200000514,
    "outcome": "success"
  },
  {
    "seq": 1167,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-238",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:10.249Z",
    "offsetMs": 423.5261249999894,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "b6a7bbd1bcd80d9aa5fc4b03417ac9ef2e07f6a720b72e68379611264161b579";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1164},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1166},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1167}} as const;
export const projectionSha256 = "a6779eb346d5b4d0e5a7de1da1d4fc1116df42f9711fb0195112410a3fd9d0a3";
