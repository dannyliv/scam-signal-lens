import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-411",
  "inputSha256": "b5832f10a26f867f71136fd0a128a1ecdc7ba529ef91804c4279b045000822a5",
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
      "end": 14,
      "text": "recordatorio !"
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 14,
      "end": 20,
      "text": "#O9o0u"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 199,
      "text": "Aviso de Entrega PendienteAviso Importante: Pago Pendiente Estimado/a Cliente, Su paquete está listo para ser entregado, pero se encuentra retenido debido a un pago pendiente por derechos de aduana. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 199,
      "end": 317,
      "text": "Monto a pagar: 58.40 MXN Para evitar retrasos o cargos adicionales, complete el pago dentro de las próximas 24 horas. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 317,
      "end": 489,
      "text": "Puede realizar el pago de manera segura haciendo clic en el siguiente botón: Pagar Ahora Una vez recibido el pago, su paquete será enviado en un plazo de 24 horas hábiles. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 489,
      "end": 559,
      "text": "Si ya ha realizado el pago, su pedido será procesado automáticamente. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 559,
      "end": 651,
      "text": "Para más información o asistencia, comuníquese con nuestro servicio de atención al cliente. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 651,
      "end": 704,
      "text": "Nota: Este mensaje ha sido generado automáticamente. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 704,
      "end": 757,
      "text": "Para más información, visite nuestro Centro de Ayuda."
    }
  ],
  "passA": {
    "requestSha256": "8e88b500f5cdd877760bc114cb326e1eb733d3b3ee43cb411e2d8c18600ed527",
    "capturedAt": "2026-09-20T23:46:09.973Z",
    "elapsedMs": 328.71516699998756,
    "successfulAttemptElapsedMs": 326.2467079999915,
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
          "noul": 0.63
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.98
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.97
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.81
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.3
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.53
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
          "noul": 0.16
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
            "educational_or_quoted": 0,
            "active_request": 1,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 1,
            "no_sensitive_action": 0,
            "mixed_or_unknown": 0,
            "independently_established": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 3610,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "f5dc020797a9c8a2431a83bb30a89f11e67bccf5c9bcff9a9ea745570a6f48cb",
    "capturedAt": "2026-09-20T23:46:10.274Z",
    "elapsedMs": 298.8082090000098,
    "successfulAttemptElapsedMs": 295.76499999998487,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:1": 0.11,
            "body:0": 0.01,
            "body:5": 0,
            "body:4": 0,
            "body:2": 0.65,
            "body:6": 0,
            "body:3": 0,
            "subject:1": 0,
            "subject:0": 0,
            "NONE": 0.23
          },
          "confidence": 0.61
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.63,
            "body:0": 0,
            "body:5": 0,
            "body:4": 0,
            "subject:1": 0,
            "body:6": 0,
            "body:2": 0.37,
            "body:3": 0,
            "subject:0": 0,
            "NONE": 0
          },
          "confidence": 0.58
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "body:1": 1,
            "body:5": 0,
            "body:4": 0,
            "subject:1": 0,
            "subject:0": 0,
            "body:6": 0,
            "body:2": 0,
            "body:3": 0,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:1": 0.01,
            "body:0": 0.14,
            "body:5": 0.01,
            "body:4": 0.69,
            "subject:1": 0,
            "subject:0": 0,
            "body:6": 0.03,
            "body:2": 0.02,
            "body:3": 0,
            "NONE": 0.1
          },
          "confidence": 0.66
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "body:1": 0.02,
            "body:5": 0,
            "body:4": 0.02,
            "subject:1": 0,
            "body:3": 0,
            "subject:0": 0,
            "body:6": 0,
            "body:2": 0.17,
            "NONE": 0.79
          },
          "confidence": 0.76
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0.04,
            "body:1": 0.54,
            "body:5": 0,
            "body:4": 0,
            "subject:1": 0,
            "body:3": 0,
            "subject:0": 0,
            "body:6": 0,
            "body:2": 0.32,
            "NONE": 0.1
          },
          "confidence": 0.48
        }
      },
      "usage": {
        "input_tokens": 3755,
        "output_tokens": 664
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 630.2950829999754,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "low_confidence",
        "segmentId": null
      },
      "payment_request": {
        "status": "low_confidence",
        "segmentId": null
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:1"
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
        "status": "low_confidence",
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
    "seq": 2016,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-411",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:09.646Z",
    "offsetMs": 1.8888329999754205
  },
  {
    "seq": 2017,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-411",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:09.972Z",
    "offsetMs": 328.71483299997635,
    "elapsedMs": 326.2467079999915,
    "outcome": "success"
  },
  {
    "seq": 2018,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-411",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:09.977Z",
    "offsetMs": 333.1212499999965
  },
  {
    "seq": 2019,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-411",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:10.273Z",
    "offsetMs": 629.7190419999824,
    "elapsedMs": 295.76499999998487,
    "outcome": "success"
  },
  {
    "seq": 2020,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-411",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:10.274Z",
    "offsetMs": 630.3729999999923,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "9eecf517654a61896de95219e56e6b991a5567e8c86b7a232fb099c580601263";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2017},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2019},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2020}} as const;
export const projectionSha256 = "0bf2ee6766c7b5f593e60bc5a13005ed43dc733a66aeead1f4b055a706d1bc00";
