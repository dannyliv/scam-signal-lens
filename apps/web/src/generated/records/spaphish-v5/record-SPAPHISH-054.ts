import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-054",
  "inputSha256": "62815b2a90c686a1e3e1534c98590a294b583c9ae32546fce061102b5ba03fb7",
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
    "requestSha256": "0a2a1e4a421dd9d453ed4f52afbbf36e7cb0172936e58b85c3b1e038e1d75db9",
    "capturedAt": "2026-09-20T23:44:08.141Z",
    "elapsedMs": 170.86291699999856,
    "successfulAttemptElapsedMs": 169.42129199999908,
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
          "noul": 0.09
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.2
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.85
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.87
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.34
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.26
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
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.09
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.05,
            "active_request": 0.87,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0.08
          },
          "confidence": 0.82
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.03,
            "no_sensitive_action": 0.81,
            "sender_supplied": 0.16,
            "independently_established": 0
          },
          "confidence": 0.75
        }
      },
      "usage": {
        "input_tokens": 3525,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "f3b58175e27d022c155c26f8ca26fdfd74538c6a2099ddebfad6b7038e451c4d",
    "capturedAt": "2026-09-20T23:44:08.281Z",
    "elapsedMs": 138.27141699999993,
    "successfulAttemptElapsedMs": 136.6702499999992,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "subject:2": 0,
            "subject:0": 0,
            "body:3": 0.23,
            "subject:1": 0.31,
            "body:2": 0.1,
            "body:4": 0.35000000000000003,
            "body:1": 0,
            "body:0": 0,
            "NONE": 0.01
          },
          "confidence": 0.25
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:2": 0,
            "subject:0": 0.04,
            "body:3": 0.01,
            "subject:1": 0.01,
            "body:2": 0.01,
            "body:4": 0.02,
            "body:0": 0.86,
            "body:1": 0.02,
            "NONE": 0.03
          },
          "confidence": 0.84
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:2": 0,
            "subject:0": 0,
            "body:3": 0,
            "subject:1": 0.02,
            "body:2": 0.01,
            "body:4": 0.1,
            "body:0": 0,
            "body:1": 0,
            "NONE": 0.87
          },
          "confidence": 0.85
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "subject:2": 0,
            "body:2": 0,
            "body:3": 0.77,
            "subject:1": 0,
            "subject:0": 0,
            "body:4": 0,
            "body:0": 0,
            "body:1": 0,
            "NONE": 0.23
          },
          "confidence": 0.73
        }
      },
      "usage": {
        "input_tokens": 2174,
        "output_tokens": 411
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 311.6322089999994,
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
        "status": "selected",
        "segmentId": "body:3"
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
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-054",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:07.970Z",
    "offsetMs": 0.902750000001106
  },
  {
    "seq": 263,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-054",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:08.140Z",
    "offsetMs": 170.86454199999935,
    "elapsedMs": 169.42129199999908,
    "outcome": "success"
  },
  {
    "seq": 264,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-054",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:08.143Z",
    "offsetMs": 173.9352089999993
  },
  {
    "seq": 265,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-054",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:08.281Z",
    "offsetMs": 311.2983749999985,
    "elapsedMs": 136.6702499999992,
    "outcome": "success"
  },
  {
    "seq": 266,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-054",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:08.281Z",
    "offsetMs": 311.70233400000143,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "874829f09a1db3eb8a68e06d24cf43f697338928b22c9a98196c6bfbb7bf969c";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":263},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":265},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":266}} as const;
export const projectionSha256 = "42164ad2c54b999270e70321e6697d35253c86a263b9392edd77a904687f9d72";
