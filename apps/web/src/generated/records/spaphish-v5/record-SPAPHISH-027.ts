import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-027",
  "inputSha256": "5fc93635f8cbbb402e3e245d32557c5d21b5595e05f06bc522e2af94a45c0baa",
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
      "end": 81,
      "text": "SECIHTI - IMPORTANTE: DESIGNACIÓN COMO EVALUADOR CONVOCATORIA BECAS AL EXTRANJERO"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 26,
      "text": "Por medio de la presente,\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 26,
      "end": 27,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 27,
      "end": 184,
      "text": "Se adjunta Oficio de designación para participar en el proceso de evaluación de la Convocatoria Becas de Posgrado Artes y Humanidades en el Extranjero 2025.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 184,
      "end": 185,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 185,
      "end": 235,
      "text": "Sin más por el momento, reciba un cordial saludo.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 235,
      "end": 236,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 236,
      "end": 350,
      "text": "Evaluaciones de Becas al Extranjero evaluacionesbglobal@cncti.org.mxmailto:**evaluacionesbext@cncti.org.mx** Ext. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 350,
      "end": 355,
      "text": "8844\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 355,
      "end": 356,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 356,
      "end": 396,
      "text": "... ... ... ... ... ... ... ... ... ... "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 396,
      "end": 680,
      "text": "La información de este correo, así como sus documentos adjuntos, puede ser objeto de solicitudes de acceso a la información; así como, de solicitudes en el ejercicio de los derechos de Acceso, Rectificación, Cancelación, Oposición y Portabilidad de datos personales (derechos ARCOP). "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 680,
      "end": 808,
      "text": "Este mensaje y cualquier archivo adjunto al mismo pueden contener información que podría considerarse confidencial o reservada. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 808,
      "end": 1148,
      "text": "Si ha recibido el mensaje por error, por favor notifique al remitente contestando el correo, y destruyendo el mensaje original y sus anexos, como una medida de seguridad de carácter administrativo, conforme a lo establecido en el artículo 3, fracción XXI de la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados."
    }
  ],
  "passA": {
    "requestSha256": "559d4356d4b88ac0a409f1dd4e9e5c807138b1a19bcbe290b8ee1cffba6d7e36",
    "capturedAt": "2026-09-20T23:43:59.887Z",
    "elapsedMs": 177.1070839999993,
    "successfulAttemptElapsedMs": 175.6634580000009,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.02
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.03
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.07
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.87
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.06
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
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
          "choice": "informational",
          "probabilities": {
            "active_request": 0.12,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0.01,
            "informational": 0.87
          },
          "confidence": 0.83
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.86,
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "sender_supplied": 0.14
          },
          "confidence": 0.81
        }
      },
      "usage": {
        "input_tokens": 3753,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "7c9b6d91324c45ee6182eebf4fa3867720f9bb69c828314afadd6cc60875060d",
    "capturedAt": "2026-09-20T23:44:00.015Z",
    "elapsedMs": 125.62800000000061,
    "successfulAttemptElapsedMs": 124.00616699999955,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:5": 0,
            "body:1": 0,
            "body:8": 0,
            "body:12": 0.01,
            "body:7": 0,
            "body:3": 0.01,
            "body:9": 0,
            "body:11": 0,
            "body:6": 0.15,
            "body:2": 0.37,
            "NONE": 0.03,
            "body:10": 0,
            "body:4": 0,
            "body:0": 0,
            "subject:0": 0.43
          },
          "confidence": 0.38
        }
      },
      "usage": {
        "input_tokens": 1372,
        "output_tokens": 161
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 305.3688340000008,
  "derived": {
    "concern": "few_warning_signs",
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
        "status": "not_requested",
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
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 129,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-027",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:59.710Z",
    "offsetMs": 0.8712090000008175
  },
  {
    "seq": 130,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-027",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:59.886Z",
    "offsetMs": 177.1062920000004,
    "elapsedMs": 175.6634580000009,
    "outcome": "success"
  },
  {
    "seq": 131,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-027",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:59.890Z",
    "offsetMs": 180.52220900000066
  },
  {
    "seq": 132,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-027",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:00.014Z",
    "offsetMs": 305.2149590000008,
    "elapsedMs": 124.00616699999955,
    "outcome": "success"
  },
  {
    "seq": 133,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-027",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:00.015Z",
    "offsetMs": 305.41233400000056,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0f1432dbc80bfebd422bdf9bc0365369668565585b0a4c31e51031617d1209ca";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":130},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":132},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":133}} as const;
export const projectionSha256 = "5b3aab9c885ef9c9a883183510693aedcf3fdcb12731a8e91780ac7a107dacd6";
