import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-451",
  "inputSha256": "bd0268e5ff5578478e130aa8c31c90b885eeb3a0522443ae52f5032fa02caf95",
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
      "end": 62,
      "text": "Ezequiela Miguelina! - Has ganado un Juego de taladro Bosch ! "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 62,
      "end": 64,
      "text": "🎁"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 13,
      "text": "¡Date prisa! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 13,
      "end": 57,
      "text": "¡El número de lotes para ganar es limitado! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 57,
      "end": 74,
      "text": "¡Confirma ahora! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 74,
      "end": 166,
      "text": "BOSCH Reclama tu NUEVO GRATIS ¡Solo te llevará unos minutos recibir este fantástico premio! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 166,
      "end": 205,
      "text": "Juego de taladro Bosch ¡EMPIEZA AHORA! "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 205,
      "end": 219,
      "text": "¡Felicidades! "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 219,
      "end": 309,
      "text": "Has sido seleccionado para participar en nuestro programa de fidelidad de forma GRATUITA. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 309,
      "end": 367,
      "text": "Solo te llevará un minuto recibir este fantástico premio. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 367,
      "end": 458,
      "text": "Si ya no deseas recibir estos correos electrónicos, puedes darte de baja haciendo clic aquí"
    }
  ],
  "passA": {
    "requestSha256": "84b3437adcc3f8c3e2e32290e421e2f056233092016e01e8a5def7c91946154c",
    "capturedAt": "2026-09-20T23:46:23.381Z",
    "elapsedMs": 112.02674999998999,
    "successfulAttemptElapsedMs": 109.57016699999804,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.19
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.11
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.94
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.45
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.3
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.21
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.16
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "active_request": 1,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.48,
            "mixed_or_unknown": 0.03,
            "sender_supplied": 0.49
          },
          "confidence": 0.32
        }
      },
      "usage": {
        "input_tokens": 3554,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "94fee8d8ee5dc969a0d54fbbdf0befc8f6f1bf1486f57ecf96d8a1f6948388c9",
    "capturedAt": "2026-09-21T00:57:33.623Z",
    "elapsedMs": 122.36625000000276,
    "successfulAttemptElapsedMs": 119.85508299999856,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.56,
            "subject:0": 0,
            "body:8": 0,
            "body:1": 0.2,
            "body:4": 0,
            "body:7": 0,
            "NONE": 0,
            "body:6": 0,
            "body:5": 0,
            "body:3": 0,
            "body:2": 0.23,
            "subject:1": 0
          },
          "confidence": 0.52
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "body:5": 0,
            "NONE": 0.73,
            "body:7": 0,
            "body:4": 0,
            "body:1": 0,
            "body:8": 0.01,
            "body:6": 0.16,
            "subject:0": 0,
            "body:2": 0,
            "subject:1": 0,
            "body:3": 0.1
          },
          "confidence": 0.7
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.02,
            "body:5": 0,
            "body:8": 0,
            "body:7": 0.01,
            "body:4": 0,
            "NONE": 0.91,
            "body:1": 0,
            "body:6": 0,
            "subject:0": 0,
            "body:3": 0.01,
            "subject:1": 0,
            "body:2": 0.05
          },
          "confidence": 0.9
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "body:5": 0,
            "NONE": 0.91,
            "body:7": 0.01,
            "body:4": 0,
            "body:1": 0,
            "body:8": 0,
            "body:6": 0.03,
            "subject:0": 0,
            "body:3": 0.02,
            "body:2": 0.03,
            "subject:1": 0
          },
          "confidence": 0.9
        }
      },
      "usage": {
        "input_tokens": 2499,
        "output_tokens": 515
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 408.31358399999226,
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
        "status": "none_selected",
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
    "seq": 2215,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-451",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:23.270Z",
    "offsetMs": 1.857625000004191
  },
  {
    "seq": 2216,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-451",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:23.380Z",
    "offsetMs": 112.0269580000022,
    "elapsedMs": 109.57016699999804,
    "outcome": "success"
  },
  {
    "seq": 2217,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-451",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:23.384Z",
    "offsetMs": 115.84275000001071
  },
  {
    "seq": 2218,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-451",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:23.553Z",
    "offsetMs": 284.26800000001094,
    "elapsedMs": 167.76137500000186,
    "outcome": "success"
  },
  {
    "seq": 2219,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-451",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:23.553Z",
    "offsetMs": 284.45429100000183,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2803,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-451",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:33.503Z",
    "offsetMs": 2.977999999999156
  },
  {
    "seq": 2804,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-451",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:33.623Z",
    "offsetMs": 123.4131669999988,
    "elapsedMs": 119.85508299999856,
    "outcome": "success"
  },
  {
    "seq": 2805,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-451",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:33.624Z",
    "offsetMs": 123.79020899999887,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "4344fd9ad26128eb689c369fa4444e81a6f46c81b1a22c07baca22231a4c6e0e";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2216},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2804},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2805}} as const;
export const projectionSha256 = "cb8fae38101539a4770d239ab7937b9b8a9d4ca01d2a5f3f60ec902b6fa99aab";
