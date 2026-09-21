import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-008",
  "inputSha256": "474a6a04fede07488d41b8b4b74faae4b37a85541a49ed239542f10a41f9f824",
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
      "end": 54,
      "text": "Acuse de recibo de solicitud de INGRESO/PERMERMANENCIA"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 24,
      "text": "text/html; charset=utf-8"
    }
  ],
  "passA": {
    "requestSha256": "577e2e46f451b5bc44b3fb469fe1e3d4a68a5cce8cb46b71e51153434be62e31",
    "capturedAt": "2026-09-20T23:43:53.709Z",
    "elapsedMs": 237.61479099999997,
    "successfulAttemptElapsedMs": 236.3971660000002,
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
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.09
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.57
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.06
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.06
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.03
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.14
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0.03,
            "active_request": 0,
            "informational": 0.97,
            "educational_or_quoted": 0
          },
          "confidence": 0.96
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "sender_supplied": 0,
            "no_sensitive_action": 0.99
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 3448,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "1ea4e8f961c755ea6b6ff19819fcbb05197490b9578bb3fe629f06dbc9554477",
    "capturedAt": "2026-09-20T23:43:53.845Z",
    "elapsedMs": 134.40404100000023,
    "successfulAttemptElapsedMs": 133.18729200000007,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "NONE": 0.32,
            "body:0": 0,
            "subject:0": 0.68
          },
          "confidence": 0.51
        }
      },
      "usage": {
        "input_tokens": 599,
        "output_tokens": 50
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 374.27308300000004,
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
    "seq": 36,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-008",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:53.472Z",
    "offsetMs": 0.6187910000003285
  },
  {
    "seq": 37,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-008",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:53.709Z",
    "offsetMs": 237.62016600000015,
    "elapsedMs": 236.3971660000002,
    "outcome": "success"
  },
  {
    "seq": 38,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-008",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:53.711Z",
    "offsetMs": 240.1733750000003
  },
  {
    "seq": 39,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-008",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:53.845Z",
    "offsetMs": 373.9563750000002,
    "elapsedMs": 133.18729200000007,
    "outcome": "success"
  },
  {
    "seq": 40,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-008",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:53.845Z",
    "offsetMs": 374.32004099999995,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d99c532b31d2b18ba949b9ad279db46deb4050ab7ebc1d000eb701cc6fb790a5";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":37},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":39},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":40}} as const;
export const projectionSha256 = "161cc9140c147e8016327a3b8427c73cf719ec459da7d54e68d74f8fe08b30fc";
