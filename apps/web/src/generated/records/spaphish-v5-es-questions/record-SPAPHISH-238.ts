import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-238",
  "inputSha256": "64b0fbdf135e1fd550e738f131fc51d03691064e9db29bce629325b10a74c5d4",
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
      "end": 34,
      "text": "Has ganado la freidora Ninja Air !"
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 34,
      "end": 41,
      "text": "# 4Y9Tf"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 41,
      "text": "Oferta Especial - Freidora de Aire Ninja\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 41,
      "end": 60,
      "text": "Freír A Perfección\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 60,
      "end": 90,
      "text": "Oferta limitada de Sam's Club\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 90,
      "end": 109,
      "text": "¡Consíguelo ahora!\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 109,
      "end": 110,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 110,
      "end": 133,
      "text": "Freidora de aire Ninja\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 133,
      "end": 134,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 134,
      "end": 148,
      "text": "¡Felicidades!\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 148,
      "end": 221,
      "text": "¡Has sido elegido para participar en nuestro Programa de Lealtad GRATIS!\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 221,
      "end": 222,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 222,
      "end": 238,
      "text": "¡CONFIRMA AHORA!"
    }
  ],
  "passA": {
    "requestSha256": "c2c59d8fdaaebe4a0b1c4bdb4abf19a0dff0a14924ffe01ea15138d3f9d18496",
    "capturedAt": "2026-09-22T03:52:54.210Z",
    "elapsedMs": 601.8824100000202,
    "successfulAttemptElapsedMs": 600.5570030000526,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.08
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.19
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.28
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.82
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.61
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.28
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.22
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.09
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
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "active_request": 1,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.61,
            "sender_supplied": 0.28,
            "mixed_or_unknown": 0.11,
            "independently_established": 0
          },
          "confidence": 0.48
        }
      },
      "usage": {
        "input_tokens": 4956,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "cd06cfbdb497834d910de0f10a20284a0bbcb54f2f1f29ec97b4596ae1f281c8",
    "capturedAt": "2026-09-22T03:52:54.724Z",
    "elapsedMs": 512.4688050000113,
    "successfulAttemptElapsedMs": 511.2460880000144,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:9": 0,
            "NONE": 0.62,
            "body:6": 0,
            "body:7": 0,
            "subject:0": 0,
            "body:4": 0,
            "subject:1": 0,
            "body:8": 0.01,
            "body:0": 0,
            "body:3": 0.24000000000000002,
            "body:1": 0,
            "body:5": 0,
            "body:2": 0,
            "body:10": 0.13
          },
          "confidence": 0.58
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:10",
          "probabilities": {
            "body:9": 0,
            "body:10": 0.65,
            "body:6": 0,
            "body:7": 0,
            "subject:0": 0,
            "body:4": 0,
            "subject:1": 0,
            "body:8": 0,
            "body:0": 0,
            "body:3": 0.07,
            "body:1": 0,
            "body:5": 0,
            "body:2": 0.28,
            "NONE": 0
          },
          "confidence": 0.61
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:9": 0,
            "NONE": 0.3,
            "body:6": 0,
            "body:7": 0,
            "subject:0": 0.01,
            "body:4": 0,
            "subject:1": 0,
            "body:8": 0.16,
            "body:0": 0.01,
            "body:3": 0,
            "body:2": 0.5,
            "body:5": 0,
            "body:1": 0,
            "body:10": 0.02
          },
          "confidence": 0.45
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:9": 0,
            "NONE": 0.91,
            "body:6": 0,
            "body:7": 0,
            "subject:0": 0,
            "body:4": 0,
            "subject:1": 0,
            "body:8": 0,
            "body:0": 0,
            "body:3": 0.01,
            "body:1": 0,
            "body:5": 0,
            "body:2": 0,
            "body:10": 0.08
          },
          "confidence": 0.89
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:9": 0,
            "body:10": 0.06,
            "body:6": 0,
            "body:7": 0,
            "subject:0": 0,
            "body:4": 0,
            "subject:1": 0,
            "body:8": 0.01,
            "body:0": 0,
            "body:3": 0.01,
            "body:1": 0,
            "body:5": 0,
            "body:2": 0,
            "NONE": 0.92
          },
          "confidence": 0.9
        }
      },
      "usage": {
        "input_tokens": 3336,
        "output_tokens": 737
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1116.16732399998,
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
        "status": "low_confidence",
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
        "status": "none_selected",
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
    "seq": 1159,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-238",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:53.609Z",
    "offsetMs": 0.9796199999982491
  },
  {
    "seq": 1160,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-238",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:54.210Z",
    "offsetMs": 601.8853310000268,
    "elapsedMs": 600.5570030000526,
    "outcome": "success"
  },
  {
    "seq": 1161,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-238",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:54.212Z",
    "offsetMs": 604.2200440000161
  },
  {
    "seq": 1162,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-238",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:54.724Z",
    "offsetMs": 1115.8256399999955,
    "elapsedMs": 511.2460880000144,
    "outcome": "success"
  },
  {
    "seq": 1163,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-238",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:54.724Z",
    "offsetMs": 1116.2290280000307,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "cbf0378b1918c138280f59afdfdf4b145f52740100191a67a5a8f7ad961a283a";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1160},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1162},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1163}} as const;
export const projectionSha256 = "f8b6683f7e4c05eb368e1f2de96cafb62c8bcb2e37927b9eda260170deb4791f";
