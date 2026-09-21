import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-079",
  "inputSha256": "7c7c42aafcebc89cddbca89c9d3efb958e326d0d7ad7fbb21158fdaf97fa9f29",
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
      "end": 28,
      "text": "¡Hemos bloqueado tu cuenta! "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 28,
      "end": 80,
      "text": "El 2025.08.15, tus fotos y videos serán eliminados. "
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 80,
      "end": 93,
      "text": "¡Actúa ahora!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 27,
      "text": "Hemos bloqueado tu cuenta! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 27,
      "end": 79,
      "text": "El 2025.08.15, tus fotos y videos seran eliminados. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 79,
      "end": 91,
      "text": "Actua ahora!"
    }
  ],
  "passA": {
    "requestSha256": "8b4b7181c4a008e255faa0b4240ec13ae8c601dc1651198e03e9358d1228d3e5",
    "capturedAt": "2026-09-20T23:44:16.857Z",
    "elapsedMs": 134.21437499999956,
    "successfulAttemptElapsedMs": 132.9565840000032,
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
          "noul": 0.06
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
          "noul": 0.94
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.44
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.34
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
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
            "active_request": 0.99,
            "educational_or_quoted": 0,
            "informational": 0.01,
            "mixed_or_unclear": 0
          },
          "confidence": 0.98
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.92,
            "sender_supplied": 0.02,
            "independently_established": 0,
            "mixed_or_unknown": 0.06
          },
          "confidence": 0.9
        }
      },
      "usage": {
        "input_tokens": 3495,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "37737932eafe38f6fc29baedf7e7ac57af3a85e20324731fc0f59d3e5691b416",
    "capturedAt": "2026-09-20T23:44:17.017Z",
    "elapsedMs": 157.48583300000246,
    "successfulAttemptElapsedMs": 155.85779099999854,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:2",
          "probabilities": {
            "body:0": 0,
            "subject:0": 0,
            "subject:2": 0.65,
            "body:1": 0.06,
            "body:2": 0.15,
            "NONE": 0,
            "subject:1": 0.14
          },
          "confidence": 0.58
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.1,
            "subject:0": 0.25,
            "subject:2": 0.01,
            "subject:1": 0,
            "body:2": 0,
            "NONE": 0.63,
            "body:1": 0.01
          },
          "confidence": 0.56
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "subject:0": 0,
            "subject:2": 0.11,
            "subject:1": 0,
            "body:2": 0.07,
            "NONE": 0.82,
            "body:1": 0
          },
          "confidence": 0.79
        }
      },
      "usage": {
        "input_tokens": 1520,
        "output_tokens": 250
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 294.3423750000002,
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
    "seq": 384,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-079",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:16.723Z",
    "offsetMs": 0.7152089999981399
  },
  {
    "seq": 385,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-079",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:16.857Z",
    "offsetMs": 134.2155840000014,
    "elapsedMs": 132.9565840000032,
    "outcome": "success"
  },
  {
    "seq": 386,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-079",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:16.860Z",
    "offsetMs": 137.39308399999936
  },
  {
    "seq": 387,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-079",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:17.016Z",
    "offsetMs": 293.89537500000006,
    "elapsedMs": 155.85779099999854,
    "outcome": "success"
  },
  {
    "seq": 388,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-079",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:17.017Z",
    "offsetMs": 294.4300000000003,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "e9c3d85a0398b3a11b94d702b3af3fb09d608d30a496ff54e1e9ac4f7d256950";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":385},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":387},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":388}} as const;
export const projectionSha256 = "47ef89930a51eca7c3a29096b516a46d5616c61cdfb2e450f6242f0cafb6082c";
