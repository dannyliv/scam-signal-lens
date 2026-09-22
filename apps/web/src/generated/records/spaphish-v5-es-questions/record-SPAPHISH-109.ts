import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-109",
  "inputSha256": "cfaec846559790fbf5ba287b8ecf6304ef690687b59763c959b770f2f9d2be6c",
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
      "end": 52,
      "text": "CIRCULAR CIERRE DE COMEDOR PARA LA TOMA DE ALIMENTOS"
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
      "end": 23,
      "text": "DRH/045/2020\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 23,
      "end": 24,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 24,
      "end": 41,
      "text": "20 DE ENERO 2020\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 41,
      "end": 42,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 42,
      "end": 112,
      "text": "AL PERSONAL QUE ACUDE AL CENTRO DE INVESTIGACIÓN DE MANERA PRESENCIAL\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 112,
      "end": 113,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 113,
      "end": 116,
      "text": "**\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 116,
      "end": 117,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 117,
      "end": 383,
      "text": "Se les informa que a partir del día 21 de enero de 2020 y hasta nuevo aviso, permanecerá cerrado el Área de Alimentos, por tal motivo no podrán utilizarlo para la toma de sus alimentos, esto con la finalidad de reforzar las medidas de seguridad en materia de salud.\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 383,
      "end": 384,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 384,
      "end": 404,
      "text": "Sin más de momento.\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 404,
      "end": 405,
      "text": "\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 405,
      "end": 423,
      "text": "*   ATENTAMENTE *\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 423,
      "end": 424,
      "text": "\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 424,
      "end": 429,
      "text": "LIC. "
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 429,
      "end": 454,
      "text": "ROBERTO CARLOS LUNA DÍAZ\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 454,
      "end": 455,
      "text": "\n"
    },
    {
      "id": "body:19",
      "source": "body",
      "start": 455,
      "end": 481,
      "text": "DIRECTOR DE CAPITAL HUMANO"
    }
  ],
  "passA": {
    "requestSha256": "54883ff7a123579abc4aa11b15158e80b6f7eeaa651021ff46ac69dcae9f0a31",
    "capturedAt": "2026-09-22T03:50:23.224Z",
    "elapsedMs": 626.5973110000195,
    "successfulAttemptElapsedMs": 625.8473300000187,
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
          "noul": 0.08
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.94
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.01
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0,
            "educational_or_quoted": 0,
            "informational": 1,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0,
            "independently_established": 0,
            "mixed_or_unknown": 0,
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
    "requestSha256": "d844852e9d4169b14ef19153c86e2a61cbc6ae3dac3129aa592c17d34b1a49a3",
    "capturedAt": "2026-09-22T03:50:23.778Z",
    "elapsedMs": 553.3879240000097,
    "successfulAttemptElapsedMs": 552.6582110000018,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:19",
          "probabilities": {
            "body:12": 0,
            "NONE": 0.05,
            "body:18": 0,
            "body:17": 0,
            "body:10": 0.05,
            "body:14": 0,
            "body:16": 0.01,
            "body:4": 0,
            "body:13": 0,
            "body:0": 0,
            "body:5": 0,
            "body:1": 0,
            "body:11": 0,
            "body:3": 0,
            "body:6": 0,
            "body:15": 0,
            "subject:0": 0,
            "body:8": 0,
            "body:2": 0,
            "body:9": 0,
            "body:7": 0,
            "body:19": 0.89
          },
          "confidence": 0.87
        }
      },
      "usage": {
        "input_tokens": 1274,
        "output_tokens": 232
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1181.428092999995,
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
        "segmentId": "body:19"
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
    "seq": 528,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-109",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:22.597Z",
    "offsetMs": 0.5301000000035856
  },
  {
    "seq": 529,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-109",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:23.223Z",
    "offsetMs": 626.5979919999954,
    "elapsedMs": 625.8473300000187,
    "outcome": "success"
  },
  {
    "seq": 530,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-109",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:23.225Z",
    "offsetMs": 628.241731999995
  },
  {
    "seq": 531,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-109",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:23.778Z",
    "offsetMs": 1181.1566049999965,
    "elapsedMs": 552.6582110000018,
    "outcome": "success"
  },
  {
    "seq": 532,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-109",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:23.778Z",
    "offsetMs": 1181.5140780000074,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "086212067a6dbf0c06a8e51972d5259151d95f04aea7af4ec8f095936990ecc0";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":529},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":531},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":532}} as const;
export const projectionSha256 = "71f3d28cadfbad7fd41f0c3fa8f390306e599ca93e0d30278337b4391af72985";
