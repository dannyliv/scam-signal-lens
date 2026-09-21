import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-464",
  "inputSha256": "ab223781e9ecc109674e3e2b9444bbe80c9ccd4a7ec5841a9c9713ddd16e058b",
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
      "end": 48,
      "text": "Directores de tesis: Bulmaro Ramírez López, MCTS"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 26,
      "text": "Buen día estimada Carmen,\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 26,
      "end": 27,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 27,
      "end": 98,
      "text": "espero te encuentres muy bien, escribo para solicitar que agreguen los\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 98,
      "end": 157,
      "text": "siguientes asesores al estudiante: Ricardo Herrera Molina:\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 157,
      "end": 169,
      "text": "Asesor: Dr. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 169,
      "end": 216,
      "text": "Javier Torres Díaz (jtorres@academiafutura.edu\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 216,
      "end": 218,
      "text": ")\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 218,
      "end": 232,
      "text": "Coasesor: Dr. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 232,
      "end": 281,
      "text": "Pablo Núñez Castillo (pnunez@institutoseguro.org\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 281,
      "end": 283,
      "text": ")\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 283,
      "end": 284,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 284,
      "end": 336,
      "text": "Cualquier cosa que se requiera, quedo al pendiente.\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 336,
      "end": 337,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 337,
      "end": 346,
      "text": "Saludos,\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 346,
      "end": 350,
      "text": "Dr. "
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 350,
      "end": 372,
      "text": "Fernando Salgado Ríos\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 372,
      "end": 394,
      "text": "Representante docente\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 394,
      "end": 445,
      "text": "Programa de posgrado en protección digital avanzada"
    }
  ],
  "passA": {
    "requestSha256": "fb5346d4aa0e4988f2eda823d1b908461c9e8ec1b2af88269f0cda2a36582d94",
    "capturedAt": "2026-09-20T23:46:27.595Z",
    "elapsedMs": 153.10570899999584,
    "successfulAttemptElapsedMs": 150.52304200001527,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.02
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.02
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.94
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.85,
            "sender_supplied": 0.15,
            "independently_established": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.8
        }
      },
      "usage": {
        "input_tokens": 3572,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "f278edab62f7b1ec394d29c63fdd9f41b13435f3421a6f63af961b64235c8688",
    "capturedAt": "2026-09-20T23:46:27.766Z",
    "elapsedMs": 169.53370800000266,
    "successfulAttemptElapsedMs": 167.7412090000289,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:16",
          "probabilities": {
            "body:1": 0,
            "body:16": 0.93,
            "body:10": 0,
            "body:15": 0.01,
            "body:2": 0,
            "body:17": 0.05,
            "body:3": 0,
            "body:5": 0,
            "NONE": 0,
            "body:11": 0,
            "body:4": 0,
            "body:12": 0,
            "body:7": 0,
            "body:9": 0,
            "body:6": 0,
            "body:0": 0,
            "body:14": 0.01,
            "body:13": 0,
            "body:8": 0,
            "subject:0": 0
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 1083,
        "output_tokens": 212
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 324.2172919999866,
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
        "status": "not_requested",
        "segmentId": null
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:16"
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
    "seq": 2279,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-464",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:27.443Z",
    "offsetMs": 1.9139579999900889
  },
  {
    "seq": 2280,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-464",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:27.594Z",
    "offsetMs": 153.1083749999816,
    "elapsedMs": 150.52304200001527,
    "outcome": "success"
  },
  {
    "seq": 2281,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-464",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:27.597Z",
    "offsetMs": 155.61579199999687
  },
  {
    "seq": 2282,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-464",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:27.765Z",
    "offsetMs": 323.91995799998404,
    "elapsedMs": 167.7412090000289,
    "outcome": "success"
  },
  {
    "seq": 2283,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-464",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:27.766Z",
    "offsetMs": 324.2829999999958,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "48ce4fb9271ebbc5f7e457f55b403a57d2546031845f33db8b80bdc960ea775d";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2280},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2282},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2283}} as const;
export const projectionSha256 = "a62dd7b28882443411bb1b83e6e32da44e34c019fc49c3c4fe939b644543599e";
