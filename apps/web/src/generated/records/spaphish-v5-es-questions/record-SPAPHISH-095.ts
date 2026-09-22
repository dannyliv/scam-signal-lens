import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-095",
  "inputSha256": "c0eeb11ef8e14e2dd57f4f4ba7b2f9e1ea506add8a12c713ec7d318d75dde3a1",
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
    "requestSha256": "353a89871f480ab4868ee6639946b82a495a022b1c66810ede6f1ea7c00340e7",
    "capturedAt": "2026-09-22T03:50:05.487Z",
    "elapsedMs": 630.4776899999997,
    "successfulAttemptElapsedMs": 629.2906380000059,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.07
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.12
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
          "noul": 0.19
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
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.26,
            "independently_established": 0,
            "no_sensitive_action": 0.73
          },
          "confidence": 0.64
        }
      },
      "usage": {
        "input_tokens": 5043,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "7bde5228bb180568b2a6518eaf578c05e30b210ebbb67115953248a9ddd6ff59",
    "capturedAt": "2026-09-22T03:50:06.062Z",
    "elapsedMs": 573.8640869999945,
    "successfulAttemptElapsedMs": 573.0146220000024,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.04,
            "subject:2": 0.01,
            "body:1": 0.28,
            "body:0": 0.08,
            "NONE": 0.38,
            "subject:1": 0.1,
            "body:2": 0.01,
            "body:3": 0.1
          },
          "confidence": 0.29
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.01,
            "subject:2": 0,
            "body:1": 0.03,
            "body:0": 0.8200000000000001,
            "NONE": 0.1,
            "subject:1": 0,
            "body:2": 0.01,
            "body:3": 0.02
          },
          "confidence": 0.78
        }
      },
      "usage": {
        "input_tokens": 1656,
        "output_tokens": 185
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1206.201138999997,
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
    "seq": 459,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-095",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:04.856Z",
    "offsetMs": 0.6476180000026943
  },
  {
    "seq": 460,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-095",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:05.486Z",
    "offsetMs": 630.4776790000033,
    "elapsedMs": 629.2906380000059,
    "outcome": "success"
  },
  {
    "seq": 461,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-095",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:05.488Z",
    "offsetMs": 632.600775999992
  },
  {
    "seq": 462,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-095",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:06.062Z",
    "offsetMs": 1205.9787059999944,
    "elapsedMs": 573.0146220000024,
    "outcome": "success"
  },
  {
    "seq": 463,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-095",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:06.062Z",
    "offsetMs": 1206.255575999996,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a0729c221701fd312234a5b0ac7e2627e89af5ca85749ff60b7b57c75e925baf";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":460},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":462},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":463}} as const;
export const projectionSha256 = "1cca88a0f4c3b6b086422a30f2c86645fa49b776e2650766a0a86678328301ba";
