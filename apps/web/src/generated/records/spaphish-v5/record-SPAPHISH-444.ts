import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-444",
  "inputSha256": "3f4d5822000a89ee27b5da260bdfadae989229dd4524c1ff53bdaea90b8cd0e7",
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
    "requestSha256": "20ceb30acf1a83088cad98f735ca0ac265e031c0130af19349c9c29fa169edcc",
    "capturedAt": "2026-09-20T23:46:21.268Z",
    "elapsedMs": 137.26845900001354,
    "successfulAttemptElapsedMs": 135.13958299998194,
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
          "noul": 0.12
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
          "noul": 0.35
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.17
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.45
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.11
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.08
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
            "mixed_or_unclear": 0,
            "informational": 0,
            "educational_or_quoted": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.66,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.34
          },
          "confidence": 0.55
        }
      },
      "usage": {
        "input_tokens": 3465,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "94f7ada74a35abcc7768643f8273c245ece42be7fc7d9c9f68b2fbe6277ab808",
    "capturedAt": "2026-09-20T23:46:21.392Z",
    "elapsedMs": 122.02374999999302,
    "successfulAttemptElapsedMs": 119.82366599998204,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:0": 0,
            "NONE": 0.12,
            "subject:0": 0.87,
            "body:2": 0,
            "body:1": 0.01
          },
          "confidence": 0.84
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "NONE": 0.34,
            "subject:0": 0,
            "body:2": 0,
            "body:1": 0.66
          },
          "confidence": 0.57
        }
      },
      "usage": {
        "input_tokens": 983,
        "output_tokens": 135
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 261.4461660000088,
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
    "seq": 2180,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-444",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:21.132Z",
    "offsetMs": 1.6332080000138376
  },
  {
    "seq": 2181,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-444",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:21.267Z",
    "offsetMs": 137.26987499999814,
    "elapsedMs": 135.13958299998194,
    "outcome": "success"
  },
  {
    "seq": 2182,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-444",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:21.271Z",
    "offsetMs": 140.73066600001766
  },
  {
    "seq": 2183,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-444",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:21.391Z",
    "offsetMs": 261.13208300000406,
    "elapsedMs": 119.82366599998204,
    "outcome": "success"
  },
  {
    "seq": 2184,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-444",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:21.392Z",
    "offsetMs": 261.527625000017,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "5d75a978f4f459ef903b1e3812d1ec865969bf30c176636e505b2faac1e3a332";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2181},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2183},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2184}} as const;
export const projectionSha256 = "79d7781852939c97822d2d1cb23bbb689307d311298d4212e70f06e152181cb6";
