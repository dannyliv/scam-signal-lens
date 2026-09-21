import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-369",
  "inputSha256": "d624306f97fadf5d82bfdbde437dfe1ec375e2e669b139bd84d4fde54fc3d823",
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
    "requestSha256": "3b93673b9d6a38c6a1284a61175b49840baf23704604ac4174d6dbb625216e82",
    "capturedAt": "2026-09-20T23:45:56.461Z",
    "elapsedMs": 184.44687499999418,
    "successfulAttemptElapsedMs": 181.8664579999895,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.13
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.07
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
          "noul": 0.28
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.82
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.15
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
            "informational": 0.01,
            "active_request": 0.99,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.41,
            "independently_established": 0,
            "mixed_or_unknown": 0.02,
            "no_sensitive_action": 0.5700000000000001
          },
          "confidence": 0.42
        }
      },
      "usage": {
        "input_tokens": 3571,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "38c37c137b1603d52164add7bc889cb0e40c6059562dc86a4c70634de68004d4",
    "capturedAt": "2026-09-20T23:45:56.645Z",
    "elapsedMs": 180.65116700000362,
    "successfulAttemptElapsedMs": 178.17383400000108,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "subject:2": 0,
            "subject:0": 0,
            "body:3": 0.01,
            "subject:1": 0.01,
            "body:2": 0,
            "body:7": 0,
            "body:6": 0.77,
            "body:4": 0,
            "body:5": 0,
            "body:0": 0,
            "body:1": 0,
            "NONE": 0.21000000000000002
          },
          "confidence": 0.74
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:2": 0,
            "body:2": 0.17,
            "body:3": 0.02,
            "subject:1": 0,
            "subject:0": 0,
            "body:7": 0,
            "body:6": 0.01,
            "body:5": 0,
            "body:4": 0,
            "body:1": 0,
            "body:0": 0.65,
            "NONE": 0.15
          },
          "confidence": 0.6
        }
      },
      "usage": {
        "input_tokens": 1488,
        "output_tokens": 259
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 368.0493750000023,
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
        "segmentId": "body:6"
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
    "seq": 1808,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-369",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:56.278Z",
    "offsetMs": 1.866667000009329
  },
  {
    "seq": 1809,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-369",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:56.461Z",
    "offsetMs": 184.45500000000175,
    "elapsedMs": 181.8664579999895,
    "outcome": "success"
  },
  {
    "seq": 1810,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-369",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:56.465Z",
    "offsetMs": 188.78858300000138
  },
  {
    "seq": 1811,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-369",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:56.644Z",
    "offsetMs": 367.71433299999626,
    "elapsedMs": 178.17383400000108,
    "outcome": "success"
  },
  {
    "seq": 1812,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-369",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:56.645Z",
    "offsetMs": 368.14045800000895,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6be63d2eebe5e8bf57c330547a4397163bef9b515705353265c402eb891efe9f";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1809},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1811},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1812}} as const;
export const projectionSha256 = "d7f09bc673f50ccc4195744ae452cbb49339f85a2c165467ae43cfb6028b3ad2";
