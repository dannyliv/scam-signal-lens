import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-421",
  "inputSha256": "621d8e7fcb5dbdb6b1f16af32b5b903ef5d470f617d9dcd4fcbc40da11e0bd16",
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
      "end": 40,
      "text": "Pablito -Tiene (1) mensaje de nosotros. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 40,
      "end": 70,
      "text": "Haga clic abajo para abrirlo. "
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 70,
      "end": 72,
      "text": "📦"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 66,
      "text": "FedEx ® ☰ Fecha de envio : 05-24-2024 Falta de entrega a Antonio! "
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
      "text": "En casa Trabajar Información del paquete: Situación Detenido en el centro de distribución Enviar a través de Seguimiento de correspondencia internacional Dado: 05-24-2024 -------------------------------------------------------------------------------- CONSULTA AQUÍ Si ya no desea recibir estos correos electrónicos, puede darse de baja click en el enlace darse de baja"
    }
  ],
  "passA": {
    "requestSha256": "ff666fcefbef92d145dcc70d3797dc7bbb593f7c12b8ddfdc94d10721f7c4e68",
    "capturedAt": "2026-09-22T03:56:34.689Z",
    "elapsedMs": 603.2647639999632,
    "successfulAttemptElapsedMs": 601.3756680000224,
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
          "noul": 0.36
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.91
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.24
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.08
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
            "mixed_or_unclear": 0,
            "informational": 0.01,
            "active_request": 0.99
          },
          "confidence": 0.98
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.3,
            "no_sensitive_action": 0.68,
            "mixed_or_unknown": 0.02
          },
          "confidence": 0.57
        }
      },
      "usage": {
        "input_tokens": 5044,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "632ef1ea19baf272d18e5e707de68d85e953806735616e34e1dbedd617576e94",
    "capturedAt": "2026-09-22T03:56:35.319Z",
    "elapsedMs": 628.2560720000183,
    "successfulAttemptElapsedMs": 626.531146000023,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "body:0": 0.04,
            "subject:2": 0,
            "body:1": 0.76,
            "body:4": 0,
            "NONE": 0.18,
            "subject:1": 0.01,
            "body:5": 0.01,
            "body:3": 0,
            "subject:0": 0
          },
          "confidence": 0.72
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0,
            "body:0": 0.85,
            "subject:2": 0,
            "body:1": 0.03,
            "body:4": 0,
            "NONE": 0.05,
            "subject:1": 0,
            "body:5": 0.02,
            "body:3": 0,
            "subject:0": 0.05
          },
          "confidence": 0.82
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.01,
            "body:0": 0,
            "subject:2": 0,
            "body:1": 0,
            "body:4": 0,
            "NONE": 0.88,
            "subject:1": 0.04,
            "body:5": 0.07,
            "body:3": 0,
            "subject:0": 0
          },
          "confidence": 0.86
        }
      },
      "usage": {
        "input_tokens": 2350,
        "output_tokens": 333
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1233.5594120000023,
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
    "seq": 2064,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-421",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:34.086Z",
    "offsetMs": 1.5040550000267103
  },
  {
    "seq": 2065,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-421",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:34.688Z",
    "offsetMs": 603.2578370000119,
    "elapsedMs": 601.3756680000224,
    "outcome": "success"
  },
  {
    "seq": 2066,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-421",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:34.691Z",
    "offsetMs": 606.3059060000232
  },
  {
    "seq": 2067,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-421",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:35.318Z",
    "offsetMs": 1233.3082000000286,
    "elapsedMs": 626.531146000023,
    "outcome": "success"
  },
  {
    "seq": 2068,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-421",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:35.319Z",
    "offsetMs": 1233.6074890000164,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "997457ab17e06047e3824ff9c9844e32f477dfd936821fedbc7ea2d483fcbca7";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2065},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2067},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2068}} as const;
export const projectionSha256 = "967038a8bedd188cfa9ac62644db000cfe9524b429ea8878c71ca3141dc6f35e";
