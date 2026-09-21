import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-024",
  "inputSha256": "480b369451dca99f8454848ce20d7e330d7cbe801b9a1d5e9c17934a29bb1aa0",
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
    "requestSha256": "23727a4a54143c04abd927086a6a208bc57fe241796b537dad406e2857dd4f54",
    "capturedAt": "2026-09-20T23:43:58.806Z",
    "elapsedMs": 171.4707500000004,
    "successfulAttemptElapsedMs": 170.00174999999945,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.16
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
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.27
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.89
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.23
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
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.08
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
            "educational_or_quoted": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.25,
            "independently_established": 0,
            "no_sensitive_action": 0.74
          },
          "confidence": 0.65
        }
      },
      "usage": {
        "input_tokens": 3607,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "6dd8ece610d593aa67c08eceb8da045f5abd9c92413822d38ac77dcfafe9b3c8",
    "capturedAt": "2026-09-21T00:57:15.116Z",
    "elapsedMs": 124.47079099999996,
    "successfulAttemptElapsedMs": 122.73745800000006,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:12": 0,
            "body:8": 0,
            "body:17": 0,
            "body:6": 0,
            "body:20": 0.01,
            "body:0": 0,
            "body:7": 0,
            "body:1": 0,
            "NONE": 0.43,
            "subject:1": 0.03,
            "body:14": 0,
            "body:9": 0,
            "body:10": 0.01,
            "body:4": 0,
            "body:11": 0,
            "body:13": 0,
            "body:5": 0.01,
            "body:16": 0,
            "body:15": 0,
            "body:2": 0.02,
            "body:3": 0.29000000000000004,
            "subject:0": 0.02,
            "body:19": 0,
            "body:18": 0.18000000000000002
          },
          "confidence": 0.4
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:12": 0,
            "body:8": 0,
            "body:17": 0,
            "body:6": 0.01,
            "body:13": 0,
            "body:0": 0.81,
            "body:7": 0,
            "body:1": 0,
            "NONE": 0.06,
            "subject:1": 0,
            "body:14": 0.01,
            "body:9": 0,
            "body:10": 0,
            "body:4": 0,
            "body:11": 0.01,
            "body:20": 0,
            "body:5": 0.01,
            "body:16": 0,
            "body:15": 0.01,
            "body:2": 0.02,
            "subject:0": 0.01,
            "body:3": 0,
            "body:19": 0,
            "body:18": 0.04
          },
          "confidence": 0.8
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:12": 0,
            "body:8": 0,
            "body:17": 0,
            "body:6": 0,
            "body:20": 0,
            "body:0": 0,
            "body:7": 0,
            "body:1": 0,
            "NONE": 0.9,
            "subject:1": 0.060000000000000005,
            "body:14": 0,
            "body:9": 0,
            "body:10": 0,
            "body:4": 0,
            "body:11": 0,
            "body:13": 0,
            "body:5": 0,
            "body:16": 0,
            "body:2": 0,
            "body:15": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:19": 0,
            "body:18": 0.04
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 2673,
        "output_tokens": 742
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 490.1028339999996,
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
    "seq": 114,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-024",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:58.635Z",
    "offsetMs": 0.9412080000001879
  },
  {
    "seq": 115,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-024",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:58.806Z",
    "offsetMs": 171.47433300000012,
    "elapsedMs": 170.00174999999945,
    "outcome": "success"
  },
  {
    "seq": 116,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-024",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:58.808Z",
    "offsetMs": 174.10016600000017
  },
  {
    "seq": 117,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-024",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:58.998Z",
    "offsetMs": 363.9013329999998,
    "elapsedMs": 189.28945899999962,
    "outcome": "success"
  },
  {
    "seq": 118,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-024",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:58.998Z",
    "offsetMs": 364.2049159999997,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2474,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-024",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:14.992Z",
    "offsetMs": 2.189000000000078
  },
  {
    "seq": 2475,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-024",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:15.116Z",
    "offsetMs": 125.3749170000001,
    "elapsedMs": 122.73745800000006,
    "outcome": "success"
  },
  {
    "seq": 2476,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-024",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:15.116Z",
    "offsetMs": 125.73937500000011,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d9167a43a17814a7016f2437dc60e30455ce9734b74b827c51c55ba9f9a0bc41";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":115},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2475},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2476}} as const;
export const projectionSha256 = "76734d0508041b8f87a260e321d1c245682bff19acab4ed54786587a811f07f9";
