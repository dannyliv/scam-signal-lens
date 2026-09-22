import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-210",
  "inputSha256": "f101c77b7ef28f10b3272193654951cd0ae5600184e949d273e7eae3ea3d8837",
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
      "end": 56,
      "text": "Urgente: Missxtranger ¡Tu cuenta de Netflix vencerá hoy!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 30,
      "text": "⚠️¡Su cuenta será suspendida! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 30,
      "end": 214,
      "text": "Por favor actualice sus detalles de pago N E T F L I X No pudimos validar su cuenta Estimada Elena Montes, Estamos teniendo algunos problemas con su información de facturación actual. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 214,
      "end": 312,
      "text": "Lo intentaremos de nuevo, pero mientras tanto es posible que desees actualizar tus datos de pago. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 312,
      "end": 635,
      "text": "ACTUALIZAR CUENTA AHORA Información sobre su cuenta: ID de suscripción : 789012345 Producto: Netflix Fecha de caducidad: 05 Marzo 2024 -El equipo de Netflix ⚠️:En caso de desconocimiento, sus servicios quedarán completamente suspendidos dentro de las 24 horas siguientes según los términos definidos en nuestros contratos. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 635,
      "end": 714,
      "text": "Darse de baja Derechos de autor 2024 El anunciante no gestiona su suscripción. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 714,
      "end": 856,
      "text": "Si prefiere no recibir más comunicaciones, anule la suscripción aquí O escriba a: 404 Calle Industrial Ste 202#5050, Ciudad Central, CO, 80012"
    }
  ],
  "passA": {
    "requestSha256": "d2cb976bd02830a2d40d801b499013bfb5f23f6f1b43ebfb605e4fc53800e01f",
    "capturedAt": "2026-09-22T03:52:21.915Z",
    "elapsedMs": 668.9488899999997,
    "successfulAttemptElapsedMs": 668.0085910000198,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.08
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.89
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.5
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.97
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.96
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.52
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
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.06
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
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.02,
            "sender_supplied": 0.89,
            "mixed_or_unknown": 0.09,
            "independently_established": 0
          },
          "confidence": 0.85
        }
      },
      "usage": {
        "input_tokens": 5134,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "060a407f120c35e449d405623882f5ce49e6d41b58904f357086cb647befe482",
    "capturedAt": "2026-09-22T03:52:22.454Z",
    "elapsedMs": 537.091333999997,
    "successfulAttemptElapsedMs": 536.2211430000025,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.7,
            "body:2": 0.07,
            "subject:0": 0,
            "NONE": 0,
            "body:5": 0,
            "body:3": 0.23,
            "body:4": 0,
            "body:0": 0
          },
          "confidence": 0.64
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:2": 0.03,
            "body:1": 0.54,
            "NONE": 0.29,
            "body:5": 0.02,
            "body:3": 0.12,
            "body:4": 0,
            "body:0": 0
          },
          "confidence": 0.46
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:1": 0,
            "body:2": 0,
            "subject:0": 0.05,
            "NONE": 0,
            "body:5": 0,
            "body:3": 0.93,
            "body:4": 0,
            "body:0": 0.02
          },
          "confidence": 0.92
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:1": 0.2,
            "body:2": 0.01,
            "subject:0": 0.01,
            "NONE": 0.01,
            "body:5": 0.01,
            "body:3": 0.76,
            "body:4": 0,
            "body:0": 0
          },
          "confidence": 0.73
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:2": 0.04,
            "body:1": 0.1,
            "NONE": 0.5599999999999999,
            "body:5": 0.07,
            "body:3": 0.18,
            "body:4": 0.04,
            "body:0": 0.01
          },
          "confidence": 0.51
        }
      },
      "usage": {
        "input_tokens": 4044,
        "output_tokens": 460
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1207.6883010000165,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H5"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "low_confidence",
        "segmentId": null
      },
      "payment_request": {
        "status": "low_confidence",
        "segmentId": null
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:3"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:3"
      },
      "verification_bypass": {
        "status": "low_confidence",
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
      "avoid_sender_route",
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1022,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-210",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:21.247Z",
    "offsetMs": 0.6944399999920279
  },
  {
    "seq": 1023,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-210",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:21.915Z",
    "offsetMs": 668.9485350000032,
    "elapsedMs": 668.0085910000198,
    "outcome": "success"
  },
  {
    "seq": 1024,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-210",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:21.917Z",
    "offsetMs": 670.8360209999955
  },
  {
    "seq": 1025,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-210",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:22.453Z",
    "offsetMs": 1207.3298230000073,
    "elapsedMs": 536.2211430000025,
    "outcome": "success"
  },
  {
    "seq": 1026,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-210",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:22.454Z",
    "offsetMs": 1207.7477080000099,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "cd05a526b1f7f8c30394158c94180cd2f15a98c7d6912f277be2e38f049c710a";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1023},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1025},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1026}} as const;
export const projectionSha256 = "db338bfda20c403483c26b98e9dd3f437441be54494b2f41e98adb959125873e";
