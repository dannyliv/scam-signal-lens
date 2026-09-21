import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-188",
  "inputSha256": "e8575b34245e97887b8e019b58a6a57ebae72d2e0834cf5ffbe2499827a83f11",
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
      "end": 64,
      "text": "Último recordatorio : Su suscripción puede haber finalizado hoy!"
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
      "end": 206,
      "text": "Su suscripción a McAfee Total Protection para Windows expiró el 05/30/2025 . "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 206,
      "end": 308,
      "text": "Sin la renovación, sus Dispositivos pueden volverse vulnerables a virus, malware y robo de identidad. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 308,
      "end": 339,
      "text": "¡Se requiere acción inmediata! "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 339,
      "end": 391,
      "text": "Sus Dispositivos están desprotegidos y en riesgo... "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 391,
      "end": 637,
      "text": "ID de cuenta: 8129473US Usuario: Carlos Número de serie: MTQS LZ42 VNJD KP57 Descuento: 95.99% OFF Oferta válida hasta: 05/30/2025 RENOVAR AHORA Estimado Héctor Ramírez, A pesar de múltiples notificaciones y alertas, no hemos recibido respuesta. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 637,
      "end": 707,
      "text": "Su protección contra amenazas cibernéticas está gravemente en riesgo. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 707,
      "end": 839,
      "text": "Renueve su suscripción inmediatamente para garantizar protección ininterrumpida contra ataques cibernéticos y piratas informáticos. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 839,
      "end": 881,
      "text": "Su seguridad es nuestra máxima prioridad. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 881,
      "end": 959,
      "text": "Si desea dejar de recibir correos electrónicos en el futuro Darse de baja aquí"
    }
  ],
  "passA": {
    "requestSha256": "56cf895cad328b3fa7ac6fec0896e4c4d113716decb1f90d8a413cdcfa9fa3ae",
    "capturedAt": "2026-09-21T00:57:21.553Z",
    "elapsedMs": 142.9477909999996,
    "successfulAttemptElapsedMs": 140.81445799999983,
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
          "noul": 0.37
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.93
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
          "noul": 0.83
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.41
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
            "informational": 0,
            "mixed_or_unclear": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.04,
            "independently_established": 0,
            "sender_supplied": 0.93,
            "mixed_or_unknown": 0.02
          },
          "confidence": 0.91
        }
      },
      "usage": {
        "input_tokens": 3714,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "4750753dfcd45cac08708eee40d30de5a39b1b046a7b405ea75e06e0515c487b",
    "capturedAt": "2026-09-21T00:57:21.684Z",
    "elapsedMs": 129.99220800000057,
    "successfulAttemptElapsedMs": 127.79249999999956,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "body:6": 0.04,
            "body:5": 0,
            "body:1": 0.02,
            "NONE": 0.83,
            "body:9": 0,
            "subject:0": 0,
            "body:10": 0.01,
            "body:2": 0,
            "body:8": 0.09,
            "body:7": 0,
            "body:4": 0.01,
            "body:3": 0
          },
          "confidence": 0.81
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:0": 0,
            "body:4": 0,
            "body:5": 0,
            "body:1": 0.04,
            "body:10": 0,
            "body:9": 0,
            "subject:0": 0,
            "NONE": 0.01,
            "body:2": 0,
            "body:8": 0.45,
            "body:7": 0,
            "body:6": 0.5,
            "body:3": 0
          },
          "confidence": 0.45
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "body:6": 0,
            "body:5": 0,
            "body:1": 0.93,
            "body:10": 0,
            "body:9": 0,
            "subject:0": 0,
            "NONE": 0,
            "body:2": 0,
            "body:8": 0.03,
            "body:7": 0,
            "body:4": 0.03,
            "body:3": 0.01
          },
          "confidence": 0.92
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:9",
          "probabilities": {
            "body:3": 0.01,
            "body:4": 0.01,
            "body:5": 0,
            "body:1": 0,
            "body:10": 0.01,
            "body:9": 0.53,
            "subject:0": 0.01,
            "NONE": 0.15,
            "body:2": 0.02,
            "body:8": 0.03,
            "body:7": 0.01,
            "body:6": 0.18,
            "body:0": 0.04
          },
          "confidence": 0.49
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "body:4": 0.03,
            "body:5": 0,
            "body:1": 0,
            "body:10": 0,
            "body:9": 0,
            "subject:0": 0,
            "NONE": 0.87,
            "body:2": 0,
            "body:8": 0.09,
            "body:7": 0,
            "body:6": 0.01,
            "body:3": 0
          },
          "confidence": 0.85
        }
      },
      "usage": {
        "input_tokens": 4047,
        "output_tokens": 688
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 478.13533400000233,
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
    "seq": 920,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-188",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:51.911Z",
    "offsetMs": 1.1522909999985131
  },
  {
    "seq": 921,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-188",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:52.113Z",
    "offsetMs": 202.83929100000387,
    "elapsedMs": 201.15291699999943,
    "outcome": "success"
  },
  {
    "seq": 922,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-188",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:52.113Z",
    "offsetMs": 203.07037500000297,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2597,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-188",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:21.411Z",
    "offsetMs": 1.6920419999996739
  },
  {
    "seq": 2598,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-188",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:21.552Z",
    "offsetMs": 142.96191699999963,
    "elapsedMs": 140.81445799999983,
    "outcome": "success"
  },
  {
    "seq": 2599,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-188",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:21.556Z",
    "offsetMs": 146.2260839999999
  },
  {
    "seq": 2600,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-188",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:21.684Z",
    "offsetMs": 274.576,
    "elapsedMs": 127.79249999999956,
    "outcome": "success"
  },
  {
    "seq": 2601,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-188",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:21.685Z",
    "offsetMs": 275.1634589999994,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "83fd98fa7d96a853516e3db83757bbedeec9994e1d212055725514f24f0aa1b5";
export const replayAnchors = {"passA":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2598},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2600},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2601}} as const;
export const projectionSha256 = "04746022adb5390fd75725c38b08dcb5a246cae3c7bacf363184199781ec6517";
