import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-446",
  "inputSha256": "32ac8ad59b02e47901e4b5e13071e7c393fca131304038d8e077dc94177ef473",
  "questionBundleSha256": "c38d45be636041965e7e231cffdf2831ec083c7780ea13a94086fdf24bf7bc08",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "source_messages",
  "policySha256": "3435135d6058476d4262ecbc936abf95af4993b455dfab35adc8b17f3fe6ad6a",
  "requestedModel": "jev-1.13.0",
  "segments": [
    {
      "id": "subject:0",
      "source": "subject",
      "start": 0,
      "end": 50,
      "text": "Ezequiela Miguelina - Tienes (1) mensaje nuestro. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 50,
      "end": 70,
      "text": "Complete su entrega."
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 70,
      "end": 81,
      "text": "📦 🚚 ..661"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 67,
      "text": "ENTREGA DEL PAQUETE PENDIENTE ◉ Registro / Inicio de sesión ❒SEUR. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 67,
      "end": 294,
      "text": "9988776655 SEGUIMIENTO ➢ mr.datasec Tienes (1) paquete pendiente de entrega -------------------------------------------------------------------------------- Confirma tus datos de envío ■ tienes un paquete pendiente de entrega. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 294,
      "end": 407,
      "text": "Sigue tu pedido en tiempo real y programa la entrega para asegurarte de recibirlo a la hora que más te convenga! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 407,
      "end": 492,
      "text": "PROGRAMA SU ENTREGA Si no deseas recibir más correos electrónicos, desconéctate aquí."
    }
  ],
  "passA": {
    "requestSha256": "209ca27d4d79dc8a3c715d59cbe71e9bd2d12c3eccfd78fc28fbad9f0b94daec",
    "capturedAt": "2026-09-20T23:46:21.849Z",
    "elapsedMs": 160.48529100001906,
    "successfulAttemptElapsedMs": 158.40258399999584,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.22
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.4
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.06
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.38
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.86
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.34
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.15
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.24,
            "independently_established": 0,
            "sender_supplied": 0.73,
            "mixed_or_unknown": 0.03
          },
          "confidence": 0.64
        }
      },
      "usage": {
        "input_tokens": 3572,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "d86b8ba5349c7f478c5d40fa71ff60d716c768ff91f1f282596034e5cdc84c60",
    "capturedAt": "2026-09-20T23:46:22.054Z",
    "elapsedMs": 202.69920900001307,
    "successfulAttemptElapsedMs": 200.65508300001966,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_credential_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:2": 0,
            "subject:2": 0,
            "body:3": 0.01,
            "body:1": 0.06,
            "body:0": 0.4,
            "subject:1": 0,
            "NONE": 0.53
          },
          "confidence": 0.45
        },
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:0": 0,
            "body:2": 0,
            "subject:2": 0,
            "body:3": 0.01,
            "body:1": 0.59,
            "body:0": 0.03,
            "subject:1": 0,
            "NONE": 0.37
          },
          "confidence": 0.53
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0.01,
            "body:2": 0.07,
            "subject:2": 0,
            "body:3": 0.14,
            "body:1": 0.03,
            "body:0": 0.02,
            "subject:1": 0.33,
            "NONE": 0.39999999999999997
          },
          "confidence": 0.33
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.05,
            "body:2": 0.01,
            "body:1": 0.14,
            "subject:2": 0,
            "body:3": 0.01,
            "body:0": 0.72,
            "subject:1": 0,
            "NONE": 0.07
          },
          "confidence": 0.68
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:2": 0.04,
            "body:3": 0.05,
            "body:1": 0.01,
            "subject:2": 0,
            "body:0": 0.02,
            "subject:1": 0,
            "NONE": 0.88
          },
          "confidence": 0.85
        }
      },
      "usage": {
        "input_tokens": 2850,
        "output_tokens": 459
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 365.4744999999821,
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
    "seq": 2190,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-446",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:21.690Z",
    "offsetMs": 1.61570899997605
  },
  {
    "seq": 2191,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-446",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:21.849Z",
    "offsetMs": 160.48616699999548,
    "elapsedMs": 158.40258399999584,
    "outcome": "success"
  },
  {
    "seq": 2192,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-446",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:21.852Z",
    "offsetMs": 163.94612499998766
  },
  {
    "seq": 2193,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-446",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:22.054Z",
    "offsetMs": 365.1147499999788,
    "elapsedMs": 200.65508300001966,
    "outcome": "success"
  },
  {
    "seq": 2194,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-446",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:22.054Z",
    "offsetMs": 365.54608400000143,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ef15f2aa73ac5d1a0db6837d36bf0dfec7382b3f0a0c0c33deaa7e72ab7888d6";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2191},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2193},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2194}} as const;
export const projectionSha256 = "e90bf3f14079332ee1d32b6f2084277dae649cd21f402c53b72f255947a3abd7";
