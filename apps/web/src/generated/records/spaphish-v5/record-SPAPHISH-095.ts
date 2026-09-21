import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-095",
  "inputSha256": "c0eeb11ef8e14e2dd57f4f4ba7b2f9e1ea506add8a12c713ec7d318d75dde3a1",
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
      "end": 62,
      "text": ">>Pablito!! -  Tienes un (1) paquete pendiente de entrega 📦. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 62,
      "end": 108,
      "text": "Usa tu código para seguirlo y recibirlo ___🚚."
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 108,
      "end": 109,
      "text": "X"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 72,
      "text": "FedEx ® ☰ Fecha de envío: 13-04-2025 ¡Fallo en la entrega para Ricardo! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 72,
      "end": 135,
      "text": "Entrega del paquete suspendida ¿Cómo desea recibir su paquete? "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 135,
      "end": 224,
      "text": "Quiero que me lo entreguen Lo recogeré yo mismo ¿Dónde desea que se entregue el paquete? "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 224,
      "end": 592,
      "text": "En casa En el trabajo Información del paquete: Estado Detenido en el centro de distribución Envío a través de Correo internacional con seguimiento Fecha: 3-04-2025 -------------------------------------------------------------------------------- Ingrese la información de entrega Si ya no desea recibir estos correos electrónicos, puede darse de baja haciendo clic aquí"
    }
  ],
  "passA": {
    "requestSha256": "9c50caaf3d7c7b14030b1aac8fbde32f8807cddf4a29504a48cb2c7b35634a99",
    "capturedAt": "2026-09-20T23:44:22.008Z",
    "elapsedMs": 151.94729200000074,
    "successfulAttemptElapsedMs": 149.52466600000116,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.12
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.11
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
          "noul": 0.28
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.88
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.25
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.08
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
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.28,
            "no_sensitive_action": 0.71,
            "mixed_or_unknown": 0.01,
            "independently_established": 0
          },
          "confidence": 0.61
        }
      },
      "usage": {
        "input_tokens": 3593,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "18d7f12975f23bf88ec4dc6de2bc95398b3cd61601de1bcd1c301d5b1f390d6e",
    "capturedAt": "2026-09-20T23:44:22.204Z",
    "elapsedMs": 193.09887499999968,
    "successfulAttemptElapsedMs": 191.164332999997,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.37,
            "subject:0": 0.03,
            "NONE": 0.39,
            "body:0": 0.05,
            "subject:2": 0.02,
            "body:2": 0.01,
            "subject:1": 0.08,
            "body:3": 0.05
          },
          "confidence": 0.29
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.01,
            "subject:0": 0.01,
            "NONE": 0.04,
            "body:2": 0.01,
            "subject:2": 0,
            "body:0": 0.92,
            "subject:1": 0,
            "body:3": 0.01
          },
          "confidence": 0.91
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.01,
            "subject:0": 0,
            "NONE": 0.91,
            "body:0": 0,
            "subject:2": 0,
            "body:2": 0.01,
            "subject:1": 0.04,
            "body:3": 0.03
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 1954,
        "output_tokens": 277
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 348.41079199999876,
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
    "seq": 464,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-095",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:21.858Z",
    "offsetMs": 1.8283750000009604
  },
  {
    "seq": 465,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-095",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:22.008Z",
    "offsetMs": 151.94645899999887,
    "elapsedMs": 149.52466600000116,
    "outcome": "success"
  },
  {
    "seq": 466,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-095",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:22.012Z",
    "offsetMs": 156.2294170000023
  },
  {
    "seq": 467,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-095",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:22.204Z",
    "offsetMs": 348.088667,
    "elapsedMs": 191.164332999997,
    "outcome": "success"
  },
  {
    "seq": 468,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-095",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:22.204Z",
    "offsetMs": 348.4818750000013,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7a63d803ef5ea9e93509943a94e1167f6089ed7ea32652f287f9aeade32aed04";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":465},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":467},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":468}} as const;
export const projectionSha256 = "94cb228aa16e2f8d9990443317d7b83f79423591ec2b68c3de928f57ebca3486";
