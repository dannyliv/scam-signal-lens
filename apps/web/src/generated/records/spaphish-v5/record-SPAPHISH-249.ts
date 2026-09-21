import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-249",
  "inputSha256": "a64f9f706a5f3eb26ed4e3a3337a1dcbe76c0075e4aedbb428b8ca64124ded8d",
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
      "end": 17,
      "text": "LIGA PRESENTACIÓN"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 73,
      "text": "Dirección de Desarrollo Académico DDA le está invitando a una reunión de\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 73,
      "end": 90,
      "text": "Zoom programada.\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 90,
      "end": 91,
      "text": "\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 91,
      "end": 159,
      "text": "Tema: PRESENTACION - Defensa de tesis de MCTS Daniel Arturo Velarde\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 159,
      "end": 189,
      "text": "Hora: 20 nov 2024 11:00 a. m. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 189,
      "end": 207,
      "text": "Ciudad Nova Ardis\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 207,
      "end": 208,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 208,
      "end": 228,
      "text": "Entrar Zoom Reunión\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 228,
      "end": 262,
      "text": "https://zoom.us/j/**71944238011**?"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 262,
      "end": 301,
      "text": "pwd=**A7f39PLmQ84tWqK1zD5mB12xK0Hs9L.1\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 301,
      "end": 304,
      "text": "**\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 304,
      "end": 305,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 305,
      "end": 334,
      "text": "ID de reunión: 719 4423 8011\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 334,
      "end": 358,
      "text": "Código de acceso: 540882"
    }
  ],
  "passA": {
    "requestSha256": "a52f4aef367fd859141aa0e964bd4ff790f25342606197d17e4d871a15c613e9",
    "capturedAt": "2026-09-20T23:45:14.138Z",
    "elapsedMs": 253.35395799999242,
    "successfulAttemptElapsedMs": 251.59416700000293,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.09
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
          "noul": 0.1
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.04
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
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 0.75,
            "informational": 0.25
          },
          "confidence": 0.67
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.5,
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "sender_supplied": 0.49
          },
          "confidence": 0.33
        }
      },
      "usage": {
        "input_tokens": 3595,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "0647bdd13211a8bb8d263a95de54ab0883f896aa619f99ca30dbc135f4f470b2",
    "capturedAt": "2026-09-20T23:45:14.283Z",
    "elapsedMs": 143.37220800000068,
    "successfulAttemptElapsedMs": 141.80516699999862,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0.99,
            "body:7": 0,
            "body:3": 0,
            "NONE": 0.01,
            "body:4": 0,
            "body:13": 0,
            "body:5": 0,
            "body:6": 0,
            "body:10": 0,
            "body:11": 0,
            "body:2": 0,
            "body:1": 0,
            "body:9": 0,
            "body:8": 0,
            "body:12": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 1069,
        "output_tokens": 171
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 398.6251670000056,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "request_route_low_confidence"
    ],
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
        "segmentId": "body:0"
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1218,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-249",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:13.885Z",
    "offsetMs": 1.1971670000057202
  },
  {
    "seq": 1219,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-249",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:14.137Z",
    "offsetMs": 253.35662500000035,
    "elapsedMs": 251.59416700000293,
    "outcome": "success"
  },
  {
    "seq": 1220,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-249",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:14.140Z",
    "offsetMs": 256.06854200000816
  },
  {
    "seq": 1221,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-249",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:14.282Z",
    "offsetMs": 398.4100000000035,
    "elapsedMs": 141.80516699999862,
    "outcome": "success"
  },
  {
    "seq": 1222,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-249",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:14.283Z",
    "offsetMs": 398.6759170000005,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a35d982278a89ac500443ca16ef5e9eeb9cbbd976b46fd494357a4ca71e0be3e";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1219},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1221},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1222}} as const;
export const projectionSha256 = "f9dbedc9ed4528421427984588fd3a0c15b5dbc060cd9ff02341f58439f9bf85";
