import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-124",
  "inputSha256": "ed3f21a6edabdf770716e7c168dcfa8e58aef7f510f24cf1f7d12821101f43e4",
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
      "end": 47,
      "text": "Pablito  - Has ganado una Lancôme Beauty Box 🎁"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 100,
      "text": "Solo te llevará un minuto recibir este fantástico premio. costco Hoy El Ganador es Sergio Navarro ! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 100,
      "end": 161,
      "text": "las últimas tendencias en belleza ¡HAS SIDO SELECCIONADO(A)! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 161,
      "end": 236,
      "text": "Para recibir tu regalo: Lancome Beauty Box Reclama tu regalo ¡Felicidades! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 236,
      "end": 329,
      "text": "Has sido seleccionado(a) para participar en nuestro programa de fidelidad de forma GRATUITA. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 329,
      "end": 387,
      "text": "Solo te llevará un minuto recibir este fantástico premio. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 387,
      "end": 409,
      "text": "© 2025 GRUPO DRUNI SAS"
    }
  ],
  "passA": {
    "requestSha256": "a6ab4fff5ec981caaf916ba1ca1c5ffd75209f45708de6ed13e3d85784dcd507",
    "capturedAt": "2026-09-20T23:44:30.970Z",
    "elapsedMs": 147.96570800000336,
    "successfulAttemptElapsedMs": 146.3783340000009,
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
          "noul": 0.25
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
          "noul": 0.36
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.59
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.22
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.21
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.07
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
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
            "no_sensitive_action": 0.62,
            "sender_supplied": 0.25,
            "independently_established": 0,
            "mixed_or_unknown": 0.13
          },
          "confidence": 0.49
        }
      },
      "usage": {
        "input_tokens": 3543,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "8cb11f64c7bb0217a2d3ff9b077b0ccabbeb6e0e9f78a283d722d50629409b2e",
    "capturedAt": "2026-09-20T23:44:31.191Z",
    "elapsedMs": 219.11008399999992,
    "successfulAttemptElapsedMs": 217.9109580000004,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "body:4": 0,
            "body:2": 0.08,
            "body:1": 0,
            "body:5": 0,
            "subject:0": 0,
            "body:3": 0,
            "NONE": 0.92
          },
          "confidence": 0.9
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.28,
            "body:4": 0.22,
            "body:5": 0,
            "subject:0": 0,
            "body:1": 0,
            "body:2": 0.11,
            "body:3": 0,
            "NONE": 0.39
          },
          "confidence": 0.29
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.11,
            "body:4": 0,
            "body:5": 0.11,
            "subject:0": 0.01,
            "body:1": 0.02,
            "body:2": 0.02,
            "body:3": 0.26,
            "NONE": 0.47000000000000003
          },
          "confidence": 0.39
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.01,
            "body:1": 0,
            "body:2": 0.01,
            "body:5": 0,
            "subject:0": 0,
            "body:4": 0.01,
            "body:3": 0,
            "NONE": 0.97
          },
          "confidence": 0.97
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.01,
            "body:4": 0.01,
            "body:2": 0.07,
            "body:5": 0,
            "subject:0": 0,
            "body:1": 0,
            "body:3": 0.1,
            "NONE": 0.81
          },
          "confidence": 0.79
        }
      },
      "usage": {
        "input_tokens": 2675,
        "output_tokens": 458
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 369.03975000000355,
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
    "seq": 608,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-124",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:30.823Z",
    "offsetMs": 1.0422919999982696
  },
  {
    "seq": 609,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-124",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:30.970Z",
    "offsetMs": 147.96800000000076,
    "elapsedMs": 146.3783340000009,
    "outcome": "success"
  },
  {
    "seq": 610,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-124",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:30.972Z",
    "offsetMs": 150.24375000000146
  },
  {
    "seq": 611,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-124",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:31.191Z",
    "offsetMs": 368.69358400000056,
    "elapsedMs": 217.9109580000004,
    "outcome": "success"
  },
  {
    "seq": 612,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-124",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:31.191Z",
    "offsetMs": 369.1021669999973,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "eba3010ed1a06b46b87a924545c8bb98e92e6cb4b815ab27c547b705929c1764";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":609},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":611},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":612}} as const;
export const projectionSha256 = "c283912c506480561866121c4e27b7cba80370f3671c336692e8774c33b7a800";
