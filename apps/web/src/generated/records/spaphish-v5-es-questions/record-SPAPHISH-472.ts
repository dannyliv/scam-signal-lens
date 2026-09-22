import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-472",
  "inputSha256": "9ae16ded7ab7bbee22a417dbc1381a36468977ef7f59571665daf631137b17e1",
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
      "text": "Su paquete está esperando su ID de confirmación 120586"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 14,
      "text": "CENTRO DE DHL\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 14,
      "end": 25,
      "text": "10-24-2023\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 25,
      "end": 26,
      "text": "\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 26,
      "end": 57,
      "text": "Estimado María Fernanda López,\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 57,
      "end": 58,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 58,
      "end": 232,
      "text": "Esperamos que este correo electrónico le llegue bien., tenga en cuenta que su envío con seguimiento número a continuación necesitará más información para Despacho de aduana. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 232,
      "end": 288,
      "text": "Consulte el archivo adjunto para obtener más detalles..\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 288,
      "end": 289,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 289,
      "end": 291,
      "text": "! "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 291,
      "end": 320,
      "text": "Planificado en el Centro DHL\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 320,
      "end": 339,
      "text": "➡ Rastrea tu orden\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 339,
      "end": 354,
      "text": "➡ 654882119430\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 354,
      "end": 371,
      "text": "Rastrea tu orden\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 371,
      "end": 372,
      "text": "\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 372,
      "end": 400,
      "text": "Le agradecemos su atención.\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 400,
      "end": 428,
      "text": "Cordial atención al cliente\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 428,
      "end": 442,
      "text": "Empezar ahora\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 442,
      "end": 443,
      "text": "\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 443,
      "end": 461,
      "text": "Unsubscribe here.\n"
    },
    {
      "id": "body:19",
      "source": "body",
      "start": 461,
      "end": 509,
      "text": "4820 Lakeshore Ave, #5124, Clearwater, FL, 33755"
    }
  ],
  "passA": {
    "requestSha256": "994c569df334af56995481a616ee2ed928db0773d73d05601aec736ae1f22c47",
    "capturedAt": "2026-09-22T03:57:34.364Z",
    "elapsedMs": 686.1959659999702,
    "successfulAttemptElapsedMs": 684.6904710000381,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.21
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.68
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.08
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.35
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.22
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.1
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
            "informational": 0.01,
            "active_request": 0.99,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.98
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.03,
            "sender_supplied": 0.6,
            "no_sensitive_action": 0.37,
            "independently_established": 0
          },
          "confidence": 0.46
        }
      },
      "usage": {
        "input_tokens": 5056,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "93d9be7fb1e98fa81c991fdfb2092447865303273938e1585edf0ab8076640f9",
    "capturedAt": "2026-09-22T03:57:34.959Z",
    "elapsedMs": 593.7489160000114,
    "successfulAttemptElapsedMs": 591.5634319999954,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:15": 0,
            "body:9": 0,
            "body:8": 0,
            "body:0": 0,
            "body:13": 0,
            "subject:0": 0.09,
            "body:18": 0,
            "body:6": 0.03,
            "NONE": 0.84,
            "body:1": 0,
            "body:7": 0,
            "body:12": 0,
            "body:4": 0,
            "body:16": 0.02,
            "body:17": 0,
            "body:2": 0,
            "body:3": 0,
            "body:14": 0,
            "body:19": 0,
            "body:10": 0.01,
            "body:11": 0,
            "body:5": 0.01
          },
          "confidence": 0.82
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:15": 0,
            "body:9": 0,
            "body:8": 0,
            "body:0": 0,
            "body:13": 0,
            "subject:0": 0.14,
            "NONE": 0.2,
            "body:6": 0.26,
            "body:18": 0,
            "body:17": 0,
            "body:7": 0,
            "body:12": 0,
            "body:16": 0.02,
            "body:4": 0,
            "body:1": 0,
            "body:2": 0,
            "body:3": 0,
            "body:19": 0,
            "body:14": 0,
            "body:10": 0,
            "body:11": 0,
            "body:5": 0.38
          },
          "confidence": 0.34
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:16",
          "probabilities": {
            "body:15": 0,
            "body:9": 0,
            "body:0": 0,
            "body:8": 0.01,
            "body:13": 0,
            "subject:0": 0.1,
            "NONE": 0.29000000000000004,
            "body:6": 0,
            "body:18": 0,
            "body:4": 0,
            "body:7": 0,
            "body:12": 0,
            "body:1": 0,
            "body:17": 0,
            "body:16": 0.42,
            "body:2": 0,
            "body:3": 0,
            "body:11": 0,
            "body:14": 0,
            "body:10": 0,
            "body:19": 0,
            "body:5": 0.18000000000000002
          },
          "confidence": 0.38
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:15": 0.17,
            "body:9": 0.04,
            "body:8": 0,
            "body:0": 0.53,
            "body:13": 0,
            "subject:0": 0,
            "body:18": 0,
            "body:6": 0.01,
            "NONE": 0.01,
            "body:16": 0.01,
            "body:7": 0,
            "body:12": 0,
            "body:17": 0,
            "body:4": 0,
            "body:1": 0,
            "body:2": 0,
            "body:3": 0,
            "body:11": 0,
            "body:19": 0,
            "body:10": 0,
            "body:14": 0,
            "body:5": 0.23
          },
          "confidence": 0.49
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:15": 0,
            "body:9": 0,
            "body:8": 0,
            "body:0": 0,
            "body:13": 0,
            "subject:0": 0,
            "NONE": 0.92,
            "body:6": 0.04,
            "body:18": 0,
            "body:16": 0.03,
            "body:7": 0,
            "body:12": 0,
            "body:17": 0,
            "body:4": 0,
            "body:1": 0,
            "body:2": 0,
            "body:3": 0,
            "body:14": 0,
            "body:11": 0,
            "body:10": 0.01,
            "body:19": 0,
            "body:5": 0
          },
          "confidence": 0.9
        }
      },
      "usage": {
        "input_tokens": 4569,
        "output_tokens": 1142
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1281.7287409999408,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "request_route_low_confidence"
    ],
    "evidence": {
      "credential_request": {
        "status": "none_selected",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "low_confidence",
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
    "seq": 2317,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-472",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:33.679Z",
    "offsetMs": 1.270005999947898
  },
  {
    "seq": 2318,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-472",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:34.364Z",
    "offsetMs": 686.1972909999313,
    "elapsedMs": 684.6904710000381,
    "outcome": "success"
  },
  {
    "seq": 2319,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-472",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:34.366Z",
    "offsetMs": 689.0714669999434
  },
  {
    "seq": 2320,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-472",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:34.959Z",
    "offsetMs": 1281.2557640000014,
    "elapsedMs": 591.5634319999954,
    "outcome": "success"
  },
  {
    "seq": 2321,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-472",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:34.959Z",
    "offsetMs": 1281.8005330000306,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "61da1d2d03ae9c7459cabad1a2dcff86e340552cf38536a8f07e40d88914137f";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2318},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2320},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2321}} as const;
export const projectionSha256 = "0b2c0a1a05ef02878b2cda37311ea0c7817223a0cd8ba40c2cdc523c8dc66cac";
