import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-410",
  "inputSha256": "b72ce99ea18ae2add13cba46d3f77a9ac95e7c1bc4af9f53f2c6b27587ebdd87",
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
      "end": 38,
      "text": "Pablito - Tienes (1) mensaje nuestro. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 38,
      "end": 58,
      "text": "Complete su entrega."
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 58,
      "end": 69,
      "text": "📦 🚚 ..284"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 72,
      "text": "FedEx ® ☰ Fecha de envío: 05-14-2025 ¡Fallo en la entrega para ricardo! "
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
      "end": 593,
      "text": "En casa En el trabajo Información del paquete: Estado Detenido en el centro de distribución Envío a través de Correo internacional con seguimiento Fecha: 05-14-2025 -------------------------------------------------------------------------------- Ingrese la información de entrega Si ya no desea recibir estos correos electrónicos, puede darse de baja haciendo clic aquí"
    }
  ],
  "passA": {
    "requestSha256": "8585e062bab67a78077def4d63327e92babbe4e56599d009a34a52d8a70a92ef",
    "capturedAt": "2026-09-20T23:46:09.495Z",
    "elapsedMs": 186.534874999983,
    "successfulAttemptElapsedMs": 183.9537919999857,
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
          "noul": 0.09
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
          "noul": 0.34
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.89
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.23
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
          "noul": 0.01
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
            "active_request": 1,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.68,
            "sender_supplied": 0.31,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.57
        }
      },
      "usage": {
        "input_tokens": 3583,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "ed26ac5878d1c4ec2577889e585faeb40100016ceb4dbb3917af3f7dddfe1dd8",
    "capturedAt": "2026-09-20T23:46:09.642Z",
    "elapsedMs": 144.32854100002442,
    "successfulAttemptElapsedMs": 141.84129199999734,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "body:1": 0.18,
            "NONE": 0.26,
            "subject:1": 0.48,
            "body:2": 0,
            "subject:0": 0.01,
            "subject:2": 0,
            "body:3": 0.04,
            "body:0": 0.03
          },
          "confidence": 0.41
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.01,
            "NONE": 0.05,
            "subject:1": 0.01,
            "body:2": 0.01,
            "subject:0": 0.03,
            "subject:2": 0,
            "body:3": 0.01,
            "body:0": 0.88
          },
          "confidence": 0.87
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0,
            "NONE": 0.95,
            "subject:1": 0.01,
            "body:2": 0.01,
            "subject:0": 0,
            "subject:2": 0,
            "body:3": 0.03,
            "body:0": 0
          },
          "confidence": 0.94
        }
      },
      "usage": {
        "input_tokens": 1911,
        "output_tokens": 279
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 333.31595800002106,
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
    "seq": 2011,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-410",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:09.310Z",
    "offsetMs": 1.9787500000093132
  },
  {
    "seq": 2012,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-410",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:09.495Z",
    "offsetMs": 186.5352080000157,
    "elapsedMs": 183.9537919999857,
    "outcome": "success"
  },
  {
    "seq": 2013,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-410",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:09.499Z",
    "offsetMs": 190.3392500000191
  },
  {
    "seq": 2014,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-410",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:09.641Z",
    "offsetMs": 332.88850000000093,
    "elapsedMs": 141.84129199999734,
    "outcome": "success"
  },
  {
    "seq": 2015,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-410",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:09.642Z",
    "offsetMs": 333.42150000002584,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1a74adbac1204811f7d21addcb27927810769cd58378a6495580b113070c47a5";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2012},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2014},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2015}} as const;
export const projectionSha256 = "cf9a69a02b75897d60765d0b96d4a02348ea50028fe854aa87161e4986f0d65a";
