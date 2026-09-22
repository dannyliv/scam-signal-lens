import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-045",
  "inputSha256": "e06945296e4c4b532f9ba0b7371f834bed5b2c3a0ab70d3994eb6f197adb2561",
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
      "end": 7,
      "text": "Plática"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 46,
      "text": "Te envío adjunto el Reconocimiento escaneado. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 46,
      "end": 203,
      "text": "La conferencia ya está visible en https://youtu.be/SYNTHETIC-VIDEO-ID https://youtu.be/SYNTHETIC-VIDEO-ID , además de la página de red social de la escuela.\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 203,
      "end": 204,
      "text": "\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 204,
      "end": 222,
      "text": "De nuevo GRACIAS!!"
    }
  ],
  "passA": {
    "requestSha256": "767f665486fc408663ccc22197651887d2bca0fe53dab3c852b65eef5db13fad",
    "capturedAt": "2026-09-22T03:49:05.401Z",
    "elapsedMs": 704.1940309999991,
    "successfulAttemptElapsedMs": 703.4341469999999,
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
          "noul": 0.03
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
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.25
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.02
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
            "active_request": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 1
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.01,
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "no_sensitive_action": 0.99
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 4942,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "33bad6118039fe80c9bf009ab6155c403680de54cccaffa46d8804f052251994",
    "capturedAt": "2026-09-22T03:49:05.936Z",
    "elapsedMs": 532.8928060000035,
    "successfulAttemptElapsedMs": 532.0531830000036,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:3": 0,
            "NONE": 0.7,
            "body:0": 0.05,
            "body:2": 0,
            "subject:0": 0,
            "body:1": 0.25
          },
          "confidence": 0.63
        }
      },
      "usage": {
        "input_tokens": 827,
        "output_tokens": 75
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1238.8668350000007,
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
    "seq": 217,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-045",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:04.697Z",
    "offsetMs": 0.46980299999995623
  },
  {
    "seq": 218,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-045",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:05.401Z",
    "offsetMs": 704.1942940000008,
    "elapsedMs": 703.4341469999999,
    "outcome": "success"
  },
  {
    "seq": 219,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-045",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:05.403Z",
    "offsetMs": 706.2086720000007
  },
  {
    "seq": 220,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-045",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:05.936Z",
    "offsetMs": 1238.696490000002,
    "elapsedMs": 532.0531830000036,
    "outcome": "success"
  },
  {
    "seq": 221,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-045",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:05.936Z",
    "offsetMs": 1238.9077279999983,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "55b4eadcfba2e37291a994d4e91363ee691b596018893ed4ad565f32c3429464";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":218},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":220},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":221}} as const;
export const projectionSha256 = "efeba2d5dd33d72785daf2c4a434fe7b982baf540aced6d314c64d70b84286d8";
