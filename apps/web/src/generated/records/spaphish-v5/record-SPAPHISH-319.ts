import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-319",
  "inputSha256": "bcfe9fa49dd4fda9874c24853cb1bb1c8f984d01bf6677a30ef70bd3f598633f",
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
    "requestSha256": "ec3ea630b3c2e91dccde98848e8f10bcdc33f3f4d775b71e76647565a6d64463",
    "capturedAt": "2026-09-20T23:45:39.167Z",
    "elapsedMs": 192.6509159999987,
    "successfulAttemptElapsedMs": 190.94141599998693,
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
          "noul": 0.09
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.1
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.78
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.16
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.09
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.11
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0.34,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0.01,
            "informational": 0.65
          },
          "confidence": 0.53
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.03,
            "independently_established": 0.12,
            "no_sensitive_action": 0.67,
            "sender_supplied": 0.18
          },
          "confidence": 0.57
        }
      },
      "usage": {
        "input_tokens": 4040,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "d16526a36fe46166a242d5c236933c5ff4930471ff0c6b5f1a69a1df11139d56",
    "capturedAt": "2026-09-20T23:45:39.299Z",
    "elapsedMs": 130.31845799999428,
    "successfulAttemptElapsedMs": 128.39145900000585,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.01,
            "NONE": 0.09,
            "body:0": 0.76,
            "subject:0": 0.14
          },
          "confidence": 0.67
        }
      },
      "usage": {
        "input_tokens": 1797,
        "output_tokens": 59
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 325.1310419999936,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence",
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
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 1559,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-319",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:38.975Z",
    "offsetMs": 1.214124999998603
  },
  {
    "seq": 1560,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-319",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:39.166Z",
    "offsetMs": 192.65233300000546,
    "elapsedMs": 190.94141599998693,
    "outcome": "success"
  },
  {
    "seq": 1561,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-319",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:39.170Z",
    "offsetMs": 195.87437499999942
  },
  {
    "seq": 1562,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-319",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:39.299Z",
    "offsetMs": 324.8958330000023,
    "elapsedMs": 128.39145900000585,
    "outcome": "success"
  },
  {
    "seq": 1563,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-319",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:39.299Z",
    "offsetMs": 325.20095800000126,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "080979fba80fefaef2693fab0e7298485c692713f2cfa4cf291aaeb9881cd264";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1560},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1562},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1563}} as const;
export const projectionSha256 = "2c1cdb0b0a42f7721dff9f4ad7d558a44eeb18dd8d2c52ce3d452412789e1243";
