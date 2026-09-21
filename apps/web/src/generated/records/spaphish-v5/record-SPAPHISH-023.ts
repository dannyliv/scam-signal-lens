import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-023",
  "inputSha256": "e18f3eb31f37826ad1dfb3eed6cfa5c2403a68682392f269ff57b10efd84c0a1",
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
      "end": 47,
      "text": "Convocatoria – Premio Nacional de Ciencias 2021"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 53,
      "text": "Estimadas investigadoras y estimados investigadores:\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 53,
      "end": 54,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 54,
      "end": 613,
      "text": "El Gobierno de la Nación, a través de la Dirección de Educación Pública, por conducto del Comité de Reconocimiento del Premio Nacional al Mérito Científico convoca a las instituciones y agrupaciones que integran la lista que de conformidad con lo dispuesto por el artículo 60 de la Ley de Premios, Reconocimientos y Estímulos, que el Comité de Reconocimiento ha formulado y publicado en la página de internet www.gob.mx/educacion,<http://www.gob.mx/educacion, > a que propongan candidatos al Premio Nacional al Mérito Científico, correspondiente al año 2021.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 613,
      "end": 614,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 614,
      "end": 1026,
      "text": "El Premio Nacional al Mérito Científico correspondiente se otorgará a personas físicas, aunque estén domiciliadas fuera del país, que por sus producciones o trabajos docentes, de investigación o de divulgación, hayan contribuido al progreso de la ciencia, de la tecnología y de la innovación, sin que sea necesario que las obras o actos que acrediten su merecimiento, se hayan realizado durante el presente año. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 1026,
      "end": 1086,
      "text": "El Premio se otorgará en cada uno de los siguientes campos:\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 1086,
      "end": 1087,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 1087,
      "end": 1119,
      "text": "Ciencias Básicas y Naturales, y\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 1119,
      "end": 1120,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 1120,
      "end": 1153,
      "text": "Innovación Tecnológica y Diseño.\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 1153,
      "end": 1154,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 1154,
      "end": 1392,
      "text": "La convocatoria completa se encuentra en el siguiente vínculo: https://www.gob.mx/educacion/articulos/convocatoria-al-premio-nacional-de-ciencias-2024 La fecha límite para completar el registro de candidaturas es el 15 de agosto de 2021.\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 1392,
      "end": 1393,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 1393,
      "end": 1412,
      "text": "Saludos cordiales,\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 1412,
      "end": 1413,
      "text": "\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 1413,
      "end": 1478,
      "text": "Sistema Nacional de Becarios (SNB) Avenida de las Luces 456 Col. "
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 1478,
      "end": 1596,
      "text": "Lomas de la Ciencia CP 78901 Ciudad Esmeralda Teléfono: 55 99 88 77 66 Ext. 5010 www.cnbe.gob.mxhttp://www.cnbe.gob.mx"
    }
  ],
  "passA": {
    "requestSha256": "2b8b0178cfd5ab171ca53ea5d2a7d8debd1b35de979220db39cf56be4aa515e9",
    "capturedAt": "2026-09-20T23:43:58.446Z",
    "elapsedMs": 171.41141699999935,
    "successfulAttemptElapsedMs": 170.43462499999987,
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
          "noul": 0.07
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.37
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.91
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.07
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.75,
            "informational": 0.24,
            "mixed_or_unclear": 0.01,
            "educational_or_quoted": 0
          },
          "confidence": 0.67
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.13,
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.87
          },
          "confidence": 0.83
        }
      },
      "usage": {
        "input_tokens": 3885,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "a0472d5f151844729706da5f9fa78daf50686d5e18dac8d25b46975a86ec6bda",
    "capturedAt": "2026-09-20T23:43:58.632Z",
    "elapsedMs": 183.34137499999997,
    "successfulAttemptElapsedMs": 181.79991599999994,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:11",
          "probabilities": {
            "NONE": 0.02,
            "body:3": 0,
            "body:9": 0,
            "body:4": 0,
            "body:13": 0,
            "body:12": 0,
            "body:14": 0,
            "subject:0": 0,
            "body:6": 0,
            "body:2": 0,
            "body:7": 0,
            "body:1": 0,
            "body:15": 0,
            "body:8": 0,
            "body:5": 0,
            "body:11": 0.98,
            "body:10": 0,
            "body:16": 0,
            "body:0": 0
          },
          "confidence": 0.97
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "NONE": 0.01,
            "body:3": 0,
            "body:9": 0,
            "body:14": 0,
            "body:13": 0,
            "body:12": 0,
            "body:4": 0,
            "subject:0": 0,
            "body:6": 0,
            "body:2": 0.92,
            "body:7": 0,
            "body:15": 0.06,
            "body:1": 0,
            "body:8": 0,
            "body:5": 0,
            "body:11": 0,
            "body:10": 0,
            "body:16": 0.01,
            "body:0": 0
          },
          "confidence": 0.91
        }
      },
      "usage": {
        "input_tokens": 2626,
        "output_tokens": 400
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 357.1755000000003,
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
        "status": "selected",
        "segmentId": "body:11"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:2"
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
    "seq": 109,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-023",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:58.275Z",
    "offsetMs": 0.6064580000002024
  },
  {
    "seq": 110,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-023",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:58.446Z",
    "offsetMs": 171.4111670000002,
    "elapsedMs": 170.43462499999987,
    "outcome": "success"
  },
  {
    "seq": 111,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-023",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:58.449Z",
    "offsetMs": 174.40441699999974
  },
  {
    "seq": 112,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-023",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:58.631Z",
    "offsetMs": 356.8727079999999,
    "elapsedMs": 181.79991599999994,
    "outcome": "success"
  },
  {
    "seq": 113,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-023",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:58.632Z",
    "offsetMs": 357.2599170000003,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "e6fc81c070f85d6db16f3ccb075218cb5d98137e0d497cb248ff8d0a4546e472";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":110},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":112},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":113}} as const;
export const projectionSha256 = "9899e9ed1ad56ef80a91c47a63ef866ab072cca33c2ed658089920bb1e643da4";
