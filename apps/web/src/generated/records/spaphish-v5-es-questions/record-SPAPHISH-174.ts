import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-174",
  "inputSha256": "204287175098ce7476f101129b676f283da9d4cfb4d23e31d5fd48154354d5f8",
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
    "requestSha256": "21111d81a0618bc379c32ee5756a15ebc64acea29c30daad5a9a4c203e636a13",
    "capturedAt": "2026-09-22T03:51:39.490Z",
    "elapsedMs": 625.1207529999956,
    "successfulAttemptElapsedMs": 624.1713429999945,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.12
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.69
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
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "informational": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.26,
            "independently_established": 0,
            "no_sensitive_action": 0.38,
            "sender_supplied": 0.36
          },
          "confidence": 0.17
        }
      },
      "usage": {
        "input_tokens": 5248,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "afccbfe108d8998f0a10400e78fe3abbe4644f40dd46ac73ed6649111e2ae562",
    "capturedAt": "2026-09-22T03:51:40.193Z",
    "elapsedMs": 699.9603979999956,
    "successfulAttemptElapsedMs": 684.0929100000067,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:7": 0,
            "body:2": 0.01,
            "body:0": 0,
            "body:5": 0.09,
            "body:6": 0,
            "body:4": 0.81,
            "subject:2": 0,
            "body:8": 0,
            "body:3": 0,
            "NONE": 0.08,
            "body:1": 0,
            "subject:0": 0,
            "subject:1": 0
          },
          "confidence": 0.79
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:7": 0,
            "body:5": 0.97,
            "body:0": 0,
            "body:2": 0,
            "body:6": 0.03,
            "body:4": 0,
            "subject:2": 0,
            "body:8": 0,
            "body:3": 0,
            "NONE": 0,
            "body:1": 0,
            "subject:0": 0,
            "subject:1": 0
          },
          "confidence": 0.96
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:8",
          "probabilities": {
            "body:7": 0,
            "body:5": 0.01,
            "body:4": 0.11,
            "body:0": 0.02,
            "body:6": 0,
            "body:2": 0,
            "subject:2": 0,
            "body:8": 0.85,
            "body:3": 0,
            "NONE": 0,
            "body:1": 0.01,
            "subject:0": 0,
            "subject:1": 0
          },
          "confidence": 0.83
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:7": 0,
            "body:2": 0,
            "body:4": 0.05,
            "body:0": 0,
            "body:6": 0,
            "body:5": 0.05,
            "subject:2": 0,
            "NONE": 0.9,
            "body:3": 0,
            "body:8": 0,
            "body:1": 0,
            "subject:0": 0,
            "subject:1": 0
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 4196,
        "output_tokens": 550
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1327.7682769999956,
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
    "seq": 845,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-174",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:38.866Z",
    "offsetMs": 0.654039000015473
  },
  {
    "seq": 846,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-174",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:39.490Z",
    "offsetMs": 625.1194189999951,
    "elapsedMs": 624.1713429999945,
    "outcome": "success"
  },
  {
    "seq": 847,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-174",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:39.494Z",
    "offsetMs": 628.7029800000018
  },
  {
    "seq": 848,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-174",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:40.192Z",
    "offsetMs": 1327.411690000008,
    "elapsedMs": 684.0929100000067,
    "outcome": "success"
  },
  {
    "seq": 849,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-174",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:51:40.193Z",
    "offsetMs": 1327.8285550000146,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "29a5da0bd8d463caf606eb69fc0fbddf81aba85ebe75f7c1cc5d7a66c672f4b6";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":846},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":848},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":849}} as const;
export const projectionSha256 = "4b2b5bf577664adb6ccbe5617d85aafb037e16d01ce0264223c638ac649d9064";
