import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-102",
  "inputSha256": "2d4c94dc1c86bd8a7fe654ca959443f9e0c6d0c11abac20cb8169b35b26cdbcf",
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
      "end": 27,
      "text": "Pablito Rastrea tu paquete!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 155,
      "text": "ExpressService ® ENTREGA DEL PAQUETE SUSPENDIDO Querido Carlos, Por el momento, no podemos entregar su paquete 90341785 de nuestro almacén a tu domicilio. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 155,
      "end": 208,
      "text": "Debido a la falta de información en nuestro sistema. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 208,
      "end": 324,
      "text": "Resuelva este problema en un plazo de (5) días hábiles, de lo contrario, debemos devolver el paquete al fabricante. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 324,
      "end": 584,
      "text": "RESOLUCIÓN DE PROBLEMAS Información de empaquetado: Estado: detenido en el centro de manipulación (tasas aduaneras pendientes) Que tengas un gran día! - FedEx Express-servicio Este es un correo electrónico automatizado de nuestro robot de servicio al cliente. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 584,
      "end": 641,
      "text": "Todavía no sabe leer, así que por favor no le respondas. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 641,
      "end": 771,
      "text": "Si desea ser eliminado de nuestra lista y ya no recibir nuevos correos electrónicos sobre eventos,, Por favor, haga clic en aquí. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 771,
      "end": 859,
      "text": "O envíe un correo electrónico à: 4500 Valley View Ln, Ste 200 #155, Grapevine, TX, 76051"
    }
  ],
  "passA": {
    "requestSha256": "d2a53816c1f4d756c44992fbecbdf64383e87172ff3cb7638044b93f3f6055db",
    "capturedAt": "2026-09-20T23:44:24.174Z",
    "elapsedMs": 137.7045419999995,
    "successfulAttemptElapsedMs": 136.15550000000076,
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
          "noul": 0.14
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
          "noul": 0.91
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.49
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.16
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
          "noul": 0.09
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0.01,
            "educational_or_quoted": 0,
            "active_request": 0.95,
            "informational": 0.04
          },
          "confidence": 0.94
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.53,
            "independently_established": 0,
            "no_sensitive_action": 0.46
          },
          "confidence": 0.37
        }
      },
      "usage": {
        "input_tokens": 3666,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "2a6a7e4e65607c847f96678d9ab07cacf490cf0404b7f7f3f5130d17f3e25d6a",
    "capturedAt": "2026-09-20T23:44:24.316Z",
    "elapsedMs": 139.97812499999418,
    "successfulAttemptElapsedMs": 138.50904199999786,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:6": 0,
            "body:1": 0,
            "body:5": 0,
            "body:3": 0,
            "body:2": 1,
            "NONE": 0,
            "body:4": 0,
            "body:0": 0,
            "subject:0": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:6": 0.01,
            "body:1": 0.02,
            "subject:0": 0.01,
            "body:3": 0.55,
            "NONE": 0.04,
            "body:2": 0.07,
            "body:4": 0.01,
            "body:0": 0.28,
            "body:5": 0.01
          },
          "confidence": 0.51
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:6": 0.14,
            "body:1": 0,
            "subject:0": 0,
            "body:5": 0.01,
            "NONE": 0.36,
            "body:2": 0.01,
            "body:4": 0.47000000000000003,
            "body:0": 0,
            "body:3": 0.01
          },
          "confidence": 0.39
        }
      },
      "usage": {
        "input_tokens": 2291,
        "output_tokens": 308
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 279.9985420000012,
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
    "seq": 499,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-102",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:24.037Z",
    "offsetMs": 1.017667000000074
  },
  {
    "seq": 500,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-102",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:24.174Z",
    "offsetMs": 137.70579200000066,
    "elapsedMs": 136.15550000000076,
    "outcome": "success"
  },
  {
    "seq": 501,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-102",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:24.177Z",
    "offsetMs": 140.5321249999979
  },
  {
    "seq": 502,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-102",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:24.316Z",
    "offsetMs": 279.67262499999924,
    "elapsedMs": 138.50904199999786,
    "outcome": "success"
  },
  {
    "seq": 503,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-102",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:24.316Z",
    "offsetMs": 280.05504199999996,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "b3a51e1df870e17154c98acc47d7cca87735482b835e5d0dfbf70ad4bd60c461";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":500},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":502},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":503}} as const;
export const projectionSha256 = "5c2a12503b01520106f31b5d4111981b52454fc9c80a7b84b3c1c15d23572daf";
