import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-451",
  "inputSha256": "bd0268e5ff5578478e130aa8c31c90b885eeb3a0522443ae52f5032fa02caf95",
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
    "requestSha256": "4daa726e75e099411a5d3616aa2794d243d00dd9bca77d45094ce35e067c22f9",
    "capturedAt": "2026-09-22T03:57:10.521Z",
    "elapsedMs": 627.0921149998903,
    "successfulAttemptElapsedMs": 625.4887690000469,
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
          "noul": 0.26
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
          "noul": 0.94
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.4
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.29
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
          "noul": 0.39
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
            "mixed_or_unclear": 0,
            "informational": 0,
            "educational_or_quoted": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "mixed_or_unknown": 0.02,
            "no_sensitive_action": 0.42,
            "sender_supplied": 0.56
          },
          "confidence": 0.4
        }
      },
      "usage": {
        "input_tokens": 5004,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "41d134c4a460c6849dd4f213db0926821ca2d959f35f72a4d635edaf03985b99",
    "capturedAt": "2026-09-22T03:57:11.045Z",
    "elapsedMs": 521.7520130000776,
    "successfulAttemptElapsedMs": 519.3920950000174,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.09,
            "body:7": 0,
            "body:6": 0,
            "body:1": 0,
            "body:0": 0,
            "body:8": 0,
            "body:4": 0,
            "NONE": 0.89,
            "subject:1": 0,
            "body:5": 0,
            "body:3": 0.02,
            "subject:0": 0
          },
          "confidence": 0.87
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0.1,
            "body:7": 0,
            "body:0": 0.6900000000000001,
            "body:1": 0.21,
            "body:6": 0,
            "body:8": 0,
            "subject:1": 0,
            "NONE": 0,
            "body:4": 0,
            "body:5": 0,
            "body:3": 0,
            "subject:0": 0
          },
          "confidence": 0.65
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "body:0": 0,
            "subject:0": 0,
            "body:1": 0,
            "body:7": 0,
            "body:8": 0.01,
            "subject:1": 0,
            "NONE": 0.6,
            "body:4": 0,
            "body:5": 0,
            "body:3": 0.2,
            "body:6": 0.19
          },
          "confidence": 0.55
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.09,
            "body:0": 0.02,
            "body:7": 0,
            "body:1": 0,
            "body:6": 0,
            "body:8": 0,
            "body:4": 0,
            "NONE": 0.88,
            "subject:1": 0,
            "body:5": 0,
            "body:3": 0.01,
            "subject:0": 0
          },
          "confidence": 0.86
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "body:7": 0.21,
            "subject:0": 0.04,
            "body:1": 0,
            "body:0": 0,
            "body:8": 0,
            "subject:1": 0,
            "NONE": 0.46,
            "body:4": 0,
            "body:5": 0,
            "body:3": 0.26,
            "body:6": 0.03
          },
          "confidence": 0.4
        }
      },
      "usage": {
        "input_tokens": 3553,
        "output_tokens": 636
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1151.2155650000786,
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
        "status": "low_confidence",
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
    "seq": 2214,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-451",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:09.895Z",
    "offsetMs": 1.3314539999701083
  },
  {
    "seq": 2215,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-451",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:10.521Z",
    "offsetMs": 627.0908360000467,
    "elapsedMs": 625.4887690000469,
    "outcome": "success"
  },
  {
    "seq": 2216,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-451",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:10.525Z",
    "offsetMs": 630.8911210000515
  },
  {
    "seq": 2217,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-451",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:11.044Z",
    "offsetMs": 1150.749461999978,
    "elapsedMs": 519.3920950000174,
    "outcome": "success"
  },
  {
    "seq": 2218,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-451",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:11.045Z",
    "offsetMs": 1151.3091900000582,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1b017bab84e4f2d1050221622b4e74e8af2c0da7f41b3c05e67b5997ca8c80da";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2215},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2217},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2218}} as const;
export const projectionSha256 = "c3d6089deeb63e51bf12c49d3b8868a2243d396ad448c30a258056015af692be";
