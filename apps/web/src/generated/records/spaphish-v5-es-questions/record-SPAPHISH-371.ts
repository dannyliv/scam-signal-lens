import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-371",
  "inputSha256": "d05fd58ba3ceafbe93f12869c801349774d05cb1eaae5fd85770edca1d99eede",
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
      "end": 31,
      "text": "Recuperar contraseña de Cinemex"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 25,
      "text": "¡Recupera tu contraseña! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 25,
      "end": 199,
      "text": "Para recuperar tu contraseña haz click en el siguiente botón Recuperar contraseña Si no puedes ver el botón, haz click en este enlace: //cineplanet.net/restablecer-password/?"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 199,
      "end": 279,
      "text": "code=8c2a4f6d3e778198f0ef4cf9855a07a9 Aviso de Privacidad Términos y Condiciones"
    }
  ],
  "passA": {
    "requestSha256": "c5fb7de936971ad5d9f9030ebd09c547c6c1b082603fa905bde3d11fd9aa0333",
    "capturedAt": "2026-09-22T03:55:36.503Z",
    "elapsedMs": 577.671147999994,
    "successfulAttemptElapsedMs": 576.4719499999774,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.28
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.18
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
          "noul": 0.1
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.69
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.25
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
            "active_request": 1,
            "informational": 0,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.94,
            "no_sensitive_action": 0.06,
            "mixed_or_unknown": 0
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 4970,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "4b650771c94adb63ee3223143593743617749bc0e77c2fd2c29986c0705fdf9b",
    "capturedAt": "2026-09-22T03:55:37.063Z",
    "elapsedMs": 558.5658260000055,
    "successfulAttemptElapsedMs": 520.4663569999975,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.22,
            "subject:0": 0.01,
            "body:0": 0.02,
            "body:2": 0.09,
            "NONE": 0.66
          },
          "confidence": 0.59
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.06,
            "subject:0": 0.34,
            "body:0": 0.02,
            "body:2": 0.01,
            "NONE": 0.57
          },
          "confidence": 0.46
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.17,
            "NONE": 0.83,
            "body:0": 0,
            "body:2": 0,
            "subject:0": 0
          },
          "confidence": 0.78
        }
      },
      "usage": {
        "input_tokens": 1879,
        "output_tokens": 195
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1138.3627349999733,
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
    "seq": 1816,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-371",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:35.925Z",
    "offsetMs": 0.8990299999713898
  },
  {
    "seq": 1817,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-371",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:36.502Z",
    "offsetMs": 577.6713659999659,
    "elapsedMs": 576.4719499999774,
    "outcome": "success"
  },
  {
    "seq": 1818,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-371",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:36.505Z",
    "offsetMs": 580.6790219999966
  },
  {
    "seq": 1819,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-371",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:37.063Z",
    "offsetMs": 1138.1085369999637,
    "elapsedMs": 520.4663569999975,
    "outcome": "success"
  },
  {
    "seq": 1820,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-371",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:37.063Z",
    "offsetMs": 1138.408598000009,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "2b25f7cbbb7633500013a42bf72111ccc63dec5d411d87dd2803769ffcbc2fbb";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1817},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1819},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1820}} as const;
export const projectionSha256 = "08c2834d6f3ded2cc4b14ca927a6fcc702afd86fd4d2afa8d22c3a9d45eca5ab";
