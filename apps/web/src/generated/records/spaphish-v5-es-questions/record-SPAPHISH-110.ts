import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-110",
  "inputSha256": "337710e5bc94660652ba707d0e82fd09e38d23fef6cf85a49a0c68518620d4af",
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
      "end": 69,
      "text": "Ezequiela Miguelina - Tienes (1) paquete esperando ser entregado 📦. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 69,
      "end": 118,
      "text": "Usa tu código para rastrearlo y recibirlo ___🚚. "
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 118,
      "end": 125,
      "text": "ID#7182"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 7,
      "text": "❒GLS . "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 7,
      "end": 54,
      "text": "■ Tienes (1) paquete esperando ser entregado . "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 54,
      "end": 97,
      "text": "Usa tu código para rastrearlo y recibirlo. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 97,
      "end": 260,
      "text": "Tu código de seguimiento : 983440712 Continuar ➢ ■ Programa tu entrega y suscríbete a nuestras notificaciones de calendario para evitar que esto vuelva a suceder. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 260,
      "end": 325,
      "text": "Programar Entrega  Gracias por tu pronta atención a este asunto. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 325,
      "end": 352,
      "text": "Esperamos tu confirmación. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 352,
      "end": 451,
      "text": "Saludos cordiales, GLS® Sobre Nosotros | Contáctanos | Gestionar Preferencias © 2025 GLS® Limited. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 451,
      "end": 482,
      "text": "Todos los derechos reservados. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 482,
      "end": 574,
      "text": "Si ya no deseas recibir estos correos electrónicos, puedes darte de baja haciendo clic aquí."
    }
  ],
  "passA": {
    "requestSha256": "d7f3061de011da0d41a8c1f121df1b8cfb5cd9a838fc4283170f0c996ede9044",
    "capturedAt": "2026-09-22T03:50:24.455Z",
    "elapsedMs": 675.6996930000023,
    "successfulAttemptElapsedMs": 674.9176869999792,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.07
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.06
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.37
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.88
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.09
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0,
            "active_request": 1
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.28,
            "no_sensitive_action": 0.71,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.61
        }
      },
      "usage": {
        "input_tokens": 5076,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "fb534612d4d1186d1029924d50586b203d244d0855c69f8f13ca3807a8110efb",
    "capturedAt": "2026-09-22T03:50:25.049Z",
    "elapsedMs": 592.2208749999991,
    "successfulAttemptElapsedMs": 591.3288609999872,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:2": 0.01,
            "subject:2": 0,
            "subject:1": 0.01,
            "subject:0": 0,
            "NONE": 0.23,
            "body:1": 0,
            "body:3": 0.44,
            "body:5": 0.03,
            "body:7": 0,
            "body:0": 0,
            "body:8": 0,
            "body:4": 0.28,
            "body:6": 0
          },
          "confidence": 0.38
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:2": 0.02,
            "subject:2": 0,
            "subject:1": 0,
            "subject:0": 0.01,
            "NONE": 0.14,
            "body:1": 0.01,
            "body:3": 0.07,
            "body:5": 0.04,
            "body:7": 0,
            "body:0": 0.2,
            "body:8": 0,
            "body:4": 0.09,
            "body:6": 0.42
          },
          "confidence": 0.37
        }
      },
      "usage": {
        "input_tokens": 1899,
        "output_tokens": 277
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1269.5181949999824,
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
        "status": "low_confidence",
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
    "seq": 533,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-110",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:23.780Z",
    "offsetMs": 0.5408909999823663
  },
  {
    "seq": 534,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-110",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:24.455Z",
    "offsetMs": 675.6999439999927,
    "elapsedMs": 674.9176869999792,
    "outcome": "success"
  },
  {
    "seq": 535,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-110",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:24.457Z",
    "offsetMs": 677.6633379999839
  },
  {
    "seq": 536,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-110",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:25.049Z",
    "offsetMs": 1269.2873889999755,
    "elapsedMs": 591.3288609999872,
    "outcome": "success"
  },
  {
    "seq": 537,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-110",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:25.049Z",
    "offsetMs": 1269.580661999993,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ddef9f53d8d20b0b8307f2c5f191dead0cf37a820eae29c2937f092e26d9ade9";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":534},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":536},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":537}} as const;
export const projectionSha256 = "b5d456ab38ff5341f6e9adca1f418224e198a9d28a61e0f981a52cbfd42b0ab6";
