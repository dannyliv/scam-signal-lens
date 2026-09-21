import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-208",
  "inputSha256": "5c6c46420f997b6df9c5678bd7de0755dd30f11b7af4dcf82f31a38932aa5293",
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
      "end": 61,
      "text": "Missxtranger: 🔔tienes un paquete (𝟭) pendiente de entrega📦"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 48,
      "text": "UPS Tienes (1) paquete esperando ser entregado. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 48,
      "end": 75,
      "text": "¡Se necesita verificación! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 75,
      "end": 197,
      "text": "Lamentablemente, no pudimos entregar el paquete postal que solicitó porque la dirección del destinatario no era correcta. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 197,
      "end": 210,
      "text": "Nombre: Sra. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 210,
      "end": 501,
      "text": "Luisa correo electrónico : luisa.perez@webmail.com Fecha: 24 April 2024 ID de rastreo: ES-9988776655 Estado: Verificación pendiente Haga clic aquí para verificar -------------------------------------------------------------------------------- Esperamos que disfrute recibiendo este mensaje. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 501,
      "end": 564,
      "text": "Sin embargo, si no desea recibir correos electrónicos futuros. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 564,
      "end": 593,
      "text": "Por favor, dar de baja here. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 593,
      "end": 635,
      "text": "El anunciante no gestiona su suscripción. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 635,
      "end": 769,
      "text": "Si prefieres no recibir más comunicaciones por favor date de baja aquí Or write to: 550 Technology Dr Ste 100#500, Cheyenne, WY, 82001"
    }
  ],
  "passA": {
    "requestSha256": "02bf3d87a039c6e543835ad4f703d6bd16ba80dc282bfc79e0ab82aa46b12225",
    "capturedAt": "2026-09-20T23:45:00.634Z",
    "elapsedMs": 135.50641699999687,
    "successfulAttemptElapsedMs": 133.73879200000374,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.17
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.44
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.07
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.43
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.9
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.42
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
          "noul": 0.03
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
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.05,
            "sender_supplied": 0.94,
            "independently_established": 0
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 3645,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "348f1c93a5388889f02988932c9c7c80d4f3ab5c3c47905f8ee273e6f2804ede",
    "capturedAt": "2026-09-20T23:45:00.771Z",
    "elapsedMs": 135.66170799999963,
    "successfulAttemptElapsedMs": 134.48924999999872,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "body:0": 0,
            "body:6": 0,
            "body:3": 0.01,
            "subject:0": 0,
            "body:1": 0.21,
            "body:5": 0,
            "body:7": 0,
            "body:8": 0.01,
            "body:4": 0.29,
            "NONE": 0.48
          },
          "confidence": 0.43
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0.05,
            "body:0": 0.01,
            "body:6": 0,
            "body:3": 0,
            "subject:0": 0.03,
            "body:1": 0.39,
            "body:5": 0,
            "body:7": 0,
            "body:8": 0.01,
            "body:4": 0.29000000000000004,
            "NONE": 0.22
          },
          "confidence": 0.32
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0.07,
            "body:0": 0.86,
            "body:6": 0,
            "body:3": 0.01,
            "subject:0": 0.01,
            "body:7": 0,
            "body:5": 0,
            "body:1": 0.01,
            "body:8": 0,
            "body:4": 0.01,
            "NONE": 0.03
          },
          "confidence": 0.85
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "body:0": 0,
            "body:6": 0,
            "body:3": 0,
            "subject:0": 0,
            "body:1": 0.03,
            "body:5": 0,
            "body:7": 0,
            "body:8": 0.01,
            "body:4": 0.22,
            "NONE": 0.74
          },
          "confidence": 0.71
        }
      },
      "usage": {
        "input_tokens": 2895,
        "output_tokens": 476
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 272.7118749999936,
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
    "seq": 1016,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-208",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:00.500Z",
    "offsetMs": 1.1735419999895385
  },
  {
    "seq": 1017,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-208",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:00.634Z",
    "offsetMs": 135.50999999999476,
    "elapsedMs": 133.73879200000374,
    "outcome": "success"
  },
  {
    "seq": 1018,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-208",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:00.636Z",
    "offsetMs": 137.3608749999985
  },
  {
    "seq": 1019,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-208",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:00.771Z",
    "offsetMs": 272.313083999994,
    "elapsedMs": 134.48924999999872,
    "outcome": "success"
  },
  {
    "seq": 1020,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-208",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:00.771Z",
    "offsetMs": 272.7982919999922,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a42d6e640d51651cc36dffce3675bd372749db6dae3f150454568beb3268546c";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1017},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1019},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1020}} as const;
export const projectionSha256 = "bb35597407b7024ba9bc07ee0a6a8ae2a653cf5daf78aef0ad797ed57c4d3b85";
