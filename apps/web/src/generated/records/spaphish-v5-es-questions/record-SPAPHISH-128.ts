import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-128",
  "inputSha256": "d92f721250c042b819877e3508150cb5bcd0ba418c79c4dfa82f253d62d60401",
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
      "end": 24,
      "text": "Notificación de Envío  !"
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 24,
      "end": 31,
      "text": "#OW99Tm"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 18,
      "text": "Correos de México\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 18,
      "end": 44,
      "text": "Seguimiento de su paquete\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 44,
      "end": 45,
      "text": "\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 45,
      "end": 51,
      "text": "Hola,\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 51,
      "end": 52,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 52,
      "end": 129,
      "text": "Su paquete ha sido retenido temporalmente debido a una verificación aduanal.\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 129,
      "end": 130,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 130,
      "end": 221,
      "text": "Para continuar con el proceso de entrega, debe completar un pequeño ajuste de importación.\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 221,
      "end": 222,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 222,
      "end": 233,
      "text": "$40.89 MXN\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 233,
      "end": 234,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 234,
      "end": 303,
      "text": "Haga clic en el siguiente botón para confirmar y liberar su paquete:\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 303,
      "end": 304,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 304,
      "end": 320,
      "text": "Confirmar envío\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 320,
      "end": 321,
      "text": "\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 321,
      "end": 377,
      "text": "Una vez confirmado, su envío se procesará de inmediato.\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 377,
      "end": 378,
      "text": "\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 378,
      "end": 406,
      "text": "Gracias por su preferencia.\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 406,
      "end": 407,
      "text": "\n"
    },
    {
      "id": "body:19",
      "source": "body",
      "start": 407,
      "end": 420,
      "text": "Atentamente,\n"
    },
    {
      "id": "body:20",
      "source": "body",
      "start": 420,
      "end": 438,
      "text": "Correos de México\n"
    },
    {
      "id": "body:21",
      "source": "body",
      "start": 438,
      "end": 439,
      "text": "\n"
    },
    {
      "id": "body:22",
      "source": "body",
      "start": 439,
      "end": 465,
      "text": "© 2025 Correos de México. "
    },
    {
      "id": "body:23",
      "source": "body",
      "start": 465,
      "end": 496,
      "text": "Todos los derechos reservados.\n"
    },
    {
      "id": "body:24",
      "source": "body",
      "start": 496,
      "end": 539,
      "text": "Este mensaje fue generado automáticamente. "
    },
    {
      "id": "body:25",
      "source": "body",
      "start": 539,
      "end": 565,
      "text": "Por favor, no lo responda."
    }
  ],
  "passA": {
    "requestSha256": "d129016085ea3acedc0d9612ad05efa91ac9ae3d686662041939a9cdf473d720",
    "capturedAt": "2026-09-22T03:50:46.010Z",
    "elapsedMs": 661.0570630000148,
    "successfulAttemptElapsedMs": 660.3323430000164,
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
          "noul": 0.58
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.95
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.65
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.96
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.45
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.6
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
            "mixed_or_unclear": 0,
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "sender_supplied": 0.98,
            "no_sensitive_action": 0.02
          },
          "confidence": 0.97
        }
      },
      "usage": {
        "input_tokens": 5044,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "9d37fd30002e3d2572278907f6cd1cf3b38f058e45298a2c1b8495ab5f5cabcc",
    "capturedAt": "2026-09-22T03:50:46.647Z",
    "elapsedMs": 631.9098579999991,
    "successfulAttemptElapsedMs": 630.7512550000101,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:24": 0,
            "subject:0": 0,
            "body:13": 0.32,
            "body:8": 0,
            "body:1": 0,
            "body:22": 0,
            "body:12": 0,
            "body:25": 0,
            "body:15": 0.01,
            "body:3": 0,
            "body:16": 0,
            "body:0": 0,
            "body:18": 0,
            "body:19": 0,
            "body:6": 0,
            "NONE": 0.36,
            "body:21": 0,
            "body:5": 0,
            "body:9": 0.03,
            "body:23": 0,
            "body:2": 0,
            "subject:1": 0,
            "body:14": 0,
            "body:17": 0,
            "body:11": 0.09,
            "body:10": 0,
            "body:4": 0,
            "body:7": 0.19,
            "body:20": 0
          },
          "confidence": 0.33
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "body:24": 0,
            "subject:0": 0,
            "body:13": 0.03,
            "body:8": 0,
            "body:1": 0,
            "body:22": 0,
            "body:12": 0,
            "body:25": 0,
            "body:15": 0,
            "body:3": 0,
            "body:16": 0,
            "body:0": 0,
            "body:18": 0,
            "body:19": 0,
            "body:6": 0,
            "NONE": 0,
            "body:21": 0,
            "body:5": 0,
            "body:9": 0.25,
            "body:23": 0,
            "body:2": 0,
            "subject:1": 0,
            "body:14": 0,
            "body:17": 0,
            "body:11": 0.02,
            "body:10": 0,
            "body:4": 0,
            "body:7": 0.6900000000000001,
            "body:20": 0
          },
          "confidence": 0.67
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:24": 0,
            "subject:0": 0,
            "body:13": 0.02,
            "body:8": 0,
            "body:1": 0,
            "body:22": 0,
            "body:12": 0,
            "body:25": 0,
            "body:15": 0.2,
            "body:3": 0,
            "body:16": 0,
            "body:0": 0,
            "body:18": 0,
            "body:9": 0,
            "body:6": 0,
            "NONE": 0.06,
            "body:21": 0,
            "body:5": 0.29000000000000004,
            "body:19": 0,
            "body:23": 0,
            "body:2": 0,
            "subject:1": 0,
            "body:14": 0,
            "body:17": 0,
            "body:11": 0.16,
            "body:10": 0,
            "body:4": 0,
            "body:7": 0.26,
            "body:20": 0
          },
          "confidence": 0.25
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:24": 0,
            "subject:0": 0,
            "body:13": 0.01,
            "body:8": 0,
            "body:1": 0.01,
            "body:22": 0.02,
            "body:12": 0,
            "body:25": 0,
            "body:15": 0,
            "body:3": 0,
            "body:16": 0,
            "body:0": 0.47000000000000003,
            "body:18": 0,
            "body:19": 0.01,
            "body:6": 0,
            "NONE": 0.02,
            "body:21": 0,
            "body:5": 0.14,
            "body:9": 0,
            "body:23": 0,
            "body:2": 0.01,
            "subject:1": 0,
            "body:14": 0,
            "body:17": 0,
            "body:11": 0.02,
            "body:10": 0,
            "body:4": 0,
            "body:7": 0.07,
            "body:20": 0.22
          },
          "confidence": 0.44
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:24": 0.02,
            "subject:0": 0,
            "body:13": 0.01,
            "body:8": 0,
            "body:1": 0,
            "body:22": 0,
            "body:12": 0,
            "body:25": 0.4,
            "body:15": 0.01,
            "body:3": 0,
            "body:16": 0,
            "body:0": 0,
            "body:18": 0,
            "body:9": 0,
            "body:6": 0,
            "NONE": 0.48,
            "body:21": 0,
            "body:5": 0,
            "body:19": 0,
            "body:23": 0,
            "body:2": 0,
            "subject:1": 0,
            "body:14": 0,
            "body:17": 0,
            "body:10": 0,
            "body:11": 0.05,
            "body:4": 0,
            "body:7": 0.03,
            "body:20": 0
          },
          "confidence": 0.45
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "body:24": 0,
            "subject:0": 0,
            "body:13": 0.01,
            "body:8": 0,
            "body:1": 0,
            "body:22": 0,
            "body:12": 0,
            "body:25": 0,
            "body:15": 0,
            "body:3": 0,
            "body:16": 0,
            "body:0": 0,
            "body:18": 0,
            "body:19": 0,
            "body:6": 0,
            "NONE": 0.18000000000000002,
            "body:21": 0,
            "body:5": 0,
            "body:9": 0.23,
            "body:23": 0,
            "body:2": 0,
            "subject:1": 0,
            "body:14": 0,
            "body:17": 0,
            "body:11": 0,
            "body:10": 0,
            "body:4": 0,
            "body:7": 0.5700000000000001,
            "body:20": 0
          },
          "confidence": 0.55
        }
      },
      "usage": {
        "input_tokens": 5859,
        "output_tokens": 1784
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1298.3277290000115,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "low_confidence",
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
        "status": "low_confidence",
        "segmentId": null
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
    "seq": 621,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-128",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:45.349Z",
    "offsetMs": 0.5365380000148434
  },
  {
    "seq": 622,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-128",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:46.010Z",
    "offsetMs": 661.0561410000082,
    "elapsedMs": 660.3323430000164,
    "outcome": "success"
  },
  {
    "seq": 623,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-128",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:46.016Z",
    "offsetMs": 666.7951309999917
  },
  {
    "seq": 624,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-128",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:46.647Z",
    "offsetMs": 1297.9033909999998,
    "elapsedMs": 630.7512550000101,
    "outcome": "success"
  },
  {
    "seq": 625,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-128",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:46.647Z",
    "offsetMs": 1298.3845579999906,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "9d563e1f68f18869e4e323b9b144e385a31418e9f5ecbaf1c3710e8e21f5eb3d";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":622},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":624},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":625}} as const;
export const projectionSha256 = "a79917d84c58892900bebeef98e49fbc35f52d0f31de7871fd899abe186e9c09";
