import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-273",
  "inputSha256": "44c5cf798bfbda9f6a9ee5889def0a1880e5adb58dc4f7559c0ae93e45771c67",
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
      "end": 26,
      "text": "Tenemos un voucher para ti"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 158,
      "text": "Hola Ricardo López Lamentamos que tu vuelo 9012 del viernes 10 marzo 2020 con reservación R9HTZP no pueda despegar en estos tiempos de transformación global. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 158,
      "end": 285,
      "text": "Pero tenemos un voucher por el valor de tus vuelos para llevarte a una nueva aventura cuando el cielo deje de tener fronteras. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 285,
      "end": 462,
      "text": "Pasajero Referencia voucher Monto voucher Ricardo López 44556677889900009 $5,250.00 MXN Descubre cómo redimir tu voucher y conoce los términos y condiciones haciendo clic aquí. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 462,
      "end": 576,
      "text": "Recuerda que para hacerlo válido en tu nueva reservación el nombre debe coincidir exactamente con el del voucher. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 576,
      "end": 681,
      "text": "#InterjetContigoSiempre Contáctanos aquí Copyright © 2020 | Aerolínea X | Todos los derechos reservados. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 681,
      "end": 803,
      "text": "Este mensaje fue enviado desde una dirección de correo electrónico exclusivamente de notificación que no admite mensajes. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 803,
      "end": 864,
      "text": "Si tienes alguna pregunta, comunícate a Servicio a clientes. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 864,
      "end": 926,
      "text": "Aerolínea X | Avenida Aeropuerto 100 | Ciudad Satélite | 99001"
    }
  ],
  "passA": {
    "requestSha256": "844313e21f6a11643659f0c06d17f975a1b96e0af7958fa7de38bc66f2ec57ba",
    "capturedAt": "2026-09-22T03:53:38.324Z",
    "elapsedMs": 658.6817819999997,
    "successfulAttemptElapsedMs": 657.5559430000139,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.03
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.15
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.23
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.12
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.91
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.13
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.06
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.03
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.19
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.04,
            "active_request": 0.96,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.95
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.48,
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.51,
            "independently_established": 0
          },
          "confidence": 0.35
        }
      },
      "usage": {
        "input_tokens": 5137,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "40ad4a562d50c7368ea35f91a77dcffae9b498de15e2bbd89eb863b4fd50e2a8",
    "capturedAt": "2026-09-22T03:53:39.034Z",
    "elapsedMs": 708.820596000005,
    "successfulAttemptElapsedMs": 707.6586390000302,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.01,
            "body:7": 0,
            "body:6": 0,
            "body:3": 0.06,
            "body:5": 0,
            "body:2": 0.43,
            "body:4": 0,
            "body:0": 0,
            "NONE": 0.49,
            "subject:0": 0.01
          },
          "confidence": 0.42
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:1": 0.03,
            "body:7": 0.05,
            "body:3": 0.01,
            "body:6": 0.37,
            "body:5": 0.02,
            "body:2": 0.03,
            "body:4": 0.24,
            "body:0": 0.08,
            "NONE": 0.16,
            "subject:0": 0.01
          },
          "confidence": 0.31
        }
      },
      "usage": {
        "input_tokens": 2004,
        "output_tokens": 219
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1369.0815650000004,
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
        "status": "low_confidence",
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
    "seq": 1333,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-273",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:37.665Z",
    "offsetMs": 0.8318899999721907
  },
  {
    "seq": 1334,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-273",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:38.323Z",
    "offsetMs": 658.6819179999875,
    "elapsedMs": 657.5559430000139,
    "outcome": "success"
  },
  {
    "seq": 1335,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-273",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:38.325Z",
    "offsetMs": 660.8669669999508
  },
  {
    "seq": 1336,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-273",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:39.033Z",
    "offsetMs": 1368.8559719999903,
    "elapsedMs": 707.6586390000302,
    "outcome": "success"
  },
  {
    "seq": 1337,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-273",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:53:39.034Z",
    "offsetMs": 1369.125767999969,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "530cd32e9fb8f49874abf7c9460817fd52baa9d2b595a345841d8c039e1612d0";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1334},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1336},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1337}} as const;
export const projectionSha256 = "e05f1c96c8eaab6ee2c3f91e66d1b4cb7d74a7df384e67e5c25f9d5d633ee20b";
