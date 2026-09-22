import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-272",
  "inputSha256": "f3cbbe0081b9045cc0c952d151fd5c654016d44ddc3f5a350856d0a4e3cfe525",
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
      "text": "Fecha de envio : 05-26-2024\n"
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
      "text": "Dado: 05-26-2024\n"
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
    "requestSha256": "b5c919242270e510c26cb1af12d13ae78ae88c600c86603c5b705604375cf1e2",
    "capturedAt": "2026-09-22T03:53:37.114Z",
    "elapsedMs": 651.9229410000262,
    "successfulAttemptElapsedMs": 650.733750000014,
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
          "noul": 0.11
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
          "noul": 0.28
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
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 1,
            "mixed_or_unclear": 0,
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
          "confidence": 0.45
        }
      },
      "usage": {
        "input_tokens": 5058,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "3e44a0ad9f2f61f8c969222062970cc75cadbc5dff7e0731031f4e9f46645c6d",
    "capturedAt": "2026-09-22T03:53:37.663Z",
    "elapsedMs": 547.6942449999624,
    "successfulAttemptElapsedMs": 546.3614729999681,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:6": 0,
            "body:15": 0,
            "body:7": 0,
            "subject:2": 0,
            "body:1": 0,
            "body:9": 0,
            "body:8": 0,
            "body:19": 0,
            "body:11": 0,
            "body:14": 0.01,
            "body:2": 0.06,
            "body:5": 0.01,
            "body:17": 0,
            "body:20": 0,
            "body:3": 0.55,
            "body:0": 0,
            "body:13": 0,
            "subject:0": 0,
            "body:16": 0,
            "body:4": 0,
            "NONE": 0.3,
            "body:10": 0,
            "body:12": 0,
            "subject:1": 0.01,
            "body:18": 0.06
          },
          "confidence": 0.52
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:6": 0,
            "body:15": 0,
            "body:1": 0,
            "subject:2": 0,
            "body:7": 0,
            "body:9": 0,
            "body:4": 0,
            "body:19": 0,
            "body:11": 0,
            "body:14": 0.01,
            "body:2": 0,
            "subject:0": 0.02,
            "body:0": 0.86,
            "body:16": 0,
            "body:3": 0.01,
            "body:8": 0,
            "body:17": 0,
            "body:13": 0,
            "body:20": 0,
            "body:5": 0.03,
            "body:12": 0,
            "body:10": 0,
            "NONE": 0.060000000000000005,
            "subject:1": 0,
            "body:18": 0.01
          },
          "confidence": 0.85
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0,
            "body:15": 0,
            "body:1": 0,
            "body:7": 0,
            "body:17": 0,
            "body:9": 0,
            "subject:2": 0,
            "body:19": 0,
            "body:11": 0,
            "body:14": 0,
            "body:2": 0,
            "body:5": 0,
            "body:0": 0,
            "body:16": 0,
            "body:3": 0,
            "body:13": 0,
            "subject:0": 0,
            "body:4": 0,
            "body:8": 0,
            "body:20": 0.01,
            "NONE": 0.8,
            "body:10": 0,
            "body:12": 0,
            "subject:1": 0.02,
            "body:18": 0.16
          },
          "confidence": 0.78
        }
      },
      "usage": {
        "input_tokens": 3018,
        "output_tokens": 771
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1201.413108000008,
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
    "seq": 1328,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-272",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:36.463Z",
    "offsetMs": 0.8361329999752343
  },
  {
    "seq": 1329,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-272",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:37.114Z",
    "offsetMs": 651.9233600000152,
    "elapsedMs": 650.733750000014,
    "outcome": "success"
  },
  {
    "seq": 1330,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-272",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:37.116Z",
    "offsetMs": 654.1857239999808
  },
  {
    "seq": 1331,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-272",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:37.663Z",
    "offsetMs": 1201.0595009999815,
    "elapsedMs": 546.3614729999681,
    "outcome": "success"
  },
  {
    "seq": 1332,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-272",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:53:37.663Z",
    "offsetMs": 1201.4753550000023,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "bb98253f86e419265fbfa3c2d284e3e3cabc643dda4b1e99287749082e7d7a3e";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1329},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1331},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1332}} as const;
export const projectionSha256 = "4d3ef1446e27346373199edf4bdf5bc58713041bacb1320b4fd84511f8b1798d";
