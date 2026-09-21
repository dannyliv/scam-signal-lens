import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-043",
  "inputSha256": "407819c6432d5b2552da5e7f267257ea8e090b904655654ac01ce6cc23639478",
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
      "end": 21,
      "text": "Ezequiela Miguelina! "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 21,
      "end": 85,
      "text": "😍 - Has ganado un Juego de herramientas Parkside de 3 piezas 🎁"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 12,
      "text": "Date prisa. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 12,
      "end": 61,
      "text": "¡La cantidad de premios disponibles es limitada! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 61,
      "end": 78,
      "text": "¡Confirma ahora! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 78,
      "end": 142,
      "text": "LIDL El ganador de hoy es Ricardo López ¡HAS SIDO SELECCIONADO! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 142,
      "end": 228,
      "text": "Para recibir tu regalo: Conjunto de 3 piezas Parkside Reclama tu regalo ¡Felicidades! "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 228,
      "end": 307,
      "text": "Has sido seleccionado para participar GRATIS en nuestro programa de fidelidad. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 307,
      "end": 364,
      "text": "Solo te llevará un minuto recibir este fantástico premio."
    }
  ],
  "passA": {
    "requestSha256": "b1a333e54e8654e6454fe041866d460942803eb17ec95d0bb42a35395cd81ca2",
    "capturedAt": "2026-09-20T23:44:04.889Z",
    "elapsedMs": 179.05166699999972,
    "successfulAttemptElapsedMs": 177.75495799999953,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.07
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.24
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.11
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.96
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.7
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.37
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.21
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.07
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.05
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
            "informational": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.52,
            "mixed_or_unknown": 0.15,
            "sender_supplied": 0.33
          },
          "confidence": 0.36
        }
      },
      "usage": {
        "input_tokens": 3538,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "1adfec649f95106a253ef8184e98e210f9abbfcef591d7f1f1de1d49cb14afc9",
    "capturedAt": "2026-09-21T00:57:16.318Z",
    "elapsedMs": 203.666291,
    "successfulAttemptElapsedMs": 200.97116700000015,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.02,
            "body:4": 0.02,
            "body:0": 0,
            "subject:1": 0,
            "body:1": 0,
            "body:5": 0,
            "body:6": 0.01,
            "NONE": 0.95,
            "body:3": 0,
            "subject:0": 0
          },
          "confidence": 0.94
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0.33,
            "body:4": 0,
            "subject:1": 0,
            "body:0": 0.58,
            "body:1": 0.09,
            "body:3": 0,
            "body:6": 0,
            "NONE": 0,
            "body:5": 0,
            "subject:0": 0
          },
          "confidence": 0.52
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:2": 0,
            "body:4": 0.01,
            "body:0": 0,
            "subject:1": 0,
            "body:1": 0,
            "body:3": 0.56,
            "body:6": 0,
            "NONE": 0.28,
            "body:5": 0.14,
            "subject:0": 0
          },
          "confidence": 0.51
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.05,
            "body:4": 0,
            "subject:1": 0,
            "body:0": 0.04,
            "body:1": 0,
            "body:5": 0,
            "body:6": 0.02,
            "NONE": 0.89,
            "body:3": 0,
            "subject:0": 0
          },
          "confidence": 0.87
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.01,
            "body:4": 0.02,
            "body:0": 0,
            "subject:1": 0,
            "body:1": 0,
            "body:5": 0.14,
            "body:6": 0.01,
            "NONE": 0.81,
            "body:3": 0,
            "subject:0": 0
          },
          "confidence": 0.79
        }
      },
      "usage": {
        "input_tokens": 2780,
        "output_tokens": 552
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 531.1189160000008,
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
        "status": "none_selected",
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "none_selected",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "none_selected",
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
    "seq": 207,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-043",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:04.711Z",
    "offsetMs": 0.7537090000005264
  },
  {
    "seq": 208,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-043",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:04.889Z",
    "offsetMs": 179.05162500000006,
    "elapsedMs": 177.75495799999953,
    "outcome": "success"
  },
  {
    "seq": 209,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-043",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:04.892Z",
    "offsetMs": 181.98254199999974
  },
  {
    "seq": 210,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-043",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:05.035Z",
    "offsetMs": 325.6872920000005,
    "elapsedMs": 143.10120800000004,
    "outcome": "success"
  },
  {
    "seq": 211,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-043",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:05.036Z",
    "offsetMs": 325.77129200000127,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2495,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-043",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:16.116Z",
    "offsetMs": 3.3314580000001115
  },
  {
    "seq": 2496,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-043",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:16.317Z",
    "offsetMs": 204.95570799999996,
    "elapsedMs": 200.97116700000015,
    "outcome": "success"
  },
  {
    "seq": 2497,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-043",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:16.318Z",
    "offsetMs": 205.34195799999998,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1e0ec45f6d9fb8301c34d063fffe34da7a845700358ed60581331599e35ac3fa";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":208},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2496},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2497}} as const;
export const projectionSha256 = "98c33f71e4e90dca7e047b2b618a1f1e6de6bda7d869097acd10f1b4f95e46e1";
