import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-444",
  "inputSha256": "3f4d5822000a89ee27b5da260bdfadae989229dd4524c1ff53bdaea90b8cd0e7",
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
      "end": 9,
      "text": "inmediato"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 34,
      "text": "Tengo un trato comercial para ti. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 34,
      "end": 144,
      "text": "Comuníquese con mi correo electrónico personal para obtener más detalles: ricardo.suarez@finanzasprivadas.com\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 144,
      "end": 158,
      "text": " Carlos Medina"
    }
  ],
  "passA": {
    "requestSha256": "a8ae335c3464fd3de752179cbbac6e53de7f357dec55c21a51e95399ea350092",
    "capturedAt": "2026-09-22T03:57:02.220Z",
    "elapsedMs": 665.5201189999934,
    "successfulAttemptElapsedMs": 663.9092709999532,
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
          "noul": 0.17
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.06
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.53
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.37
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.49
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.14
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.11
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.05
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
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.65,
            "no_sensitive_action": 0.35,
            "mixed_or_unknown": 0,
            "independently_established": 0
          },
          "confidence": 0.52
        }
      },
      "usage": {
        "input_tokens": 4915,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "65e9dc455b09429e0e25818cdf21465b31c986f385f3a80fa6efb7ceaf2b4ac8",
    "capturedAt": "2026-09-22T03:57:02.776Z",
    "elapsedMs": 553.9528600000776,
    "successfulAttemptElapsedMs": 551.887335000094,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:2": 0,
            "body:0": 0,
            "subject:0": 0.92,
            "body:1": 0.01,
            "NONE": 0.07
          },
          "confidence": 0.89
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.08,
            "body:0": 0.19,
            "subject:0": 0,
            "body:1": 0.25,
            "NONE": 0.48
          },
          "confidence": 0.36
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "body:0": 0,
            "subject:0": 0,
            "body:1": 0.73,
            "NONE": 0.27
          },
          "confidence": 0.66
        }
      },
      "usage": {
        "input_tokens": 1621,
        "output_tokens": 198
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1222.2026199999964,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 2179,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-444",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:01.556Z",
    "offsetMs": 1.2918269999790937
  },
  {
    "seq": 2180,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-444",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:02.220Z",
    "offsetMs": 665.5215190000599,
    "elapsedMs": 663.9092709999532,
    "outcome": "success"
  },
  {
    "seq": 2181,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-444",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:02.223Z",
    "offsetMs": 669.1934200000251
  },
  {
    "seq": 2182,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-444",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:02.776Z",
    "offsetMs": 1221.952493000077,
    "elapsedMs": 551.887335000094,
    "outcome": "success"
  },
  {
    "seq": 2183,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-444",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:02.777Z",
    "offsetMs": 1222.246143000084,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "83e008c2802bbd9dd6f747c3314f0cf17879a81d0fc3b8d459d02c9a22190168";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2180},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2182},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2183}} as const;
export const projectionSha256 = "5a72b9e15a6a55c2e68f94aac0d45f881bc49cc576dd5423394203415da811c5";
