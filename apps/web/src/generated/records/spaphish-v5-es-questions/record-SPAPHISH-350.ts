import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-350",
  "inputSha256": "8139c11ac7a5a38cc72cc81d20856660726272a8a685acbe0a8a694e12ae433a",
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
      "end": 8,
      "text": "info   !"
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 8,
      "end": 14,
      "text": "#oEFDa"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 50,
      "text": "Es momento de actualizar tu método de pago ¡Hola! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 50,
      "end": 92,
      "text": "Esperamos que estés teniendo un gran día. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 92,
      "end": 258,
      "text": "Queremos informarte que no fue posible realizar el cobro de tu última suscripción debido a un inconveniente con el método de pago que tienes registrado en tu cuenta. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 258,
      "end": 445,
      "text": "Para evitar la interrupción del servicio y seguir disfrutando de toda tu música sin anuncios ni interrupciones, te pedimos que actualices tu información de pago en las próximas 48 horas. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 445,
      "end": 565,
      "text": "Actualizar método de pago ¡Gracias por seguir formando parte de la familia Spoti­­­­­­­­­­­­­­­­­­fy­­­­­­­­­­­­­­­­­­! "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 565,
      "end": 597,
      "text": "Valoramos mucho tu preferencia. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 597,
      "end": 693,
      "text": "Spoti­­­­­­­­­­­­­­­­­­fy­­­­­­­­­­­­­­­­­­ AB, Riverside Square 48, 119 72, Nordholm, Terranova"
    }
  ],
  "passA": {
    "requestSha256": "db3a155a68bb23ccc9ed4c45880387b3e90d60d686871510df97d9f04fa415f7",
    "capturedAt": "2026-09-22T03:55:11.970Z",
    "elapsedMs": 636.9594079999952,
    "successfulAttemptElapsedMs": 635.2761729999911,
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
          "noul": 0.65
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.46
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
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.12
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
            "sender_supplied": 0.56,
            "independently_established": 0,
            "mixed_or_unknown": 0.18,
            "no_sensitive_action": 0.26
          },
          "confidence": 0.41
        }
      },
      "usage": {
        "input_tokens": 5115,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "33c2b710d54eef8ccd8780aeb167f0e5593eea5b0f1299c2859d0b1f5a2c108a",
    "capturedAt": "2026-09-22T03:55:12.517Z",
    "elapsedMs": 542.5642600000137,
    "successfulAttemptElapsedMs": 540.879850999976,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:6": 0,
            "body:4": 0.03,
            "subject:0": 0,
            "body:2": 0,
            "body:1": 0,
            "body:5": 0,
            "body:0": 0.01,
            "NONE": 0.1,
            "body:3": 0.86,
            "subject:1": 0
          },
          "confidence": 0.85
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:6": 0,
            "body:4": 0.02,
            "subject:0": 0,
            "body:2": 0,
            "body:1": 0,
            "body:5": 0,
            "body:0": 0.01,
            "NONE": 0.32,
            "body:3": 0.65,
            "subject:1": 0
          },
          "confidence": 0.61
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:6": 0,
            "body:4": 0,
            "subject:0": 0,
            "body:2": 0,
            "body:1": 0,
            "NONE": 0,
            "body:0": 0,
            "body:5": 0,
            "body:3": 1,
            "subject:1": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:6": 0.23,
            "body:4": 0.35,
            "subject:0": 0,
            "body:2": 0.18,
            "body:5": 0.01,
            "body:1": 0.01,
            "body:0": 0.03,
            "NONE": 0.05,
            "subject:1": 0,
            "body:3": 0.14
          },
          "confidence": 0.28
        }
      },
      "usage": {
        "input_tokens": 3352,
        "output_tokens": 440
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1184.514120000007,
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
        "status": "selected",
        "segmentId": "body:3"
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
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "not_requested",
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
    "seq": 1712,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-350",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:11.334Z",
    "offsetMs": 1.3472080000210553
  },
  {
    "seq": 1713,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-350",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:11.970Z",
    "offsetMs": 636.9604590000235,
    "elapsedMs": 635.2761729999911,
    "outcome": "success"
  },
  {
    "seq": 1714,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-350",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:11.976Z",
    "offsetMs": 642.8161360000377
  },
  {
    "seq": 1715,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-350",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:12.517Z",
    "offsetMs": 1184.1719630000298,
    "elapsedMs": 540.879850999976,
    "outcome": "success"
  },
  {
    "seq": 1716,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-350",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:12.517Z",
    "offsetMs": 1184.5817840000382,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7e6b381443f9920eed20b1df1c25bbe1085ec8bba5b3b679d2181669f4ec8a13";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1713},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1715},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1716}} as const;
export const projectionSha256 = "0cc81be0f5deeeaaa49841b72d8c6348e90c2fdbe192336cd0fb57310682847b";
