import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-128",
  "inputSha256": "d92f721250c042b819877e3508150cb5bcd0ba418c79c4dfa82f253d62d60401",
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
      "end": 24,
      "text": "Notificación de Envío  !"
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 24,
      "end": 31,
      "text": "#OW99Tm"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 18,
      "text": "Correos de México\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 18,
      "end": 44,
      "text": "Seguimiento de su paquete\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 44,
      "end": 45,
      "text": "\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 45,
      "end": 51,
      "text": "Hola,\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 51,
      "end": 52,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 52,
      "end": 129,
      "text": "Su paquete ha sido retenido temporalmente debido a una verificación aduanal.\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 129,
      "end": 130,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 130,
      "end": 221,
      "text": "Para continuar con el proceso de entrega, debe completar un pequeño ajuste de importación.\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 221,
      "end": 222,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 222,
      "end": 233,
      "text": "$40.89 MXN\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 233,
      "end": 234,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 234,
      "end": 303,
      "text": "Haga clic en el siguiente botón para confirmar y liberar su paquete:\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 303,
      "end": 304,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 304,
      "end": 320,
      "text": "Confirmar envío\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 320,
      "end": 321,
      "text": "\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 321,
      "end": 377,
      "text": "Una vez confirmado, su envío se procesará de inmediato.\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 377,
      "end": 378,
      "text": "\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 378,
      "end": 406,
      "text": "Gracias por su preferencia.\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 406,
      "end": 407,
      "text": "\n"
    },
    {
      "id": "body:19",
      "source": "body",
      "start": 407,
      "end": 420,
      "text": "Atentamente,\n"
    },
    {
      "id": "body:20",
      "source": "body",
      "start": 420,
      "end": 438,
      "text": "Correos de México\n"
    },
    {
      "id": "body:21",
      "source": "body",
      "start": 438,
      "end": 439,
      "text": "\n"
    },
    {
      "id": "body:22",
      "source": "body",
      "start": 439,
      "end": 465,
      "text": "© 2025 Correos de México. "
    },
    {
      "id": "body:23",
      "source": "body",
      "start": 465,
      "end": 496,
      "text": "Todos los derechos reservados.\n"
    },
    {
      "id": "body:24",
      "source": "body",
      "start": 496,
      "end": 539,
      "text": "Este mensaje fue generado automáticamente. "
    },
    {
      "id": "body:25",
      "source": "body",
      "start": 539,
      "end": 565,
      "text": "Por favor, no lo responda."
    }
  ],
  "passA": {
    "requestSha256": "08bfab4368b08cfe9c109fd445b5bbe390588271c8ebc291ac4447a17a79449e",
    "capturedAt": "2026-09-20T23:44:32.030Z",
    "elapsedMs": 122.94437499999913,
    "successfulAttemptElapsedMs": 121.5948750000025,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.61
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.96
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.06
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.67
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.94
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.44
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.64
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
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "no_sensitive_action": 0.01,
            "sender_supplied": 0.99
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 3594,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "39c41b4c6d265a881735dde0d63857f48f0cd24b1eb902c52459a9f6e7beae8b",
    "capturedAt": "2026-09-21T00:57:19.295Z",
    "elapsedMs": 139.75137499999983,
    "successfulAttemptElapsedMs": 138.01050000000032,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:20": 0,
            "body:19": 0,
            "NONE": 0.37,
            "subject:1": 0,
            "body:3": 0,
            "body:21": 0,
            "body:16": 0,
            "body:6": 0,
            "body:7": 0.28,
            "body:1": 0,
            "body:4": 0,
            "body:24": 0,
            "body:8": 0,
            "body:14": 0,
            "body:15": 0,
            "body:13": 0.21000000000000002,
            "body:18": 0,
            "body:25": 0,
            "body:10": 0,
            "body:23": 0,
            "body:0": 0,
            "body:11": 0.05,
            "body:22": 0,
            "body:12": 0,
            "body:2": 0,
            "body:5": 0,
            "subject:0": 0,
            "body:17": 0,
            "body:9": 0.08
          },
          "confidence": 0.33
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "body:20": 0,
            "body:19": 0,
            "NONE": 0,
            "subject:1": 0,
            "body:6": 0,
            "body:21": 0,
            "body:16": 0,
            "body:4": 0,
            "body:1": 0,
            "body:24": 0,
            "body:7": 0.75,
            "body:3": 0,
            "body:13": 0.02,
            "body:14": 0,
            "body:15": 0,
            "body:8": 0,
            "body:18": 0,
            "body:25": 0,
            "body:10": 0,
            "body:0": 0,
            "body:12": 0,
            "body:11": 0.01,
            "body:22": 0,
            "body:23": 0,
            "body:2": 0,
            "body:5": 0,
            "body:17": 0,
            "subject:0": 0,
            "body:9": 0.22
          },
          "confidence": 0.73
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "body:20": 0,
            "body:24": 0,
            "NONE": 0.07,
            "subject:1": 0,
            "body:3": 0,
            "body:21": 0,
            "body:16": 0,
            "body:6": 0,
            "body:1": 0,
            "body:7": 0.35000000000000003,
            "body:19": 0,
            "body:4": 0,
            "body:13": 0.02,
            "body:14": 0,
            "body:15": 0.19,
            "body:8": 0,
            "body:18": 0,
            "body:25": 0,
            "body:12": 0,
            "body:0": 0,
            "body:23": 0,
            "body:11": 0.15,
            "body:22": 0,
            "body:10": 0,
            "body:2": 0,
            "body:5": 0.22,
            "body:17": 0,
            "subject:0": 0,
            "body:9": 0
          },
          "confidence": 0.31
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:20": 0.2,
            "body:19": 0,
            "NONE": 0.02,
            "subject:1": 0,
            "body:3": 0,
            "body:21": 0,
            "body:16": 0,
            "body:4": 0,
            "body:7": 0.04,
            "body:24": 0,
            "body:1": 0,
            "body:6": 0,
            "body:13": 0,
            "body:14": 0,
            "body:15": 0,
            "body:8": 0,
            "body:18": 0,
            "body:25": 0,
            "body:12": 0,
            "body:0": 0.52,
            "body:10": 0,
            "body:11": 0.01,
            "body:22": 0.03,
            "body:23": 0,
            "body:2": 0,
            "body:5": 0.17,
            "body:17": 0,
            "subject:0": 0,
            "body:9": 0
          },
          "confidence": 0.49
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:20": 0,
            "body:19": 0,
            "NONE": 0.5,
            "subject:1": 0,
            "body:4": 0,
            "body:21": 0,
            "body:16": 0,
            "body:24": 0.01,
            "body:1": 0,
            "body:3": 0,
            "body:6": 0,
            "body:7": 0.01,
            "body:13": 0.01,
            "body:14": 0,
            "body:15": 0.01,
            "body:8": 0,
            "body:18": 0,
            "body:25": 0.43,
            "body:12": 0,
            "body:23": 0,
            "body:0": 0,
            "body:11": 0.03,
            "body:22": 0,
            "body:10": 0,
            "body:2": 0,
            "body:5": 0,
            "subject:0": 0,
            "body:17": 0,
            "body:9": 0
          },
          "confidence": 0.47
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "body:20": 0,
            "body:24": 0,
            "NONE": 0.22,
            "subject:1": 0,
            "body:3": 0,
            "body:21": 0,
            "body:16": 0,
            "body:19": 0,
            "body:1": 0,
            "body:7": 0.5700000000000001,
            "body:4": 0,
            "body:6": 0,
            "body:8": 0,
            "body:14": 0,
            "body:15": 0,
            "body:13": 0.01,
            "body:18": 0,
            "body:25": 0,
            "body:10": 0,
            "body:0": 0,
            "body:12": 0,
            "body:11": 0,
            "body:22": 0,
            "body:23": 0,
            "body:2": 0,
            "body:5": 0,
            "subject:0": 0,
            "body:17": 0,
            "body:9": 0.19
          },
          "confidence": 0.55
        }
      },
      "usage": {
        "input_tokens": 5221,
        "output_tokens": 1784
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 438.1602920000005,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "low_confidence",
        "segmentId": null
      },
      "payment_request": {
        "status": "selected",
        "segmentId": "body:7"
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "low_confidence",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "low_confidence",
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 627,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-128",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:31.908Z",
    "offsetMs": 0.8478340000001481
  },
  {
    "seq": 628,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-128",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:32.030Z",
    "offsetMs": 122.94629200000054,
    "elapsedMs": 121.5948750000025,
    "outcome": "success"
  },
  {
    "seq": 629,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-128",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:32.032Z",
    "offsetMs": 125.67058399999951
  },
  {
    "seq": 630,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-128",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:32.204Z",
    "offsetMs": 296.86845899999753,
    "elapsedMs": 170.63812499999767,
    "outcome": "success"
  },
  {
    "seq": 631,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-128",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:32.204Z",
    "offsetMs": 297.07337499999994,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2555,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-128",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:19.157Z",
    "offsetMs": 2.125082999999904
  },
  {
    "seq": 2556,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-128",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:19.295Z",
    "offsetMs": 140.57279199999994,
    "elapsedMs": 138.01050000000032,
    "outcome": "success"
  },
  {
    "seq": 2557,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-128",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:19.295Z",
    "offsetMs": 140.99191700000029,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "e197c9bcac379dbe5f94b4d9ff95791b3089013fb08709e9e5d8eeb1fbf43ae5";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":628},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2556},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2557}} as const;
export const projectionSha256 = "bdb3b122c6488e5e644bbab2efdd89409f11916979138b6f93226193e344e913";
