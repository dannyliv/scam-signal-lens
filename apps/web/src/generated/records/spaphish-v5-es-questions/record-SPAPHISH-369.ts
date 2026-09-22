import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-369",
  "inputSha256": "d624306f97fadf5d82bfdbde437dfe1ec375e2e669b139bd84d4fde54fc3d823",
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
      "end": 69,
      "text": "Ezequiela Miguelina - Tienes (1) paquete esperando ser entregado 📦. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 69,
      "end": 118,
      "text": "Usa tu código para rastrearlo y recibirlo ___🚚. "
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 118,
      "end": 125,
      "text": "ID#3594"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 4,
      "text": "GLS."
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 4,
      "end": 27,
      "text": "== 1 Paquete en Espera\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 27,
      "end": 78,
      "text": "María Fernanda López, tenemos una entrega para ti.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 78,
      "end": 114,
      "text": "[ ■ Confirmar Detalles de Entrega ]\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 114,
      "end": 147,
      "text": "Tu Número de Seguimiento 9827541\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 147,
      "end": 188,
      "text": "Entrega estimada: Esperando confirmación\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 188,
      "end": 273,
      "text": "Programa tu entrega y suscríbete a notificaciones push para evitar retrasos futuros.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 273,
      "end": 355,
      "text": "Si no deseas recibir estos correos electrónicos, haz clic aquí para darte de baja."
    }
  ],
  "passA": {
    "requestSha256": "57e9b2623cb4297d04114dd969f87e04dc94b5abd2eadc503abc3c7cabadf966",
    "capturedAt": "2026-09-22T03:55:34.149Z",
    "elapsedMs": 627.8753790000337,
    "successfulAttemptElapsedMs": 626.2899389999802,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.25
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.86
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.11
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
          "noul": 0.12
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "active_request": 0.99,
            "informational": 0.01,
            "educational_or_quoted": 0
          },
          "confidence": 0.98
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.36,
            "independently_established": 0,
            "mixed_or_unknown": 0.02,
            "no_sensitive_action": 0.62
          },
          "confidence": 0.49
        }
      },
      "usage": {
        "input_tokens": 5021,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "179be42fe22ea3021eab188dfdd173a00b81bf77ce41a4986f82ee6bb4a80395",
    "capturedAt": "2026-09-22T03:55:34.745Z",
    "elapsedMs": 594.7604310000315,
    "successfulAttemptElapsedMs": 592.91744499997,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:4": 0,
            "subject:1": 0.03,
            "body:0": 0,
            "subject:2": 0,
            "body:2": 0,
            "subject:0": 0,
            "body:3": 0.02,
            "NONE": 0.5,
            "body:6": 0.43,
            "body:1": 0,
            "body:7": 0.01,
            "body:5": 0.01
          },
          "confidence": 0.45
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:1": 0,
            "body:4": 0,
            "body:2": 0.12,
            "subject:2": 0,
            "body:0": 0.6900000000000001,
            "subject:0": 0,
            "body:3": 0.08,
            "NONE": 0.07,
            "body:6": 0.03,
            "body:1": 0,
            "body:7": 0,
            "body:5": 0
          },
          "confidence": 0.66
        }
      },
      "usage": {
        "input_tokens": 1690,
        "output_tokens": 257
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1224.464942999999,
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
        "status": "low_confidence",
        "segmentId": null
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
    "seq": 1806,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-369",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:33.522Z",
    "offsetMs": 1.1954630000400357
  },
  {
    "seq": 1807,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-369",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:34.149Z",
    "offsetMs": 627.8762860000134,
    "elapsedMs": 626.2899389999802,
    "outcome": "success"
  },
  {
    "seq": 1808,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-369",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:34.152Z",
    "offsetMs": 630.5178930000402
  },
  {
    "seq": 1809,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-369",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:34.745Z",
    "offsetMs": 1224.196756999998,
    "elapsedMs": 592.91744499997,
    "outcome": "success"
  },
  {
    "seq": 1810,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-369",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:34.746Z",
    "offsetMs": 1224.5324320000364,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a3e77e20c655fbf30d9c1752387be8e8c6343add757abdf3f1d60ab9424fee5f";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1807},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1809},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1810}} as const;
export const projectionSha256 = "60df720be6a1a74832d1033f3a31534513d30da8ad3c4c2c429afcd4981e65ef";
