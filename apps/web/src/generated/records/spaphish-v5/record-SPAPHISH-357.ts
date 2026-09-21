import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-357",
  "inputSha256": "f181cdd78462776c8318afdb8839ca25f6cb3a30361cd9c2e777033607b5a29f",
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
      "end": 27,
      "text": "Algoritmo arbol de decision"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 153,
      "text": "Camarada, ya le metí un update bueno al paper, incluida una nueva grafica en los experimentos que aporta más información sobre la ventaja del algoritmo.\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 153,
      "end": 154,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 154,
      "end": 197,
      "text": "Despáchalo para donde estimes conveniente.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 197,
      "end": 198,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 198,
      "end": 283,
      "text": "Recuerda que no es un paper para revista de impacto, mándalo para algún lugar suave.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 283,
      "end": 284,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 284,
      "end": 369,
      "text": "Mantenme al tanto de lo que vayas a hacer, para saber por dónde andan los papers 😊.\n"
    }
  ],
  "passA": {
    "requestSha256": "3c421bb28d229e675d1cba4e89984d69923c19a0117ef618a62a97264a021e5e",
    "capturedAt": "2026-09-20T23:45:52.675Z",
    "elapsedMs": 108.50091699999757,
    "successfulAttemptElapsedMs": 106.361625000005,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.05
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.24
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
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 0,
            "educational_or_quoted": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.99,
            "independently_established": 0.01,
            "sender_supplied": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 3528,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "5aa30ab1542fc9b22bc7170a6b659acd15746c1eb8083c796b794d780bab5472",
    "capturedAt": "2026-09-20T23:45:52.925Z",
    "elapsedMs": 249.24308299999393,
    "successfulAttemptElapsedMs": 247.7084579999937,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0.02,
            "body:1": 0,
            "body:3": 0,
            "body:2": 0.02,
            "body:4": 0.02,
            "subject:0": 0,
            "body:0": 0.27,
            "body:5": 0,
            "NONE": 0.67
          },
          "confidence": 0.63
        }
      },
      "usage": {
        "input_tokens": 837,
        "output_tokens": 102
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 359.16687499999534,
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
        "status": "low_confidence",
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
        "status": "not_requested",
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
    "seq": 1749,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-357",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:52.568Z",
    "offsetMs": 1.5762090000062017
  },
  {
    "seq": 1750,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-357",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:52.675Z",
    "offsetMs": 108.50337500000023,
    "elapsedMs": 106.361625000005,
    "outcome": "success"
  },
  {
    "seq": 1751,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-357",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:52.677Z",
    "offsetMs": 110.6417919999949
  },
  {
    "seq": 1752,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-357",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:52.925Z",
    "offsetMs": 358.9489590000012,
    "elapsedMs": 247.7084579999937,
    "outcome": "success"
  },
  {
    "seq": 1753,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-357",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:52.925Z",
    "offsetMs": 359.2286250000034,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7a3ac1e3e600470976bb819522fba945b68eac07b651c5687a7d93a1ed4d992f";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1750},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1752},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1753}} as const;
export const projectionSha256 = "528a36a9019eaa6787eae194096f1b7d6410f5be6012bce84bff0b7aa2dea604";
