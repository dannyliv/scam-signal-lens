import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-394",
  "inputSha256": "d7f6e4910258996ecf4c58d9e263fe563ef016e920036f554497b443e6b78289",
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
      "end": 71,
      "text": "Ezequiela Miguelina - Tu paquete está esperando – Completa tu entrega ."
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 71,
      "end": 73,
      "text": "📦"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 61,
      "text": "ENTREGA DEL PAQUETE PENDIENTE ◉ Registro / Inicio de sesión ."
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 61,
      "end": 294,
      "text": "GLS❒ 58319042 SEGUIMIENTO ➢ carolina.mora Tienes (1) paquete pendiente de entrega -------------------------------------------------------------------------------- Confirma tus datos de envío ■ tienes un paquete pendiente de entrega. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 294,
      "end": 407,
      "text": "Sigue tu pedido en tiempo real y programa la entrega para asegurarte de recibirlo a la hora que más te convenga! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 407,
      "end": 492,
      "text": "PROGRAMA TU ENTREGA Si no deseas recibir más correos electrónicos, desconéctate aquí."
    }
  ],
  "passA": {
    "requestSha256": "5ba8e1a82bb9bbdbfa7f92af16f418c5ca73a051558e4000245d802624267491",
    "capturedAt": "2026-09-20T23:46:04.255Z",
    "elapsedMs": 173.76237500002026,
    "successfulAttemptElapsedMs": 171.5090419999906,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.26
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.32
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.06
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.29
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.82
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.25
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
          "noul": 0.11
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
            "informational": 0,
            "educational_or_quoted": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.02,
            "sender_supplied": 0.79,
            "independently_established": 0,
            "no_sensitive_action": 0.19
          },
          "confidence": 0.71
        }
      },
      "usage": {
        "input_tokens": 3561,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "45bf476da030c772f1bf3e117132b10c7da1b9b3cf8bd071a61548f77fe67805",
    "capturedAt": "2026-09-20T23:46:04.430Z",
    "elapsedMs": 173.9411250000121,
    "successfulAttemptElapsedMs": 172.84916699997848,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "body:1": 0.02,
            "NONE": 0.62,
            "subject:1": 0,
            "subject:0": 0,
            "body:3": 0.01,
            "body:0": 0.35
          },
          "confidence": 0.55
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.01,
            "body:1": 0.48,
            "NONE": 0.5,
            "subject:1": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:0": 0.01
          },
          "confidence": 0.41
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.05,
            "body:1": 0.02,
            "subject:0": 0.31,
            "subject:1": 0,
            "NONE": 0.53,
            "body:3": 0.07,
            "body:0": 0.02
          },
          "confidence": 0.45
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0.01,
            "body:1": 0.83,
            "NONE": 0.11,
            "subject:1": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:0": 0.05
          },
          "confidence": 0.79
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.01,
            "body:1": 0,
            "subject:0": 0,
            "subject:1": 0,
            "NONE": 0.97,
            "body:3": 0.01,
            "body:0": 0.01
          },
          "confidence": 0.95
        }
      },
      "usage": {
        "input_tokens": 2714,
        "output_tokens": 412
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 349.1536250000063,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
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
        "segmentId": "body:1"
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
    "seq": 1932,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-394",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:04.083Z",
    "offsetMs": 1.6321250000037253
  },
  {
    "seq": 1933,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-394",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:04.255Z",
    "offsetMs": 173.76487499999348,
    "elapsedMs": 171.5090419999906,
    "outcome": "success"
  },
  {
    "seq": 1934,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-394",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:04.257Z",
    "offsetMs": 175.5130000000063
  },
  {
    "seq": 1935,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-394",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:04.430Z",
    "offsetMs": 348.7259999999951,
    "elapsedMs": 172.84916699997848,
    "outcome": "success"
  },
  {
    "seq": 1936,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-394",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:04.430Z",
    "offsetMs": 349.2326250000042,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "542ec31030955cab55d9da69f41b87c21231af5627613e9e281d67138c4fb0f1";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1933},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1935},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1936}} as const;
export const projectionSha256 = "1621eb248bb5c108414f45ef8911ce143b1f01ffed8c5fec8647d826fa8fe8aa";
