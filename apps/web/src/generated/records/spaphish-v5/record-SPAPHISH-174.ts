import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-174",
  "inputSha256": "204287175098ce7476f101129b676f283da9d4cfb4d23e31d5fd48154354d5f8",
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
      "end": 47,
      "text": " ‌‌‌‌‌‌‌A‌v‌i‌so i‌m‌p‌o‌r‌t‌a‌n‌t‌e!͏͏ ‌‌‌‌‌‌‌"
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 47,
      "end": 207,
      "text": "[A‌c‌ti‌v‌id‌ad De‌cl‌ar‌a‌ci‌ó‌n]͏͏ ‌‌‌‌‌‌‌-͏͏ A͏͏‌‌‌‌‌‌‌c͏͏t‌‌‌‌‌‌‌u͏͏a͏͏l‌‌‌‌‌‌‌i͏͏z͏͏a‌‌‌‌‌‌‌c͏͏i‌‌‌‌‌‌‌ó͏͏n d͏͏‌‌‌‌‌‌‌e E‌‌‌‌‌‌‌s͏͏t͏͏a‌‌‌‌‌‌‌d͏͏o‌‌‌‌‌‌‌. "
    },
    {
      "id": "subject:2",
      "source": "subject",
      "start": 207,
      "end": 221,
      "text": "(SX2CXIW0FDKE)"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 47,
      "text": "Hola, Hay un problema con tu cuenta de Amazon. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 47,
      "end": 128,
      "text": "Hemos suspendido temporalmente su cuenta y cancelado cualquier pedido pendiente. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 128,
      "end": 215,
      "text": "Hemos visto que la información de facturación no coincide con el emisor de la tarjeta. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 215,
      "end": 326,
      "text": "Los problemas con la información de facturación a menudo ocurren y debemos tomar esta medida por su seguridad. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 326,
      "end": 403,
      "text": "Necesitamos verificar su información para eliminar el problema de su cuenta. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 403,
      "end": 482,
      "text": "Verificar Cuenta Debe completar su verificación en un plazo de 3 días hábiles. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 482,
      "end": 525,
      "text": "Se cancelará toda la actividad del pedido. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 525,
      "end": 591,
      "text": "Agradecemos su paciencia con todas nuestras medidas de seguridad. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 591,
      "end": 631,
      "text": "Atentamente, Equipo de Soporte de Amazon"
    }
  ],
  "passA": {
    "requestSha256": "0790129d174eb9c92880c198aeb3283515d1a296ed9f1b72d00e75a1ab9945a2",
    "capturedAt": "2026-09-20T23:44:46.853Z",
    "elapsedMs": 162.00770900000498,
    "successfulAttemptElapsedMs": 160.22741700000188,
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
          "noul": 0.68
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
          "noul": 0.97
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.97
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.29
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.06
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
            "independently_established": 0,
            "no_sensitive_action": 0.31,
            "sender_supplied": 0.47000000000000003,
            "mixed_or_unknown": 0.22
          },
          "confidence": 0.28
        }
      },
      "usage": {
        "input_tokens": 3798,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "ffa4121fba356141bc9e042da0211ebbcb4fe711a7cdcf77097f3653ed686df8",
    "capturedAt": "2026-09-20T23:44:47.033Z",
    "elapsedMs": 178.0478329999969,
    "successfulAttemptElapsedMs": 176.46358400000463,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:1": 0,
            "body:8": 0,
            "subject:1": 0,
            "body:3": 0,
            "body:7": 0,
            "subject:0": 0,
            "NONE": 0.09,
            "body:5": 0.09,
            "body:0": 0,
            "body:2": 0.01,
            "body:6": 0,
            "subject:2": 0,
            "body:4": 0.81
          },
          "confidence": 0.79
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:1": 0,
            "body:8": 0,
            "subject:1": 0,
            "body:4": 0,
            "body:2": 0,
            "subject:0": 0,
            "NONE": 0,
            "body:5": 0.97,
            "body:0": 0,
            "body:7": 0,
            "body:6": 0.03,
            "subject:2": 0,
            "body:3": 0
          },
          "confidence": 0.96
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:8",
          "probabilities": {
            "body:1": 0.02,
            "body:8": 0.87,
            "subject:1": 0,
            "body:3": 0.01,
            "body:2": 0,
            "subject:0": 0,
            "NONE": 0,
            "body:5": 0.01,
            "body:0": 0.05,
            "body:7": 0,
            "body:6": 0,
            "subject:2": 0,
            "body:4": 0.04
          },
          "confidence": 0.86
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0,
            "body:8": 0,
            "subject:1": 0,
            "body:3": 0,
            "body:7": 0,
            "body:6": 0,
            "NONE": 0.93,
            "body:5": 0.04,
            "body:0": 0,
            "body:2": 0,
            "subject:0": 0,
            "subject:2": 0,
            "body:4": 0.03
          },
          "confidence": 0.91
        }
      },
      "usage": {
        "input_tokens": 3772,
        "output_tokens": 550
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 342.91120899999805,
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
        "segmentId": "body:4"
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
        "segmentId": "body:5"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:8"
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
    "seq": 851,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-174",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:46.692Z",
    "offsetMs": 1.2288750000006985
  },
  {
    "seq": 852,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-174",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:46.852Z",
    "offsetMs": 162.0100420000017,
    "elapsedMs": 160.22741700000188,
    "outcome": "success"
  },
  {
    "seq": 853,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-174",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:46.856Z",
    "offsetMs": 165.1784170000028
  },
  {
    "seq": 854,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-174",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:47.033Z",
    "offsetMs": 342.28595900000073,
    "elapsedMs": 176.46358400000463,
    "outcome": "success"
  },
  {
    "seq": 855,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-174",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:47.033Z",
    "offsetMs": 343.03349999999773,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "24e914ef919e32b02568c3c23e329644809a6f950b2fa54ed1715518a2e409ae";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":852},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":854},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":855}} as const;
export const projectionSha256 = "a98b6504c9fd53572bd85cefde4d0074bbb55cbc69443430b5d80823b1cb5b37";
