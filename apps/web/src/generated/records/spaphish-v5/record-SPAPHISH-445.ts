import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-445",
  "inputSha256": "3812f1c87f63d2d55eecb74b59ed3f01bf36e065710782633c3e9de50614f8f7",
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
      "end": 16,
      "text": "Orden de trabajo"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 126,
      "text": "Hola, Ricardo López: María Torres le envió una orden de trabajo Instituto Tecnológico del Valle Central Descargar archivos Ver"
    }
  ],
  "passA": {
    "requestSha256": "319bca049af88365861fd0f6504cac1f53eb8005d612dc6124dca6774afea7d1",
    "capturedAt": "2026-09-20T23:46:21.571Z",
    "elapsedMs": 176.48020799999358,
    "successfulAttemptElapsedMs": 173.77787499999977,
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
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.06
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.85
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.08
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0.01,
            "educational_or_quoted": 0,
            "active_request": 0.71,
            "informational": 0.28
          },
          "confidence": 0.61
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.04,
            "no_sensitive_action": 0.84,
            "independently_established": 0,
            "sender_supplied": 0.12
          },
          "confidence": 0.79
        }
      },
      "usage": {
        "input_tokens": 3452,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "75f5d463525f30ead78906e3a3d0bfe5eed7a97eb139c38f90f7e04785445103",
    "capturedAt": "2026-09-20T23:46:21.687Z",
    "elapsedMs": 115.27424999998766,
    "successfulAttemptElapsedMs": 113.76366699999198,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.02,
            "NONE": 0.03,
            "body:0": 0.95
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 607,
        "output_tokens": 50
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 292.9344170000113,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence"
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
        "status": "not_requested",
        "segmentId": null
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 2185,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-445",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:21.396Z",
    "offsetMs": 2.1292499999981374
  },
  {
    "seq": 2186,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-445",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:21.570Z",
    "offsetMs": 176.4833750000107,
    "elapsedMs": 173.77787499999977,
    "outcome": "success"
  },
  {
    "seq": 2187,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-445",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:21.573Z",
    "offsetMs": 178.53424999999697
  },
  {
    "seq": 2188,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-445",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:21.687Z",
    "offsetMs": 292.755084000004,
    "elapsedMs": 113.76366699999198,
    "outcome": "success"
  },
  {
    "seq": 2189,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-445",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:21.687Z",
    "offsetMs": 292.9733750000014,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "bb36442b5b149018b583fa52a4ad10e98600378f81c242b8152bd132b88f0d16";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2186},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2188},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2189}} as const;
export const projectionSha256 = "27fdece7c534e4c5f38504d073d92b4c95849e35b95656bcdbc6341a3e466ddc";
