import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-219",
  "inputSha256": "b12d1732f4d25eba86e80d04a3582effb1cb8d2dd62a7d1d0cd7d77e6c409eba",
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
      "end": 19,
      "text": "Espera tu respuesta"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 98,
      "text": "Hola, te envié un mensaje importante sobre fondos no reclamados y nunca recibí ningún comentario. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 98,
      "end": 246,
      "text": "Confirme que este envío de correo electrónico aún está activo y comuníquese con nosotros directamente o lo antes posible para obtener más detalles. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 246,
      "end": 263,
      "text": "Sinceramente Sr. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 263,
      "end": 269,
      "text": "Carlos"
    }
  ],
  "passA": {
    "requestSha256": "0e90a0790c5d3d2113bb9a7c3de5dfca3e3b4864b276f3e570e61645491b7533",
    "capturedAt": "2026-09-22T03:52:32.495Z",
    "elapsedMs": 661.376110000012,
    "successfulAttemptElapsedMs": 660.406306000019,
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
          "noul": 0.17
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.08
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.57
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.24
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.3
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.28
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.07
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.12
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
            "mixed_or_unclear": 0,
            "active_request": 1,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.34,
            "mixed_or_unknown": 0.04,
            "no_sensitive_action": 0.62,
            "independently_established": 0
          },
          "confidence": 0.49
        }
      },
      "usage": {
        "input_tokens": 4935,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "a42f5085a35f2a75bec4dac0f21bfc89347d0875c18f0765ea51fa9bb3fcd2d5",
    "capturedAt": "2026-09-22T03:52:33.188Z",
    "elapsedMs": 691.9981470000348,
    "successfulAttemptElapsedMs": 690.853151999996,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.09,
            "subject:0": 0,
            "body:1": 0.91,
            "body:2": 0,
            "body:0": 0,
            "body:3": 0
          },
          "confidence": 0.89
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "NONE": 0.39,
            "subject:0": 0,
            "body:1": 0.1,
            "body:2": 0.42,
            "body:0": 0.05,
            "body:3": 0.04
          },
          "confidence": 0.3
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.55,
            "subject:0": 0,
            "body:1": 0.45,
            "body:2": 0,
            "body:0": 0,
            "body:3": 0
          },
          "confidence": 0.45
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.89,
            "subject:0": 0,
            "body:1": 0.07,
            "body:2": 0,
            "body:0": 0.04,
            "body:3": 0
          },
          "confidence": 0.87
        }
      },
      "usage": {
        "input_tokens": 2224,
        "output_tokens": 301
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1354.9563900000066,
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
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 1066,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-219",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:31.834Z",
    "offsetMs": 0.7019640000071377
  },
  {
    "seq": 1067,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-219",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:32.494Z",
    "offsetMs": 661.3727840000065,
    "elapsedMs": 660.406306000019,
    "outcome": "success"
  },
  {
    "seq": 1068,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-219",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:32.496Z",
    "offsetMs": 663.4259099999908
  },
  {
    "seq": 1069,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-219",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:33.188Z",
    "offsetMs": 1354.6971279999707,
    "elapsedMs": 690.853151999996,
    "outcome": "success"
  },
  {
    "seq": 1070,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-219",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:33.188Z",
    "offsetMs": 1355.0004639999825,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "da49e89cb6a1a219ed1bff7f1ad7216be2396c4893fc7a4780649c36768459ca";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1067},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1069},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1070}} as const;
export const projectionSha256 = "5d127ec577c3e540cd033cf00686446d5707a47688366acec39358a9813ef487";
