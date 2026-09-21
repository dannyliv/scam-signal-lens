import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB008",
  "inputSha256": "39c149f6e3c39f699f144818446f3fb07acf40ff40df49cd44dd5270b86c2d68",
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
      "end": 28,
      "text": "Your desk lamp was delivered"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 68,
      "text": "Your order was marked delivered to the building reception at 14:18. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 68,
      "end": 151,
      "text": "If it is not there, open the order page from your purchase history to request help."
    }
  ],
  "passA": {
    "requestSha256": "44f0a3424746a755ddc9915706d66bcc9de816c50848c69fba13e5e3726da6ba",
    "capturedAt": "2026-09-20T23:42:46.331Z",
    "elapsedMs": 185.9391660000001,
    "successfulAttemptElapsedMs": 184.39987500000007,
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
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.09
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.47
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.83
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "informational": 0.51,
            "mixed_or_unclear": 0.01,
            "active_request": 0.48,
            "educational_or_quoted": 0
          },
          "confidence": 0.34
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.71,
            "independently_established": 0.28,
            "mixed_or_unknown": 0,
            "sender_supplied": 0.01
          },
          "confidence": 0.62
        }
      },
      "usage": {
        "input_tokens": 3296,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "3768e4048702ea76202252f459b662147fa4562a8897dd21f5e7483b1729c4ef",
    "capturedAt": "2026-09-20T23:42:46.456Z",
    "elapsedMs": 122.74716599999965,
    "successfulAttemptElapsedMs": 121.52954099999988,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.01,
            "NONE": 0.47,
            "body:0": 0.15,
            "body:1": 0.37
          },
          "confidence": 0.3
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0,
            "body:0": 0,
            "subject:0": 0,
            "body:1": 1
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 940,
        "output_tokens": 116
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 311.1785,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence",
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
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 36,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB008",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:46.146Z",
    "offsetMs": 0.8712080000000242
  },
  {
    "seq": 37,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB008",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:46.331Z",
    "offsetMs": 185.95024999999987,
    "elapsedMs": 184.39987500000007,
    "outcome": "success"
  },
  {
    "seq": 38,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB008",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:46.334Z",
    "offsetMs": 188.704792
  },
  {
    "seq": 39,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB008",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:46.456Z",
    "offsetMs": 310.7803329999997,
    "elapsedMs": 121.52954099999988,
    "outcome": "success"
  },
  {
    "seq": 40,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB008",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:46.456Z",
    "offsetMs": 311.27108299999963,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0933dd08466146ae449ab6354d640f2963310be4bf25bf46f48b1245958bace1";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":37},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":39},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":40}} as const;
export const projectionSha256 = "58fc8b4848f12ff90bf7f8fc3158bf7ede0af689c522af65d46e5b014e543811";
