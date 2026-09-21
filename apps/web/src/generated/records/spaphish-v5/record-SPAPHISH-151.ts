import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-151",
  "inputSha256": "2a2a7a767f86a16b45ab483f8b19944173aa2f96c9857fdf0f9e11ce79f59410",
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
      "text": "📦 🚚 ..951"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 78,
      "text": "FedEx ® ☰ Fecha de envío: 04-22-2025 ¡Fallo en la entrega para Ricardo López! "
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
      "text": "En casa En el trabajo Información del paquete: Estado Detenido en el centro de distribución Envío a través de Correo internacional con seguimiento Fecha: 04-22-2025 -------------------------------------------------------------------------------- Ingrese la información de entrega Si ya no desea recibir estos correos electrónicos, puede darse de baja haciendo clic aquí"
    }
  ],
  "passA": {
    "requestSha256": "32a302892cad4816fa8ead1e58da3a175a42962a5583bd4857fdd8f4e38552e2",
    "capturedAt": "2026-09-20T23:44:38.860Z",
    "elapsedMs": 149.1206669999956,
    "successfulAttemptElapsedMs": 147.4912089999998,
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
          "noul": 0.28
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
          "noul": 0.03
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
            "sender_supplied": 0.31,
            "independently_established": 0,
            "no_sensitive_action": 0.68,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.57
        }
      },
      "usage": {
        "input_tokens": 3583,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "3d749bad8effc1f4be3f5d1c66254d3d145b77e308ac84260b35524efd84197a",
    "capturedAt": "2026-09-20T23:44:39.093Z",
    "elapsedMs": 230.99637500000244,
    "successfulAttemptElapsedMs": 228.97533300000214,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "subject:2": 0,
            "subject:1": 0.52,
            "body:2": 0,
            "NONE": 0.23,
            "body:3": 0.04,
            "body:1": 0.17,
            "subject:0": 0.01,
            "body:0": 0.03
          },
          "confidence": 0.44
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:2": 0,
            "subject:1": 0.01,
            "body:2": 0.01,
            "body:3": 0.02,
            "NONE": 0.04,
            "body:1": 0.01,
            "subject:0": 0.04,
            "body:0": 0.87
          },
          "confidence": 0.86
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:2": 0,
            "subject:1": 0.01,
            "body:2": 0.01,
            "NONE": 0.95,
            "body:3": 0.03,
            "body:1": 0,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 1911,
        "output_tokens": 279
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 383.07574999999633,
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
    "seq": 739,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-151",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:38.711Z",
    "offsetMs": 1.131333999997878
  },
  {
    "seq": 740,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-151",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:38.859Z",
    "offsetMs": 149.12245899999834,
    "elapsedMs": 147.4912089999998,
    "outcome": "success"
  },
  {
    "seq": 741,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-151",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:38.863Z",
    "offsetMs": 152.90641699999833
  },
  {
    "seq": 742,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-151",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:39.093Z",
    "offsetMs": 382.7392919999984,
    "elapsedMs": 228.97533300000214,
    "outcome": "success"
  },
  {
    "seq": 743,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-151",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:39.093Z",
    "offsetMs": 383.1499999999942,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0f63a39e56de353587832c3b2d9e4bf5f2ff17a84df82bd801eced0a9c1edfaa";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":740},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":742},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":743}} as const;
export const projectionSha256 = "6810928d7e488c4c38c87ff10b86af58034a85a9cc01f254172c2d3615cf191c";
