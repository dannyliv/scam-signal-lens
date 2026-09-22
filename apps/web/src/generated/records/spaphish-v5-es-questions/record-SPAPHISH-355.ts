import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-355",
  "inputSha256": "a47ecc4cceab60b924081557faa05f086ec0b4e40780750d29dd156191e399b8",
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
      "end": 13,
      "text": "CORTE DE AGUA"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 26,
      "text": "Residentes, buenas noches\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 26,
      "end": 27,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 27,
      "end": 61,
      "text": "Por favor tomen sus precauciones.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 61,
      "end": 108,
      "text": "HIDROSUR SERVICIOS MUNICIPALES CORTARA EL AGUA\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 108,
      "end": 109,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 109,
      "end": 164,
      "text": "A partir de estos momentos y hasta mañana al medio día\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 164,
      "end": 195,
      "text": "adjunto aviso con los detalles\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 195,
      "end": 196,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 196,
      "end": 202,
      "text": "Atte.\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 202,
      "end": 211,
      "text": "María R. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 211,
      "end": 213,
      "text": "C."
    }
  ],
  "passA": {
    "requestSha256": "604649c85035c4e46725fcb93faf9c7cc9d8bc42d327f31120b1312083836a5c",
    "capturedAt": "2026-09-22T03:55:18.170Z",
    "elapsedMs": 702.5476669999771,
    "successfulAttemptElapsedMs": 701.038973000017,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.64
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.87
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.05
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.07
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0.64,
            "active_request": 0.36
          },
          "confidence": 0.52
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 1,
            "sender_supplied": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 4941,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "9bdd159d51da469598f6daae1cfb2e054a4e93fc8b6c69a29669669e631994f3",
    "capturedAt": "2026-09-22T03:55:18.681Z",
    "elapsedMs": 509.3569660000503,
    "successfulAttemptElapsedMs": 507.92272400000365,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:4": 0,
            "subject:0": 0,
            "body:10": 0,
            "NONE": 0.12,
            "body:5": 0.67,
            "body:8": 0,
            "body:6": 0,
            "body:1": 0,
            "body:0": 0,
            "body:2": 0.2,
            "body:9": 0,
            "body:3": 0.01,
            "body:7": 0
          },
          "confidence": 0.63
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:10": 0,
            "subject:0": 0,
            "body:4": 0,
            "body:5": 0,
            "NONE": 0.05,
            "body:8": 0.01,
            "body:6": 0.02,
            "body:1": 0.01,
            "body:0": 0,
            "body:2": 0.01,
            "body:9": 0.04,
            "body:3": 0.86,
            "body:7": 0
          },
          "confidence": 0.84
        }
      },
      "usage": {
        "input_tokens": 1480,
        "output_tokens": 279
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1213.6749880000134,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence"
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:3"
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
    "seq": 1737,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-355",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:17.469Z",
    "offsetMs": 1.1888100000214763
  },
  {
    "seq": 1738,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-355",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:18.170Z",
    "offsetMs": 702.5478989999974,
    "elapsedMs": 701.038973000017,
    "outcome": "success"
  },
  {
    "seq": 1739,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-355",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:18.172Z",
    "offsetMs": 705.1059260000475
  },
  {
    "seq": 1740,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-355",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:18.681Z",
    "offsetMs": 1213.4611500000465,
    "elapsedMs": 507.92272400000365,
    "outcome": "success"
  },
  {
    "seq": 1741,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-355",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:18.681Z",
    "offsetMs": 1213.7216610000469,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6f53dae1cbc6347fcbc2dcbfa7851279bb7d024c929d7d2f034810490d809c9c";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1738},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1740},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1741}} as const;
export const projectionSha256 = "7bbbbf57a58d6cc1ef95bd781d105b943f58ce5154f5b89a6d5d353d5e03ae7d";
