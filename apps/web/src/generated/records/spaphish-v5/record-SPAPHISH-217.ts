import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-217",
  "inputSha256": "263f5ceb80b96bbb1f5ba7da6f8cf69c2255cba68cdf7c172964ef34a08ab58d",
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
      "end": 45,
      "text": "Alerta urgente: su cuenta fue bloqueada hoy. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 45,
      "end": 70,
      "text": "Ya no somos responsables."
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 74,
      "text": "Su suscripción a McAfee ha caducado Urgente: ¡Tu suscripción ha caducado! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 74,
      "end": 129,
      "text": "Tienes 24 horas para renovar y mantener su protección. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 129,
      "end": 205,
      "text": "Su suscripción a McAfee Total Protection para Windows expiró el 06/27/2025. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 205,
      "end": 306,
      "text": "Sin la renovación,sus Dispositivos pueden volverse vulnerables a virus, malware y robo de identidad. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 306,
      "end": 337,
      "text": "¡Se requiere acción inmediata! "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 337,
      "end": 389,
      "text": "Sus Dispositivos están desprotegidos y en riesgo... "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 389,
      "end": 627,
      "text": "ID de cuenta: 8826147MX Usuario: Carlos Número de serie: FQTS 9L22 KPMR SX48 Descuento: 95.99% OFF Oferta válida hasta: 06/27/2025 RENOVAR AHORA Estimado Carlos, A pesar de múltiples notificaciones y alertas, no hemos recibido respuesta. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 627,
      "end": 697,
      "text": "Su protección contra amenazas cibernéticas está gravemente en riesgo. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 697,
      "end": 870,
      "text": "Renueve su suscripción inmediatamente para garantizar protección ininterrumpida contra ataques cibernéticos y piratas informáticos.Su seguridad es nuestra máxima prioridad. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 870,
      "end": 948,
      "text": "Si desea dejar de recibir correos electrónicos en el futuro Darse de baja aquí"
    }
  ],
  "passA": {
    "requestSha256": "32c39f484668533fcf9c944b12b059782c70d0158261f077ea14fc222a8ca9ec",
    "capturedAt": "2026-09-20T23:45:03.136Z",
    "elapsedMs": 137.9790420000063,
    "successfulAttemptElapsedMs": 136.37479200000234,
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
          "noul": 0.38
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.94
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.98
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.87
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.45
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.08
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
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 1,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.04,
            "independently_established": 0,
            "sender_supplied": 0.94,
            "mixed_or_unknown": 0.02
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 3709,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "39ba8988f8fdfe296c1894d7844954260810ecab7eaeb4c31ffa3614c602c978",
    "capturedAt": "2026-09-20T23:45:03.289Z",
    "elapsedMs": 151.2152919999935,
    "successfulAttemptElapsedMs": 149.91708300000755,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:7": 0,
            "body:0": 0,
            "subject:0": 0,
            "body:5": 0,
            "body:2": 0,
            "subject:1": 0,
            "body:9": 0.01,
            "NONE": 0.79,
            "body:6": 0.06,
            "body:1": 0.05,
            "body:4": 0,
            "body:8": 0.09,
            "body:3": 0
          },
          "confidence": 0.77
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:8",
          "probabilities": {
            "body:7": 0,
            "body:0": 0,
            "body:5": 0,
            "subject:0": 0,
            "body:2": 0,
            "subject:1": 0,
            "body:1": 0.07,
            "NONE": 0,
            "body:6": 0.44,
            "body:3": 0,
            "body:4": 0,
            "body:8": 0.49,
            "body:9": 0
          },
          "confidence": 0.43
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:5": 0,
            "body:0": 0,
            "body:7": 0,
            "subject:0": 0.01,
            "body:2": 0,
            "subject:1": 0,
            "body:9": 0,
            "body:3": 0,
            "body:6": 0,
            "body:1": 0.95,
            "body:4": 0.02,
            "body:8": 0.02,
            "NONE": 0
          },
          "confidence": 0.94
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:8",
          "probabilities": {
            "body:7": 0.01,
            "subject:0": 0.12,
            "body:5": 0,
            "body:0": 0.13,
            "body:2": 0.04,
            "subject:1": 0.03,
            "body:1": 0.01,
            "body:3": 0,
            "body:6": 0.1,
            "body:9": 0.01,
            "body:4": 0,
            "body:8": 0.39,
            "NONE": 0.16
          },
          "confidence": 0.35
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:7": 0,
            "body:0": 0,
            "body:5": 0,
            "subject:0": 0.01,
            "body:2": 0,
            "subject:1": 0.12,
            "body:1": 0.01,
            "body:3": 0,
            "body:6": 0.01,
            "NONE": 0.73,
            "body:4": 0.01,
            "body:8": 0.11,
            "body:9": 0
          },
          "confidence": 0.69
        }
      },
      "usage": {
        "input_tokens": 4012,
        "output_tokens": 683
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 290.60095800001,
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
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 1060,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-217",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:02.999Z",
    "offsetMs": 1.0791659999958938
  },
  {
    "seq": 1061,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-217",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:03.136Z",
    "offsetMs": 137.98154100000102,
    "elapsedMs": 136.37479200000234,
    "outcome": "success"
  },
  {
    "seq": 1062,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-217",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:03.138Z",
    "offsetMs": 139.93104100000346
  },
  {
    "seq": 1063,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-217",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:03.289Z",
    "offsetMs": 290.4014160000079,
    "elapsedMs": 149.91708300000755,
    "outcome": "success"
  },
  {
    "seq": 1064,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-217",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:03.289Z",
    "offsetMs": 290.63966600000276,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "88e37ec1b536fc953b928367fcc849a4ad70dca4af34017363871dd6057f8b89";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1061},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1063},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1064}} as const;
export const projectionSha256 = "e329151930880c58f7d2daad08f2998e335bc4e26d577f280b64bf2b6a5e1200";
