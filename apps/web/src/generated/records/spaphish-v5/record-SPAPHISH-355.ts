import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-355",
  "inputSha256": "a47ecc4cceab60b924081557faa05f086ec0b4e40780750d29dd156191e399b8",
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
      "end": 13,
      "text": "CORTE DE AGUA"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 26,
      "text": "Residentes, buenas noches\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 26,
      "end": 27,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 27,
      "end": 61,
      "text": "Por favor tomen sus precauciones.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 61,
      "end": 108,
      "text": "HIDROSUR SERVICIOS MUNICIPALES CORTARA EL AGUA\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 108,
      "end": 109,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 109,
      "end": 164,
      "text": "A partir de estos momentos y hasta mañana al medio día\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 164,
      "end": 195,
      "text": "adjunto aviso con los detalles\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 195,
      "end": 196,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 196,
      "end": 202,
      "text": "Atte.\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 202,
      "end": 211,
      "text": "María R. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 211,
      "end": 213,
      "text": "C."
    }
  ],
  "passA": {
    "requestSha256": "f1f6b6d082d8865f2dfef27d46ba7ae9f60b9fcd461be1b8280a311becb39f8a",
    "capturedAt": "2026-09-20T23:45:51.986Z",
    "elapsedMs": 145.4088330000086,
    "successfulAttemptElapsedMs": 143.47212500000023,
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
          "noul": 0.68
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.8
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
          "noul": 0.09
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0.48,
            "active_request": 0.52
          },
          "confidence": 0.35
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 1,
            "sender_supplied": 0,
            "mixed_or_unknown": 0,
            "independently_established": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3491,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "e0f674237f1384cdeab5b60dbb97c0a1cc302fd1f28879582c8e55dd0b978a54",
    "capturedAt": "2026-09-20T23:45:52.149Z",
    "elapsedMs": 161.97383300001093,
    "successfulAttemptElapsedMs": 159.86737500000163,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:10": 0,
            "subject:0": 0,
            "body:1": 0,
            "body:4": 0,
            "body:6": 0,
            "body:8": 0,
            "body:2": 0.31,
            "body:3": 0.02,
            "body:5": 0.63,
            "body:0": 0,
            "NONE": 0.04,
            "body:9": 0,
            "body:7": 0
          },
          "confidence": 0.58
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:10": 0,
            "subject:0": 0,
            "body:1": 0,
            "body:4": 0,
            "body:6": 0.02,
            "body:3": 0.89,
            "body:2": 0.01,
            "body:8": 0.01,
            "body:5": 0,
            "body:0": 0,
            "NONE": 0.04,
            "body:9": 0.03,
            "body:7": 0
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 1278,
        "output_tokens": 279
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 309.47595800001,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence"
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
        "status": "selected",
        "segmentId": "body:3"
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
    "seq": 1739,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-355",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:51.841Z",
    "offsetMs": 1.435417000000598
  },
  {
    "seq": 1740,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-355",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:51.985Z",
    "offsetMs": 145.4071249999979,
    "elapsedMs": 143.47212500000023,
    "outcome": "success"
  },
  {
    "seq": 1741,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-355",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:51.989Z",
    "offsetMs": 148.73520799999824
  },
  {
    "seq": 1742,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-355",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:52.149Z",
    "offsetMs": 309.2727920000034,
    "elapsedMs": 159.86737500000163,
    "outcome": "success"
  },
  {
    "seq": 1743,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-355",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:52.149Z",
    "offsetMs": 309.5207500000106,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "9077a119461d686bdc290a91583f8f1c50129e10c8ecf072b32c1802308f7c92";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1740},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1742},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1743}} as const;
export const projectionSha256 = "ead670c44a47dab809188ec9434762a9b8eadbad304ab290a32c1adce7bad188";
