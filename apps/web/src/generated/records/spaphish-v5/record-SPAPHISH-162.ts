import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-162",
  "inputSha256": "19a3487f0f09ec4c2a7212bab54e7703954dbc260f697937376362c161677b37",
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
      "text": "📦 🚚 ..533"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 44,
      "text": "Tienes (1) paquete esperando ser entregado. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 44,
      "end": 77,
      "text": "¡ENTREGA DEL PAQUETE SUSPENDIDO! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 77,
      "end": 160,
      "text": "ESTADO:Detenido en el centro de distribución Se puede aplicar una tarifa de envío. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 160,
      "end": 241,
      "text": "Su código de seguimiento:998877665 Entrega programada ahora Cancelar suscripción."
    }
  ],
  "passA": {
    "requestSha256": "1599dd6da880f5a7e7df3b5889c63ac1d6cc6bfca1fba9f350b1d89577866e08",
    "capturedAt": "2026-09-20T23:44:42.939Z",
    "elapsedMs": 155.90954200000124,
    "successfulAttemptElapsedMs": 154.25566699999763,
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
          "noul": 0.08
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.24
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.87
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.48
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.4
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.33
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
          "noul": 0.07
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.89,
            "educational_or_quoted": 0,
            "informational": 0.04,
            "mixed_or_unclear": 0.07
          },
          "confidence": 0.85
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.18,
            "no_sensitive_action": 0.79,
            "mixed_or_unknown": 0.03,
            "independently_established": 0
          },
          "confidence": 0.71
        }
      },
      "usage": {
        "input_tokens": 3521,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "ff397b3a3edd46bca6af9ea4472abaaf998b090fd809062657f3aca848ddc831",
    "capturedAt": "2026-09-20T23:44:43.078Z",
    "elapsedMs": 136.6714589999974,
    "successfulAttemptElapsedMs": 134.86554199999955,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "subject:2": 0,
            "NONE": 0.46,
            "body:2": 0.51,
            "subject:1": 0.02,
            "subject:0": 0,
            "body:1": 0,
            "body:0": 0,
            "body:3": 0.01
          },
          "confidence": 0.43
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "subject:2": 0,
            "NONE": 0.01,
            "body:2": 0.32,
            "subject:1": 0.21,
            "subject:0": 0,
            "body:1": 0.05,
            "body:0": 0.01,
            "body:3": 0.4
          },
          "confidence": 0.31
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:2": 0.01,
            "NONE": 0.53,
            "subject:0": 0.29,
            "subject:1": 0.03,
            "body:2": 0.06,
            "body:1": 0.03,
            "body:3": 0.02,
            "body:0": 0.03
          },
          "confidence": 0.46
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:2": 0,
            "NONE": 0.9,
            "body:2": 0.01,
            "subject:1": 0.02,
            "subject:0": 0,
            "body:1": 0,
            "body:0": 0,
            "body:3": 0.07
          },
          "confidence": 0.88
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "subject:2": 0,
            "NONE": 0.24,
            "body:2": 0.74,
            "subject:1": 0.01,
            "subject:0": 0,
            "body:1": 0,
            "body:3": 0.01,
            "body:0": 0
          },
          "confidence": 0.71
        }
      },
      "usage": {
        "input_tokens": 2524,
        "output_tokens": 463
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 295.22779200000514,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "none_selected",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "selected",
        "segmentId": "body:2"
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
    "seq": 793,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-162",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:42.784Z",
    "offsetMs": 1.0742920000047889
  },
  {
    "seq": 794,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-162",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:42.939Z",
    "offsetMs": 155.91220800000156,
    "elapsedMs": 154.25566699999763,
    "outcome": "success"
  },
  {
    "seq": 795,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-162",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:42.942Z",
    "offsetMs": 159.19595800000388
  },
  {
    "seq": 796,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-162",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:43.077Z",
    "offsetMs": 294.739708000001,
    "elapsedMs": 134.86554199999955,
    "outcome": "success"
  },
  {
    "seq": 797,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-162",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:43.078Z",
    "offsetMs": 295.3408750000017,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "71bf2d4d9d59c17cf7ca001b425d8f0cf831f8a7dbb292939e80cc4e54f94289";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":794},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":796},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":797}} as const;
export const projectionSha256 = "d21ff93ded098b12840815cf376667a5628083a19f940b7989233878d4676f84";
