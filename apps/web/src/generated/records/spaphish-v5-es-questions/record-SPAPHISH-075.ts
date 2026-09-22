import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-075",
  "inputSha256": "620a61953e4ea19b7a52d7cf4c61ac04fc724922b2a397e84060e52e4adb34a8",
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
      "end": 57,
      "text": "Pablito - Tienes (1) paquete esperando ser entregado 📦. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 57,
      "end": 106,
      "text": "Usa tu código para rastrearlo y recibirlo ___🚚. "
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 106,
      "end": 113,
      "text": "ID#6365"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 32,
      "text": "Tienes (1) mensaje de nosotros. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 32,
      "end": 79,
      "text": "Por favor, haz clic en confirmar para abrirlo. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 79,
      "end": 226,
      "text": "Su código de seguimiento: 998877665 Continuar ➢ ¡Programe su entrega y suscríbase a nuestras notificaciones para evitar que esto vuelva a suceder! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 226,
      "end": 296,
      "text": "Programar entrega ahora Gracias por su pronta atención a este asunto. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 296,
      "end": 323,
      "text": "Esperamos su confirmación. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 323,
      "end": 423,
      "text": "Atentamente, estafeta Sobre Nosotros | Contacto | Administrar Preferencias © 2025 estafeta Limited. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 423,
      "end": 453,
      "text": "Todos los derechos reservados."
    }
  ],
  "passA": {
    "requestSha256": "211777ef649fdd0b0b267433a24ea7a7c00f67209af4536ac3cd7de9283b6d75",
    "capturedAt": "2026-09-22T03:49:42.161Z",
    "elapsedMs": 641.4899980000046,
    "successfulAttemptElapsedMs": 640.688387000002,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.14
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.1
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.61
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.93
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.32
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.07
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
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.59,
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "no_sensitive_action": 0.4
          },
          "confidence": 0.45
        }
      },
      "usage": {
        "input_tokens": 5044,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "4ee42044b2316b5e3ff074ec25538be415e7b1417a9b422dbb1d909c04995af9",
    "capturedAt": "2026-09-22T03:49:42.700Z",
    "elapsedMs": 538.092432999998,
    "successfulAttemptElapsedMs": 537.179363999996,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0.01,
            "body:5": 0,
            "body:3": 0.33,
            "body:4": 0,
            "body:2": 0.62,
            "body:6": 0,
            "NONE": 0.04,
            "subject:1": 0,
            "subject:2": 0,
            "body:0": 0
          },
          "confidence": 0.57
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "subject:0": 0.01,
            "body:1": 0.03,
            "body:5": 0.87,
            "body:3": 0.01,
            "body:4": 0.01,
            "body:2": 0.01,
            "body:6": 0,
            "NONE": 0.03,
            "subject:1": 0,
            "subject:2": 0,
            "body:0": 0.03
          },
          "confidence": 0.85
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0.17,
            "body:5": 0,
            "body:3": 0.01,
            "body:2": 0.02,
            "body:4": 0,
            "body:6": 0,
            "NONE": 0.8,
            "subject:1": 0,
            "subject:2": 0,
            "body:0": 0
          },
          "confidence": 0.78
        }
      },
      "usage": {
        "input_tokens": 2395,
        "output_tokens": 360
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1181.3603910000093,
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
        "status": "selected",
        "segmentId": "body:5"
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
    "seq": 365,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-075",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:41.519Z",
    "offsetMs": 0.5010470000124769
  },
  {
    "seq": 366,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-075",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:42.160Z",
    "offsetMs": 641.4907559999992,
    "elapsedMs": 640.688387000002,
    "outcome": "success"
  },
  {
    "seq": 367,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-075",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:42.162Z",
    "offsetMs": 643.5638580000086
  },
  {
    "seq": 368,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-075",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:42.700Z",
    "offsetMs": 1181.0580250000057,
    "elapsedMs": 537.179363999996,
    "outcome": "success"
  },
  {
    "seq": 369,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-075",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:42.700Z",
    "offsetMs": 1181.4256280000118,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ba19a03e0dfd288718f7dac34ac71d850047f8e745da5f3e5a1176c57dcefa92";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":366},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":368},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":369}} as const;
export const projectionSha256 = "82edc77864a68acf8f1df7470d1e45ca03ace940c316c783a4abdb48337b12aa";
