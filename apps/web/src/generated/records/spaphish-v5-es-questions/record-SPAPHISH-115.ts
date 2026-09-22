import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-115",
  "inputSha256": "7152d9bd3b8f9a82d78f44ee9c3d9dba698c359184e34fd2d3f1177fb45c4a19",
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
      "end": 59,
      "text": "Se est quedando sin espacio de almacenamiento? - Actualizar"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 58,
      "text": "URGENTE: Â¡Proteja sus archivos antes de que desaparezcan!"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 58,
      "end": 60,
      "text": "**"
    }
  ],
  "passA": {
    "requestSha256": "caa2f6ef398a174efadbf87410dd3b369cacd2275e679202cbde37279011d795",
    "capturedAt": "2026-09-22T03:50:29.990Z",
    "elapsedMs": 631.0751240000245,
    "successfulAttemptElapsedMs": 630.3068700000003,
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
          "noul": 0.11
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.95
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.15
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.18
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.07
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
          "noul": 0.07
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.71,
            "informational": 0.25,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0.04
          },
          "confidence": 0.61
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.03,
            "no_sensitive_action": 0.91,
            "mixed_or_unknown": 0.06,
            "independently_established": 0
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 4905,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "fdcad609bdc2430ab2ddeeade239f58d6f59dd1701a8edbcc5c7475114d962db",
    "capturedAt": "2026-09-22T03:50:30.543Z",
    "elapsedMs": 552.0048969999771,
    "successfulAttemptElapsedMs": 551.3042550000246,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0,
            "body:0": 1,
            "NONE": 0,
            "subject:0": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 722,
        "output_tokens": 59
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1184.625422000012,
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
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 557,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-115",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:29.359Z",
    "offsetMs": 0.5688640000007581
  },
  {
    "seq": 558,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-115",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:29.989Z",
    "offsetMs": 631.0761259999999,
    "elapsedMs": 630.3068700000003,
    "outcome": "success"
  },
  {
    "seq": 559,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-115",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:29.991Z",
    "offsetMs": 632.9008549999853
  },
  {
    "seq": 560,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-115",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:30.543Z",
    "offsetMs": 1184.4228669999866,
    "elapsedMs": 551.3042550000246,
    "outcome": "success"
  },
  {
    "seq": 561,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-115",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:30.543Z",
    "offsetMs": 1184.669597,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7f9c4356b45100487a5ad2b9b29fcff3a3b5615912581d57c59b05fa8b1617e8";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":558},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":560},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":561}} as const;
export const projectionSha256 = "0d3b90deb064aeca77e6f4b1414c625e32c7689db526cc0384e95fa20fb1ba86";
