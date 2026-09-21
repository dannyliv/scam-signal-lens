import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-330",
  "inputSha256": "695649c30a9f844a5e5771a92b48b24bf21b106fd8043851b5abb35c13ac2d4a",
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
      "text": "ID#8651"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 26,
      "text": "FedEx ¡Paquete pendiente! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 26,
      "end": 69,
      "text": "Tienes un paquete esperando ser entregado. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 69,
      "end": 108,
      "text": "Usa tu código exclusivo para seguirlo. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 108,
      "end": 256,
      "text": "748520631 Entrega estimada: viernes, 19 de julio Ver seguimiento Programar entrega Recibe recordatorios en tu calendario para no perder tu entrega. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 256,
      "end": 289,
      "text": "Gracias por confiar en nosotros. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 289,
      "end": 321,
      "text": "Tu entrega es nuestra prioridad."
    }
  ],
  "passA": {
    "requestSha256": "994a5eecc534489a693b7cd8a0f31bf7fa60d626bbd0f15996abae1b9ea1aa6b",
    "capturedAt": "2026-09-20T23:45:43.098Z",
    "elapsedMs": 185.33029199999874,
    "successfulAttemptElapsedMs": 183.228500000012,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.13
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.64
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.87
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.16
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
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.09
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.32,
            "no_sensitive_action": 0.66,
            "mixed_or_unknown": 0.02,
            "independently_established": 0
          },
          "confidence": 0.54
        }
      },
      "usage": {
        "input_tokens": 3549,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "5ed28cff6f848feb72e34537f5d83cbc8d2a6c2b4a0f05423ac08fe2f15bc9d4",
    "capturedAt": "2026-09-20T23:45:43.354Z",
    "elapsedMs": 254.61562500000582,
    "successfulAttemptElapsedMs": 252.9404579999973,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "subject:1": 0,
            "NONE": 0.02,
            "body:4": 0,
            "body:5": 0,
            "body:1": 0,
            "body:0": 0,
            "body:3": 0.14,
            "body:2": 0,
            "subject:0": 0.84
          },
          "confidence": 0.81
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:1": 0,
            "body:2": 0.01,
            "body:4": 0.03,
            "body:5": 0.05,
            "body:1": 0,
            "body:0": 0.59,
            "body:3": 0.01,
            "NONE": 0.23,
            "subject:0": 0.08
          },
          "confidence": 0.54
        }
      },
      "usage": {
        "input_tokens": 1352,
        "output_tokens": 205
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 442.1748329999973,
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1614,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-330",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:42.913Z",
    "offsetMs": 1.4377499999973224
  },
  {
    "seq": 1615,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-330",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:43.097Z",
    "offsetMs": 185.33150000000023,
    "elapsedMs": 183.228500000012,
    "outcome": "success"
  },
  {
    "seq": 1616,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-330",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:43.100Z",
    "offsetMs": 188.3392909999966
  },
  {
    "seq": 1617,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-330",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:43.354Z",
    "offsetMs": 441.807707999993,
    "elapsedMs": 252.9404579999973,
    "outcome": "success"
  },
  {
    "seq": 1618,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-330",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:43.354Z",
    "offsetMs": 442.27516599999217,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7d2d5a06e20a2a3d97d1e94166b3b87f73ae9d0e1db31df74d3791307044d00a";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1615},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1617},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1618}} as const;
export const projectionSha256 = "2b71857aacd00c6f336c307cfbdd818b80177b2440e0d40ecd07cd79bdb3a975";
