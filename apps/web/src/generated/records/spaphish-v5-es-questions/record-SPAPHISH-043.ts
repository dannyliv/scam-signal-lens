import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-043",
  "inputSha256": "407819c6432d5b2552da5e7f267257ea8e090b904655654ac01ce6cc23639478",
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
      "end": 21,
      "text": "Ezequiela Miguelina! "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 21,
      "end": 85,
      "text": "😍 - Has ganado un Juego de herramientas Parkside de 3 piezas 🎁"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 12,
      "text": "Date prisa. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 12,
      "end": 61,
      "text": "¡La cantidad de premios disponibles es limitada! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 61,
      "end": 78,
      "text": "¡Confirma ahora! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 78,
      "end": 142,
      "text": "LIDL El ganador de hoy es Ricardo López ¡HAS SIDO SELECCIONADO! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 142,
      "end": 228,
      "text": "Para recibir tu regalo: Conjunto de 3 piezas Parkside Reclama tu regalo ¡Felicidades! "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 228,
      "end": 307,
      "text": "Has sido seleccionado para participar GRATIS en nuestro programa de fidelidad. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 307,
      "end": 364,
      "text": "Solo te llevará un minuto recibir este fantástico premio."
    }
  ],
  "passA": {
    "requestSha256": "97746d53a5fb7f213c5a94c24e2f034e82a72fecec36e20eb9bc8eeb7cc69368",
    "capturedAt": "2026-09-22T03:49:02.820Z",
    "elapsedMs": 602.7314629999964,
    "successfulAttemptElapsedMs": 601.8658060000016,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.07
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.36
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.07
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.06
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.95
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.64
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.32
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
          "noul": 0.19
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
            "informational": 0,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.31,
            "no_sensitive_action": 0.51,
            "mixed_or_unknown": 0.18
          },
          "confidence": 0.34
        }
      },
      "usage": {
        "input_tokens": 4988,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "9bdb504fc692d9de3ad83aeb53fb6e8e05f507fead2e2e914d38b0527bcd2e71",
    "capturedAt": "2026-09-22T03:49:03.403Z",
    "elapsedMs": 580.7705219999989,
    "successfulAttemptElapsedMs": 579.6535600000061,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:3": 0,
            "body:1": 0,
            "body:6": 0.02,
            "body:2": 0.05,
            "subject:1": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:5": 0.01,
            "body:4": 0.06,
            "NONE": 0.86
          },
          "confidence": 0.84
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:3": 0,
            "body:1": 0.07,
            "body:6": 0,
            "body:2": 0.12,
            "subject:1": 0,
            "body:5": 0,
            "body:0": 0.81,
            "subject:0": 0,
            "body:4": 0,
            "NONE": 0
          },
          "confidence": 0.79
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:3": 0.56,
            "body:1": 0,
            "body:6": 0,
            "body:2": 0,
            "subject:1": 0,
            "NONE": 0.31,
            "body:0": 0,
            "body:5": 0.12,
            "body:4": 0.01,
            "subject:0": 0
          },
          "confidence": 0.5
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:3": 0,
            "body:1": 0,
            "body:6": 0.01,
            "body:2": 0.1,
            "subject:1": 0,
            "body:5": 0,
            "body:0": 0.04,
            "subject:0": 0,
            "body:4": 0,
            "NONE": 0.85
          },
          "confidence": 0.82
        }
      },
      "usage": {
        "input_tokens": 2724,
        "output_tokens": 440
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1186.3082730000024,
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
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 207,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-043",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:02.217Z",
    "offsetMs": 0.4783079999979236
  },
  {
    "seq": 208,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-043",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:02.819Z",
    "offsetMs": 602.731955999996,
    "elapsedMs": 601.8658060000016,
    "outcome": "success"
  },
  {
    "seq": 209,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-043",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:02.822Z",
    "offsetMs": 605.582613999999
  },
  {
    "seq": 210,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-043",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:03.403Z",
    "offsetMs": 1185.984448999996,
    "elapsedMs": 579.6535600000061,
    "outcome": "success"
  },
  {
    "seq": 211,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-043",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:03.403Z",
    "offsetMs": 1186.355094999999,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "3a25ffb0cc7e8203686e327b2743f336b8aacbab03550a0f970254200c9609b7";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":208},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":210},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":211}} as const;
export const projectionSha256 = "010702ad51cf7f9564e590935bb3ef9f7a5e9a4ff350a01b314356f756cf377a";
