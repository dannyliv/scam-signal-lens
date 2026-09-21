import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-478",
  "inputSha256": "b87c620cbecb205b5612ae77da795def2ad3aead3b3ada6372d41c5238c77261",
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
      "end": 28,
      "text": "¡Hemos bloqueado tu cuenta! "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 28,
      "end": 80,
      "text": "El 2025.07.29, tus fotos y videos serán eliminados. "
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 80,
      "end": 93,
      "text": "¡Actúa ahora!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 27,
      "text": "Hemos bloqueado tu cuenta! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 27,
      "end": 79,
      "text": "El 2025.07.29, tus fotos y videos seran eliminados. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 79,
      "end": 91,
      "text": "Actua ahora!"
    }
  ],
  "passA": {
    "requestSha256": "47fe96672b392d822052e36f08462965e42c68efdaa2b7dbd5b11273f015c053",
    "capturedAt": "2026-09-20T23:46:32.426Z",
    "elapsedMs": 197.82641700000386,
    "successfulAttemptElapsedMs": 194.97620800000732,
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
          "noul": 0.95
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.42
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.33
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.99,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0.01
          },
          "confidence": 0.98
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.94,
            "sender_supplied": 0.02,
            "mixed_or_unknown": 0.04
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 3495,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "9f0d89c0da62108b973a507ca741a1d3e1e596e2167a6f73d0f9bc8df0e1242f",
    "capturedAt": "2026-09-21T00:57:34.498Z",
    "elapsedMs": 130.89579199999935,
    "successfulAttemptElapsedMs": 128.38937499999884,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:2",
          "probabilities": {
            "subject:1": 0.13,
            "subject:0": 0,
            "body:0": 0,
            "subject:2": 0.66,
            "NONE": 0,
            "body:2": 0.18,
            "body:1": 0.03
          },
          "confidence": 0.6
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:1": 0,
            "subject:0": 0.24,
            "body:0": 0.15,
            "subject:2": 0.01,
            "NONE": 0.59,
            "body:2": 0,
            "body:1": 0.01
          },
          "confidence": 0.52
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:1": 0,
            "subject:0": 0,
            "body:0": 0,
            "subject:2": 0.08,
            "body:1": 0,
            "body:2": 0.07,
            "NONE": 0.85
          },
          "confidence": 0.81
        }
      },
      "usage": {
        "input_tokens": 1520,
        "output_tokens": 250
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 458.0266660000052,
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
    "seq": 2348,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-478",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:32.230Z",
    "offsetMs": 2.0986660000053234
  },
  {
    "seq": 2349,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-478",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:32.426Z",
    "offsetMs": 197.82741599998553,
    "elapsedMs": 194.97620800000732,
    "outcome": "success"
  },
  {
    "seq": 2350,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-478",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:32.430Z",
    "offsetMs": 201.94499999997788
  },
  {
    "seq": 2351,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-478",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:32.553Z",
    "offsetMs": 325.5338749999937,
    "elapsedMs": 122.88341599999694,
    "outcome": "success"
  },
  {
    "seq": 2352,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-478",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:32.554Z",
    "offsetMs": 325.64124999998603,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2821,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-478",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:34.369Z",
    "offsetMs": 3.003791999999521
  },
  {
    "seq": 2822,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-478",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:34.497Z",
    "offsetMs": 131.96941700000025,
    "elapsedMs": 128.38937499999884,
    "outcome": "success"
  },
  {
    "seq": 2823,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-478",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:34.498Z",
    "offsetMs": 132.3866670000025,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1ba8a1e04af2df0790552f04ec6cef23f7d57cb0e5d3436db33458a91798102d";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2349},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2822},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2823}} as const;
export const projectionSha256 = "c5bdbffd4e518a7f67f1a9b21e98f9449619f5d42a938780cb064e21fdc4ec25";
