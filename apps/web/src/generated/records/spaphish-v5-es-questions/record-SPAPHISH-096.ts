import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-096",
  "inputSha256": "8a4d90ffad0b2533a13ca2a341b8a9b9be5672681614dbc8cdb6f051f3115025",
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
      "end": 24,
      "text": "Encuesta de satisfaccion"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 14,
      "text": "¡Buenos días!\n"
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
      "end": 150,
      "text": "En el archivo adjunto encontrarán la dirección electrónica y el código de acceso para que puedan ingresar a la evaluación de servicio.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 150,
      "end": 151,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 151,
      "end": 213,
      "text": "Ahora está desactivada, pero estará lista a partir de mañana.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 213,
      "end": 214,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 214,
      "end": 238,
      "text": "Gracias por su atención."
    }
  ],
  "passA": {
    "requestSha256": "bcb2e09d3659e3d3205f8c783b7ac0e26f319c3f29401a56b86bdf37b38ea5af",
    "capturedAt": "2026-09-22T03:50:06.675Z",
    "elapsedMs": 611.3317359999928,
    "successfulAttemptElapsedMs": 610.3055669999885,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.24
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.1
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
          "noul": 0.26
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
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.05
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
            "active_request": 0.89,
            "informational": 0.11,
            "educational_or_quoted": 0
          },
          "confidence": 0.85
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.79,
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "no_sensitive_action": 0.2
          },
          "confidence": 0.73
        }
      },
      "usage": {
        "input_tokens": 4938,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "d4169bdd8215d0387e3a9821a6e3c6f5ea99a4c3b73bde467b8ed9563aaecbb5",
    "capturedAt": "2026-09-22T03:50:07.194Z",
    "elapsedMs": 517.9744730000093,
    "successfulAttemptElapsedMs": 517.0738179999898,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:4": 0,
            "body:3": 0,
            "NONE": 0.27,
            "body:1": 0,
            "body:5": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:2": 0.73,
            "body:6": 0
          },
          "confidence": 0.69
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:4": 0,
            "body:3": 0,
            "NONE": 0.72,
            "body:1": 0,
            "body:5": 0,
            "subject:0": 0.01,
            "body:0": 0,
            "body:2": 0.27,
            "body:6": 0
          },
          "confidence": 0.67
        }
      },
      "usage": {
        "input_tokens": 1395,
        "output_tokens": 204
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1130.805229000005,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "selected",
        "segmentId": "body:2"
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
    "seq": 464,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-096",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:06.064Z",
    "offsetMs": 0.6521720000018831
  },
  {
    "seq": 465,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-096",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:06.675Z",
    "offsetMs": 611.3331469999976,
    "elapsedMs": 610.3055669999885,
    "outcome": "success"
  },
  {
    "seq": 466,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-096",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:06.677Z",
    "offsetMs": 613.1566710000043
  },
  {
    "seq": 467,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-096",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:07.194Z",
    "offsetMs": 1130.5902709999937,
    "elapsedMs": 517.0738179999898,
    "outcome": "success"
  },
  {
    "seq": 468,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-096",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:07.194Z",
    "offsetMs": 1130.8453810000065,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "642b76ee68db15ed0c70660835ca265c52d1e20fd58a7eff68aa090d29333223";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":465},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":467},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":468}} as const;
export const projectionSha256 = "3c6133f516ba7e04a593292becdf1ad430ad9590630261291693356d7e6854de";
