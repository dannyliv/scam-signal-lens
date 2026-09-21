import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-218",
  "inputSha256": "1807fd62254b23ca831f88720f49ec1c0988c9f9ba0233b5f426627a48498fd8",
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
      "end": 73,
      "text": ">>Ezequiela Miguelina!! - Tienes un (1) paquete en espera de entrega 📦. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 73,
      "end": 121,
      "text": "Usa tu código para rastrearlo y recibirlo ___🚚."
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 69,
      "text": "❒ ENTREGA DEL PAQUETE PENDIENTE ◉ Registro / Inicio de sesión ❒SEUR. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 69,
      "end": 298,
      "text": "9988776654 SEGUIMIENTO ➢ Andrea López Tienes (1) paquete pendiente de entrega -------------------------------------------------------------------------------- Confirma tus datos de envío ■ tienes un paquete pendiente de entrega. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 298,
      "end": 411,
      "text": "Sigue tu pedido en tiempo real y programa la entrega para asegurarte de recibirlo a la hora que más te convenga! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 411,
      "end": 496,
      "text": "PROGRAMA SU ENTREGA Si no deseas recibir más correos electrónicos, desconéctate aquí."
    }
  ],
  "passA": {
    "requestSha256": "079a5eb76ab2215dba459815533e4f27b0a5a4afce0b07a003956c0e0f6d48d1",
    "capturedAt": "2026-09-20T23:45:03.459Z",
    "elapsedMs": 168.65829200000735,
    "successfulAttemptElapsedMs": 167.7111670000013,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.31
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.28
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.26
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.83
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.27
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.13
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.32,
            "independently_established": 0,
            "sender_supplied": 0.64,
            "mixed_or_unknown": 0.04
          },
          "confidence": 0.52
        }
      },
      "usage": {
        "input_tokens": 3583,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "8a5722ed9dba2b999c51ca72e551af1f7dae5a07236a77f0a9159c3927e526d9",
    "capturedAt": "2026-09-20T23:45:03.634Z",
    "elapsedMs": 173.90362499999173,
    "successfulAttemptElapsedMs": 172.6658749999915,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.29,
            "subject:0": 0,
            "body:1": 0.04,
            "body:2": 0.01,
            "body:3": 0.01,
            "NONE": 0.44,
            "subject:1": 0.21
          },
          "confidence": 0.34
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.02,
            "subject:0": 0,
            "body:1": 0.45,
            "body:2": 0.01,
            "NONE": 0.51,
            "body:3": 0.01,
            "subject:1": 0
          },
          "confidence": 0.43
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.02,
            "subject:0": 0.01,
            "subject:1": 0.05,
            "body:2": 0.14,
            "NONE": 0.62,
            "body:3": 0.13,
            "body:1": 0.03
          },
          "confidence": 0.56
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.8,
            "subject:0": 0,
            "subject:1": 0,
            "body:2": 0.01,
            "NONE": 0.11,
            "body:3": 0.01,
            "body:1": 0.07
          },
          "confidence": 0.77
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.01,
            "subject:0": 0,
            "body:1": 0.01,
            "body:2": 0.02,
            "body:3": 0.02,
            "NONE": 0.92,
            "subject:1": 0.02
          },
          "confidence": 0.91
        }
      },
      "usage": {
        "input_tokens": 2856,
        "output_tokens": 412
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 344.3214169999992,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "request_route_low_confidence"
    ],
    "evidence": {
      "credential_request": {
        "status": "low_confidence",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "low_confidence",
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
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 1065,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-218",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:03.290Z",
    "offsetMs": 0.6017500000016298
  },
  {
    "seq": 1066,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-218",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:03.459Z",
    "offsetMs": 168.6581670000014,
    "elapsedMs": 167.7111670000013,
    "outcome": "success"
  },
  {
    "seq": 1067,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-218",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:03.461Z",
    "offsetMs": 170.7317500000063
  },
  {
    "seq": 1068,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-218",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:03.634Z",
    "offsetMs": 343.9199590000062,
    "elapsedMs": 172.6658749999915,
    "outcome": "success"
  },
  {
    "seq": 1069,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-218",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:03.634Z",
    "offsetMs": 344.4106250000041,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a03df05214e341ca6b619e50e77efbd54d18ad54d5ef77727fe9794b74260047";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1066},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1068},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1069}} as const;
export const projectionSha256 = "d42555958c4b9cffde6154095701832a0babd0fef0eca632f454031e99daabc9";
