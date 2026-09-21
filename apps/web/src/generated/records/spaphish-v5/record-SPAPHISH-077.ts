import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-077",
  "inputSha256": "871022308ba4dc36142df8cd934c7876fecc061a16f6906256437ac5e15ad6ef",
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
      "end": 90,
      "text": "Mensaje importante del administrador de Universidad Iberoamericana Campus Ciudad de México"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 62,
      "text": "¡Este mensaje fue enviado por alguien ajeno a la Universidad! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 62,
      "end": 212,
      "text": "**************************************************************************** Tiene (2) mensajes importantes sin leer de nuestro equipo administrador. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 212,
      "end": 263,
      "text": "Haga clic en revisar para leer el (los) mensaje(s)."
    }
  ],
  "passA": {
    "requestSha256": "9fd6a2a8944fd1133fe68e5261364ae521865c38a6878cba74a80819027f008c",
    "capturedAt": "2026-09-20T23:44:16.398Z",
    "elapsedMs": 231.6475419999988,
    "successfulAttemptElapsedMs": 230.18316699999923,
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
          "noul": 0.06
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.35
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.9
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.35
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
          "noul": 0.07
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.95,
            "educational_or_quoted": 0,
            "informational": 0.03,
            "mixed_or_unclear": 0.02
          },
          "confidence": 0.93
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.63,
            "sender_supplied": 0.35,
            "independently_established": 0,
            "mixed_or_unknown": 0.02
          },
          "confidence": 0.5
        }
      },
      "usage": {
        "input_tokens": 3479,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "8e9bf9cd0e5f2cb31af675b218fb3ca559862f6b799165c0feb2e14ac95084ac",
    "capturedAt": "2026-09-20T23:44:16.554Z",
    "elapsedMs": 153.99266599999828,
    "successfulAttemptElapsedMs": 152.26687500000116,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.27,
            "NONE": 0.43,
            "body:0": 0,
            "body:2": 0.29,
            "subject:0": 0.01
          },
          "confidence": 0.29
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:1": 0.4,
            "NONE": 0.06,
            "body:0": 0,
            "body:2": 0.02,
            "subject:0": 0.52
          },
          "confidence": 0.4
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.01,
            "NONE": 0.74,
            "body:0": 0.02,
            "body:2": 0.23,
            "subject:0": 0
          },
          "confidence": 0.68
        }
      },
      "usage": {
        "input_tokens": 1372,
        "output_tokens": 196
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 388.184874999999,
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
    "seq": 375,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-077",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:16.167Z",
    "offsetMs": 0.9385409999995318
  },
  {
    "seq": 376,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-077",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:16.397Z",
    "offsetMs": 231.64795799999774,
    "elapsedMs": 230.18316699999923,
    "outcome": "success"
  },
  {
    "seq": 377,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-077",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:16.401Z",
    "offsetMs": 234.97458299999926
  },
  {
    "seq": 378,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-077",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:16.554Z",
    "offsetMs": 387.9205000000002,
    "elapsedMs": 152.26687500000116,
    "outcome": "success"
  },
  {
    "seq": 379,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-077",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:16.554Z",
    "offsetMs": 388.23775000000023,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "3f3c89f2888cf96095ba5c3512e3f396a4c7c4d34d1a9f44ffc1f355b6439f26";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":376},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":378},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":379}} as const;
export const projectionSha256 = "e0c83c7ea85904cefe73b6c834c1ddd62748b8031b29caa3d3d3026f01dbb6f7";
