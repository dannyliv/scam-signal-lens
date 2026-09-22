import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-012",
  "inputSha256": "b609868e2f1d0599a85d14b7beaa0faad2d676200f112fabfb29433f9b06fcc9",
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
    "requestSha256": "0815ae8387329d25368933a9f37d3f7d3cc36c096379a2853c191a547c395888",
    "capturedAt": "2026-09-22T03:48:25.479Z",
    "elapsedMs": 670.2878259999998,
    "successfulAttemptElapsedMs": 669.2878479999999,
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
          "noul": 0.16
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.17
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
          "noul": 0.36
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.33
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.08
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.08
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.95,
            "informational": 0.04,
            "mixed_or_unclear": 0.01,
            "educational_or_quoted": 0
          },
          "confidence": 0.93
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.57,
            "mixed_or_unknown": 0.05,
            "independently_established": 0,
            "no_sensitive_action": 0.38
          },
          "confidence": 0.44
        }
      },
      "usage": {
        "input_tokens": 5130,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "d83085403da8ca8f7fe4a95290bc667b56c75bb4245c41b45a858a5c7c96e21b",
    "capturedAt": "2026-09-22T03:48:26.050Z",
    "elapsedMs": 569.3919340000011,
    "successfulAttemptElapsedMs": 568.7302439999985,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:0": 0,
            "body:2": 1,
            "subject:0": 0,
            "body:3": 0,
            "NONE": 0,
            "body:6": 0,
            "body:4": 0,
            "body:1": 0,
            "body:5": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:0": 0.22,
            "body:2": 0.14,
            "subject:0": 0.01,
            "body:3": 0.57,
            "NONE": 0.02,
            "body:6": 0.01,
            "body:1": 0.01,
            "body:4": 0.01,
            "body:5": 0.01
          },
          "confidence": 0.51
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.01,
            "body:2": 0.02,
            "subject:0": 0,
            "body:3": 0.02,
            "NONE": 0.42,
            "body:6": 0.11,
            "body:1": 0,
            "body:4": 0.41000000000000003,
            "body:5": 0.01
          },
          "confidence": 0.34
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.03,
            "body:0": 0,
            "subject:0": 0,
            "body:3": 0.45,
            "NONE": 0.5,
            "body:6": 0.01,
            "body:1": 0.01,
            "body:4": 0,
            "body:5": 0
          },
          "confidence": 0.43
        }
      },
      "usage": {
        "input_tokens": 3371,
        "output_tokens": 409
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1242.4351920000008,
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
    "seq": 56,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-012",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:24.809Z",
    "offsetMs": 0.49741999999969266
  },
  {
    "seq": 57,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-012",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:25.478Z",
    "offsetMs": 670.289565000001,
    "elapsedMs": 669.2878479999999,
    "outcome": "success"
  },
  {
    "seq": 58,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-012",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:25.481Z",
    "offsetMs": 673.0444100000004
  },
  {
    "seq": 59,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-012",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:26.050Z",
    "offsetMs": 1242.1494710000006,
    "elapsedMs": 568.7302439999985,
    "outcome": "success"
  },
  {
    "seq": 60,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-012",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:48:26.051Z",
    "offsetMs": 1242.4788420000004,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "11ef6267bc0e28865619a9a98d28492f5eacb4ba52c3ecdd95d08a5aace84949";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":57},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":59},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":60}} as const;
export const projectionSha256 = "3e2b2b7e26fcc86b4054f7f4896ca4398a26e6ec8d2c08775243eaf6abf1861c";
