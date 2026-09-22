import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-218",
  "inputSha256": "1807fd62254b23ca831f88720f49ec1c0988c9f9ba0233b5f426627a48498fd8",
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
      "end": 73,
      "text": ">>Ezequiela Miguelina!! - Tienes un (1) paquete en espera de entrega 📦. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 73,
      "end": 121,
      "text": "Usa tu código para rastrearlo y recibirlo ___🚚."
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 69,
      "text": "❒ ENTREGA DEL PAQUETE PENDIENTE ◉ Registro / Inicio de sesión ❒SEUR. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 69,
      "end": 298,
      "text": "9988776654 SEGUIMIENTO ➢ Andrea López Tienes (1) paquete pendiente de entrega -------------------------------------------------------------------------------- Confirma tus datos de envío ■ tienes un paquete pendiente de entrega. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 298,
      "end": 411,
      "text": "Sigue tu pedido en tiempo real y programa la entrega para asegurarte de recibirlo a la hora que más te convenga! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 411,
      "end": 496,
      "text": "PROGRAMA SU ENTREGA Si no deseas recibir más correos electrónicos, desconéctate aquí."
    }
  ],
  "passA": {
    "requestSha256": "808facf2ee64d7a6d5fc4837388298b8202fc3fe4f5fe8eb6b1195615f6e129e",
    "capturedAt": "2026-09-22T03:52:31.275Z",
    "elapsedMs": 688.4036210000049,
    "successfulAttemptElapsedMs": 687.0838539999968,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.34
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.36
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
          "noul": 0.23
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.84
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.23
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 1,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.04,
            "sender_supplied": 0.55,
            "independently_established": 0,
            "no_sensitive_action": 0.41
          },
          "confidence": 0.4
        }
      },
      "usage": {
        "input_tokens": 5033,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "04dd102c55eea0d07d843af5f5b6a0d30dfe28aa1d0dd0fb41e19ae81c5844fb",
    "capturedAt": "2026-09-22T03:52:31.832Z",
    "elapsedMs": 555.2642590000178,
    "successfulAttemptElapsedMs": 554.0811519999988,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.01,
            "body:1": 0.04,
            "body:0": 0.38,
            "NONE": 0.49,
            "body:3": 0.01,
            "subject:1": 0.07,
            "subject:0": 0
          },
          "confidence": 0.4
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0.01,
            "subject:0": 0,
            "body:0": 0.06,
            "body:1": 0.5700000000000001,
            "body:3": 0.01,
            "subject:1": 0,
            "NONE": 0.35
          },
          "confidence": 0.49
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.1,
            "subject:0": 0.01,
            "body:0": 0.03,
            "body:1": 0.03,
            "body:3": 0.13,
            "subject:1": 0.08,
            "NONE": 0.62
          },
          "confidence": 0.55
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0.02,
            "subject:0": 0,
            "body:0": 0.73,
            "body:1": 0.08,
            "body:3": 0.01,
            "subject:1": 0,
            "NONE": 0.16
          },
          "confidence": 0.68
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.02,
            "body:1": 0.01,
            "body:0": 0.02,
            "NONE": 0.91,
            "body:3": 0.03,
            "subject:1": 0.01,
            "subject:0": 0
          },
          "confidence": 0.9
        }
      },
      "usage": {
        "input_tokens": 3401,
        "output_tokens": 414
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1245.4372680000088,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "request_route_low_confidence"
    ],
    "evidence": {
      "credential_request": {
        "status": "low_confidence",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "low_confidence",
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 1061,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-218",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:30.587Z",
    "offsetMs": 0.8420549999864306
  },
  {
    "seq": 1062,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-218",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:31.275Z",
    "offsetMs": 688.4048860000039,
    "elapsedMs": 687.0838539999968,
    "outcome": "success"
  },
  {
    "seq": 1063,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-218",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:31.277Z",
    "offsetMs": 690.6016149999923
  },
  {
    "seq": 1064,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-218",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:31.831Z",
    "offsetMs": 1245.1307469999883,
    "elapsedMs": 554.0811519999988,
    "outcome": "success"
  },
  {
    "seq": 1065,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-218",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:31.832Z",
    "offsetMs": 1245.4906429999974,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1f4b348924a02c52c890f20c80a202a295843b60c195a560f06fee794f65c3a8";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1062},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1064},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1065}} as const;
export const projectionSha256 = "555d261df9d5e95c563ee9267eea1c4522ff7776c027f2ee6e99b5d8d701670f";
