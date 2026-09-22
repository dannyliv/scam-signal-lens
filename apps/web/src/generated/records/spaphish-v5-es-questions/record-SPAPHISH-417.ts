import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-417",
  "inputSha256": "b3659afcbb3e7665ce2322106db7d54ceda17506a40cb94d3acb748f7046cb34",
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
      "end": 57,
      "text": "Pablito - Tienes (1) paquete esperando ser entregado 📦. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 57,
      "end": 106,
      "text": "Usa tu código para rastrearlo y recibirlo ___🚚. "
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 106,
      "end": 113,
      "text": "ID#4274"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 65,
      "text": "estafeta® Querido Julián Herrera Tienes (1) mensaje de nosotros. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 65,
      "end": 112,
      "text": "Por favor, haz clic en confirmar para abrirlo. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 112,
      "end": 259,
      "text": "Su código de seguimiento: 732518944 Continuar ➢ ¡Programe su entrega y suscríbase a nuestras notificaciones para evitar que esto vuelva a suceder! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 259,
      "end": 329,
      "text": "Programar entrega ahora Gracias por su pronta atención a este asunto. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 329,
      "end": 355,
      "text": "Esperamos su confirmación."
    }
  ],
  "passA": {
    "requestSha256": "5739b888726dcbd24c6bb5718a97d15eb6e53176e3bdb00587cbc79eebe78311",
    "capturedAt": "2026-09-22T03:56:30.036Z",
    "elapsedMs": 595.3997180000297,
    "successfulAttemptElapsedMs": 593.1849860000075,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.15
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.11
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
          "noul": 0.64
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.91
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.33
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
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 1,
            "mixed_or_unclear": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.59,
            "mixed_or_unknown": 0.02,
            "independently_established": 0,
            "no_sensitive_action": 0.39
          },
          "confidence": 0.46
        }
      },
      "usage": {
        "input_tokens": 5015,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "b3ac2bda056b17b6617598bfb470a386226e84230f2ebed4d1972baf81029763",
    "capturedAt": "2026-09-22T03:56:30.650Z",
    "elapsedMs": 611.8955120000173,
    "successfulAttemptElapsedMs": 609.8160860000062,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:1": 0.01,
            "subject:2": 0,
            "body:3": 0.3,
            "body:2": 0.59,
            "body:4": 0.01,
            "body:0": 0,
            "NONE": 0.09,
            "subject:1": 0,
            "subject:0": 0
          },
          "confidence": 0.54
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.03,
            "subject:2": 0,
            "body:3": 0.02,
            "body:2": 0.04,
            "body:4": 0,
            "body:0": 0.83,
            "NONE": 0.07,
            "subject:1": 0,
            "subject:0": 0.01
          },
          "confidence": 0.81
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.16,
            "subject:2": 0,
            "body:3": 0.01,
            "body:2": 0.03,
            "body:4": 0,
            "body:0": 0,
            "NONE": 0.8,
            "subject:1": 0,
            "subject:0": 0
          },
          "confidence": 0.76
        }
      },
      "usage": {
        "input_tokens": 2195,
        "output_tokens": 306
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1209.4179420000291,
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
    "seq": 2044,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-417",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:29.442Z",
    "offsetMs": 1.8318440000293776
  },
  {
    "seq": 2045,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-417",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:30.036Z",
    "offsetMs": 595.4010600000038,
    "elapsedMs": 593.1849860000075,
    "outcome": "success"
  },
  {
    "seq": 2046,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-417",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:30.039Z",
    "offsetMs": 598.795952000015
  },
  {
    "seq": 2047,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-417",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:30.650Z",
    "offsetMs": 1209.0923340000445,
    "elapsedMs": 609.8160860000062,
    "outcome": "success"
  },
  {
    "seq": 2048,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-417",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:30.650Z",
    "offsetMs": 1209.4761590000126,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "8d8d955a52af1770df6d025a6c0311ace0dd11cabef04ea423c29d572e11bf52";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2045},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2047},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2048}} as const;
export const projectionSha256 = "909cf4e9f5aee45e8f5ca6bf7dc553ed7ab1c418f747a69c3c02537a3971faa3";
