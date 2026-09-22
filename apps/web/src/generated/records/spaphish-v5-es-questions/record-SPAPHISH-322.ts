import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-322",
  "inputSha256": "bd27270f91615271c6fedae97013b8111c8bc5745d2db228edde019e0e72dd14",
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
      "end": 56,
      "text": "Urgente: Missxtranger ¡Tu cuenta de Netflix vencerá hoy!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 30,
      "text": "⚠️¡Su cuenta será suspendida! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 30,
      "end": 216,
      "text": "Por favor actualice sus detalles de pago N E T F L I X No pudimos validar su cuenta Estimada Marisol Ortega, Estamos teniendo algunos problemas con su información de facturación actual. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 216,
      "end": 314,
      "text": "Lo intentaremos de nuevo, pero mientras tanto es posible que desees actualizar tus datos de pago. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 314,
      "end": 635,
      "text": "ACTUALIZAR CUENTA AHORA Información sobre su cuenta: ID de suscripción : 583104972 Producto: Netflix Fecha de caducidad: 06 May 2024 -El equipo de Netflix ⚠️:En caso de desconocimiento, sus servicios quedarán completamente suspendidos dentro de las 24 horas siguientes según los términos definidos en nuestros contratos. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 635,
      "end": 671,
      "text": "Darse de baja Derechos de autor 2024"
    }
  ],
  "passA": {
    "requestSha256": "83437e0d16fcb67125dc18835d9de611074e097eff492d853620c60b5fad59a4",
    "capturedAt": "2026-09-22T03:54:36.618Z",
    "elapsedMs": 594.4180179999676,
    "successfulAttemptElapsedMs": 593.2708270000294,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.08
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.92
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.46
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.97
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.96
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.48
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.14
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
          "noul": 0.03
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
            "sender_supplied": 0.89,
            "mixed_or_unknown": 0.06,
            "no_sensitive_action": 0.05,
            "independently_established": 0
          },
          "confidence": 0.85
        }
      },
      "usage": {
        "input_tokens": 5071,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "fa43b2073a1b3b6e0f5c8a03ab7fcda6b99f1d060a4d018f376a3ff10c1ef3cb",
    "capturedAt": "2026-09-22T03:54:37.239Z",
    "elapsedMs": 619.6044840000104,
    "successfulAttemptElapsedMs": 618.3662459999905,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:3": 0.23,
            "body:1": 0.68,
            "body:0": 0,
            "body:4": 0,
            "subject:0": 0,
            "body:2": 0.08,
            "NONE": 0
          },
          "confidence": 0.63
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:3": 0.17,
            "body:1": 0.49,
            "body:0": 0,
            "body:4": 0,
            "subject:0": 0,
            "body:2": 0.06,
            "NONE": 0.28
          },
          "confidence": 0.4
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:3": 0.93,
            "body:1": 0,
            "body:0": 0.03,
            "subject:0": 0.04,
            "body:2": 0,
            "body:4": 0,
            "NONE": 0
          },
          "confidence": 0.91
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:3": 0.83,
            "body:1": 0.14,
            "body:0": 0,
            "body:4": 0,
            "subject:0": 0.01,
            "body:2": 0.01,
            "NONE": 0.01
          },
          "confidence": 0.8
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:3": 0.19,
            "body:1": 0.05,
            "body:0": 0,
            "subject:0": 0,
            "body:2": 0.03,
            "body:4": 0,
            "NONE": 0.73
          },
          "confidence": 0.67
        }
      },
      "usage": {
        "input_tokens": 3596,
        "output_tokens": 415
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1216.0432700000238,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:3"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:3"
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
      "avoid_sender_route",
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1572,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-322",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:36.024Z",
    "offsetMs": 0.9028939999989234
  },
  {
    "seq": 1573,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-322",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:36.618Z",
    "offsetMs": 594.4181519999984,
    "elapsedMs": 593.2708270000294,
    "outcome": "success"
  },
  {
    "seq": 1574,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-322",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:36.620Z",
    "offsetMs": 596.8708190000034
  },
  {
    "seq": 1575,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-322",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:37.239Z",
    "offsetMs": 1215.5818650000147,
    "elapsedMs": 618.3662459999905,
    "outcome": "success"
  },
  {
    "seq": 1576,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-322",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:37.239Z",
    "offsetMs": 1216.1160400000517,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "100a63f536425f75e3fa6a1307b2e4e17e859f2befa315ae1533ed2af91cb6ad";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1573},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1575},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1576}} as const;
export const projectionSha256 = "73f1266e80a7ea437a53e57653146014b35c880cfa1231744798573f44cd55dd";
