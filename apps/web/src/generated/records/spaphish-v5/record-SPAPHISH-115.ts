import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-115",
  "inputSha256": "7152d9bd3b8f9a82d78f44ee9c3d9dba698c359184e34fd2d3f1177fb45c4a19",
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
      "end": 59,
      "text": "Se est quedando sin espacio de almacenamiento? - Actualizar"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 58,
      "text": "URGENTE: Â¡Proteja sus archivos antes de que desaparezcan!"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 58,
      "end": 60,
      "text": "**"
    }
  ],
  "passA": {
    "requestSha256": "bb398e1b76ae1f4d56efab6d1e88ea7a707b70b127a8aa443608545865cb2d07",
    "capturedAt": "2026-09-20T23:44:28.214Z",
    "elapsedMs": 116.11875000000146,
    "successfulAttemptElapsedMs": 114.48862499999814,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.06
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.07
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
          "noul": 0.95
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.18
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.19
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
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
            "informational": 0.15,
            "mixed_or_unclear": 0.02,
            "educational_or_quoted": 0,
            "active_request": 0.83
          },
          "confidence": 0.76
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.01,
            "mixed_or_unknown": 0.03,
            "independently_established": 0,
            "no_sensitive_action": 0.96
          },
          "confidence": 0.94
        }
      },
      "usage": {
        "input_tokens": 3455,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "db926fe642d156747920ace08328af07291b71fc52f7ac1426c618977cd79c52",
    "capturedAt": "2026-09-20T23:44:28.300Z",
    "elapsedMs": 83.85858300000109,
    "successfulAttemptElapsedMs": 82.23537499999657,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0,
            "body:0": 1,
            "subject:0": 0,
            "NONE": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 620,
        "output_tokens": 59
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 202.35199999999895,
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
        "status": "selected",
        "segmentId": "body:0"
      },
      "authority_claim": {
        "status": "not_requested",
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
    "seq": 563,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-115",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:28.099Z",
    "offsetMs": 1.0567079999964335
  },
  {
    "seq": 564,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-115",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:28.214Z",
    "offsetMs": 116.12004199999501,
    "elapsedMs": 114.48862499999814,
    "outcome": "success"
  },
  {
    "seq": 565,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-115",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:28.217Z",
    "offsetMs": 119.21758299999783
  },
  {
    "seq": 566,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-115",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:28.300Z",
    "offsetMs": 202.17774999999529,
    "elapsedMs": 82.23537499999657,
    "outcome": "success"
  },
  {
    "seq": 567,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-115",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:28.300Z",
    "offsetMs": 202.3923749999958,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "fb463d818403ccf4629c14f23622cf2bf6a1e518160c903a093cb83eb73e35c4";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":564},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":566},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":567}} as const;
export const projectionSha256 = "9ad31762c30c234b90cd5a743902ff99c04924b76eb54806cf795f1c57ec5a42";
