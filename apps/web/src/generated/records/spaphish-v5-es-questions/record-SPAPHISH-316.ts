import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-316",
  "inputSha256": "692464ee31b0175f1bc8d98457e5059b0cc0014efc8b3505bc9bbe1597e4dc6a",
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
      "end": 74,
      "text": "Ábrelo haciendo clic a continuación."
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 74,
      "end": 85,
      "text": "📦 🚚 ..357"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 79,
      "text": "FedEx Paquete esperando ser entregado Tienes (1) Paquete pendiente de entrega. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 79,
      "end": 116,
      "text": "Canjea tu código para ver y recibir. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 116,
      "end": 247,
      "text": "Programe una fecha de entrega y regístrese para recibir nuestras alertas de calendario para asegurarse de que no vuelva a suceder! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 247,
      "end": 366,
      "text": "Ingrese la información de entrega Donde el hoy se encuentra con el futuro 1234567 continuar>> click here to Unsubscribe"
    }
  ],
  "passA": {
    "requestSha256": "82f802c43be3164ca77183d871387f599c223b7d561418e13d45a3f3cef7c10f",
    "capturedAt": "2026-09-22T03:54:29.893Z",
    "elapsedMs": 639.6527009999845,
    "successfulAttemptElapsedMs": 637.7602419999894,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.42
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.27
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.07
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.12
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.42
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.85
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.29
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.11
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.04
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
            "mixed_or_unknown": 0.02,
            "sender_supplied": 0.82,
            "no_sensitive_action": 0.16
          },
          "confidence": 0.76
        }
      },
      "usage": {
        "input_tokens": 4999,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "07a6bd2ceb6dfd6ee34e70b3736369223ab6fcf10885ac1e21f466c3c8326212",
    "capturedAt": "2026-09-22T03:54:30.419Z",
    "elapsedMs": 524.5916389999911,
    "successfulAttemptElapsedMs": 523.5300940000452,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.25,
            "subject:0": 0,
            "body:0": 0,
            "subject:1": 0,
            "body:1": 0.58,
            "body:3": 0.17,
            "body:2": 0,
            "subject:2": 0
          },
          "confidence": 0.51
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.6,
            "subject:0": 0,
            "body:0": 0,
            "subject:2": 0,
            "body:1": 0.01,
            "subject:1": 0,
            "body:2": 0.03,
            "body:3": 0.36
          },
          "confidence": 0.54
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.41,
            "subject:0": 0,
            "body:0": 0.05,
            "subject:1": 0.05,
            "body:1": 0.04,
            "body:3": 0.1,
            "body:2": 0.35,
            "subject:2": 0
          },
          "confidence": 0.33
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.16,
            "subject:0": 0.01,
            "body:0": 0.75,
            "body:3": 0.04,
            "body:1": 0.01,
            "body:2": 0.03,
            "subject:1": 0,
            "subject:2": 0
          },
          "confidence": 0.7
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.84,
            "subject:0": 0,
            "body:0": 0,
            "subject:1": 0.08,
            "body:1": 0.01,
            "body:3": 0.06,
            "body:2": 0.01,
            "subject:2": 0
          },
          "confidence": 0.81
        }
      },
      "usage": {
        "input_tokens": 3252,
        "output_tokens": 459
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1166.0075310000102,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "low_confidence",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "low_confidence",
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
    "seq": 1543,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-316",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:29.254Z",
    "offsetMs": 1.0718110000016168
  },
  {
    "seq": 1544,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-316",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:29.893Z",
    "offsetMs": 639.65226599999,
    "elapsedMs": 637.7602419999894,
    "outcome": "success"
  },
  {
    "seq": 1545,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-316",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:29.895Z",
    "offsetMs": 641.943151000014
  },
  {
    "seq": 1546,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-316",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:30.419Z",
    "offsetMs": 1165.6957130000228,
    "elapsedMs": 523.5300940000452,
    "outcome": "success"
  },
  {
    "seq": 1547,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-316",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:30.420Z",
    "offsetMs": 1166.0663869999698,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "8b7aa113acb765cf6798c385ea5ebae634dccec82c83fab2995edafb10b81889";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1544},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1546},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1547}} as const;
export const projectionSha256 = "7e31f401668033208ea60ebe98339a3c4bb4b378345f8b4c91b4b63bb91eee5c";
