import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-035",
  "inputSha256": "d3f63d7a7e5fe5ec9214aab8509bd3cc2ef53751110d2ec84ae7804d9efc5409",
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
    "requestSha256": "79335c21d94816a0d229400a60f4787d9562a372ab77c3669465634bcb6aad7d",
    "capturedAt": "2026-09-20T23:44:02.785Z",
    "elapsedMs": 169.64450000000033,
    "successfulAttemptElapsedMs": 167.71570900000006,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.09
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.91
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.62
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.34
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.07
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
          "noul": 0.53
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
            "informational": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.02,
            "sender_supplied": 0.62,
            "mixed_or_unknown": 0.04,
            "independently_established": 0.32
          },
          "confidence": 0.48
        }
      },
      "usage": {
        "input_tokens": 3679,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "4ef49ca6bea1d057eab2fc55e553d5166de49c5efeea030d85eda264f4476a12",
    "capturedAt": "2026-09-21T00:57:15.964Z",
    "elapsedMs": 119.70575000000031,
    "successfulAttemptElapsedMs": 116.971,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:7": 0.01,
            "subject:0": 0,
            "body:0": 0,
            "body:5": 0.95,
            "body:2": 0,
            "body:9": 0,
            "body:3": 0,
            "body:6": 0,
            "NONE": 0,
            "body:4": 0.04,
            "body:8": 0,
            "body:1": 0
          },
          "confidence": 0.93
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:5": 0.14,
            "subject:0": 0.01,
            "body:0": 0,
            "body:7": 0.13,
            "body:2": 0.07,
            "body:1": 0.11,
            "body:3": 0.08,
            "body:6": 0.16,
            "NONE": 0.08,
            "body:4": 0.21000000000000002,
            "body:8": 0.01,
            "body:9": 0
          },
          "confidence": 0.13
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:9",
          "probabilities": {
            "body:7": 0.01,
            "body:0": 0,
            "subject:0": 0,
            "body:5": 0.09,
            "body:2": 0,
            "body:9": 0.6799999999999999,
            "NONE": 0.01,
            "body:6": 0,
            "body:1": 0.12,
            "body:4": 0.04,
            "body:8": 0.02,
            "body:3": 0.03
          },
          "confidence": 0.66
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:5": 0.01,
            "subject:0": 0,
            "body:0": 0,
            "body:7": 0.07,
            "body:2": 0,
            "body:9": 0,
            "NONE": 0.89,
            "body:6": 0,
            "body:1": 0,
            "body:4": 0.01,
            "body:8": 0.02,
            "body:3": 0
          },
          "confidence": 0.87
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "body:7": 0.73,
            "body:0": 0,
            "body:5": 0,
            "subject:0": 0,
            "body:2": 0,
            "body:1": 0,
            "body:3": 0,
            "body:6": 0,
            "body:9": 0,
            "body:4": 0,
            "body:8": 0.06,
            "NONE": 0.21000000000000002
          },
          "confidence": 0.7
        }
      },
      "usage": {
        "input_tokens": 3777,
        "output_tokens": 645
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 441.16095800000016,
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
        "status": "selected",
        "segmentId": "body:7"
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
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-035",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:02.616Z",
    "offsetMs": 1.323833000000377
  },
  {
    "seq": 170,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-035",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:02.785Z",
    "offsetMs": 169.6457500000015,
    "elapsedMs": 167.71570900000006,
    "outcome": "success"
  },
  {
    "seq": 171,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-035",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:02.788Z",
    "offsetMs": 173.4611670000013
  },
  {
    "seq": 172,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-035",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:02.934Z",
    "offsetMs": 319.5138330000009,
    "elapsedMs": 145.32762500000172,
    "outcome": "success"
  },
  {
    "seq": 173,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-035",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:02.935Z",
    "offsetMs": 319.6875830000008,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2489,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-035",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:15.846Z",
    "offsetMs": 3.259708000000046
  },
  {
    "seq": 2490,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-035",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:15.963Z",
    "offsetMs": 120.85066699999993,
    "elapsedMs": 116.971,
    "outcome": "success"
  },
  {
    "seq": 2491,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-035",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:15.964Z",
    "offsetMs": 121.46345799999995,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "841cb6056d23053a75365c16da31eedcdfe6eb83a44f259188e251ed19975874";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":170},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2490},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2491}} as const;
export const projectionSha256 = "5edf58f2ac4eddff082c2f8a5d65a55c8897976a9b3bc2290da17d6cf343c72e";
