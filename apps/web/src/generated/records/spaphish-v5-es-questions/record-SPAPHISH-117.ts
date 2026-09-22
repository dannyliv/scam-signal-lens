import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-117",
  "inputSha256": "6e763dd3038eb1dc216e5390778ccca27971875c1ec74c323e6d0165ceeb89c2",
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
      "end": 66,
      "text": "Ezequiela Miguelina -  🚚📦 FedEx tiene un paquete con tu nombre. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 66,
      "end": 83,
      "text": "Reclámalo ahora. "
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 83,
      "end": 90,
      "text": "ID#6072"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 30,
      "text": "FedEx ¡Confirmación de Envío! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 30,
      "end": 60,
      "text": "¡Tienes un paquete en camino! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 60,
      "end": 122,
      "text": "Usa el siguiente código para rastrear y confirmar tu entrega. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 122,
      "end": 228,
      "text": "984552719 Rastrear Paquete ✅ Confirmar Recepción Activa notificaciones para que no se te pase tu entrega. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 228,
      "end": 266,
      "text": "Tu satisfacción es nuestra prioridad. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 266,
      "end": 299,
      "text": "Gracias por confiar en nosotros. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 299,
      "end": 331,
      "text": "¿No deseas recibir más correos? "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 331,
      "end": 364,
      "text": "Haz clic aquí para darte de baja."
    }
  ],
  "passA": {
    "requestSha256": "7d71711049e1c876a7be0c34a3b63e37831e838a04b1e3d9d8cdbd28e45f54a6",
    "capturedAt": "2026-09-22T03:50:32.515Z",
    "elapsedMs": 696.7714090000081,
    "successfulAttemptElapsedMs": 696.043852999981,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.12
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
          "noul": 0.61
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.91
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.23
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
          "noul": 0.07
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
            "active_request": 1,
            "informational": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.29,
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.7,
            "independently_established": 0
          },
          "confidence": 0.6
        }
      },
      "usage": {
        "input_tokens": 5004,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "eff79c2392e2c6cefa25b5b4ca0e042a60da7903a89c03832ffc0b2c7053306e",
    "capturedAt": "2026-09-22T03:50:33.045Z",
    "elapsedMs": 528.2031290000014,
    "successfulAttemptElapsedMs": 527.3860669999849,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "body:4": 0,
            "body:3": 0.17,
            "NONE": 0.02,
            "body:5": 0,
            "body:1": 0,
            "subject:2": 0,
            "subject:0": 0,
            "subject:1": 0.8,
            "body:0": 0,
            "body:7": 0,
            "body:2": 0,
            "body:6": 0
          },
          "confidence": 0.78
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:4": 0.02,
            "body:3": 0.05,
            "NONE": 0.1,
            "body:5": 0.01,
            "body:1": 0.01,
            "subject:2": 0,
            "body:7": 0,
            "subject:1": 0.01,
            "body:0": 0.62,
            "subject:0": 0.15,
            "body:2": 0.03,
            "body:6": 0
          },
          "confidence": 0.59
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:4": 0,
            "body:3": 0.07,
            "NONE": 0.7,
            "body:1": 0,
            "body:5": 0,
            "subject:2": 0,
            "body:7": 0,
            "subject:1": 0.02,
            "body:0": 0,
            "subject:0": 0,
            "body:2": 0.2,
            "body:6": 0.01
          },
          "confidence": 0.67
        }
      },
      "usage": {
        "input_tokens": 2280,
        "output_tokens": 387
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1226.8565620000008,
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
        "segmentId": "subject:1"
      },
      "authority_claim": {
        "status": "low_confidence",
        "segmentId": null
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
    "seq": 567,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-117",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:31.818Z",
    "offsetMs": 0.5313930000120308
  },
  {
    "seq": 568,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-117",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:32.514Z",
    "offsetMs": 696.7746259999985,
    "elapsedMs": 696.043852999981,
    "outcome": "success"
  },
  {
    "seq": 569,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-117",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:32.517Z",
    "offsetMs": 698.8374999999942
  },
  {
    "seq": 570,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-117",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:33.044Z",
    "offsetMs": 1226.484976000007,
    "elapsedMs": 527.3860669999849,
    "outcome": "success"
  },
  {
    "seq": 571,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-117",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:33.045Z",
    "offsetMs": 1226.920444999996,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "77c89c079d1d85414f469e3c625a17131010aa668b3143123d09b1d63654a766";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":568},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":570},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":571}} as const;
export const projectionSha256 = "f8a43ca96f5aacc45e35597fed379528770d505ec005da64e219b71ddb50a04e";
