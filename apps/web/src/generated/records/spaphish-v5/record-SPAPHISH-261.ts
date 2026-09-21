import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-261",
  "inputSha256": "d96bf7d525753b5c139b19312790b566cb513fe8061db61d86d6b1d7da1c534f",
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
      "end": 113,
      "text": "Resultado de la evaluación del cuestionario  Factores de Riesgo Psicosociales y Entorno Organizacional  Favorable"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 75,
      "text": "Por medio de la presente, le hacemos envío del resultado del cuestionario:\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 75,
      "end": 76,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 76,
      "end": 347,
      "text": "PARA IDENTIFICAR LOS FACTORES DE RIESGO PSICOSOCIAL Y EVALUAR EL ENTORNO ORGANIZACIONAL EN LOS CENTROS DE TRABAJO, que está en conformidad con la Norma Oficial Mexicana NOM-035-STPS-2018 Factores de riesgo psicosocial en el trabajo-identificación, análisis y prevención.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 347,
      "end": 348,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 348,
      "end": 378,
      "text": "Agradecemos su participación.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 378,
      "end": 379,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 379,
      "end": 437,
      "text": "Para cualquier duda o comentario, quedamos a sus órdenes.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 437,
      "end": 438,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 438,
      "end": 444,
      "text": "Atte. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 444,
      "end": 481,
      "text": "Elena Ríos Guzmán Javier Soto Robles\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 481,
      "end": 482,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 482,
      "end": 669,
      "text": "-- Oficina de Servicios de Laboratorio y Desechos(OSLD) Instituto Nacional de Ciencia Estelar y Microelectrónica (CIETEC) Tel: 222 589 77 00 Ext: 3025, correo electrónico: osld@MyOwnp.org"
    }
  ],
  "passA": {
    "requestSha256": "f0b6ff1dfd44c19023cfe830d9fa5fc51c4b76cf98fcb1e9e9874279f6d39521",
    "capturedAt": "2026-09-20T23:45:19.077Z",
    "elapsedMs": 176.747457999998,
    "successfulAttemptElapsedMs": 175.10733400000026,
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
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.88
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.11
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 1,
            "educational_or_quoted": 0,
            "active_request": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "sender_supplied": 0.04,
            "no_sensitive_action": 0.96
          },
          "confidence": 0.94
        }
      },
      "usage": {
        "input_tokens": 3667,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "3a08fe49055d1fe24c0d5e5fb6daecfccda68a661a73eb4f1c073f3a06936389",
    "capturedAt": "2026-09-20T23:45:19.241Z",
    "elapsedMs": 163.15754199998628,
    "successfulAttemptElapsedMs": 161.99120800000674,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:11",
          "probabilities": {
            "body:11": 0.79,
            "body:9": 0.01,
            "NONE": 0.06,
            "body:0": 0.01,
            "body:1": 0,
            "body:8": 0.02,
            "body:7": 0,
            "body:5": 0,
            "subject:0": 0.01,
            "body:2": 0.09,
            "body:10": 0,
            "body:4": 0,
            "body:6": 0.01,
            "body:3": 0
          },
          "confidence": 0.77
        }
      },
      "usage": {
        "input_tokens": 1185,
        "output_tokens": 152
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 341.3134579999896,
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
        "status": "selected",
        "segmentId": "body:11"
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
    "seq": 1278,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-261",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:18.901Z",
    "offsetMs": 1.1409579999890411
  },
  {
    "seq": 1279,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-261",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:19.076Z",
    "offsetMs": 176.74970799998846,
    "elapsedMs": 175.10733400000026,
    "outcome": "success"
  },
  {
    "seq": 1280,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-261",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:19.078Z",
    "offsetMs": 178.6722909999953
  },
  {
    "seq": 1281,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-261",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:19.241Z",
    "offsetMs": 341.0985409999994,
    "elapsedMs": 161.99120800000674,
    "outcome": "success"
  },
  {
    "seq": 1282,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-261",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:19.241Z",
    "offsetMs": 341.3692499999888,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "5d231eeb1db896b1f50edda33a5a7afad1b0d2e28bc116f1c99ccf6f894f8e59";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1279},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1281},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1282}} as const;
export const projectionSha256 = "aedc28d5c4531b377f8b1507d9a495566ae603849e9e7bad1df77e0d1247e3d2";
