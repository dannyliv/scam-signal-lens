import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-024",
  "inputSha256": "480b369451dca99f8454848ce20d7e330d7cbe801b9a1d5e9c17934a29bb1aa0",
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
      "end": 54,
      "text": "Pablito ! - ¡Tienes (1) paquete en espera de entrega! "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 54,
      "end": 104,
      "text": "Usa tu código para rastrearlo y recibirlo, ID#2425"
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
      "end": 37,
      "text": "Fecha de envío: 03-19-2025\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 37,
      "end": 76,
      "text": "¡Fallo en la entrega para Marcos Díaz!\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 76,
      "end": 107,
      "text": "Entrega del paquete suspendida\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 107,
      "end": 108,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 108,
      "end": 140,
      "text": "¿Cómo desea recibir su paquete?\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 140,
      "end": 167,
      "text": "Quiero que me lo entreguen\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 167,
      "end": 188,
      "text": "Lo recogeré yo mismo\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 188,
      "end": 189,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 189,
      "end": 230,
      "text": "¿Dónde desea que se entregue el paquete?\n"
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
      "end": 252,
      "text": "En el trabajo\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 252,
      "end": 253,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 253,
      "end": 278,
      "text": "Información del paquete:\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 278,
      "end": 323,
      "text": "Estado Detenido en el centro de distribución\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 323,
      "end": 378,
      "text": "Envío a través de Correo internacional con seguimiento\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 378,
      "end": 396,
      "text": "Fecha: 03-19-2025\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 396,
      "end": 397,
      "text": "\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 397,
      "end": 431,
      "text": "Ingrese la información de entrega\n"
    },
    {
      "id": "body:19",
      "source": "body",
      "start": 431,
      "end": 432,
      "text": "\n"
    },
    {
      "id": "body:20",
      "source": "body",
      "start": 432,
      "end": 521,
      "text": "Si ya no desea recibir estos correos electrónicos, puede darse de baja haciendo clic aquí"
    }
  ],
  "passA": {
    "requestSha256": "801385ff0ee4c15e157e9d1198867ccc4507a25b156f79959bbb17a7fddb67b1",
    "capturedAt": "2026-09-22T03:48:39.030Z",
    "elapsedMs": 627.8504499999981,
    "successfulAttemptElapsedMs": 626.2244460000002,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.12
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.13
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
          "noul": 0.91
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.19
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
          "noul": 0.07
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
            "educational_or_quoted": 0,
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
            "sender_supplied": 0.25,
            "no_sensitive_action": 0.73,
            "mixed_or_unknown": 0.02
          },
          "confidence": 0.65
        }
      },
      "usage": {
        "input_tokens": 5057,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "5b02c1ee84a82f22bcf1806e451258b5e147ad774ddf5549937ef0a598ffee38",
    "capturedAt": "2026-09-22T03:48:39.636Z",
    "elapsedMs": 604.1271739999975,
    "successfulAttemptElapsedMs": 603.283453,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:16": 0,
            "body:5": 0.02,
            "body:19": 0,
            "subject:1": 0.06999999999999999,
            "NONE": 0.36,
            "body:3": 0.26,
            "body:0": 0,
            "body:8": 0,
            "body:13": 0,
            "subject:0": 0.03,
            "body:11": 0,
            "body:18": 0.2,
            "body:12": 0,
            "body:7": 0,
            "body:15": 0,
            "body:14": 0.01,
            "body:4": 0,
            "body:2": 0.04,
            "body:17": 0,
            "body:6": 0,
            "body:10": 0.01,
            "body:9": 0,
            "body:1": 0,
            "body:20": 0
          },
          "confidence": 0.32
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:5": 0.03,
            "body:16": 0,
            "body:19": 0,
            "subject:1": 0.01,
            "body:3": 0,
            "NONE": 0.08,
            "body:8": 0,
            "body:0": 0.79,
            "body:13": 0,
            "body:11": 0,
            "subject:0": 0,
            "body:18": 0.04,
            "body:14": 0,
            "body:4": 0,
            "body:15": 0.01,
            "body:7": 0,
            "body:12": 0,
            "body:2": 0.02,
            "body:17": 0,
            "body:6": 0.01,
            "body:10": 0,
            "body:9": 0,
            "body:1": 0,
            "body:20": 0
          },
          "confidence": 0.77
        }
      },
      "usage": {
        "input_tokens": 2140,
        "output_tokens": 495
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1234.115563000003,
  "derived": {
    "concern": "few_warning_signs",
    "triggeredRuleIds": [],
    "contextWarnings": [],
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
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 114,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-024",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:38.402Z",
    "offsetMs": 0.7132910000000265
  },
  {
    "seq": 115,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-024",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:39.029Z",
    "offsetMs": 627.851971,
    "elapsedMs": 626.2244460000002,
    "outcome": "success"
  },
  {
    "seq": 116,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-024",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:39.032Z",
    "offsetMs": 630.124108
  },
  {
    "seq": 117,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-024",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:39.635Z",
    "offsetMs": 1233.855198000001,
    "elapsedMs": 603.283453,
    "outcome": "success"
  },
  {
    "seq": 118,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-024",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:48:39.636Z",
    "offsetMs": 1234.166511000003,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "3655f0c0cdf77936c9d18f0d3adeb0af7e5aa0396dd4b76691f5bad0a8bad0d3";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":115},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":117},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":118}} as const;
export const projectionSha256 = "43112d254db67b64307a700e883f72e06c47aab921a63687805b4690a19fd3ae";
