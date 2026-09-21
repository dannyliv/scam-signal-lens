import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-052",
  "inputSha256": "1cb01389620cb619dec7f8493107bedcb5d6edcf6334677efe0ac25115d0e619",
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
      "end": 8,
      "text": "Maestria"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 39,
      "text": "Mateo, mira... donde trabajab Pepe....\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 39,
      "end": 40,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 40,
      "end": 111,
      "text": "¿Sabías que en la Unidad del CIETEX en Norvia tenemos una maestría que\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 111,
      "end": 166,
      "text": "pertenece al Sistema Nacional de Posgrado Tecnológico? "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 166,
      "end": 197,
      "text": "¿Que sus objetivos son \"Formar\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 197,
      "end": 271,
      "text": "recursos humanos altamente especializados con conocimientos y habilidades\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 271,
      "end": 340,
      "text": "multidisciplinarias que les permitan analizar, diseñar y desarrollar\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 340,
      "end": 414,
      "text": "dispositivos y sistemas inteligentes para atender problemas científicos y\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 414,
      "end": 434,
      "text": "tecnológicos ...\" ? "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 434,
      "end": 477,
      "text": "¿Que no se cobran colegiaturas o conceptos\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 477,
      "end": 491,
      "text": "equivalentes? "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 491,
      "end": 551,
      "text": "¿Que la Unidad del CIETEX en Norvia es un centro público de\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 551,
      "end": 579,
      "text": "investigación del CONAPTEC? "
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 579,
      "end": 626,
      "text": "¿Que nuestros estudiantes tienen derecho a una\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 626,
      "end": 679,
      "text": "beca de posgrado, consistente en un apoyo económico? "
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 679,
      "end": 702,
      "text": "y ¿Que la convocatoria\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 702,
      "end": 760,
      "text": "para ingresar en agosto de 2023 cierra a finales de mayo? "
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 760,
      "end": 775,
      "text": "Conéctate y te\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 775,
      "end": 788,
      "text": "contamos más."
    }
  ],
  "passA": {
    "requestSha256": "a531fe759af2af42dbc4961f232a0b24179569a83334ba549a91a23946ec591b",
    "capturedAt": "2026-09-20T23:44:07.539Z",
    "elapsedMs": 166.20120800000223,
    "successfulAttemptElapsedMs": 165.1677920000002,
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
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.42
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.72
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
          "noul": 0.18
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "active_request": 0.87,
            "informational": 0.13,
            "educational_or_quoted": 0
          },
          "confidence": 0.82
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.95,
            "sender_supplied": 0.05
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 3627,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "6b117130b84fffa434fd1a93003e896bb2b499da356e6985df7f2f06062c9eae",
    "capturedAt": "2026-09-20T23:44:07.705Z",
    "elapsedMs": 162.70583299999998,
    "successfulAttemptElapsedMs": 161.08162500000253,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:16",
          "probabilities": {
            "body:6": 0,
            "body:0": 0,
            "body:16": 0.85,
            "body:18": 0,
            "body:8": 0,
            "body:12": 0,
            "body:7": 0,
            "NONE": 0.03,
            "body:5": 0,
            "body:13": 0,
            "body:10": 0,
            "body:17": 0.08,
            "body:1": 0,
            "subject:0": 0,
            "body:9": 0,
            "body:4": 0,
            "body:14": 0,
            "body:2": 0,
            "body:3": 0,
            "body:15": 0.04,
            "body:11": 0
          },
          "confidence": 0.83
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:18": 0.01,
            "body:8": 0.01,
            "body:16": 0.01,
            "body:6": 0,
            "body:0": 0.18,
            "body:12": 0.18,
            "body:7": 0,
            "NONE": 0.02,
            "body:5": 0,
            "body:10": 0,
            "body:13": 0.07,
            "body:17": 0.04,
            "body:1": 0,
            "subject:0": 0,
            "body:9": 0,
            "body:4": 0,
            "body:14": 0,
            "body:2": 0.23,
            "body:3": 0.02,
            "body:15": 0,
            "body:11": 0.23
          },
          "confidence": 0.18
        }
      },
      "usage": {
        "input_tokens": 1914,
        "output_tokens": 440
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 332.74183300000004,
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
        "segmentId": "body:16"
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
    "seq": 252,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-052",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:07.373Z",
    "offsetMs": 0.5947080000005371
  },
  {
    "seq": 253,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-052",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:07.538Z",
    "offsetMs": 166.195208000001,
    "elapsedMs": 165.1677920000002,
    "outcome": "success"
  },
  {
    "seq": 254,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-052",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:07.543Z",
    "offsetMs": 170.507708000001
  },
  {
    "seq": 255,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-052",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:07.704Z",
    "offsetMs": 332.3060409999998,
    "elapsedMs": 161.08162500000253,
    "outcome": "success"
  },
  {
    "seq": 256,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-052",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:07.705Z",
    "offsetMs": 332.8492499999993,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "18153789732f60c02a5a5b837aefc523f7208262063497ae48265e4282f79b4f";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":253},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":255},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":256}} as const;
export const projectionSha256 = "74a9315841812458f11bd95326be9659dce5d3b365b4c17f93228b42eb6b08d7";
