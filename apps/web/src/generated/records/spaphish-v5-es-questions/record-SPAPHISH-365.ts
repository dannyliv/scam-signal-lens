import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-365",
  "inputSha256": "f304bb7983d60876923a379438613bf33bf29f01e404368e63decc6c63d8a428",
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
    "requestSha256": "8114fbb183f44427bfc3d0d0328c36e435b1669789f023d9594053a8f0cd3a42",
    "capturedAt": "2026-09-22T03:55:29.418Z",
    "elapsedMs": 612.6076079999912,
    "successfulAttemptElapsedMs": 611.2406409999821,
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
          "noul": 0.15
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.16
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
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.39
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.24
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
          "noul": 0.09
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.07
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.04,
            "active_request": 0.95,
            "mixed_or_unclear": 0.01,
            "educational_or_quoted": 0
          },
          "confidence": 0.94
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.51,
            "no_sensitive_action": 0.46,
            "mixed_or_unknown": 0.03,
            "independently_established": 0
          },
          "confidence": 0.34
        }
      },
      "usage": {
        "input_tokens": 5147,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "6d9b037cf625fb43f27e2304da655e23223fb35e7a26185489fe2a3198982cd7",
    "capturedAt": "2026-09-22T03:55:29.940Z",
    "elapsedMs": 519.8822139999829,
    "successfulAttemptElapsedMs": 517.9813459999859,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:1": 0,
            "body:0": 0,
            "body:2": 1,
            "body:3": 0,
            "body:6": 0,
            "NONE": 0,
            "body:4": 0,
            "body:5": 0,
            "subject:1": 0,
            "subject:0": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:1": 0.01,
            "body:0": 0.23,
            "body:2": 0.07,
            "body:3": 0.52,
            "body:6": 0.02,
            "subject:1": 0,
            "body:4": 0.02,
            "body:5": 0.01,
            "NONE": 0.02,
            "subject:0": 0.1
          },
          "confidence": 0.48
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0,
            "body:0": 0,
            "body:2": 0.02,
            "body:3": 0.02,
            "body:6": 0.14,
            "subject:1": 0,
            "body:4": 0.38,
            "body:5": 0.01,
            "NONE": 0.43,
            "subject:0": 0
          },
          "confidence": 0.36
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0,
            "body:0": 0.01,
            "body:2": 0.02,
            "body:3": 0.34,
            "body:6": 0.01,
            "NONE": 0.62,
            "body:4": 0,
            "body:5": 0,
            "subject:1": 0,
            "subject:0": 0
          },
          "confidence": 0.57
        }
      },
      "usage": {
        "input_tokens": 3508,
        "output_tokens": 445
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1134.2775649999967,
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
        "status": "low_confidence",
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
    "seq": 1786,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-365",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:28.807Z",
    "offsetMs": 1.0275529999635182
  },
  {
    "seq": 1787,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-365",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:29.418Z",
    "offsetMs": 612.6070649999892,
    "elapsedMs": 611.2406409999821,
    "outcome": "success"
  },
  {
    "seq": 1788,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-365",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:29.420Z",
    "offsetMs": 614.9209839999676
  },
  {
    "seq": 1789,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-365",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:29.939Z",
    "offsetMs": 1133.9184479999822,
    "elapsedMs": 517.9813459999859,
    "outcome": "success"
  },
  {
    "seq": 1790,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-365",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:29.940Z",
    "offsetMs": 1134.3495539999567,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "90bda2313a8335609a6f91014b27dfe0811b109b1212fe47d2823d6df48ca4b8";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1787},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1789},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1790}} as const;
export const projectionSha256 = "2cf8ad862a3b1ed923ee05c8e6c14020d86eea4c057f6254b0a2fb53731da062";
