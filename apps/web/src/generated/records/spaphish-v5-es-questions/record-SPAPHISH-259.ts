import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-259",
  "inputSha256": "1763ad037cfee3519a74356dfab46942341c32c6832a1038fdd8512a63cc4cbb",
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
      "end": 64,
      "text": "FedEx ® ☰ Fecha de envio : 07-20-2024 Falta de entrega a Marco! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 64,
      "end": 132,
      "text": "entrega de paquete suspendida ¿Cómo le gustaría recibir su paquete? "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 132,
      "end": 160,
      "text": "Quiero que me lo entreguen. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 160,
      "end": 180,
      "text": "Lo tomaré yo mismo. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 180,
      "end": 222,
      "text": "¿Dónde desea que le entreguen el paquete? "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 222,
      "end": 591,
      "text": "En casa Trabajar Información del paquete: Situación Detenido en el centro de distribución Enviar a través de Seguimiento de correspondencia internacional Dado: 07-20-2024 -------------------------------------------------------------------------------- CONSULTA AQUÍ Si ya no desea recibir estos correos electrónicos, puede darse de baja click en el enlace darse de baja"
    }
  ],
  "passA": {
    "requestSha256": "856a7d63301535ee5c511c3eb0eee27788480cf265078f2781bc895f9fa76450",
    "capturedAt": "2026-09-22T03:53:21.206Z",
    "elapsedMs": 654.5482520000078,
    "successfulAttemptElapsedMs": 653.3532550000236,
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
          "noul": 0.31
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.9
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.23
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
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 0.02,
            "active_request": 0.98,
            "mixed_or_unclear": 0
          },
          "confidence": 0.97
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.28,
            "independently_established": 0,
            "no_sensitive_action": 0.71,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.61
        }
      },
      "usage": {
        "input_tokens": 5043,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "6834ca9cacf9c8ecf3ac6cc4e2c9a6bb9a323154fc6b4d19c6a958c623dc3c1c",
    "capturedAt": "2026-09-22T03:53:21.771Z",
    "elapsedMs": 563.1909769999911,
    "successfulAttemptElapsedMs": 561.8456979999901,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:1": 0.01,
            "body:0": 0.02,
            "body:5": 0.01,
            "body:1": 0.8,
            "subject:2": 0,
            "body:3": 0,
            "subject:0": 0,
            "body:2": 0,
            "body:4": 0,
            "NONE": 0.16
          },
          "confidence": 0.76
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:1": 0,
            "body:0": 0.85,
            "body:5": 0.01,
            "body:1": 0.03,
            "subject:2": 0,
            "body:3": 0,
            "subject:0": 0.05,
            "body:2": 0,
            "body:4": 0,
            "NONE": 0.06
          },
          "confidence": 0.82
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:1": 0.04,
            "body:0": 0,
            "body:5": 0.08,
            "body:1": 0,
            "NONE": 0.86,
            "body:3": 0.01,
            "subject:0": 0,
            "body:2": 0.01,
            "body:4": 0,
            "subject:2": 0
          },
          "confidence": 0.85
        }
      },
      "usage": {
        "input_tokens": 2346,
        "output_tokens": 333
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1219.6055839999462,
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
    "seq": 1264,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-259",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:20.552Z",
    "offsetMs": 0.8192719999933615
  },
  {
    "seq": 1265,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-259",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:21.206Z",
    "offsetMs": 654.5517959999852,
    "elapsedMs": 653.3532550000236,
    "outcome": "success"
  },
  {
    "seq": 1266,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-259",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:21.208Z",
    "offsetMs": 656.8533820000011
  },
  {
    "seq": 1267,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-259",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:21.770Z",
    "offsetMs": 1219.3178779999726,
    "elapsedMs": 561.8456979999901,
    "outcome": "success"
  },
  {
    "seq": 1268,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-259",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:53:21.771Z",
    "offsetMs": 1219.6610329999821,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "b9a128b97f4ce05ba395dd5e9b33fb528d99a348caad6f2b0af3a210b5f5c88f";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1265},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1267},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1268}} as const;
export const projectionSha256 = "769a47bdd8875e315278186a7eb4af1eb9a9f650d3f60a56fc990f1aff3389ac";
