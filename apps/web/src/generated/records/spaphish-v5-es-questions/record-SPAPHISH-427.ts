import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-427",
  "inputSha256": "fd10aa9002592d4349209389cbed18a6ae444a76339764e33731374ff9339a70",
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
      "end": 29,
      "text": "Resultado del test metabolico"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 103,
      "text": "Muchas gracias por realizar nuestro test metabolico, hecho desde su email: SofiaRojasVargas@gmail.com. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 103,
      "end": 182,
      "text": "En el test metabolico, el resultado es que usted es ligeramente tipo Proteína. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 182,
      "end": 307,
      "text": "Si quieres mejorar tu dieta, aqu te damos unos consejos muy prcticos: https://sofia-gomez.net/tipo-balanceado-50-proteina-50/"
    }
  ],
  "passA": {
    "requestSha256": "8ecc1edc5724bef635abe9bc07d6827b414a1cf492b106ea9383e8da11d0e380",
    "capturedAt": "2026-09-22T03:56:41.620Z",
    "elapsedMs": 583.9755749999895,
    "successfulAttemptElapsedMs": 581.9249999999884,
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
          "noul": 0.03
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.29
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
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
            "educational_or_quoted": 0.01,
            "mixed_or_unclear": 0,
            "informational": 0.45,
            "active_request": 0.54
          },
          "confidence": 0.38
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.92,
            "sender_supplied": 0.08,
            "mixed_or_unknown": 0
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 4965,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "c2f9c53d4457ffab04680473be0f96496dab862e8b58346338e249d0386bd64f",
    "capturedAt": "2026-09-22T03:56:42.137Z",
    "elapsedMs": 515.7717260000063,
    "successfulAttemptElapsedMs": 514.2447350000148,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.01,
            "subject:0": 0.01,
            "body:2": 0.17,
            "NONE": 0.66,
            "body:0": 0.15
          },
          "confidence": 0.58
        }
      },
      "usage": {
        "input_tokens": 861,
        "output_tokens": 66
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1101.0913040000014,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence"
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 2094,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-427",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:41.038Z",
    "offsetMs": 1.7088590000057593
  },
  {
    "seq": 2095,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-427",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:41.620Z",
    "offsetMs": 583.9763350000139,
    "elapsedMs": 581.9249999999884,
    "outcome": "success"
  },
  {
    "seq": 2096,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-427",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:41.622Z",
    "offsetMs": 586.2372060000198
  },
  {
    "seq": 2097,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-427",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:42.137Z",
    "offsetMs": 1100.8566240000073,
    "elapsedMs": 514.2447350000148,
    "outcome": "success"
  },
  {
    "seq": 2098,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-427",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:42.137Z",
    "offsetMs": 1101.143286000006,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "aed2818ece7248a1dcd512c32cb74a4c7a2b788d15d0aa1e5ab8e08b28af3479";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2095},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2097},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2098}} as const;
export const projectionSha256 = "6101c341a67cad10fcfccb904c3e8d5affde701ea3c7915fd1e86088dfe9f1b0";
