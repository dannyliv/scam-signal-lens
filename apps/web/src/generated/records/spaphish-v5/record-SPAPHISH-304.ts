import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-304",
  "inputSha256": "869f3a963956a084d026c25876e1e3b52dad6dd1fb508d5e6e5e999b3d2f5f87",
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
      "end": 62,
      "text": ">>Pablito!! -  Tienes un (1) paquete pendiente de entrega 📦. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 62,
      "end": 108,
      "text": "Usa tu código para seguirlo y recibirlo ___🚚."
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 44,
      "text": "Tienes (1) paquete esperando ser entregado. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 44,
      "end": 77,
      "text": "¡ENTREGA DEL PAQUETE SUSPENDIDO! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 77,
      "end": 160,
      "text": "ESTADO:Detenido en el centro de distribución Se puede aplicar una tarifa de envío. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 160,
      "end": 241,
      "text": "Su código de seguimiento:998877665 Entrega programada ahora Cancelar suscripción."
    }
  ],
  "passA": {
    "requestSha256": "4c7723eafc91cbc065d99b02af4f64a641a2472acb86cd0d20c24730aa9ae500",
    "capturedAt": "2026-09-20T23:45:33.894Z",
    "elapsedMs": 244.33474999999453,
    "successfulAttemptElapsedMs": 243.20441700000083,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.09
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.09
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.28
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.81
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.39
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.35
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.46
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
          "noul": 0.06
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0.08,
            "informational": 0.03,
            "active_request": 0.89,
            "educational_or_quoted": 0
          },
          "confidence": 0.86
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.63,
            "sender_supplied": 0.33,
            "mixed_or_unknown": 0.04
          },
          "confidence": 0.51
        }
      },
      "usage": {
        "input_tokens": 3532,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "713b5f33e3bd64aa1496ba20bdca9e55ab2af1146a8bc360a9eb165227588d19",
    "capturedAt": "2026-09-20T23:45:34.097Z",
    "elapsedMs": 201.9384590000118,
    "successfulAttemptElapsedMs": 200.86525000000256,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "NONE": 0.47,
            "body:1": 0,
            "body:2": 0.52,
            "body:3": 0.01,
            "subject:1": 0,
            "body:0": 0,
            "subject:0": 0
          },
          "confidence": 0.43
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "NONE": 0.02,
            "body:1": 0.16,
            "body:2": 0.44,
            "body:3": 0.33,
            "subject:1": 0.04,
            "subject:0": 0.01,
            "body:0": 0
          },
          "confidence": 0.36
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.01,
            "body:1": 0.03,
            "body:2": 0.05,
            "body:3": 0.05,
            "subject:1": 0.01,
            "subject:0": 0.07,
            "NONE": 0.78
          },
          "confidence": 0.73
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "subject:0": 0,
            "body:2": 0,
            "body:3": 0.11,
            "subject:1": 0.06,
            "body:1": 0.01,
            "NONE": 0.82
          },
          "confidence": 0.79
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:0": 0,
            "subject:0": 0,
            "body:2": 0.8,
            "body:3": 0,
            "subject:1": 0,
            "NONE": 0.2,
            "body:1": 0
          },
          "confidence": 0.75
        }
      },
      "usage": {
        "input_tokens": 2530,
        "output_tokens": 418
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 447.9819160000043,
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
        "status": "none_selected",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "none_selected",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "selected",
        "segmentId": "body:2"
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
    "seq": 1488,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-304",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:33.650Z",
    "offsetMs": 0.7600410000013653
  },
  {
    "seq": 1489,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-304",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:33.894Z",
    "offsetMs": 244.33704100000614,
    "elapsedMs": 243.20441700000083,
    "outcome": "success"
  },
  {
    "seq": 1490,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-304",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:33.895Z",
    "offsetMs": 246.0846659999952
  },
  {
    "seq": 1491,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-304",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:34.097Z",
    "offsetMs": 447.3480830000044,
    "elapsedMs": 200.86525000000256,
    "outcome": "success"
  },
  {
    "seq": 1492,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-304",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:34.097Z",
    "offsetMs": 448.0998330000002,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "001e43741ad2ca172eb95acfd5bbc4fb7fc2eb7d3dd0ac7c77e616c1e32961d4";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1489},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1491},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1492}} as const;
export const projectionSha256 = "3f008f27e5188a015c0946135df283dc9f043385220abe14cea0ad8a637709e7";
