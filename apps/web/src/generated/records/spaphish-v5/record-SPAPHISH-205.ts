import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-205",
  "inputSha256": "3a6ab391c4bd6c404c0a02c604e164c802024e70f7d7bc39ed06e60a7cf19b2f",
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
      "end": 41,
      "text": "Pablito - Tiene (1) mensaje de nosotros. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 41,
      "end": 71,
      "text": "Haga clic abajo para abrirlo. "
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 71,
      "end": 73,
      "text": "📦"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 66,
      "text": "FedEx ® ☰ Fecha de envio : 04-28-2024 Falta de entrega a Pablito! "
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
      "end": 596,
      "text": "En casa Trabajar Información del paquete:  Situación Detenido en el centro de distribución  Enviar a través de Seguimiento de correspondencia internacional  Dado: 04-28-2024 -------------------------------------------------------------------------------- CONSULTA AQUÍ Si ya no desea recibir estos correos electrónicos, puede darse de baja click en el enlace darse de baja"
    }
  ],
  "passA": {
    "requestSha256": "4bf618ea529c7697c13a1506d2fd468ac88ca9f7bd0fbee81ae509acd7596502",
    "capturedAt": "2026-09-20T23:44:59.566Z",
    "elapsedMs": 153.2149999999965,
    "successfulAttemptElapsedMs": 151.66354199999478,
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
          "noul": 0.07
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
          "noul": 0.44
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.89
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.34
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
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "mixed_or_unclear": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.68,
            "independently_established": 0,
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.31
          },
          "confidence": 0.58
        }
      },
      "usage": {
        "input_tokens": 3598,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "906b770806f2860e1cc73818589073df2ad948412b0049e5c80e53f3c6bf51b7",
    "capturedAt": "2026-09-20T23:44:59.708Z",
    "elapsedMs": 140.3868749999965,
    "successfulAttemptElapsedMs": 139.22766600000614,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0.01,
            "body:4": 0,
            "body:2": 0,
            "body:1": 0.81,
            "body:3": 0,
            "subject:2": 0,
            "body:0": 0.04,
            "subject:1": 0.01,
            "NONE": 0.12,
            "body:5": 0.01
          },
          "confidence": 0.79
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.09,
            "body:4": 0,
            "body:2": 0.01,
            "body:3": 0,
            "body:1": 0.02,
            "subject:2": 0,
            "body:0": 0.83,
            "subject:1": 0,
            "NONE": 0.04,
            "body:5": 0.01
          },
          "confidence": 0.81
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.86,
            "body:2": 0.01,
            "body:3": 0,
            "subject:2": 0,
            "body:1": 0,
            "body:0": 0,
            "subject:1": 0.04,
            "body:4": 0,
            "body:5": 0.09
          },
          "confidence": 0.84
        }
      },
      "usage": {
        "input_tokens": 2058,
        "output_tokens": 333
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 295.2492920000077,
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
    "seq": 1001,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-205",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:59.414Z",
    "offsetMs": 1.0647089999984019
  },
  {
    "seq": 1002,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-205",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:59.566Z",
    "offsetMs": 153.21783400001004,
    "elapsedMs": 151.66354199999478,
    "outcome": "success"
  },
  {
    "seq": 1003,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-205",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:59.568Z",
    "offsetMs": 155.08908400000655
  },
  {
    "seq": 1004,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-205",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:59.708Z",
    "offsetMs": 294.7772499999992,
    "elapsedMs": 139.22766600000614,
    "outcome": "success"
  },
  {
    "seq": 1005,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-205",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:59.708Z",
    "offsetMs": 295.3543340000033,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ed4655cff0972cce50b9b8d488869d675f5fabb51fcf5a4046c927d775d7b5e9";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1002},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1004},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1005}} as const;
export const projectionSha256 = "b1fe517b9d5303d0aeb7320106e2570e21e1e6c89c8dc6c83f2d9012c27d4cba";
