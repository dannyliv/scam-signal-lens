import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-358",
  "inputSha256": "28a63e1fe4ea0299ef193dd2988cf83120377d4265b756b3a409c8d476be0a89",
  "questionBundleSha256": "c38d45be636041965e7e231cffdf2831ec083c7780ea13a94086fdf24bf7bc08",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "source_messages",
  "policySha256": "3435135d6058476d4262ecbc936abf95af4993b455dfab35adc8b17f3fe6ad6a",
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
    "requestSha256": "b795651bd132ea53bedc4190059f10fcdb09b9dbf3792e05522341fa329d2421",
    "capturedAt": "2026-09-20T23:45:53.084Z",
    "elapsedMs": 156.25916699999652,
    "successfulAttemptElapsedMs": 154.27012499999546,
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
          "noul": 0.1
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.34
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.89
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
            "informational": 0,
            "active_request": 1
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.65,
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.34,
            "independently_established": 0
          },
          "confidence": 0.53
        }
      },
      "usage": {
        "input_tokens": 3577,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "19f97b19f75120ea280fa8236e502d9436fcda36494c0a9c32d64443489d4a02",
    "capturedAt": "2026-09-20T23:45:53.220Z",
    "elapsedMs": 133.68191600000137,
    "successfulAttemptElapsedMs": 131.44266600000265,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.79,
            "subject:2": 0,
            "body:4": 0,
            "subject:0": 0.01,
            "subject:1": 0.01,
            "body:2": 0,
            "body:0": 0.02,
            "body:3": 0,
            "body:5": 0.02,
            "NONE": 0.15
          },
          "confidence": 0.77
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:2": 0,
            "body:1": 0.02,
            "body:4": 0,
            "subject:0": 0.05,
            "body:2": 0.01,
            "subject:1": 0,
            "body:0": 0.87,
            "body:3": 0,
            "body:5": 0.01,
            "NONE": 0.04
          },
          "confidence": 0.85
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:2": 0,
            "body:1": 0,
            "body:4": 0,
            "subject:0": 0,
            "body:2": 0.01,
            "subject:1": 0.02,
            "body:0": 0,
            "body:3": 0.01,
            "body:5": 0.09,
            "NONE": 0.87
          },
          "confidence": 0.85
        }
      },
      "usage": {
        "input_tokens": 1974,
        "output_tokens": 333
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 292.4605420000007,
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
    "seq": 1754,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-358",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:52.929Z",
    "offsetMs": 1.4495000000024447
  },
  {
    "seq": 1755,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-358",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:53.083Z",
    "offsetMs": 156.26224999999977,
    "elapsedMs": 154.27012499999546,
    "outcome": "success"
  },
  {
    "seq": 1756,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-358",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:53.087Z",
    "offsetMs": 160.02495900000213
  },
  {
    "seq": 1757,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-358",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:53.219Z",
    "offsetMs": 292.1718339999934,
    "elapsedMs": 131.44266600000265,
    "outcome": "success"
  },
  {
    "seq": 1758,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-358",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:53.220Z",
    "offsetMs": 292.52300000000105,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "811b28d273c494c462d2d0f0a619ac99701deb5e9872de97d63407c197328842";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1755},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1757},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1758}} as const;
export const projectionSha256 = "04d0b7375f26a5b6819a901996c416acd4c45d3b598c42435c8e681a37b3d04d";
