import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-279",
  "inputSha256": "927bcebae5073223f299b7d78c26df94a87b394f58e3f26cfd5395fda5943bd6",
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
      "end": 52,
      "text": "Disney +: Notificación de renovación de suscripción."
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 15,
      "text": "[Disney+ Logo]\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 15,
      "end": 54,
      "text": "Meddelelse om fornyelse af abonnement.\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 54,
      "end": 99,
      "text": "Tu suscripción mensual a Disney ha expirado.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 99,
      "end": 100,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 100,
      "end": 223,
      "text": "Para seguir disfrutando de la música sin interrupciones, haga clic en el botón a continuación para renovar su suscripción.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 223,
      "end": 224,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 224,
      "end": 274,
      "text": "RENUEVA TU SUSCRIPCIÓN AHORA https://abre.ai/mGTJ\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 274,
      "end": 275,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 275,
      "end": 328,
      "text": "Descargar Disney para: iPhone, iPad, Android y otros\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 328,
      "end": 329,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 329,
      "end": 376,
      "text": "¡Gracias por ser parte de la comunidad Disney!\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 376,
      "end": 377,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 377,
      "end": 394,
      "text": "Equipo de Disney\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 394,
      "end": 395,
      "text": "\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 395,
      "end": 410,
      "text": "© 2025 Disney. "
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 410,
      "end": 430,
      "text": "All Rights Reserved."
    }
  ],
  "passA": {
    "requestSha256": "f8771b5dcc8873cd7f2c1d30331f06212770a1006431f4e9b4634e55ca7ef619",
    "capturedAt": "2026-09-22T03:53:45.910Z",
    "elapsedMs": 620.7142910000402,
    "successfulAttemptElapsedMs": 619.3279279999551,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.52
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.85
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.71
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.93
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.17
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
          "noul": 0.03
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
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0,
            "sender_supplied": 0.95,
            "no_sensitive_action": 0.05,
            "independently_established": 0
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 5014,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "a6120a497c8db278c02c1d006eabe60d03d3c2bdd0d4d00c5dc76bfaeb02c4ee",
    "capturedAt": "2026-09-22T03:53:46.490Z",
    "elapsedMs": 578.1303960000514,
    "successfulAttemptElapsedMs": 576.8516450000461,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "NONE": 0.32,
            "body:2": 0,
            "body:4": 0.05,
            "body:0": 0,
            "body:10": 0,
            "body:11": 0,
            "body:14": 0,
            "body:8": 0,
            "body:13": 0,
            "body:6": 0.63,
            "body:7": 0,
            "body:9": 0,
            "subject:0": 0,
            "body:1": 0,
            "body:5": 0,
            "body:15": 0,
            "body:12": 0,
            "body:3": 0
          },
          "confidence": 0.59
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "NONE": 0.03,
            "body:2": 0,
            "body:4": 0.16,
            "body:0": 0,
            "body:10": 0,
            "body:11": 0,
            "body:14": 0,
            "body:8": 0,
            "body:13": 0,
            "body:7": 0,
            "body:6": 0.81,
            "body:9": 0,
            "subject:0": 0,
            "body:1": 0,
            "body:12": 0,
            "body:15": 0,
            "body:5": 0,
            "body:3": 0
          },
          "confidence": 0.79
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "NONE": 0.01,
            "body:2": 0.16,
            "body:4": 0.35,
            "body:0": 0,
            "body:10": 0,
            "body:11": 0,
            "body:14": 0,
            "body:8": 0,
            "body:13": 0,
            "body:6": 0.48,
            "body:7": 0,
            "body:9": 0,
            "subject:0": 0,
            "body:1": 0,
            "body:5": 0,
            "body:15": 0,
            "body:12": 0,
            "body:3": 0
          },
          "confidence": 0.43
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:12",
          "probabilities": {
            "NONE": 0.01,
            "body:2": 0.01,
            "body:4": 0.04,
            "body:0": 0,
            "body:10": 0.01,
            "body:11": 0,
            "body:14": 0,
            "body:8": 0,
            "body:13": 0,
            "body:7": 0,
            "body:6": 0.01,
            "body:9": 0,
            "subject:0": 0.02,
            "body:1": 0,
            "body:12": 0.9,
            "body:15": 0,
            "body:5": 0,
            "body:3": 0
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 3287,
        "output_tokens": 753
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1201.0722059999825,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "payment_request": {
        "status": "selected",
        "segmentId": "body:6"
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
        "status": "selected",
        "segmentId": "body:12"
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
    "seq": 1363,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-279",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:45.290Z",
    "offsetMs": 0.9383890000171959
  },
  {
    "seq": 1364,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-279",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:45.910Z",
    "offsetMs": 620.7144710000139,
    "elapsedMs": 619.3279279999551,
    "outcome": "success"
  },
  {
    "seq": 1365,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-279",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:45.913Z",
    "offsetMs": 623.3947579999804
  },
  {
    "seq": 1366,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-279",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:46.490Z",
    "offsetMs": 1200.750245000003,
    "elapsedMs": 576.8516450000461,
    "outcome": "success"
  },
  {
    "seq": 1367,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-279",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:53:46.490Z",
    "offsetMs": 1201.1193530000164,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "3995d1c915172f9b820f34c8beeb5f4b23c099362513f0a7c11917f85eb6e6fa";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1364},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1366},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1367}} as const;
export const projectionSha256 = "7ed09573b97e32ce52cac9965ac726a0020667dd80c10d5f86def7f7805ced61";
