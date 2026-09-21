import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-279",
  "inputSha256": "927bcebae5073223f299b7d78c26df94a87b394f58e3f26cfd5395fda5943bd6",
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
      "end": 52,
      "text": "Disney +: Notificación de renovación de suscripción."
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 15,
      "text": "[Disney+ Logo]\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 15,
      "end": 54,
      "text": "Meddelelse om fornyelse af abonnement.\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 54,
      "end": 99,
      "text": "Tu suscripción mensual a Disney ha expirado.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 99,
      "end": 100,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 100,
      "end": 223,
      "text": "Para seguir disfrutando de la música sin interrupciones, haga clic en el botón a continuación para renovar su suscripción.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 223,
      "end": 224,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 224,
      "end": 274,
      "text": "RENUEVA TU SUSCRIPCIÓN AHORA https://abre.ai/mGTJ\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 274,
      "end": 275,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 275,
      "end": 328,
      "text": "Descargar Disney para: iPhone, iPad, Android y otros\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 328,
      "end": 329,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 329,
      "end": 376,
      "text": "¡Gracias por ser parte de la comunidad Disney!\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 376,
      "end": 377,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 377,
      "end": 394,
      "text": "Equipo de Disney\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 394,
      "end": 395,
      "text": "\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 395,
      "end": 410,
      "text": "© 2025 Disney. "
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 410,
      "end": 430,
      "text": "All Rights Reserved."
    }
  ],
  "passA": {
    "requestSha256": "559bc909510c9d0084df196a7e972f35b995072a980d475a8ecbc3c281914cc5",
    "capturedAt": "2026-09-20T23:45:25.512Z",
    "elapsedMs": 119.92933300000732,
    "successfulAttemptElapsedMs": 118.957791000008,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.5
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.89
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.7
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.9
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.2
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.11
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
          "noul": 0.04
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
            "no_sensitive_action": 0.01,
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "sender_supplied": 0.99
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 3564,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "4ff821a20f64d115a50a4017cdc06e085a6313be69c351cc0a6612fc817f012f",
    "capturedAt": "2026-09-20T23:45:25.633Z",
    "elapsedMs": 119.59362499999406,
    "successfulAttemptElapsedMs": 117.34554200001003,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "subject:0": 0,
            "body:13": 0,
            "body:3": 0,
            "body:10": 0,
            "body:11": 0,
            "body:8": 0,
            "NONE": 0.4,
            "body:4": 0.06,
            "body:9": 0,
            "body:7": 0,
            "body:2": 0,
            "body:1": 0,
            "body:0": 0,
            "body:15": 0,
            "body:12": 0,
            "body:14": 0,
            "body:6": 0.54,
            "body:5": 0
          },
          "confidence": 0.51
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "subject:0": 0,
            "body:13": 0,
            "body:3": 0,
            "body:10": 0,
            "body:11": 0,
            "body:8": 0,
            "NONE": 0.02,
            "body:4": 0.1,
            "body:9": 0,
            "body:7": 0,
            "body:2": 0,
            "body:1": 0,
            "body:15": 0,
            "body:0": 0,
            "body:12": 0,
            "body:14": 0,
            "body:6": 0.88,
            "body:5": 0
          },
          "confidence": 0.87
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "subject:0": 0,
            "body:13": 0,
            "body:3": 0,
            "body:11": 0,
            "body:10": 0,
            "body:8": 0,
            "body:4": 0.39,
            "NONE": 0.01,
            "body:9": 0,
            "body:7": 0,
            "body:2": 0.12,
            "body:1": 0,
            "body:15": 0,
            "body:0": 0,
            "body:12": 0,
            "body:14": 0,
            "body:6": 0.48,
            "body:5": 0
          },
          "confidence": 0.44
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:12",
          "probabilities": {
            "subject:0": 0.04,
            "body:13": 0,
            "body:3": 0,
            "body:11": 0,
            "body:10": 0.01,
            "body:8": 0,
            "NONE": 0.01,
            "body:4": 0.01,
            "body:9": 0,
            "body:7": 0,
            "body:2": 0.03,
            "body:1": 0,
            "body:0": 0.01,
            "body:15": 0,
            "body:12": 0.87,
            "body:14": 0.01,
            "body:6": 0.01,
            "body:5": 0
          },
          "confidence": 0.85
        }
      },
      "usage": {
        "input_tokens": 2861,
        "output_tokens": 753
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 241.90425000000687,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "payment_request": {
        "status": "selected",
        "segmentId": "body:6"
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
        "segmentId": "body:12"
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
    "seq": 1365,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-279",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:25.392Z",
    "offsetMs": 0.6250419999996666
  },
  {
    "seq": 1366,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-279",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:25.511Z",
    "offsetMs": 119.9287089999998,
    "elapsedMs": 118.957791000008,
    "outcome": "success"
  },
  {
    "seq": 1367,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-279",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:25.515Z",
    "offsetMs": 123.34991699999955
  },
  {
    "seq": 1368,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-279",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:25.633Z",
    "offsetMs": 241.44695900000806,
    "elapsedMs": 117.34554200001003,
    "outcome": "success"
  },
  {
    "seq": 1369,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-279",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:25.633Z",
    "offsetMs": 241.97658400000364,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ea138603cb07c5ead2317db881b26b361eb9ce5f2a1993caff565f298b8a651e";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1366},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1368},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1369}} as const;
export const projectionSha256 = "e168fcc79e8c8b568ebb383eb10bdcc0fd4fd929e86703a2fe21c595fff37d5d";
