import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-187",
  "inputSha256": "c2c91b91daf7ea9fdc95a7d4a96e183ccaaa713e835f7b0782180b68dab5ee51",
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
      "end": 71,
      "text": "FedEx ® ☰ Fecha de envío: 04-15-2025 ¡Fallo en la entrega para Miguel! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 71,
      "end": 134,
      "text": "Entrega del paquete suspendida ¿Cómo desea recibir su paquete? "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 134,
      "end": 223,
      "text": "Quiero que me lo entreguen Lo recogeré yo mismo ¿Dónde desea que se entregue el paquete? "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 223,
      "end": 592,
      "text": "En casa En el trabajo Información del paquete: Estado Detenido en el centro de distribución Envío a través de Correo internacional con seguimiento Fecha: 04-15-2025 -------------------------------------------------------------------------------- Ingrese la información de entrega Si ya no desea recibir estos correos electrónicos, puede darse de baja haciendo clic aquí"
    }
  ],
  "passA": {
    "requestSha256": "04bff77cd005d73445aeba093fbe388b966e713f99304cc1056f008e6bd2d724",
    "capturedAt": "2026-09-22T03:51:54.283Z",
    "elapsedMs": 611.4903300000005,
    "successfulAttemptElapsedMs": 610.6478950000019,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.1
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.14
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
          "noul": 0.31
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.9
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.2
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
            "sender_supplied": 0.24,
            "independently_established": 0,
            "mixed_or_unknown": 0.02,
            "no_sensitive_action": 0.74
          },
          "confidence": 0.66
        }
      },
      "usage": {
        "input_tokens": 5044,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "95f10323f96ec5cb3f0719712b341530f642db8c494e1da2d6d8fe3028437bf8",
    "capturedAt": "2026-09-22T03:51:54.880Z",
    "elapsedMs": 595.4645129999844,
    "successfulAttemptElapsedMs": 594.5747029999911,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.04,
            "body:2": 0.01,
            "NONE": 0.41,
            "body:1": 0.28,
            "body:0": 0.06,
            "subject:2": 0.01,
            "body:3": 0.1,
            "subject:1": 0.09
          },
          "confidence": 0.32
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.01,
            "body:2": 0.01,
            "NONE": 0.08,
            "body:1": 0.03,
            "body:0": 0.85,
            "subject:2": 0,
            "subject:1": 0,
            "body:3": 0.02
          },
          "confidence": 0.84
        }
      },
      "usage": {
        "input_tokens": 1659,
        "output_tokens": 185
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1208.4813830000057,
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
        "segmentId": "body:0"
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
    "seq": 909,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-187",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:53.672Z",
    "offsetMs": 0.5336419999948703
  },
  {
    "seq": 910,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-187",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:54.283Z",
    "offsetMs": 611.4907450000173,
    "elapsedMs": 610.6478950000019,
    "outcome": "success"
  },
  {
    "seq": 911,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-187",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:54.285Z",
    "offsetMs": 613.3880160000117
  },
  {
    "seq": 912,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-187",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:54.880Z",
    "offsetMs": 1208.270027999999,
    "elapsedMs": 594.5747029999911,
    "outcome": "success"
  },
  {
    "seq": 913,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-187",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:51:54.880Z",
    "offsetMs": 1208.5308490000025,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "e411946afc3a1db52722cf2c9653f48d59a0564cb24c0e68bdf2d7a759aff2b3";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":910},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":912},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":913}} as const;
export const projectionSha256 = "4d40d241c2adcbe5626fa81cf0c2df45be7310158733cce58b4c2409e489c4ca";
