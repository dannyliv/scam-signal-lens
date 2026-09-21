import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-409",
  "inputSha256": "f7bb7433daa6ca84ab9b37dc80c982ca4bfb093689d364732f09d07a560764f6",
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
    "requestSha256": "59b3b9516508bf67b1c4a1ef25ad91fd5500f00509bf592f128625faad98ceef",
    "capturedAt": "2026-09-20T23:46:09.114Z",
    "elapsedMs": 130.84004099998856,
    "successfulAttemptElapsedMs": 128.42049999997835,
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
          "noul": 0.14
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.13
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
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.53
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
          "noul": 0.07
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.08
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.01,
            "active_request": 0.99,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.98
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.44,
            "mixed_or_unknown": 0.02,
            "independently_established": 0,
            "sender_supplied": 0.54
          },
          "confidence": 0.38
        }
      },
      "usage": {
        "input_tokens": 3675,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "e05148ec535c76a938b3347ad8c24a0390562af9cd551c7189c9f3ee8de628e0",
    "capturedAt": "2026-09-20T23:46:09.306Z",
    "elapsedMs": 189.19804200000362,
    "successfulAttemptElapsedMs": 186.40883400000166,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "subject:0": 0.02,
            "body:1": 0,
            "body:4": 0,
            "body:6": 0,
            "body:3": 0,
            "body:2": 0.98,
            "body:5": 0,
            "body:0": 0,
            "NONE": 0
          },
          "confidence": 0.98
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "subject:0": 0.01,
            "body:1": 0.01,
            "body:6": 0.01,
            "body:4": 0,
            "body:5": 0.01,
            "body:2": 0.08,
            "body:3": 0.58,
            "body:0": 0.27,
            "NONE": 0.03
          },
          "confidence": 0.54
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0,
            "body:4": 0.4,
            "body:6": 0.13,
            "body:5": 0.01,
            "body:2": 0.02,
            "body:3": 0.02,
            "body:0": 0,
            "NONE": 0.42
          },
          "confidence": 0.34
        }
      },
      "usage": {
        "input_tokens": 2327,
        "output_tokens": 306
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 322.83554199998616,
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
    "seq": 2006,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-409",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:08.985Z",
    "offsetMs": 1.8725419999973383
  },
  {
    "seq": 2007,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-409",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:09.114Z",
    "offsetMs": 130.83820800000103,
    "elapsedMs": 128.42049999997835,
    "outcome": "success"
  },
  {
    "seq": 2008,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-409",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:09.119Z",
    "offsetMs": 135.41162500000792
  },
  {
    "seq": 2009,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-409",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:09.306Z",
    "offsetMs": 322.532332999981,
    "elapsedMs": 186.40883400000166,
    "outcome": "success"
  },
  {
    "seq": 2010,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-409",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:09.306Z",
    "offsetMs": 322.89758299998357,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6b5fa2d8aca462f5523d53f68beadfb52e2d14a4e9e02e8fc10504616b24f858";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2007},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2009},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2010}} as const;
export const projectionSha256 = "d5a8ee939f8c4553be4b758ee79551490033720f324d683e3cc193da64abb488";
