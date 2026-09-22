import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-131",
  "inputSha256": "45f1cfa28aa1fc79a71db6e93c2fd48301d794e5d08961643c3be41e6d27b642",
  "questionBundleSha256": "9631a5b623f8c05b491dc5a5f67ab9b62e5b1898446a722339eaa0c16a40af8b",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "source_messages",
  "policySha256": "42e51b1f7b8706dae7188d0d3fa8c6ac83b855b21f393196bd63bc16d4b91d93",
  "requestedModel": "jev-1.13.0",
  "segments": [
    {
      "id": "subject:0",
      "source": "subject",
      "start": 0,
      "end": 29,
      "text": "100% Protegido, 50% del costo"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 46,
      "text": "McAfee Su computadora puede estar en peligro. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 46,
      "end": 62,
      "text": "Esté protegido. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 62,
      "end": 140,
      "text": "Sin protección, su computadora corre peligro de sufrir virus y otros malware. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 140,
      "end": 161,
      "text": "MANTÉNGASE PROTEGIDO!"
    }
  ],
  "passA": {
    "requestSha256": "f868b94e64d6fc1615127bb6a5636f22740aca366a17a3d9d2b7f6136ef1d6fb",
    "capturedAt": "2026-09-22T03:50:50.968Z",
    "elapsedMs": 629.4289679999929,
    "successfulAttemptElapsedMs": 627.9473630000139,
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
          "noul": 0.09
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.52
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.86
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.55
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.14
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.09
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.05
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
            "active_request": 0.86,
            "informational": 0.13,
            "mixed_or_unclear": 0.01
          },
          "confidence": 0.81
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.93,
            "sender_supplied": 0.04,
            "mixed_or_unknown": 0.03
          },
          "confidence": 0.91
        }
      },
      "usage": {
        "input_tokens": 4928,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "4cadb46d56e742d620c034f451eb895941ec5a19dc90d3cc3d0f44795bd70c76",
    "capturedAt": "2026-09-22T03:50:51.443Z",
    "elapsedMs": 473.0966860000044,
    "successfulAttemptElapsedMs": 472.10407200001646,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.34,
            "body:0": 0,
            "NONE": 0.57,
            "body:2": 0,
            "body:1": 0.05,
            "body:3": 0.04
          },
          "confidence": 0.48
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0.11,
            "NONE": 0.02,
            "body:2": 0.65,
            "body:1": 0.01,
            "body:3": 0.21
          },
          "confidence": 0.58
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.01,
            "NONE": 0.64,
            "body:0": 0.32,
            "body:1": 0.01,
            "body:2": 0.01,
            "body:3": 0.01
          },
          "confidence": 0.58
        }
      },
      "usage": {
        "input_tokens": 1719,
        "output_tokens": 219
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1104.4238019999757,
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
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 636,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-131",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:50.339Z",
    "offsetMs": 1.0814509999763686
  },
  {
    "seq": 637,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-131",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:50.968Z",
    "offsetMs": 629.429151999997,
    "elapsedMs": 627.9473630000139,
    "outcome": "success"
  },
  {
    "seq": 638,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-131",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:50.970Z",
    "offsetMs": 631.6206369999854
  },
  {
    "seq": 639,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-131",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:51.443Z",
    "offsetMs": 1104.157126999984,
    "elapsedMs": 472.10407200001646,
    "outcome": "success"
  },
  {
    "seq": 640,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-131",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:51.443Z",
    "offsetMs": 1104.484236999997,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "afacdb56066cecbe24bb17f69ac4b22559476f30f174704615a79802db0d266e";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":637},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":639},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":640}} as const;
export const projectionSha256 = "2750396dca936551beb145a6d5f04caad2f74230086fb3e1904de1d6e50d42cc";
