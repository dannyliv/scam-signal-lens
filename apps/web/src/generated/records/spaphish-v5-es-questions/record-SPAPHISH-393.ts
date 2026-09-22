import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-393",
  "inputSha256": "3800e5322b029ca3353ead36f5394a0d02889e00ffd747947cd618a346bf3ea3",
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
      "end": 48,
      "text": "Entrega pendiente – Confirma tu dirección y pago"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 172,
      "text": "Correos de México - Notificación de paquete Correos de México Tienes un mensaje importante sobre tu paquete Hola, Te informamos que tienes un paquete pendiente de entrega. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 172,
      "end": 263,
      "text": "Para proceder con el envío, es necesario pagar los gastos de envío por un monto de 85 MXN. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 263,
      "end": 497,
      "text": "Fecha: 20 de diciembre de 2025 Monto a pagar: 85 MXN Haz clic en el botón de abajo para pagar los gastos y recibir tu paquete en la dirección indicada: Pagar los gastos Si tienes alguna pregunta o inquietud, no dudes en contactarnos. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 497,
      "end": 538,
      "text": "Gracias por confiar en nuestro servicio. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 538,
      "end": 615,
      "text": "Correos de México Desuscríbete si no deseas recibir más correos electrónicos."
    }
  ],
  "passA": {
    "requestSha256": "758577d24181adc1f7b6a21acd435dfbb007abeaad9879ad7d8ca40629bdcdc6",
    "capturedAt": "2026-09-22T03:56:02.392Z",
    "elapsedMs": 689.086605999968,
    "successfulAttemptElapsedMs": 687.8027219999931,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.79
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
          "noul": 0.35
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.96
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.32
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.61
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
          "noul": 0.04
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
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 1,
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 5037,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "d9eb9f54a51999224bade967c77ae0bc10616a408b8868037f4336f9d5414ef0",
    "capturedAt": "2026-09-22T03:56:03.042Z",
    "elapsedMs": 648.2537630000152,
    "successfulAttemptElapsedMs": 646.0755169999902,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "NONE": 0.09,
            "body:1": 0.02,
            "body:0": 0,
            "subject:0": 0.05,
            "body:3": 0,
            "body:4": 0,
            "body:2": 0.84
          },
          "confidence": 0.8
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "NONE": 0,
            "body:1": 0.43,
            "body:0": 0,
            "subject:0": 0.01,
            "body:3": 0,
            "body:4": 0,
            "body:2": 0.56
          },
          "confidence": 0.48
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "NONE": 0.3,
            "body:1": 0.31,
            "body:0": 0.01,
            "subject:0": 0.04,
            "body:3": 0,
            "body:4": 0,
            "body:2": 0.34
          },
          "confidence": 0.23
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0,
            "subject:0": 0,
            "body:0": 0.92,
            "body:2": 0.01,
            "body:3": 0,
            "body:4": 0.07,
            "body:1": 0
          },
          "confidence": 0.89
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.8,
            "body:1": 0.02,
            "body:0": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:4": 0,
            "body:2": 0.17
          },
          "confidence": 0.77
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.15,
            "body:2": 0.26,
            "body:0": 0,
            "subject:0": 0.01,
            "body:3": 0,
            "body:4": 0,
            "body:1": 0.58
          },
          "confidence": 0.51
        }
      },
      "usage": {
        "input_tokens": 3992,
        "output_tokens": 502
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1339.7766300000367,
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
        "status": "low_confidence",
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
    "seq": 1925,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-393",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:01.703Z",
    "offsetMs": 0.9794819999951869
  },
  {
    "seq": 1926,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-393",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:02.391Z",
    "offsetMs": 689.0870460000006,
    "elapsedMs": 687.8027219999931,
    "outcome": "success"
  },
  {
    "seq": 1927,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-393",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:02.395Z",
    "offsetMs": 692.5346410000348
  },
  {
    "seq": 1928,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-393",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:03.042Z",
    "offsetMs": 1339.4535850000102,
    "elapsedMs": 646.0755169999902,
    "outcome": "success"
  },
  {
    "seq": 1929,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-393",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:03.042Z",
    "offsetMs": 1339.832162000006,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "c749541a334ac22c86d17e3e8262d7122ace3a0380cd2818e0affb0879db0328";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1926},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1928},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1929}} as const;
export const projectionSha256 = "9683fec9b6de28b3c5b668a6231d417bfd27e1f74022dd3363041afc8e9a285c";
