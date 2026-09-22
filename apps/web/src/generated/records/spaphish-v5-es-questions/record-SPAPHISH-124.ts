import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-124",
  "inputSha256": "ed3f21a6edabdf770716e7c168dcfa8e58aef7f510f24cf1f7d12821101f43e4",
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
    "requestSha256": "e42059b75167e8d0ed7cf0f422fcbf2f0875960d8a052c5ac86e69f453debc18",
    "capturedAt": "2026-09-22T03:50:41.684Z",
    "elapsedMs": 812.811950000003,
    "successfulAttemptElapsedMs": 811.6705120000115,
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
          "noul": 0.3
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.08
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.06
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.54
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.57
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.19
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.15
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.22
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
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.23,
            "independently_established": 0,
            "mixed_or_unknown": 0.13,
            "no_sensitive_action": 0.64
          },
          "confidence": 0.51
        }
      },
      "usage": {
        "input_tokens": 4993,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "15a268659a89e0551119601183e4501a11b99fd52ed57d10d5eb71f28dcea267",
    "capturedAt": "2026-09-22T03:50:42.353Z",
    "elapsedMs": 667.323172000004,
    "successfulAttemptElapsedMs": 666.5941630000016,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "body:5": 0,
            "body:1": 0,
            "body:3": 0,
            "subject:0": 0,
            "body:4": 0,
            "body:2": 0.11,
            "NONE": 0.89
          },
          "confidence": 0.86
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.46,
            "body:5": 0,
            "body:1": 0,
            "body:3": 0,
            "subject:0": 0,
            "body:4": 0.22,
            "body:2": 0.04,
            "NONE": 0.28
          },
          "confidence": 0.37
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.03,
            "body:5": 0.3,
            "body:1": 0.01,
            "body:3": 0.22,
            "subject:0": 0.01,
            "body:2": 0.02,
            "body:4": 0,
            "NONE": 0.41000000000000003
          },
          "confidence": 0.31
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.1,
            "body:5": 0,
            "body:1": 0,
            "body:3": 0.01,
            "subject:0": 0.02,
            "body:4": 0.22,
            "body:2": 0,
            "NONE": 0.65
          },
          "confidence": 0.6
        }
      },
      "usage": {
        "input_tokens": 2641,
        "output_tokens": 364
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1482.1755739999935,
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
        "status": "low_confidence",
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
    "seq": 602,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-124",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:40.871Z",
    "offsetMs": 0.49201499999617226
  },
  {
    "seq": 603,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-124",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:41.683Z",
    "offsetMs": 812.8117370000109,
    "elapsedMs": 811.6705120000115,
    "outcome": "success"
  },
  {
    "seq": 604,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-124",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:41.686Z",
    "offsetMs": 815.0640049999929
  },
  {
    "seq": 605,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-124",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:42.352Z",
    "offsetMs": 1481.889101000008,
    "elapsedMs": 666.5941630000016,
    "outcome": "success"
  },
  {
    "seq": 606,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-124",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:42.353Z",
    "offsetMs": 1482.2310170000128,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1eaf653330fa071b11250d2b83e94df005a88e6da07ffc0fbc976d863d3591f3";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":603},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":605},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":606}} as const;
export const projectionSha256 = "37b1642dc536f1cb3f28f6c5cc598c550cc0507bba3f87b523fd0b784516fcdb";
