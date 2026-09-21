import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-022",
  "inputSha256": "b330756fa0635afb46d0dd3a9162049a8eedeba54546c417ccaad2fae5562e8b",
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
      "text": "Todo lo que amas de Lancôme, en una sola caja 💖"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 24,
      "text": "Â¡Apresurate Pancracio! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 24,
      "end": 49,
      "text": "La Oferta Cierra en Horas"
    }
  ],
  "passA": {
    "requestSha256": "55d769580d8ac9e51b3007dcc435f7ab405cfcaa5c9ebfd673d94b11c63c0355",
    "capturedAt": "2026-09-20T23:43:58.113Z",
    "elapsedMs": 143.8407500000003,
    "successfulAttemptElapsedMs": 142.8812080000007,
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
          "noul": 0.05
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.6
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.96
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.12
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.15
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.07
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
            "active_request": 0.98,
            "educational_or_quoted": 0,
            "informational": 0.02,
            "mixed_or_unclear": 0
          },
          "confidence": 0.97
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0,
            "no_sensitive_action": 0.99,
            "mixed_or_unknown": 0.01,
            "independently_established": 0
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 3458,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "62f25312442c1479d91656148eae5cc240078763532f8a7a52f49deeb24c18e4",
    "capturedAt": "2026-09-20T23:43:58.273Z",
    "elapsedMs": 157.90733399999954,
    "successfulAttemptElapsedMs": 156.33091700000023,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.01,
            "body:1": 0.33,
            "NONE": 0.63,
            "body:0": 0.03
          },
          "confidence": 0.51
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0.78,
            "NONE": 0,
            "body:0": 0.22
          },
          "confidence": 0.71
        }
      },
      "usage": {
        "input_tokens": 935,
        "output_tokens": 111
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 304.8406670000004,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 104,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-022",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:57.969Z",
    "offsetMs": 0.5473750000001019
  },
  {
    "seq": 105,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-022",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:58.112Z",
    "offsetMs": 143.83991700000024,
    "elapsedMs": 142.8812080000007,
    "outcome": "success"
  },
  {
    "seq": 106,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-022",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:58.116Z",
    "offsetMs": 147.6039580000006
  },
  {
    "seq": 107,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-022",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:58.273Z",
    "offsetMs": 304.7031670000006,
    "elapsedMs": 156.33091700000023,
    "outcome": "success"
  },
  {
    "seq": 108,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-022",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:58.273Z",
    "offsetMs": 304.87924999999996,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6ce8901c2d3784ea2333dec09bc29ebfbf0e44633f0c0bacb1707f56c683ba52";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":105},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":107},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":108}} as const;
export const projectionSha256 = "a8fa3cebe56781c2f156a36f6988f328aef87ef68deb01abfe122df95335e1ed";
