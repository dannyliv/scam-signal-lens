import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-249",
  "inputSha256": "a64f9f706a5f3eb26ed4e3a3337a1dcbe76c0075e4aedbb428b8ca64124ded8d",
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
    "requestSha256": "dc0782906c5ae9f58a2a337d1e5955ab52221cc058786948329fb06cd3763b76",
    "capturedAt": "2026-09-22T03:53:08.350Z",
    "elapsedMs": 672.9692349999677,
    "successfulAttemptElapsedMs": 671.8865330000408,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.1
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
          "noul": 0.09
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.94
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
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
            "active_request": 0.73,
            "informational": 0.27,
            "mixed_or_unclear": 0
          },
          "confidence": 0.63
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.58,
            "sender_supplied": 0.41,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.45
        }
      },
      "usage": {
        "input_tokens": 5045,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "8318d757d36b037b08e392c492475d9545a1f9b73e990c9ae1675a5dc7268760",
    "capturedAt": "2026-09-22T03:53:08.957Z",
    "elapsedMs": 605.199506999983,
    "successfulAttemptElapsedMs": 604.0201179999858,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:9": 0,
            "body:11": 0,
            "body:10": 0,
            "body:12": 0,
            "subject:0": 0,
            "body:4": 0,
            "body:8": 0,
            "body:0": 0.97,
            "body:3": 0,
            "body:1": 0,
            "body:5": 0,
            "body:2": 0,
            "body:6": 0,
            "body:7": 0.01,
            "body:13": 0,
            "NONE": 0.02
          },
          "confidence": 0.97
        }
      },
      "usage": {
        "input_tokens": 1169,
        "output_tokens": 171
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1280.7209030000377,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence",
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
    "seq": 1214,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-249",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:07.677Z",
    "offsetMs": 0.7705270000151359
  },
  {
    "seq": 1215,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-249",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:08.349Z",
    "offsetMs": 672.9687709999853,
    "elapsedMs": 671.8865330000408,
    "outcome": "success"
  },
  {
    "seq": 1216,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-249",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:08.353Z",
    "offsetMs": 676.0826380000217
  },
  {
    "seq": 1217,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-249",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:08.957Z",
    "offsetMs": 1280.5284889999893,
    "elapsedMs": 604.0201179999858,
    "outcome": "success"
  },
  {
    "seq": 1218,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-249",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:53:08.957Z",
    "offsetMs": 1280.7764329999918,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "81cfb82cebe070f2e62cecda84b76ea5825927f05690c9f8bdaccc3f392c6459";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1215},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1217},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1218}} as const;
export const projectionSha256 = "979d3d1a52df27c412f56ae531a810e8d7fa3d4779dd8051cbd088b743de0563";
