import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-233",
  "inputSha256": "6017135912419cf95d7880def953660037480548aaa1f3f67b17f89c039c6299",
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
      "end": 80,
      "text": "Re: NIP::  [Importante] tu tarjeta ha sido bloqueada de forma temporal #85049340"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 7,
      "text": "¡Hola! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 7,
      "end": 64,
      "text": "Hemos detectado un acceso sospechoso en tu Área Cliente. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 64,
      "end": 127,
      "text": "Por seguridad, tu tarjeta ha sido bloqueada de forma temporal. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 127,
      "end": 238,
      "text": "Por favor, revisa tus movimientos por si ves alguno que no reconoces y contacta con nosotros lo antes posible. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 238,
      "end": 271,
      "text": "Puedes hacerlo como prefieras: . "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 271,
      "end": 314,
      "text": "Seguimos conectados para lo que necesites. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 314,
      "end": 332,
      "text": "¡Así de senZillo! "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 332,
      "end": 357,
      "text": "Un saludo WiZink Bank SAU"
    }
  ],
  "passA": {
    "requestSha256": "7ebd6f98e6038882e8cdd5ddbe5ece71bb1a1d99043f6112e9493c6a0cc5b4b7",
    "capturedAt": "2026-09-22T03:52:48.186Z",
    "elapsedMs": 597.8580899999943,
    "successfulAttemptElapsedMs": 594.5200599999516,
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
          "noul": 0.21
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
          "noul": 0.79
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.96
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.16
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.2
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
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.34,
            "mixed_or_unknown": 0.17,
            "independently_established": 0,
            "no_sensitive_action": 0.49
          },
          "confidence": 0.33
        }
      },
      "usage": {
        "input_tokens": 4998,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "4faea8f5a4a676756dbc91e69df5fe8650eda0350243ac6d1fc578070e41c8cd",
    "capturedAt": "2026-09-22T03:52:48.729Z",
    "elapsedMs": 541.6997620000038,
    "successfulAttemptElapsedMs": 540.45243200002,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.01,
            "NONE": 0.74,
            "body:2": 0,
            "body:5": 0,
            "body:3": 0.12,
            "body:1": 0,
            "body:0": 0,
            "body:7": 0,
            "body:4": 0.13,
            "body:6": 0
          },
          "confidence": 0.7
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "NONE": 0,
            "subject:0": 0,
            "body:2": 0,
            "body:5": 0,
            "body:3": 1,
            "body:1": 0,
            "body:7": 0,
            "body:0": 0,
            "body:4": 0,
            "body:6": 0
          },
          "confidence": 0.98
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "NONE": 0.02,
            "subject:0": 0.01,
            "body:2": 0.04,
            "body:1": 0.14,
            "body:3": 0.22,
            "body:5": 0,
            "body:7": 0.56,
            "body:0": 0,
            "body:4": 0,
            "body:6": 0
          },
          "confidence": 0.51
        }
      },
      "usage": {
        "input_tokens": 2195,
        "output_tokens": 330
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1141.4790580000263,
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
        "segmentId": "body:3"
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1134,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-233",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:47.591Z",
    "offsetMs": 2.95803799998248
  },
  {
    "seq": 1135,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-233",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:48.186Z",
    "offsetMs": 597.851781000034,
    "elapsedMs": 594.5200599999516,
    "outcome": "success"
  },
  {
    "seq": 1136,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-233",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:48.188Z",
    "offsetMs": 600.337051999988
  },
  {
    "seq": 1137,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-233",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:48.729Z",
    "offsetMs": 1141.242590000038,
    "elapsedMs": 540.45243200002,
    "outcome": "success"
  },
  {
    "seq": 1138,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-233",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:48.729Z",
    "offsetMs": 1141.5214680000208,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7e2212f52068078def20b9ed3bb9353968f00cbea421ceaed254e5ffbe437819";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1135},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1137},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1138}} as const;
export const projectionSha256 = "328fd4725a7702f70eefffe524533fac33ae6482a27165418d6be70776d21720";
