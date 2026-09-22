import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-339",
  "inputSha256": "d868e511de34ce7bf4b5800394391347f9aa26e4d7af73cdbfed2230c31a0f61",
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
      "end": 82,
      "text": "Ezequiela Miguelina -  🎁⏱️Completa una breve encuesta y recibe un regalo gratis. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 82,
      "end": 89,
      "text": "ID#5621"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 61,
      "text": "MAPFRE ¡Responde una breve encuesta y gana un regalo gratis! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 61,
      "end": 269,
      "text": "Kit de Emergencia para el Coche Tienes la oportunidad de recibir un completo kit de seguridad para tu vehículo, cortesía de MAPFRE. ricardo RESPONDE Y GANA Haz clic aquí para reclamar tu regalo ¡Felicidades! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 269,
      "end": 386,
      "text": "Has sido seleccionado entre un grupo limitado de personas para recibir un exclusivo Kit de Emergencia para el Coche. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 386,
      "end": 481,
      "text": "Para obtener tu regalo, solo debes responder algunas preguntas sobre tu experiencia con MAPFRE."
    }
  ],
  "passA": {
    "requestSha256": "9707165ae30f8fb3c578b92efc64f3a3ce5d6f3fb4de75c7992322f4af08ede9",
    "capturedAt": "2026-09-22T03:54:57.934Z",
    "elapsedMs": 618.532973000023,
    "successfulAttemptElapsedMs": 617.5336850000313,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.04
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.28
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.42
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.87
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.19
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.1
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
            "mixed_or_unclear": 0,
            "informational": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.28,
            "independently_established": 0,
            "sender_supplied": 0.71,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.61
        }
      },
      "usage": {
        "input_tokens": 5020,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "b8d8250e8cfb7be44f002b79dc34156393a396c348e31b597c2b2cd6c172b674",
    "capturedAt": "2026-09-22T03:54:58.496Z",
    "elapsedMs": 560.3049400000018,
    "successfulAttemptElapsedMs": 558.8880059999647,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "subject:1": 0,
            "NONE": 0.9,
            "body:3": 0.09,
            "body:1": 0.01,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 0.88
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:2": 0.26,
            "subject:1": 0,
            "NONE": 0.21,
            "body:3": 0,
            "body:1": 0.02,
            "subject:0": 0.5,
            "body:0": 0.01
          },
          "confidence": 0.41
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0.03,
            "subject:1": 0,
            "NONE": 0.15,
            "body:3": 0.05,
            "body:1": 0.16,
            "subject:0": 0,
            "body:0": 0.61
          },
          "confidence": 0.55
        }
      },
      "usage": {
        "input_tokens": 2151,
        "output_tokens": 249
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1180.9446480000042,
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
    "seq": 1657,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-339",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:57.316Z",
    "offsetMs": 0.7714260000502691
  },
  {
    "seq": 1658,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-339",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:57.934Z",
    "offsetMs": 618.5315300000366,
    "elapsedMs": 617.5336850000313,
    "outcome": "success"
  },
  {
    "seq": 1659,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-339",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:57.937Z",
    "offsetMs": 621.4960380000412
  },
  {
    "seq": 1660,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-339",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:58.496Z",
    "offsetMs": 1180.660348000005,
    "elapsedMs": 558.8880059999647,
    "outcome": "success"
  },
  {
    "seq": 1661,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-339",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:58.497Z",
    "offsetMs": 1180.9968830000143,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1c8b25674f9ee2d6c1d9600dc0b0792c7a2181b7628bffc0987b8d1d61695877";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1658},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1660},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1661}} as const;
export const projectionSha256 = "39a196284b0e61e7bbdd9e49e0e5e2fd2049713876786af2803323c968d90afc";
