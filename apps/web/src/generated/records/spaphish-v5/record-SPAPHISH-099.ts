import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-099",
  "inputSha256": "1050ef244c368c3546d864006022c9f6096509848f2ab37c367b19012b67b28d",
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
      "end": 61,
      "text": "Re: Pablito 2 paquetes en espera de entrega, confirmar ahora."
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 200,
      "text": "Ver este correo electrónico en su navegador ExpressService ® ENTREGA DEL PAQUETE SUSPENDIDO Querido ricardo, Por el momento, no podemos entregar su paquete 99887766 de nuestro almacén a tu domicilio. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 200,
      "end": 253,
      "text": "Debido a la falta de información en nuestro sistema. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 253,
      "end": 369,
      "text": "Resuelva este problema en un plazo de (5) días hábiles, de lo contrario, debemos devolver el paquete al fabricante. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 369,
      "end": 675,
      "text": "RESOLUCIÓN DE PROBLEMAS Información de empaquetado: Estado: detenido en el centro de manipulación (tasas aduaneras pendientes) Que tengas un gran día! - FedEx Express-servicio Si desea ser eliminado de nuestra lista y ya no recibir nuevos correos electrónicos sobre eventos,, Por favor, haga clic en aquí. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 675,
      "end": 774,
      "text": "O envíe un correo electrónico à: 123 Calle de la Ficción, Ste 744 #511, Ciudad Sintética, CA, 90210"
    }
  ],
  "passA": {
    "requestSha256": "a5582e6d149adfe1125506c8a3e0f41f72e84e2fdd45afb13960fdc0fe7fa4af",
    "capturedAt": "2026-09-20T23:44:23.237Z",
    "elapsedMs": 196.2637079999986,
    "successfulAttemptElapsedMs": 194.53858400000172,
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
          "noul": 0.18
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.19
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.97
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.91
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.39
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.18
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
          "noul": 0.05
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
            "active_request": 0.99,
            "informational": 0.01
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.3,
            "mixed_or_unknown": 0.02,
            "independently_established": 0,
            "sender_supplied": 0.68
          },
          "confidence": 0.57
        }
      },
      "usage": {
        "input_tokens": 3650,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "b7dd9285a6f580042c78096c2f254ad801d8b42fa9858f8a699f05b840d7101c",
    "capturedAt": "2026-09-20T23:44:23.450Z",
    "elapsedMs": 211.81612499999756,
    "successfulAttemptElapsedMs": 210.7541659999988,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:1": 0,
            "body:2": 1,
            "body:0": 0,
            "body:3": 0,
            "body:4": 0,
            "NONE": 0,
            "subject:0": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:1": 0.03,
            "body:2": 0.1,
            "body:0": 0.29,
            "body:3": 0.52,
            "body:4": 0,
            "NONE": 0.05,
            "subject:0": 0.01
          },
          "confidence": 0.43
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.01,
            "body:2": 0.05,
            "body:0": 0.15,
            "body:3": 0.04,
            "body:4": 0.09,
            "NONE": 0.64,
            "subject:0": 0.02
          },
          "confidence": 0.6
        }
      },
      "usage": {
        "input_tokens": 2143,
        "output_tokens": 252
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 410.1875,
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
    "seq": 484,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-099",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:23.041Z",
    "offsetMs": 1.1088329999984126
  },
  {
    "seq": 485,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-099",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:23.236Z",
    "offsetMs": 196.2674999999981,
    "elapsedMs": 194.53858400000172,
    "outcome": "success"
  },
  {
    "seq": 486,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-099",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:23.239Z",
    "offsetMs": 198.61099999999715
  },
  {
    "seq": 487,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-099",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:23.450Z",
    "offsetMs": 409.83683299999757,
    "elapsedMs": 210.7541659999988,
    "outcome": "success"
  },
  {
    "seq": 488,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-099",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:23.450Z",
    "offsetMs": 410.250165999998,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d697b775825d7868ad491bf915f1258265b21af041d6f1f86fb8a3c30cfc48d2";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":485},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":487},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":488}} as const;
export const projectionSha256 = "6288b41df000f42c440fe857f5a938d78027ff1e6c7a55a608d060bd7c233888";
