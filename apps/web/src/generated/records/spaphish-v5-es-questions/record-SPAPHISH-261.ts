import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-261",
  "inputSha256": "d96bf7d525753b5c139b19312790b566cb513fe8061db61d86d6b1d7da1c534f",
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
    "requestSha256": "6d1c95c5cc5cdcfb1e2acbaa1424a1f14352583112907354ae0ee5453afff60e",
    "capturedAt": "2026-09-22T03:53:23.829Z",
    "elapsedMs": 668.0693120000069,
    "successfulAttemptElapsedMs": 666.7782149999985,
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
          "noul": 0.91
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.14
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0,
            "active_request": 0,
            "educational_or_quoted": 0,
            "informational": 1
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.96,
            "sender_supplied": 0.04,
            "independently_established": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.94
        }
      },
      "usage": {
        "input_tokens": 5117,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "0cc6a9a3de510f987d92e58b063b091dcd30ec99389e31ad544190cdaffb9537",
    "capturedAt": "2026-09-22T03:53:24.358Z",
    "elapsedMs": 527.4456750000245,
    "successfulAttemptElapsedMs": 525.7567050000071,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:11",
          "probabilities": {
            "body:7": 0,
            "body:0": 0.04,
            "body:5": 0,
            "body:1": 0,
            "body:11": 0.78,
            "body:3": 0,
            "body:10": 0,
            "body:6": 0.04,
            "subject:0": 0.01,
            "body:8": 0.03,
            "body:4": 0,
            "body:2": 0.01,
            "body:9": 0.01,
            "NONE": 0.08
          },
          "confidence": 0.75
        }
      },
      "usage": {
        "input_tokens": 1285,
        "output_tokens": 152
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1197.644840999972,
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
    "seq": 1274,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-261",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:23.161Z",
    "offsetMs": 0.706609999993816
  },
  {
    "seq": 1275,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-261",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:23.829Z",
    "offsetMs": 668.0678450000123,
    "elapsedMs": 666.7782149999985,
    "outcome": "success"
  },
  {
    "seq": 1276,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-261",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:23.831Z",
    "offsetMs": 670.8879510000115
  },
  {
    "seq": 1277,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-261",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:24.358Z",
    "offsetMs": 1197.405328999972,
    "elapsedMs": 525.7567050000071,
    "outcome": "success"
  },
  {
    "seq": 1278,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-261",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:53:24.358Z",
    "offsetMs": 1197.6964499999885,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7ff78a0861af35e12679300ac45189d7879bd0b7bcf6af8e0958a9c8a1fda294";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1275},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1277},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1278}} as const;
export const projectionSha256 = "2634fbdf6efef47358f03041093b1ce8a52d7d3c4a5f927fbf114d5b982c2502";
