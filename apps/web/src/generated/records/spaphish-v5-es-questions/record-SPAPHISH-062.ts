import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-062",
  "inputSha256": "1912a5d87783b4faabc8b6127e027f193de7e04694a357ff4149b31979171224",
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
      "end": 32,
      "text": "Aviso de nueva sesión en Firefox"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 272,
      "text": "Banco del Milenio Hola María Fernanda Robles: Detectamos un inicio de sesión en un nuevo dispositivo Inicio de sesión en: Firefox Fecha: 15/11/2024 Hora: 10:30:45 Si no reconoces este inicio de sesión, comunicate cuanto antes a la Línea Banco del Milenio al 55 8765 4321. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 272,
      "end": 423,
      "text": "Recuerda siempre tomar en cuenta las siguiente recomendaciones de seguridad: Identifica el candado de seguridad en el sitio oficial Banco del Milenio. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 423,
      "end": 517,
      "text": "Evita acceder a sitios web o correos electrónicos que no reconozcas o que parezcan inseguros. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 517,
      "end": 618,
      "text": "Ten cuidado al abrir archivos adjuntos bajados de internet o supuestamente provenientes de tu banco. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 618,
      "end": 737,
      "text": "Instala un antivirus que te proteja de la descarga involuntario de archivos que puedan poner tu información en riesgo. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 737,
      "end": 746,
      "text": "Saludos. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 746,
      "end": 867,
      "text": "Equipo Banco del Milenio Usa la app Banco del Milenio Buscar una Sucursal Siguenos en: Este correo no admite respuestas. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 867,
      "end": 964,
      "text": "Banco del Milenio de México, S.A., Institución de Banca y Crédito, Grupo Financiero del Milenio. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 964,
      "end": 1071,
      "text": "Avenida de las Galaxias 99, colonia Cosmos, código postal 01010, alcaldía de los Héroes, Ciudad de Sueños. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 1071,
      "end": 1181,
      "text": "El Aviso de Privacidad Integral actualizado está en cualquiera de nuestras oficinas y en www.bancomilenio.mx ."
    }
  ],
  "passA": {
    "requestSha256": "c9aa97234cdd60c70ecdd15e9105cac5cc970807935d1e32a0cdc317d5f75d4b",
    "capturedAt": "2026-09-22T03:49:26.491Z",
    "elapsedMs": 720.3101549999992,
    "successfulAttemptElapsedMs": 719.3448849999986,
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
          "noul": 0.07
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
          "noul": 0.82
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.96
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
          "noul": 0.67
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0.01,
            "active_request": 0.73,
            "educational_or_quoted": 0,
            "informational": 0.26
          },
          "confidence": 0.65
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.5700000000000001,
            "mixed_or_unknown": 0,
            "sender_supplied": 0.42,
            "independently_established": 0.01
          },
          "confidence": 0.41
        }
      },
      "usage": {
        "input_tokens": 5210,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "9bd8c6f1cb59ff8d1afb6d51e60ea9c2997d351bcff9fe131aa6e815f03f8430",
    "capturedAt": "2026-09-22T03:49:27.023Z",
    "elapsedMs": 530.129826000004,
    "successfulAttemptElapsedMs": 529.1812030000001,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0,
            "body:9": 0,
            "body:7": 0,
            "body:6": 0,
            "body:3": 0,
            "body:5": 0,
            "body:8": 0,
            "body:4": 0,
            "body:0": 1,
            "NONE": 0,
            "body:2": 0,
            "subject:0": 0
          },
          "confidence": 0.99
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0,
            "body:9": 0,
            "body:7": 0.09,
            "body:6": 0.25,
            "body:3": 0,
            "body:5": 0,
            "body:2": 0,
            "body:4": 0,
            "body:0": 0.65,
            "NONE": 0.01,
            "body:8": 0,
            "subject:0": 0
          },
          "confidence": 0.61
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.01,
            "body:9": 0.01,
            "body:7": 0,
            "body:6": 0.25,
            "body:3": 0,
            "body:5": 0,
            "body:8": 0,
            "body:4": 0,
            "body:0": 0.72,
            "NONE": 0.01,
            "body:2": 0,
            "subject:0": 0
          },
          "confidence": 0.69
        }
      },
      "usage": {
        "input_tokens": 3112,
        "output_tokens": 390
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1252.67811600001,
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
        "status": "selected",
        "segmentId": "body:0"
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
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 301,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-062",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:25.771Z",
    "offsetMs": 0.6343900000065332
  },
  {
    "seq": 302,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-062",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:26.491Z",
    "offsetMs": 720.3114090000017,
    "elapsedMs": 719.3448849999986,
    "outcome": "success"
  },
  {
    "seq": 303,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-062",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:26.493Z",
    "offsetMs": 722.6994530000084
  },
  {
    "seq": 304,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-062",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:27.023Z",
    "offsetMs": 1252.2804520000063,
    "elapsedMs": 529.1812030000001,
    "outcome": "success"
  },
  {
    "seq": 305,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-062",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:27.023Z",
    "offsetMs": 1252.7274060000054,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "e592ab68aba2017599460792bc3944c0133950c4eeb1536d65d4f994c6062187";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":302},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":304},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":305}} as const;
export const projectionSha256 = "a9f5f508cbacffaf8b7644c48c6d2b4e697673b60e56a1c91cd0a6d212f37907";
