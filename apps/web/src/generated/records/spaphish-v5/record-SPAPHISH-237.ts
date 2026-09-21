import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-237",
  "inputSha256": "34d953bcb1e7b6fefa1c3cfa45a3920c96b9df93f0881cbb628feb1a329ec6ee",
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
      "end": 59,
      "text": "🔸  𝐓𝐢𝐞𝐧𝐞𝐬 (𝟏) 𝐦𝐞𝐧𝐬𝐚𝐣𝐞 𝐝𝐞 𝐧𝐨𝐬𝐨𝐭𝐫𝐨𝐬."
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 77,
      "text": "FedEx ® ☰ Fecha de envío: 03-22-2025 ¡Fallo en la entrega para Daniel Muñoz! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 77,
      "end": 140,
      "text": "Entrega del paquete suspendida ¿Cómo desea recibir su paquete? "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 140,
      "end": 229,
      "text": "Quiero que me lo entreguen Lo recogeré yo mismo ¿Dónde desea que se entregue el paquete? "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 229,
      "end": 598,
      "text": "En casa En el trabajo Información del paquete: Estado Detenido en el centro de distribución Envío a través de Correo internacional con seguimiento Fecha: 03-22-2025 -------------------------------------------------------------------------------- Ingrese la información de entrega Si ya no desea recibir estos correos electrónicos, puede darse de baja haciendo clic aquí"
    }
  ],
  "passA": {
    "requestSha256": "6c67975d6aef18835bae7401f2b70a191778f4b101c9e526d8998f3cb0e93042",
    "capturedAt": "2026-09-20T23:45:09.628Z",
    "elapsedMs": 268.6554999999935,
    "successfulAttemptElapsedMs": 266.64616699999897,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.21
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.89
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.19
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
            "no_sensitive_action": 0.7,
            "independently_established": 0,
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.29
          },
          "confidence": 0.6
        }
      },
      "usage": {
        "input_tokens": 3619,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "2d89755d2c18cced92be376c06a13ea2ce5ff19390827361367f5010686080d4",
    "capturedAt": "2026-09-20T23:45:09.822Z",
    "elapsedMs": 192.85391700000037,
    "successfulAttemptElapsedMs": 191.36704199999804,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.03,
            "subject:0": 0,
            "body:1": 0.44,
            "body:2": 0.01,
            "body:3": 0.06,
            "NONE": 0.46
          },
          "confidence": 0.34
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.84,
            "subject:0": 0.03,
            "body:1": 0.01,
            "NONE": 0.09,
            "body:3": 0.01,
            "body:2": 0.02
          },
          "confidence": 0.81
        }
      },
      "usage": {
        "input_tokens": 1476,
        "output_tokens": 149
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 463.86687499999243,
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
    "seq": 1158,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-237",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:09.360Z",
    "offsetMs": 1.290207999991253
  },
  {
    "seq": 1159,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-237",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:09.627Z",
    "offsetMs": 268.6575829999929,
    "elapsedMs": 266.64616699999897,
    "outcome": "success"
  },
  {
    "seq": 1160,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-237",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:09.630Z",
    "offsetMs": 271.585957999996
  },
  {
    "seq": 1161,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-237",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:09.822Z",
    "offsetMs": 463.49708299999475,
    "elapsedMs": 191.36704199999804,
    "outcome": "success"
  },
  {
    "seq": 1162,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-237",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:09.823Z",
    "offsetMs": 463.9596249999886,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0688404387cfba2d717ae882ab1e59aef1409e838ae866a2f88362eef4491a67";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1159},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1161},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1162}} as const;
export const projectionSha256 = "2c6f4c61850ce25e593df0cbd0f42c0e3ba236fb10ec333b1dd97836b16cd268";
