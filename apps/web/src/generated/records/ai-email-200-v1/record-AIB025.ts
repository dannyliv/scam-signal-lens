import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB025",
  "inputSha256": "32f3a655f69c881874c805656619afedacbdd32a9ca8c918c7e2554b981b7932",
  "questionBundleSha256": "e8f1e66cf768b6c7314f1f4b6ad6fe743f7e945c487259b6087353d93f311dd6",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "synthetic_sanitized",
  "policySha256": "3435135d6058476d4262ecbc936abf95af4993b455dfab35adc8b17f3fe6ad6a",
  "requestedModel": "jev-1.13.0",
  "segments": [
    {
      "id": "subject:0",
      "source": "subject",
      "start": 0,
      "end": 41,
      "text": "Venue change for the neighborhood meeting"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 96,
      "text": "The neighborhood meeting will be held at the Riverside Community Center instead of the library. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 96,
      "end": 124,
      "text": "The agenda remains the same."
    }
  ],
  "passA": {
    "requestSha256": "ae7a1c108e57271b9e86ed87029c5251bfa203726344672194c80699cf5ca20f",
    "capturedAt": "2026-09-20T23:42:50.821Z",
    "elapsedMs": 140.28529200000048,
    "successfulAttemptElapsedMs": 139.12975000000006,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.01
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
          "noul": 0.07
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.02
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.01
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 0,
            "mixed_or_unclear": 0,
            "informational": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 1
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3284,
        "output_tokens": 350
      }
    }
  },
  "passB": null,
  "evidencePassStatus": "not_needed",
  "processingElapsedMs": 141.2077500000005,
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
    "seq": 119,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB025",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:50.681Z",
    "offsetMs": 0.7172920000002705
  },
  {
    "seq": 120,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB025",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:50.821Z",
    "offsetMs": 140.28629199999978,
    "elapsedMs": 139.12975000000006,
    "outcome": "success"
  },
  {
    "seq": 121,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB025",
    "pass": "B",
    "attempt": null,
    "kind": "pass_skipped",
    "at": "2026-09-20T23:42:50.822Z",
    "offsetMs": 141.17662500000006,
    "reasonCode": "schema_error"
  },
  {
    "seq": 122,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB025",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:50.822Z",
    "offsetMs": 141.22795899999983,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "9829a37107443e49bcb50cea98941e7fd79c37547e6c033bb6e7f8d331e75546";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":120},"passB":null,"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":122}} as const;
export const projectionSha256 = "6355ae53d4e7f8c9c009840f585667b5e8723f649eba17aaf3be6a710d2adf8f";
