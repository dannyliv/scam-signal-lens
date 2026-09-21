import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-416",
  "inputSha256": "f2df9b769b44d7a23c13235b1f449129ab3a891995980c94729a8c8b0604d080",
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
      "end": 27,
      "text": "carta de constancia laboral"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 49,
      "text": "Esto es lo que me hace falta que me llenen allá. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 49,
      "end": 128,
      "text": "Puede ser cualquier Carlos, Andrea, Fernando... el que más accesible tú creas. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 128,
      "end": 232,
      "text": "Lléname los datos de contacto del Jefe Supremo que firme eso y me la mandas escaneada chula para atrás. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 232,
      "end": 347,
      "text": "Si hay algún formato de de carga en hojas membretadas, tanto mejor... y si le ponen un cuño uff más mejor todavía.\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 347,
      "end": 348,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 348,
      "end": 361,
      "text": "Gracias viejo"
    }
  ],
  "passA": {
    "requestSha256": "17a87c8ef88f0ce99463d40f53d3dbb43df8370cf0cdc2d3a8a56de66635c598",
    "capturedAt": "2026-09-20T23:46:11.536Z",
    "elapsedMs": 175.22108300001128,
    "successfulAttemptElapsedMs": 172.6057499999879,
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
          "noul": 0.18
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
          "noul": 0.07
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.48
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.44
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.08
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.62,
            "independently_established": 0.07,
            "mixed_or_unknown": 0.07,
            "sender_supplied": 0.24
          },
          "confidence": 0.48
        }
      },
      "usage": {
        "input_tokens": 3522,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "d35eee67d555b04ab029a0bae67312fedba720a7e4a01e45a85252ad0f6195f0",
    "capturedAt": "2026-09-20T23:46:11.753Z",
    "elapsedMs": 216.05541600001743,
    "successfulAttemptElapsedMs": 214.39087499998277,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:0": 0,
            "body:2": 0.56,
            "NONE": 0.03,
            "body:4": 0,
            "body:5": 0,
            "subject:0": 0.3,
            "body:3": 0.1,
            "body:1": 0.01
          },
          "confidence": 0.48
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0,
            "body:2": 0.04,
            "NONE": 0.4,
            "body:4": 0,
            "body:5": 0,
            "subject:0": 0,
            "body:3": 0.01,
            "body:1": 0.55
          },
          "confidence": 0.48
        }
      },
      "usage": {
        "input_tokens": 1244,
        "output_tokens": 189
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 392.5946249999979,
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
        "status": "low_confidence",
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
    "seq": 2041,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-416",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:11.363Z",
    "offsetMs": 1.994708999991417
  },
  {
    "seq": 2042,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-416",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:11.536Z",
    "offsetMs": 175.22837500000605,
    "elapsedMs": 172.6057499999879,
    "outcome": "success"
  },
  {
    "seq": 2043,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-416",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:11.538Z",
    "offsetMs": 177.36249999998836
  },
  {
    "seq": 2044,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-416",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:11.753Z",
    "offsetMs": 392.36516700001084,
    "elapsedMs": 214.39087499998277,
    "outcome": "success"
  },
  {
    "seq": 2045,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-416",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:11.754Z",
    "offsetMs": 392.6514169999864,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "293bc571c3788a5fc330e9dfe78d5b1e2a54b3fd5f1129b3ef228d8346417080";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2042},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2044},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2045}} as const;
export const projectionSha256 = "a326d0fcec4d84a7bfaf11db576a1a1f75d96b88f76cb4bab8cddf8feaa57888";
