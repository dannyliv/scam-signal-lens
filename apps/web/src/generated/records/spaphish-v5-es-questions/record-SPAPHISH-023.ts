import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-023",
  "inputSha256": "e18f3eb31f37826ad1dfb3eed6cfa5c2403a68682392f269ff57b10efd84c0a1",
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
    "requestSha256": "fee6dc103b18966777cd0b1c7794c885b7aa77ac7d8703cdd2edd98d3186edbe",
    "capturedAt": "2026-09-22T03:48:37.876Z",
    "elapsedMs": 686.3032559999992,
    "successfulAttemptElapsedMs": 685.6113079999996,
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
          "noul": 0.08
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
          "noul": 0.17
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.93
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
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.14
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.07
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "active_request": 0.87,
            "educational_or_quoted": 0,
            "informational": 0.13
          },
          "confidence": 0.82
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "sender_supplied": 0.09,
            "no_sensitive_action": 0.91
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 5335,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "6a06e1e210da48fae23dc4c1132433ebbbb97fdd0e7a2f489702986522c64975",
    "capturedAt": "2026-09-22T03:48:38.399Z",
    "elapsedMs": 521.7918980000031,
    "successfulAttemptElapsedMs": 520.9486490000018,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:9": 0,
            "body:13": 0,
            "body:6": 0,
            "body:10": 0,
            "body:16": 0.02,
            "body:2": 0.85,
            "body:4": 0,
            "body:0": 0,
            "NONE": 0.02,
            "body:8": 0,
            "subject:0": 0.01,
            "body:12": 0,
            "body:1": 0,
            "body:7": 0,
            "body:11": 0,
            "body:3": 0,
            "body:14": 0,
            "body:5": 0,
            "body:15": 0.1
          },
          "confidence": 0.83
        }
      },
      "usage": {
        "input_tokens": 1791,
        "output_tokens": 201
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1210.3755750000018,
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
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-023",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:37.189Z",
    "offsetMs": 0.41010800000003655
  },
  {
    "seq": 110,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-023",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:37.875Z",
    "offsetMs": 686.3017370000016,
    "elapsedMs": 685.6113079999996,
    "outcome": "success"
  },
  {
    "seq": 111,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-023",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:37.878Z",
    "offsetMs": 688.7230400000008
  },
  {
    "seq": 112,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-023",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:38.399Z",
    "offsetMs": 1210.1407940000026,
    "elapsedMs": 520.9486490000018,
    "outcome": "success"
  },
  {
    "seq": 113,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-023",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:48:38.399Z",
    "offsetMs": 1210.425341000002,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7f0a09e3fb36f1d90c84e4308bd2eb5ed92e0da756d4fcadabc09572c9c82eff";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":110},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":112},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":113}} as const;
export const projectionSha256 = "28171e23cea4121eece17a97bb8dd5a59ad7cb7b0178e5c2611553fe5e7f4301";
