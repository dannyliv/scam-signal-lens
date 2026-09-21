import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-219",
  "inputSha256": "b12d1732f4d25eba86e80d04a3582effb1cb8d2dd62a7d1d0cd7d77e6c409eba",
  "questionBundleSha256": "c38d45be636041965e7e231cffdf2831ec083c7780ea13a94086fdf24bf7bc08",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "source_messages",
  "policySha256": "3435135d6058476d4262ecbc936abf95af4993b455dfab35adc8b17f3fe6ad6a",
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
    "requestSha256": "2e0195661aea0581b8d18656a628f899599761724601fdf2d9c91e65129d67ac",
    "capturedAt": "2026-09-20T23:45:03.787Z",
    "elapsedMs": 150.36275000000023,
    "successfulAttemptElapsedMs": 148.38708399998723,
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
          "noul": 0.16
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.11
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.5
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.25
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.3
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
          "noul": 0.06
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.15
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
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
            "no_sensitive_action": 0.62,
            "sender_supplied": 0.35,
            "independently_established": 0.01,
            "mixed_or_unknown": 0.02
          },
          "confidence": 0.49
        }
      },
      "usage": {
        "input_tokens": 3485,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "4e78dc3a70d92df9d75b7c1af25e162d2dcd98454cf8120263b9efe98010be50",
    "capturedAt": "2026-09-20T23:45:04.285Z",
    "elapsedMs": 493.3692499999888,
    "successfulAttemptElapsedMs": 491.551209000012,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "body:1": 0.9400000000000001,
            "subject:0": 0,
            "NONE": 0.06,
            "body:3": 0,
            "body:0": 0
          },
          "confidence": 0.92
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.35,
            "body:1": 0.07,
            "subject:0": 0,
            "NONE": 0.46,
            "body:3": 0.02,
            "body:0": 0.1
          },
          "confidence": 0.34
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "body:1": 0.44,
            "subject:0": 0,
            "NONE": 0.56,
            "body:3": 0,
            "body:0": 0
          },
          "confidence": 0.46
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "body:1": 0.06,
            "NONE": 0.91,
            "subject:0": 0,
            "body:3": 0,
            "body:0": 0.03
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 1810,
        "output_tokens": 299
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 648.0330410000024,
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
    "seq": 1070,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-219",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:03.638Z",
    "offsetMs": 1.315082999994047
  },
  {
    "seq": 1071,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-219",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:03.787Z",
    "offsetMs": 150.364041000008,
    "elapsedMs": 148.38708399998723,
    "outcome": "success"
  },
  {
    "seq": 1072,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-219",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:03.792Z",
    "offsetMs": 155.58079100000032
  },
  {
    "seq": 1073,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-219",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:04.284Z",
    "offsetMs": 647.767583000008,
    "elapsedMs": 491.551209000012,
    "outcome": "success"
  },
  {
    "seq": 1074,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-219",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:04.285Z",
    "offsetMs": 648.1005000000005,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "4f17deba63f1469cfc83ec981df65757f383e2dd2f7b669d61f613fcced68fa6";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1071},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1073},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1074}} as const;
export const projectionSha256 = "112fdb705fda48d8f243cd666ad58aece3ca621f1b47937b12591e8b54598c4a";
