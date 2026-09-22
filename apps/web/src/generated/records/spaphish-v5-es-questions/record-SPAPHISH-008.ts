import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-008",
  "inputSha256": "474a6a04fede07488d41b8b4b74faae4b37a85541a49ed239542f10a41f9f824",
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
    "requestSha256": "1a8a74eb4fba5d343c5a510fc434759bec9e4453745cae59024a10488b926e0e",
    "capturedAt": "2026-09-22T03:48:20.360Z",
    "elapsedMs": 670.3704409999991,
    "successfulAttemptElapsedMs": 669.2928110000012,
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
          "noul": 0.08
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.08
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.59
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.07
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.11
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.06
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0,
            "mixed_or_unclear": 0.02,
            "educational_or_quoted": 0,
            "informational": 0.98
          },
          "confidence": 0.97
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.99,
            "independently_established": 0,
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 4898,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "b9e450dc3a5d1599991c36a475d7fe7925fd2cf793e35a30cdb2bdf46b38cf07",
    "capturedAt": "2026-09-22T03:48:21.053Z",
    "elapsedMs": 691.0428779999984,
    "successfulAttemptElapsedMs": 690.3143999999993,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:0": 0,
            "NONE": 0.44,
            "subject:0": 0.56
          },
          "confidence": 0.34
        }
      },
      "usage": {
        "input_tokens": 699,
        "output_tokens": 50
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1363.2826130000012,
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
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-008",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:19.690Z",
    "offsetMs": 0.5549989999999525
  },
  {
    "seq": 37,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-008",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:20.360Z",
    "offsetMs": 670.3769730000004,
    "elapsedMs": 669.2928110000012,
    "outcome": "success"
  },
  {
    "seq": 38,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-008",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:20.362Z",
    "offsetMs": 672.2516240000004
  },
  {
    "seq": 39,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-008",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:21.052Z",
    "offsetMs": 1362.9919640000007,
    "elapsedMs": 690.3143999999993,
    "outcome": "success"
  },
  {
    "seq": 40,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-008",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:48:21.053Z",
    "offsetMs": 1363.3471960000006,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "98432beb5e2b028b4a0a2e613ac335e9fc3ccf29c65c5114f64ff22e3ccdef6b";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":37},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":39},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":40}} as const;
export const projectionSha256 = "1ec5163d88c419544d6378b19ddcfcf510dfa311c1c24495edd767aa817c828b";
