import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-467",
  "inputSha256": "7628a293d7b800e8fe65edb1a1545909c6d30100c532a7db4ff281bd57885bbc",
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
      "text": "🚨˪Tu cuenta de Netflix será eliminada hoy 28-09-2024˪🚨"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 29,
      "text": "⚠️Tu cuenta será suspendida! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 29,
      "end": 72,
      "text": "Por favor actualice su información de pago\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 72,
      "end": 86,
      "text": "N E T F L I X\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 86,
      "end": 115,
      "text": "No pudimos validar su cuenta\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 115,
      "end": 138,
      "text": "Estimado Daniela Ríos:\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 138,
      "end": 215,
      "text": "Estamos teniendo algunos problemas con su información de facturación actual. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 215,
      "end": 320,
      "text": "Lo intentaremos nuevamente, pero mientras tanto es posible que desees actualizar tu información de pago.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 320,
      "end": 346,
      "text": "ACTUALIZA TU CUENTA AHORA\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 346,
      "end": 377,
      "text": "Informations sur votre compte:\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 377,
      "end": 407,
      "text": "ID de suscripción : 918334872\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 407,
      "end": 425,
      "text": "Producto: Netflix\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 425,
      "end": 456,
      "text": "Fecha de caducidad: 17 02 2025\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 456,
      "end": 478,
      "text": "-El equipo de Netflix\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 478,
      "end": 638,
      "text": "⚠️:En caso de desconocimiento, sus servicios serán suspendidos completamente dentro de las 24 horas siguientes a los términos definidos en nuestros contratos .\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 638,
      "end": 652,
      "text": "Darse de baja\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 652,
      "end": 667,
      "text": "Copyright 2024\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 667,
      "end": 709,
      "text": "El anunciante no gestiona tu suscripción. "
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 709,
      "end": 849,
      "text": "Si prefieres no recibir más comunicaciones, por favor date de baja. aquí o escribir a: 128 W Glenmoor Blvd Ste 411#5620, Riverton, UT, 84065"
    }
  ],
  "passA": {
    "requestSha256": "eba8dd5342115600c89f03febed6a3ccb25ca17579f5d61205af414eb9332554",
    "capturedAt": "2026-09-22T03:57:28.773Z",
    "elapsedMs": 621.2315510000335,
    "successfulAttemptElapsedMs": 619.7835819999455,
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
          "noul": 0.86
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.51
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
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.43
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
            "active_request": 1,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.88,
            "independently_established": 0,
            "no_sensitive_action": 0.04,
            "mixed_or_unknown": 0.08
          },
          "confidence": 0.84
        }
      },
      "usage": {
        "input_tokens": 5156,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "7e718342cad7b80d1be3d4b238e7788e76dbc4729ca364c4d5cba84fd8f4ac26",
    "capturedAt": "2026-09-22T03:57:29.446Z",
    "elapsedMs": 671.5559370000847,
    "successfulAttemptElapsedMs": 669.9712440000148,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "body:6": 0.02,
            "body:9": 0,
            "body:12": 0,
            "subject:0": 0,
            "body:7": 0.2,
            "body:8": 0,
            "body:15": 0,
            "body:16": 0,
            "body:3": 0,
            "body:0": 0,
            "NONE": 0.01,
            "body:11": 0,
            "body:10": 0,
            "body:14": 0,
            "body:5": 0,
            "body:4": 0,
            "body:13": 0,
            "body:1": 0.77,
            "body:17": 0
          },
          "confidence": 0.74
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "body:6": 0.01,
            "body:12": 0,
            "body:9": 0,
            "subject:0": 0,
            "body:7": 0.06,
            "body:8": 0,
            "body:15": 0,
            "body:3": 0,
            "body:16": 0,
            "body:0": 0.01,
            "NONE": 0.17,
            "body:10": 0,
            "body:11": 0,
            "body:14": 0,
            "body:5": 0,
            "body:4": 0,
            "body:13": 0,
            "body:1": 0.75,
            "body:17": 0
          },
          "confidence": 0.73
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:13",
          "probabilities": {
            "body:2": 0,
            "body:6": 0,
            "body:9": 0,
            "body:12": 0,
            "subject:0": 0.26,
            "body:7": 0.14,
            "body:8": 0,
            "body:15": 0,
            "body:16": 0,
            "body:3": 0,
            "body:0": 0.04,
            "NONE": 0,
            "body:11": 0,
            "body:10": 0,
            "body:14": 0,
            "body:5": 0,
            "body:4": 0,
            "body:17": 0,
            "body:1": 0,
            "body:13": 0.55
          },
          "confidence": 0.51
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:12",
          "probabilities": {
            "body:2": 0.08,
            "body:6": 0.04,
            "body:12": 0.7,
            "body:9": 0,
            "subject:0": 0,
            "body:7": 0.01,
            "body:8": 0,
            "body:15": 0,
            "body:16": 0,
            "body:3": 0.02,
            "body:0": 0,
            "NONE": 0.01,
            "body:11": 0,
            "body:10": 0.01,
            "body:5": 0.11,
            "body:14": 0,
            "body:17": 0,
            "body:13": 0.01,
            "body:1": 0.01,
            "body:4": 0
          },
          "confidence": 0.67
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "body:6": 0.01,
            "body:9": 0,
            "body:12": 0,
            "subject:0": 0,
            "body:7": 0.17,
            "body:8": 0,
            "body:15": 0,
            "body:3": 0.01,
            "body:16": 0.02,
            "body:0": 0.01,
            "NONE": 0.7,
            "body:10": 0,
            "body:11": 0,
            "body:5": 0,
            "body:14": 0,
            "body:13": 0.01,
            "body:4": 0,
            "body:1": 0.05,
            "body:17": 0.02
          },
          "confidence": 0.67
        }
      },
      "usage": {
        "input_tokens": 4986,
        "output_tokens": 1042
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1294.653086999897,
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
        "status": "selected",
        "segmentId": "body:1"
      },
      "payment_request": {
        "status": "selected",
        "segmentId": "body:1"
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
        "segmentId": "body:12"
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
      "avoid_sender_route",
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 2293,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-467",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:28.153Z",
    "offsetMs": 1.1829300000099465
  },
  {
    "seq": 2294,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-467",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:28.773Z",
    "offsetMs": 621.2319229999557,
    "elapsedMs": 619.7835819999455,
    "outcome": "success"
  },
  {
    "seq": 2295,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-467",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:28.776Z",
    "offsetMs": 623.951253999956
  },
  {
    "seq": 2296,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-467",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:29.446Z",
    "offsetMs": 1294.1906089999247,
    "elapsedMs": 669.9712440000148,
    "outcome": "success"
  },
  {
    "seq": 2297,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-467",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:29.446Z",
    "offsetMs": 1294.7600910000037,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "98876aadc4be5147a550e0f27c3c8c17a66566de3890763a6d3c2cbf4a5454e6";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2294},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2296},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2297}} as const;
export const projectionSha256 = "2bd68ecf60bec1a5789a2d1293a9a9e1e027636ef6e697891151d900130dc254";
