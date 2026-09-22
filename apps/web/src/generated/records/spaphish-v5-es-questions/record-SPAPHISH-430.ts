import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-430",
  "inputSha256": "089ffb7cece3200f6c9b9fc48bcc40063a20b7272412660dcfaf798723464dfb",
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
      "text": "En los martes de ciencia con el MyOwn, conferencia del Dr. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 59,
      "end": 74,
      "text": "Omar López Cruz"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 175,
      "text": "Se invita a toda la comunidad del Centro de Investigación Avanzada (CIA) a la conferencia \"Avances en Cosmología: Relevancia del Premio de Ciencia 2020\", que impartirá el Dr. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 175,
      "end": 310,
      "text": "Alejandro Díaz Reyes, investigador de la Dirección de Estudios Espaciales, el próximo jueves 20 de noviembre a las cuatro de la tarde.\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 310,
      "end": 311,
      "text": "\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 311,
      "end": 455,
      "text": "La plática se transmitirá en vivo por el canal oficial de Portal de Videos del CIA, que pueden ver en https://www.videostream.com/c/CIA-Oficial\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 455,
      "end": 456,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 456,
      "end": 471,
      "text": "¡Los esperamos!"
    }
  ],
  "passA": {
    "requestSha256": "383266ce285515e36e59e7862a678c1432ba7b19355e7076a637a555f75ef1c4",
    "capturedAt": "2026-09-22T03:56:45.325Z",
    "elapsedMs": 769.0812600000063,
    "successfulAttemptElapsedMs": 767.4508940000087,
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
          "noul": 0.05
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.75
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
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.08
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.07
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.46,
            "active_request": 0.54,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.38
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.03,
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "no_sensitive_action": 0.97
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 5016,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "fb0e13ae6d2b0f659af198dd2445d09603fba2f21db3e0d5869a23c8306503cc",
    "capturedAt": "2026-09-22T03:56:45.869Z",
    "elapsedMs": 543.1486900000018,
    "successfulAttemptElapsedMs": 541.3428880000138,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0.01,
            "body:0": 0.13,
            "body:5": 0,
            "NONE": 0.14,
            "subject:1": 0,
            "body:1": 0.67,
            "body:3": 0.04,
            "body:4": 0,
            "body:2": 0
          },
          "confidence": 0.62
        }
      },
      "usage": {
        "input_tokens": 1020,
        "output_tokens": 104
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1313.6148469999898,
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 2109,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-430",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:44.557Z",
    "offsetMs": 1.2711969999945723
  },
  {
    "seq": 2110,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-430",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:45.325Z",
    "offsetMs": 769.081978000002,
    "elapsedMs": 767.4508940000087,
    "outcome": "success"
  },
  {
    "seq": 2111,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-430",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:45.327Z",
    "offsetMs": 771.4967980000074
  },
  {
    "seq": 2112,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-430",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:45.869Z",
    "offsetMs": 1313.4461139999912,
    "elapsedMs": 541.3428880000138,
    "outcome": "success"
  },
  {
    "seq": 2113,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-430",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:45.869Z",
    "offsetMs": 1313.6575650000013,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "97f2ab1b9adf5c914c23c68e329b49dcb932c4740b315d670e172fbc2ed81425";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2110},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2112},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2113}} as const;
export const projectionSha256 = "c8f6294979ea98df577f206d0addcb30253ca4b8be17c0a8da2218b016a4ee6a";
