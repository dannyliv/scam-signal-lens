import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-481",
  "inputSha256": "0ec5a0d66bc78d88d97f77780e66dd33581dd62b64dea408cae762d519373c89",
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
      "end": 14,
      "text": "QUALITAS S.A. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 14,
      "end": 23,
      "text": "DE C.V.  "
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 23,
      "end": 43,
      "text": "REPORTE: 04232090876"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 267,
      "text": "SEGUROS COBERTURA TOTAL S.A DE C.V LE HACEMOS LLEGAR SU DECLARACIÓN UNIVERSAL DEL ACCIDENTE DUA Adicional nos permitimos anexarles el presente documento \"Folder Digital de Siniestros\", el cual tiene como objetivo: Ser tu guía rápida para la atención de tu siniestro. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 267,
      "end": 301,
      "text": "Aclarar tus dudas mas frecuentes. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 301,
      "end": 522,
      "text": "Poner a su disposición diferentes medios para que nos contacte Consulta los mandamientos del ajustador, aquí Consulta nuestra Guía Rápida, aquí En caso de dudas o comentarios, favor de contactar a su Ejecutivo de Cuenta. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 522,
      "end": 699,
      "text": "LINEA DE ATENCIÓN TELEFÓNICA 01 800 999 0000 Document La información y/o archivos en o adjuntos a este correo electrónico es/son confidencial(es) y están legalmente protegidos. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 699,
      "end": 811,
      "text": "Está dirigida únicamente al  destinatario y nadie más está autorizado a tener acceso a este correo electrónico. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 811,
      "end": 1008,
      "text": "Si usted no es el destinatario a quien está dirigido, le está prohibido y es ilícito el copiar, usar, distribuir, o tomar cualquier acción en relación con el contenido de este  correo electrónico. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 1008,
      "end": 1122,
      "text": "Ponemos a su disposición nuestro aviso de privacidad en: https://www.coberturatotal.mx/web/ctl/aviso-de-privacidad"
    }
  ],
  "passA": {
    "requestSha256": "667af73ef4477f202a1e910b2d06fd60a302fac6c300699da4463d8e99d33be2",
    "capturedAt": "2026-09-20T23:46:33.352Z",
    "elapsedMs": 179.9393750000163,
    "successfulAttemptElapsedMs": 178.23379200001364,
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
          "noul": 0.05
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.88
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.1
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
          "noul": 0.18
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 0.18,
            "informational": 0.81,
            "mixed_or_unclear": 0.01
          },
          "confidence": 0.75
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.86,
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "sender_supplied": 0.13
          },
          "confidence": 0.81
        }
      },
      "usage": {
        "input_tokens": 3745,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "adc2c4f21a168ba099bb6606b223ae374f39207c5cde94a89febd69d37672ed0",
    "capturedAt": "2026-09-20T23:46:33.469Z",
    "elapsedMs": 116.37770800001454,
    "successfulAttemptElapsedMs": 114.48125000001164,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:6": 0.01,
            "body:1": 0,
            "body:3": 0.06,
            "body:5": 0.01,
            "body:2": 0.54,
            "NONE": 0.05,
            "subject:1": 0.01,
            "subject:2": 0,
            "body:4": 0.01,
            "body:0": 0.3,
            "subject:0": 0.01
          },
          "confidence": 0.5
        }
      },
      "usage": {
        "input_tokens": 1306,
        "output_tokens": 122
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 297.9728330000071,
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
    "seq": 2363,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-481",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:33.173Z",
    "offsetMs": 1.2145000000018626
  },
  {
    "seq": 2364,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-481",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:33.351Z",
    "offsetMs": 179.9393750000163,
    "elapsedMs": 178.23379200001364,
    "outcome": "success"
  },
  {
    "seq": 2365,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-481",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:33.354Z",
    "offsetMs": 182.6959579999966
  },
  {
    "seq": 2366,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-481",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:33.469Z",
    "offsetMs": 297.69812499999534,
    "elapsedMs": 114.48125000001164,
    "outcome": "success"
  },
  {
    "seq": 2367,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-481",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:33.469Z",
    "offsetMs": 298.0613749999902,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "b09bd1eabfd74a382e64d4688557c884446eb69a347904e82d4adc75de02609f";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2364},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2366},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2367}} as const;
export const projectionSha256 = "c7950ef67d6a3644e6ff073eb4757ce9c1a8445666d2e7c7e1ebc29ad7acf0dc";
