import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-077",
  "inputSha256": "871022308ba4dc36142df8cd934c7876fecc061a16f6906256437ac5e15ad6ef",
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
      "end": 62,
      "text": "¡Este mensaje fue enviado por alguien ajeno a la Universidad! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 62,
      "end": 212,
      "text": "**************************************************************************** Tiene (2) mensajes importantes sin leer de nuestro equipo administrador. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 212,
      "end": 263,
      "text": "Haga clic en revisar para leer el (los) mensaje(s)."
    }
  ],
  "passA": {
    "requestSha256": "471904051ef2297e48bacedd1ef938f688e608b1d9075d7b1474a44826fd0319",
    "capturedAt": "2026-09-22T03:49:44.583Z",
    "elapsedMs": 652.9992990000028,
    "successfulAttemptElapsedMs": 652.1651030000066,
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
          "noul": 0.07
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
          "noul": 0.32
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.92
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
          "noul": 0.07
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.06
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 0.95,
            "informational": 0.04,
            "mixed_or_unclear": 0.01
          },
          "confidence": 0.93
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.02,
            "sender_supplied": 0.39,
            "independently_established": 0,
            "no_sensitive_action": 0.59
          },
          "confidence": 0.45
        }
      },
      "usage": {
        "input_tokens": 4929,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "6bf206215658fbf3b98fa01177cefe03a998210cc731048b1300143c65e50be8",
    "capturedAt": "2026-09-22T03:49:45.145Z",
    "elapsedMs": 560.7552029999933,
    "successfulAttemptElapsedMs": 559.915651000003,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.29,
            "body:1": 0.13,
            "NONE": 0.57,
            "subject:0": 0.01,
            "body:0": 0
          },
          "confidence": 0.46
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:2": 0.02,
            "body:1": 0.35,
            "NONE": 0.02,
            "subject:0": 0.61,
            "body:0": 0
          },
          "confidence": 0.51
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.3,
            "body:1": 0.01,
            "NONE": 0.67,
            "subject:0": 0,
            "body:0": 0.02
          },
          "confidence": 0.58
        }
      },
      "usage": {
        "input_tokens": 1680,
        "output_tokens": 196
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1215.3501569999935,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "low_confidence",
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
    "seq": 375,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-077",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:43.930Z",
    "offsetMs": 0.5704249999980675
  },
  {
    "seq": 376,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-077",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:44.583Z",
    "offsetMs": 652.999868999992,
    "elapsedMs": 652.1651030000066,
    "outcome": "success"
  },
  {
    "seq": 377,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-077",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:44.585Z",
    "offsetMs": 654.8568030000024
  },
  {
    "seq": 378,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-077",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:45.145Z",
    "offsetMs": 1215.1208760000009,
    "elapsedMs": 559.915651000003,
    "outcome": "success"
  },
  {
    "seq": 379,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-077",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:45.145Z",
    "offsetMs": 1215.3959789999935,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "54d2f94c1966919f21da4a7203df3efb8770da1c4c91bea5612717566caa6ab4";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":376},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":378},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":379}} as const;
export const projectionSha256 = "36a22183d0436d16955bf01aa06bc96c4503a2c08a4c7db75daccc6c659e85cc";
