import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-035",
  "inputSha256": "d3f63d7a7e5fe5ec9214aab8509bd3cc2ef53751110d2ec84ae7804d9efc5409",
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
      "end": 71,
      "text": "Y⁪o⁣u𝅶r𝅶 ⁢a⁢c𝅺c⁠o⁣u𝅷n⁠t⁢ ⁪r﻿e𝅸s𝅶t𝅹r⁤i𝅶c﻿t𝅳e⁤d⁯ ID : 3033235966"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 51,
      "text": "Hola usuario.confirmacion218@correo-verificado.com\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 51,
      "end": 107,
      "text": " Tu cuenta de PayPal ha sido restringida temporalmente. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 107,
      "end": 221,
      "text": "Recientemente se te pidió que tomaras una acción en tu cuenta y parece que no recibimos una respuesta solicitada. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 221,
      "end": 317,
      "text": "Hemos encontrado actividad sospechosa en la tarjeta de crédito vinculada a tu cuenta de PayPal. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 317,
      "end": 411,
      "text": "Debes confirmar tu identidad para verificar que eres el propietario de la tarjeta de crédito. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 411,
      "end": 513,
      "text": "Para mantener la seguridad de la cuenta, por favor proporciona documentos que confirmen tu identidad. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 513,
      "end": 599,
      "text": "También hemos impuesto límites temporales a ciertas funciones de tu cuenta de PayPal. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 599,
      "end": 668,
      "text": "Inicia sesión en tu cuenta de PayPal y realiza los pasos requeridos. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 668,
      "end": 728,
      "text": "Iniciar sesión en PayPal Gracias por ser cliente de PayPal. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 728,
      "end": 747,
      "text": "Atentamente, PayPal"
    }
  ],
  "passA": {
    "requestSha256": "2301e3d8e5168c1deb69d82b8bca4d1089c9c6caf14fda2b21cda705cc79e62d",
    "capturedAt": "2026-09-22T03:48:53.367Z",
    "elapsedMs": 595.7471479999949,
    "successfulAttemptElapsedMs": 594.7546779999975,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.1
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.93
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.68
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.96
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.38
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.38
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.73,
            "mixed_or_unknown": 0.03,
            "no_sensitive_action": 0.05,
            "independently_established": 0.19
          },
          "confidence": 0.64
        }
      },
      "usage": {
        "input_tokens": 5129,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "8e540f499c8ddc145503573bb39c996fe773c4982d45a3472330b63866f5150c",
    "capturedAt": "2026-09-22T03:48:54.060Z",
    "elapsedMs": 690.1061190000037,
    "successfulAttemptElapsedMs": 688.6234489999988,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:0": 0,
            "body:6": 0,
            "body:5": 0.96,
            "body:8": 0,
            "NONE": 0,
            "body:9": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:2": 0,
            "body:7": 0.01,
            "body:1": 0,
            "body:4": 0.03
          },
          "confidence": 0.95
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:0": 0,
            "body:6": 0.09,
            "body:8": 0.01,
            "body:5": 0.18,
            "NONE": 0.09,
            "body:9": 0,
            "subject:0": 0.02,
            "body:3": 0.1,
            "body:2": 0.09,
            "body:7": 0.12,
            "body:1": 0.1,
            "body:4": 0.2
          },
          "confidence": 0.12
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:9",
          "probabilities": {
            "body:5": 0.12,
            "body:6": 0,
            "body:8": 0.02,
            "body:0": 0,
            "NONE": 0.01,
            "body:9": 0.71,
            "subject:0": 0,
            "body:3": 0.02,
            "body:2": 0.01,
            "body:7": 0.01,
            "body:1": 0.04,
            "body:4": 0.06
          },
          "confidence": 0.69
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:5": 0.03,
            "body:6": 0,
            "body:8": 0.03,
            "body:0": 0,
            "NONE": 0.83,
            "body:9": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:2": 0,
            "body:7": 0.09,
            "body:1": 0,
            "body:4": 0.02
          },
          "confidence": 0.81
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "body:8": 0.06,
            "body:6": 0,
            "body:0": 0,
            "body:5": 0,
            "NONE": 0.35,
            "body:9": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:2": 0,
            "body:7": 0.58,
            "body:1": 0,
            "body:4": 0.01
          },
          "confidence": 0.53
        }
      },
      "usage": {
        "input_tokens": 4305,
        "output_tokens": 645
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1289.446971999998,
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
        "status": "selected",
        "segmentId": "body:5"
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
        "segmentId": "body:9"
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
        "status": "low_confidence",
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
    "seq": 169,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-035",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:52.772Z",
    "offsetMs": 0.7022279999946477
  },
  {
    "seq": 170,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-035",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:53.367Z",
    "offsetMs": 595.7538329999952,
    "elapsedMs": 594.7546779999975,
    "outcome": "success"
  },
  {
    "seq": 171,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-035",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:53.370Z",
    "offsetMs": 599.6473179999957
  },
  {
    "seq": 172,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-035",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:54.060Z",
    "offsetMs": 1289.0261509999982,
    "elapsedMs": 688.6234489999988,
    "outcome": "success"
  },
  {
    "seq": 173,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-035",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:48:54.060Z",
    "offsetMs": 1289.5057009999946,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "029300284ffc2cd5c1ef5e9be12eff1325cf394f3eb9cc5b04afa4e8c76c2770";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":170},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":172},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":173}} as const;
export const projectionSha256 = "8082288d43bdeffdb81084d0792a98eaa0c77e2c358cc2bce451bbc3f680401b";
