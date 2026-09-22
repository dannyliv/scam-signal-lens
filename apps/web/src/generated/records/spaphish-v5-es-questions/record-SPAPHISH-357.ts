import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-357",
  "inputSha256": "f181cdd78462776c8318afdb8839ca25f6cb3a30361cd9c2e777033607b5a29f",
  "questionBundleSha256": "9631a5b623f8c05b491dc5a5f67ab9b62e5b1898446a722339eaa0c16a40af8b",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "source_messages",
  "policySha256": "42e51b1f7b8706dae7188d0d3fa8c6ac83b855b21f393196bd63bc16d4b91d93",
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
    "requestSha256": "f398840aa00ce81ac9244e4fc87b8b96d21304d99d0e5251de7fa3fcf89e7275",
    "capturedAt": "2026-09-22T03:55:20.503Z",
    "elapsedMs": 608.4371140000294,
    "successfulAttemptElapsedMs": 607.3550790000008,
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
          "noul": 0.27
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
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
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.01,
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "no_sensitive_action": 0.99
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 4978,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "259026c952e5224d31dd52eb0b9894458d6b6775797a2a4a8da1a7d1644a65d5",
    "capturedAt": "2026-09-22T03:55:21.056Z",
    "elapsedMs": 552.2489959999803,
    "successfulAttemptElapsedMs": 550.4293600000092,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.01,
            "body:0": 0.18,
            "body:2": 0.09,
            "body:3": 0,
            "body:6": 0.02,
            "NONE": 0.67,
            "body:4": 0.03,
            "body:5": 0,
            "subject:0": 0
          },
          "confidence": 0.62
        }
      },
      "usage": {
        "input_tokens": 937,
        "output_tokens": 102
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1162.3411290000076,
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
    "seq": 1747,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-357",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:19.895Z",
    "offsetMs": 0.8476200000150129
  },
  {
    "seq": 1748,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-357",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:20.502Z",
    "offsetMs": 608.4367709999788,
    "elapsedMs": 607.3550790000008,
    "outcome": "success"
  },
  {
    "seq": 1749,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-357",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:20.505Z",
    "offsetMs": 611.0842669999693
  },
  {
    "seq": 1750,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-357",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:21.056Z",
    "offsetMs": 1162.1505270000198,
    "elapsedMs": 550.4293600000092,
    "outcome": "success"
  },
  {
    "seq": 1751,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-357",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:21.056Z",
    "offsetMs": 1162.393173999968,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "44b83443dab62b8d0bd2e601906ee3eb250bfbccb93ea5031317cd8420a0ad96";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1748},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1750},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1751}} as const;
export const projectionSha256 = "bf5bc38aed73cb97867aa32b0d30433b75d235c556e1b58188e7724629afb9fb";
