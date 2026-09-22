import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-028",
  "inputSha256": "9876d804ea401b24f9d41f09f2cb9b5864733d2df9fe5382b16c62d63c512d08",
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
      "end": 41,
      "text": "Pablito - Tiene (1) mensaje de nosotros. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 41,
      "end": 71,
      "text": "Haga clic abajo para abrirlo. "
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 71,
      "end": 73,
      "text": "📦"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 10,
      "text": "FedEx ® ☰\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 10,
      "end": 38,
      "text": "Fecha de envio : 05-04-2024\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 38,
      "end": 70,
      "text": "Falta de entrega a Marcos Díaz!\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 70,
      "end": 100,
      "text": "entrega de paquete suspendida\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 100,
      "end": 101,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 101,
      "end": 139,
      "text": "¿Cómo le gustaría recibir su paquete?\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 139,
      "end": 167,
      "text": "Quiero que me lo entreguen.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 167,
      "end": 187,
      "text": "Lo tomaré yo mismo.\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 187,
      "end": 188,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 188,
      "end": 230,
      "text": "¿Dónde desea que le entreguen el paquete?\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 230,
      "end": 238,
      "text": "En casa\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 238,
      "end": 247,
      "text": "Trabajar\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 247,
      "end": 248,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 248,
      "end": 273,
      "text": "Información del paquete:\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 273,
      "end": 321,
      "text": "Situación Detenido en el centro de distribución\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 321,
      "end": 385,
      "text": "Enviar a través de Seguimiento de correspondencia internacional\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 385,
      "end": 402,
      "text": "Dado: 05-04-2024\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 402,
      "end": 403,
      "text": "\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 403,
      "end": 417,
      "text": "CONSULTA AQUÍ\n"
    },
    {
      "id": "body:19",
      "source": "body",
      "start": 417,
      "end": 418,
      "text": "\n"
    },
    {
      "id": "body:20",
      "source": "body",
      "start": 418,
      "end": 521,
      "text": "Si ya no desea recibir estos correos electrónicos, puede darse de baja click en el enlace darse de baja"
    }
  ],
  "passA": {
    "requestSha256": "f8518ca3eb2795f8ee6697fcd2128bf3385a0ca04b2f7c143cc152c5884a9faa",
    "capturedAt": "2026-09-22T03:48:44.777Z",
    "elapsedMs": 756.6370349999997,
    "successfulAttemptElapsedMs": 755.6837149999992,
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
          "noul": 0.1
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
          "noul": 0.34
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.3
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
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
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
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.42,
            "no_sensitive_action": 0.5700000000000001
          },
          "confidence": 0.42
        }
      },
      "usage": {
        "input_tokens": 5058,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "17db6896337101ddb421952772d8176b104035e50da03e23b84ec5137faecf54",
    "capturedAt": "2026-09-22T03:48:45.334Z",
    "elapsedMs": 555.0000319999963,
    "successfulAttemptElapsedMs": 554.1459400000022,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:2": 0.06,
            "body:10": 0,
            "subject:2": 0,
            "body:1": 0,
            "body:9": 0,
            "body:15": 0,
            "body:20": 0,
            "body:8": 0,
            "subject:1": 0.01,
            "NONE": 0.31,
            "body:4": 0,
            "body:5": 0.01,
            "body:13": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:7": 0,
            "body:11": 0,
            "body:12": 0,
            "body:14": 0.01,
            "body:16": 0,
            "body:18": 0.08,
            "body:19": 0,
            "body:3": 0.52,
            "body:17": 0,
            "body:6": 0
          },
          "confidence": 0.49
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0.01,
            "body:10": 0,
            "body:20": 0,
            "body:1": 0,
            "body:15": 0,
            "body:9": 0,
            "subject:2": 0,
            "body:8": 0,
            "body:4": 0,
            "NONE": 0.08,
            "subject:1": 0,
            "body:5": 0.03,
            "body:13": 0,
            "subject:0": 0.01,
            "body:0": 0.8200000000000001,
            "body:7": 0,
            "body:18": 0.02,
            "body:12": 0,
            "body:14": 0.01,
            "body:16": 0,
            "body:19": 0,
            "body:11": 0,
            "body:3": 0.01,
            "body:17": 0,
            "body:6": 0
          },
          "confidence": 0.8
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "body:6": 0,
            "body:20": 0.01,
            "body:1": 0,
            "body:15": 0.01,
            "body:9": 0,
            "subject:2": 0,
            "body:8": 0,
            "body:4": 0,
            "NONE": 0.74,
            "subject:1": 0.04,
            "body:5": 0,
            "body:13": 0,
            "subject:0": 0,
            "body:7": 0,
            "body:0": 0,
            "body:16": 0,
            "body:12": 0,
            "body:14": 0,
            "body:18": 0.2,
            "body:19": 0,
            "body:11": 0,
            "body:3": 0,
            "body:17": 0,
            "body:10": 0
          },
          "confidence": 0.72
        }
      },
      "usage": {
        "input_tokens": 3018,
        "output_tokens": 771
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1313.969097000001,
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
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 134,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-028",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:44.021Z",
    "offsetMs": 0.6053480000045965
  },
  {
    "seq": 135,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-028",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:44.777Z",
    "offsetMs": 756.6377439999997,
    "elapsedMs": 755.6837149999992,
    "outcome": "success"
  },
  {
    "seq": 136,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-028",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:44.779Z",
    "offsetMs": 759.0967610000007
  },
  {
    "seq": 137,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-028",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:45.334Z",
    "offsetMs": 1313.6250240000008,
    "elapsedMs": 554.1459400000022,
    "outcome": "success"
  },
  {
    "seq": 138,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-028",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:48:45.334Z",
    "offsetMs": 1314.0200190000032,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7edb868640dcb2be733755f227aa6351e5fbf607feecc7c97ba282d1bfb7bbe6";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":135},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":137},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":138}} as const;
export const projectionSha256 = "149c77a23ee8c6a692767996b5f69e010f7da70fdf159e122d7a7c227ee489ae";
