import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-246",
  "inputSha256": "28f18b6e34caa2a02ac4ecfcbb0cc95706abfc6c7593af5e7801f69505ea572d",
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
      "text": "📦 🚚 ..049"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 72,
      "text": "FedEx ® ☰ Fecha de envío: 03-09-2025 ¡Fallo en la entrega para ricardo! "
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
      "text": "En casa En el trabajo Información del paquete: Estado Detenido en el centro de distribución Envío a través de Correo internacional con seguimiento Fecha: 03-09-2025 -------------------------------------------------------------------------------- Ingrese la información de entrega Si ya no desea recibir estos correos electrónicos, puede darse de baja haciendo clic aquí"
    }
  ],
  "passA": {
    "requestSha256": "dc52af183cef38a4e941832ac19c710f2e342724cfb9ac7a5e0aa7e00c040395",
    "capturedAt": "2026-09-22T03:53:04.541Z",
    "elapsedMs": 659.6793339999858,
    "successfulAttemptElapsedMs": 658.4261609999812,
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
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.3
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.91
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.16
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
            "informational": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.3,
            "mixed_or_unknown": 0.02,
            "independently_established": 0,
            "no_sensitive_action": 0.68
          },
          "confidence": 0.57
        }
      },
      "usage": {
        "input_tokens": 5033,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "2fc9e0d9859173d71450c2558767ff7e4872f0bc7b3709e94ba120b12366c3c4",
    "capturedAt": "2026-09-22T03:53:05.130Z",
    "elapsedMs": 587.008284999989,
    "successfulAttemptElapsedMs": 584.889382000023,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "subject:2": 0,
            "NONE": 0.18,
            "subject:1": 0.52,
            "body:2": 0,
            "subject:0": 0,
            "body:1": 0.25,
            "body:0": 0.02,
            "body:3": 0.03
          },
          "confidence": 0.45
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:2": 0,
            "NONE": 0.06,
            "subject:1": 0.01,
            "body:2": 0.01,
            "subject:0": 0.01,
            "body:1": 0.01,
            "body:0": 0.89,
            "body:3": 0.01
          },
          "confidence": 0.87
        }
      },
      "usage": {
        "input_tokens": 1624,
        "output_tokens": 187
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1248.7469840000267,
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1199,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-246",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:03.882Z",
    "offsetMs": 0.9373749999795109
  },
  {
    "seq": 1200,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-246",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:04.541Z",
    "offsetMs": 659.6799720000126,
    "elapsedMs": 658.4261609999812,
    "outcome": "success"
  },
  {
    "seq": 1201,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-246",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:04.544Z",
    "offsetMs": 663.0034360000282
  },
  {
    "seq": 1202,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-246",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:05.130Z",
    "offsetMs": 1248.4877010000055,
    "elapsedMs": 584.889382000023,
    "outcome": "success"
  },
  {
    "seq": 1203,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-246",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:53:05.130Z",
    "offsetMs": 1248.8093150000204,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "40551c852267c666b30e743f10fbd678a2fe174a3ba064fddbbf2d1ba2d489de";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1200},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1202},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1203}} as const;
export const projectionSha256 = "f10161ce2d63d49a00cec97902a627d7c1ea6a69fb0d5b2c343124c187a61976";
