import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-003",
  "inputSha256": "ea409ace3c08f8560f5aaa98dbb26caf6cfe1f30a04ab6a72e63101bdbdc0398",
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
      "end": 41,
      "text": "Pablito - Tiene (1) mensaje de nosotros. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 41,
      "end": 71,
      "text": "Haga clic abajo para abrirlo. "
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 71,
      "end": 73,
      "text": "📦"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 66,
      "text": "FedEx ® ☰ Fecha de envio : 05-08-2024 Falta de entrega a Ricardo! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 66,
      "end": 134,
      "text": "entrega de paquete suspendida ¿Cómo le gustaría recibir su paquete? "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 134,
      "end": 162,
      "text": "Quiero que me lo entreguen. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 162,
      "end": 182,
      "text": "Lo tomaré yo mismo. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 182,
      "end": 224,
      "text": "¿Dónde desea que le entreguen el paquete? "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 224,
      "end": 593,
      "text": "En casa Trabajar Información del paquete: Situación Detenido en el centro de distribución Enviar a través de Seguimiento de correspondencia internacional Dado: 05-08-2024 -------------------------------------------------------------------------------- CONSULTA AQUÍ Si ya no desea recibir estos correos electrónicos, puede darse de baja click en el enlace darse de baja"
    }
  ],
  "passA": {
    "requestSha256": "69ce8cbf99a39374754961179036257bdb72d7637bb467e9c6fb02581f22a3a8",
    "capturedAt": "2026-09-22T03:48:13.656Z",
    "elapsedMs": 679.9231239999999,
    "successfulAttemptElapsedMs": 678.9765020000004,
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
          "noul": 0.09
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
          "noul": 0.32
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.9
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
          "noul": 0.07
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.01,
            "educational_or_quoted": 0,
            "active_request": 0.99,
            "mixed_or_unclear": 0
          },
          "confidence": 0.98
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.3,
            "no_sensitive_action": 0.69,
            "independently_established": 0
          },
          "confidence": 0.59
        }
      },
      "usage": {
        "input_tokens": 5043,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "8a31e92ec4e6825ae5d2aa424f11d32659faba6be174c6ada1d552df338095f1",
    "capturedAt": "2026-09-22T03:48:14.501Z",
    "elapsedMs": 843.8615120000004,
    "successfulAttemptElapsedMs": 843.2280900000001,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "subject:0": 0,
            "body:3": 0,
            "subject:2": 0,
            "subject:1": 0.01,
            "body:0": 0.04,
            "body:1": 0.78,
            "body:4": 0,
            "NONE": 0.15,
            "body:5": 0.02
          },
          "confidence": 0.75
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0.01,
            "subject:0": 0.04,
            "body:3": 0,
            "subject:2": 0,
            "subject:1": 0,
            "body:0": 0.83,
            "body:1": 0.03,
            "NONE": 0.07,
            "body:4": 0,
            "body:5": 0.02
          },
          "confidence": 0.81
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.01,
            "subject:0": 0,
            "body:3": 0.01,
            "subject:2": 0,
            "subject:1": 0.04,
            "body:0": 0,
            "body:1": 0,
            "body:4": 0,
            "NONE": 0.86,
            "body:5": 0.08
          },
          "confidence": 0.84
        }
      },
      "usage": {
        "input_tokens": 2346,
        "output_tokens": 333
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1525.9983189999998,
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
    "seq": 11,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-003",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:12.976Z",
    "offsetMs": 0.49612400000023626
  },
  {
    "seq": 12,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-003",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:13.655Z",
    "offsetMs": 679.929533,
    "elapsedMs": 678.9765020000004,
    "outcome": "success"
  },
  {
    "seq": 13,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-003",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:13.657Z",
    "offsetMs": 681.9407250000004
  },
  {
    "seq": 14,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-003",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:14.501Z",
    "offsetMs": 1525.5451900000003,
    "elapsedMs": 843.2280900000001,
    "outcome": "success"
  },
  {
    "seq": 15,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-003",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:48:14.501Z",
    "offsetMs": 1526.0839030000002,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "149e413b571b40f3bc175c5864e640d5fda9cc72e8e1f040b3a29cb29579a40e";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":12},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":14},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":15}} as const;
export const projectionSha256 = "ec2eefadf7025fb994da9b5ee33a464072918fad63c90850f41c396b3b99661a";
