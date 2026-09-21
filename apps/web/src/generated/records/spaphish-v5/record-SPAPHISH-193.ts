import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-193",
  "inputSha256": "0b44884e11e40e2d967024929811e6dc05aaea5b1dc42df77dab164425ceae59",
  "questionBundleSha256": "c38d45be636041965e7e231cffdf2831ec083c7780ea13a94086fdf24bf7bc08",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "source_messages",
  "policySha256": "3435135d6058476d4262ecbc936abf95af4993b455dfab35adc8b17f3fe6ad6a",
  "requestedModel": "jev-1.13.0",
  "segments": [
    {
      "id": "subject:0",
      "source": "subject",
      "start": 0,
      "end": 77,
      "text": "🚨 Alerta de 24 horas: última oportunidad para obtener protección Ultra Drive"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 49,
      "text": "Ricardo, Tus archivos podrian necesitar espacio! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 49,
      "end": 61,
      "text": "Actualizalo!"
    }
  ],
  "passA": {
    "requestSha256": "c7a27c584d20b5d8295f0882505370dff54fb39f58fd45f1f3a8427e454148d4",
    "capturedAt": "2026-09-20T23:44:54.052Z",
    "elapsedMs": 186.88545799999702,
    "successfulAttemptElapsedMs": 185.61849999999686,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.04
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.07
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.28
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.95
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.17
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.19
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.07
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.12,
            "independently_established": 0,
            "no_sensitive_action": 0.83,
            "sender_supplied": 0.05
          },
          "confidence": 0.77
        }
      },
      "usage": {
        "input_tokens": 3457,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "bc2b8424b00cd342f66282cdbde411bd4fd43f4bf313a505a8915c9155659687",
    "capturedAt": "2026-09-20T23:44:54.963Z",
    "elapsedMs": 909.1856659999976,
    "successfulAttemptElapsedMs": 907.456207999996,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.89,
            "body:1": 0.05,
            "body:0": 0,
            "subject:0": 0.06
          },
          "confidence": 0.84
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "NONE": 0,
            "body:1": 0,
            "body:0": 0,
            "subject:0": 1
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 932,
        "output_tokens": 111
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1098.2920830000003,
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
        "status": "none_selected",
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
    "seq": 942,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-193",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:53.865Z",
    "offsetMs": 0.8374170000024606
  },
  {
    "seq": 943,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-193",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:54.051Z",
    "offsetMs": 186.88637500000186,
    "elapsedMs": 185.61849999999686,
    "outcome": "success"
  },
  {
    "seq": 944,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-193",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:54.054Z",
    "offsetMs": 189.98179199999868
  },
  {
    "seq": 945,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-193",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:54.963Z",
    "offsetMs": 1098.0537079999995,
    "elapsedMs": 907.456207999996,
    "outcome": "success"
  },
  {
    "seq": 946,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-193",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:54.963Z",
    "offsetMs": 1098.3530830000018,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "62c9725e2e1ea59bbce47fe27edad16720803debec6035e95f308be8320f802e";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":943},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":945},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":946}} as const;
export const projectionSha256 = "273438088318279df1d266d41cbc55e829c4d3d7f977a6cfc90fac2f0e8b0fb7";
