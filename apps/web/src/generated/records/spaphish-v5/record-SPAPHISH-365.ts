import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-365",
  "inputSha256": "f304bb7983d60876923a379438613bf33bf29f01e404368e63decc6c63d8a428",
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
      "end": 145,
      "text": "Re: Entrega de FedEx Express: [ Pablito ] Este es nuestro tercer y último intento de comunicarnos con usted, su paquete necesita su confirmación."
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 145,
      "end": 147,
      "text": "📦"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 162,
      "text": "ExpressService ® ENTREGA DEL PAQUETE SUSPENDIDO Querido Alberto Díaz, Por el momento, no podemos entregar su paquete #74291530 de nuestro almacén a tu domicilio. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 162,
      "end": 215,
      "text": "Debido a la falta de información en nuestro sistema. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 215,
      "end": 331,
      "text": "Resuelva este problema en un plazo de (5) días hábiles, de lo contrario, debemos devolver el paquete al fabricante. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 331,
      "end": 591,
      "text": "RESOLUCIÓN DE PROBLEMAS Información de empaquetado: Estado: detenido en el centro de manipulación (tasas aduaneras pendientes) Que tengas un gran día! - FedEx Express-servicio Este es un correo electrónico automatizado de nuestro robot de servicio al cliente. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 591,
      "end": 648,
      "text": "Todavía no sabe leer, así que por favor no le respondas. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 648,
      "end": 778,
      "text": "Si desea ser eliminado de nuestra lista y ya no recibir nuevos correos electrónicos sobre eventos,, Por favor, haga clic en aquí. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 778,
      "end": 864,
      "text": "O envíe un correo electrónico à: 742 Maple Grove Rd, Ste 210 #884, Fairview, CO, 80439"
    }
  ],
  "passA": {
    "requestSha256": "44a5aa66cffa6609334254e62219041829792de868a66607731ba5063cb79ea7",
    "capturedAt": "2026-09-20T23:45:55.147Z",
    "elapsedMs": 147.07187500000873,
    "successfulAttemptElapsedMs": 144.66883399999642,
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
          "noul": 0.12
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
          "noul": 0.93
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.48
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.19
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
          "noul": 0.1
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.98,
            "educational_or_quoted": 0,
            "informational": 0.02,
            "mixed_or_unclear": 0
          },
          "confidence": 0.97
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.58,
            "no_sensitive_action": 0.41,
            "mixed_or_unknown": 0.01,
            "independently_established": 0
          },
          "confidence": 0.44
        }
      },
      "usage": {
        "input_tokens": 3697,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "cb44e6639e211ca962599a8368b8cefc5095a10a186b539d67b6ab031bd5c345",
    "capturedAt": "2026-09-20T23:45:55.299Z",
    "elapsedMs": 149.23649999999907,
    "successfulAttemptElapsedMs": 147.17029099998763,
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
            "subject:0": 0,
            "body:5": 0,
            "NONE": 0,
            "body:2": 1,
            "subject:1": 0,
            "body:4": 0,
            "body:0": 0,
            "body:3": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:6": 0.01,
            "body:1": 0.01,
            "body:3": 0.47,
            "subject:0": 0.13,
            "NONE": 0.03,
            "body:2": 0.04,
            "subject:1": 0,
            "body:4": 0.01,
            "body:0": 0.3,
            "body:5": 0
          },
          "confidence": 0.41
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:6": 0.07,
            "body:1": 0,
            "body:3": 0.02,
            "body:5": 0,
            "NONE": 0.3,
            "body:2": 0.01,
            "subject:1": 0,
            "body:4": 0.6,
            "body:0": 0,
            "subject:0": 0
          },
          "confidence": 0.54
        }
      },
      "usage": {
        "input_tokens": 2454,
        "output_tokens": 335
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 299.06658299999253,
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
    "seq": 1788,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-365",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:55.002Z",
    "offsetMs": 1.855582999996841
  },
  {
    "seq": 1789,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-365",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:55.147Z",
    "offsetMs": 147.07249999999476,
    "elapsedMs": 144.66883399999642,
    "outcome": "success"
  },
  {
    "seq": 1790,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-365",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:55.151Z",
    "offsetMs": 150.95616699999664
  },
  {
    "seq": 1791,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-365",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:55.299Z",
    "offsetMs": 298.74933299999975,
    "elapsedMs": 147.17029099998763,
    "outcome": "success"
  },
  {
    "seq": 1792,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-365",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:55.299Z",
    "offsetMs": 299.13649999999325,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "60a8b1e7a4d1f246e2184285d11e8c5b4c6450cd8999d586dd1bc472e1785566";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1789},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1791},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1792}} as const;
export const projectionSha256 = "e2f49d7e6ebf5624d48d60935cf36d4ac36a197d42501fd54541137b9d481650";
