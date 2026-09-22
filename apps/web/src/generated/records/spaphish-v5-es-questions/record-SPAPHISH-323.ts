import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-323",
  "inputSha256": "21135fe66c562a6757bc342c5ab4f00887518b59b436851e38a059e411a36e07",
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
      "end": 240,
      "text": "Responder la encuesta ="
    }
  ],
  "passA": {
    "requestSha256": "4a314fd2b7943312a9e1ce8706d2e165207c34cefc4d87eb3c0693c6816e15c7",
    "capturedAt": "2026-09-22T03:54:37.863Z",
    "elapsedMs": 622.3186180000193,
    "successfulAttemptElapsedMs": 620.6375530000078,
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
          "noul": 0.08
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.69
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.08
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.07
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.13
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.08
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "informational": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.8,
            "mixed_or_unknown": 0.04,
            "sender_supplied": 0.16,
            "independently_established": 0
          },
          "confidence": 0.73
        }
      },
      "usage": {
        "input_tokens": 4941,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "c419185e2687532d266e9b438403438a3b02cfd10c9761fde94f9513939b2bb7",
    "capturedAt": "2026-09-22T03:54:38.416Z",
    "elapsedMs": 551.6507270000293,
    "successfulAttemptElapsedMs": 550.5590469999588,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0.03,
            "body:0": 0.01,
            "NONE": 0.29,
            "subject:0": 0,
            "body:4": 0,
            "body:3": 0.05,
            "body:1": 0.62
          },
          "confidence": 0.55
        }
      },
      "usage": {
        "input_tokens": 841,
        "output_tokens": 86
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1175.414030999993,
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
    "seq": 1577,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-323",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:37.242Z",
    "offsetMs": 1.1815409999690019
  },
  {
    "seq": 1578,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-323",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:37.863Z",
    "offsetMs": 622.319182999956,
    "elapsedMs": 620.6375530000078,
    "outcome": "success"
  },
  {
    "seq": 1579,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-323",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:37.865Z",
    "offsetMs": 624.3211229999433
  },
  {
    "seq": 1580,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-323",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:38.416Z",
    "offsetMs": 1175.168937999988,
    "elapsedMs": 550.5590469999588,
    "outcome": "success"
  },
  {
    "seq": 1581,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-323",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:38.416Z",
    "offsetMs": 1175.4658109999727,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "291679380e662901dbab5e55d37010d5282b94a88b645f8698149cf0b78a0ee4";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1578},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1580},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1581}} as const;
export const projectionSha256 = "930940f70c43bf4eec471257f2566b5ff68f7790891607cbff882844e2a9b813";
