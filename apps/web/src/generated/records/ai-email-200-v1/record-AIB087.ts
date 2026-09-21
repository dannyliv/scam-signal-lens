import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB087",
  "inputSha256": "ebbb9852ab311eb98b330d5589562cdee932e28ddcf1664ce5b1ffc247f42163",
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
      "end": 30,
      "text": "Accessibility review completed"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 92,
      "text": "The website accessibility review is complete and the updated help guide is on the intranet. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 92,
      "end": 137,
      "text": "Report issues through the standard help form."
    }
  ],
  "passA": {
    "requestSha256": "ceb8cd175b9ef513944482d98e3dd101469b3283675bc44d0074161841b1b6eb",
    "capturedAt": "2026-09-20T23:43:10.362Z",
    "elapsedMs": 127.06854100000055,
    "successfulAttemptElapsedMs": 125.32637500000055,
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
          "noul": 0.02
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.36
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.68
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "informational": 0.88,
            "active_request": 0.12,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.83
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.1,
            "no_sensitive_action": 0.9,
            "sender_supplied": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.86
        }
      },
      "usage": {
        "input_tokens": 3284,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "d6b5e942e300c1f202a0158b6e4fc4d39ec4de1abcfbcf073b464ba6b4926167",
    "capturedAt": "2026-09-20T23:43:11.126Z",
    "elapsedMs": 762.2124999999978,
    "successfulAttemptElapsedMs": 760.4668750000019,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0.01,
            "body:1": 0.63,
            "NONE": 0.28,
            "body:0": 0.08
          },
          "confidence": 0.5
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:1": 0.9,
            "NONE": 0.09,
            "body:0": 0.01
          },
          "confidence": 0.87
        }
      },
      "usage": {
        "input_tokens": 904,
        "output_tokens": 118
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 891.2169589999976,
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
    "seq": 425,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB087",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:10.236Z",
    "offsetMs": 1.1051249999982247
  },
  {
    "seq": 426,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB087",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:10.362Z",
    "offsetMs": 127.07004199999938,
    "elapsedMs": 125.32637500000055,
    "outcome": "success"
  },
  {
    "seq": 427,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB087",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:10.365Z",
    "offsetMs": 129.833499999997
  },
  {
    "seq": 428,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB087",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:11.126Z",
    "offsetMs": 891.0282090000001,
    "elapsedMs": 760.4668750000019,
    "outcome": "success"
  },
  {
    "seq": 429,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB087",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:11.126Z",
    "offsetMs": 891.2542919999978,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7bfeb7ffd14d5eaf94c64244ec105954f902fa505b0ace461711bff25e618b8f";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":426},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":428},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":429}} as const;
export const projectionSha256 = "274d7caada8ba8e3bbdd724d553aa521ad92bfa4245471c1bfc1b8819b0804a6";
