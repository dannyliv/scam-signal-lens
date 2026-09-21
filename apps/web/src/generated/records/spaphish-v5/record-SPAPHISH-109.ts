import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-109",
  "inputSha256": "cfaec846559790fbf5ba287b8ecf6304ef690687b59763c959b770f2f9d2be6c",
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
    "requestSha256": "979bff585153605fb2c4fd6ceb64381b047bbff74035d8261b6250d71d7fc5e1",
    "capturedAt": "2026-09-20T23:44:26.498Z",
    "elapsedMs": 175.434874999999,
    "successfulAttemptElapsedMs": 173.64837499999703,
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
          "noul": 0.05
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.93
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
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "informational": 0.99,
            "mixed_or_unclear": 0,
            "active_request": 0.01,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 1,
            "sender_supplied": 0,
            "independently_established": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3604,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "f745bbf2ddbc9d06279ff07dcedd0d813a24e19462afb3c8dc7f2a74967528fb",
    "capturedAt": "2026-09-20T23:44:26.648Z",
    "elapsedMs": 146.8577079999959,
    "successfulAttemptElapsedMs": 145.28083299999707,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:19",
          "probabilities": {
            "body:10": 0.04,
            "body:4": 0,
            "body:7": 0,
            "body:14": 0,
            "body:0": 0,
            "body:19": 0.95,
            "body:3": 0,
            "body:6": 0,
            "body:8": 0,
            "body:9": 0,
            "body:15": 0,
            "body:2": 0,
            "body:11": 0,
            "body:13": 0,
            "body:18": 0,
            "body:17": 0,
            "body:5": 0,
            "body:12": 0,
            "NONE": 0,
            "body:1": 0,
            "subject:0": 0,
            "body:16": 0.01
          },
          "confidence": 0.94
        }
      },
      "usage": {
        "input_tokens": 1174,
        "output_tokens": 232
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 325.7182080000057,
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
    "seq": 533,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-109",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:26.323Z",
    "offsetMs": 1.1432920000006561
  },
  {
    "seq": 534,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-109",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:26.497Z",
    "offsetMs": 175.43495800000528,
    "elapsedMs": 173.64837499999703,
    "outcome": "success"
  },
  {
    "seq": 535,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-109",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:26.502Z",
    "offsetMs": 179.58787500000471
  },
  {
    "seq": 536,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-109",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:26.648Z",
    "offsetMs": 325.49645800000144,
    "elapsedMs": 145.28083299999707,
    "outcome": "success"
  },
  {
    "seq": 537,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-109",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:26.648Z",
    "offsetMs": 325.7681250000023,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "5b76b2cc40ef699a6e88456f1f729d2280db2e9c42b4f18cb6c97bddf753ad1f";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":534},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":536},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":537}} as const;
export const projectionSha256 = "8bbe26f163f84bcb359d3c5b9dc7c4ff4347a209c410f5e952afe02f0999ab45";
