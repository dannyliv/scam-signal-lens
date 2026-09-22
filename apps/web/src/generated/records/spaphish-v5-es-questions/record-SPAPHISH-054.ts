import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-054",
  "inputSha256": "62815b2a90c686a1e3e1534c98590a294b583c9ae32546fce061102b5ba03fb7",
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
      "end": 38,
      "text": "Pablito - Tienes (1) mensaje nuestro. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 38,
      "end": 58,
      "text": "Complete su entrega."
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 58,
      "end": 69,
      "text": "📦 🚚 ..639"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 11,
      "text": "Estafeta . "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 11,
      "end": 55,
      "text": "Tienes (1) paquete esperando ser entregado. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 55,
      "end": 88,
      "text": "¡ENTREGA DEL PAQUETE SUSPENDIDO! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 88,
      "end": 171,
      "text": "ESTADO:Detenido en el centro de distribución Se puede aplicar una tarifa de envío. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 171,
      "end": 252,
      "text": "Su código de seguimiento:112233445 Entrega programada ahora Cancelar suscripción."
    }
  ],
  "passA": {
    "requestSha256": "de9232008603c7d76a8087d01774a34b87380b91e599d61b5da7b45dd4cb8f72",
    "capturedAt": "2026-09-22T03:49:16.989Z",
    "elapsedMs": 646.2186199999996,
    "successfulAttemptElapsedMs": 645.3310780000029,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.06
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.09
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.23
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.87
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.91
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.38
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.31
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
          "noul": 0.07
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.1
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.87,
            "informational": 0.06,
            "mixed_or_unclear": 0.07,
            "educational_or_quoted": 0
          },
          "confidence": 0.82
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.22,
            "no_sensitive_action": 0.76,
            "mixed_or_unknown": 0.02
          },
          "confidence": 0.68
        }
      },
      "usage": {
        "input_tokens": 4975,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "63cb00ff6756ad7405d34ec211636d7be75f6a1b95d27002aa38668f35148ca0",
    "capturedAt": "2026-09-22T03:49:17.547Z",
    "elapsedMs": 556.7238080000097,
    "successfulAttemptElapsedMs": 555.7381380000006,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:1": 0.01,
            "body:0": 0,
            "subject:2": 0,
            "body:1": 0,
            "body:3": 0.48,
            "subject:0": 0,
            "body:4": 0.01,
            "body:2": 0.01,
            "NONE": 0.49
          },
          "confidence": 0.43
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:1",
          "probabilities": {
            "subject:1": 0.45,
            "body:0": 0,
            "subject:2": 0,
            "body:1": 0,
            "body:3": 0.16,
            "subject:0": 0,
            "body:2": 0.08,
            "body:4": 0.29,
            "NONE": 0.02
          },
          "confidence": 0.37
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:1": 0.01,
            "body:0": 0.85,
            "NONE": 0.07,
            "body:1": 0.01,
            "body:3": 0.02,
            "subject:0": 0.01,
            "body:4": 0.02,
            "body:2": 0.01,
            "subject:2": 0
          },
          "confidence": 0.85
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:1": 0.05,
            "body:0": 0,
            "subject:2": 0,
            "body:1": 0,
            "body:3": 0.01,
            "subject:0": 0,
            "body:4": 0.13,
            "body:2": 0.01,
            "NONE": 0.8
          },
          "confidence": 0.77
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "subject:1": 0,
            "body:0": 0,
            "NONE": 0.37,
            "body:1": 0,
            "body:3": 0.63,
            "subject:0": 0,
            "body:4": 0,
            "body:2": 0,
            "subject:2": 0
          },
          "confidence": 0.58
        }
      },
      "usage": {
        "input_tokens": 3140,
        "output_tokens": 508
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1204.903828999988,
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
        "status": "not_requested",
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
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 262,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-054",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:16.343Z",
    "offsetMs": 0.5360469999868656
  },
  {
    "seq": 263,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-054",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:16.989Z",
    "offsetMs": 646.2189669999934,
    "elapsedMs": 645.3310780000029,
    "outcome": "success"
  },
  {
    "seq": 264,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-054",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:16.991Z",
    "offsetMs": 648.1900569999998
  },
  {
    "seq": 265,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-054",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:17.547Z",
    "offsetMs": 1204.4686959999963,
    "elapsedMs": 555.7381380000006,
    "outcome": "success"
  },
  {
    "seq": 266,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-054",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:17.547Z",
    "offsetMs": 1204.9540799999959,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ce94dff82735b52da05fb4f310136284e0716604e027ce961c21bee8b20d6bff";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":263},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":265},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":266}} as const;
export const projectionSha256 = "263971b153c0eef8461f87124215742fc53426cc0d97f49e6a76c1e5ff254034";
