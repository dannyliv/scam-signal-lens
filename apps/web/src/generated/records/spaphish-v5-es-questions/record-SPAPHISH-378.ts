import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-378",
  "inputSha256": "fc359027209e991d02fb465acae7c73fa45a4b1ea490d2c1a4d1f5ba787cfb3e",
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
      "end": 6,
      "text": "Listo!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 73,
      "text": "Hola Manuel... verifica que ya puedes acceder a la bibliografia en Drive\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 73,
      "end": 74,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 74,
      "end": 82,
      "text": "Saludos!"
    }
  ],
  "passA": {
    "requestSha256": "d0b145d07afba39d73de68e586f6c43b7afefd2ab2414e7eb5c9ed84f56e0fa0",
    "capturedAt": "2026-09-22T03:55:44.895Z",
    "elapsedMs": 626.344459999993,
    "successfulAttemptElapsedMs": 625.1363129999954,
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
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.14
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.47
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 0.06,
            "active_request": 0.94,
            "mixed_or_unclear": 0
          },
          "confidence": 0.92
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.85,
            "sender_supplied": 0.12,
            "independently_established": 0.01,
            "mixed_or_unknown": 0.02
          },
          "confidence": 0.79
        }
      },
      "usage": {
        "input_tokens": 4897,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "875d2a71397a8aeb685e75c43988cc3fd323cb2b02433c1a7b1859af899aa156",
    "capturedAt": "2026-09-22T03:55:45.450Z",
    "elapsedMs": 553.5991110000177,
    "successfulAttemptElapsedMs": 552.0079779999796,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.01,
            "NONE": 0.33,
            "body:0": 0.66,
            "body:2": 0,
            "subject:0": 0
          },
          "confidence": 0.57
        }
      },
      "usage": {
        "input_tokens": 731,
        "output_tokens": 71
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1181.4177380000474,
  "derived": {
    "concern": "few_warning_signs",
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
        "status": "not_requested",
        "segmentId": null
      },
      "authority_claim": {
        "status": "not_requested",
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
        "status": "low_confidence",
        "segmentId": null
      },
      "analyzer_instruction": {
        "status": "not_requested",
        "segmentId": null
      }
    },
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1851,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-378",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:44.270Z",
    "offsetMs": 0.9408699999912642
  },
  {
    "seq": 1852,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-378",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:44.895Z",
    "offsetMs": 626.344281000027,
    "elapsedMs": 625.1363129999954,
    "outcome": "success"
  },
  {
    "seq": 1853,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-378",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:44.897Z",
    "offsetMs": 628.719860000012
  },
  {
    "seq": 1854,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-378",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:45.450Z",
    "offsetMs": 1181.186182000034,
    "elapsedMs": 552.0079779999796,
    "outcome": "success"
  },
  {
    "seq": 1855,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-378",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:45.450Z",
    "offsetMs": 1181.4663130000117,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "aaf0f15e94d6eacda420a6c6ade9f3a7b97b9162095e4d935c02a8e78de3058a";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1852},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1854},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1855}} as const;
export const projectionSha256 = "4c08c002e9e29dfb9a918dfeb81a02dcb6224754651d5b3385f28f64dacab3d7";
