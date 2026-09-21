import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-268",
  "inputSha256": "008846cca095f784c91b80feb5b5131e783b313821159c51a474d8cc7e041e7b",
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
      "end": 45,
      "text": " Confirmación: Nueva Televisor Samsung Qled !"
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 45,
      "end": 51,
      "text": "#PZ238"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 30,
      "text": "Encuesta Exclusiva de Walmart\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 30,
      "end": 42,
      "text": "Save money. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 42,
      "end": 55,
      "text": "Live better.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 55,
      "end": 138,
      "text": "¡Tiene la oportunidad única de recibir un televisor Samsung QLED totalmente nuevo!\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 138,
      "end": 243,
      "text": "Para participar, simplemente complete una breve encuesta y comparta su experiencia reciente con Walmart.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 243,
      "end": 308,
      "text": "Su opinión nos ayuda a mejorar continuamente nuestros servicios.\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 308,
      "end": 324,
      "text": "EMPEZAR ENCUESTA"
    }
  ],
  "passA": {
    "requestSha256": "550fd1d7ff45f85c22ad9511a868476f16955c6e9d57b3e529d35a14d132aecf",
    "capturedAt": "2026-09-20T23:45:22.141Z",
    "elapsedMs": 155.15037499999744,
    "successfulAttemptElapsedMs": 150.54366599999776,
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
          "noul": 0.16
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
          "noul": 0.08
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.8
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.08
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.08
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
            "mixed_or_unknown": 0.03,
            "independently_established": 0,
            "no_sensitive_action": 0.65,
            "sender_supplied": 0.32
          },
          "confidence": 0.53
        }
      },
      "usage": {
        "input_tokens": 3507,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "f48e10d4f075f5918647981026ae5f4b89edaccb351c030129c03ae388bfec40",
    "capturedAt": "2026-09-20T23:45:22.361Z",
    "elapsedMs": 219.01408300000185,
    "successfulAttemptElapsedMs": 217.41449999999895,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0,
            "body:5": 0.05,
            "NONE": 0.16,
            "body:6": 0,
            "subject:1": 0,
            "body:4": 0.05,
            "body:0": 0.73,
            "subject:0": 0.01,
            "body:2": 0,
            "body:3": 0
          },
          "confidence": 0.7
        }
      },
      "usage": {
        "input_tokens": 809,
        "output_tokens": 113
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 376.07012499999837,
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
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 1313,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-268",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:21.987Z",
    "offsetMs": 1.7770420000015292
  },
  {
    "seq": 1314,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-268",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:22.141Z",
    "offsetMs": 155.15133400000923,
    "elapsedMs": 150.54366599999776,
    "outcome": "success"
  },
  {
    "seq": 1315,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-268",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:22.143Z",
    "offsetMs": 157.74237500000163
  },
  {
    "seq": 1316,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-268",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:22.361Z",
    "offsetMs": 375.78391700000793,
    "elapsedMs": 217.41449999999895,
    "outcome": "success"
  },
  {
    "seq": 1317,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-268",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:22.362Z",
    "offsetMs": 376.1517920000042,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "084177757e22a26d01ab275e7068188991745ff144c8c72b140eb6f2a4b559ae";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1314},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1316},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1317}} as const;
export const projectionSha256 = "993ec463480ca43a0dddfe92db46ab03b2c1bef98d8d927533c62bd5fbd07f8d";
