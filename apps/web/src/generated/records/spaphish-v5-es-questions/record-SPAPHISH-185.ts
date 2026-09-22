import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-185",
  "inputSha256": "963e07bdac457c75c2bec750da2d96e88287f147d5284dcf9f88b8d1d0b16d81",
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
    "requestSha256": "603f2e375f39a11fb5f91728328c85a44bcd19ae4e42ee949a2f2659a5aeeeb5",
    "capturedAt": "2026-09-22T03:51:52.564Z",
    "elapsedMs": 584.5373210000107,
    "successfulAttemptElapsedMs": 583.5705400000152,
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
          "noul": 0.29
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.07
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.46
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.56
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.19
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.14
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.18
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
            "independently_established": 0,
            "mixed_or_unknown": 0.11,
            "no_sensitive_action": 0.62,
            "sender_supplied": 0.27
          },
          "confidence": 0.5
        }
      },
      "usage": {
        "input_tokens": 4995,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "28a441c7edac0668cfa8b6bb5f6e8ca22bad6ab323d149a68fe8b9bd23d23924",
    "capturedAt": "2026-09-22T03:51:53.047Z",
    "elapsedMs": 481.5515369999921,
    "successfulAttemptElapsedMs": 480.7092479999992,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.13,
            "body:3": 0.01,
            "NONE": 0.86,
            "subject:0": 0,
            "body:5": 0,
            "body:1": 0,
            "body:0": 0,
            "body:4": 0
          },
          "confidence": 0.84
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0.07,
            "body:3": 0,
            "NONE": 0.29,
            "subject:0": 0,
            "body:5": 0,
            "body:1": 0,
            "body:0": 0.39,
            "body:4": 0.25
          },
          "confidence": 0.29
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.03,
            "body:3": 0.24,
            "NONE": 0.39,
            "subject:0": 0.01,
            "body:5": 0.28,
            "body:1": 0.01,
            "body:0": 0.04,
            "body:4": 0
          },
          "confidence": 0.3
        }
      },
      "usage": {
        "input_tokens": 2093,
        "output_tokens": 274
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1067.850563999993,
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
    "seq": 900,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-185",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:51.979Z",
    "offsetMs": 0.691579999984242
  },
  {
    "seq": 901,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-185",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:52.563Z",
    "offsetMs": 584.5367280000064,
    "elapsedMs": 583.5705400000152,
    "outcome": "success"
  },
  {
    "seq": 902,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-185",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:52.565Z",
    "offsetMs": 586.6136459999834
  },
  {
    "seq": 903,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-185",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:53.046Z",
    "offsetMs": 1067.6135019999929,
    "elapsedMs": 480.7092479999992,
    "outcome": "success"
  },
  {
    "seq": 904,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-185",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:51:53.047Z",
    "offsetMs": 1067.9044430000067,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1ae832796fe3a08dda481c12cbb8d9a3787aca2b61e8855f29a74a9d4f2d0e07";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":901},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":903},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":904}} as const;
export const projectionSha256 = "95efad7862c23a9b9bd16b874752f0f618def6841c1da6fe936a2d91d9098bd2";
