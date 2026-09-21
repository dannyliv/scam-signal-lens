import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-431",
  "inputSha256": "d4dda4449dcf4027b1c1ced56bcc0a66568a403855e9d90a75b6286ed11d22e9",
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
    "requestSha256": "07fb96451ce8ed0820bf86acb02a3dee63343018deb9dc0852a2bdd6edc8c7a7",
    "capturedAt": "2026-09-20T23:46:16.689Z",
    "elapsedMs": 161.28375000000233,
    "successfulAttemptElapsedMs": 158.95904200000223,
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
          "noul": 0.04
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.07
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
          "noul": 0.7
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
            "mixed_or_unclear": 0.01,
            "active_request": 0.92,
            "informational": 0.07,
            "educational_or_quoted": 0
          },
          "confidence": 0.89
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.06,
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.9299999999999999,
            "independently_established": 0
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 3877,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "0edc84d3176b34fdb9ddbc6fb14acc46e5c8bc3e681e11e2b83235406a158592",
    "capturedAt": "2026-09-20T23:46:16.942Z",
    "elapsedMs": 250.6617499999993,
    "successfulAttemptElapsedMs": 247.9986659999995,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:8": 0.01,
            "body:7": 0.01,
            "body:9": 0,
            "body:0": 0,
            "body:5": 0.07,
            "body:2": 0.01,
            "body:3": 0.05,
            "body:4": 0.22,
            "subject:0": 0,
            "body:11": 0.01,
            "body:6": 0,
            "body:1": 0.06,
            "NONE": 0.36,
            "body:10": 0.2
          },
          "confidence": 0.3
        }
      },
      "usage": {
        "input_tokens": 1614,
        "output_tokens": 149
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 414.88595799999894,
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
    "seq": 2115,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-431",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:16.529Z",
    "offsetMs": 1.7557079999824055
  },
  {
    "seq": 2116,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-431",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:16.689Z",
    "offsetMs": 161.28445800000918,
    "elapsedMs": 158.95904200000223,
    "outcome": "success"
  },
  {
    "seq": 2117,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-431",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:16.693Z",
    "offsetMs": 165.85820799999055
  },
  {
    "seq": 2118,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-431",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:16.942Z",
    "offsetMs": 414.6280829999887,
    "elapsedMs": 247.9986659999995,
    "outcome": "success"
  },
  {
    "seq": 2119,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-431",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:16.942Z",
    "offsetMs": 414.96141600000556,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "192de14fcc0bd963599864e1a25063a01d64792228e175909e6e624ccdb43364";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2116},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2118},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2119}} as const;
export const projectionSha256 = "597d3f173c93b4592266efa31bc5024f433b385de583685877a94dc3ceeba2de";
