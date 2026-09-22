import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-298",
  "inputSha256": "0a3acda3258c1671a30598bad942ab3d971b7ad19f01da1beaf6b19e77e51b25",
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
      "end": 26,
      "text": "Su paquete ha sido enviado"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 44,
      "text": "Tienes (1) paquete esperando ser entregado. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 44,
      "end": 76,
      "text": "Confirma tu dirección de envío. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 76,
      "end": 98,
      "text": "Programe su entrega >>"
    }
  ],
  "passA": {
    "requestSha256": "9d9b0c88da7164a0a8f5bfec91766e1c5beea7c8c9a53e3fb7dfe6b71673138b",
    "capturedAt": "2026-09-22T03:54:07.777Z",
    "elapsedMs": 657.1771280000103,
    "successfulAttemptElapsedMs": 655.971373999957,
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
          "noul": 0.17
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.29
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.32
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.18
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.06
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
            "active_request": 1,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.55,
            "mixed_or_unknown": 0.04,
            "independently_established": 0,
            "no_sensitive_action": 0.41
          },
          "confidence": 0.4
        }
      },
      "usage": {
        "input_tokens": 4904,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "0838f484d3449c94e9299761b1b35727571b895473320b32c5c1714f60f9a28e",
    "capturedAt": "2026-09-22T03:54:08.380Z",
    "elapsedMs": 601.1607880000374,
    "successfulAttemptElapsedMs": 599.5631850000354,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.71,
            "subject:0": 0,
            "body:2": 0.18,
            "body:1": 0.09,
            "body:0": 0.02
          },
          "confidence": 0.63
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.92,
            "subject:0": 0.01,
            "body:2": 0.02,
            "body:1": 0.03,
            "body:0": 0.02
          },
          "confidence": 0.91
        }
      },
      "usage": {
        "input_tokens": 1155,
        "output_tokens": 129
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1260.4090259999502,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "none_selected",
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1454,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-298",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:07.120Z",
    "offsetMs": 0.8903539999737404
  },
  {
    "seq": 1455,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-298",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:07.777Z",
    "offsetMs": 657.1756149999565,
    "elapsedMs": 655.971373999957,
    "outcome": "success"
  },
  {
    "seq": 1456,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-298",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:07.780Z",
    "offsetMs": 660.2227879999555
  },
  {
    "seq": 1457,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-298",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:08.380Z",
    "offsetMs": 1260.1481239999994,
    "elapsedMs": 599.5631850000354,
    "outcome": "success"
  },
  {
    "seq": 1458,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-298",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:08.380Z",
    "offsetMs": 1260.4532059999765,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "2eea14e5f47959de7f04cc60d08949244afeab5380a5c2718d86861902f9d053";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1455},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1457},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1458}} as const;
export const projectionSha256 = "bcb577e62a5f5a898a73a7b85e8020154fc8be83e102f3dae1e36d5e9c6d574c";
