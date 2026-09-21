import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-003",
  "inputSha256": "ea409ace3c08f8560f5aaa98dbb26caf6cfe1f30a04ab6a72e63101bdbdc0398",
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
    "requestSha256": "4e1ebf1443a72fcc4ea0a1da64fbe73647c01a8644265a1ddade5a2cdc2d0c5a",
    "capturedAt": "2026-09-20T23:43:51.942Z",
    "elapsedMs": 119.29958299999998,
    "successfulAttemptElapsedMs": 118.04029200000002,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.34
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
            "active_request": 1,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.71,
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "sender_supplied": 0.28
          },
          "confidence": 0.62
        }
      },
      "usage": {
        "input_tokens": 3593,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "538a658960765c52335c930a2dc6d56fb5c99974e1ed67ca61873d91840e688f",
    "capturedAt": "2026-09-20T23:43:52.089Z",
    "elapsedMs": 144.41066699999988,
    "successfulAttemptElapsedMs": 142.72283299999992,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0.01,
            "subject:2": 0,
            "body:4": 0,
            "NONE": 0.12,
            "body:1": 0.83,
            "subject:1": 0.01,
            "body:5": 0.01,
            "body:0": 0.02,
            "body:3": 0,
            "body:2": 0
          },
          "confidence": 0.83
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.09,
            "subject:2": 0,
            "body:4": 0,
            "NONE": 0.04,
            "body:1": 0.02,
            "subject:1": 0,
            "body:5": 0.01,
            "body:0": 0.83,
            "body:3": 0,
            "body:2": 0.01
          },
          "confidence": 0.82
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "subject:2": 0,
            "body:4": 0,
            "body:1": 0,
            "NONE": 0.87,
            "subject:1": 0.03,
            "body:0": 0,
            "body:5": 0.08,
            "body:3": 0.01,
            "body:2": 0.01
          },
          "confidence": 0.85
        }
      },
      "usage": {
        "input_tokens": 2038,
        "output_tokens": 333
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 266.50262499999997,
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
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-003",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:51.823Z",
    "offsetMs": 0.6682080000000497
  },
  {
    "seq": 12,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-003",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:51.942Z",
    "offsetMs": 119.303042,
    "elapsedMs": 118.04029200000002,
    "outcome": "success"
  },
  {
    "seq": 13,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-003",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:51.945Z",
    "offsetMs": 122.49866700000007
  },
  {
    "seq": 14,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-003",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:52.089Z",
    "offsetMs": 266.10358299999996,
    "elapsedMs": 142.72283299999992,
    "outcome": "success"
  },
  {
    "seq": 15,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-003",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:52.089Z",
    "offsetMs": 266.56562500000007,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "eb3b849e624e573dc48820db9bb27f6367ac4783164365d7e7bbf19d3bd01b27";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":12},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":14},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":15}} as const;
export const projectionSha256 = "6b83c612a0a7925e03b5d1b99a6acbef3811309a0a46b519c91f88dbfddad6fe";
