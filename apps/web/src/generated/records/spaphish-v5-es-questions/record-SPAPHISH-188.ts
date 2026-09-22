import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-188",
  "inputSha256": "e8575b34245e97887b8e019b58a6a57ebae72d2e0834cf5ffbe2499827a83f11",
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
    "requestSha256": "deef7f8f352458ecef65ec6e70686a9bd2a3bc2ada5d05833ffd579ef9663475",
    "capturedAt": "2026-09-22T03:51:55.499Z",
    "elapsedMs": 617.0384770000237,
    "successfulAttemptElapsedMs": 616.1777339999971,
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
          "noul": 0.43
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.9
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
          "noul": 0.86
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.29
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.09
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.03
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
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
            "mixed_or_unknown": 0.03,
            "no_sensitive_action": 0.05,
            "sender_supplied": 0.92,
            "independently_established": 0
          },
          "confidence": 0.9
        }
      },
      "usage": {
        "input_tokens": 5164,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "7e619d2fe57c4190d19e5854a0cfe52cd6cbf0bcc2f040977eec05796fa57909",
    "capturedAt": "2026-09-22T03:51:56.085Z",
    "elapsedMs": 585.5798050000158,
    "successfulAttemptElapsedMs": 584.6609319999989,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "body:10": 0.02,
            "body:6": 0.09,
            "body:7": 0,
            "body:9": 0,
            "subject:0": 0,
            "body:8": 0.12,
            "body:4": 0.01,
            "NONE": 0.74,
            "body:3": 0,
            "body:1": 0.02,
            "body:5": 0,
            "body:0": 0
          },
          "confidence": 0.71
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:2": 0,
            "body:3": 0,
            "body:6": 0.52,
            "body:10": 0,
            "body:9": 0,
            "subject:0": 0,
            "body:8": 0.4,
            "body:4": 0,
            "NONE": 0.01,
            "body:7": 0,
            "body:1": 0.07,
            "body:5": 0,
            "body:0": 0
          },
          "confidence": 0.47
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "body:7": 0,
            "body:6": 0,
            "body:10": 0,
            "body:9": 0,
            "subject:0": 0,
            "body:8": 0.02,
            "body:4": 0.03,
            "NONE": 0,
            "body:3": 0.01,
            "body:1": 0.93,
            "body:5": 0,
            "body:0": 0
          },
          "confidence": 0.92
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:9",
          "probabilities": {
            "body:2": 0.02,
            "NONE": 0.17,
            "body:6": 0.22,
            "body:7": 0.02,
            "body:9": 0.43,
            "subject:0": 0,
            "body:8": 0.07,
            "body:4": 0.01,
            "body:10": 0.01,
            "body:3": 0.01,
            "body:1": 0,
            "body:5": 0,
            "body:0": 0.04
          },
          "confidence": 0.38
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "body:10": 0.01,
            "body:6": 0,
            "body:7": 0,
            "body:9": 0,
            "subject:0": 0,
            "body:8": 0.05,
            "body:4": 0.02,
            "NONE": 0.92,
            "body:3": 0,
            "body:1": 0,
            "body:5": 0,
            "body:0": 0
          },
          "confidence": 0.91
        }
      },
      "usage": {
        "input_tokens": 4579,
        "output_tokens": 688
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1204.2175430000061,
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
    "seq": 914,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-188",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:54.882Z",
    "offsetMs": 0.6256969999813009
  },
  {
    "seq": 915,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-188",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:55.498Z",
    "offsetMs": 617.0388889999886,
    "elapsedMs": 616.1777339999971,
    "outcome": "success"
  },
  {
    "seq": 916,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-188",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:55.500Z",
    "offsetMs": 618.8779709999799
  },
  {
    "seq": 917,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-188",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:56.085Z",
    "offsetMs": 1203.869714999979,
    "elapsedMs": 584.6609319999989,
    "outcome": "success"
  },
  {
    "seq": 918,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-188",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:51:56.086Z",
    "offsetMs": 1204.2665319999796,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "f3244c97df015231f457cc19c27055586bfea6a0e74b5373e733fa9e1f61758c";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":915},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":917},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":918}} as const;
export const projectionSha256 = "1227650948dda0ac31866f63936adbfd2d2997f8e710499e18eae7ca95d1cdb4";
