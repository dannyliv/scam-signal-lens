import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIB017",
  "inputSha256": "45d10fd6128ca2a0bef3d46f570a25177f61f017a0a3d87eaf7518aba039d32f",
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
      "end": 37,
      "text": "Your explanation of benefits is ready"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 63,
      "text": "A new explanation of benefits is available for a recent visit. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 63,
      "end": 81,
      "text": "It is not a bill. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 81,
      "end": 143,
      "text": "Review it in the health plan portal if you would like details."
    }
  ],
  "passA": {
    "requestSha256": "d8a773cc3b2bbb4706c9a14b36840b7ee314f501275d76a7cb4b2ffa6b4ef1d4",
    "capturedAt": "2026-09-20T23:42:48.540Z",
    "elapsedMs": 150.79033300000083,
    "successfulAttemptElapsedMs": 149.80220800000006,
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
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.59
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
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 0.91,
            "active_request": 0.09,
            "educational_or_quoted": 0
          },
          "confidence": 0.87
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.26,
            "no_sensitive_action": 0.73,
            "sender_supplied": 0.01,
            "mixed_or_unknown": 0
          },
          "confidence": 0.64
        }
      },
      "usage": {
        "input_tokens": 3293,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "6e046efe3c955f124f383917f064aed5a781da6fae928d3c51558ba1618cbca0",
    "capturedAt": "2026-09-20T23:42:48.687Z",
    "elapsedMs": 145.34370899999976,
    "successfulAttemptElapsedMs": 143.6937909999997,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.08,
            "body:0": 0.05,
            "NONE": 0.56,
            "body:1": 0.02,
            "body:2": 0.29
          },
          "confidence": 0.44
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "NONE": 0,
            "body:1": 0,
            "body:2": 1
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 959,
        "output_tokens": 134
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 298.4616670000005,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
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
        "segmentId": "body:2"
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
    "seq": 79,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB017",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:48.389Z",
    "offsetMs": 0.5627080000003843
  },
  {
    "seq": 80,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB017",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:48.540Z",
    "offsetMs": 150.79125000000022,
    "elapsedMs": 149.80220800000006,
    "outcome": "success"
  },
  {
    "seq": 81,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB017",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:42:48.543Z",
    "offsetMs": 153.69012500000008
  },
  {
    "seq": 82,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB017",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:42:48.687Z",
    "offsetMs": 298.15179200000057,
    "elapsedMs": 143.6937909999997,
    "outcome": "success"
  },
  {
    "seq": 83,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIB017",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:42:48.687Z",
    "offsetMs": 298.5448750000005,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "51e03db60b39dee3c31ccca3305115d85317b94690868d8847b273ef4e8d1fac";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":80},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":82},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":83}} as const;
export const projectionSha256 = "7e0333f68d576664c68a1877b93ca5b61bc5b62645e9a2324906c043a703159a";
