import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-075",
  "inputSha256": "620a61953e4ea19b7a52d7cf4c61ac04fc724922b2a397e84060e52e4adb34a8",
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
      "end": 57,
      "text": "Pablito - Tienes (1) paquete esperando ser entregado 📦. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 57,
      "end": 106,
      "text": "Usa tu código para rastrearlo y recibirlo ___🚚. "
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 106,
      "end": 113,
      "text": "ID#6365"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 32,
      "text": "Tienes (1) mensaje de nosotros. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 32,
      "end": 79,
      "text": "Por favor, haz clic en confirmar para abrirlo. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 79,
      "end": 226,
      "text": "Su código de seguimiento: 998877665 Continuar ➢ ¡Programe su entrega y suscríbase a nuestras notificaciones para evitar que esto vuelva a suceder! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 226,
      "end": 296,
      "text": "Programar entrega ahora Gracias por su pronta atención a este asunto. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 296,
      "end": 323,
      "text": "Esperamos su confirmación. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 323,
      "end": 423,
      "text": "Atentamente, estafeta Sobre Nosotros | Contacto | Administrar Preferencias © 2025 estafeta Limited. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 423,
      "end": 453,
      "text": "Todos los derechos reservados."
    }
  ],
  "passA": {
    "requestSha256": "2411ce060050d35cd70e8edad22fe9390fb917b3b308c0c18ca30f8062833678",
    "capturedAt": "2026-09-20T23:44:15.582Z",
    "elapsedMs": 160.07300000000032,
    "successfulAttemptElapsedMs": 158.80520799999795,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.18
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.07
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.63
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.88
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.33
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
          "noul": 0.05
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
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "mixed_or_unknown": 0.02,
            "no_sensitive_action": 0.27,
            "sender_supplied": 0.71
          },
          "confidence": 0.62
        }
      },
      "usage": {
        "input_tokens": 3594,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "68d0d544169f590dc96c0db3087667ab6c08c2f7c9d9c2dd1de034994509e400",
    "capturedAt": "2026-09-21T00:57:17.641Z",
    "elapsedMs": 119.87945799999989,
    "successfulAttemptElapsedMs": 117.63020800000004,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:3": 0.49,
            "subject:0": 0.01,
            "subject:2": 0,
            "body:1": 0.01,
            "body:2": 0.45,
            "body:6": 0,
            "body:0": 0,
            "NONE": 0.03,
            "body:4": 0.01,
            "body:5": 0,
            "subject:1": 0
          },
          "confidence": 0.45
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:2": 0.01,
            "subject:0": 0.04,
            "subject:2": 0,
            "body:1": 0.03,
            "body:3": 0.01,
            "body:6": 0,
            "body:0": 0.11,
            "NONE": 0.08,
            "body:4": 0.01,
            "body:5": 0.71,
            "subject:1": 0
          },
          "confidence": 0.67
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:3": 0,
            "subject:0": 0,
            "subject:2": 0,
            "body:1": 0.11,
            "body:2": 0.02,
            "body:6": 0,
            "body:0": 0,
            "NONE": 0.87,
            "body:4": 0,
            "body:5": 0,
            "subject:1": 0
          },
          "confidence": 0.84
        }
      },
      "usage": {
        "input_tokens": 2087,
        "output_tokens": 360
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 536.1841660000009,
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
        "segmentId": "body:5"
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
    "seq": 365,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-075",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:15.423Z",
    "offsetMs": 0.7649999999994179
  },
  {
    "seq": 366,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-075",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:15.582Z",
    "offsetMs": 160.07316600000195,
    "elapsedMs": 158.80520799999795,
    "outcome": "success"
  },
  {
    "seq": 367,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-075",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:15.585Z",
    "offsetMs": 163.38716600000043
  },
  {
    "seq": 368,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-075",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:15.836Z",
    "offsetMs": 414.49524999999994,
    "elapsedMs": 250.39962500000183,
    "outcome": "success"
  },
  {
    "seq": 369,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-075",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:15.836Z",
    "offsetMs": 414.6657500000001,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2522,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-075",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:17.522Z",
    "offsetMs": 2.739958000000115
  },
  {
    "seq": 2523,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-075",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:17.640Z",
    "offsetMs": 120.93825000000015,
    "elapsedMs": 117.63020800000004,
    "outcome": "success"
  },
  {
    "seq": 2524,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-075",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:17.641Z",
    "offsetMs": 121.47800000000007,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0cf7a03650a03c58be9177eb07556bf4e92e51911a50bc020aacf7c1232776b8";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":366},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2523},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2524}} as const;
export const projectionSha256 = "9e444170fd1862eb518cf74130ca254e215cdf5c485205a6201b86e4d799a817";
