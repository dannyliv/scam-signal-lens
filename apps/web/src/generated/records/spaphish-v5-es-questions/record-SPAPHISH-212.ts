import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-212",
  "inputSha256": "06017ad6f56f0771a2fdebbee7d9cb92bf111425470818b018b870f88f800ab1",
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
      "text": "📦 🚚 ..098"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 72,
      "text": "FedEx ® ☰ Fecha de envío: 03-05-2025 ¡Fallo en la entrega para ricardo! "
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
      "text": "En casa En el trabajo Información del paquete: Estado Detenido en el centro de distribución Envío a través de Correo internacional con seguimiento Fecha: 03-05-2025 -------------------------------------------------------------------------------- Ingrese la información de entrega Si ya no desea recibir estos correos electrónicos, puede darse de baja haciendo clic aquí"
    }
  ],
  "passA": {
    "requestSha256": "e8fd38f9600ed891cc65ff65e14023296d08491bfbe638457793e0dc6ac9fc2d",
    "capturedAt": "2026-09-22T03:52:24.521Z",
    "elapsedMs": 659.2400049999997,
    "successfulAttemptElapsedMs": 658.0726110000105,
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
          "noul": 0.33
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.9
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.18
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
          "noul": 0.06
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
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "mixed_or_unknown": 0.02,
            "sender_supplied": 0.24,
            "no_sensitive_action": 0.74
          },
          "confidence": 0.66
        }
      },
      "usage": {
        "input_tokens": 5033,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "556af7bd58e9e7c263ceab045732aa9806bebf892ebb8c71ea6cd3b24a7c182a",
    "capturedAt": "2026-09-22T03:52:25.050Z",
    "elapsedMs": 528.0234789999959,
    "successfulAttemptElapsedMs": 526.9831809999887,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "NONE": 0.21,
            "subject:0": 0,
            "subject:2": 0,
            "body:2": 0,
            "body:1": 0.23,
            "body:3": 0.04,
            "body:0": 0.03,
            "subject:1": 0.49
          },
          "confidence": 0.41
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.01,
            "NONE": 0.04,
            "subject:2": 0,
            "body:2": 0,
            "body:1": 0.01,
            "body:3": 0.01,
            "subject:1": 0.01,
            "body:0": 0.92
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 1624,
        "output_tokens": 187
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1188.826241999981,
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
    "seq": 1032,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-212",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:23.862Z",
    "offsetMs": 0.8455419999954756
  },
  {
    "seq": 1033,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-212",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:24.521Z",
    "offsetMs": 659.2472079999861,
    "elapsedMs": 658.0726110000105,
    "outcome": "success"
  },
  {
    "seq": 1034,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-212",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:24.523Z",
    "offsetMs": 661.1739329999837
  },
  {
    "seq": 1035,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-212",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:25.050Z",
    "offsetMs": 1188.5611239999998,
    "elapsedMs": 526.9831809999887,
    "outcome": "success"
  },
  {
    "seq": 1036,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-212",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:25.050Z",
    "offsetMs": 1188.8743689999974,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7eee942c7a0ae4cc45e25f492120b80b3875cbda481d0bf6710c8f7172a0371e";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1033},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1035},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1036}} as const;
export const projectionSha256 = "9e3b800910875d63ca0d091ab1a1397cf8fba0dc63f2ebdda507772716db6c80";
