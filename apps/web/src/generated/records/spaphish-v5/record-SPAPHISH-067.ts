import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-067",
  "inputSha256": "864cdb78dc00b16d785ac3191caf94eeecf4c1cce1039cddc0f0be523126f2ec",
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
      "text": "ID#9047"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 42,
      "text": "estafeta® Tienes (1) mensaje de nosotros. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 42,
      "end": 89,
      "text": "Por favor, haz clic en confirmar para abrirlo. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 89,
      "end": 236,
      "text": "Su código de seguimiento: 345987601 Continuar ➢ ¡Programe su entrega y suscríbase a nuestras notificaciones para evitar que esto vuelva a suceder! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 236,
      "end": 306,
      "text": "Programar entrega ahora Gracias por su pronta atención a este asunto. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 306,
      "end": 333,
      "text": "Esperamos su confirmación. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 333,
      "end": 433,
      "text": "Atentamente, estafeta Sobre Nosotros | Contacto | Administrar Preferencias © 2025 estafeta Limited. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 433,
      "end": 464,
      "text": "Todos los derechos reservados. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 464,
      "end": 554,
      "text": "Si ya no desea recibir estos correos electrónicos, puede darse de baja haciendo clic aquí."
    }
  ],
  "passA": {
    "requestSha256": "45e04ce2f782f5d96f4e0ef0c5805dd7b56e7d897e1c164eccc673504f2bb622",
    "capturedAt": "2026-09-20T23:44:13.012Z",
    "elapsedMs": 182.2901669999992,
    "successfulAttemptElapsedMs": 180.71012500000143,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.14
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
          "noul": 0.9
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.3
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
          "noul": 0.01
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
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.64,
            "independently_established": 0,
            "no_sensitive_action": 0.35,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.51
        }
      },
      "usage": {
        "input_tokens": 3616,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "a632a756aef40e1ab90245ef9b22433e2e50eb117d88915b7059372b927f49ce",
    "capturedAt": "2026-09-21T00:57:17.508Z",
    "elapsedMs": 124.53479100000004,
    "successfulAttemptElapsedMs": 121.73624999999993,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:7": 0,
            "body:3": 0.34,
            "subject:1": 0,
            "NONE": 0.03,
            "body:4": 0.01,
            "body:6": 0,
            "body:1": 0.01,
            "body:2": 0.61,
            "subject:2": 0,
            "body:5": 0
          },
          "confidence": 0.56
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.01,
            "body:0": 0.71,
            "body:7": 0,
            "body:4": 0,
            "NONE": 0.05,
            "subject:1": 0,
            "body:3": 0.01,
            "subject:2": 0,
            "body:5": 0.18,
            "body:6": 0,
            "body:1": 0.03,
            "body:2": 0.01
          },
          "confidence": 0.68
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "subject:0": 0,
            "body:7": 0,
            "body:4": 0,
            "subject:1": 0,
            "body:3": 0,
            "NONE": 0.93,
            "body:6": 0,
            "body:5": 0,
            "body:1": 0.05,
            "subject:2": 0,
            "body:2": 0.01
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 2217,
        "output_tokens": 387
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 485.99187500000016,
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
    "seq": 326,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-067",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:12.830Z",
    "offsetMs": 0.9082500000004075
  },
  {
    "seq": 327,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-067",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:13.012Z",
    "offsetMs": 182.29087499999878,
    "elapsedMs": 180.71012500000143,
    "outcome": "success"
  },
  {
    "seq": 328,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-067",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:13.016Z",
    "offsetMs": 186.65316600000006
  },
  {
    "seq": 329,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-067",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:13.189Z",
    "offsetMs": 359.70183299999917,
    "elapsedMs": 172.2755419999994,
    "outcome": "success"
  },
  {
    "seq": 330,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-067",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:13.189Z",
    "offsetMs": 359.9361659999995,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2519,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-067",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:17.385Z",
    "offsetMs": 3.082875000000058
  },
  {
    "seq": 2520,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-067",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:17.508Z",
    "offsetMs": 125.56612499999983,
    "elapsedMs": 121.73624999999993,
    "outcome": "success"
  },
  {
    "seq": 2521,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-067",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:17.508Z",
    "offsetMs": 125.94795799999974,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "89346a4b7d748af76da3a606e8be2388540def334098c1c2302a5a0105defec3";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":327},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2520},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2521}} as const;
export const projectionSha256 = "dfe68d71077d84109de53a5a73306e1826e0159d55374f7530dc1527386c5e4c";
