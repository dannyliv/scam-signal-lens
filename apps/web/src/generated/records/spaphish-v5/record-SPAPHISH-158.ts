import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-158",
  "inputSha256": "8b5414e9a3da601eb0ebf85cdc9f0ab121d37233c3fb5f66b08d591258caf0c2",
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
      "text": "📦 🚚 ..245"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 71,
      "text": "FedEx ® ☰ Fecha de envío: 11-25-2025 ¡Fallo en la entrega para Daniel! "
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
      "text": "En casa En el trabajo Información del paquete: Estado Detenido en el centro de distribución Envío a través de Correo internacional con seguimiento Fecha: 11-25-2025 -------------------------------------------------------------------------------- Ingrese la información de entrega Si ya no desea recibir estos correos electrónicos, puede darse de baja haciendo clic aquí"
    }
  ],
  "passA": {
    "requestSha256": "fe789b746f6ee1566dedddc878ced10e0136ad6eebc7dd8d4cc1e66f0f6759b1",
    "capturedAt": "2026-09-20T23:44:41.436Z",
    "elapsedMs": 173.49670800000604,
    "successfulAttemptElapsedMs": 171.71108300000196,
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
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.31
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
            "no_sensitive_action": 0.72,
            "independently_established": 0,
            "sender_supplied": 0.27,
            "mixed_or_unknown": 0.01
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
    "requestSha256": "7284379a393b844143af4fe57b2047b9eb50a3eabc94f68cf1dc2c3688fc2635",
    "capturedAt": "2026-09-20T23:44:41.583Z",
    "elapsedMs": 144.58637499999895,
    "successfulAttemptElapsedMs": 142.99620800000412,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "NONE": 0.23,
            "body:3": 0.04,
            "body:2": 0,
            "subject:1": 0.47,
            "subject:2": 0,
            "body:1": 0.22,
            "body:0": 0.03,
            "subject:0": 0.01
          },
          "confidence": 0.39
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:3": 0.01,
            "NONE": 0.04,
            "body:2": 0.01,
            "subject:1": 0.01,
            "subject:2": 0,
            "body:1": 0.01,
            "body:0": 0.87,
            "subject:0": 0.05
          },
          "confidence": 0.86
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.96,
            "body:3": 0.02,
            "body:2": 0.01,
            "subject:1": 0.01,
            "subject:2": 0,
            "body:1": 0,
            "body:0": 0,
            "subject:0": 0
          },
          "confidence": 0.95
        }
      },
      "usage": {
        "input_tokens": 1907,
        "output_tokens": 279
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 320.8687910000008,
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
    "seq": 773,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-158",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:41.264Z",
    "offsetMs": 1.2668330000014976
  },
  {
    "seq": 774,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-158",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:41.436Z",
    "offsetMs": 173.49995800000033,
    "elapsedMs": 171.71108300000196,
    "outcome": "success"
  },
  {
    "seq": 775,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-158",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:41.440Z",
    "offsetMs": 177.09945800000423
  },
  {
    "seq": 776,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-158",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:41.583Z",
    "offsetMs": 320.6565410000039,
    "elapsedMs": 142.99620800000412,
    "outcome": "success"
  },
  {
    "seq": 777,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-158",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:41.584Z",
    "offsetMs": 320.911583000001,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0e69dcc27b80035e7d0e049331a1386cbaaf773ee999e8d769b7676e3d456982";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":774},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":776},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":777}} as const;
export const projectionSha256 = "987152f8b2a9dc7e8e836e818bc9031be8bb4d63449777e48987161d8da3f9ee";
