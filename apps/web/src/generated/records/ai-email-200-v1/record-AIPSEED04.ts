import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "AIPSEED04",
  "inputSha256": "07632b8e467a8544247e6a3e21b8c38d14ce496bc614e25efc4a7a20588fabb0",
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
      "end": 48,
      "text": "Updated remittance instructions for invoice 1842"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 39,
      "text": "Thank you for your continued business. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 39,
      "end": 148,
      "text": "Please pay invoice 1842 to our replacement receiving account rather than the account on your purchase order. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 148,
      "end": 231,
      "text": "A banking review means our usual accounts team cannot confirm the change by phone. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 231,
      "end": 267,
      "text": "Reply here for the new wire details."
    },
    {
      "id": "userContext:0",
      "source": "userContext",
      "start": 0,
      "end": 45,
      "text": "We do have an open invoice with this vendor. "
    },
    {
      "id": "userContext:1",
      "source": "userContext",
      "start": 45,
      "end": 111,
      "text": "The payment destination change has not been independently checked."
    }
  ],
  "passA": {
    "requestSha256": "0f25630c4dbe43aa4c2f8f109e2be770c92ac347e647c5dc45c6748e17be7697",
    "capturedAt": "2026-09-20T23:43:47.404Z",
    "elapsedMs": 113.65562499999942,
    "successfulAttemptElapsedMs": 112.2419579999987,
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
          "noul": 0.75
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.97
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.96
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.11
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.74
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.81
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.07
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.14
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0.01,
            "sender_supplied": 0.99,
            "no_sensitive_action": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.98
        }
      },
      "usage": {
        "input_tokens": 3340,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "3f720e9e2ecd0c1fdec8cbce055eadc7c3b14f5f5701c85acd04302382a50cf3",
    "capturedAt": "2026-09-20T23:43:47.633Z",
    "elapsedMs": 226.69312499999796,
    "successfulAttemptElapsedMs": 224.8194169999988,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:1": 0.17,
            "body:3": 0.81,
            "NONE": 0.02,
            "body:2": 0,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 0.77
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 1,
            "body:3": 0,
            "body:0": 0,
            "body:2": 0,
            "subject:0": 0,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_unusual_payment_routing": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.99,
            "body:3": 0.01,
            "body:0": 0,
            "body:2": 0,
            "subject:0": 0,
            "NONE": 0
          },
          "confidence": 0.99
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:1": 0.07,
            "body:3": 0.03,
            "body:0": 0.01,
            "body:2": 0.79,
            "subject:0": 0.01,
            "NONE": 0.09
          },
          "confidence": 0.74
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:1": 0.01,
            "body:3": 0.14,
            "NONE": 0.02,
            "body:2": 0.83,
            "subject:0": 0,
            "body:0": 0
          },
          "confidence": 0.79
        }
      },
      "usage": {
        "input_tokens": 2184,
        "output_tokens": 375
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 343.33812499999476,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H3"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:3"
      },
      "payment_request": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "unusual_payment_routing": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "urgency_pressure": {
        "status": "not_requested",
        "segmentId": null
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:2"
      },
      "verification_bypass": {
        "status": "selected",
        "segmentId": "body:2"
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
      "avoid_sender_route",
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 941,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED04",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:47.291Z",
    "offsetMs": 0.9390409999978147
  },
  {
    "seq": 942,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED04",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:47.403Z",
    "offsetMs": 113.65604099999473,
    "elapsedMs": 112.2419579999987,
    "outcome": "success"
  },
  {
    "seq": 943,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED04",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:43:47.407Z",
    "offsetMs": 117.5515000000014
  },
  {
    "seq": 944,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED04",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:43:47.633Z",
    "offsetMs": 343.0412079999951,
    "elapsedMs": 224.8194169999988,
    "outcome": "success"
  },
  {
    "seq": 945,
    "captureSessionId": "90eef5dc-3792-4ab1-8520-5bd36a7737a0",
    "exampleId": "AIPSEED04",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:43:47.633Z",
    "offsetMs": 343.3984999999957,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "c980503e844af8572b78855a868867aabbea5e426cee21f94187bef770d63e7a";
export const replayAnchors = {"passA":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":942},"passB":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":944},"complete":{"captureSessionId":"90eef5dc-3792-4ab1-8520-5bd36a7737a0","seq":945}} as const;
export const projectionSha256 = "08280165c6354992ae8d94da3b3156e47b126b7df566130d6c12da12e2d9f1dd";
