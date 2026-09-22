import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-433",
  "inputSha256": "e86ce02afdd4145001c4bd25bf20d969ccccbb2f571f83329d65ed11b2148288",
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
      "end": 21,
      "text": "SUSPENSIÓN DE LABORES"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 9,
      "text": "CIRCULAR\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 9,
      "end": 10,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 10,
      "end": 14,
      "text": "No. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 14,
      "end": 27,
      "text": "DAS/011/2025\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 27,
      "end": 28,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 28,
      "end": 50,
      "text": "SEPTIEMBRE 11 DE 2025\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 50,
      "end": 51,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 51,
      "end": 75,
      "text": "_A TODA LA COMUNIDAD___\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 75,
      "end": 76,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 76,
      "end": 138,
      "text": "ME PERMITO COMUNICARLES QUE CON MOTIVO DEL ANIVERSARIO DE LA \n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 138,
      "end": 210,
      "text": "INDEPENDENCIA DE MÉXICO, EL MIÉRCOLES 16 DE SEPTIEMBREDEL AÑO EN CURSO \n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 210,
      "end": 283,
      "text": "SE SUSPENDEN LABORES, REANUDANDO ACTIVIDADES EL JUEVES 17 DEL MISMO MES \n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 283,
      "end": 290,
      "text": "Y AÑO.\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 290,
      "end": 291,
      "text": "\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 291,
      "end": 325,
      "text": "ESE DÍA NO HABRÁ SERVICIO MÉDICO.\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 325,
      "end": 326,
      "text": "\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 326,
      "end": 327,
      "text": "\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 327,
      "end": 340,
      "text": "ATENTAMENTE.\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 340,
      "end": 341,
      "text": "\n"
    },
    {
      "id": "body:19",
      "source": "body",
      "start": 341,
      "end": 346,
      "text": "LIC. "
    },
    {
      "id": "body:20",
      "source": "body",
      "start": 346,
      "end": 360,
      "text": "ÁNGEL BARRERA\n"
    },
    {
      "id": "body:21",
      "source": "body",
      "start": 360,
      "end": 361,
      "text": "\n"
    },
    {
      "id": "body:22",
      "source": "body",
      "start": 361,
      "end": 399,
      "text": "DIRECTOR DE ADMINISTRACIÓN Y FINANZAS\n"
    },
    {
      "id": "body:23",
      "source": "body",
      "start": 399,
      "end": 400,
      "text": "\n"
    }
  ],
  "passA": {
    "requestSha256": "ec346a46f068bcca42dba37c4d73c37845296432ee0064754b52e39e7526f808",
    "capturedAt": "2026-09-22T03:56:48.712Z",
    "elapsedMs": 571.6623459999682,
    "successfulAttemptElapsedMs": 570.3024790000054,
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
          "noul": 0.02
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
          "noul": 0.94
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 1,
            "active_request": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "sender_supplied": 0,
            "no_sensitive_action": 1
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 5054,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "4aee63c6858b0718c60b553beed7b797e557d1759e802bd8382d24c072ddba9e",
    "capturedAt": "2026-09-22T03:56:49.230Z",
    "elapsedMs": 517.428750000021,
    "successfulAttemptElapsedMs": 515.9676159999799,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:22",
          "probabilities": {
            "body:6": 0,
            "NONE": 0.04,
            "body:0": 0,
            "body:7": 0,
            "body:17": 0,
            "body:22": 0.95,
            "body:5": 0,
            "body:9": 0,
            "body:15": 0,
            "body:11": 0,
            "body:10": 0,
            "body:14": 0,
            "body:18": 0,
            "body:2": 0,
            "body:1": 0,
            "subject:0": 0,
            "body:4": 0,
            "body:23": 0,
            "body:19": 0.01,
            "body:3": 0,
            "body:8": 0,
            "body:20": 0,
            "body:21": 0,
            "body:12": 0,
            "body:13": 0,
            "body:16": 0
          },
          "confidence": 0.94
        }
      },
      "usage": {
        "input_tokens": 1334,
        "output_tokens": 272
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1090.374484000029,
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
        "segmentId": "body:22"
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
    "seq": 2124,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-433",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:48.141Z",
    "offsetMs": 1.137449000030756
  },
  {
    "seq": 2125,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-433",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:48.712Z",
    "offsetMs": 571.6636780000408,
    "elapsedMs": 570.3024790000054,
    "outcome": "success"
  },
  {
    "seq": 2126,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-433",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:48.714Z",
    "offsetMs": 573.9494910000358
  },
  {
    "seq": 2127,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-433",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:49.230Z",
    "offsetMs": 1090.1834329999983,
    "elapsedMs": 515.9676159999799,
    "outcome": "success"
  },
  {
    "seq": 2128,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-433",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:49.230Z",
    "offsetMs": 1090.4165420000209,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "c3df290c678b7c7d31fb1447e5e4ae66e84fa221da0be5ba2f61ad4fab57f444";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2125},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2127},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2128}} as const;
export const projectionSha256 = "8bbce5821021f4d22152fee999ac93b8848217d000545981209d3aa6dcab3df9";
