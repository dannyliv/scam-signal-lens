import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-113",
  "inputSha256": "3e11263ab0ac4ae517ffd4c4acfc87389275babf738285a896081d509d43ba56",
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
    "requestSha256": "f7703f6f426adbb863a401d71c88ca8847771deba78b9e96426e634511d5ef89",
    "capturedAt": "2026-09-20T23:44:27.695Z",
    "elapsedMs": 152.70924999999988,
    "successfulAttemptElapsedMs": 151.15675000000192,
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
          "noul": 0.27
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.72
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.57
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.31
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.13
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
            "educational_or_quoted": 0,
            "active_request": 1,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.09,
            "independently_established": 0.01,
            "sender_supplied": 0.89,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.87
        }
      },
      "usage": {
        "input_tokens": 3645,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "e0f0637bcef6d7648106ae14c7a65ece20a11fbecb5ae0c0f0cb0f3760a11c2e",
    "capturedAt": "2026-09-20T23:44:27.808Z",
    "elapsedMs": 110.61520799999562,
    "successfulAttemptElapsedMs": 108.95112499999959,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.01,
            "NONE": 0.8,
            "body:1": 0.03,
            "subject:0": 0,
            "body:2": 0.16
          },
          "confidence": 0.75
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:0": 0.04,
            "NONE": 0.16,
            "body:1": 0.4,
            "subject:0": 0,
            "body:2": 0.4
          },
          "confidence": 0.25
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.41,
            "NONE": 0.28,
            "body:1": 0.15,
            "subject:0": 0.04,
            "body:2": 0.12
          },
          "confidence": 0.27
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0.02,
            "NONE": 0.02,
            "body:2": 0.01,
            "body:1": 0.95,
            "subject:0": 0
          },
          "confidence": 0.94
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "NONE": 0.9,
            "body:1": 0.03,
            "subject:0": 0,
            "body:2": 0.07
          },
          "confidence": 0.87
        }
      },
      "usage": {
        "input_tokens": 3068,
        "output_tokens": 323
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 265.7161669999987,
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
        "status": "none_selected",
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
    "seq": 553,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-113",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:27.543Z",
    "offsetMs": 1.0160000000032596
  },
  {
    "seq": 554,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-113",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:27.695Z",
    "offsetMs": 152.71250000000146,
    "elapsedMs": 151.15675000000192,
    "outcome": "success"
  },
  {
    "seq": 555,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-113",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:27.698Z",
    "offsetMs": 155.63012500000332
  },
  {
    "seq": 556,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-113",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:27.807Z",
    "offsetMs": 265.23129200000403,
    "elapsedMs": 108.95112499999959,
    "outcome": "success"
  },
  {
    "seq": 557,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-113",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:27.808Z",
    "offsetMs": 265.8079580000049,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "cc211e7950774c7f8558d952896e5f573a81fe23dfc591e52de4938ad8d2a7ad";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":554},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":556},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":557}} as const;
export const projectionSha256 = "5de67f1a0ff095b68f552f0e5fed9c1d21d47974f73eb8d93908e41e37e76e08";
