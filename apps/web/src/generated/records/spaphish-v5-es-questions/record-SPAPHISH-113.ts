import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-113",
  "inputSha256": "3e11263ab0ac4ae517ffd4c4acfc87389275babf738285a896081d509d43ba56",
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
      "end": 111,
      "text": "Ezequiela Miguelina , Su suscripción a Netflix ha sido cancelada ||Wed, 27 Dec 2023 05:04:41 -0500|| #458176211"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 224,
      "text": "su suscripción a Netflix ha sido cancelada Estimada Daniela Fuentes, Su suscripción ha caducado el: Wed, 27 Dec 2023 05:04:41 -0500 . lamentablemente nunca hemos podido solucionar el problema de pago y pagar tu suscripción. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 224,
      "end": 361,
      "text": "NETFLIX - El equipo de Netflix Obviamente estaremos muy felices de estar aquí, todo lo que tienes que hacer es reactivar tu suscripción. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 361,
      "end": 525,
      "text": "REACTIVAR LA SUSCRIPCIÓN Leer más: NETFLIX.com | De lujo | Contáctenos| Ventaja | Preguntas más frecuentes NETFLIX - 2023 | Copyright Todos los derechos reservados."
    }
  ],
  "passA": {
    "requestSha256": "9f289c5954b0d64d9bc14498d9ffa6db33da93c20b5d225f517eac0e27bb24cb",
    "capturedAt": "2026-09-22T03:50:27.635Z",
    "elapsedMs": 792.0912119999994,
    "successfulAttemptElapsedMs": 791.4982029999956,
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
          "noul": 0.42
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.65
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.53
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.3
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.11
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
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.88,
            "no_sensitive_action": 0.11,
            "independently_established": 0
          },
          "confidence": 0.84
        }
      },
      "usage": {
        "input_tokens": 5095,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "383417bce4b688c266deeba9bf2efc10e5c5f5ec3d792d12d46144cf18b52c2d",
    "capturedAt": "2026-09-22T03:50:28.195Z",
    "elapsedMs": 558.4699630000105,
    "successfulAttemptElapsedMs": 557.6863420000009,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.64,
            "body:1": 0.06,
            "subject:0": 0,
            "body:0": 0.01,
            "body:2": 0.29
          },
          "confidence": 0.55
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.28,
            "body:1": 0.35,
            "subject:0": 0,
            "body:0": 0.03,
            "body:2": 0.34
          },
          "confidence": 0.18
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.21,
            "body:1": 0.13,
            "subject:0": 0.06,
            "body:0": 0.5,
            "body:2": 0.1
          },
          "confidence": 0.39
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.01,
            "body:1": 0.98,
            "subject:0": 0,
            "body:0": 0.01,
            "body:2": 0
          },
          "confidence": 0.97
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.85,
            "body:1": 0.05,
            "subject:0": 0,
            "body:0": 0.01,
            "body:2": 0.09
          },
          "confidence": 0.81
        }
      },
      "usage": {
        "input_tokens": 3600,
        "output_tokens": 323
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1352.4719540000078,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 547,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-113",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:26.843Z",
    "offsetMs": 0.40526599998702295
  },
  {
    "seq": 548,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-113",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:27.635Z",
    "offsetMs": 792.090984999988,
    "elapsedMs": 791.4982029999956,
    "outcome": "success"
  },
  {
    "seq": 549,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-113",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:27.637Z",
    "offsetMs": 794.1245059999928
  },
  {
    "seq": 550,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-113",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:28.195Z",
    "offsetMs": 1352.056580000004,
    "elapsedMs": 557.6863420000009,
    "outcome": "success"
  },
  {
    "seq": 551,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-113",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:28.196Z",
    "offsetMs": 1352.5386890000082,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "aef097ba4061cafe90940201f8c38e4a796c06084eec98b49f78e77131c0c0ff";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":548},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":550},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":551}} as const;
export const projectionSha256 = "e30f8591fae5dc3d8d90b1a6f243d3803e368fe66c8259480e97afe95e90e358";
