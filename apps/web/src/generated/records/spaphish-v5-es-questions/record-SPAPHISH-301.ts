import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-301",
  "inputSha256": "d8d5f49a33d903434a13051ea462926b391e5acc22085327463b87b40054031c",
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
      "end": 52,
      "text": "A𝅺c𝅺c𝅴o𝅸u𝅴n𝅸t𝅸 𝅷R𝅴e𝅸s𝅷t𝅸r𝅸i𝅺c⁠t𝅺e𝅸d⁠"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 82,
      "text": "Hola juan.perez@correo.net Tu cuenta de PayPal ha sido restringida temporalmente. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 82,
      "end": 195,
      "text": "Recientemente se te pidió que tomaras una acción en tu cuenta y parece que no recibimos la respuesta solicitada. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 195,
      "end": 291,
      "text": "Hemos encontrado actividad sospechosa en la tarjeta de crédito vinculada a tu cuenta de PayPal. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 291,
      "end": 385,
      "text": "Debes confirmar tu identidad para verificar que eres el propietario de la tarjeta de crédito. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 385,
      "end": 487,
      "text": "Para mantener la seguridad de la cuenta, por favor proporciona documentos que confirmen tu identidad. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 487,
      "end": 574,
      "text": "También hemos impuesto límites temporales en ciertas funciones de tu cuenta de PayPal. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 574,
      "end": 643,
      "text": "Inicia sesión en tu cuenta de PayPal y realiza los pasos requeridos. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 643,
      "end": 703,
      "text": "Iniciar sesión en PayPal Gracias por ser cliente de PayPal. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 703,
      "end": 722,
      "text": "Atentamente, PayPal"
    }
  ],
  "passA": {
    "requestSha256": "913f22ca36c72b69a5184b02b0fe22b22f966a7f43d9b4a876336ecf72b01683",
    "capturedAt": "2026-09-22T03:54:11.645Z",
    "elapsedMs": 642.484438000014,
    "successfulAttemptElapsedMs": 640.6863930000109,
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
          "noul": 0.66
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.29
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.36
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
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
            "no_sensitive_action": 0.06,
            "mixed_or_unknown": 0.03,
            "independently_established": 0.16,
            "sender_supplied": 0.75
          },
          "confidence": 0.67
        }
      },
      "usage": {
        "input_tokens": 5104,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "16eaf48192579d97adf2f41d190e086b2aca66b5bc145a3f1c66ec977b3359d9",
    "capturedAt": "2026-09-22T03:54:12.278Z",
    "elapsedMs": 630.8839249999728,
    "successfulAttemptElapsedMs": 629.2870489999768,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0,
            "body:2": 0,
            "body:1": 0,
            "body:3": 0.02,
            "body:5": 0,
            "body:0": 0,
            "body:8": 0,
            "body:4": 0.97,
            "body:7": 0,
            "body:6": 0.01
          },
          "confidence": 0.95
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "NONE": 0.09,
            "subject:0": 0.02,
            "body:2": 0.05,
            "body:5": 0.07,
            "body:3": 0.34,
            "body:1": 0.07,
            "body:7": 0.01,
            "body:0": 0.08,
            "body:4": 0.06,
            "body:8": 0,
            "body:6": 0.21
          },
          "confidence": 0.28
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:8",
          "probabilities": {
            "NONE": 0.03,
            "subject:0": 0,
            "body:2": 0.04,
            "body:5": 0,
            "body:3": 0.06,
            "body:8": 0.62,
            "body:7": 0.04,
            "body:1": 0.01,
            "body:4": 0.13,
            "body:0": 0.06,
            "body:6": 0.01
          },
          "confidence": 0.59
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "NONE": 0.78,
            "body:2": 0,
            "body:5": 0,
            "body:3": 0.01,
            "body:8": 0,
            "body:7": 0.03,
            "body:1": 0,
            "body:4": 0.04,
            "body:0": 0,
            "body:6": 0.14
          },
          "confidence": 0.75
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "NONE": 0.24,
            "subject:0": 0,
            "body:2": 0,
            "body:5": 0,
            "body:3": 0.01,
            "body:8": 0,
            "body:0": 0,
            "body:1": 0,
            "body:4": 0.01,
            "body:7": 0.05,
            "body:6": 0.69
          },
          "confidence": 0.66
        }
      },
      "usage": {
        "input_tokens": 4090,
        "output_tokens": 600
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1275.3895620000549,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H5"
    ],
    "contextWarnings": [],
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
        "status": "low_confidence",
        "segmentId": null
      },
      "analyzer_instruction": {
        "status": "not_requested",
        "segmentId": null
      }
    },
    "adviceTemplateIds": [
      "avoid_sender_route",
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1469,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-301",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:11.004Z",
    "offsetMs": 1.3996960000367835
  },
  {
    "seq": 1470,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-301",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:11.645Z",
    "offsetMs": 642.4844800000428,
    "elapsedMs": 640.6863930000109,
    "outcome": "success"
  },
  {
    "seq": 1471,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-301",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:11.648Z",
    "offsetMs": 645.2989420000231
  },
  {
    "seq": 1472,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-301",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:12.277Z",
    "offsetMs": 1275.0197500000359,
    "elapsedMs": 629.2870489999768,
    "outcome": "success"
  },
  {
    "seq": 1473,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-301",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:12.278Z",
    "offsetMs": 1275.4464310000185,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "4d783f6fea2983a2cdac842e06a207a50838b63e912b7f41bf05594d57ba0041";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1470},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1472},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1473}} as const;
export const projectionSha256 = "76bacb2a88939b07643303a9b8fd9d26b2b1de28922627a9d7d3e2b563c91d07";
