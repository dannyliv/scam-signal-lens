import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-072",
  "inputSha256": "b559a3a566b6f8eaec5946cb21b2bf014cfec7393ccdec1c7952835aab9bafb4",
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
      "end": 25,
      "text": "Jornada de acompañamiento"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 32,
      "text": "Estimado padre/madre de familia\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 32,
      "end": 33,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 33,
      "end": 63,
      "text": "Esperando se encuentren bien.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 63,
      "end": 64,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 64,
      "end": 138,
      "text": "Les recordamos que el día de mañana 20 de septiembre se llevará a cabo la\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 138,
      "end": 213,
      "text": "jornada de acompañamiento docente; por tal motivo se suspenden las clases,\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 213,
      "end": 277,
      "text": "retomando labores el jueves 21 de septiembre en horario normal.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 277,
      "end": 278,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 278,
      "end": 281,
      "text": "--\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 281,
      "end": 282,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 282,
      "end": 290,
      "text": "Saludos\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 290,
      "end": 291,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 291,
      "end": 297,
      "text": "Psic. "
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 297,
      "end": 319,
      "text": "Laura Hernández Prado\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 319,
      "end": 320,
      "text": "\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 320,
      "end": 369,
      "text": "Tutora Preparatoria Colegio Monte Azul de Serania"
    }
  ],
  "passA": {
    "requestSha256": "ca7556c82ac67c11b8deb51639feb2b221c2ca187a599466cc96dc64d0011d2e",
    "capturedAt": "2026-09-20T23:44:14.670Z",
    "elapsedMs": 137.58450000000084,
    "successfulAttemptElapsedMs": 136.56124999999884,
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
          "noul": 0.06
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
            "active_request": 0,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 1,
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "sender_supplied": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3534,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "35696b8fa413d2caf1d0111d075af8035c77cc34e0b6eac2be956195886a0baf",
    "capturedAt": "2026-09-20T23:44:14.899Z",
    "elapsedMs": 226.39379199999894,
    "successfulAttemptElapsedMs": 224.7132079999974,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:15",
          "probabilities": {
            "NONE": 0,
            "body:9": 0,
            "body:14": 0,
            "body:3": 0,
            "body:6": 0,
            "body:10": 0,
            "body:13": 0,
            "body:2": 0,
            "body:11": 0,
            "body:4": 0,
            "subject:0": 0,
            "body:8": 0,
            "body:1": 0,
            "body:7": 0,
            "body:12": 0.01,
            "body:0": 0.04,
            "body:15": 0.95,
            "body:5": 0
          },
          "confidence": 0.94
        }
      },
      "usage": {
        "input_tokens": 976,
        "output_tokens": 192
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 367.06116600000314,
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
        "segmentId": "body:15"
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
    "seq": 351,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-072",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:14.532Z",
    "offsetMs": 0.576708000000508
  },
  {
    "seq": 352,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-072",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:14.669Z",
    "offsetMs": 137.58304100000169,
    "elapsedMs": 136.56124999999884,
    "outcome": "success"
  },
  {
    "seq": 353,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-072",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:14.673Z",
    "offsetMs": 141.23266599999988
  },
  {
    "seq": 354,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-072",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:14.898Z",
    "offsetMs": 366.7228750000031,
    "elapsedMs": 224.7132079999974,
    "outcome": "success"
  },
  {
    "seq": 355,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-072",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:14.899Z",
    "offsetMs": 367.1497909999998,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "30e8a2e0a19dcd3528de213d955e820bf34ac00328cd2b0ef88407d4f25f72b8";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":352},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":354},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":355}} as const;
export const projectionSha256 = "c2fabe7b4be538e285f3016d3db736426ea6e6f1f2c61d385f8b7952ce7f0da8";
