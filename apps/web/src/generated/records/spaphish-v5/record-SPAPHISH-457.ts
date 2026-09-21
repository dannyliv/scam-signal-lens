import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-457",
  "inputSha256": "8bd93688b8f8249b2c205c1a9b0fd08ddb3e85d4eb9f9acabb695ecc5c38037d",
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
      "text": "ID#6087"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 57,
      "text": "estafeta® Querido Carlos Tienes (1) mensaje de nosotros. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 57,
      "end": 104,
      "text": "Por favor, haz clic en confirmar para abrirlo. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 104,
      "end": 251,
      "text": "Su código de seguimiento: 998877665 Continuar ➢ ¡Programe su entrega y suscríbase a nuestras notificaciones para evitar que esto vuelva a suceder! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 251,
      "end": 321,
      "text": "Programar entrega ahora Gracias por su pronta atención a este asunto. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 321,
      "end": 348,
      "text": "Esperamos su confirmación. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 348,
      "end": 448,
      "text": "Atentamente, estafeta Sobre Nosotros | Contacto | Administrar Preferencias © 2025 estafeta Limited. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 448,
      "end": 478,
      "text": "Todos los derechos reservados."
    }
  ],
  "passA": {
    "requestSha256": "fe6c390517bd27ad79d4809376e3ded54075aef0adfab38c60d9ecb076bf5911",
    "capturedAt": "2026-09-20T23:46:25.230Z",
    "elapsedMs": 140.72758299999987,
    "successfulAttemptElapsedMs": 138.41675000000396,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.19
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
          "noul": 0.61
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.9
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.33
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
            "mixed_or_unclear": 0,
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.26,
            "sender_supplied": 0.72,
            "mixed_or_unknown": 0.02
          },
          "confidence": 0.62
        }
      },
      "usage": {
        "input_tokens": 3601,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "3d44cad847ade6c4c8d26c10b5fe93c63ad4ace48cf00bf9019ee51e88f59e21",
    "capturedAt": "2026-09-21T00:57:33.753Z",
    "elapsedMs": 119.87266699999964,
    "successfulAttemptElapsedMs": 117.85470800000257,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:1": 0.01,
            "subject:2": 0,
            "body:0": 0,
            "subject:1": 0,
            "subject:0": 0,
            "body:5": 0,
            "body:2": 0.51,
            "body:6": 0,
            "body:3": 0.44,
            "NONE": 0.03,
            "body:4": 0.01
          },
          "confidence": 0.45
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.03,
            "subject:2": 0,
            "body:0": 0.71,
            "body:5": 0.2,
            "subject:0": 0.01,
            "subject:1": 0,
            "body:2": 0.01,
            "body:6": 0,
            "body:3": 0.01,
            "NONE": 0.03,
            "body:4": 0
          },
          "confidence": 0.68
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.09,
            "subject:2": 0,
            "body:0": 0,
            "subject:1": 0,
            "subject:0": 0,
            "body:5": 0,
            "body:6": 0,
            "body:2": 0.02,
            "body:3": 0,
            "NONE": 0.89,
            "body:4": 0
          },
          "confidence": 0.87
        }
      },
      "usage": {
        "input_tokens": 2115,
        "output_tokens": 360
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 389.54920799997853,
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
    "seq": 2245,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-457",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:25.091Z",
    "offsetMs": 1.838208000001032
  },
  {
    "seq": 2246,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-457",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:25.230Z",
    "offsetMs": 140.72804099999485,
    "elapsedMs": 138.41675000000396,
    "outcome": "success"
  },
  {
    "seq": 2247,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-457",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:25.234Z",
    "offsetMs": 144.51149999999325
  },
  {
    "seq": 2248,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-457",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:25.357Z",
    "offsetMs": 268.22904099998414,
    "elapsedMs": 123.08604200000991,
    "outcome": "success"
  },
  {
    "seq": 2249,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-457",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:25.358Z",
    "offsetMs": 268.3349159999925,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2806,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-457",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:33.635Z",
    "offsetMs": 2.6459590000013122
  },
  {
    "seq": 2807,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-457",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:33.753Z",
    "offsetMs": 120.93437500000073,
    "elapsedMs": 117.85470800000257,
    "outcome": "success"
  },
  {
    "seq": 2808,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-457",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:33.753Z",
    "offsetMs": 121.20966699999917,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "11a2571adba325b7b8f409466eed2f4a4a0751e0c9802c5544f82acfa2788400";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2246},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2807},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2808}} as const;
export const projectionSha256 = "ec81c6a6703c05af9ce9e37ca84c69f39cb9771bff33121d0b12b552c3d6eec2";
