import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-116",
  "inputSha256": "231237dec20c04274f7590a1916ef05ef03282e3e1de868a93f1849daf4dc172",
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
      "end": 51,
      "text": "Se ha activado el reenvío de correos para su cuenta"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 166,
      "text": "Estimado Ricardo López: Se ha activado el reenvío de correos electrónicos a ricardo.lopez@techcorp.com en relación con su solicitud desde una aplicación de terceros. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 166,
      "end": 261,
      "text": "Por favor espere 24 horas para permitir que se complete la propagación del correo electrónico. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 261,
      "end": 361,
      "text": "Nota: Si no realizo esta solicitud, desvincule su cuenta de la dirección de reenvío inmediatamente. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 361,
      "end": 482,
      "text": "Navegue hasta cuentas > configuraciones > conectividad del dispositivo y desactive Conectividad con sitios poco seguros. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 482,
      "end": 606,
      "text": "También puede usar el enlace de desactivación incluido aquí para deshabilitar el reenvío de correo electrónico: Desactivar. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 606,
      "end": 658,
      "text": "Recomendación de revisión de seguridad obligatoria. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 658,
      "end": 951,
      "text": "Atentamente, Soporte para correo electrónico -------------------------------------------------------------------------------- ¿Dónde y cuándo sucedió?: Fecha: 10 noviembre, 2025 Navegador: Chrome Sistema operativo: Windows 11 Ubicación del dispositivo: Ciudad de México, México ¿No fue usted? "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 951,
      "end": 1014,
      "text": "Debería desactivar la dirección de reenvío de manera inmediata."
    }
  ],
  "passA": {
    "requestSha256": "ce14398df747bd48a2dc461a1be5a1b93307186fe209f8d65aa4dd3b30966a70",
    "capturedAt": "2026-09-20T23:44:28.467Z",
    "elapsedMs": 165.64366699999664,
    "successfulAttemptElapsedMs": 164.24637499999517,
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
          "noul": 0.04
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.11
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.87
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.35
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
          "noul": 0.1
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.08
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 0.97,
            "mixed_or_unclear": 0.03,
            "informational": 0
          },
          "confidence": 0.95
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0.01,
            "no_sensitive_action": 0.21,
            "sender_supplied": 0.74,
            "mixed_or_unknown": 0.04
          },
          "confidence": 0.65
        }
      },
      "usage": {
        "input_tokens": 3671,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "15d6b770988f68402ebf78c2f60242579cff5ecb54328be032f47ba3c4afb4a1",
    "capturedAt": "2026-09-20T23:44:28.678Z",
    "elapsedMs": 208.72570799999812,
    "successfulAttemptElapsedMs": 207.4622079999972,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "NONE": 0.08,
            "body:7": 0.72,
            "body:1": 0.01,
            "body:6": 0.02,
            "body:0": 0,
            "subject:0": 0,
            "body:3": 0.01,
            "body:2": 0.14,
            "body:5": 0.01,
            "body:4": 0.01
          },
          "confidence": 0.67
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "NONE": 0.01,
            "body:7": 0,
            "body:1": 0,
            "body:6": 0.94,
            "body:0": 0.02,
            "subject:0": 0,
            "body:3": 0,
            "body:2": 0.01,
            "body:5": 0.02,
            "body:4": 0
          },
          "confidence": 0.93
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.8,
            "body:7": 0.01,
            "body:1": 0.03,
            "body:6": 0,
            "body:0": 0,
            "subject:0": 0,
            "body:3": 0.03,
            "body:2": 0.05,
            "body:5": 0.01,
            "body:4": 0.07
          },
          "confidence": 0.78
        }
      },
      "usage": {
        "input_tokens": 2359,
        "output_tokens": 333
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 376.0653749999983,
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
        "segmentId": "body:7"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:6"
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
    "seq": 568,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-116",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:28.302Z",
    "offsetMs": 0.7817080000022543
  },
  {
    "seq": 569,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-116",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:28.467Z",
    "offsetMs": 165.6454159999994,
    "elapsedMs": 164.24637499999517,
    "outcome": "success"
  },
  {
    "seq": 570,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-116",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:28.469Z",
    "offsetMs": 167.7220410000009
  },
  {
    "seq": 571,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-116",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:28.677Z",
    "offsetMs": 375.6626249999972,
    "elapsedMs": 207.4622079999972,
    "outcome": "success"
  },
  {
    "seq": 572,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-116",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:28.678Z",
    "offsetMs": 376.15566599999875,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "be5110b417079596a4fb94acbdd3a00f76788bfed87c2312f8235c89c626565f";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":569},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":571},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":572}} as const;
export const projectionSha256 = "d1337a3089ed607fa00638c73c338081b7c80885ae6c86fda8869c4a0dd881f3";
