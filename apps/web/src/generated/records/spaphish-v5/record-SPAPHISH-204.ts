import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-204",
  "inputSha256": "0d14c7731af84e75ef303acc6d18a9c3bae7fbb22779f08cc472fcacd9d9b087",
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
    "requestSha256": "9c843d5a05af6cc3afc492b74d0f9ae80ac2ba9b1122130e26c36e99174341ef",
    "capturedAt": "2026-09-20T23:44:59.237Z",
    "elapsedMs": 253.3983339999977,
    "successfulAttemptElapsedMs": 252.39733299998625,
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
          "noul": 0.07
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.35
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.88
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.29
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
          "noul": 0.01
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
            "active_request": 1,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.66,
            "independently_established": 0,
            "sender_supplied": 0.33,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.55
        }
      },
      "usage": {
        "input_tokens": 3590,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "ee06f23f67c8a398cc262d35b0e1063af0f01d3be57308e923edc00dea192f16",
    "capturedAt": "2026-09-20T23:44:59.411Z",
    "elapsedMs": 172.04358300000604,
    "successfulAttemptElapsedMs": 170.31758300001093,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.1,
            "subject:2": 0,
            "body:4": 0,
            "body:5": 0.01,
            "body:0": 0.02,
            "subject:1": 0.01,
            "body:1": 0.86,
            "body:3": 0,
            "body:2": 0
          },
          "confidence": 0.84
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.05,
            "NONE": 0.03,
            "subject:2": 0,
            "body:4": 0,
            "body:5": 0.01,
            "body:0": 0.88,
            "subject:1": 0,
            "body:1": 0.02,
            "body:3": 0,
            "body:2": 0.01
          },
          "confidence": 0.87
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.86,
            "subject:0": 0,
            "subject:2": 0,
            "body:4": 0,
            "body:5": 0.09,
            "body:0": 0,
            "subject:1": 0.03,
            "body:1": 0,
            "body:3": 0.01,
            "body:2": 0.01
          },
          "confidence": 0.84
        }
      },
      "usage": {
        "input_tokens": 2026,
        "output_tokens": 333
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 427.7487909999909,
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
    "seq": 996,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-204",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:58.984Z",
    "offsetMs": 0.6403750000026776
  },
  {
    "seq": 997,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-204",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:59.236Z",
    "offsetMs": 253.3984999999957,
    "elapsedMs": 252.39733299998625,
    "outcome": "success"
  },
  {
    "seq": 998,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-204",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:59.240Z",
    "offsetMs": 256.46529100000043
  },
  {
    "seq": 999,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-204",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:59.410Z",
    "offsetMs": 427.40691599999263,
    "elapsedMs": 170.31758300001093,
    "outcome": "success"
  },
  {
    "seq": 1000,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-204",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:59.411Z",
    "offsetMs": 427.81791599999997,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "67d2157e9da0a08cdafb1b7d2832da12d4e51ecf10b10a4029705de8182da377";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":997},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":999},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1000}} as const;
export const projectionSha256 = "af5f813eaddbd20244db118bf18f0e80a53942c008f58e068bbc3d0065505747";
