import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-398",
  "inputSha256": "392d314d35c6b633dad7e27bdbe3a04a210dc0a552faa25b8680a0ccb810208a",
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
      "end": 63,
      "text": "Recordatorio: Learnathon Virtual de Ciencia de Datos en español"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 9,
      "text": "Saludos,\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 9,
      "end": 10,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 10,
      "end": 120,
      "text": "No olvides que el Learnathon Virtual de Ciencia de Datos en español comienza hoy a las 10 AM (UTC -5 Bogotá). "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 120,
      "end": 218,
      "text": "Aquí https://cloud.innovacion.org/s/SYNTHETIC_LEARN_FILE/Learnathon_2020_Solutions%20Spanish.knar?"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 218,
      "end": 264,
      "text": "dl=0 puedes descargar el material en español.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 264,
      "end": 265,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 265,
      "end": 383,
      "text": "No olvides ingresar al Learnathon con tu nombre y apellido para poder asignarte al grupo que elegiste al registrarte.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 383,
      "end": 384,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 384,
      "end": 494,
      "text": "Recibirás otro correo electrónico de Zoom con el link para ingresar al Learnathon una hora antes de comenzar.\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 494,
      "end": 495,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 495,
      "end": 524,
      "text": "Nos vemos, El equipo DataFlow"
    }
  ],
  "passA": {
    "requestSha256": "8f70779137ac4b17b08ad1450706f8756b9af7955071fc312e210ef486173cbf",
    "capturedAt": "2026-09-22T03:56:08.266Z",
    "elapsedMs": 573.9651569999987,
    "successfulAttemptElapsedMs": 572.6568370000459,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.03
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.11
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
          "noul": 0.65
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.84
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.07
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "active_request": 0.96,
            "informational": 0.04
          },
          "confidence": 0.95
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.79,
            "sender_supplied": 0.2,
            "independently_established": 0,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.72
        }
      },
      "usage": {
        "input_tokens": 5034,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "3a83b50008c82fafda66a1c4fd3b2b04f0e8f11e81b1de99b6d1d0d76b7602f5",
    "capturedAt": "2026-09-22T03:56:08.794Z",
    "elapsedMs": 526.4247290000203,
    "successfulAttemptElapsedMs": 524.7713920000242,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:9": 0,
            "NONE": 0.05,
            "body:6": 0.31,
            "body:7": 0,
            "subject:0": 0.01,
            "body:4": 0,
            "body:8": 0,
            "body:0": 0,
            "body:3": 0,
            "body:1": 0,
            "body:5": 0,
            "body:2": 0.63,
            "body:10": 0
          },
          "confidence": 0.59
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:10",
          "probabilities": {
            "body:9": 0,
            "NONE": 0.1,
            "body:6": 0.05,
            "body:7": 0,
            "subject:0": 0,
            "body:4": 0,
            "body:8": 0.01,
            "body:0": 0,
            "body:3": 0.01,
            "body:2": 0.01,
            "body:5": 0,
            "body:1": 0,
            "body:10": 0.82
          },
          "confidence": 0.8
        }
      },
      "usage": {
        "input_tokens": 1757,
        "output_tokens": 280
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1102.384384999983,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:10"
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
    "seq": 1950,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-398",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:07.693Z",
    "offsetMs": 0.9551900000078604
  },
  {
    "seq": 1951,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-398",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:08.266Z",
    "offsetMs": 573.9653099999996,
    "elapsedMs": 572.6568370000459,
    "outcome": "success"
  },
  {
    "seq": 1952,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-398",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:08.269Z",
    "offsetMs": 576.9152589999721
  },
  {
    "seq": 1953,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-398",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:08.794Z",
    "offsetMs": 1102.1477820000146,
    "elapsedMs": 524.7713920000242,
    "outcome": "success"
  },
  {
    "seq": 1954,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-398",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:08.794Z",
    "offsetMs": 1102.4280479999725,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "deca3472cd820336a305c59d4f08de273da552550a45829c7bfd7a6907fc5e25";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1951},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1953},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1954}} as const;
export const projectionSha256 = "4f2b3ee3d803cdfca5eb048a0e3eb606e44fc13773e97e278760b340d68a872f";
