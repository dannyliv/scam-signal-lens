import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-129",
  "inputSha256": "2a70e3862482ea56c7446e6d329e3a154ff87b1beabe572af3787376a65e01cc",
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
      "end": 8,
      "text": "La Dra. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 8,
      "end": 131,
      "text": "Zurisaday Hernandez Martinez de Zurisaday Hernandez Martinez te ha mandado una receta médica con fecha: 21/03/2023 21:08:24"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 20,
      "text": "Folio Rx: RX-774920\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 20,
      "end": 21,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 21,
      "end": 53,
      "text": "¡Ordena tus medicamentos ahora!\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 53,
      "end": 85,
      "text": "Enlace ==> /patients/location/?\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 85,
      "end": 86,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 86,
      "end": 91,
      "text": "Dra. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 91,
      "end": 115,
      "text": "Marcela Quiñones Rivera\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 115,
      "end": 138,
      "text": "Nefrologías pediatrica\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 138,
      "end": 169,
      "text": "Cédula Profesional: CP-4598721\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 169,
      "end": 170,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 170,
      "end": 217,
      "text": "Número de registro de especialidad: ES-9923145\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 217,
      "end": 218,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 218,
      "end": 229,
      "text": "21/03/2023\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 229,
      "end": 259,
      "text": "Paciente: Diego Ramírez Luján\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 259,
      "end": 260,
      "text": "\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 260,
      "end": 414,
      "text": "1.- Solucion de citratos (citrato de sodio 98g+citrato de potasio 108g+acido citrico 70g, agregar 200ml de jarabe y aforar a 1000ml con agua bidestilada)\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 414,
      "end": 446,
      "text": "Dar 37ml en 24hrs sin suspender\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 446,
      "end": 447,
      "text": "\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 447,
      "end": 471,
      "text": "Marcela Quiñones Rivera\n"
    },
    {
      "id": "body:19",
      "source": "body",
      "start": 471,
      "end": 495,
      "text": "Marcela Quiñones Rivera\n"
    },
    {
      "id": "body:20",
      "source": "body",
      "start": 495,
      "end": 535,
      "text": "Clínica Horizonte Vital Consultorio 214\n"
    },
    {
      "id": "body:21",
      "source": "body",
      "start": 535,
      "end": 546,
      "text": "7713948206\n"
    },
    {
      "id": "body:22",
      "source": "body",
      "start": 546,
      "end": 547,
      "text": "\n"
    },
    {
      "id": "body:23",
      "source": "body",
      "start": 547,
      "end": 563,
      "text": "Atte: Prescrypto"
    }
  ],
  "passA": {
    "requestSha256": "5c6080ef32f1884ec81413b273458a45b4808da601a0be9703ba73bc0f4142af",
    "capturedAt": "2026-09-22T03:50:48.516Z",
    "elapsedMs": 1866.8705060000066,
    "successfulAttemptElapsedMs": 1865.8864920000196,
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
          "noul": 0.07
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.48
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.23
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.93
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.12
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
          "noul": 0.09
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.96,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0.04
          },
          "confidence": 0.94
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.43,
            "independently_established": 0,
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.5599999999999999
          },
          "confidence": 0.42
        }
      },
      "usage": {
        "input_tokens": 5148,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "2b034e8259e288f7c986c5f8d90f02fc391e1918b40390e0dd4137fb19dcf0d5",
    "capturedAt": "2026-09-22T03:50:49.067Z",
    "elapsedMs": 549.5940490000066,
    "successfulAttemptElapsedMs": 548.774201000022,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:18": 0,
            "body:10": 0,
            "NONE": 0.26,
            "body:4": 0,
            "body:20": 0,
            "body:19": 0,
            "body:1": 0,
            "body:21": 0,
            "body:2": 0.72,
            "body:0": 0,
            "body:7": 0,
            "body:8": 0,
            "body:14": 0,
            "subject:0": 0,
            "subject:1": 0,
            "body:23": 0,
            "body:11": 0,
            "body:13": 0,
            "body:5": 0,
            "body:3": 0.02,
            "body:6": 0,
            "body:17": 0,
            "body:9": 0,
            "body:22": 0,
            "body:16": 0,
            "body:15": 0,
            "body:12": 0
          },
          "confidence": 0.69
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:18": 0,
            "body:10": 0,
            "NONE": 0.12,
            "body:4": 0,
            "body:20": 0,
            "body:1": 0,
            "body:19": 0,
            "body:21": 0,
            "body:2": 0.84,
            "body:0": 0,
            "body:7": 0,
            "body:8": 0,
            "body:14": 0,
            "subject:0": 0,
            "subject:1": 0,
            "body:23": 0,
            "body:11": 0,
            "body:22": 0,
            "body:5": 0,
            "body:16": 0.04,
            "body:12": 0,
            "body:17": 0,
            "body:9": 0,
            "body:3": 0,
            "body:13": 0,
            "body:15": 0,
            "body:6": 0
          },
          "confidence": 0.82
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "body:18": 0,
            "body:10": 0.01,
            "NONE": 0.02,
            "body:4": 0,
            "body:20": 0.08,
            "body:19": 0,
            "body:1": 0.01,
            "body:0": 0,
            "body:2": 0.06,
            "body:21": 0,
            "body:7": 0.23,
            "body:8": 0.07,
            "body:14": 0,
            "subject:0": 0.2,
            "subject:1": 0.03,
            "body:23": 0,
            "body:11": 0,
            "body:5": 0.18000000000000002,
            "body:13": 0,
            "body:16": 0.01,
            "body:12": 0,
            "body:17": 0,
            "body:9": 0,
            "body:3": 0.01,
            "body:6": 0.08,
            "body:15": 0,
            "body:22": 0
          },
          "confidence": 0.19
        }
      },
      "usage": {
        "input_tokens": 3478,
        "output_tokens": 832
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 2418.466324000008,
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
        "status": "selected",
        "segmentId": "body:2"
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:2"
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
    "seq": 626,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-129",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:46.649Z",
    "offsetMs": 0.6659349999972619
  },
  {
    "seq": 627,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-129",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:48.515Z",
    "offsetMs": 1866.870556000009,
    "elapsedMs": 1865.8864920000196,
    "outcome": "success"
  },
  {
    "seq": 628,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-129",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:48.518Z",
    "offsetMs": 1869.047939000011
  },
  {
    "seq": 629,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-129",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:49.067Z",
    "offsetMs": 2418.1497550000204,
    "elapsedMs": 548.774201000022,
    "outcome": "success"
  },
  {
    "seq": 630,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-129",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:49.067Z",
    "offsetMs": 2418.5133239999996,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "499407ee1c6568c70960e5c0af41cd0907d3ef9b13a23e025dbe35835765670f";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":627},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":629},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":630}} as const;
export const projectionSha256 = "c63e14c328449a94a2a1eb74cbfb7782e75dcad345d1d2098aea9aecea32d0a8";
