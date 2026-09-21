import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-185",
  "inputSha256": "963e07bdac457c75c2bec750da2d96e88287f147d5284dcf9f88b8d1d0b16d81",
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
      "end": 47,
      "text": "Pablito  - Has ganado una Lancôme Beauty Box 🎁"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 101,
      "text": "Solo te llevará un minuto recibir este fantástico premio. costco Hoy El Ganador es Adrián Castillo ! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 101,
      "end": 162,
      "text": "las últimas tendencias en belleza ¡HAS SIDO SELECCIONADO(A)! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 162,
      "end": 237,
      "text": "Para recibir tu regalo: Lancome Beauty Box Reclama tu regalo ¡Felicidades! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 237,
      "end": 330,
      "text": "Has sido seleccionado(a) para participar en nuestro programa de fidelidad de forma GRATUITA. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 330,
      "end": 388,
      "text": "Solo te llevará un minuto recibir este fantástico premio. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 388,
      "end": 410,
      "text": "© 2025 GRUPO DRUNI SAS"
    }
  ],
  "passA": {
    "requestSha256": "7a793b49494bb25503423380f024c89e30dc90da3edfc04e1b87cb597dd16193",
    "capturedAt": "2026-09-20T23:44:51.177Z",
    "elapsedMs": 266.8869169999962,
    "successfulAttemptElapsedMs": 265.18875000000116,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.06
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.25
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.12
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.37
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.59
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.22
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.19
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.06
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
            "independently_established": 0,
            "mixed_or_unknown": 0.13,
            "no_sensitive_action": 0.61,
            "sender_supplied": 0.26
          },
          "confidence": 0.48
        }
      },
      "usage": {
        "input_tokens": 3545,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "55c686b56d8f45bc3f31b76b78d01fe1b7308446c6113b120b4ad4824adf195b",
    "capturedAt": "2026-09-20T23:44:51.356Z",
    "elapsedMs": 177.22125000000233,
    "successfulAttemptElapsedMs": 175.73108299999876,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.95,
            "body:4": 0,
            "body:3": 0,
            "body:0": 0,
            "body:1": 0,
            "body:2": 0.05,
            "subject:0": 0,
            "body:5": 0
          },
          "confidence": 0.94
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.35000000000000003,
            "body:4": 0.26,
            "body:3": 0,
            "body:0": 0.31,
            "body:1": 0,
            "body:2": 0.08,
            "subject:0": 0,
            "body:5": 0
          },
          "confidence": 0.25
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.53,
            "body:4": 0,
            "body:3": 0.19,
            "body:0": 0.12,
            "body:1": 0.01,
            "body:2": 0.01,
            "subject:0": 0.01,
            "body:5": 0.13
          },
          "confidence": 0.46
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.97,
            "body:4": 0.02,
            "body:3": 0,
            "body:0": 0.01,
            "body:1": 0,
            "body:2": 0,
            "subject:0": 0,
            "body:5": 0
          },
          "confidence": 0.97
        }
      },
      "usage": {
        "input_tokens": 2227,
        "output_tokens": 364
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 446.2310839999991,
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
        "status": "none_selected",
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
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 906,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-185",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:50.911Z",
    "offsetMs": 1.1424999999944703
  },
  {
    "seq": 907,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-185",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:51.176Z",
    "offsetMs": 266.88929199999984,
    "elapsedMs": 265.18875000000116,
    "outcome": "success"
  },
  {
    "seq": 908,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-185",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:51.179Z",
    "offsetMs": 269.4599589999998
  },
  {
    "seq": 909,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-185",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:51.355Z",
    "offsetMs": 445.76629200000025,
    "elapsedMs": 175.73108299999876,
    "outcome": "success"
  },
  {
    "seq": 910,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-185",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:51.356Z",
    "offsetMs": 446.3399999999965,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "c70746c62abd40e96fdb8fc2aaa8132ac320382bed9b0257a168bb208c149683";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":907},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":909},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":910}} as const;
export const projectionSha256 = "76120cf01e96a4551b4fee8fe931c1d88503e71977f52b9425f33339a83ab2cf";
