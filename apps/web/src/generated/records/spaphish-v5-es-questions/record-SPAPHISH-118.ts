import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-118",
  "inputSha256": "d7b19cbb6f971d67d02c665cac943a2c4e752f9b1d0aa71c7dfc5f2e831d49cf",
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
      "end": 35,
      "text": "¿cómo fue su experiencia de compra?"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 18,
      "text": "¿Cómo le pareció? "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 18,
      "end": 49,
      "text": "Gracias por comprar con Apple. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 49,
      "end": 141,
      "text": "Cuéntenos cómo fue su experiencia al hacer su pedido, incluso si todavía no lo ha recibido. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 141,
      "end": 217,
      "text": "¡Responda la encuesta y podrá ganar un dispositivo de Apple cuando termine! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 217,
      "end": 238,
      "text": "Responder la encuesta"
    }
  ],
  "passA": {
    "requestSha256": "8ce9dcf36dc90b038c74dc30c0a03e95ed12c3d92a21e4d40b3eb7b08099b309",
    "capturedAt": "2026-09-22T03:50:33.731Z",
    "elapsedMs": 684.7941219999921,
    "successfulAttemptElapsedMs": 683.9896279999812,
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
          "noul": 0.09
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
          "noul": 0.07
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.76
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.07
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
          "noul": 0.11
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.25,
            "mixed_or_unknown": 0.02,
            "independently_established": 0,
            "no_sensitive_action": 0.73
          },
          "confidence": 0.65
        }
      },
      "usage": {
        "input_tokens": 4940,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "73fb7bc3822608063681ba4855869367268305bc47a00177277e97e96dafadc0",
    "capturedAt": "2026-09-22T03:50:34.263Z",
    "elapsedMs": 530.6131609999866,
    "successfulAttemptElapsedMs": 529.6524909999862,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:3": 0.03,
            "subject:0": 0,
            "body:2": 0.02,
            "NONE": 0.33,
            "body:4": 0.02,
            "body:0": 0.01,
            "body:1": 0.59
          },
          "confidence": 0.52
        }
      },
      "usage": {
        "input_tokens": 839,
        "output_tokens": 86
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1217.0957400000188,
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
    "seq": 572,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-118",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:33.046Z",
    "offsetMs": 0.5246310000075027
  },
  {
    "seq": 573,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-118",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:33.731Z",
    "offsetMs": 684.7967500000086,
    "elapsedMs": 683.9896279999812,
    "outcome": "success"
  },
  {
    "seq": 574,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-118",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:33.733Z",
    "offsetMs": 686.9208790000121
  },
  {
    "seq": 575,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-118",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:34.263Z",
    "offsetMs": 1216.9024510000017,
    "elapsedMs": 529.6524909999862,
    "outcome": "success"
  },
  {
    "seq": 576,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-118",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:34.263Z",
    "offsetMs": 1217.1545840000035,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "c0174801f6f187f94adbbc9286cc8208f27d08e376f642db91ac8f20066d6f84";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":573},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":575},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":576}} as const;
export const projectionSha256 = "fe6638b7b1da5275a2274bae5ae749d45fc9ea71a47f8c84a9e28d972a7da306";
