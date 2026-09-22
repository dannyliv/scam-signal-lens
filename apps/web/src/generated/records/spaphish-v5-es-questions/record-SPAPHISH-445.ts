import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-445",
  "inputSha256": "3812f1c87f63d2d55eecb74b59ed3f01bf36e065710782633c3e9de50614f8f7",
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
      "end": 16,
      "text": "Orden de trabajo"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 126,
      "text": "Hola, Ricardo López: María Torres le envió una orden de trabajo Instituto Tecnológico del Valle Central Descargar archivos Ver"
    }
  ],
  "passA": {
    "requestSha256": "4a39ab6125f90a1db2761625f62b86d9643ce6f8bafbf366d05f46fdd1edfd01",
    "capturedAt": "2026-09-22T03:57:03.370Z",
    "elapsedMs": 591.787389999954,
    "successfulAttemptElapsedMs": 589.7021249999525,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.03
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.05
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.06
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.88
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.06
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.06
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.08
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
            "active_request": 0.81,
            "informational": 0.19,
            "mixed_or_unclear": 0
          },
          "confidence": 0.74
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.24,
            "no_sensitive_action": 0.72,
            "mixed_or_unknown": 0.04,
            "independently_established": 0
          },
          "confidence": 0.62
        }
      },
      "usage": {
        "input_tokens": 4902,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "4b8bc69e55004684ed582be32dab59d3b40c404fbf038540fdc2aab26b652ff1",
    "capturedAt": "2026-09-22T03:57:03.891Z",
    "elapsedMs": 520.1920689999824,
    "successfulAttemptElapsedMs": 518.6692700000713,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "NONE": 0.07,
            "body:0": 0.86,
            "subject:0": 0.07
          },
          "confidence": 0.79
        }
      },
      "usage": {
        "input_tokens": 707,
        "output_tokens": 50
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1113.3123109999578,
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
    "seq": 2184,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-445",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:02.779Z",
    "offsetMs": 1.6965060000075027
  },
  {
    "seq": 2185,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-445",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:03.369Z",
    "offsetMs": 591.787565000006,
    "elapsedMs": 589.7021249999525,
    "outcome": "success"
  },
  {
    "seq": 2186,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-445",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:03.372Z",
    "offsetMs": 594.137883999967
  },
  {
    "seq": 2187,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-445",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:03.891Z",
    "offsetMs": 1113.1630700000096,
    "elapsedMs": 518.6692700000713,
    "outcome": "success"
  },
  {
    "seq": 2188,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-445",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:03.891Z",
    "offsetMs": 1113.349659999949,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "fe1e688e7055ad50e59247f0ed8d49344abdce15b83b956e738b3a1af5622dd8";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2185},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2187},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2188}} as const;
export const projectionSha256 = "e4dd02abe79c68a4bda80619f355b4be43a2b9b263b6a51d6426592cac62dbdb";
