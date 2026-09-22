import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-268",
  "inputSha256": "008846cca095f784c91b80feb5b5131e783b313821159c51a474d8cc7e041e7b",
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
    "requestSha256": "8dadf36ca6f2e7d5ce7e6006f2f2f012b4275b4b0113082d7ddef6fc998a85f5",
    "capturedAt": "2026-09-22T03:53:32.752Z",
    "elapsedMs": 683.5271829999983,
    "successfulAttemptElapsedMs": 682.2663199999952,
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
          "noul": 0.18
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.1
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.76
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.07
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.07
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.12
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "educational_or_quoted": 0,
            "active_request": 1,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.34,
            "independently_established": 0,
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.65
          },
          "confidence": 0.52
        }
      },
      "usage": {
        "input_tokens": 4957,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "4c49617ad076500a2f6d0a1a72ba0749bf9734ee45cb0acf12876faa02426aef",
    "capturedAt": "2026-09-22T03:53:33.364Z",
    "elapsedMs": 608.1403899999568,
    "successfulAttemptElapsedMs": 607.0317519999808,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:3": 0.01,
            "body:1": 0,
            "body:6": 0.01,
            "body:2": 0,
            "subject:1": 0,
            "NONE": 0.38,
            "body:0": 0.5,
            "subject:0": 0.01,
            "body:4": 0.05,
            "body:5": 0.04
          },
          "confidence": 0.46
        }
      },
      "usage": {
        "input_tokens": 909,
        "output_tokens": 113
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1295.2787580000004,
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
    "seq": 1309,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-268",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:32.069Z",
    "offsetMs": 0.8818499999470077
  },
  {
    "seq": 1310,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-268",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:32.752Z",
    "offsetMs": 683.527866999968,
    "elapsedMs": 682.2663199999952,
    "outcome": "success"
  },
  {
    "seq": 1311,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-268",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:32.756Z",
    "offsetMs": 687.6223929999978
  },
  {
    "seq": 1312,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-268",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:33.364Z",
    "offsetMs": 1295.0506290000048,
    "elapsedMs": 607.0317519999808,
    "outcome": "success"
  },
  {
    "seq": 1313,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-268",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:53:33.364Z",
    "offsetMs": 1295.3485050000018,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "c5512202d3b821fedc208f91e944b96d91fca2df963797fd61a8b9881514a1f7";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1310},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1312},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1313}} as const;
export const projectionSha256 = "3487d120f0c6e671f0673c44efe8edd8fe23742ae13a8958cebeb9f83671be9a";
