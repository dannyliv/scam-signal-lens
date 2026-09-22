import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-336",
  "inputSha256": "98a058e911aac7cd74fe7fc127f6f49e906efd9a6d55d9f08e76f9ee4dacf854",
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
      "end": 69,
      "text": "Ezequiela Miguelina! - Has ganado un paquete de senderismo Quechua 🎁"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 64,
      "text": "Solo se necesita un minuto para recibir este fantástico premio. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 64,
      "end": 135,
      "text": "DECATHLON El ganador de hoy es Laura Castillo, ¡HAS SIDO SELECCIONADO! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 135,
      "end": 222,
      "text": "Para recibir tu regalo: Paquete de Senderismo Aventura Reclama tu regalo ¡Felicidades! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 222,
      "end": 301,
      "text": "Has sido seleccionado para participar gratis en nuestro programa de fidelidad. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 301,
      "end": 358,
      "text": "Solo te tomará un minuto recibir este fantástico premio. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 358,
      "end": 386,
      "text": "© 2025 GRUPO DECATHLON B.V. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 386,
      "end": 477,
      "text": "Si ya no deseas recibir estos correos electrónicos, puedes darte de baja haciendo clic aquí"
    }
  ],
  "passA": {
    "requestSha256": "bbdfcd442ab6d075f9d9a9fe6f13c52e90af9897b63be9999a1976b6b6edee08",
    "capturedAt": "2026-09-22T03:54:53.903Z",
    "elapsedMs": 608.1140049999813,
    "successfulAttemptElapsedMs": 606.80085900001,
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
          "noul": 0.06
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.51
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.81
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.16
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.13
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.22
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
            "mixed_or_unclear": 0,
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.04,
            "independently_established": 0,
            "sender_supplied": 0.45,
            "no_sensitive_action": 0.51
          },
          "confidence": 0.35
        }
      },
      "usage": {
        "input_tokens": 5018,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "e6aaee5e6f3e355707f76ae45f49da50a7a49c5b7e3ccc53e8cb41a895885768",
    "capturedAt": "2026-09-22T03:54:54.609Z",
    "elapsedMs": 705.0430199999828,
    "successfulAttemptElapsedMs": 703.8305539999856,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.11,
            "body:0": 0,
            "subject:0": 0,
            "body:1": 0,
            "body:4": 0,
            "NONE": 0.89,
            "body:5": 0,
            "body:3": 0,
            "body:6": 0
          },
          "confidence": 0.87
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.11,
            "body:0": 0.3,
            "subject:0": 0,
            "body:1": 0.06,
            "body:4": 0.17,
            "NONE": 0.36,
            "body:5": 0,
            "body:3": 0,
            "body:6": 0
          },
          "confidence": 0.27
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.01,
            "body:0": 0,
            "body:6": 0.01,
            "body:1": 0.29,
            "body:4": 0,
            "NONE": 0.36,
            "body:5": 0.22,
            "body:3": 0.1,
            "subject:0": 0.01
          },
          "confidence": 0.27
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "body:0": 0.33,
            "subject:0": 0.04,
            "body:1": 0.01,
            "body:4": 0.15,
            "NONE": 0.45999999999999996,
            "body:5": 0,
            "body:3": 0.01,
            "body:6": 0
          },
          "confidence": 0.4
        }
      },
      "usage": {
        "input_tokens": 2822,
        "output_tokens": 398
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1314.819702000008,
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
    "seq": 1642,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-336",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:53.295Z",
    "offsetMs": 1.052691999997478
  },
  {
    "seq": 1643,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-336",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:53.902Z",
    "offsetMs": 608.11451699998,
    "elapsedMs": 606.80085900001,
    "outcome": "success"
  },
  {
    "seq": 1644,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-336",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:53.905Z",
    "offsetMs": 610.3674039999605
  },
  {
    "seq": 1645,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-336",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:54.609Z",
    "offsetMs": 1314.5232839999953,
    "elapsedMs": 703.8305539999856,
    "outcome": "success"
  },
  {
    "seq": 1646,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-336",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:54.609Z",
    "offsetMs": 1314.8865360000054,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "59f6c970e42811d04afca1bb66ec7a84f8fc6b71a6e24938fdc88fd160c7f70a";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1643},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1645},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1646}} as const;
export const projectionSha256 = "d56e3793f5fa5f186ba10b50fdeebe442d7a2496f6557f47bfc7196a3fde1a0a";
