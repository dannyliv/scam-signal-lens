import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-366",
  "inputSha256": "50b076ae62ba5b419dc6f887d1dd7c9b0e11128b136c280c6a866b173fb1f5ee",
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
      "end": 13,
      "text": "Tu paquete  !"
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 13,
      "end": 21,
      "text": "#MX81f3K"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 214,
      "text": "[Correos de México] Estimado/a Cliente, Nos ponemos en contacto con usted para informarle que su paquete se encuentra retenido en nuestro centro de distribución debido a la falta de pago de los derechos de aduana. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 214,
      "end": 325,
      "text": "Para garantizar la entrega sin inconvenientes, es necesario completar el pago de (95.50 MXN) lo antes posible. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 325,
      "end": 581,
      "text": "Información del paquete: ID de seguimiento: 1234567890 Destino: [Su dirección de entrega] Fecha de retención: 17/11/2025 ⚠️ Si el pago no se realiza en los próximos 3 días hábiles, el paquete será devuelto al remitente o podría generar cargos adicionales. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 581,
      "end": 870,
      "text": "Puede completar el pago de manera rápida y segura haciendo clic en el botón a continuación: Completar Pago y Enviar Paquete https://correos-seguro.com/pago-aduana Una vez que el pago se haya realizado con éxito, su paquete será procesado y enviado dentro de las próximas 48 horas hábiles. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 870,
      "end": 983,
      "text": "Si tiene alguna duda sobre su envío, no dude en ponerse en contacto con nuestro servicio de atención al cliente. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 983,
      "end": 1031,
      "text": "Nota: Este mensaje es generado automáticamente. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 1031,
      "end": 1085,
      "text": "Para más información, consulte nuestro portal oficial."
    }
  ],
  "passA": {
    "requestSha256": "0be5dffc8256dab0f373d963312815aa6135c4046d20a7d585e91e7fbfdc1ba2",
    "capturedAt": "2026-09-22T03:55:30.531Z",
    "elapsedMs": 588.7786070000147,
    "successfulAttemptElapsedMs": 587.1581049999804,
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
          "noul": 0.81
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
          "noul": 0.97
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.33
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.5
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
          "noul": 0.09
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "educational_or_quoted": 0,
            "active_request": 1,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0,
            "sender_supplied": 1,
            "no_sensitive_action": 0,
            "independently_established": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 5154,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "1ba6a7365710e83101bcf1167dd43791596c491222339288b1f3a3591fbb7e51",
    "capturedAt": "2026-09-22T03:55:31.107Z",
    "elapsedMs": 574.1006310000084,
    "successfulAttemptElapsedMs": 572.5599289999809,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "subject:1": 0,
            "subject:0": 0,
            "body:5": 0,
            "body:3": 0.95,
            "body:4": 0,
            "body:6": 0,
            "body:1": 0.01,
            "NONE": 0.04,
            "body:2": 0,
            "body:0": 0
          },
          "confidence": 0.94
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:1": 0,
            "subject:0": 0,
            "body:5": 0,
            "body:3": 0.29,
            "body:4": 0,
            "body:6": 0,
            "body:1": 0.71,
            "NONE": 0,
            "body:2": 0,
            "body:0": 0
          },
          "confidence": 0.67
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "subject:1": 0,
            "subject:0": 0,
            "body:5": 0,
            "body:3": 0,
            "body:4": 0,
            "body:6": 0,
            "body:1": 0.01,
            "body:2": 0.99,
            "NONE": 0,
            "body:0": 0
          },
          "confidence": 0.99
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:1": 0,
            "subject:0": 0,
            "body:5": 0,
            "body:6": 0,
            "body:4": 0.04,
            "body:3": 0,
            "NONE": 0.01,
            "body:2": 0,
            "body:1": 0,
            "body:0": 0.95
          },
          "confidence": 0.94
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:1": 0,
            "subject:0": 0,
            "body:5": 0,
            "body:3": 0.25,
            "body:4": 0.02,
            "body:6": 0.03,
            "NONE": 0.68,
            "body:1": 0.01,
            "body:2": 0,
            "body:0": 0
          },
          "confidence": 0.64
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:1": 0,
            "subject:0": 0,
            "body:5": 0,
            "body:3": 0.17,
            "body:4": 0,
            "body:6": 0,
            "NONE": 0.32,
            "body:2": 0,
            "body:1": 0.51,
            "body:0": 0
          },
          "confidence": 0.45
        }
      },
      "usage": {
        "input_tokens": 5075,
        "output_tokens": 664
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1165.0867319999961,
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
        "segmentId": "body:3"
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
        "segmentId": "body:2"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 1791,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-366",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:29.943Z",
    "offsetMs": 1.1849379999912344
  },
  {
    "seq": 1792,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-366",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:30.530Z",
    "offsetMs": 588.7795069999993,
    "elapsedMs": 587.1581049999804,
    "outcome": "success"
  },
  {
    "seq": 1793,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-366",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:30.533Z",
    "offsetMs": 591.6912149999989
  },
  {
    "seq": 1794,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-366",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:31.106Z",
    "offsetMs": 1164.6949770000065,
    "elapsedMs": 572.5599289999809,
    "outcome": "success"
  },
  {
    "seq": 1795,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-366",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:31.107Z",
    "offsetMs": 1165.1428849999793,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "496966ea6a817eada9a873a34b559eb58d4c7583efbcdbf579dd4c472ad60e59";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1792},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1794},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1795}} as const;
export const projectionSha256 = "fecbc5b16262ad8ee884816f0ce14db271cae6cc760126400008fc44ad21dfed";
