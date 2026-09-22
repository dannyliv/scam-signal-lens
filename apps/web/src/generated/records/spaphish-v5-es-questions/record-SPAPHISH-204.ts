import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-204",
  "inputSha256": "0d14c7731af84e75ef303acc6d18a9c3bae7fbb22779f08cc472fcacd9d9b087",
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
      "end": 31,
      "text": "Tiene (1) mensaje de nosotros. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 31,
      "end": 61,
      "text": "Haga clic abajo para abrirlo. "
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 61,
      "end": 63,
      "text": "📦"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 63,
      "text": "FedEx ® ☰ Fecha de envio : 06-30-2024 Falta de entrega a Luis! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 63,
      "end": 131,
      "text": "entrega de paquete suspendida ¿Cómo le gustaría recibir su paquete? "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 131,
      "end": 159,
      "text": "Quiero que me lo entreguen. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 159,
      "end": 179,
      "text": "Lo tomaré yo mismo. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 179,
      "end": 221,
      "text": "¿Dónde desea que le entreguen el paquete? "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 221,
      "end": 590,
      "text": "En casa Trabajar Información del paquete: Situación Detenido en el centro de distribución Enviar a través de Seguimiento de correspondencia internacional Dado: 06-30-2024 -------------------------------------------------------------------------------- CONSULTA AQUÍ Si ya no desea recibir estos correos electrónicos, puede darse de baja click en el enlace darse de baja"
    }
  ],
  "passA": {
    "requestSha256": "fe659952c258a9a80bb8059d9d7d427b851a0fa9ed43355870c99160cc873adf",
    "capturedAt": "2026-09-22T03:52:14.117Z",
    "elapsedMs": 644.2886930000095,
    "successfulAttemptElapsedMs": 643.1778150000027,
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
          "noul": 0.33
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.91
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.25
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
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0.01,
            "active_request": 0.99
          },
          "confidence": 0.98
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "no_sensitive_action": 0.7,
            "sender_supplied": 0.29
          },
          "confidence": 0.59
        }
      },
      "usage": {
        "input_tokens": 5040,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "e672b4bc2b4d22968b1e1699cc3c6bc33e434f4a90b27e43657af8a5c76c7c0d",
    "capturedAt": "2026-09-22T03:52:14.900Z",
    "elapsedMs": 781.6099579999864,
    "successfulAttemptElapsedMs": 780.5795290000096,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:2": 0,
            "subject:0": 0,
            "body:4": 0,
            "subject:1": 0,
            "body:0": 0.02,
            "body:3": 0,
            "body:2": 0,
            "body:5": 0.01,
            "body:1": 0.8200000000000001,
            "NONE": 0.14
          },
          "confidence": 0.79
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:2": 0,
            "subject:0": 0.03,
            "body:4": 0,
            "subject:1": 0,
            "body:0": 0.86,
            "body:3": 0,
            "body:2": 0,
            "body:5": 0.02,
            "body:1": 0.02,
            "NONE": 0.07
          },
          "confidence": 0.83
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:2": 0,
            "subject:0": 0,
            "body:4": 0,
            "subject:1": 0.03,
            "body:0": 0,
            "body:3": 0,
            "body:2": 0.01,
            "body:5": 0.06,
            "body:1": 0,
            "NONE": 0.9
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 2334,
        "output_tokens": 333
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1427.6855389999982,
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
    "seq": 992,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-204",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:13.473Z",
    "offsetMs": 0.8035279999894556
  },
  {
    "seq": 993,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-204",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:14.117Z",
    "offsetMs": 644.2892279999796,
    "elapsedMs": 643.1778150000027,
    "outcome": "success"
  },
  {
    "seq": 994,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-204",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:14.119Z",
    "offsetMs": 646.4858759999915
  },
  {
    "seq": 995,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-204",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:14.900Z",
    "offsetMs": 1427.3792449999892,
    "elapsedMs": 780.5795290000096,
    "outcome": "success"
  },
  {
    "seq": 996,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-204",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:14.900Z",
    "offsetMs": 1427.7476549999847,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "68d00c1192cf73001b14f1d695968417833c61998da60fa9896ce1775fcbd89c";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":993},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":995},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":996}} as const;
export const projectionSha256 = "e372e226b88a9b45984dfa3644deec3db3be9cc7ee4414922e14e2b4665b24d1";
