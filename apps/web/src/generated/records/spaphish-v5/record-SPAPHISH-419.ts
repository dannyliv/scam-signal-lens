import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-419",
  "inputSha256": "c26ac34195e8d0c2bfc03c5272b95116ccfd74900c86e86587a16d17c2c1998c",
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
      "end": 57,
      "text": "Pablito - Tienes (1) paquete esperando ser entregado 📦. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 57,
      "end": 106,
      "text": "Usa tu código para rastrearlo y recibirlo ___🚚. "
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 106,
      "end": 113,
      "text": "ID#7209"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 55,
      "text": "juanita - Tienes (1) paquete esperando ser entregado . "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 55,
      "end": 102,
      "text": "Usa tu código para rastrearlo y recibirlo ___. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 102,
      "end": 109,
      "text": "ID#7209"
    }
  ],
  "passA": {
    "requestSha256": "ab6f2f31925818d3e0f5c0ca0eb7a8d2800cfe897cc8ce6962213a2d69204373",
    "capturedAt": "2026-09-20T23:46:12.725Z",
    "elapsedMs": 156.50266700002248,
    "successfulAttemptElapsedMs": 154.20029199999408,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.23
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.1
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
          "noul": 0.18
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.29
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.18
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
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.11
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 0.97,
            "mixed_or_unclear": 0,
            "informational": 0.03
          },
          "confidence": 0.95
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.78,
            "sender_supplied": 0.15,
            "mixed_or_unknown": 0.07
          },
          "confidence": 0.71
        }
      },
      "usage": {
        "input_tokens": 3499,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "add16ea5448f920a4b9bd00656723cc2de018dff03ee5d61e4b28c07068a4911",
    "capturedAt": "2026-09-20T23:46:12.890Z",
    "elapsedMs": 163.10612499999115,
    "successfulAttemptElapsedMs": 160.24829099999624,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "subject:0": 0.01,
            "subject:2": 0.01,
            "subject:1": 0.27,
            "body:1": 0.2,
            "NONE": 0.51,
            "body:2": 0
          },
          "confidence": 0.42
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.02,
            "NONE": 0.94,
            "subject:2": 0.01,
            "subject:1": 0.02,
            "body:1": 0.01,
            "body:0": 0,
            "body:2": 0
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 1167,
        "output_tokens": 166
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 322.7864999999874,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "low_confidence",
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
    "seq": 2056,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-419",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:12.569Z",
    "offsetMs": 1.7553340000158641
  },
  {
    "seq": 2057,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-419",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:12.724Z",
    "offsetMs": 156.5030839999963,
    "elapsedMs": 154.20029199999408,
    "outcome": "success"
  },
  {
    "seq": 2058,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-419",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:12.729Z",
    "offsetMs": 161.52054200001294
  },
  {
    "seq": 2059,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-419",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:12.890Z",
    "offsetMs": 322.4402500000142,
    "elapsedMs": 160.24829099999624,
    "outcome": "success"
  },
  {
    "seq": 2060,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-419",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:12.890Z",
    "offsetMs": 322.88958399998955,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "494c582f6b4a040029863bf6c1c8b2a25d2f7e2f0d91fe2a92b1a20d7fc3d98b";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2057},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2059},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2060}} as const;
export const projectionSha256 = "c158ed0cc8a8d718315bc1adfa262385fb880607cba478b7e1a49bb9fd74f8d2";
