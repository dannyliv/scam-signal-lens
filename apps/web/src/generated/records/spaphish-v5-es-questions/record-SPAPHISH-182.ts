import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-182",
  "inputSha256": "61fbf6e94035312608c8c99b485f752fb1173ad88cb386c3c2431580a5019356",
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
      "end": 56,
      "text": "Missxtranger, Has ganado una Caja Misteriosa de Amazon🎉"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 47,
      "text": "amazon Caja Misteriosa De Amazon ¡Felicidades! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 47,
      "end": 125,
      "text": "¡Has sido elegido para participar en nuestro programa de fidelización GRATIS! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 125,
      "end": 140,
      "text": "confirma ahora!"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 140,
      "end": 196,
      "text": "darse de baja El anunciante no gestiona su suscripción. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 196,
      "end": 335,
      "text": "Si prefieres no recibir más comunicaciones, por favor date de baja aquí Or write to: 128 Willow Crest Rd Ste 402#5912, Northwood, VT, 05744"
    }
  ],
  "passA": {
    "requestSha256": "d45f8e45653be21eda0ef0ff59702bc887cee2f1a4707c33f87af7154cecceab",
    "capturedAt": "2026-09-22T03:51:48.945Z",
    "elapsedMs": 622.5233420000004,
    "successfulAttemptElapsedMs": 621.4507540000195,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.06
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.2
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.1
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.4
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.44
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.23
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.2
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.32
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.05
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
            "informational": 0,
            "mixed_or_unclear": 0.01,
            "active_request": 0.99
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.53,
            "mixed_or_unknown": 0.02,
            "independently_established": 0,
            "no_sensitive_action": 0.45
          },
          "confidence": 0.37
        }
      },
      "usage": {
        "input_tokens": 4987,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "f61a0272a39382f4309eef255a63783b474a743a477ccb1509d6414d740069e0",
    "capturedAt": "2026-09-22T03:51:49.480Z",
    "elapsedMs": 533.4771349999937,
    "successfulAttemptElapsedMs": 531.5841079999809,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "subject:0": 0,
            "body:3": 0,
            "body:0": 0,
            "body:2": 0.94,
            "body:1": 0,
            "NONE": 0.06,
            "body:4": 0
          },
          "confidence": 0.93
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.01,
            "body:3": 0.07,
            "body:0": 0.05,
            "body:2": 0.02,
            "body:1": 0.28,
            "NONE": 0.54,
            "body:4": 0.03
          },
          "confidence": 0.47
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:3": 0.01,
            "body:0": 0,
            "body:2": 0.11,
            "body:1": 0,
            "NONE": 0.87,
            "body:4": 0.01
          },
          "confidence": 0.84
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.16,
            "body:3": 0,
            "body:0": 0.02,
            "body:2": 0.01,
            "NONE": 0.73,
            "body:1": 0.08,
            "body:4": 0
          },
          "confidence": 0.67
        }
      },
      "usage": {
        "input_tokens": 2532,
        "output_tokens": 331
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1157.8717279999983,
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
        "segmentId": "body:2"
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
        "status": "none_selected",
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
    "seq": 885,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-182",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:48.323Z",
    "offsetMs": 0.7221089999948163
  },
  {
    "seq": 886,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-182",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:48.945Z",
    "offsetMs": 622.5228150000039,
    "elapsedMs": 621.4507540000195,
    "outcome": "success"
  },
  {
    "seq": 887,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-182",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:48.948Z",
    "offsetMs": 625.5991759999888
  },
  {
    "seq": 888,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-182",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:49.480Z",
    "offsetMs": 1157.5856510000012,
    "elapsedMs": 531.5841079999809,
    "outcome": "success"
  },
  {
    "seq": 889,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-182",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:51:49.480Z",
    "offsetMs": 1157.9178949999914,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "36ad7b0625d0ffa71e17c2898585d80ee9790c53a05b98b3ab0a28a1e50f73a7";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":886},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":888},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":889}} as const;
export const projectionSha256 = "91d7d3286a01f2b5714930b98ab73cde885a27947864bb83395ea5cc3859ba55";
