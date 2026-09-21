import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB037",
  "inputSha256": "4e53254ece1c34d40f095006bf64527c04c705e8c1aa9b757f4857297a5330ff",
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
      "end": 20,
      "text": "Work order completed"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 82,
      "text": "The maintenance request for the conference room light was completed this morning. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 82,
      "end": 139,
      "text": "Reply through the facilities portal if the issue returns."
    }
  ],
  "passA": {
    "requestSha256": "ef3b3ee6eadbfafc0a19eef329d499b34898daca4b87e96bb87605c4d199247b",
    "capturedAt": "2026-09-20T23:42:54.429Z",
    "elapsedMs": 205.99983299999985,
    "successfulAttemptElapsedMs": 204.55529100000058,
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
          "noul": 0.59
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
          "noul": 0.77
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0.01,
            "active_request": 0.2,
            "informational": 0.79,
            "educational_or_quoted": 0
          },
          "confidence": 0.72
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.14,
            "mixed_or_unknown": 0,
            "sender_supplied": 0.08,
            "no_sensitive_action": 0.78
          },
          "confidence": 0.7
        }
      },
      "usage": {
        "input_tokens": 3282,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "7c42c112a4ec6beb8c817993ac5cd2b061f06ee3520f810c2f9c5453187214a1",
    "capturedAt": "2026-09-20T23:42:54.563Z",
    "elapsedMs": 132.2472089999992,
    "successfulAttemptElapsedMs": 130.6872080000012,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.23,
            "subject:0": 0.02,
            "body:1": 0.64,
            "body:0": 0.11
          },
          "confidence": 0.52
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "NONE": 0.01,
            "subject:0": 0,
            "body:1": 0.99,
            "body:0": 0
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 898,
        "output_tokens": 118
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 340.7387920000001,
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
    "seq": 178,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB037",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:54.224Z",
    "offsetMs": 0.8553749999991851
  },
  {
    "seq": 179,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB037",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:54.429Z",
    "offsetMs": 206.00104199999987,
    "elapsedMs": 204.55529100000058,
    "outcome": "success"
  },
  {
    "seq": 180,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB037",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:54.432Z",
    "offsetMs": 209.24616699999933
  },
  {
    "seq": 181,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB037",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:54.563Z",
    "offsetMs": 340.6069580000003,
    "elapsedMs": 130.6872080000012,
    "outcome": "success"
  },
  {
    "seq": 182,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB037",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:54.563Z",
    "offsetMs": 340.77649999999994,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ba58a20889a973b3798bd0abddd6231d02c8f1aa09ac3b95ebad6243eecc898e";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":179},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":181},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":182}} as const;
export const projectionSha256 = "e68c6d017eded0d5e8e34c1b5e2b251cdd228c351ae8996d4428495f25f0c5df";
