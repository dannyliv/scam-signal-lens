import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-388",
  "inputSha256": "dc673472201a8a889e350eff5016fdd22b93f75d3d43416b17af9beddab1f328",
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
      "end": 4,
      "text": "baja"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 68,
      "text": "no quiero seguir recibiendo correos de sus productos ni promociones\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 68,
      "end": 69,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 69,
      "end": 77,
      "text": "saludos\n"
    }
  ],
  "passA": {
    "requestSha256": "fe14d2c3862e2934777ca7fb95c6c2a071adc17b7226ec83dc67dab7e37baf5f",
    "capturedAt": "2026-09-22T03:55:56.930Z",
    "elapsedMs": 636.509327000007,
    "successfulAttemptElapsedMs": 634.8615620000055,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.03
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.02
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.01
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.02
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "informational": 0,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "sender_supplied": 0,
            "no_sensitive_action": 1,
            "independently_established": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 4894,
        "output_tokens": 348
      }
    }
  },
  "passB": null,
  "evidencePassStatus": "not_needed",
  "processingElapsedMs": 638.8835409999592,
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
    "seq": 1901,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-388",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:56.295Z",
    "offsetMs": 1.2440809999825433
  },
  {
    "seq": 1902,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-388",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:56.930Z",
    "offsetMs": 636.5096020000055,
    "elapsedMs": 634.8615620000055,
    "outcome": "success"
  },
  {
    "seq": 1903,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-388",
    "pass": "B",
    "attempt": null,
    "kind": "pass_skipped",
    "at": "2026-09-22T03:55:56.932Z",
    "offsetMs": 638.8207379999803,
    "reasonCode": "schema_error"
  },
  {
    "seq": 1904,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-388",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:56.933Z",
    "offsetMs": 638.9507369999774,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "472363be42c9aabd6a4300c61f89c310071100fb9af59c5d05ee4e300673b12e";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1902},"passB":null,"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1904}} as const;
export const projectionSha256 = "dd36e76697da077397fbdd7dcf0b875f1bf8682123499c0d649c04336c932475";
