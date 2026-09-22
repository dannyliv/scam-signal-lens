import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-431",
  "inputSha256": "d4dda4449dcf4027b1c1ced56bcc0a66568a403855e9d90a75b6286ed11d22e9",
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
      "end": 54,
      "text": "👾MDR EN ACCIÓN: PROTEGE TU EMPRESA CON SEGURIDAD 24/7"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 129,
      "text": "TEXTO DESCRIPTIVO La seguridad no se trata solo de prevenir ataques, sino de detectarlos y responder en el menor tiempo posible. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 129,
      "end": 333,
      "text": "En este evento exclusivo, te presentamos ESET MDR, nuestro servicio de detección y respuesta ante amenazas 24/7, que combina IA avanzada y análisis humano experto para proteger tu empresa en tiempo real. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 333,
      "end": 445,
      "text": "Martes 27 de mayo. 14hs (GMT -3) | México 11hs (GMT -6) | Colombia 12hs (UTC-5) Agenda AGENDA ✅ ¿Quiénes somos? "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 445,
      "end": 678,
      "text": "Conoce cómo ESET acompaña el progreso de tu empresa ✅ MDR en detalle: Qué es, cómo funciona y por qué es clave en la seguridad actual ✅ Espacio de preguntas y respuestas con nuestros expertos ✅ ¡Sorteo exclusivo para los asistentes! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 678,
      "end": 939,
      "text": "Participa por el sorteo de 1 Gift card de 150 USD y 1 licencia ESET Home Security Premium Quiero participar Mariana Torres Diego Salvatierra Security Intelligence Consultant Héctor Valverde Santiago Melendes Professional Services Sales Leader ESET www.eset.com\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 939,
      "end": 1159,
      "text": " Facebook Twitter Linkedin Youtube Youtube ESET es una empresa pionera en protección antivirus que nació hace más de 35 años con la creación del multipremiado software para la detección de amenazas ESET NOD32 Antivirus. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 1159,
      "end": 1285,
      "text": "Ahora, el objetivo de ESET es garantizar que todos puedan disfrutar de las asombrosas oportunidades que ofrece la tecnología. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 1285,
      "end": 1436,
      "text": "Hoy, nuestras soluciones de seguridad les permiten a las empresas y a los consumidores en más de 180 países sacar el mayor provecho del mundo digital. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 1436,
      "end": 1493,
      "text": "© Copyright 1992-2025 por ESET, LLC y ESET, spol. s.r.o. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 1493,
      "end": 1524,
      "text": "Todos los derechos reservados. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 1524,
      "end": 1604,
      "text": "Doppler Remitente verificado por Doppler ¿Deseas dejar de recibir estos emails? "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 1604,
      "end": 1687,
      "text": "Click aquí ESET Latinoamérica SRL | Avenida Central 452 3 Piso | Villa Norte | 1642"
    }
  ],
  "passA": {
    "requestSha256": "bc07ecef0b6137f634ae2f18c2a74ccfbecb38109cf64a2e399e91d4d01dfeb2",
    "capturedAt": "2026-09-22T03:56:46.501Z",
    "elapsedMs": 630.0729060000158,
    "successfulAttemptElapsedMs": 628.500830999983,
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
          "noul": 0.09
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.16
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.81
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.12,
            "active_request": 0.88,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.83
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.1,
            "no_sensitive_action": 0.89,
            "mixed_or_unknown": 0.01,
            "independently_established": 0
          },
          "confidence": 0.85
        }
      },
      "usage": {
        "input_tokens": 5327,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "58fd34b950bb17edd77e47c349f88b7c5efbfd87c124ed6c0f79d6833ed89167",
    "capturedAt": "2026-09-22T03:56:47.049Z",
    "elapsedMs": 545.5560030000051,
    "successfulAttemptElapsedMs": 544.0352900000289,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:2": 0,
            "body:11": 0.01,
            "body:10": 0.01,
            "body:7": 0,
            "body:8": 0.01,
            "subject:0": 0,
            "body:5": 0.02,
            "body:3": 0.07,
            "body:4": 0.61,
            "body:6": 0,
            "body:9": 0,
            "body:1": 0.06,
            "NONE": 0.21,
            "body:0": 0
          },
          "confidence": 0.57
        }
      },
      "usage": {
        "input_tokens": 1714,
        "output_tokens": 151
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1177.8115969999926,
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
    "seq": 2114,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-431",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:45.872Z",
    "offsetMs": 1.3153799999854527
  },
  {
    "seq": 2115,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-431",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:46.501Z",
    "offsetMs": 630.0718810000108,
    "elapsedMs": 628.500830999983,
    "outcome": "success"
  },
  {
    "seq": 2116,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-431",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:46.504Z",
    "offsetMs": 633.1861599999829
  },
  {
    "seq": 2117,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-431",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:47.049Z",
    "offsetMs": 1177.599132000003,
    "elapsedMs": 544.0352900000289,
    "outcome": "success"
  },
  {
    "seq": 2118,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-431",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:47.049Z",
    "offsetMs": 1177.8694440000108,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "182e138ae6cd2738e5bd60cd43631cceda3ca2c762f09286038cb3e9f1f16e95";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2115},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2117},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2118}} as const;
export const projectionSha256 = "8cc40531ae223a7aa90dfeba34fe98a32945b19b01f0acddf8fce43da9241c92";
