import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-421",
  "inputSha256": "621d8e7fcb5dbdb6b1f16af32b5b903ef5d470f617d9dcd4fcbc40da11e0bd16",
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
      "end": 40,
      "text": "Pablito -Tiene (1) mensaje de nosotros. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 40,
      "end": 70,
      "text": "Haga clic abajo para abrirlo. "
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 70,
      "end": 72,
      "text": "📦"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 66,
      "text": "FedEx ® ☰ Fecha de envio : 05-24-2024 Falta de entrega a Antonio! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 66,
      "end": 134,
      "text": "entrega de paquete suspendida ¿Cómo le gustaría recibir su paquete? "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 134,
      "end": 162,
      "text": "Quiero que me lo entreguen. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 162,
      "end": 182,
      "text": "Lo tomaré yo mismo. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 182,
      "end": 224,
      "text": "¿Dónde desea que le entreguen el paquete? "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 224,
      "end": 593,
      "text": "En casa Trabajar Información del paquete: Situación Detenido en el centro de distribución Enviar a través de Seguimiento de correspondencia internacional Dado: 05-24-2024 -------------------------------------------------------------------------------- CONSULTA AQUÍ Si ya no desea recibir estos correos electrónicos, puede darse de baja click en el enlace darse de baja"
    }
  ],
  "passA": {
    "requestSha256": "e1bfbe4501bedf9f974c72e73b971bbaa24e4931b03ee564e44b5afa36f4626a",
    "capturedAt": "2026-09-20T23:46:13.403Z",
    "elapsedMs": 193.48858299999847,
    "successfulAttemptElapsedMs": 191.5480840000091,
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
          "noul": 0.08
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.31
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.88
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.28
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.07
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "active_request": 1,
            "informational": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "no_sensitive_action": 0.64,
            "sender_supplied": 0.35
          },
          "confidence": 0.53
        }
      },
      "usage": {
        "input_tokens": 3594,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "a5a199cb6751aee9f4fb0b775af66293027e61a151cc2c485fd9b0da89efa03c",
    "capturedAt": "2026-09-20T23:46:13.551Z",
    "elapsedMs": 145.3772080000199,
    "successfulAttemptElapsedMs": 142.8997500000114,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "body:1": 0.8,
            "subject:2": 0,
            "body:3": 0,
            "NONE": 0.14,
            "body:4": 0,
            "subject:1": 0.01,
            "body:5": 0.01,
            "subject:0": 0.01,
            "body:0": 0.03
          },
          "confidence": 0.78
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0,
            "subject:2": 0,
            "body:1": 0.02,
            "body:3": 0,
            "NONE": 0.05,
            "body:4": 0,
            "subject:1": 0,
            "body:5": 0.01,
            "subject:0": 0.15000000000000002,
            "body:0": 0.77
          },
          "confidence": 0.73
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.01,
            "body:1": 0,
            "subject:2": 0,
            "body:3": 0.01,
            "NONE": 0.86,
            "body:4": 0,
            "subject:1": 0.03,
            "body:5": 0.09,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 0.83
        }
      },
      "usage": {
        "input_tokens": 2042,
        "output_tokens": 333
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 342.2053330000199,
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
        "status": "selected",
        "segmentId": "body:1"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 2066,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-421",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:13.210Z",
    "offsetMs": 1.5265000000072177
  },
  {
    "seq": 2067,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-421",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:13.402Z",
    "offsetMs": 193.48841600000742,
    "elapsedMs": 191.5480840000091,
    "outcome": "success"
  },
  {
    "seq": 2068,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-421",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:13.407Z",
    "offsetMs": 198.37262500001816
  },
  {
    "seq": 2069,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-421",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:13.550Z",
    "offsetMs": 341.89200000002165,
    "elapsedMs": 142.8997500000114,
    "outcome": "success"
  },
  {
    "seq": 2070,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-421",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:13.551Z",
    "offsetMs": 342.27295800001593,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "af54b154d39929957f5ab53ede2c142f11647440a85789d738a0acc0c3d5386b";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2067},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2069},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2070}} as const;
export const projectionSha256 = "58fb73a548eca8829e48ff565414d6a554087f48302c513944ad22e6d2832566";
