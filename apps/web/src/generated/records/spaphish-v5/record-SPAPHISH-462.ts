import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-462",
  "inputSha256": "a1981aa14a08e94adb7f35ffc6a9d3954b66c836b5f1ed860bf27704b5bd0543",
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
      "end": 7,
      "text": "mejorar"
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
      "text": "Ricardo Suarez"
    }
  ],
  "passA": {
    "requestSha256": "b731d278f8299e0e81acc845960bdbd7483414de26b3871712d52b7f04edd9d5",
    "capturedAt": "2026-09-20T23:46:26.769Z",
    "elapsedMs": 118.21333400000003,
    "successfulAttemptElapsedMs": 116.01908399999957,
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
          "noul": 0.1
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.06
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.06
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.2
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.46
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.12
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.07
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.04
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
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.35,
            "sender_supplied": 0.65,
            "mixed_or_unknown": 0
          },
          "confidence": 0.52
        }
      },
      "usage": {
        "input_tokens": 3467,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "a22eb95a46755a4045380df9b18e868672c611210675a7d12c1472b97874fc66",
    "capturedAt": "2026-09-20T23:46:27.023Z",
    "elapsedMs": 252.80858400001307,
    "successfulAttemptElapsedMs": 250.89770800000406,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.65,
            "NONE": 0.35,
            "body:0": 0,
            "body:2": 0,
            "subject:0": 0
          },
          "confidence": 0.56
        }
      },
      "usage": {
        "input_tokens": 663,
        "output_tokens": 70
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 372.46562500001164,
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
        "status": "not_requested",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "low_confidence",
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
    "seq": 2269,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-462",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:26.653Z",
    "offsetMs": 1.698999999993248
  },
  {
    "seq": 2270,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-462",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:26.769Z",
    "offsetMs": 118.2160000000149,
    "elapsedMs": 116.01908399999957,
    "outcome": "success"
  },
  {
    "seq": 2271,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-462",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:26.772Z",
    "offsetMs": 120.78495900001144
  },
  {
    "seq": 2272,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-462",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:27.023Z",
    "offsetMs": 372.24854200001573,
    "elapsedMs": 250.89770800000406,
    "outcome": "success"
  },
  {
    "seq": 2273,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-462",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:27.023Z",
    "offsetMs": 372.53595900000073,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ca5e2d6a09b5e61f342320e1623baf22a419f1f2feeeeab5ee0a22b2388fa92c";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2270},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2272},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2273}} as const;
export const projectionSha256 = "a4a94de6fcf8a5c0741858ccca4e2ee4283723af631a04cda6ca73fcfd9b33fc";
