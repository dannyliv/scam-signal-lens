import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-129",
  "inputSha256": "2a70e3862482ea56c7446e6d329e3a154ff87b1beabe572af3787376a65e01cc",
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
    "requestSha256": "8c5bf027257f302a925ff8f40738cf052d3e2c372e3438e184530b8577fa8bf9",
    "capturedAt": "2026-09-20T23:44:32.338Z",
    "elapsedMs": 131.55916699999943,
    "successfulAttemptElapsedMs": 129.89016699999775,
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
          "noul": 0.06
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.41
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.21
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.89
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.13
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
          "noul": 0.01
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
            "active_request": 0.97,
            "informational": 0.03,
            "educational_or_quoted": 0
          },
          "confidence": 0.95
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "no_sensitive_action": 0.42,
            "sender_supplied": 0.57
          },
          "confidence": 0.43
        }
      },
      "usage": {
        "input_tokens": 3698,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "7fcc6cf4df1ee014e73b614a20f5cdbd58ec4a20dc5d2c12841f7da3b5bbbbbd",
    "capturedAt": "2026-09-20T23:44:32.588Z",
    "elapsedMs": 248.4076669999995,
    "successfulAttemptElapsedMs": 247.25424999999814,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:21": 0,
            "subject:1": 0,
            "body:20": 0,
            "body:0": 0,
            "body:14": 0,
            "body:11": 0,
            "body:7": 0,
            "body:8": 0,
            "body:15": 0,
            "body:23": 0,
            "NONE": 0.28,
            "body:19": 0,
            "body:2": 0.7,
            "body:16": 0,
            "body:9": 0,
            "body:17": 0,
            "body:5": 0,
            "body:12": 0,
            "body:18": 0,
            "body:10": 0,
            "subject:0": 0,
            "body:4": 0,
            "body:6": 0,
            "body:22": 0,
            "body:3": 0.02,
            "body:1": 0,
            "body:13": 0
          },
          "confidence": 0.67
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:21": 0,
            "subject:1": 0,
            "body:20": 0,
            "body:0": 0,
            "body:14": 0,
            "body:11": 0,
            "body:7": 0,
            "body:4": 0,
            "body:3": 0,
            "body:23": 0,
            "body:15": 0,
            "body:19": 0,
            "body:10": 0,
            "body:6": 0,
            "body:9": 0,
            "body:12": 0,
            "body:5": 0,
            "body:16": 0.05,
            "body:18": 0,
            "body:17": 0,
            "subject:0": 0,
            "body:2": 0.88,
            "body:8": 0,
            "body:22": 0,
            "NONE": 0.07,
            "body:1": 0,
            "body:13": 0
          },
          "confidence": 0.86
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:21": 0,
            "subject:1": 0.06,
            "body:20": 0.16,
            "body:0": 0,
            "body:4": 0,
            "NONE": 0.02,
            "body:7": 0.13,
            "body:14": 0,
            "body:3": 0,
            "body:23": 0,
            "body:11": 0,
            "body:19": 0,
            "body:2": 0.02,
            "body:6": 0.04,
            "body:9": 0,
            "body:12": 0,
            "body:5": 0.1,
            "body:10": 0.01,
            "body:18": 0,
            "body:16": 0.01,
            "subject:0": 0.36,
            "body:17": 0,
            "body:8": 0.08,
            "body:22": 0,
            "body:15": 0,
            "body:13": 0,
            "body:1": 0.01
          },
          "confidence": 0.32
        }
      },
      "usage": {
        "input_tokens": 3168,
        "output_tokens": 832
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 382.0461670000004,
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
    "seq": 632,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-129",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:32.207Z",
    "offsetMs": 1.0400829999998678
  },
  {
    "seq": 633,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-129",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:32.338Z",
    "offsetMs": 131.56158300000243,
    "elapsedMs": 129.89016699999775,
    "outcome": "success"
  },
  {
    "seq": 634,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-129",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:32.340Z",
    "offsetMs": 133.62895800000115
  },
  {
    "seq": 635,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-129",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:32.587Z",
    "offsetMs": 381.38604199999827,
    "elapsedMs": 247.25424999999814,
    "outcome": "success"
  },
  {
    "seq": 636,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-129",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:32.588Z",
    "offsetMs": 382.14879199999996,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d61e888538187169a77f99676f7ce790cdb3aff8b2e0ad4541bb166b3797fbec";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":633},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":635},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":636}} as const;
export const projectionSha256 = "d5a51d7c8773d1fdd67a1e210407fe739a9912118330a72c4dc90fb3b6cb8c64";
