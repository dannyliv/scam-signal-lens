import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-327",
  "inputSha256": "b5ec9b1471e747202720515c85f985a429d6b58875eee162931f9e7806ea49a2",
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
      "end": 37,
      "text": "Bienvenid@ al evento de Kinich School"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 75,
      "text": "Hola Mariana Solís, Gracias por inscribirse para \"El ABC de las Finanzas\". "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 75,
      "end": 199,
      "text": "En esta charla, coach Lía nos hablará sobre la importancia de la educación financiera para nuestras niñas, niños y jóvenes. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 199,
      "end": 293,
      "text": "Durante la sesión proporcionará tips y sugerencias para el aprendizaje financiero en familia. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 293,
      "end": 362,
      "text": "Este es un espacio dirigido a madres, padres o cuidadores primarios. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 362,
      "end": 386,
      "text": "¡Todos son bienvenidos! "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 386,
      "end": 433,
      "text": "Envíe sus preguntas a: contacto@aurorakids.edu\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 433,
      "end": 472,
      "text": " Fecha, hora: 22 ago. 2021 06:30 p. m. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 472,
      "end": 615,
      "text": "Villa Aurora Únase desde una PC, Mac, Linux, iOS o Android: Haga clic aquí para unirse Nota: No debe compartir este enlace con otras personas. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 615,
      "end": 641,
      "text": "Es únicamente para usted. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 641,
      "end": 1067,
      "text": "Agregar al calendario Agregar al calendario de Nova Agregar al calendario de Yarro O un toque en iPhone: Estados Unidos: +17205550123,,81420356971# or +18765551234,,81420356971# O teléfono: Marcar: Estados Unidos: +1 702 555 0142 or +1 725 555 0198 or +1 303 555 0119 or +1 312 555 0176 or +1 415 555 0164 or +1 646 555 0183 ID de la reunión: 814 2035 6971 Números internacionales disponibles: https://meetia.net/u/zkP4LmTq89\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 1067,
      "end": 1119,
      "text": " Puede cancelar su inscripción en cualquier momento."
    }
  ],
  "passA": {
    "requestSha256": "d96b3d4032074e7abca3e2ba166dce2e84ef89677decab054f30d458ac9a43e7",
    "capturedAt": "2026-09-22T03:54:42.886Z",
    "elapsedMs": 667.7879330000142,
    "successfulAttemptElapsedMs": 666.0958569999784,
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
          "noul": 0.03
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
          "noul": 0.06
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.8
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.07
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.18
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 0.61,
            "mixed_or_unclear": 0.01,
            "informational": 0.38
          },
          "confidence": 0.48
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.16,
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "no_sensitive_action": 0.83
          },
          "confidence": 0.77
        }
      },
      "usage": {
        "input_tokens": 5293,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "1bdffd3e0f8eeb2578ac6cd848478c64aef309f033cb32a5cfa204ef2eaf5586",
    "capturedAt": "2026-09-22T03:54:43.417Z",
    "elapsedMs": 529.0626030000276,
    "successfulAttemptElapsedMs": 527.9935110000079,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "subject:0": 0.14,
            "body:3": 0.03,
            "body:0": 0.02,
            "body:8": 0.01,
            "body:1": 0.43,
            "body:10": 0,
            "body:9": 0.01,
            "body:6": 0,
            "NONE": 0.14,
            "body:4": 0,
            "body:5": 0.18000000000000002,
            "body:7": 0.04
          },
          "confidence": 0.37
        }
      },
      "usage": {
        "input_tokens": 1628,
        "output_tokens": 141
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1198.6882439999608,
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
    "seq": 1597,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-327",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:42.219Z",
    "offsetMs": 0.9776599999750033
  },
  {
    "seq": 1598,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-327",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:42.886Z",
    "offsetMs": 667.7864790000021,
    "elapsedMs": 666.0958569999784,
    "outcome": "success"
  },
  {
    "seq": 1599,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-327",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:42.889Z",
    "offsetMs": 670.2593420000048
  },
  {
    "seq": 1600,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-327",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:43.417Z",
    "offsetMs": 1198.4865359999822,
    "elapsedMs": 527.9935110000079,
    "outcome": "success"
  },
  {
    "seq": 1601,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-327",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:43.417Z",
    "offsetMs": 1198.7451739999815,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "756c2f86fa5c42d8757ffca47409267ad8668f925961b26a766d25a13fbdf13c";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1598},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1600},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1601}} as const;
export const projectionSha256 = "38714f545f82f92677e0bd720b833ae562b4e2c05abaf8eb3ec667d0b85eacc1";
