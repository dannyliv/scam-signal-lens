import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-330",
  "inputSha256": "695649c30a9f844a5e5771a92b48b24bf21b106fd8043851b5abb35c13ac2d4a",
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
      "end": 91,
      "text": "Ezequiela Miguelina -  🎯 Último aviso: programa tu entrega con FedEx T&T 🕵️‍♂️📦 ___🚚.. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 91,
      "end": 98,
      "text": "ID#8651"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 26,
      "text": "FedEx ¡Paquete pendiente! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 26,
      "end": 69,
      "text": "Tienes un paquete esperando ser entregado. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 69,
      "end": 108,
      "text": "Usa tu código exclusivo para seguirlo. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 108,
      "end": 256,
      "text": "748520631 Entrega estimada: viernes, 19 de julio Ver seguimiento Programar entrega Recibe recordatorios en tu calendario para no perder tu entrega. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 256,
      "end": 289,
      "text": "Gracias por confiar en nosotros. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 289,
      "end": 321,
      "text": "Tu entrega es nuestra prioridad."
    }
  ],
  "passA": {
    "requestSha256": "fa337500c6410a5421c4310e10f0b96fb6e32f0a936a98ccac89b38f2e80a89d",
    "capturedAt": "2026-09-22T03:54:46.668Z",
    "elapsedMs": 745.407733,
    "successfulAttemptElapsedMs": 743.8839319999679,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.11
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.58
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.89
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.1
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.07
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.01,
            "active_request": 0.99,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.21,
            "independently_established": 0,
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.78
          },
          "confidence": 0.69
        }
      },
      "usage": {
        "input_tokens": 4999,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "773b69b8b068abe1ee8616817caf158bbff0fc6d9a161ada7cbe2c102a955824",
    "capturedAt": "2026-09-22T03:54:47.216Z",
    "elapsedMs": 546.5761289999937,
    "successfulAttemptElapsedMs": 545.4666839999845,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:3": 0.09,
            "body:1": 0,
            "body:2": 0,
            "subject:1": 0,
            "subject:0": 0.88,
            "body:0": 0,
            "body:5": 0,
            "body:4": 0,
            "NONE": 0.03
          },
          "confidence": 0.87
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:3": 0.02,
            "body:1": 0.01,
            "body:2": 0.01,
            "subject:1": 0.01,
            "subject:0": 0.15,
            "body:0": 0.58,
            "body:5": 0.04,
            "body:4": 0.02,
            "NONE": 0.16
          },
          "confidence": 0.53
        }
      },
      "usage": {
        "input_tokens": 1554,
        "output_tokens": 205
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1293.9665939999977,
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
        "status": "selected",
        "segmentId": "subject:0"
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
    "seq": 1612,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-330",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:45.923Z",
    "offsetMs": 1.2779800000134856
  },
  {
    "seq": 1613,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-330",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:46.667Z",
    "offsetMs": 745.4085569999879,
    "elapsedMs": 743.8839319999679,
    "outcome": "success"
  },
  {
    "seq": 1614,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-330",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:46.670Z",
    "offsetMs": 747.9880739999935
  },
  {
    "seq": 1615,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-330",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:47.216Z",
    "offsetMs": 1293.7389570000232,
    "elapsedMs": 545.4666839999845,
    "outcome": "success"
  },
  {
    "seq": 1616,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-330",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:47.216Z",
    "offsetMs": 1294.0446869999869,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1e48e2aee873ed51c876860420a5b11c840226ab9d541b1259eba9a12bad5e77";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1613},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1615},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1616}} as const;
export const projectionSha256 = "810f04d5be97283f9763a0aa03fc510310ac3e90bed0545fb407100129ba8d64";
