import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-262",
  "inputSha256": "1fe59fe9d9d989237de0fa6db724d311963b6802ddb7842eb86d2e01f79ac720",
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
      "end": 22,
      "text": "Fwd: Equipo de cuentas"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 342,
      "text": "Estimado usuario tiene una notificacion importante de microsoft : laura.gomez@correo-seguro.com 05/12/25. - Su cuenta sera suspendida por actividad inusual, si desea cancelar esta suspencion por favor ingresa al siguiente enlace y valide: https://microsoft.seguridad.net/validar De no hacerlo su correo sera suspendido en las proximas horas. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 342,
      "end": 365,
      "text": "Equipo Microsoft 2025@."
    }
  ],
  "passA": {
    "requestSha256": "f53b8fb95714390dcf2b4b72889199a53ed881c543fd7714adc4da9550555a20",
    "capturedAt": "2026-09-22T03:53:25.084Z",
    "elapsedMs": 724.2180250000092,
    "successfulAttemptElapsedMs": 723.0369910000009,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.36
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.46
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.97
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.96
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.64
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
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
            "informational": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.97,
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "no_sensitive_action": 0.03
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 4981,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "357a011caf3e023dc7e695cde8fcd67a4f5941d5e724836f21eaad12b9bdd3f9",
    "capturedAt": "2026-09-22T03:53:25.883Z",
    "elapsedMs": 798.0731229999801,
    "successfulAttemptElapsedMs": 796.3651330000139,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0,
            "body:0": 0.29,
            "subject:0": 0,
            "NONE": 0.71
          },
          "confidence": 0.6
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0,
            "body:0": 0.25,
            "subject:0": 0,
            "NONE": 0.75
          },
          "confidence": 0.66
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0,
            "body:0": 1,
            "subject:0": 0,
            "NONE": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:1": 0.75,
            "body:0": 0.17,
            "subject:0": 0.08,
            "NONE": 0
          },
          "confidence": 0.66
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0,
            "body:0": 0.36,
            "subject:0": 0,
            "NONE": 0.64
          },
          "confidence": 0.51
        }
      },
      "usage": {
        "input_tokens": 2879,
        "output_tokens": 279
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1524.0450069999788,
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
        "segmentId": "body:0"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 1279,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-262",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:24.360Z",
    "offsetMs": 0.8929469999857247
  },
  {
    "seq": 1280,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-262",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:25.084Z",
    "offsetMs": 724.2172319999663,
    "elapsedMs": 723.0369910000009,
    "outcome": "success"
  },
  {
    "seq": 1281,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-262",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:25.086Z",
    "offsetMs": 726.8780779999797
  },
  {
    "seq": 1282,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-262",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:25.883Z",
    "offsetMs": 1523.782073999988,
    "elapsedMs": 796.3651330000139,
    "outcome": "success"
  },
  {
    "seq": 1283,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-262",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:53:25.883Z",
    "offsetMs": 1524.087344999949,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ed57400e81bdfc9fd85734e8fbfbeb473190e84c6680740d53f4b8eaf066f939";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1280},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1282},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1283}} as const;
export const projectionSha256 = "16dc49ea2c8d04fc795f0570a55d2fc6d53d41b50e72ed65c595eac4dbfe6eb3";
