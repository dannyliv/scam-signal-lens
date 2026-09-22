import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-284",
  "inputSha256": "b42b0954f2bff1814c558bbc5d2dd75e149a64e2a9b084f8dcc3f43c8acaa244",
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
    "requestSha256": "902381a8c71e0543099afe3c373735c64f07f7556a5de0818dfc39cd2b22f8ea",
    "capturedAt": "2026-09-22T03:53:51.551Z",
    "elapsedMs": 647.3453200000222,
    "successfulAttemptElapsedMs": 645.2631889999611,
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
          "noul": 0.15
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.21
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
          "noul": 0.17
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
          "noul": 0.21
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.93,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0.07
          },
          "confidence": 0.91
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.46,
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.53,
            "independently_established": 0
          },
          "confidence": 0.37
        }
      },
      "usage": {
        "input_tokens": 5132,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "55879f2abc4b23006b6f00075a7b89e56934ee80884f8a7ee57a190c5bfbb0f8",
    "capturedAt": "2026-09-22T03:53:52.112Z",
    "elapsedMs": 559.2635289999889,
    "successfulAttemptElapsedMs": 558.0726540000178,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:9": 0,
            "body:6": 0,
            "body:7": 0,
            "subject:0": 0.01,
            "body:4": 0,
            "body:8": 0,
            "body:0": 0,
            "body:3": 0.07,
            "body:2": 0.46,
            "body:5": 0,
            "body:1": 0.01,
            "NONE": 0.45
          },
          "confidence": 0.4
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:8",
          "probabilities": {
            "body:9": 0.1,
            "body:6": 0.01,
            "body:7": 0.01,
            "subject:0": 0.02,
            "body:4": 0.17,
            "body:8": 0.47,
            "body:0": 0.06,
            "body:3": 0.01,
            "body:1": 0.01,
            "body:5": 0,
            "body:2": 0.04,
            "NONE": 0.1
          },
          "confidence": 0.42
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:9": 0,
            "body:6": 0,
            "body:7": 0.01,
            "subject:0": 0,
            "body:4": 0.08,
            "body:8": 0.38,
            "body:0": 0,
            "body:3": 0,
            "body:1": 0,
            "body:5": 0,
            "body:2": 0.11,
            "NONE": 0.42
          },
          "confidence": 0.35
        }
      },
      "usage": {
        "input_tokens": 2792,
        "output_tokens": 386
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1208.5244370000437,
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
    "seq": 1386,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-284",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:50.905Z",
    "offsetMs": 1.4843560000299476
  },
  {
    "seq": 1387,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-284",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:51.551Z",
    "offsetMs": 647.343618999992,
    "elapsedMs": 645.2631889999611,
    "outcome": "success"
  },
  {
    "seq": 1388,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-284",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:51.553Z",
    "offsetMs": 649.7451000000001
  },
  {
    "seq": 1389,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-284",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:52.112Z",
    "offsetMs": 1208.2606340000057,
    "elapsedMs": 558.0726540000178,
    "outcome": "success"
  },
  {
    "seq": 1390,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-284",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:53:52.112Z",
    "offsetMs": 1208.5738000000129,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "b89f2ecfe7f3ebfa75ec4e2891ff17ba213a5df5f1a81ff1941e175f1b9e68b1";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1387},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1389},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1390}} as const;
export const projectionSha256 = "0b979ebd136fab5433ff125a2f078a5b145b8560ea6ed4d97d1caf3145c860f7";
