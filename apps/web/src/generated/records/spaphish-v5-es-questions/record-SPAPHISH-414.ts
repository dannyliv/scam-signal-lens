import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-414",
  "inputSha256": "f049fb7e09f6173e34ff8c6c76eb549e62dc4f6e84cec8a83ecf427e9b22fc52",
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
      "end": 30,
      "text": "Error en la reunión programada"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 38,
      "text": "Hola, mariana.estrada@corpmailnet.com\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 38,
      "end": 85,
      "text": ": Hemos encontrado un problema con su reunión. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 85,
      "end": 128,
      "text": "Revise sus configuraciones a continuación:\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 128,
      "end": 153,
      "text": "Revisar la configuración\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 153,
      "end": 215,
      "text": "Revise su configuración para ingresar o rechazar una reunión.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 215,
      "end": 240,
      "text": "Gracias por elegir Zoom.\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 240,
      "end": 241,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 241,
      "end": 258,
      "text": "El equipo de Zoom"
    }
  ],
  "passA": {
    "requestSha256": "e5622a2910e1268553eb1685ede981e930eac7f19085aaa28aad430c3cd17def",
    "capturedAt": "2026-09-22T03:56:26.634Z",
    "elapsedMs": 578.5387830000254,
    "successfulAttemptElapsedMs": 576.6159190000035,
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
          "noul": 0.06
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.15
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.11
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.09
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "active_request": 0.97,
            "informational": 0.03,
            "educational_or_quoted": 0
          },
          "confidence": 0.96
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.23,
            "mixed_or_unknown": 0.04,
            "no_sensitive_action": 0.73,
            "independently_established": 0
          },
          "confidence": 0.64
        }
      },
      "usage": {
        "input_tokens": 4944,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "f0dab36fe55bc6b79ecbc274ebb94df262e846c1c522537289c4697e613a04aa",
    "capturedAt": "2026-09-22T03:56:27.180Z",
    "elapsedMs": 544.8824599999934,
    "successfulAttemptElapsedMs": 542.906587000005,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "body:7": 0.77,
            "subject:0": 0,
            "body:6": 0,
            "body:3": 0.01,
            "NONE": 0.06,
            "body:1": 0.09999999999999999,
            "body:5": 0.01,
            "body:2": 0,
            "body:4": 0.05,
            "body:0": 0
          },
          "confidence": 0.74
        }
      },
      "usage": {
        "input_tokens": 883,
        "output_tokens": 113
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1124.965411000012,
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
        "status": "selected",
        "segmentId": "body:7"
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
    "seq": 2029,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-414",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:26.057Z",
    "offsetMs": 1.4963770000031218
  },
  {
    "seq": 2030,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-414",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:26.634Z",
    "offsetMs": 578.5401640000055,
    "elapsedMs": 576.6159190000035,
    "outcome": "success"
  },
  {
    "seq": 2031,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-414",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:26.637Z",
    "offsetMs": 581.404692000011
  },
  {
    "seq": 2032,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-414",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:27.180Z",
    "offsetMs": 1124.7750310000265,
    "elapsedMs": 542.906587000005,
    "outcome": "success"
  },
  {
    "seq": 2033,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-414",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:27.180Z",
    "offsetMs": 1125.0072420000215,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "2ab2afec517c477a9b128b6ee393ffcbebeee36fb0b93c9bc82f4e7f7eb76de0";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2030},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2032},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2033}} as const;
export const projectionSha256 = "7a1052b06d90eb8e5e6acddbe9b45b4395e52cf7768c4c9113d336ca837c4cb0";
