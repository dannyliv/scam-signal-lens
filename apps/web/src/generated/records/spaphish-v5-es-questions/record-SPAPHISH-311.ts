import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-311",
  "inputSha256": "e09d1998b3524f54e941a76fcc9336170e0be3baa27fc4c7650344edb60e1d21",
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
      "end": 124,
      "text": "Evite más entregas perdidas Reciba alertas actualizadas y reprograme varios paquetes al mismo tiempo con Express My Choice®."
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 42,
      "text": "El conductor no pudo entregar su paquete. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 42,
      "end": 78,
      "text": "Lo sentimos, no hemos dado contigo. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 78,
      "end": 188,
      "text": "Seguimiento del paquete, en cualquier momento, y lugar Registrarse México Lo sentimos, no hemos dado contigo. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 188,
      "end": 230,
      "text": "El conductor no pudo entregar su paquete. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 230,
      "end": 269,
      "text": "Seleccione una nueva fecha de entrega. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 269,
      "end": 394,
      "text": "Evite más entregas fallidas Reciba alertas actualizadas y reprograme varios paquetes al mismo tiempo con Express My Choice®. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 394,
      "end": 446,
      "text": "Siguiente El anunciante no gestiona su suscripción. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 446,
      "end": 591,
      "text": "Si prefiere no recibir más comunicaciones, anule la suscripción aquí O escriba a: 900 Avenida Corporativa, Ste 100 #200, Ciudad Real, CDMX, 01000"
    }
  ],
  "passA": {
    "requestSha256": "5728fc29d731d976a0b7ba86afabbb5ffeb30ab763a6aa5fd83a2de7ff5e9133",
    "capturedAt": "2026-09-22T03:54:23.690Z",
    "elapsedMs": 636.8227820000029,
    "successfulAttemptElapsedMs": 633.4541989999707,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.03
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.07
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.35
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.74
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.11
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.12
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.01,
            "active_request": 0.99,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.98
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.29,
            "no_sensitive_action": 0.7,
            "mixed_or_unknown": 0.01,
            "independently_established": 0
          },
          "confidence": 0.6
        }
      },
      "usage": {
        "input_tokens": 5064,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "98b3d6f6798dcc7234ca0865277135c8f3402c8b86c1106ce1af075ed70d1640",
    "capturedAt": "2026-09-22T03:54:24.216Z",
    "elapsedMs": 524.4432519999682,
    "successfulAttemptElapsedMs": 523.2543629999855,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:0": 0.01,
            "body:5": 0.39,
            "body:1": 0,
            "body:3": 0.01,
            "body:6": 0,
            "body:7": 0.01,
            "subject:0": 0.1,
            "body:2": 0,
            "body:4": 0.18,
            "NONE": 0.3
          },
          "confidence": 0.32
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.26,
            "body:5": 0.03,
            "body:1": 0.05,
            "body:3": 0.06,
            "body:6": 0.01,
            "body:7": 0.03,
            "subject:0": 0.03,
            "body:2": 0.01,
            "body:4": 0.02,
            "NONE": 0.5
          },
          "confidence": 0.43
        }
      },
      "usage": {
        "input_tokens": 1773,
        "output_tokens": 221
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1162.8446579999872,
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
    "seq": 1518,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-311",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:23.056Z",
    "offsetMs": 3.0028710000333376
  },
  {
    "seq": 1519,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-311",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:23.690Z",
    "offsetMs": 636.8236700000125,
    "elapsedMs": 633.4541989999707,
    "outcome": "success"
  },
  {
    "seq": 1520,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-311",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:23.692Z",
    "offsetMs": 639.0387530000298
  },
  {
    "seq": 1521,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-311",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:24.216Z",
    "offsetMs": 1162.5995620000176,
    "elapsedMs": 523.2543629999855,
    "outcome": "success"
  },
  {
    "seq": 1522,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-311",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:24.216Z",
    "offsetMs": 1162.8922580000362,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "8176c6aeb7298011e491bf276cfde6abb9a62c71078b0e2ea7f19164f244acbf";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1519},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1521},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1522}} as const;
export const projectionSha256 = "a3c527bd9079a72c183c39a7cdbd57f2e53281a368edd6b08f0f807c8c4c0263";
