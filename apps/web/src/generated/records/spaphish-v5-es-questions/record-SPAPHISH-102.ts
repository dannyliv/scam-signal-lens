import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-102",
  "inputSha256": "2d4c94dc1c86bd8a7fe654ca959443f9e0c6d0c11abac20cb8169b35b26cdbcf",
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
    "requestSha256": "69620c56862b9d799ec02c0afc3b181dda015e68401a99818870a5ed1cbfb22e",
    "capturedAt": "2026-09-22T03:50:14.478Z",
    "elapsedMs": 620.6184970000031,
    "successfulAttemptElapsedMs": 619.6979419999989,
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
          "noul": 0.13
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
          "noul": 0.95
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.94
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.37
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
          "noul": 0.07
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.07
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0.01,
            "informational": 0.07,
            "active_request": 0.92
          },
          "confidence": 0.89
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "mixed_or_unknown": 0.03,
            "sender_supplied": 0.47,
            "no_sensitive_action": 0.5
          },
          "confidence": 0.34
        }
      },
      "usage": {
        "input_tokens": 5116,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "fc6080afef00e8cde64347ef27b20f3af42bd3f459b9064926dced93ecfe9b7d",
    "capturedAt": "2026-09-22T03:50:15.047Z",
    "elapsedMs": 567.590246000007,
    "successfulAttemptElapsedMs": 566.8361869999935,
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
            "body:2": 1,
            "subject:0": 0,
            "NONE": 0,
            "body:5": 0,
            "body:3": 0,
            "body:4": 0,
            "body:0": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:6": 0.01,
            "subject:0": 0.01,
            "body:2": 0.1,
            "body:1": 0.01,
            "NONE": 0.02,
            "body:5": 0.01,
            "body:3": 0.51,
            "body:4": 0.01,
            "body:0": 0.32
          },
          "confidence": 0.45
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0.12,
            "subject:0": 0,
            "body:2": 0.02,
            "body:1": 0,
            "NONE": 0.45,
            "body:5": 0.02,
            "body:3": 0.02,
            "body:4": 0.37,
            "body:0": 0
          },
          "confidence": 0.37
        }
      },
      "usage": {
        "input_tokens": 2599,
        "output_tokens": 306
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1189.9374050000042,
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
    "seq": 494,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-102",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:13.858Z",
    "offsetMs": 0.6513249999989057
  },
  {
    "seq": 495,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-102",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:14.478Z",
    "offsetMs": 620.6141520000092,
    "elapsedMs": 619.6979419999989,
    "outcome": "success"
  },
  {
    "seq": 496,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-102",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:14.480Z",
    "offsetMs": 622.4439700000075
  },
  {
    "seq": 497,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-102",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:15.047Z",
    "offsetMs": 1189.596773000012,
    "elapsedMs": 566.8361869999935,
    "outcome": "success"
  },
  {
    "seq": 498,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-102",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:15.047Z",
    "offsetMs": 1189.9822270000004,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "291e8f15bae41560ca2de171f5056008acb10b8c1c037caeab68e7b4f7047d6c";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":495},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":497},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":498}} as const;
export const projectionSha256 = "68bc84bafc1c7ed1f66c6ca96195b5bf13dc722fdfed64210bcbfe5e51e48bfa";
