import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-284",
  "inputSha256": "b42b0954f2bff1814c558bbc5d2dd75e149a64e2a9b084f8dcc3f43c8acaa244",
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
      "end": 26,
      "text": "Tenemos un voucher para ti"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 152,
      "text": "Hola Genovevo Lamentamos que tu vuelo 2904 del sábado 18 abril 2025 con reservación E5IVSY no pueda despegar en estos tiempos de transformación global. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 152,
      "end": 279,
      "text": "Pero tenemos un voucher por el valor de tus vuelos para llevarte a una nueva aventura cuando el cielo deje de tener fronteras. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 279,
      "end": 451,
      "text": "Pasajero Referencia voucher Monto voucher Genovevo 48909960707700001 $3,004.00 MXN Descubre cómo redimir tu voucher y conoce los términos y condiciones haciendo clic aquí. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 451,
      "end": 565,
      "text": "Recuerda que para hacerlo válido en tu nueva reservación el nombre debe coincidir exactamente con el del voucher. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 565,
      "end": 655,
      "text": "#InterjetContigoSiempre Contáctanos aquí Copyright © 2025 | Interjet | Todos los derechos\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 655,
      "end": 668,
      "text": " reservados. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 668,
      "end": 723,
      "text": "Este mensaje fue enviado desde una dirección de correo\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 723,
      "end": 791,
      "text": " electrónico exclusivamente de notificación que no admite mensajes. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 791,
      "end": 852,
      "text": "Si tienes alguna pregunta, comunícate a Servicio a clientes. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 852,
      "end": 911,
      "text": "Interjet | Blvd Puerto Aereo S/N | Ciudad de Mexico | 15620"
    }
  ],
  "passA": {
    "requestSha256": "4050a17f9c70e72abcf6659e389bf97b82d8b6985f2f7038e1e5e424dcd9befd",
    "capturedAt": "2026-09-20T23:45:27.114Z",
    "elapsedMs": 142.35920800000895,
    "successfulAttemptElapsedMs": 140.96395800000755,
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
          "noul": 0.11
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.29
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.06
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.09
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.89
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.21
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.25
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
            "active_request": 0.95,
            "informational": 0.05,
            "mixed_or_unclear": 0
          },
          "confidence": 0.94
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.54,
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "sender_supplied": 0.45
          },
          "confidence": 0.38
        }
      },
      "usage": {
        "input_tokens": 3682,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "065ce1e878201928b894e1e193c4e7c58451b5b7ad012f4b4dd9d7c83d70fe2c",
    "capturedAt": "2026-09-20T23:45:27.274Z",
    "elapsedMs": 158.745333999992,
    "successfulAttemptElapsedMs": 156.5202500000014,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "subject:0": 0.01,
            "body:1": 0.02,
            "body:4": 0,
            "body:6": 0,
            "body:3": 0.06,
            "body:2": 0.52,
            "body:8": 0,
            "body:5": 0,
            "body:7": 0,
            "NONE": 0.39,
            "body:9": 0,
            "body:0": 0
          },
          "confidence": 0.47
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:8",
          "probabilities": {
            "subject:0": 0.01,
            "body:1": 0.02,
            "body:4": 0.27,
            "body:6": 0.01,
            "body:8": 0.39,
            "body:2": 0.02,
            "body:5": 0,
            "body:3": 0.01,
            "body:0": 0.07,
            "NONE": 0.05,
            "body:9": 0.13,
            "body:7": 0.02
          },
          "confidence": 0.33
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0,
            "body:6": 0.01,
            "body:4": 0,
            "body:5": 0,
            "body:2": 0.06,
            "body:3": 0,
            "body:8": 0.01,
            "body:0": 0,
            "NONE": 0.77,
            "body:9": 0,
            "body:7": 0.15000000000000002
          },
          "confidence": 0.74
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:8",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0,
            "body:6": 0,
            "body:4": 0.08,
            "body:5": 0,
            "body:2": 0.04,
            "body:8": 0.5,
            "body:3": 0,
            "body:0": 0,
            "NONE": 0.36,
            "body:9": 0.01,
            "body:7": 0.01
          },
          "confidence": 0.45
        }
      },
      "usage": {
        "input_tokens": 3123,
        "output_tokens": 516
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 303.4048749999929,
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
        "status": "none_selected",
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
        "status": "low_confidence",
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
    "seq": 1390,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-284",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:26.972Z",
    "offsetMs": 0.9294169999920996
  },
  {
    "seq": 1391,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-284",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:27.113Z",
    "offsetMs": 142.3597080000036,
    "elapsedMs": 140.96395800000755,
    "outcome": "success"
  },
  {
    "seq": 1392,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-284",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:27.117Z",
    "offsetMs": 145.74979200000234
  },
  {
    "seq": 1393,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-284",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:27.274Z",
    "offsetMs": 303.062957999995,
    "elapsedMs": 156.5202500000014,
    "outcome": "success"
  },
  {
    "seq": 1394,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-284",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:27.274Z",
    "offsetMs": 303.4654579999915,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "3068281f3899035be8a9d43a204370857fc45ab8f1527df511b4fb17114b5bad";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1391},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1393},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1394}} as const;
export const projectionSha256 = "c8b960bc9c35b4a5c72131e9b05b7010dcbcfb7b0b3f08fd82f542f9d93f2793";
