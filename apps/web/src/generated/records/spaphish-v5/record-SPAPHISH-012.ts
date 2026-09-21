import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-012",
  "inputSha256": "b609868e2f1d0599a85d14b7beaa0faad2d676200f112fabfb29433f9b06fcc9",
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
      "end": 70,
      "text": "Felicidades  Pablito tu paquete ha llegado, esperando tu confirmación!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 198,
      "text": "Ver este correo electrónico en su navegador ExpressService ® ENTREGA DEL PAQUETE SUSPENDIDO Querido Marcelo, Por el momento, no podemos entregar su paquete 482911 de nuestro almacén a tu domicilio. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 198,
      "end": 251,
      "text": "Debido a la falta de información en nuestro sistema. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 251,
      "end": 367,
      "text": "Resuelva este problema en un plazo de (5) días hábiles, de lo contrario, debemos devolver el paquete al fabricante. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 367,
      "end": 627,
      "text": "RESOLUCIÓN DE PROBLEMAS Información de empaquetado: Estado: detenido en el centro de manipulación (tasas aduaneras pendientes) Que tengas un gran día! - FedEx Express-servicio Este es un correo electrónico automatizado de nuestro robot de servicio al cliente. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 627,
      "end": 684,
      "text": "Todavía no sabe leer, así que por favor no le respondas. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 684,
      "end": 814,
      "text": "Si desea ser eliminado de nuestra lista y ya no recibir nuevos correos electrónicos sobre eventos,, Por favor, haga clic en aquí. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 814,
      "end": 900,
      "text": "O envíe un correo electrónico à: 742 Maple Grove Rd, Ste 210 #884, Fairview, CO, 80439"
    }
  ],
  "passA": {
    "requestSha256": "16a0b8e04e8994bc35ce7e9ea1c8c86ab2917443b5fcb40e59e943fe647b15f2",
    "capturedAt": "2026-09-20T23:43:54.997Z",
    "elapsedMs": 139.33708399999978,
    "successfulAttemptElapsedMs": 137.8815840000002,
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
          "noul": 0.18
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
          "noul": 0.51
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
          "noul": 0.09
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 0.98,
            "mixed_or_unclear": 0.01,
            "informational": 0.01
          },
          "confidence": 0.97
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.36,
            "sender_supplied": 0.63,
            "mixed_or_unknown": 0.01,
            "independently_established": 0
          },
          "confidence": 0.51
        }
      },
      "usage": {
        "input_tokens": 3680,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "ff27f3afe065496d853ec037f6ffce7be750127c334b8f1cf0a017e8552fdf3e",
    "capturedAt": "2026-09-20T23:43:55.218Z",
    "elapsedMs": 218.62787499999968,
    "successfulAttemptElapsedMs": 216.91404200000034,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:0": 0,
            "body:5": 0,
            "body:2": 1,
            "body:3": 0,
            "body:4": 0,
            "subject:0": 0,
            "NONE": 0,
            "body:1": 0,
            "body:6": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:0": 0.21,
            "body:5": 0.01,
            "body:2": 0.09,
            "body:3": 0.62,
            "body:4": 0.01,
            "subject:0": 0.02,
            "body:6": 0.01,
            "body:1": 0.01,
            "NONE": 0.02
          },
          "confidence": 0.58
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.01,
            "body:5": 0.01,
            "body:2": 0.02,
            "body:3": 0.02,
            "body:4": 0.35,
            "subject:0": 0,
            "body:6": 0.14,
            "body:1": 0,
            "NONE": 0.45
          },
          "confidence": 0.37
        }
      },
      "usage": {
        "input_tokens": 2347,
        "output_tokens": 306
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 360.6631669999997,
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
    "seq": 56,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-012",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:54.858Z",
    "offsetMs": 0.8838340000002063
  },
  {
    "seq": 57,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-012",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:54.997Z",
    "offsetMs": 139.3392920000001,
    "elapsedMs": 137.8815840000002,
    "outcome": "success"
  },
  {
    "seq": 58,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-012",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:55.000Z",
    "offsetMs": 142.57720900000004
  },
  {
    "seq": 59,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-012",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:55.218Z",
    "offsetMs": 360.316417,
    "elapsedMs": 216.91404200000034,
    "outcome": "success"
  },
  {
    "seq": 60,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-012",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:55.218Z",
    "offsetMs": 360.72341700000015,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "5dffe057a5d22a46b047b58bed773e0a13c9597b8049592e379eb8a53318e867";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":57},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":59},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":60}} as const;
export const projectionSha256 = "6ec930a142bfd21bedc9b8cfeba299e3cbb6a6fdb14c66fc43ddc36b1ab49262";
