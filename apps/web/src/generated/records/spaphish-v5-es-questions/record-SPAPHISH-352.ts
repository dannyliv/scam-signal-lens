import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-352",
  "inputSha256": "dd9caf3051aad33590c0c13c61414552deccddf40906489e6e73839096bee8f5",
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
      "end": 32,
      "text": "Cambio de contraseña obligatorio"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 62,
      "text": "¡Este mensaje fue enviado por alguien ajeno a la Universidad! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 62,
      "end": 243,
      "text": "**************************************************************************** IMPORTANTE - Por nuevas políticas de seguridad, le solicitamos que cambie su contraseña inmediatamente. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 243,
      "end": 353,
      "text": "Haga clic en el siguiente enlace para realizar el cambio: Cambie su contraseña Atentamente, Departamento de IT"
    }
  ],
  "passA": {
    "requestSha256": "be900cb9d94ae9cb11ac6261c9a2556e97cea5bb8d709d3396a115aeddad5628",
    "capturedAt": "2026-09-22T03:55:14.401Z",
    "elapsedMs": 611.1716590000433,
    "successfulAttemptElapsedMs": 609.8406860000105,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.42
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.24
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
          "noul": 0.89
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.96
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.35
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
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "sender_supplied": 0.97,
            "no_sensitive_action": 0.03
          },
          "confidence": 0.95
        }
      },
      "usage": {
        "input_tokens": 4937,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "a705a4b808b0bc98fc5e2e41cae409adda96fda1e7c3061a15129c6d2e2883d7",
    "capturedAt": "2026-09-22T03:55:14.960Z",
    "elapsedMs": 557.9305119999917,
    "successfulAttemptElapsedMs": 556.0329880000209,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.01,
            "body:0": 0,
            "body:1": 0.11,
            "body:2": 0.27,
            "NONE": 0.61
          },
          "confidence": 0.51
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:1": 0.02,
            "body:2": 0.04,
            "NONE": 0.94
          },
          "confidence": 0.93
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0.01,
            "body:0": 0,
            "body:1": 0.99,
            "body:2": 0,
            "NONE": 0
          },
          "confidence": 0.99
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0,
            "body:1": 0.01,
            "body:2": 0.99,
            "NONE": 0
          },
          "confidence": 0.98
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.67,
            "body:1": 0.03,
            "body:2": 0.28,
            "body:0": 0.02
          },
          "confidence": 0.59
        }
      },
      "usage": {
        "input_tokens": 2680,
        "output_tokens": 324
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1170.968938999984,
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
        "status": "none_selected",
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
        "segmentId": "body:1"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:2"
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
    "seq": 1722,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-352",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:13.791Z",
    "offsetMs": 1.0582460000296123
  },
  {
    "seq": 1723,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-352",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:14.401Z",
    "offsetMs": 611.1699539999827,
    "elapsedMs": 609.8406860000105,
    "outcome": "success"
  },
  {
    "seq": 1724,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-352",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:14.404Z",
    "offsetMs": 614.1629359999788
  },
  {
    "seq": 1725,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-352",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:14.960Z",
    "offsetMs": 1170.6760880000074,
    "elapsedMs": 556.0329880000209,
    "outcome": "success"
  },
  {
    "seq": 1726,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-352",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:14.961Z",
    "offsetMs": 1171.0116019999841,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "194600dd73a9c5eb493ea75357b2d299945d6d3db9ddc7582b38599860f02372";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1723},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1725},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1726}} as const;
export const projectionSha256 = "3c0164e54e7dc9efab80222c5961abf1346ee77a2187bd3d92eb7b55792b4fcd";
