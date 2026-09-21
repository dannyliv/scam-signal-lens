import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-276",
  "inputSha256": "571334792c57ab959f87a432af0d5cf3e2ea83bce168677cb25226fd556edde6",
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
      "text": "📦 🚚 ..879"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 69,
      "text": "FedEx ® ☰ Fecha de envío: 18-05-2025 ¡Fallo en la entrega para Juan! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 69,
      "end": 132,
      "text": "Entrega del paquete suspendida ¿Cómo desea recibir su paquete? "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 132,
      "end": 221,
      "text": "Quiero que me lo entreguen Lo recogeré yo mismo ¿Dónde desea que se entregue el paquete? "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 221,
      "end": 590,
      "text": "En casa En el trabajo Información del paquete: Estado Detenido en el centro de distribución Envío a través de Correo internacional con seguimiento Fecha: 18-05-2025 -------------------------------------------------------------------------------- Ingrese la información de entrega Si ya no desea recibir estos correos electrónicos, puede darse de baja haciendo clic aquí"
    }
  ],
  "passA": {
    "requestSha256": "52f82d0260a55703ab28bb1ddaa02a7ca81f1e280259da096b939aeb38004088",
    "capturedAt": "2026-09-20T23:45:24.597Z",
    "elapsedMs": 225.1417919999949,
    "successfulAttemptElapsedMs": 223.05825000000186,
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
          "noul": 0.29
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.89
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.22
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
            "informational": 0,
            "educational_or_quoted": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.72,
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.27
          },
          "confidence": 0.62
        }
      },
      "usage": {
        "input_tokens": 3582,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "c5d3a882addb853bc9e97920a0866a5c14795593b15a9fc3d64f0132b55c54a4",
    "capturedAt": "2026-09-20T23:45:24.766Z",
    "elapsedMs": 165.85616599999776,
    "successfulAttemptElapsedMs": 163.80795799999032,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "subject:2": 0,
            "subject:0": 0.01,
            "body:3": 0.03,
            "subject:1": 0.43,
            "body:2": 0,
            "body:0": 0.05,
            "body:1": 0.23,
            "NONE": 0.25
          },
          "confidence": 0.35
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:2": 0,
            "subject:0": 0.03,
            "body:3": 0.01,
            "subject:1": 0.01,
            "body:2": 0.01,
            "body:0": 0.9,
            "body:1": 0.01,
            "NONE": 0.03
          },
          "confidence": 0.89
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:2": 0,
            "subject:0": 0,
            "body:3": 0.02,
            "subject:1": 0.01,
            "body:2": 0.01,
            "body:0": 0,
            "body:1": 0,
            "NONE": 0.96
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 1907,
        "output_tokens": 279
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 394.4180420000048,
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
    "seq": 1352,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-276",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:24.373Z",
    "offsetMs": 1.470167000006768
  },
  {
    "seq": 1353,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-276",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:24.597Z",
    "offsetMs": 225.1418340000091,
    "elapsedMs": 223.05825000000186,
    "outcome": "success"
  },
  {
    "seq": 1354,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-276",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:24.601Z",
    "offsetMs": 229.44441700000607
  },
  {
    "seq": 1355,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-276",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:24.766Z",
    "offsetMs": 393.98445899999933,
    "elapsedMs": 163.80795799999032,
    "outcome": "success"
  },
  {
    "seq": 1356,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-276",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:24.766Z",
    "offsetMs": 394.52241700000013,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "29daf3f4a1fb699d372e6759ac0761c30a610f794d428571023b7e7048abd9ae";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1353},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1355},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1356}} as const;
export const projectionSha256 = "57b31a33ebc14c2001add8009657389330e9142afd1d6af20a5ea2fc2961da76";
