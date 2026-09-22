import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-202",
  "inputSha256": "71d4b531bf195e482634dc68e9da15a990289f8289c5dbd22bd139e5970cb8c6",
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
      "end": 90,
      "text": "Mensaje importante del administrador de Universidad Iberoamericana Campus Ciudad de México"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 73,
      "text": "Tiene (2) mensajes importantes sin leer de nuestro equipo administrador. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 73,
      "end": 124,
      "text": "Haga clic en revisar para leer el (los) mensaje(s)."
    }
  ],
  "passA": {
    "requestSha256": "dd440546ca3a7440d07f0a80c924c597a875dc1f2539244ea41627dda7203e51",
    "capturedAt": "2026-09-22T03:52:11.569Z",
    "elapsedMs": 579.894604000001,
    "successfulAttemptElapsedMs": 578.8304340000032,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.04
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.05
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.15
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.96
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.12
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.07
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 0.01,
            "active_request": 0.99,
            "educational_or_quoted": 0
          },
          "confidence": 0.98
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.01,
            "mixed_or_unknown": 0.02,
            "sender_supplied": 0.19,
            "no_sensitive_action": 0.78
          },
          "confidence": 0.71
        }
      },
      "usage": {
        "input_tokens": 4916,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "4b6a4959a0c75c08d3c17579e49de4d2d2ad5f31c522b65e3284b091302ca0a5",
    "capturedAt": "2026-09-22T03:52:12.095Z",
    "elapsedMs": 524.5693299999984,
    "successfulAttemptElapsedMs": 523.4387839999981,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:1": 0.02,
            "body:0": 0.21,
            "NONE": 0.01,
            "subject:0": 0.76
          },
          "confidence": 0.69
        }
      },
      "usage": {
        "input_tokens": 749,
        "output_tokens": 59
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1106.1721550000075,
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
        "status": "selected",
        "segmentId": "subject:0"
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
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 982,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-202",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:10.990Z",
    "offsetMs": 0.7579590000095777
  },
  {
    "seq": 983,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-202",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:11.569Z",
    "offsetMs": 579.8958339999954,
    "elapsedMs": 578.8304340000032,
    "outcome": "success"
  },
  {
    "seq": 984,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-202",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:11.571Z",
    "offsetMs": 582.2254280000052
  },
  {
    "seq": 985,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-202",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:12.095Z",
    "offsetMs": 1105.995196999982,
    "elapsedMs": 523.4387839999981,
    "outcome": "success"
  },
  {
    "seq": 986,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-202",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:12.095Z",
    "offsetMs": 1106.2115659999836,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "e130873d41c61c4b84ab1aff8313e29903d81163a9ad6c65082d290682174a3e";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":983},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":985},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":986}} as const;
export const projectionSha256 = "fe8d1b5ffca857d097012f0f862a7f5615a3f594dedc06caef789e15f6788299";
