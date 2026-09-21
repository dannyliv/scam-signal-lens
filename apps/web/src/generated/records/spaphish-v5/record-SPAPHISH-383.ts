import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-383",
  "inputSha256": "f431be5d1306847df36712a9390c4cc16ab30a3bff5563e9e5f7272b242e6592",
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
      "end": 64,
      "text": "Memorias Seminario Trastornos del Neurodesarrollo - DIAPOSITIVAS"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 20,
      "text": "Estimado Estudiante\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 20,
      "end": 35,
      "text": "cordial saludo\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 35,
      "end": 36,
      "text": "\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 36,
      "end": 107,
      "text": "envió memorias seminario trastornos del neurodesarrollo - DIAPOSITIVAS\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 107,
      "end": 108,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 108,
      "end": 111,
      "text": "--\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 111,
      "end": 125,
      "text": "Cordialmente,\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 125,
      "end": 126,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 126,
      "end": 140,
      "text": "Julián Corral\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 140,
      "end": 163,
      "text": "Asistente de Dirección\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 163,
      "end": 196,
      "text": "Fundación ProDesarrollo Integral\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 196,
      "end": 217,
      "text": "Pensando en Tu Éxito\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 217,
      "end": 263,
      "text": "WhatsApp 300 405 3377 → WhatsApp 322 880 4412\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 263,
      "end": 301,
      "text": "http://prodesarrollo-integral.example/"
    }
  ],
  "passA": {
    "requestSha256": "2cdd7580411639bf110c5914372328ceca88d39b42ebe7452231940d633debd0",
    "capturedAt": "2026-09-20T23:46:00.797Z",
    "elapsedMs": 106.63533299999835,
    "successfulAttemptElapsedMs": 104.73529199999757,
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
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.85
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.06
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
            "active_request": 0.01,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0.99
          },
          "confidence": 0.98
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.81,
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "sender_supplied": 0.19
          },
          "confidence": 0.74
        }
      },
      "usage": {
        "input_tokens": 3564,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "877705dca9435e03f250c475ffee21f2530d28322836c0bc2e4ffe24b824c8e4",
    "capturedAt": "2026-09-20T23:46:00.960Z",
    "elapsedMs": 160.84995800000615,
    "successfulAttemptElapsedMs": 158.7750420000084,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:9",
          "probabilities": {
            "body:2": 0,
            "body:13": 0,
            "body:3": 0.01,
            "body:12": 0,
            "NONE": 0.09,
            "body:11": 0,
            "body:0": 0.01,
            "body:6": 0,
            "body:9": 0.61,
            "body:10": 0.27,
            "body:1": 0,
            "body:5": 0,
            "body:7": 0,
            "subject:0": 0,
            "body:8": 0.01,
            "body:4": 0
          },
          "confidence": 0.58
        }
      },
      "usage": {
        "input_tokens": 1006,
        "output_tokens": 171
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 270.14145900000585,
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
    "seq": 1878,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-383",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:00.692Z",
    "offsetMs": 1.313416999997571
  },
  {
    "seq": 1879,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-383",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:00.797Z",
    "offsetMs": 106.63395899999887,
    "elapsedMs": 104.73529199999757,
    "outcome": "success"
  },
  {
    "seq": 1880,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-383",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:00.801Z",
    "offsetMs": 110.61595900000248
  },
  {
    "seq": 1881,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-383",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:00.960Z",
    "offsetMs": 269.9782500000001,
    "elapsedMs": 158.7750420000084,
    "outcome": "success"
  },
  {
    "seq": 1882,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-383",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:00.961Z",
    "offsetMs": 270.18920900000376,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0a075b470d4c950082692ba7e3cb6fba3253138bda5edc17d50004feea4d149c";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1879},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1881},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1882}} as const;
export const projectionSha256 = "48105565d487db5a1bba71313a2b9a64c547b045331efd370ca5f4c4b3703709";
