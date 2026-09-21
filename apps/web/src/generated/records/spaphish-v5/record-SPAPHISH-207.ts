import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-207",
  "inputSha256": "31d28ca87c5c855979e0a2779e8f4c94cfb74db0da32f83e00bf5e3d06aae07d",
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
      "end": 91,
      "text": "Ezequiela Miguelina -  🎯 Último aviso: programa tu entrega con FedEx T&T 🕵️‍♂️📦 ___🚚.. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 91,
      "end": 98,
      "text": "ID#8924"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 6,
      "text": "FedEx\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 6,
      "end": 7,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 7,
      "end": 27,
      "text": "¡Paquete pendiente!\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 27,
      "end": 28,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 28,
      "end": 71,
      "text": "Tienes un paquete esperando ser entregado.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 71,
      "end": 72,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 72,
      "end": 111,
      "text": "Usa tu código exclusivo para seguirlo. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 111,
      "end": 121,
      "text": "181619405\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 121,
      "end": 122,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 122,
      "end": 161,
      "text": "Entrega estimada: viernes, 19 de julio\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 161,
      "end": 162,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 162,
      "end": 178,
      "text": "Ver seguimiento\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 178,
      "end": 179,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 179,
      "end": 197,
      "text": "Programar entrega\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 197,
      "end": 198,
      "text": "\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 198,
      "end": 263,
      "text": "Recibe recordatorios en tu calendario para no perder tu entrega.\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 263,
      "end": 264,
      "text": "\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 264,
      "end": 297,
      "text": "Gracias por confiar en nosotros. "
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 297,
      "end": 329,
      "text": "Tu entrega es nuestra prioridad."
    }
  ],
  "passA": {
    "requestSha256": "4fccbb17dd9c044daf2d5dcfaf4dfc48deae88308b0a25c3d1d2869b1baed31a",
    "capturedAt": "2026-09-20T23:45:00.283Z",
    "elapsedMs": 277.59070800000336,
    "successfulAttemptElapsedMs": 275.93512499998906,
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
          "noul": 0.07
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.58
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.88
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.17
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.07
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
            "active_request": 0.99,
            "mixed_or_unclear": 0,
            "informational": 0.01
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.36,
            "mixed_or_unknown": 0.02,
            "no_sensitive_action": 0.62
          },
          "confidence": 0.5
        }
      },
      "usage": {
        "input_tokens": 3559,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "cb9feeac672d2c99c88c5e36f45cec50943f2df3f104a9f033fe5bf50185792b",
    "capturedAt": "2026-09-20T23:45:00.496Z",
    "elapsedMs": 210.35616700000537,
    "successfulAttemptElapsedMs": 208.8442500000092,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:1": 0,
            "body:8": 0,
            "body:10": 0,
            "body:15": 0.060000000000000005,
            "subject:1": 0,
            "body:2": 0,
            "body:17": 0,
            "body:3": 0,
            "body:5": 0,
            "NONE": 0.02,
            "body:11": 0,
            "body:4": 0,
            "body:12": 0,
            "body:18": 0,
            "body:7": 0,
            "body:9": 0,
            "body:6": 0,
            "body:0": 0,
            "body:14": 0,
            "body:13": 0.02,
            "body:16": 0,
            "subject:0": 0.9
          },
          "confidence": 0.89
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0,
            "body:8": 0,
            "body:2": 0.01,
            "body:15": 0.01,
            "body:10": 0,
            "subject:1": 0,
            "body:17": 0.02,
            "body:3": 0,
            "body:5": 0,
            "NONE": 0.09,
            "body:11": 0,
            "body:4": 0.01,
            "body:12": 0,
            "body:18": 0.05,
            "body:14": 0,
            "body:9": 0,
            "body:6": 0.01,
            "body:0": 0.75,
            "body:7": 0,
            "body:13": 0.01,
            "body:16": 0,
            "subject:0": 0.04
          },
          "confidence": 0.72
        }
      },
      "usage": {
        "input_tokens": 1738,
        "output_tokens": 457
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 490.432707999993,
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
        "status": "selected",
        "segmentId": "subject:0"
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
    "seq": 1011,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-207",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:00.006Z",
    "offsetMs": 1.1098329999949783
  },
  {
    "seq": 1012,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-207",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:00.283Z",
    "offsetMs": 277.5927079999965,
    "elapsedMs": 275.93512499998906,
    "outcome": "success"
  },
  {
    "seq": 1013,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-207",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:00.286Z",
    "offsetMs": 280.5538329999981
  },
  {
    "seq": 1014,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-207",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:00.495Z",
    "offsetMs": 489.9404169999907,
    "elapsedMs": 208.8442500000092,
    "outcome": "success"
  },
  {
    "seq": 1015,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-207",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:00.496Z",
    "offsetMs": 490.5524999999907,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "76ae920bcbda8b2ef2142962d3731fc4fdeaab313c146849ead5d5a0f2a58e2b";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1012},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1014},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1015}} as const;
export const projectionSha256 = "0645c3b3da7e32ce4215da03829b2563b9c3f9c9e89a99e1310b42f62f4129e9";
