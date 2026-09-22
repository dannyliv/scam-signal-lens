import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-364",
  "inputSha256": "17bda54cc50bceeef1f040a20adf4a70b27cb8a9c0395d6ac61bdc46999d5748",
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
      "end": 22,
      "text": "Verificación de cuenta"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 73,
      "text": "Estimado/a Guadalupe F, ¡Gracias por crear una cuenta en Little Caesars! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 73,
      "end": 101,
      "text": "¡La pizzería que te hace la\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 101,
      "end": 118,
      "text": " vida más fácil! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 118,
      "end": 207,
      "text": "Antes de realizar su primer pedido, active su cuenta al verificar su correo electrónico. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 207,
      "end": 254,
      "text": "Esto garantiza la seguridad de su información. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 254,
      "end": 271,
      "text": "¡Muchas gracias! "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 271,
      "end": 335,
      "text": "*** Este mensaje es generado automáticamente, no lo responda ***"
    }
  ],
  "passA": {
    "requestSha256": "6ea3704193b03f6ff50327e11dc8131785a612b83b8274d4f159f70193554a25",
    "capturedAt": "2026-09-22T03:55:28.291Z",
    "elapsedMs": 596.6732170000323,
    "successfulAttemptElapsedMs": 595.2164440000197,
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
          "noul": 0.05
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
          "noul": 0.12
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.67
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.07
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 0.96,
            "informational": 0.04
          },
          "confidence": 0.94
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.82,
            "sender_supplied": 0.12,
            "independently_established": 0.02,
            "mixed_or_unknown": 0.04
          },
          "confidence": 0.77
        }
      },
      "usage": {
        "input_tokens": 4960,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "365b06467ed401262f1d0b7e21042da77be093c73d0fa4833f412cf864b59a73",
    "capturedAt": "2026-09-22T03:55:28.804Z",
    "elapsedMs": 512.5364309999859,
    "successfulAttemptElapsedMs": 511.0992420000257,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0.01,
            "subject:0": 0.01,
            "body:1": 0.01,
            "body:4": 0.09,
            "NONE": 0.55,
            "body:5": 0,
            "body:0": 0.18,
            "body:2": 0,
            "body:3": 0.14
          },
          "confidence": 0.5
        }
      },
      "usage": {
        "input_tokens": 907,
        "output_tokens": 102
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1110.763917000033,
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
    "seq": 1781,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-364",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:27.695Z",
    "offsetMs": 1.1544540000031702
  },
  {
    "seq": 1782,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-364",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:28.290Z",
    "offsetMs": 596.6719340000418,
    "elapsedMs": 595.2164440000197,
    "outcome": "success"
  },
  {
    "seq": 1783,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-364",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:28.293Z",
    "offsetMs": 599.1163079999969
  },
  {
    "seq": 1784,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-364",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:28.804Z",
    "offsetMs": 1110.578078999999,
    "elapsedMs": 511.0992420000257,
    "outcome": "success"
  },
  {
    "seq": 1785,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-364",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:28.804Z",
    "offsetMs": 1110.8040920000058,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "8d0166a35d67ac9aea74d00e27911628f0a9e73d4836c6e084ea0a9f46343204";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1782},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1784},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1785}} as const;
export const projectionSha256 = "aa14b5a46dd6818abf3bd425a3e6649165f1f635166ed183d195a965fd97e90a";
