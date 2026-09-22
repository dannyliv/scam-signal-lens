import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-164",
  "inputSha256": "d54f438b3bf45f2b1ae0eb04f6636d6d6cf188db39b089133bfa46450ef46720",
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
      "end": 96,
      "text": "Ezequiela Miguelina - Has ganado un Compresor de Aire Portátil para Neumáticos Bosch 🎁, ID#2905"
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
      "end": 56,
      "text": "¡El número de premios a ganar es limitado! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 56,
      "end": 73,
      "text": "¡Confirma ahora! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 73,
      "end": 160,
      "text": "REPSOL® Podrás ganar un premio exclusivo ¡Has sido seleccionado para recibir un nuevo! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 160,
      "end": 251,
      "text": "Compresor de Aire Portátil para Neumáticos Bosch Haz clic aquí para reclamar ¡Felicidades! "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 251,
      "end": 341,
      "text": "Has sido seleccionado para participar en nuestro programa de fidelidad de forma GRATUITA. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 341,
      "end": 398,
      "text": "Solo te llevará un minuto recibir este fantástico premio."
    }
  ],
  "passA": {
    "requestSha256": "cbcd2c596a758fac77a1fe1e2a05dde1120be1da4b50828035913f08d665de0f",
    "capturedAt": "2026-09-22T03:51:28.347Z",
    "elapsedMs": 611.7954310000059,
    "successfulAttemptElapsedMs": 610.2198659999995,
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
          "noul": 0.32
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
          "noul": 0.93
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.68
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.33
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.2
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
          "noul": 0.03
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
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.3,
            "independently_established": 0,
            "sender_supplied": 0.69,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.58
        }
      },
      "usage": {
        "input_tokens": 5005,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "44e478f52d513af5ab5aaf78c93fd1bcde681525939c499d28227ff218d90480",
    "capturedAt": "2026-09-22T03:51:28.831Z",
    "elapsedMs": 483.27943000002415,
    "successfulAttemptElapsedMs": 482.45320300001185,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:5": 0.01,
            "body:6": 0,
            "body:4": 0.07,
            "body:3": 0,
            "body:2": 0.07,
            "body:1": 0,
            "NONE": 0.85,
            "body:0": 0
          },
          "confidence": 0.83
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "body:5": 0,
            "body:3": 0,
            "body:4": 0,
            "body:6": 0,
            "body:2": 0.05,
            "body:1": 0.1,
            "NONE": 0,
            "body:0": 0.85
          },
          "confidence": 0.83
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "subject:0": 0.01,
            "body:5": 0.09,
            "body:6": 0,
            "body:4": 0,
            "body:3": 0.54,
            "body:1": 0,
            "body:2": 0.01,
            "NONE": 0.35,
            "body:0": 0
          },
          "confidence": 0.47
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:5": 0,
            "body:6": 0,
            "body:4": 0.03,
            "body:3": 0,
            "body:2": 0.06,
            "body:1": 0,
            "NONE": 0.9,
            "body:0": 0.01
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 2757,
        "output_tokens": 404
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1096.7424189999874,
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
    "seq": 797,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-164",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:27.736Z",
    "offsetMs": 1.1631720000004862
  },
  {
    "seq": 798,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-164",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:28.347Z",
    "offsetMs": 611.7979040000064,
    "elapsedMs": 610.2198659999995,
    "outcome": "success"
  },
  {
    "seq": 799,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-164",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:28.348Z",
    "offsetMs": 613.688467
  },
  {
    "seq": 800,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-164",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:28.831Z",
    "offsetMs": 1096.4622709999967,
    "elapsedMs": 482.45320300001185,
    "outcome": "success"
  },
  {
    "seq": 801,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-164",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:51:28.832Z",
    "offsetMs": 1096.8002419999975,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "2eb566958d05ecf36c7b1f0845097287d7a7998b2f31df197995878e297fa853";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":798},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":800},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":801}} as const;
export const projectionSha256 = "36d922067dbc1918c3d1a706e5280f95a358601d6c9adeca793da4d2ccc5dd26";
