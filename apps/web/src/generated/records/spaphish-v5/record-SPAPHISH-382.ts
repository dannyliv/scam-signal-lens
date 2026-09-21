import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-382",
  "inputSha256": "19305f06366de37f691a141120bd0de62a1abefb50d0598d91d1ce571b6d24bc",
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
      "end": 74,
      "text": "Ábrelo haciendo clic a continuación."
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 74,
      "end": 85,
      "text": "📦 🚚 ..398"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 78,
      "text": "FedEx ® ☰ Fecha de envío: 02-27-2025 ¡Fallo en la entrega para Rafael Madero! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 78,
      "end": 141,
      "text": "Entrega del paquete suspendida ¿Cómo desea recibir su paquete? "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 141,
      "end": 230,
      "text": "Quiero que me lo entreguen Lo recogeré yo mismo ¿Dónde desea que se entregue el paquete? "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 230,
      "end": 599,
      "text": "En casa En el trabajo Información del paquete: Estado Detenido en el centro de distribución Envío a través de Correo internacional con seguimiento Fecha: 02-27-2025 -------------------------------------------------------------------------------- Ingrese la información de entrega Si ya no desea recibir estos correos electrónicos, puede darse de baja haciendo clic aquí"
    }
  ],
  "passA": {
    "requestSha256": "e5ce9c1d2fe34ee8b49c8086362df8d30cbb31cb11fecbfda45b327ecdd38bbe",
    "capturedAt": "2026-09-20T23:46:00.543Z",
    "elapsedMs": 142.0522090000013,
    "successfulAttemptElapsedMs": 139.8442090000026,
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
          "noul": 0.11
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
          "noul": 0.25
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
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "active_request": 1,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.58,
            "independently_established": 0,
            "sender_supplied": 0.41
          },
          "confidence": 0.44
        }
      },
      "usage": {
        "input_tokens": 3588,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "f3e194ae79553b2717421a18c86038cfaffc2a1cccf9ec73cfd9dff3940d0014",
    "capturedAt": "2026-09-20T23:46:00.688Z",
    "elapsedMs": 143.21741699999257,
    "successfulAttemptElapsedMs": 140.66591700000572,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.38,
            "NONE": 0.41,
            "subject:1": 0.06,
            "body:0": 0.06,
            "subject:0": 0.01,
            "subject:2": 0,
            "body:2": 0.01,
            "body:3": 0.07
          },
          "confidence": 0.33
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.01,
            "NONE": 0.03,
            "subject:1": 0,
            "body:0": 0.9,
            "subject:0": 0.04,
            "subject:2": 0,
            "body:2": 0.01,
            "body:3": 0.01
          },
          "confidence": 0.88
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0,
            "NONE": 0.84,
            "subject:1": 0.11,
            "subject:2": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:2": 0.01,
            "body:3": 0.04
          },
          "confidence": 0.82
        }
      },
      "usage": {
        "input_tokens": 1931,
        "output_tokens": 277
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 288.0899999999965,
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
    "seq": 1873,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-382",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:00.402Z",
    "offsetMs": 1.5785840000025928
  },
  {
    "seq": 1874,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-382",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:00.542Z",
    "offsetMs": 142.05187500000466,
    "elapsedMs": 139.8442090000026,
    "outcome": "success"
  },
  {
    "seq": 1875,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-382",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:00.547Z",
    "offsetMs": 146.4064170000056
  },
  {
    "seq": 1876,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-382",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:00.688Z",
    "offsetMs": 287.79587499999616,
    "elapsedMs": 140.66591700000572,
    "outcome": "success"
  },
  {
    "seq": 1877,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-382",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:00.689Z",
    "offsetMs": 288.1483750000043,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "f802755318002d9fecbed6d98e3becd34a9264d9b96018c6420b76c6344a9449";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1874},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1876},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1877}} as const;
export const projectionSha256 = "09ebcce4adee2d15cbd7350cbb1c99ed0150c640c45467454a1c77d164687d95";
