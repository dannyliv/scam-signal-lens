import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-160",
  "inputSha256": "85015f60001744f9a58abd8d454c00895a23aba8b52c5a6a5c7360e28372ef26",
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
      "end": 20,
      "text": "Calificación Infotec"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 72,
      "text": "Buen tarde Dr.Genovevo Sanchez soy Isidro Zavaleta Ochoa estudiante MSE\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 72,
      "end": 146,
      "text": "Infotec revisando las calificaciones que compatio veo que mi calificación\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 146,
      "end": 214,
      "text": "es muy baja, igualmente tengo entendido que aun falta agregar otros\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 214,
      "end": 249,
      "text": "trabajos, podría ser esa la razón? "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 249,
      "end": 282,
      "text": "he realizado las entregas de mis\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 282,
      "end": 344,
      "text": "trabajos a destiempo, mas sin embargo me preguntaba si podría\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 344,
      "end": 415,
      "text": "considerármelos por favor o si existe la posibilidad de regularizar mi\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 415,
      "end": 427,
      "text": "situación .\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 427,
      "end": 428,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 428,
      "end": 436,
      "text": "Gracias\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 436,
      "end": 442,
      "text": "Atte.\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 442,
      "end": 464,
      "text": "Isidro Zavaleta Ochoa\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 464,
      "end": 479,
      "text": "Estudiante MSE\n"
    }
  ],
  "passA": {
    "requestSha256": "e3741bdc2b5bd0179c49125af6bffe79e5520d96602a54716469b56a32f2fdc7",
    "capturedAt": "2026-09-20T23:44:42.185Z",
    "elapsedMs": 252.78229199999623,
    "successfulAttemptElapsedMs": 251.28033299999515,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.01
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
          "noul": 0.72
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "active_request": 1,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.01,
            "no_sensitive_action": 0.99,
            "mixed_or_unknown": 0,
            "sender_supplied": 0
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 3565,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "0c83d6f4ca02b1b70131ab1d18ff2048b9bba3a671880e3209a0753ee0def830",
    "capturedAt": "2026-09-20T23:44:42.379Z",
    "elapsedMs": 191.58204100000148,
    "successfulAttemptElapsedMs": 189.66549999999552,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:5": 0.01,
            "body:11": 0,
            "body:3": 0,
            "body:7": 0,
            "body:1": 0.02,
            "body:8": 0,
            "body:4": 0,
            "body:9": 0,
            "body:6": 0.03,
            "NONE": 0.15,
            "subject:0": 0.02,
            "body:0": 0.53,
            "body:10": 0,
            "body:2": 0,
            "body:12": 0.24000000000000002
          },
          "confidence": 0.48
        }
      },
      "usage": {
        "input_tokens": 993,
        "output_tokens": 161
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 446.6635419999948,
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
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 783,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-160",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:41.933Z",
    "offsetMs": 1.0485419999968144
  },
  {
    "seq": 784,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-160",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:42.185Z",
    "offsetMs": 252.78008399999817,
    "elapsedMs": 251.28033299999515,
    "outcome": "success"
  },
  {
    "seq": 785,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-160",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:42.188Z",
    "offsetMs": 256.04441699999734
  },
  {
    "seq": 786,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-160",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:42.378Z",
    "offsetMs": 446.4383749999979,
    "elapsedMs": 189.66549999999552,
    "outcome": "success"
  },
  {
    "seq": 787,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-160",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:42.379Z",
    "offsetMs": 446.71429199999693,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "842bf99270bcd35d72b6b183e91e723d94a7db7b110b25e7116492462b7e63c4";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":784},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":786},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":787}} as const;
export const projectionSha256 = "b945edc4b27869aed4400b11f50bb9c98f808afef979a029137b1380a61f3216";
