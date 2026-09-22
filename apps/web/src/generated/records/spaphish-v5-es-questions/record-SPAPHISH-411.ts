import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-411",
  "inputSha256": "b5832f10a26f867f71136fd0a128a1ecdc7ba529ef91804c4279b045000822a5",
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
    "requestSha256": "92f516c96279fe39060f82b0727c5dcabd007817da597c724d285cda45dd4ef3",
    "capturedAt": "2026-09-22T03:56:23.094Z",
    "elapsedMs": 614.9339930000133,
    "successfulAttemptElapsedMs": 613.087498000008,
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
          "noul": 0.75
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.97
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.96
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.85
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.3
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.39
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
          "noul": 0.08
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
            "informational": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.98,
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "no_sensitive_action": 0.01
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 5060,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "4e7883c232d09dd6131200ed93936b57cfe5823cbf8a6700cd452b970f6f0914",
    "capturedAt": "2026-09-22T03:56:23.737Z",
    "elapsedMs": 640.5258029999677,
    "successfulAttemptElapsedMs": 638.7950120000169,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 0.86,
            "NONE": 0.05,
            "body:5": 0,
            "body:6": 0,
            "body:1": 0.09,
            "body:4": 0,
            "subject:1": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:0": 0
          },
          "confidence": 0.83
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0,
            "body:2": 0.27,
            "body:5": 0,
            "body:6": 0,
            "body:4": 0,
            "body:1": 0.73,
            "subject:1": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:0": 0
          },
          "confidence": 0.69
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "NONE": 0,
            "body:5": 0,
            "body:6": 0,
            "body:4": 0,
            "body:1": 1,
            "subject:1": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:0": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:2": 0.02,
            "NONE": 0.09,
            "body:5": 0,
            "body:6": 0.02,
            "body:4": 0.71,
            "body:1": 0.01,
            "subject:1": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:0": 0.15
          },
          "confidence": 0.68
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.63,
            "body:2": 0.3,
            "body:5": 0,
            "body:6": 0.01,
            "body:1": 0.04,
            "body:4": 0.02,
            "subject:1": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:0": 0
          },
          "confidence": 0.57
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0.23,
            "NONE": 0.22,
            "body:5": 0,
            "body:6": 0,
            "body:4": 0,
            "body:1": 0.5,
            "subject:1": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:0": 0.05
          },
          "confidence": 0.44
        }
      },
      "usage": {
        "input_tokens": 4393,
        "output_tokens": 664
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1257.8083650000044,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H5"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:2"
      },
      "payment_request": {
        "status": "selected",
        "segmentId": "body:1"
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
        "status": "selected",
        "segmentId": "body:4"
      },
      "verification_bypass": {
        "status": "low_confidence",
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
      "avoid_sender_route",
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 2014,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-411",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:22.480Z",
    "offsetMs": 1.5053800000459887
  },
  {
    "seq": 2015,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-411",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:23.094Z",
    "offsetMs": 614.936199000047,
    "elapsedMs": 613.087498000008,
    "outcome": "success"
  },
  {
    "seq": 2016,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-411",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:23.097Z",
    "offsetMs": 618.1412610000116
  },
  {
    "seq": 2017,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-411",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:23.736Z",
    "offsetMs": 1257.3489510000218,
    "elapsedMs": 638.7950120000169,
    "outcome": "success"
  },
  {
    "seq": 2018,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-411",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:23.737Z",
    "offsetMs": 1257.8828870000434,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "24d88ad59d4a38324b3b55c1cf3eff6dc5e40fc24d66f25899ee83d41dd49890";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2015},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2017},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2018}} as const;
export const projectionSha256 = "85cc2330498b4eccc530f3e2b1327c20a9a6c351f42ab4eb9247fb645a5abc12";
