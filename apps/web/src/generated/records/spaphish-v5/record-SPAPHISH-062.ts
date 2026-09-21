import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-062",
  "inputSha256": "1912a5d87783b4faabc8b6127e027f193de7e04694a357ff4149b31979171224",
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
    "requestSha256": "d8325b6c60ad0f9402a7577c3aa16400b82a269046b65c5f4f674d3325a646bc",
    "capturedAt": "2026-09-20T23:44:10.926Z",
    "elapsedMs": 173.05683399999907,
    "successfulAttemptElapsedMs": 171.4027500000011,
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
          "noul": 0.06
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
          "noul": 0.78
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.08
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.7
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 0.81,
            "mixed_or_unclear": 0.02,
            "informational": 0.17
          },
          "confidence": 0.75
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0.03,
            "sender_supplied": 0.56,
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.4
          },
          "confidence": 0.41
        }
      },
      "usage": {
        "input_tokens": 3760,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "4b26c851ef7e688d7273205e8be0a62bb057a52b2938d8770bf7f025f8164193",
    "capturedAt": "2026-09-20T23:44:11.058Z",
    "elapsedMs": 129.44179099999747,
    "successfulAttemptElapsedMs": 127.30754100000195,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:8": 0,
            "subject:0": 0,
            "body:5": 0,
            "body:9": 0,
            "NONE": 0.01,
            "body:4": 0,
            "body:6": 0,
            "body:0": 0.99,
            "body:2": 0,
            "body:3": 0,
            "body:7": 0,
            "body:1": 0
          },
          "confidence": 0.99
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:8": 0,
            "subject:0": 0,
            "body:5": 0,
            "body:9": 0,
            "NONE": 0.01,
            "body:4": 0,
            "body:6": 0.17,
            "body:0": 0.74,
            "body:2": 0,
            "body:3": 0,
            "body:7": 0.08,
            "body:1": 0
          },
          "confidence": 0.7
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:8": 0,
            "subject:0": 0,
            "body:5": 0,
            "body:9": 0.01,
            "body:6": 0.55,
            "body:4": 0,
            "NONE": 0,
            "body:0": 0.43,
            "body:2": 0,
            "body:7": 0,
            "body:3": 0,
            "body:1": 0.01
          },
          "confidence": 0.5
        }
      },
      "usage": {
        "input_tokens": 2806,
        "output_tokens": 390
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 305.0777080000007,
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
        "status": "low_confidence",
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
    "seq": 301,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-062",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:10.754Z",
    "offsetMs": 1.0681660000009288
  },
  {
    "seq": 302,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-062",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:10.926Z",
    "offsetMs": 173.059874999999,
    "elapsedMs": 171.4027500000011,
    "outcome": "success"
  },
  {
    "seq": 303,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-062",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:10.929Z",
    "offsetMs": 176.46566600000006
  },
  {
    "seq": 304,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-062",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:11.058Z",
    "offsetMs": 304.66770800000086,
    "elapsedMs": 127.30754100000195,
    "outcome": "success"
  },
  {
    "seq": 305,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-062",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:11.058Z",
    "offsetMs": 305.15170800000124,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "94ec056809ae0590f1b0600f292fdca43ab2b73c558b4277283f0b5ae08f696c";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":302},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":304},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":305}} as const;
export const projectionSha256 = "201c86acd56921ede5b4434d495634d5b34c29c8a88920b4192b5148c3355ea4";
