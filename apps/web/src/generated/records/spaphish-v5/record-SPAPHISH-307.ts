import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-307",
  "inputSha256": "f61fd4383f277886bf1cedf4c31b44e0d4600f4e00ecf583a76a8b8d5616d9b5",
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
      "end": 58,
      "text": "Ezequiela Miguelina! - Has ganado una Lancôme Beauty Box🎁"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 58,
      "text": "Solo te llevará un minuto recibir este fantástico premio. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 58,
      "end": 96,
      "text": "DRUNI Hoy El Ganador es Andrea Soto ! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 96,
      "end": 157,
      "text": "las últimas tendencias en belleza ¡HAS SIDO SELECCIONADO(A)! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 157,
      "end": 237,
      "text": "Para recibir tu regalo: Caja de Lujo de Belleza Reclama tu regalo ¡Felicidades! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 237,
      "end": 330,
      "text": "Has sido seleccionado(a) para participar en nuestro programa de fidelidad de forma GRATUITA. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 330,
      "end": 388,
      "text": "Solo te llevará un minuto recibir este fantástico premio. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 388,
      "end": 502,
      "text": "© 2025 GRUPO DRUNI SAS Si ya no deseas recibir estos correos electrónicos, puedes darte de baja haciendo clic aquí"
    }
  ],
  "passA": {
    "requestSha256": "7e0f72b37388e79175583717b7f57ede1108dd067fc53d3416d97a0c40c0ba46",
    "capturedAt": "2026-09-20T23:45:35.155Z",
    "elapsedMs": 365.75900000000547,
    "successfulAttemptElapsedMs": 363.65620800000033,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.06
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.23
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.1
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.4
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.49
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.2
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.18
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.05
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
            "active_request": 1,
            "informational": 0,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.45,
            "independently_established": 0,
            "sender_supplied": 0.52,
            "mixed_or_unknown": 0.03
          },
          "confidence": 0.36
        }
      },
      "usage": {
        "input_tokens": 3567,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "3e3e9333c4331015dbed74fa2d05248e4d5d49913462241d1c96e2290a80163b",
    "capturedAt": "2026-09-20T23:45:35.380Z",
    "elapsedMs": 222.7826250000071,
    "successfulAttemptElapsedMs": 218.3921249999985,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.97,
            "body:2": 0,
            "body:3": 0.03,
            "body:1": 0,
            "body:4": 0,
            "body:5": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:6": 0
          },
          "confidence": 0.96
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.37,
            "body:2": 0,
            "body:1": 0.06,
            "body:3": 0.06,
            "body:4": 0,
            "body:5": 0.11,
            "body:0": 0.39,
            "subject:0": 0,
            "body:6": 0.01
          },
          "confidence": 0.31
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.74,
            "body:2": 0.01,
            "body:1": 0.03,
            "body:3": 0.01,
            "body:4": 0.13,
            "body:5": 0,
            "subject:0": 0.02,
            "body:0": 0,
            "body:6": 0.06
          },
          "confidence": 0.7
        }
      },
      "usage": {
        "input_tokens": 1905,
        "output_tokens": 301
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 590.9804579999909,
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
        "status": "none_selected",
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
    "seq": 1503,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-307",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:34.790Z",
    "offsetMs": 1.5187499999883585
  },
  {
    "seq": 1504,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-307",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:35.155Z",
    "offsetMs": 365.75999999999476,
    "elapsedMs": 363.65620800000033,
    "outcome": "success"
  },
  {
    "seq": 1505,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-307",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:35.160Z",
    "offsetMs": 371.70404199999757
  },
  {
    "seq": 1506,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-307",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:35.380Z",
    "offsetMs": 590.7928329999995,
    "elapsedMs": 218.3921249999985,
    "outcome": "success"
  },
  {
    "seq": 1507,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-307",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:35.380Z",
    "offsetMs": 591.0249170000025,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "9472954d13b29fae796e3d16202d98b9d3fe6a1ef391ae67c567ed228b788feb";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1504},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1506},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1507}} as const;
export const projectionSha256 = "3c2d77c1010d94c3f1025552922cea04d5dba89561b95f47bd2e5d915305ef6a";
