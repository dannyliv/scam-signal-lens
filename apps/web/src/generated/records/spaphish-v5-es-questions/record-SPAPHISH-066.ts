import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-066",
  "inputSha256": "13f69bc3f1e532601283052a6839640c2f59ac0b87d7b3fed9b53c72d9cc2c99",
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
      "end": 28,
      "text": "Pagar derechos de aduana   !"
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 28,
      "end": 34,
      "text": "#qpDYM"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 35,
      "text": "Entrega detenida: acción necesaria\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 35,
      "end": 55,
      "text": "Estimado/a usuario,\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 55,
      "end": 176,
      "text": "Tu paquete se encuentra actualmente retenido ya que no se ha realizado el pago correspondiente a los derechos de aduana.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 176,
      "end": 204,
      "text": "Monto pendiente: $58.40 MXN\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 204,
      "end": 332,
      "text": "Para liberar tu envío y evitar que sea devuelto al remitente, te solicitamos completar el pago dentro de las próximas 48 horas.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 332,
      "end": 353,
      "text": "Realizar Pago Seguro\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 353,
      "end": 447,
      "text": "Este mensaje ha sido generado automáticamente por el sistema de rastreo de Correos de México.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 447,
      "end": 451,
      "text": "Av. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 451,
      "end": 530,
      "text": "Mirador 1520, Parque Industrial del Norte, Naucalpan, Estado de México, México."
    }
  ],
  "passA": {
    "requestSha256": "012f95376c36e31391310c2c6506f7002149c911a6502124e85384ecd88201f5",
    "capturedAt": "2026-09-22T03:49:31.353Z",
    "elapsedMs": 638.8691189999954,
    "successfulAttemptElapsedMs": 638.114321999994,
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
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.22
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.44
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
            "informational": 0,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "sender_supplied": 0.99,
            "no_sensitive_action": 0.01
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 5024,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "22bb1ca6542b21bd0b3a24bb53db64b1290b5e488f1213d2a1bf5cecb35f7f1e",
    "capturedAt": "2026-09-22T03:49:32.025Z",
    "elapsedMs": 670.5647050000116,
    "successfulAttemptElapsedMs": 669.9087379999983,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:7": 0,
            "body:3": 0,
            "body:0": 0,
            "subject:0": 0,
            "body:6": 0,
            "body:4": 0.19,
            "body:5": 0.68,
            "body:8": 0,
            "subject:1": 0,
            "body:1": 0,
            "NONE": 0.13,
            "body:2": 0
          },
          "confidence": 0.64
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:7": 0,
            "body:3": 0,
            "body:0": 0,
            "body:8": 0,
            "subject:0": 0.01,
            "body:4": 0.81,
            "body:5": 0.17,
            "body:6": 0,
            "subject:1": 0,
            "body:1": 0,
            "NONE": 0,
            "body:2": 0
          },
          "confidence": 0.8
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:7": 0,
            "body:3": 0,
            "body:0": 0,
            "body:6": 0,
            "body:8": 0,
            "body:4": 1,
            "body:5": 0,
            "body:1": 0,
            "subject:1": 0,
            "subject:0": 0,
            "NONE": 0,
            "body:2": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:7": 0,
            "body:3": 0,
            "body:0": 0,
            "body:6": 0.91,
            "subject:1": 0,
            "body:4": 0.06999999999999999,
            "body:5": 0,
            "body:1": 0,
            "body:8": 0,
            "subject:0": 0,
            "NONE": 0.01,
            "body:2": 0.01
          },
          "confidence": 0.9
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:7": 0,
            "body:3": 0,
            "body:0": 0,
            "body:8": 0,
            "subject:0": 0,
            "body:1": 0,
            "body:5": 0.06,
            "body:4": 0.02,
            "subject:1": 0,
            "body:6": 0,
            "NONE": 0.92,
            "body:2": 0
          },
          "confidence": 0.9
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:7": 0,
            "body:3": 0.01,
            "body:0": 0,
            "subject:0": 0.02,
            "body:6": 0,
            "body:1": 0,
            "body:5": 0.1,
            "body:4": 0.39,
            "body:8": 0,
            "subject:1": 0,
            "NONE": 0.45,
            "body:2": 0.03
          },
          "confidence": 0.39
        }
      },
      "usage": {
        "input_tokens": 4267,
        "output_tokens": 770
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1311.2445509999961,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "payment_request": {
        "status": "selected",
        "segmentId": "body:4"
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:4"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:6"
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
    "seq": 321,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-066",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:30.715Z",
    "offsetMs": 0.5236839999997756
  },
  {
    "seq": 322,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-066",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:31.353Z",
    "offsetMs": 638.8689579999918,
    "elapsedMs": 638.114321999994,
    "outcome": "success"
  },
  {
    "seq": 323,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-066",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:31.355Z",
    "offsetMs": 640.6163529999903
  },
  {
    "seq": 324,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-066",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:32.025Z",
    "offsetMs": 1310.8298769999965,
    "elapsedMs": 669.9087379999983,
    "outcome": "success"
  },
  {
    "seq": 325,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-066",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:32.025Z",
    "offsetMs": 1311.3104900000035,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "339ab0e35e983ad76d163cf60abd4f9fd087990bd325adc257c7db06b0ef0f1a";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":322},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":324},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":325}} as const;
export const projectionSha256 = "4671bb81a45ac7f60ea0a4bde0c87220b0cdf77d414ffe1a346f4adace6d72cc";
