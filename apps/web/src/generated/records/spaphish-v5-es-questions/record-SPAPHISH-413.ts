import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-413",
  "inputSha256": "849d7bffbff209b9312c304289e51d4e45adf48a89c89d19a8cbb6c283a9c41c",
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
      "end": 67,
      "text": "Pancracio ¡Has ganado un paquete de San Valentín de Rituals GRATIS!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 61,
      "text": "Tenemos una sorpresa para los clientes de Rituals RITUALS... "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 61,
      "end": 93,
      "text": "Estimado cliente, ¡Felicidades! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 93,
      "end": 253,
      "text": "Como parte de nuestra promoción del Día de San Valentín, nos gustaría ofrecerle una oportunidad única para recibir un nuevo Paquete de San Valentín de Rituals! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 253,
      "end": 378,
      "text": "Para reclamarlo, simplemente complete esta breve encuesta sobre su opinión acerca de las ofertas de San Valentín en Rituals. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 378,
      "end": 405,
      "text": "Su opinión es muy valiosa. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 405,
      "end": 443,
      "text": "Haga clic en CONTINUAR para comenzar. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 443,
      "end": 466,
      "text": "Continuar darse de baja"
    }
  ],
  "passA": {
    "requestSha256": "4b268b24722b541c7f31aea9215ea5a763ac0e1a48eac8478ce465322c1d4319",
    "capturedAt": "2026-09-22T03:56:25.489Z",
    "elapsedMs": 610.1071000000229,
    "successfulAttemptElapsedMs": 608.4911570000113,
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
          "noul": 0.12
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.16
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.84
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.18
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.08
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.07
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.06
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 1,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.39,
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "no_sensitive_action": 0.6
          },
          "confidence": 0.47
        }
      },
      "usage": {
        "input_tokens": 5010,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "12663345a49f34be8a3711e0e8c107951471a068513b2ba876ee0873dec98016",
    "capturedAt": "2026-09-22T03:56:26.054Z",
    "elapsedMs": 563.5927919999813,
    "successfulAttemptElapsedMs": 561.3529059999855,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:5": 0.02,
            "NONE": 0.26,
            "body:6": 0,
            "body:1": 0.1,
            "body:0": 0.17,
            "subject:0": 0.01,
            "body:4": 0.02,
            "body:3": 0.1,
            "body:2": 0.32
          },
          "confidence": 0.23
        }
      },
      "usage": {
        "input_tokens": 1007,
        "output_tokens": 104
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1175.4743540000054,
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
        "status": "not_requested",
        "segmentId": null
      },
      "authority_claim": {
        "status": "low_confidence",
        "segmentId": null
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
    "seq": 2024,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-413",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:24.880Z",
    "offsetMs": 1.304333999985829
  },
  {
    "seq": 2025,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-413",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:25.488Z",
    "offsetMs": 610.1140579999774,
    "elapsedMs": 608.4911570000113,
    "outcome": "success"
  },
  {
    "seq": 2026,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-413",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:25.492Z",
    "offsetMs": 613.2026370000094
  },
  {
    "seq": 2027,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-413",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:26.054Z",
    "offsetMs": 1175.2313899999717,
    "elapsedMs": 561.3529059999855,
    "outcome": "success"
  },
  {
    "seq": 2028,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-413",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:26.054Z",
    "offsetMs": 1175.5246160000097,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7fd3da8c611c0026c463148a09af925d4f342ed89fe2d065b059d1132eaa58f3";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2025},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2027},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2028}} as const;
export const projectionSha256 = "51d892002e7a3f573735cd88edbbffa24059bf3cd1ed643b19cc268a039af48b";
