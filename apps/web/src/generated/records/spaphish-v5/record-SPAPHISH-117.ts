import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-117",
  "inputSha256": "6e763dd3038eb1dc216e5390778ccca27971875c1ec74c323e6d0165ceeb89c2",
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
    "requestSha256": "84e6fe33b31ce5568def2f4634c4db98472d0e5817839671a452e83cea8dbf16",
    "capturedAt": "2026-09-20T23:44:28.806Z",
    "elapsedMs": 125.19504099999904,
    "successfulAttemptElapsedMs": 123.36066700000083,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.15
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
          "noul": 0.57
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.89
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.23
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
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.6,
            "independently_established": 0,
            "sender_supplied": 0.39
          },
          "confidence": 0.47
        }
      },
      "usage": {
        "input_tokens": 3554,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "82671f5646e7eac25dc4e6cd661384d1b27c31f3a933af0f8c13ccb2d493ff7a",
    "capturedAt": "2026-09-20T23:44:28.904Z",
    "elapsedMs": 95.12962499999412,
    "successfulAttemptElapsedMs": 93.18604200000118,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "subject:0": 0,
            "subject:2": 0,
            "body:7": 0,
            "body:1": 0,
            "body:4": 0,
            "NONE": 0.02,
            "subject:1": 0.79,
            "body:6": 0,
            "body:0": 0,
            "body:5": 0,
            "body:3": 0.19,
            "body:2": 0
          },
          "confidence": 0.76
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.19,
            "body:6": 0,
            "body:4": 0.02,
            "NONE": 0.04,
            "body:7": 0,
            "subject:2": 0,
            "subject:1": 0,
            "body:1": 0.01,
            "body:5": 0.01,
            "body:0": 0.71,
            "body:3": 0.01,
            "body:2": 0.01
          },
          "confidence": 0.68
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:6": 0,
            "body:7": 0,
            "body:1": 0,
            "body:4": 0,
            "NONE": 0.84,
            "subject:1": 0.02,
            "subject:2": 0,
            "body:0": 0,
            "body:5": 0,
            "body:3": 0.04,
            "body:2": 0.09999999999999999
          },
          "confidence": 0.81
        }
      },
      "usage": {
        "input_tokens": 1972,
        "output_tokens": 387
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 223.81379200000083,
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
    "seq": 573,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-117",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:28.682Z",
    "offsetMs": 1.1925830000036513
  },
  {
    "seq": 574,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-117",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:28.806Z",
    "offsetMs": 125.19745800000237,
    "elapsedMs": 123.36066700000083,
    "outcome": "success"
  },
  {
    "seq": 575,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-117",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:28.810Z",
    "offsetMs": 129.35770800000319
  },
  {
    "seq": 576,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-117",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:28.904Z",
    "offsetMs": 223.3709170000002,
    "elapsedMs": 93.18604200000118,
    "outcome": "success"
  },
  {
    "seq": 577,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-117",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:28.905Z",
    "offsetMs": 223.91970800000126,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "32683db55dc7c33c89d2991c53b65e51458272f333e20d34015e4ec4d63226f4";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":574},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":576},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":577}} as const;
export const projectionSha256 = "d626b220f03e6f88967edd6c52905eecf9861e6dfe575b8ce932954014f52aa8";
