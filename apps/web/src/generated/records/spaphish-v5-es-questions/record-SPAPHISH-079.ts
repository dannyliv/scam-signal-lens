import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-079",
  "inputSha256": "7c7c42aafcebc89cddbca89c9d3efb958e326d0d7ad7fbb21158fdaf97fa9f29",
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
    "requestSha256": "d80d9dab8a75f211d79711fbf62634273e68868a861a2d621f96111533c17063",
    "capturedAt": "2026-09-22T03:49:46.467Z",
    "elapsedMs": 666.7338210000016,
    "successfulAttemptElapsedMs": 666.1078989999951,
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
          "noul": 0.06
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.94
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.42
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.38
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
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
            "mixed_or_unclear": 0,
            "informational": 0.03,
            "active_request": 0.97,
            "educational_or_quoted": 0
          },
          "confidence": 0.96
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.05,
            "mixed_or_unknown": 0.07,
            "no_sensitive_action": 0.88,
            "independently_established": 0
          },
          "confidence": 0.85
        }
      },
      "usage": {
        "input_tokens": 4945,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "ec86de08ed636c0c4a6e59df31c88d101e06f6127e332e3a0564eb2d146c39fc",
    "capturedAt": "2026-09-22T03:49:47.092Z",
    "elapsedMs": 623.6964789999911,
    "successfulAttemptElapsedMs": 622.0620559999952,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:2",
          "probabilities": {
            "body:2": 0.06,
            "body:1": 0.16,
            "NONE": 0,
            "subject:1": 0.2,
            "subject:0": 0,
            "subject:2": 0.58,
            "body:0": 0
          },
          "confidence": 0.5
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.01,
            "body:1": 0.01,
            "NONE": 0.65,
            "subject:1": 0.01,
            "subject:0": 0.22,
            "subject:2": 0.01,
            "body:0": 0.09
          },
          "confidence": 0.6
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.09,
            "body:1": 0,
            "subject:2": 0.13,
            "subject:1": 0,
            "subject:0": 0,
            "NONE": 0.78,
            "body:0": 0
          },
          "confidence": 0.74
        }
      },
      "usage": {
        "input_tokens": 1828,
        "output_tokens": 250
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1292.7799159999995,
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
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-079",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:45.800Z",
    "offsetMs": 0.3941599999961909
  },
  {
    "seq": 385,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-079",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:46.466Z",
    "offsetMs": 666.7339780000038,
    "elapsedMs": 666.1078989999951,
    "outcome": "success"
  },
  {
    "seq": 386,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-079",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:46.470Z",
    "offsetMs": 669.9108830000041
  },
  {
    "seq": 387,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-079",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:47.092Z",
    "offsetMs": 1292.4465599999967,
    "elapsedMs": 622.0620559999952,
    "outcome": "success"
  },
  {
    "seq": 388,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-079",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:47.093Z",
    "offsetMs": 1292.8293390000035,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "5b96cc5b1b942fdab59f0ca5d0a4ec9b0c059c599fca311eda36247b3a4c6201";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":385},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":387},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":388}} as const;
export const projectionSha256 = "18340b09d49e3243f6e342fd703a37298f7fedac4dc21b74244fed67c700d892";
