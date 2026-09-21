import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-138",
  "inputSha256": "ae6173ebf955cf6ff7b53e7d297efa0b6771625b19417e21fdc6a145789fb53b",
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
      "end": 74,
      "text": "el equipo de Spo­­­­­­­­­­­­­­­­­tif­­­­­­­­­­­­­­­­­y­­­­­­­­­­­­­­­­­  !"
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 74,
      "end": 80,
      "text": "#bL0OL"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 34,
      "text": "¡Un pequeño problema con tu pago! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 34,
      "end": 88,
      "text": "Hola, Notamos que no pudimos procesar tu último pago. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 88,
      "end": 119,
      "text": "No te preocupes, a veces pasa. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 119,
      "end": 281,
      "text": "Para asegurarnos de que sigas disfrutando de Spotify Premium Duo sin interrupciones, te invitamos a actualizar tu método de pago dentro de las próximas 48 horas. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 281,
      "end": 414,
      "text": "Actualizar ahora <http://naikdow5d.sepi-pisa.it> Con cariño, el equipo de Spo­­­­­­­­­­­­­­­­­tif­­­­­­­­­­­­­­­­­y­­­­­­­­­­­­­­­­­ "
    }
  ],
  "passA": {
    "requestSha256": "76fc284515f8d347a513e284b789502619588580e099698ae09d3bd5b9415719",
    "capturedAt": "2026-09-20T23:44:34.943Z",
    "elapsedMs": 198.9892919999984,
    "successfulAttemptElapsedMs": 197.13812500000495,
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
          "noul": 0.88
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.62
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.07
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.95
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.3
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.1
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
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 1,
            "independently_established": 0,
            "no_sensitive_action": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3643,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "56dc7ac8a3371932daa696f425d9983baf416cadc743dc6c9c0bb6af32182ba7",
    "capturedAt": "2026-09-20T23:44:35.087Z",
    "elapsedMs": 142.06041699999332,
    "successfulAttemptElapsedMs": 140.48408399999607,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:1": 0,
            "NONE": 0.01,
            "subject:1": 0,
            "body:2": 0,
            "subject:0": 0,
            "body:4": 0.71,
            "body:0": 0,
            "body:3": 0.28
          },
          "confidence": 0.67
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:1": 0,
            "NONE": 0.21,
            "subject:1": 0,
            "body:2": 0,
            "subject:0": 0,
            "body:4": 0.22,
            "body:0": 0,
            "body:3": 0.5700000000000001
          },
          "confidence": 0.5
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:1": 0,
            "NONE": 0,
            "subject:1": 0,
            "body:2": 0,
            "subject:0": 0,
            "body:3": 0.99,
            "body:0": 0,
            "body:4": 0.01
          },
          "confidence": 0.98
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:1": 0.06,
            "NONE": 0.01,
            "subject:1": 0,
            "body:2": 0,
            "subject:0": 0.45,
            "body:4": 0.44,
            "body:0": 0,
            "body:3": 0.04
          },
          "confidence": 0.37
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0,
            "NONE": 0.83,
            "subject:1": 0,
            "body:2": 0,
            "subject:0": 0,
            "body:4": 0.14,
            "body:0": 0,
            "body:3": 0.03
          },
          "confidence": 0.8
        }
      },
      "usage": {
        "input_tokens": 3251,
        "output_tokens": 460
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 343.6603749999995,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H5"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:4"
      },
      "payment_request": {
        "status": "low_confidence",
        "segmentId": null
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:3"
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
      "avoid_sender_route",
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 677,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-138",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:34.745Z",
    "offsetMs": 1.1821249999993597
  },
  {
    "seq": 678,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-138",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:34.943Z",
    "offsetMs": 198.9916249999951,
    "elapsedMs": 197.13812500000495,
    "outcome": "success"
  },
  {
    "seq": 679,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-138",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:34.946Z",
    "offsetMs": 202.01716699999815
  },
  {
    "seq": 680,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-138",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:35.087Z",
    "offsetMs": 343.1238749999975,
    "elapsedMs": 140.48408399999607,
    "outcome": "success"
  },
  {
    "seq": 681,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-138",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:35.088Z",
    "offsetMs": 343.75383399999555,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "9e50c78dceb84bb83111e4b969153ec54b645e3db075eb16158abbbc080fa84b";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":678},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":680},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":681}} as const;
export const projectionSha256 = "b4ee40c81cf350f02b6afba13edea283fcada0a6b79a92d50722158261c88018";
