import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-409",
  "inputSha256": "f7bb7433daa6ca84ab9b37dc80c982ca4bfb093689d364732f09d07a560764f6",
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
      "end": 68,
      "text": "Pablito Tiene (2) paquete pendiente de entrega. apúrate a confirmar."
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 154,
      "text": "ExpressService ® ENTREGA DEL PAQUETE SUSPENDIDO Querido Mario, Por el momento, no podemos entregar su paquete 90341785 de nuestro almacén a tu domicilio. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 154,
      "end": 207,
      "text": "Debido a la falta de información en nuestro sistema. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 207,
      "end": 323,
      "text": "Resuelva este problema en un plazo de (5) días hábiles, de lo contrario, debemos devolver el paquete al fabricante. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 323,
      "end": 583,
      "text": "RESOLUCIÓN DE PROBLEMAS Información de empaquetado: Estado: detenido en el centro de manipulación (tasas aduaneras pendientes) Que tengas un gran día! - FedEx Express-servicio Este es un correo electrónico automatizado de nuestro robot de servicio al cliente. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 583,
      "end": 640,
      "text": "Todavía no sabe leer, así que por favor no le respondas. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 640,
      "end": 770,
      "text": "Si desea ser eliminado de nuestra lista y ya no recibir nuevos correos electrónicos sobre eventos,, Por favor, haga clic en aquí. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 770,
      "end": 858,
      "text": "O envíe un correo electrónico à: 4500 Valley View Ln, Ste 200 #155, Grapevine, TX, 76051"
    }
  ],
  "passA": {
    "requestSha256": "94e3961904e358a7f4459a456b0e7081b8b5b79be2e3c0d29170e22109d7cece",
    "capturedAt": "2026-09-22T03:56:20.645Z",
    "elapsedMs": 588.541035000002,
    "successfulAttemptElapsedMs": 586.9363519999897,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.2
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.12
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.96
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.42
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.25
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
          "noul": 0.06
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 0.98,
            "informational": 0.02
          },
          "confidence": 0.96
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.44,
            "mixed_or_unknown": 0.05,
            "independently_established": 0,
            "no_sensitive_action": 0.51
          },
          "confidence": 0.35
        }
      },
      "usage": {
        "input_tokens": 5125,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "de88c754f34a60e14967f8c159322c74875a40dac13c5ec28d9d1208a874d70a",
    "capturedAt": "2026-09-22T03:56:21.181Z",
    "elapsedMs": 534.772518999991,
    "successfulAttemptElapsedMs": 533.0878950000042,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:3": 0,
            "body:1": 0,
            "body:6": 0,
            "body:2": 0.97,
            "body:5": 0,
            "body:0": 0,
            "subject:0": 0.03,
            "body:4": 0,
            "NONE": 0
          },
          "confidence": 0.97
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:3": 0.45,
            "body:1": 0.01,
            "body:6": 0.01,
            "body:2": 0.11,
            "body:5": 0.01,
            "body:0": 0.36,
            "NONE": 0.03,
            "body:4": 0.01,
            "subject:0": 0.01
          },
          "confidence": 0.39
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:3": 0.02,
            "body:1": 0,
            "body:6": 0.13,
            "body:2": 0.02,
            "NONE": 0.38,
            "body:0": 0,
            "body:5": 0.01,
            "body:4": 0.43,
            "subject:0": 0.01
          },
          "confidence": 0.36
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:3": 0.34,
            "body:1": 0.01,
            "body:6": 0,
            "body:2": 0.03,
            "subject:0": 0,
            "body:0": 0,
            "body:5": 0,
            "body:4": 0,
            "NONE": 0.62
          },
          "confidence": 0.56
        }
      },
      "usage": {
        "input_tokens": 3346,
        "output_tokens": 411
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1124.9265239999513,
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
        "segmentId": "body:2"
      },
      "authority_claim": {
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "low_confidence",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "low_confidence",
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
    "seq": 2004,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-409",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:20.057Z",
    "offsetMs": 1.3541249999543652
  },
  {
    "seq": 2005,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-409",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:20.644Z",
    "offsetMs": 588.542456999945,
    "elapsedMs": 586.9363519999897,
    "outcome": "success"
  },
  {
    "seq": 2006,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-409",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:20.647Z",
    "offsetMs": 591.2600719999755
  },
  {
    "seq": 2007,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-409",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:21.180Z",
    "offsetMs": 1124.6567709999508,
    "elapsedMs": 533.0878950000042,
    "outcome": "success"
  },
  {
    "seq": 2008,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-409",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:21.181Z",
    "offsetMs": 1124.9816749999882,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ac8e99336c0dda8672e042c2c41c0d9e08aa2ddb491966b8963a9a0f3f02cc69";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2005},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2007},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2008}} as const;
export const projectionSha256 = "559c4dbbf92771794275b4c40e85f0dd900e263739852d3b87cfafad39fedfca";
