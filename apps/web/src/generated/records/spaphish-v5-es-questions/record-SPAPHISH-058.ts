import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-058",
  "inputSha256": "1f2a4a92f43c55751dc6933c26b1dfda253f1c4baff07f85a0c8d8b518ac77b5",
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
      "text": "Aviso importante"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 29,
      "text": "Estimados Padres de Familia:\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 29,
      "end": 30,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 30,
      "end": 104,
      "text": "Espero se encuentren muy bien, por este medio les informamos que debido a\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 104,
      "end": 176,
      "text": "los cambios en las fechas de aplicación de exámenes correspondientes al\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 176,
      "end": 253,
      "text": "primer parcial, la firma de boletas se cambia para el martes 12 de noviembre\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 253,
      "end": 269,
      "text": "a las 8:30 a.m.\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 269,
      "end": 270,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 270,
      "end": 297,
      "text": "Gracias por su comprensión."
    }
  ],
  "passA": {
    "requestSha256": "b59425a7e118a519c71f3fca41f35c98265140f132efffacf2d836ed95c626da",
    "capturedAt": "2026-09-22T03:49:21.338Z",
    "elapsedMs": 635.6385560000053,
    "successfulAttemptElapsedMs": 634.8165520000039,
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
          "noul": 0.02
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
          "noul": 0.1
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.84
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 1,
            "active_request": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "sender_supplied": 0,
            "no_sensitive_action": 1
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 4958,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "69cd67b59a9c8b0e6011e23471a558c1cbe96fee877408a4843cff4745a48a43",
    "capturedAt": "2026-09-22T03:49:21.932Z",
    "elapsedMs": 591.799039000005,
    "successfulAttemptElapsedMs": 590.6274269999994,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:4": 0.05,
            "body:3": 0.01,
            "NONE": 0.16,
            "body:1": 0,
            "body:5": 0,
            "subject:0": 0.01,
            "body:7": 0,
            "body:0": 0.67,
            "body:2": 0.1,
            "body:6": 0
          },
          "confidence": 0.63
        }
      },
      "usage": {
        "input_tokens": 910,
        "output_tokens": 113
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1229.7651009999972,
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
    "seq": 281,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-058",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:20.703Z",
    "offsetMs": 0.5085229999967851
  },
  {
    "seq": 282,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-058",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:21.338Z",
    "offsetMs": 635.6385020000016,
    "elapsedMs": 634.8165520000039,
    "outcome": "success"
  },
  {
    "seq": 283,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-058",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:21.340Z",
    "offsetMs": 638.4570959999983
  },
  {
    "seq": 284,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-058",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:21.932Z",
    "offsetMs": 1229.538102999999,
    "elapsedMs": 590.6274269999994,
    "outcome": "success"
  },
  {
    "seq": 285,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-058",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:21.932Z",
    "offsetMs": 1229.8161959999998,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "fb8461a641df94b92b7bd402ca61b18d4bf4531471fec2f3089915d294cdf8ec";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":282},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":284},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":285}} as const;
export const projectionSha256 = "ddbffcb3d6e131f8149d5774e4df2e3ac6f79ec4039b21bb2c5ba59f339afcbe";
