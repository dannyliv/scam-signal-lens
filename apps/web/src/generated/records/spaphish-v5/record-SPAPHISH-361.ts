import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-361",
  "inputSha256": "5194be0f9b2e7957e2dc93753af02d50f772d5e77cec47f0c8cf560f1e120c30",
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
      "text": "FedEx ® ☰ Fecha de envio : 05-15-2024 Falta de entrega a ricardo! "
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
      "text": "En casa Trabajar Información del paquete: Situación Detenido en el centro de distribución Enviar a través de Seguimiento de correspondencia internacional Dado: 05-15-2024 -------------------------------------------------------------------------------- CONSULTA AQUÍ Si ya no desea recibir estos correos electrónicos, puede darse de baja click en el enlace darse de baja"
    }
  ],
  "passA": {
    "requestSha256": "d718a71b6e4e79f49f338e1f3bc3e712adfd46784fc1294adb6245d57d7dce49",
    "capturedAt": "2026-09-20T23:45:54.033Z",
    "elapsedMs": 170.55783400000655,
    "successfulAttemptElapsedMs": 168.22495800000615,
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
          "noul": 0.06
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
          "noul": 0.24
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.89
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.29
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
            "active_request": 0.99,
            "informational": 0.01,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.7,
            "independently_established": 0,
            "sender_supplied": 0.29,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.61
        }
      },
      "usage": {
        "input_tokens": 3594,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "344fc1d484075296323ebbcdf01547fe61aece4770bc6dfb8a4e2e3a0da8f8fd",
    "capturedAt": "2026-09-20T23:45:54.157Z",
    "elapsedMs": 122.0777919999964,
    "successfulAttemptElapsedMs": 120.07050000000163,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "subject:2": 0,
            "body:0": 0.01,
            "body:3": 0,
            "subject:0": 0,
            "body:1": 0.9,
            "body:5": 0.01,
            "subject:1": 0.01,
            "body:4": 0,
            "NONE": 0.07
          },
          "confidence": 0.88
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0.01,
            "body:0": 0.81,
            "subject:2": 0,
            "body:3": 0,
            "subject:0": 0.1,
            "body:1": 0.02,
            "subject:1": 0,
            "body:5": 0.01,
            "body:4": 0,
            "NONE": 0.05
          },
          "confidence": 0.79
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.01,
            "subject:2": 0,
            "body:0": 0,
            "body:3": 0.01,
            "subject:0": 0,
            "body:1": 0,
            "subject:1": 0.03,
            "body:5": 0.07,
            "body:4": 0,
            "NONE": 0.88
          },
          "confidence": 0.87
        }
      },
      "usage": {
        "input_tokens": 2042,
        "output_tokens": 333
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 294.98904200000106,
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
    "seq": 1769,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-361",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:53.864Z",
    "offsetMs": 1.6089590000046883
  },
  {
    "seq": 1770,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-361",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:54.033Z",
    "offsetMs": 170.55654199999117,
    "elapsedMs": 168.22495800000615,
    "outcome": "success"
  },
  {
    "seq": 1771,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-361",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:54.037Z",
    "offsetMs": 174.0013340000005
  },
  {
    "seq": 1772,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-361",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:54.157Z",
    "offsetMs": 294.6915000000008,
    "elapsedMs": 120.07050000000163,
    "outcome": "success"
  },
  {
    "seq": 1773,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-361",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:54.158Z",
    "offsetMs": 295.0515000000014,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "2f2d23be2feb62a4802d611e3b91f4326ea6a0836b72c8a3e318c53db647e94f";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1770},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1772},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1773}} as const;
export const projectionSha256 = "b143d2eee191485dc3d3d3fcf44101fef2d71edbbba645fcfd5d14b107e1a3d8";
