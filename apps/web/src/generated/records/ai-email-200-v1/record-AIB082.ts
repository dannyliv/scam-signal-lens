import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB082",
  "inputSha256": "fab840d9ef2539b1e4cddda7d00f76bba77d1a555c37c38e3a748e39a371044b",
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
      "text": "Route 14 detour this weekend"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 62,
      "text": "Route 14 will use a detour this weekend because of road work. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 62,
      "end": 108,
      "text": "The transit app will show the temporary stops."
    }
  ],
  "passA": {
    "requestSha256": "38d4b8bc7b9be95ffc62bdb214a0d574cd89456df3025daabaac39b6db2cf23b",
    "capturedAt": "2026-09-20T23:43:08.862Z",
    "elapsedMs": 186.6001249999972,
    "successfulAttemptElapsedMs": 184.9897090000013,
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
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.16
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
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.85
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 0,
            "informational": 1,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 1,
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "sender_supplied": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3289,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "9c13432512632eab804639779c0476bcdd764140058ff04ac815408bf727fe8b",
    "capturedAt": "2026-09-20T23:43:08.983Z",
    "elapsedMs": 118.37454200000138,
    "successfulAttemptElapsedMs": 116.5814169999976,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.95,
            "NONE": 0.05,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 622,
        "output_tokens": 62
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 307.47212500000023,
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
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 401,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB082",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:08.676Z",
    "offsetMs": 0.9586670000026061
  },
  {
    "seq": 402,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB082",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:08.862Z",
    "offsetMs": 186.59912500000064,
    "elapsedMs": 184.9897090000013,
    "outcome": "success"
  },
  {
    "seq": 403,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB082",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:08.865Z",
    "offsetMs": 190.04254200000287
  },
  {
    "seq": 404,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB082",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:08.983Z",
    "offsetMs": 307.34983400000056,
    "elapsedMs": 116.5814169999976,
    "outcome": "success"
  },
  {
    "seq": 405,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB082",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:08.983Z",
    "offsetMs": 307.5062500000022,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "b60f2e75dfb631ef5806b24b5d6f7d12d51915fd9423a39f9d14923d202df9d9";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":402},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":404},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":405}} as const;
export const projectionSha256 = "f6ab167e9fd708208380c95d272666c083a8c1b624dc1d353e0ec6230c4580b5";
