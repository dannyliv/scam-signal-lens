import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-006",
  "inputSha256": "7c70ef46e0c56694de6392f18a545d414218901839f08b0e3a70caf54a9af2c3",
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
      "end": 69,
      "text": "Ezequiela Miguelina - Tienes (1) paquete esperando ser entregado 📦. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 69,
      "end": 118,
      "text": "Usa tu código para rastrearlo y recibirlo ___🚚. "
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 118,
      "end": 126,
      "text": "ID#41868"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 294,
      "text": "❒ ENTREGA DEL PAQUETE PENDIENTE ◉ Registro / Inicio de sesión ❒ Correos 71738317 SEGUIMIENTO ➢ pablito Tienes (1) paquete pendiente de entrega -------------------------------------------------------------------------------- Confirma tus datos de envío ■ tienes un paquete pendiente de entrega. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 294,
      "end": 407,
      "text": "Sigue tu pedido en tiempo real y programa la entrega para asegurarte de recibirlo a la hora que más te convenga! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 407,
      "end": 492,
      "text": "PROGRAMA TU ENTREGA Si no deseas recibir más correos electrónicos, desconéctate aquí."
    }
  ],
  "passA": {
    "requestSha256": "f88bf1bfb7ebc853235f8e3956d956072abd325dd8fb4ac87024d15172a305e9",
    "capturedAt": "2026-09-22T03:48:17.922Z",
    "elapsedMs": 649.5890920000002,
    "successfulAttemptElapsedMs": 648.4942019999999,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.29
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.31
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
          "noul": 0.21
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.68
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.16
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
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.99,
            "informational": 0.01,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.03,
            "independently_established": 0,
            "no_sensitive_action": 0.47,
            "sender_supplied": 0.5
          },
          "confidence": 0.33
        }
      },
      "usage": {
        "input_tokens": 5037,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "5adae65cc991a67be5981cf0b64561763c8dfb81193c120764f1c668150640a0",
    "capturedAt": "2026-09-22T03:48:18.442Z",
    "elapsedMs": 517.5098789999993,
    "successfulAttemptElapsedMs": 516.3422380000002,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.01,
            "body:1": 0.01,
            "NONE": 0.49,
            "subject:0": 0,
            "body:0": 0.37,
            "subject:1": 0.12,
            "subject:2": 0
          },
          "confidence": 0.41
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0,
            "body:1": 0.01,
            "body:0": 0.61,
            "NONE": 0.38,
            "subject:0": 0,
            "subject:1": 0,
            "subject:2": 0
          },
          "confidence": 0.53
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.09,
            "body:1": 0.05,
            "body:0": 0.06,
            "NONE": 0.74,
            "subject:0": 0.01,
            "subject:1": 0.05,
            "subject:2": 0
          },
          "confidence": 0.69
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0.02,
            "body:1": 0.03,
            "body:0": 0.54,
            "subject:0": 0.01,
            "NONE": 0.38,
            "subject:1": 0.01,
            "subject:2": 0.01
          },
          "confidence": 0.47
        }
      },
      "usage": {
        "input_tokens": 2842,
        "output_tokens": 331
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1169.7188840000008,
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
        "status": "none_selected",
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
    "seq": 26,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-006",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:17.273Z",
    "offsetMs": 0.7566610000003493
  },
  {
    "seq": 27,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-006",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:17.922Z",
    "offsetMs": 649.5952400000006,
    "elapsedMs": 648.4942019999999,
    "outcome": "success"
  },
  {
    "seq": 28,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-006",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:17.925Z",
    "offsetMs": 652.5288690000007
  },
  {
    "seq": 29,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-006",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:18.442Z",
    "offsetMs": 1169.3121300000012,
    "elapsedMs": 516.3422380000002,
    "outcome": "success"
  },
  {
    "seq": 30,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-006",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:48:18.442Z",
    "offsetMs": 1169.7749000000013,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d94c0387e75022cc4266f9903723552c10a66fcb6c633f75ee9d64defdd3b62f";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":27},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":29},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":30}} as const;
export const projectionSha256 = "0543f914260059c403aee44e4b28f288e3fd3d18cd1d180caa3aa5c5cf852ff0";
