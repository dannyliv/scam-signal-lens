import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-098",
  "inputSha256": "82450adacf17de4305bba721e326874b85998ad17bfc6731af13af5abc7a90b5",
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
      "end": 82,
      "text": "Ezequiela Miguelina -  🎁⏱️Completa una breve encuesta y recibe un regalo gratis. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 82,
      "end": 89,
      "text": "ID#6964"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 7,
      "text": "MAPFRE\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 7,
      "end": 8,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 8,
      "end": 62,
      "text": "¡Responde una breve encuesta y gana un regalo gratis!\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 62,
      "end": 63,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 63,
      "end": 95,
      "text": "Kit de Emergencia para el Coche\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 95,
      "end": 96,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 96,
      "end": 196,
      "text": "Tienes la oportunidad de recibir un completo kit de seguridad para tu vehículo, cortesía de MAPFRE.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 196,
      "end": 197,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 197,
      "end": 214,
      "text": "Claudia Martínez\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 214,
      "end": 215,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 215,
      "end": 231,
      "text": "RESPONDE Y GANA\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 231,
      "end": 232,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 232,
      "end": 270,
      "text": "Haz clic aquí para reclamar tu regalo\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 270,
      "end": 271,
      "text": "\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 271,
      "end": 285,
      "text": "¡Felicidades! "
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 285,
      "end": 402,
      "text": "Has sido seleccionado entre un grupo limitado de personas para recibir un exclusivo Kit de Emergencia para el Coche.\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 402,
      "end": 403,
      "text": "\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 403,
      "end": 498,
      "text": "Para obtener tu regalo, solo debes responder algunas preguntas sobre tu experiencia con MAPFRE."
    }
  ],
  "passA": {
    "requestSha256": "4a258c6c6d4933457e1619b1f350ef0a66bf3d198968b243f37a2470714838f6",
    "capturedAt": "2026-09-20T23:44:22.859Z",
    "elapsedMs": 128.95550000000003,
    "successfulAttemptElapsedMs": 127.46279199999844,
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
          "noul": 0.28
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.06
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.29
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.87
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.16
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.09
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
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 1,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.27,
            "sender_supplied": 0.72,
            "independently_established": 0
          },
          "confidence": 0.62
        }
      },
      "usage": {
        "input_tokens": 3580,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "b0dee264f37ac98a85b2b8dc8730337cf3a697de33a3abd7c5b7c6d21489a6ef",
    "capturedAt": "2026-09-20T23:44:23.038Z",
    "elapsedMs": 177.75962500000242,
    "successfulAttemptElapsedMs": 176.70758299999943,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:15": 0,
            "body:14": 0,
            "body:2": 0.01,
            "body:13": 0,
            "body:16": 0,
            "body:17": 0.08,
            "body:3": 0,
            "body:4": 0,
            "body:5": 0,
            "subject:0": 0,
            "body:12": 0.03,
            "body:6": 0,
            "body:8": 0,
            "body:9": 0,
            "body:1": 0,
            "body:10": 0.01,
            "body:11": 0,
            "subject:1": 0,
            "NONE": 0.87,
            "body:7": 0,
            "body:0": 0
          },
          "confidence": 0.86
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:15": 0.3,
            "body:14": 0,
            "body:2": 0.02,
            "body:16": 0,
            "body:13": 0,
            "body:17": 0.01,
            "body:3": 0,
            "body:4": 0,
            "body:5": 0,
            "subject:0": 0.4,
            "body:12": 0.01,
            "body:6": 0,
            "body:8": 0,
            "body:10": 0.01,
            "body:1": 0,
            "body:11": 0,
            "body:9": 0,
            "subject:1": 0,
            "NONE": 0.25,
            "body:7": 0,
            "body:0": 0
          },
          "confidence": 0.36
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:15": 0.02,
            "body:14": 0,
            "body:16": 0,
            "body:13": 0,
            "body:2": 0.01,
            "body:17": 0.05,
            "body:3": 0,
            "body:4": 0,
            "body:5": 0,
            "subject:0": 0,
            "body:12": 0,
            "body:6": 0.36,
            "body:8": 0.05,
            "body:11": 0,
            "body:1": 0,
            "body:10": 0,
            "body:9": 0,
            "subject:1": 0,
            "NONE": 0.04,
            "body:7": 0,
            "body:0": 0.47000000000000003
          },
          "confidence": 0.43
        }
      },
      "usage": {
        "input_tokens": 2452,
        "output_tokens": 651
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 308.3145420000001,
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
        "status": "none_selected",
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
    "seq": 479,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-098",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:22.730Z",
    "offsetMs": 0.9337919999998121
  },
  {
    "seq": 480,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-098",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:22.858Z",
    "offsetMs": 128.95800000000236,
    "elapsedMs": 127.46279199999844,
    "outcome": "success"
  },
  {
    "seq": 481,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-098",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:22.860Z",
    "offsetMs": 130.6651669999992
  },
  {
    "seq": 482,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-098",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:23.037Z",
    "offsetMs": 307.8590000000004,
    "elapsedMs": 176.70758299999943,
    "outcome": "success"
  },
  {
    "seq": 483,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-098",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:23.038Z",
    "offsetMs": 308.408875000001,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d67a6a5cc9ef225bad6cc2775ba817117c042639b6f04a2786e0b1e10c244539";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":480},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":482},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":483}} as const;
export const projectionSha256 = "89d6b147b123263fdd525e45c0cd832439db6bfe25e87db9bd35b8a821922f4d";
