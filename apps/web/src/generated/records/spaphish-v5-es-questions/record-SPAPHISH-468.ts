import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-468",
  "inputSha256": "79c1fb80b3047a0ee32ec9c9844a4d8fd686552f520e8951f274ffd385da9c23",
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
      "end": 29,
      "text": "Recomendaciones nutricionales"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 14,
      "text": "Buenas tardes\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 14,
      "end": 15,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 15,
      "end": 75,
      "text": "Le envío información relacionada a su alimentación, saludos\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 75,
      "end": 76,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 76,
      "end": 85,
      "text": "M. en A. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 85,
      "end": 168,
      "text": "Sofía Ríos Durán Departamento de Nutrición Hospital de Especialidades Central S.C. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 168,
      "end": 183,
      "text": "Ext 2104 y 2105"
    }
  ],
  "passA": {
    "requestSha256": "ee79d71e0e4bc3ea43774c5069ccdecbb70208743158d206805eea51073c447d",
    "capturedAt": "2026-09-22T03:57:30.050Z",
    "elapsedMs": 602.1137089999393,
    "successfulAttemptElapsedMs": 600.484570999979,
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
          "noul": 0.02
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
          "noul": 0.02
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.02
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.18
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.99,
            "mixed_or_unknown": 0,
            "sender_supplied": 0.01,
            "independently_established": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 4939,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "d506c117de7106c81495c1adc7ca3d2fdb3ef4065cac27fe6ce7a86bc48d0b27",
    "capturedAt": "2026-09-22T03:57:30.567Z",
    "elapsedMs": 515.8231050000759,
    "successfulAttemptElapsedMs": 514.243730999995,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:6": 0.01,
            "subject:0": 0,
            "body:4": 0.01,
            "body:0": 0,
            "body:3": 0,
            "body:1": 0,
            "body:5": 0.9,
            "body:2": 0.02,
            "NONE": 0.06
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 864,
        "output_tokens": 104
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1119.325472000055,
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
        "status": "selected",
        "segmentId": "body:5"
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
    "seq": 2298,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-468",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:29.449Z",
    "offsetMs": 1.4081759999971837
  },
  {
    "seq": 2299,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-468",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:30.050Z",
    "offsetMs": 602.1153790000826,
    "elapsedMs": 600.484570999979,
    "outcome": "success"
  },
  {
    "seq": 2300,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-468",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:30.052Z",
    "offsetMs": 604.5825290000066
  },
  {
    "seq": 2301,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-468",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:30.567Z",
    "offsetMs": 1119.1646080000792,
    "elapsedMs": 514.243730999995,
    "outcome": "success"
  },
  {
    "seq": 2302,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-468",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:30.567Z",
    "offsetMs": 1119.3635050000157,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "8959ae05573ea28202042a49112b4c96ff17d5f830df49e27a632c9c95b821cc";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2299},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2301},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2302}} as const;
export const projectionSha256 = "4cf1c2ffb7268222eb85596b8c029d90238697f312459574412000b254e40f19";
