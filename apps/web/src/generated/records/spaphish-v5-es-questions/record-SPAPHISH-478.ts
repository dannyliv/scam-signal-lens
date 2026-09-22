import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-478",
  "inputSha256": "b87c620cbecb205b5612ae77da795def2ad3aead3b3ada6372d41c5238c77261",
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
      "text": "El 2025.07.29, tus fotos y videos serán eliminados. "
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
      "text": "El 2025.07.29, tus fotos y videos seran eliminados. "
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
    "requestSha256": "b68f649156756cdbd017e176f89c3f662bd1a6aef20e26edb8c1938eee4641f8",
    "capturedAt": "2026-09-22T03:57:41.871Z",
    "elapsedMs": 632.0367209999822,
    "successfulAttemptElapsedMs": 629.710892999894,
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
          "noul": 0.95
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.49
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
          "noul": 0.04
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
            "educational_or_quoted": 0,
            "informational": 0.02,
            "mixed_or_unclear": 0,
            "active_request": 0.98
          },
          "confidence": 0.98
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.04,
            "mixed_or_unknown": 0.09,
            "independently_established": 0,
            "no_sensitive_action": 0.87
          },
          "confidence": 0.83
        }
      },
      "usage": {
        "input_tokens": 4945,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "2b619f78ba9cb8f4afebd54d9d0aa635be74ec6590f817a5b2b8234db797179d",
    "capturedAt": "2026-09-22T03:57:42.447Z",
    "elapsedMs": 573.9363000000594,
    "successfulAttemptElapsedMs": 571.8760669999756,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:2",
          "probabilities": {
            "subject:1": 0.21,
            "body:0": 0,
            "subject:2": 0.56,
            "body:1": 0.15,
            "NONE": 0,
            "body:2": 0.08,
            "subject:0": 0
          },
          "confidence": 0.47
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:1": 0.01,
            "NONE": 0.63,
            "subject:2": 0.01,
            "body:1": 0.01,
            "body:2": 0.01,
            "body:0": 0.1,
            "subject:0": 0.23
          },
          "confidence": 0.57
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:1": 0,
            "body:0": 0,
            "subject:2": 0.15,
            "body:1": 0,
            "body:2": 0.08,
            "NONE": 0.77,
            "subject:0": 0
          },
          "confidence": 0.72
        }
      },
      "usage": {
        "input_tokens": 1828,
        "output_tokens": 250
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1207.4823580000084,
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
    "seq": 2347,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-478",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:41.241Z",
    "offsetMs": 1.9049129999475554
  },
  {
    "seq": 2348,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-478",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:41.871Z",
    "offsetMs": 632.0368199999211,
    "elapsedMs": 629.710892999894,
    "outcome": "success"
  },
  {
    "seq": 2349,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-478",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:41.874Z",
    "offsetMs": 635.0539819999831
  },
  {
    "seq": 2350,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-478",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:42.446Z",
    "offsetMs": 1207.1989039999899,
    "elapsedMs": 571.8760669999756,
    "outcome": "success"
  },
  {
    "seq": 2351,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-478",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:42.447Z",
    "offsetMs": 1207.5418329999084,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "64b4816b7f3ff2ffda58bc911bbbddadc526349702c3e017a1197dcc66f07653";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2348},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2350},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2351}} as const;
export const projectionSha256 = "42c8c654afca8a6bda6d57737e0970dff0fc628990cd12c10e318e5cf2d627cc";
