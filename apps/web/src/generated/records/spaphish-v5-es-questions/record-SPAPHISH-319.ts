import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-319",
  "inputSha256": "bcfe9fa49dd4fda9874c24853cb1bb1c8f984d01bf6677a30ef70bd3f598633f",
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
      "end": 48,
      "text": "CNET-Inicio de registro de empresas en CompraNet"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 272,
      "text": "Ricardo López GARCÍA Ha iniciado su proceso de registro en GobiernoCompras, por lo que le solicitamos estar al pendiente del correo electrónico que le enviaremos con una contraseña temporal para acceder al sistema, la cual llegará en un tiempo máximo de 8 días naturales. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 272,
      "end": 1607,
      "text": "Los datos que hemos recibido para su registro son: Razón Social: Ricardo López García País: México Titularidad jurídica: 4.- Persona Física con Servicios Profesionales (Profesional Independiente) RFC: RLGT987601AQ9 Correo electrónico: rlopez@emailinventado.com Teléfono: 555-1234567 Dirección: Avenida de la Luz 120 Colonia Villa Serena Código postal: 01010 Entidad Federativa: Ciudad de México Delegación o municipio: Álvaro Obregón Datos de la persona de contacto: Apellidos: López García Nombre(s): Roberto Correo electrónico: rlopez@emailinventado.com Teléfono de Contacto: 555-1234567 Idioma preferido (para Visualizaciones on-line): Español (MX) Zona horaria: (GMT-06:00) Zona Centro - Ciudad de México Potencial proveedor o contratista: Ambos Sector: Consultoría Giro: Servicios de Capacitación Especializada Número de trabajadores: 1 - 5 Ventas anuales: $100,000 - $500,000 MXN Estratificación de la empresa: Micro UmVnaXN0cm9FbXByZXNheyByZmM9UkwHVDE5ODc2MDFBUTkgcmF6b25Tb2NpYWw9UlBHLlNUQSBSRU5BIEdhcmPDrWFzIGVtYWlsRW1wcmVzYT1sYnVzdGlvQGdtYWlsLmNvbSB0ZWxlZm9ub0VtcHJlc2E9NTU1LTExMjI2MzQgY3A9MDEwMTAgYXBlbGxpZG9zPUzDs3BleiBHYXJjw61hIG5vbWJyZXM9Um9iZXJ0byBlbWFpbENvbnRhY3RvPXJsb3Blei5nYXJjaWFAbWlpYy5jb20gdGVsZWZvbm9Db250YWN0bz01NTUtMTExMjIzMyBmZWNoYVJlZ2lzdHJvPVRodSBTZXAgMDMgMTQ6MTI6MTMgQ0RUIDIwMjR9 No responder a este correo."
    }
  ],
  "passA": {
    "requestSha256": "011dc7e31e8649074d13468ee3e1c49f3763bf785d6c080f6413b5337593fa92",
    "capturedAt": "2026-09-22T03:54:32.905Z",
    "elapsedMs": 623.3483850000193,
    "successfulAttemptElapsedMs": 622.3164409999736,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.08
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.09
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
          "noul": 0.09
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.83
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.07
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 0.8200000000000001,
            "mixed_or_unclear": 0,
            "active_request": 0.18
          },
          "confidence": 0.75
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.17,
            "mixed_or_unknown": 0.01,
            "independently_established": 0.11,
            "no_sensitive_action": 0.71
          },
          "confidence": 0.61
        }
      },
      "usage": {
        "input_tokens": 5490,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "00d65248b1f80bbaef41a27ed71ae57dac2fa4c5df7ce4426da560f78cf88a52",
    "capturedAt": "2026-09-22T03:54:33.456Z",
    "elapsedMs": 550.4241659999825,
    "successfulAttemptElapsedMs": 549.2559730000212,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.67,
            "body:1": 0.02,
            "subject:0": 0.14,
            "NONE": 0.17
          },
          "confidence": 0.55
        }
      },
      "usage": {
        "input_tokens": 1897,
        "output_tokens": 59
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1175.1114940000116,
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1557,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-319",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:32.282Z",
    "offsetMs": 0.8037539999932051
  },
  {
    "seq": 1558,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-319",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:32.904Z",
    "offsetMs": 623.3485510000028,
    "elapsedMs": 622.3164409999736,
    "outcome": "success"
  },
  {
    "seq": 1559,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-319",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:32.906Z",
    "offsetMs": 625.2104779999936
  },
  {
    "seq": 1560,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-319",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:33.456Z",
    "offsetMs": 1174.9165790000116,
    "elapsedMs": 549.2559730000212,
    "outcome": "success"
  },
  {
    "seq": 1561,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-319",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:33.456Z",
    "offsetMs": 1175.1683910000138,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1ad817ab1f8a87111372d1d629ac82ce6f918167c71f2f2f59aae9cb6514c241";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1558},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1560},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1561}} as const;
export const projectionSha256 = "50f7d135bbf93837476b204c383fb910d33844380edd1a97bb0d83cbd7c99f24";
