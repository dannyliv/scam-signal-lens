import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-208",
  "inputSha256": "5c6c46420f997b6df9c5678bd7de0755dd30f11b7af4dcf82f31a38932aa5293",
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
    "requestSha256": "d3a7acf514783ad44cce17005f99c7e17468618332bfd185eb25f4b61993242a",
    "capturedAt": "2026-09-22T03:52:19.443Z",
    "elapsedMs": 611.2388370000117,
    "successfulAttemptElapsedMs": 610.093583000009,
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
          "noul": 0.48
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.06
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.47
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.91
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.4
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.12
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
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "active_request": 1,
            "informational": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.86,
            "independently_established": 0,
            "mixed_or_unknown": 0.02,
            "no_sensitive_action": 0.12
          },
          "confidence": 0.82
        }
      },
      "usage": {
        "input_tokens": 5095,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "a1a873346aefd02c03add214ae8ea39f2d02aebe01219915b3ff46f33824ddd2",
    "capturedAt": "2026-09-22T03:52:19.982Z",
    "elapsedMs": 537.161930000002,
    "successfulAttemptElapsedMs": 536.1720879999921,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:8": 0.01,
            "body:7": 0,
            "subject:0": 0,
            "body:5": 0,
            "body:3": 0.01,
            "body:4": 0.35,
            "body:6": 0,
            "body:1": 0.25,
            "body:2": 0,
            "NONE": 0.38,
            "body:0": 0
          },
          "confidence": 0.32
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:8": 0.01,
            "body:7": 0,
            "subject:0": 0.01,
            "body:5": 0,
            "body:6": 0,
            "body:4": 0.23,
            "body:3": 0,
            "body:1": 0.43,
            "NONE": 0.27,
            "body:2": 0.04,
            "body:0": 0.01
          },
          "confidence": 0.36
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:8": 0,
            "body:7": 0,
            "subject:0": 0.01,
            "body:5": 0,
            "body:3": 0.01,
            "body:4": 0.02,
            "body:6": 0,
            "body:1": 0.01,
            "NONE": 0.02,
            "body:2": 0.11,
            "body:0": 0.81
          },
          "confidence": 0.79
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:8": 0.01,
            "body:7": 0,
            "subject:0": 0,
            "body:5": 0,
            "body:6": 0,
            "body:4": 0.2,
            "body:3": 0,
            "body:1": 0.03,
            "NONE": 0.76,
            "body:2": 0,
            "body:0": 0
          },
          "confidence": 0.73
        }
      },
      "usage": {
        "input_tokens": 3319,
        "output_tokens": 476
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1150.4200490000076,
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
    "seq": 1012,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-208",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:18.832Z",
    "offsetMs": 0.781170000002021
  },
  {
    "seq": 1013,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-208",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:19.443Z",
    "offsetMs": 611.2393260000099,
    "elapsedMs": 610.093583000009,
    "outcome": "success"
  },
  {
    "seq": 1014,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-208",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:19.445Z",
    "offsetMs": 613.4004700000223
  },
  {
    "seq": 1015,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-208",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:19.982Z",
    "offsetMs": 1149.9584410000243,
    "elapsedMs": 536.1720879999921,
    "outcome": "success"
  },
  {
    "seq": 1016,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-208",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:19.982Z",
    "offsetMs": 1150.476999000006,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7392aa6264cc97ddf27b471c5447d3f5aebf15f22e97ac33bb858de7d8b44bff";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1013},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1015},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1016}} as const;
export const projectionSha256 = "6c983c15b22f082dc7c5d8f995ec8373c6cb5e7b57547aa823892ca40b3bf4ec";
