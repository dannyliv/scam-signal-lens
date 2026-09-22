import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-481",
  "inputSha256": "0ec5a0d66bc78d88d97f77780e66dd33581dd62b64dea408cae762d519373c89",
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
    "requestSha256": "5bdf9ad70b72ecd0a89b0789e9675a7cba4ce76a28346152a6d3125d376c7b46",
    "capturedAt": "2026-09-22T03:57:46.104Z",
    "elapsedMs": 664.8645569999935,
    "successfulAttemptElapsedMs": 663.3352650000015,
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
          "noul": 0.92
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
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0.01,
            "active_request": 0.16,
            "informational": 0.83
          },
          "confidence": 0.77
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.88,
            "sender_supplied": 0.12,
            "independently_established": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.83
        }
      },
      "usage": {
        "input_tokens": 5195,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "563a40eabaea09742b51eff51078b5e1dea79173e88b098afd6fb385043b3191",
    "capturedAt": "2026-09-22T03:57:46.636Z",
    "elapsedMs": 529.5832709999522,
    "successfulAttemptElapsedMs": 527.8923850000137,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "NONE": 0.03,
            "subject:2": 0,
            "body:1": 0,
            "body:0": 0.4,
            "body:3": 0.02,
            "subject:1": 0,
            "body:4": 0,
            "body:5": 0,
            "subject:0": 0.01,
            "body:2": 0.53,
            "body:6": 0
          },
          "confidence": 0.47
        }
      },
      "usage": {
        "input_tokens": 1406,
        "output_tokens": 122
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1197.3618400000269,
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
    "seq": 2362,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-481",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:45.440Z",
    "offsetMs": 1.3006049999967217
  },
  {
    "seq": 2363,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-481",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:46.103Z",
    "offsetMs": 664.8645409999881,
    "elapsedMs": 663.3352650000015,
    "outcome": "success"
  },
  {
    "seq": 2364,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-481",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:46.107Z",
    "offsetMs": 668.9570390000008
  },
  {
    "seq": 2365,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-481",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:46.635Z",
    "offsetMs": 1197.1448790000286,
    "elapsedMs": 527.8923850000137,
    "outcome": "success"
  },
  {
    "seq": 2366,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-481",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:46.636Z",
    "offsetMs": 1197.4249269999564,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "029ddc415404c1387c7e1fe8197804dd417594324bee3a6ee9efcb6c458932b8";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2363},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2365},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2366}} as const;
export const projectionSha256 = "25079cae4e2932d5cb910d7b9c34a4c5d6e111f352948b68e602de6b1f787137";
