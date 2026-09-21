import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-333",
  "inputSha256": "51230a6b7dfe0867f4a6a2937c0596e135671331293e00aeaa349471f015bbba",
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
      "end": 110,
      "text": "___¡Hemos-bloqueado-tu cuenta!---El-5__de___may__de___2025, tus--fotos-y videos-serán-eliminados.--¡Haz--algo!"
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 110,
      "end": 113,
      "text": "___"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 110,
      "text": "___¡Hemos-bloqueado-tu cuenta!---El-5__de___may__de___2025, tus--fotos-y videos-serán-eliminados.--¡Haz--algo!"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 110,
      "end": 113,
      "text": "___"
    }
  ],
  "passA": {
    "requestSha256": "5a9bc671175144f3124e078f343c0438dfb68658f85aa5378777aeeafebfd85f",
    "capturedAt": "2026-09-20T23:45:44.155Z",
    "elapsedMs": 186.9147079999966,
    "successfulAttemptElapsedMs": 185.58112499999697,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.08
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.08
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.93
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.51
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.33
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.94,
            "educational_or_quoted": 0,
            "informational": 0.04,
            "mixed_or_unclear": 0.02
          },
          "confidence": 0.91
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.01,
            "no_sensitive_action": 0.96,
            "mixed_or_unknown": 0.03
          },
          "confidence": 0.95
        }
      },
      "usage": {
        "input_tokens": 3514,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "e529a01fe5f1214d67d53556ffd245b0a298c01ce133fff1d982aa9c01088317",
    "capturedAt": "2026-09-20T23:45:44.330Z",
    "elapsedMs": 173.3489580000023,
    "successfulAttemptElapsedMs": 171.70437500000116,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:0": 0.51,
            "subject:0": 0.49,
            "subject:1": 0,
            "body:1": 0,
            "NONE": 0
          },
          "confidence": 0.38
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0,
            "subject:0": 0.17,
            "subject:1": 0,
            "body:0": 0.2,
            "NONE": 0.63
          },
          "confidence": 0.53
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.02,
            "subject:0": 0.02,
            "subject:1": 0,
            "body:1": 0,
            "NONE": 0.96
          },
          "confidence": 0.95
        }
      },
      "usage": {
        "input_tokens": 1506,
        "output_tokens": 196
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 361.8495419999963,
  "derived": {
    "concern": "verify_first",
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "low_confidence",
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
    "seq": 1629,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-333",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:43.969Z",
    "offsetMs": 0.9124589999992168
  },
  {
    "seq": 1630,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-333",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:44.155Z",
    "offsetMs": 186.91575000000012,
    "elapsedMs": 185.58112499999697,
    "outcome": "success"
  },
  {
    "seq": 1631,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-333",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:44.157Z",
    "offsetMs": 189.294624999995
  },
  {
    "seq": 1632,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-333",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:44.330Z",
    "offsetMs": 361.63179200000013,
    "elapsedMs": 171.70437500000116,
    "outcome": "success"
  },
  {
    "seq": 1633,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-333",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:44.330Z",
    "offsetMs": 361.9001669999998,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "23dae8d8df761dae13ea96a6083f7b5ecfbcf3efa18fe84f5f99e0abf9d24177";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1630},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1632},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1633}} as const;
export const projectionSha256 = "3217e074ce6f1fc2fec45d920c3c0e6b8119ae68c60cbbdd8effd12f0df27ed7";
