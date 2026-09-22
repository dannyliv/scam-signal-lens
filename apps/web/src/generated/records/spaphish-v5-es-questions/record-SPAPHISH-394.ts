import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-394",
  "inputSha256": "d7f6e4910258996ecf4c58d9e263fe563ef016e920036f554497b443e6b78289",
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
    "requestSha256": "98fad53dc4fd38a1f75a66d0bf32f3e53d2e65d2ffe22e40d0af35a7cb788406",
    "capturedAt": "2026-09-22T03:56:03.673Z",
    "elapsedMs": 628.088042999967,
    "successfulAttemptElapsedMs": 626.7748610000126,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.35
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.37
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
          "noul": 0.27
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.82
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.19
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
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.1
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
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
            "sender_supplied": 0.63,
            "no_sensitive_action": 0.34,
            "independently_established": 0,
            "mixed_or_unknown": 0.03
          },
          "confidence": 0.49
        }
      },
      "usage": {
        "input_tokens": 5011,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "7c0573550937504076176634fff6b19ffde7a3c5a2851df0b8a323de3fd93a1e",
    "capturedAt": "2026-09-22T03:56:04.207Z",
    "elapsedMs": 532.4792470000102,
    "successfulAttemptElapsedMs": 530.8189760000096,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:1": 0,
            "body:0": 0.2,
            "subject:0": 0,
            "body:2": 0,
            "body:1": 0.03,
            "NONE": 0.77,
            "body:3": 0
          },
          "confidence": 0.72
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:1": 0,
            "body:0": 0.02,
            "body:1": 0.62,
            "subject:0": 0.01,
            "body:2": 0.01,
            "NONE": 0.33,
            "body:3": 0.01
          },
          "confidence": 0.56
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:1": 0,
            "body:0": 0.02,
            "body:1": 0.03,
            "subject:0": 0.27,
            "body:2": 0.03,
            "NONE": 0.59,
            "body:3": 0.06
          },
          "confidence": 0.52
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:1": 0,
            "body:0": 0.04,
            "body:1": 0.83,
            "subject:0": 0,
            "body:2": 0.01,
            "NONE": 0.12,
            "body:3": 0
          },
          "confidence": 0.8
        }
      },
      "usage": {
        "input_tokens": 2700,
        "output_tokens": 331
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1162.3318919999874,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "request_route_low_confidence"
    ],
    "evidence": {
      "credential_request": {
        "status": "none_selected",
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
    "seq": 1930,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-394",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:03.046Z",
    "offsetMs": 0.9269750000094064
  },
  {
    "seq": 1931,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-394",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:03.673Z",
    "offsetMs": 628.0884169999626,
    "elapsedMs": 626.7748610000126,
    "outcome": "success"
  },
  {
    "seq": 1932,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-394",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:03.676Z",
    "offsetMs": 630.7181409999612
  },
  {
    "seq": 1933,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-394",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:04.207Z",
    "offsetMs": 1162.049416999973,
    "elapsedMs": 530.8189760000096,
    "outcome": "success"
  },
  {
    "seq": 1934,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-394",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:04.207Z",
    "offsetMs": 1162.3887840000098,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6b7e56b5b4553a8fc954d7390809200d8f83145820cca3ce47ed2f46c96d75c1";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1931},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1933},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1934}} as const;
export const projectionSha256 = "e9996c4ce71892036b906a0cebc7b563559f6b8664a341998a00cdce93335c2b";
