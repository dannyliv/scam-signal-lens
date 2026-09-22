import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-303",
  "inputSha256": "3371493803c52fd6b094bba29e1b01fe3d2691623ce1c850b149e93e0b3027a8",
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
      "end": 52,
      "text": "¡Confirma tus pasos ahora para completar tu entrega!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 62,
      "text": "¡Este mensaje fue enviado por alguien ajeno a la Universidad! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 62,
      "end": 138,
      "text": "****************************************************************************"
    }
  ],
  "passA": {
    "requestSha256": "9f68ef60bae788c00d282a41f901a6f4b4d3311382a62ab193cd7b91dad898ed",
    "capturedAt": "2026-09-22T03:54:14.196Z",
    "elapsedMs": 704.9034909999464,
    "successfulAttemptElapsedMs": 703.6157679999596,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.16
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.19
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.08
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.08
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.72
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.33
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.25
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.16
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.16,
            "mixed_or_unclear": 0.03,
            "active_request": 0.8,
            "educational_or_quoted": 0.01
          },
          "confidence": 0.73
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.72,
            "mixed_or_unknown": 0.13,
            "sender_supplied": 0.15
          },
          "confidence": 0.63
        }
      },
      "usage": {
        "input_tokens": 4899,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "7c2a0737e6220480d9ddc91e3d1537e313af00ecd19003bb095eceeba9a4757f",
    "capturedAt": "2026-09-22T03:54:14.729Z",
    "elapsedMs": 531.160085999989,
    "successfulAttemptElapsedMs": 530.0808620000025,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "subject:0": 0.97,
            "body:1": 0,
            "NONE": 0.03,
            "body:0": 0
          },
          "confidence": 0.96
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.2,
            "body:1": 0,
            "NONE": 0.75,
            "body:0": 0.05
          },
          "confidence": 0.66
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.2,
            "body:1": 0,
            "NONE": 0.76,
            "body:0": 0.04
          },
          "confidence": 0.68
        }
      },
      "usage": {
        "input_tokens": 1518,
        "output_tokens": 169
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1237.6119300000137,
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
        "status": "selected",
        "segmentId": "subject:0"
      },
      "authority_claim": {
        "status": "none_selected",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "none_selected",
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1479,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-303",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:13.492Z",
    "offsetMs": 1.020944000047166
  },
  {
    "seq": 1480,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-303",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:14.196Z",
    "offsetMs": 704.9038690000307,
    "elapsedMs": 703.6157679999596,
    "outcome": "success"
  },
  {
    "seq": 1481,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-303",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:14.198Z",
    "offsetMs": 707.0138110000407
  },
  {
    "seq": 1482,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-303",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:14.728Z",
    "offsetMs": 1237.3843980000238,
    "elapsedMs": 530.0808620000025,
    "outcome": "success"
  },
  {
    "seq": 1483,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-303",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:14.729Z",
    "offsetMs": 1237.6561130000046,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6dc5fb1f2b01bbc7b08dda79f54f416d4a916a1c2495bb314d4dc2002d024833";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1480},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1482},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1483}} as const;
export const projectionSha256 = "f438066c077ac50694b89f5c12109c93e6bb3c4e66819c0c6ce9128eb2ae97c4";
