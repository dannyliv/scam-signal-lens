import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-027",
  "inputSha256": "5fc93635f8cbbb402e3e245d32557c5d21b5595e05f06bc522e2af94a45c0baa",
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
    "requestSha256": "5c12b3271e3fa9c7990ed4585f019870f0e41343838d9063a7146821cd00cd35",
    "capturedAt": "2026-09-22T03:48:43.472Z",
    "elapsedMs": 836.766040999999,
    "successfulAttemptElapsedMs": 835.9821050000028,
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
          "noul": 0.04
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.06
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.14
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0.16,
            "informational": 0.83,
            "mixed_or_unclear": 0.01,
            "educational_or_quoted": 0
          },
          "confidence": 0.77
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "sender_supplied": 0.1,
            "no_sensitive_action": 0.9,
            "independently_established": 0
          },
          "confidence": 0.86
        }
      },
      "usage": {
        "input_tokens": 5203,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "3265afaff7ace608691deb8a654654716d00a1d89103f13e96ad024c6841c8f8",
    "capturedAt": "2026-09-22T03:48:44.019Z",
    "elapsedMs": 545.3479640000005,
    "successfulAttemptElapsedMs": 544.6550429999988,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:11": 0,
            "body:5": 0,
            "body:8": 0,
            "body:6": 0.13,
            "body:12": 0.01,
            "subject:0": 0.38,
            "body:3": 0,
            "body:7": 0,
            "NONE": 0.03,
            "body:1": 0,
            "body:0": 0,
            "body:2": 0.45,
            "body:10": 0,
            "body:4": 0,
            "body:9": 0
          },
          "confidence": 0.4
        }
      },
      "usage": {
        "input_tokens": 1472,
        "output_tokens": 161
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1384.5740689999984,
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
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-027",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:42.635Z",
    "offsetMs": 0.4713339999980235
  },
  {
    "seq": 130,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-027",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:43.471Z",
    "offsetMs": 836.7660109999961,
    "elapsedMs": 835.9821050000028,
    "outcome": "success"
  },
  {
    "seq": 131,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-027",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:43.474Z",
    "offsetMs": 839.3186039999964
  },
  {
    "seq": 132,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-027",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:44.019Z",
    "offsetMs": 1384.3563429999958,
    "elapsedMs": 544.6550429999988,
    "outcome": "success"
  },
  {
    "seq": 133,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-027",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:48:44.019Z",
    "offsetMs": 1384.6159979999975,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "e4515d53be1392d44bd8e999a89c43acfb78adec1cd9ff41d5d59237a51ffafe";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":130},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":132},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":133}} as const;
export const projectionSha256 = "bc37e122ab3ded2c8c1fa9bc9ec0cd3902b421d1251f0f8457be7588d8df832d";
