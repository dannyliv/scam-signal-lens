import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-497",
  "inputSha256": "c80ac8e86a84a57742fb1f11b00f6338e1a244ff363269649f1462b179bd0902",
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
      "end": 40,
      "text": "Pancracio  ¡Reclama tu Medicare Kit Hoy!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 49,
      "text": "¡Última Oportunidad de Reclamar tu Medicare Kit! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 49,
      "end": 90,
      "text": "Sanitas PARTE DE Bupa ¿Tienes un minuto? "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 90,
      "end": 155,
      "text": "¡Haz nuestra encuesta rápida para tener la oportunidad de ganar! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 155,
      "end": 199,
      "text": "KIT DE MEDICARE ¡ENTRA A LA ENCUESTA AHORA! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 199,
      "end": 423,
      "text": "Kit de Medicare ⭐⭐⭐⭐☆ (4.2/5) 3,940 Reseñas Gran capacidad: El compartimento principal tiene 6 bolsillos de malla, adecuado para llevar suministros médicos como gasas, contenedores de emergencia, estetoscopios, vendas, etc. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 423,
      "end": 476,
      "text": "Organiza tus necesidades médicas de manera ordenada. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 476,
      "end": 757,
      "text": "Kit de Medicare: • 1x Vendas & apósitos • 1x Vendas & apósitos • 1x Herramientas • 1x Termómetro • 1x Mega Pack Paracetamol (Tylenol) • 1x Mega Pack Ibuprofeno (Advil) • 1x Mega Pack Naproxeno (Aleve) • 1x Mega Pack Aspirina (Bayer) • 1x Otros esenciales ¡RECLAMA TU PREMIO AHORA! "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 757,
      "end": 932,
      "text": "Gracias, Equipo de Encuestas de Sanitas If you no longer wish to receive these emails, you may unsubscribe by clicking here. click here to remove yourself from our emails list"
    }
  ],
  "passA": {
    "requestSha256": "1bd9e6168bc64e0779483e06b151607c037508dc2a784df7a62af7e8df9de082",
    "capturedAt": "2026-09-22T03:58:05.655Z",
    "elapsedMs": 640.5071940000635,
    "successfulAttemptElapsedMs": 638.6726539999945,
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
          "noul": 0.26
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.06
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.86
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.9
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.19
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.1
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.09
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "active_request": 1,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "no_sensitive_action": 0.41,
            "sender_supplied": 0.58
          },
          "confidence": 0.44
        }
      },
      "usage": {
        "input_tokens": 5177,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "8f5debeb48ec1c0115a6b4e7210368491a63e7e03540e5d42e294354c8410a5f",
    "capturedAt": "2026-09-22T03:58:06.245Z",
    "elapsedMs": 588.0683649999555,
    "successfulAttemptElapsedMs": 586.5015099999728,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.13,
            "body:6": 0.01,
            "body:3": 0.08,
            "NONE": 0.78,
            "subject:0": 0,
            "body:5": 0,
            "body:1": 0,
            "body:0": 0,
            "body:4": 0,
            "body:7": 0
          },
          "confidence": 0.75
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0,
            "body:3": 0.04,
            "body:6": 0.01,
            "NONE": 0,
            "subject:0": 0.01,
            "body:5": 0,
            "body:1": 0,
            "body:0": 0.93,
            "body:4": 0,
            "body:7": 0
          },
          "confidence": 0.93
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0.01,
            "body:3": 0,
            "body:6": 0,
            "NONE": 0.02,
            "subject:0": 0,
            "body:5": 0,
            "body:1": 0.71,
            "body:0": 0.01,
            "body:4": 0,
            "body:7": 0.25
          },
          "confidence": 0.68
        }
      },
      "usage": {
        "input_tokens": 2908,
        "output_tokens": 330
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1230.9779870000202,
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
        "status": "none_selected",
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
        "segmentId": "body:0"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "verification_bypass": {
        "status": "not_requested",
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
    "seq": 2441,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-497",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:58:05.015Z",
    "offsetMs": 1.4809179999865592
  },
  {
    "seq": 2442,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-497",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:58:05.654Z",
    "offsetMs": 640.5078109999886,
    "elapsedMs": 638.6726539999945,
    "outcome": "success"
  },
  {
    "seq": 2443,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-497",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:58:05.658Z",
    "offsetMs": 643.7885809999425
  },
  {
    "seq": 2444,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-497",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:58:06.245Z",
    "offsetMs": 1230.6767260000343,
    "elapsedMs": 586.5015099999728,
    "outcome": "success"
  },
  {
    "seq": 2445,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-497",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:58:06.245Z",
    "offsetMs": 1231.0348499999382,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "478afe2cdd0194fc4d36eded1d9ea1bcd8fc5a00bd3bc5afb68c972a352182cd";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2442},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2444},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2445}} as const;
export const projectionSha256 = "65ed135b639629218af3a4358012a01bdbf51c2c8abb25403920046882621a83";
