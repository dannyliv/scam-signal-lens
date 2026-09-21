import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-097",
  "inputSha256": "cbef0416b74b6ba6b5d499065ebb8d082e9768fbc9ea220bf1b64155f92fcba7",
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
      "end": 52,
      "text": "Gestionar en línea licencias de MATLAB y Mathematica"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 21,
      "text": "Hola a Todas y Todos\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 21,
      "end": 22,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 22,
      "end": 92,
      "text": "Por medio del presente correo, les hago llegar instrucciones de como \n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 92,
      "end": 162,
      "text": "gestionar licencias de MATLAB y Mathematica, ahora que están en casa.\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 162,
      "end": 163,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 163,
      "end": 213,
      "text": "Cualquier duda pueden escribirle a Lucia Crisanto\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 213,
      "end": 245,
      "text": "email: lucia.crisanto@MyOwnp.mx\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 245,
      "end": 246,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 246,
      "end": 247,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 247,
      "end": 253,
      "text": "Atte.\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 253,
      "end": 276,
      "text": "Miguel Martínez Arroyo\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 276,
      "end": 280,
      "text": "AGC\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 280,
      "end": 285,
      "text": "MyOwn"
    }
  ],
  "passA": {
    "requestSha256": "125a0d97b62292e94e3bc6bd9fb89ca20c13d7219eb61f99916ee3255d5d328f",
    "capturedAt": "2026-09-20T23:44:22.602Z",
    "elapsedMs": 142.6743749999987,
    "successfulAttemptElapsedMs": 140.8574579999986,
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
          "noul": 0.03
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
          "noul": 0.87
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.07
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.11
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0.12,
            "educational_or_quoted": 0,
            "informational": 0.87,
            "mixed_or_unclear": 0.01
          },
          "confidence": 0.83
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.8,
            "sender_supplied": 0.2,
            "independently_established": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.73
        }
      },
      "usage": {
        "input_tokens": 3519,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "5fef59fb8f3d4a60cb1fcbee94e1266719b5cf577d3cfb2b234af3095c97b0b2",
    "capturedAt": "2026-09-20T23:44:22.727Z",
    "elapsedMs": 123.28299999999945,
    "successfulAttemptElapsedMs": 121.58470899999884,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:11",
          "probabilities": {
            "body:5": 0.08,
            "subject:0": 0.01,
            "body:7": 0,
            "body:2": 0.05,
            "body:10": 0.05,
            "body:1": 0,
            "NONE": 0.04,
            "body:6": 0.01,
            "body:0": 0,
            "body:11": 0.56,
            "body:9": 0.01,
            "body:3": 0.01,
            "body:4": 0,
            "body:8": 0.01,
            "body:12": 0.17
          },
          "confidence": 0.53
        }
      },
      "usage": {
        "input_tokens": 903,
        "output_tokens": 162
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 268.90233400000216,
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
    "seq": 474,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-097",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:22.460Z",
    "offsetMs": 1.1598340000018652
  },
  {
    "seq": 475,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-097",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:22.601Z",
    "offsetMs": 142.67475000000195,
    "elapsedMs": 140.8574579999986,
    "outcome": "success"
  },
  {
    "seq": 476,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-097",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:22.605Z",
    "offsetMs": 146.4106670000001
  },
  {
    "seq": 477,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-097",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:22.727Z",
    "offsetMs": 268.65491699999984,
    "elapsedMs": 121.58470899999884,
    "outcome": "success"
  },
  {
    "seq": 478,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-097",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:22.727Z",
    "offsetMs": 268.9562499999993,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7a13555055cfa4d2f668d176b931f4aa2e88aa629b11a1c9d8667adbe01147d2";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":475},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":477},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":478}} as const;
export const projectionSha256 = "32565ad89f01a19b915d86f457e9fc04bbae3b3b6b93ca63f2cbf63110ad4c3c";
