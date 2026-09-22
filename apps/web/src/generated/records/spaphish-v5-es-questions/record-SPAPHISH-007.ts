import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-007",
  "inputSha256": "a3a8d1b3a5befae82ef8788c997b24b0960cc4e2d14b0437f4675705881e6dc3",
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
      "end": 54,
      "text": "Pablito ! - ¡Tienes (1) paquete en espera de entrega! "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 54,
      "end": 104,
      "text": "Usa tu código para rastrearlo y recibirlo, ID#3216"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 69,
      "text": "FedEx ® ☰ Fecha de envío: 04-09-2025 ¡Fallo en la entrega para Raúl! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 69,
      "end": 132,
      "text": "Entrega del paquete suspendida ¿Cómo desea recibir su paquete? "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 132,
      "end": 221,
      "text": "Quiero que me lo entreguen Lo recogeré yo mismo ¿Dónde desea que se entregue el paquete? "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 221,
      "end": 589,
      "text": "En casa En el trabajo Información del paquete: Estado Detenido en el centro de distribución Envío a través de Correo internacional con seguimiento Fecha: 04-09-2025-------------------------------------------------------------------------------- Ingrese la información de entrega Si ya no desea recibir estos correos electrónicos, puede darse de baja haciendo clic aquí"
    }
  ],
  "passA": {
    "requestSha256": "a1b368201b0d303d5572e65e7a2ad9df505a143118be35be0a362577f11a800d",
    "capturedAt": "2026-09-22T03:48:19.115Z",
    "elapsedMs": 671.2856190000002,
    "successfulAttemptElapsedMs": 670.2010109999992,
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
          "noul": 0.14
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
          "noul": 0.33
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.9
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.2
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
          "noul": 0.08
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
            "educational_or_quoted": 0,
            "active_request": 1,
            "mixed_or_unclear": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.02,
            "no_sensitive_action": 0.72,
            "sender_supplied": 0.26,
            "independently_established": 0
          },
          "confidence": 0.63
        }
      },
      "usage": {
        "input_tokens": 5043,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "1eb47ce11210786e7c65a47fd705c6522681deed5bfee07c0d5a18efe639959d",
    "capturedAt": "2026-09-22T03:48:19.688Z",
    "elapsedMs": 571.28521,
    "successfulAttemptElapsedMs": 570.5209880000002,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.4,
            "body:0": 0.04,
            "NONE": 0.42,
            "subject:1": 0.06,
            "body:2": 0.01,
            "body:3": 0.06,
            "subject:0": 0.01
          },
          "confidence": 0.31
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.03,
            "NONE": 0.13,
            "body:0": 0.78,
            "subject:1": 0.01,
            "body:2": 0.02,
            "body:3": 0.02,
            "subject:0": 0.01
          },
          "confidence": 0.75
        }
      },
      "usage": {
        "input_tokens": 1630,
        "output_tokens": 167
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1244.2080349999997,
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
    "seq": 31,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-007",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:18.444Z",
    "offsetMs": 0.594452999999703
  },
  {
    "seq": 32,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-007",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:19.115Z",
    "offsetMs": 671.2910649999994,
    "elapsedMs": 670.2010109999992,
    "outcome": "success"
  },
  {
    "seq": 33,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-007",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:19.116Z",
    "offsetMs": 672.9440859999995
  },
  {
    "seq": 34,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-007",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:19.687Z",
    "offsetMs": 1243.869741999999,
    "elapsedMs": 570.5209880000002,
    "outcome": "success"
  },
  {
    "seq": 35,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-007",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:48:19.688Z",
    "offsetMs": 1244.280353,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "560059cce27e27b448a8b508e45e19dbfa26f4b9a3cd3c21dce50fc00336dff6";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":32},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":34},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":35}} as const;
export const projectionSha256 = "25dff46e6585726c3972521ba5c891d1fd9920377fdf21a68d5c3fb57d96f3dd";
