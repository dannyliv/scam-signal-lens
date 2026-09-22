import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-358",
  "inputSha256": "28a63e1fe4ea0299ef193dd2988cf83120377d4265b756b3a409c8d476be0a89",
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
      "end": 36,
      "text": "FedEx ® ☰ Falta de entrega a Marco! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 36,
      "end": 104,
      "text": "entrega de paquete suspendida ¿Cómo le gustaría recibir su paquete? "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 104,
      "end": 132,
      "text": "Quiero que me lo entreguen. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 132,
      "end": 152,
      "text": "Lo tomaré yo mismo. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 152,
      "end": 194,
      "text": "¿Dónde desea que le entreguen el paquete? "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 194,
      "end": 482,
      "text": "En casa Trabajar Información del paquete: Situación Detenido en el centro de distribución Enviar a través de Seguimiento de correspondencia internacional Dado: 03-15-2024 CONSULTA AQUÍ Si ya no desea recibir estos correos electrónicos, puede darse de baja click en el enlace darse de baja"
    }
  ],
  "passA": {
    "requestSha256": "01ceff78b91f5b057bfb590015a8a21d5fc13cbd9513baf458c560dafb126487",
    "capturedAt": "2026-09-22T03:55:21.677Z",
    "elapsedMs": 618.5318039999693,
    "successfulAttemptElapsedMs": 616.489745000028,
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
          "noul": 0.38
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
          "noul": 0.07
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
            "mixed_or_unclear": 0,
            "informational": 0,
            "active_request": 1
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.64,
            "sender_supplied": 0.34,
            "mixed_or_unknown": 0.02
          },
          "confidence": 0.52
        }
      },
      "usage": {
        "input_tokens": 5027,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "46e80544ed55f773ee5308094a9824c4ecc4ca880ff754261cf9ddc87adf31fc",
    "capturedAt": "2026-09-22T03:55:22.279Z",
    "elapsedMs": 598.9995580000104,
    "successfulAttemptElapsedMs": 597.2791469999938,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:2": 0,
            "body:1": 0.79,
            "body:0": 0.02,
            "body:2": 0,
            "body:3": 0,
            "subject:1": 0.01,
            "body:4": 0,
            "body:5": 0.02,
            "NONE": 0.14,
            "subject:0": 0.01
          },
          "confidence": 0.77
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:2": 0,
            "body:1": 0.02,
            "body:0": 0.89,
            "body:2": 0.01,
            "body:3": 0,
            "NONE": 0.05,
            "body:4": 0,
            "body:5": 0.02,
            "subject:1": 0,
            "subject:0": 0.01
          },
          "confidence": 0.87
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:2": 0,
            "body:1": 0,
            "body:0": 0,
            "body:2": 0.01,
            "body:3": 0.01,
            "subject:1": 0.03,
            "body:4": 0,
            "body:5": 0.07,
            "NONE": 0.88,
            "subject:0": 0
          },
          "confidence": 0.86
        }
      },
      "usage": {
        "input_tokens": 2282,
        "output_tokens": 333
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1221.3371440000483,
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
    "seq": 1752,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-358",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:21.059Z",
    "offsetMs": 1.0964670000248589
  },
  {
    "seq": 1753,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-358",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:21.676Z",
    "offsetMs": 618.5318280000356,
    "elapsedMs": 616.489745000028,
    "outcome": "success"
  },
  {
    "seq": 1754,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-358",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:21.681Z",
    "offsetMs": 623.3539760000422
  },
  {
    "seq": 1755,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-358",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:22.279Z",
    "offsetMs": 1221.053345000022,
    "elapsedMs": 597.2791469999938,
    "outcome": "success"
  },
  {
    "seq": 1756,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-358",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:22.279Z",
    "offsetMs": 1221.3864410000388,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "800b5e734b2b227407964a1eaedc0177f417bdaca788e96576ca674655cde190";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1753},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1755},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1756}} as const;
export const projectionSha256 = "2b67e4b9ccdaf2c1811194218dd8b9a870e7d752e3bd8fa3d5ed83fc6c64b25b";
