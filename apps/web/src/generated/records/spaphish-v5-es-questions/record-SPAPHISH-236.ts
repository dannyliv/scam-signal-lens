import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-236",
  "inputSha256": "96ea5f788bdcfc238ccd95296e1922a1de0dbfece7ab1a5974f635bd6662aac3",
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
      "end": 26,
      "text": "Tu cuenta de Amazon.com.mx"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 38,
      "text": " ¡Gracias por visitar Amazon.com.mx! \n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 38,
      "end": 39,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 39,
      "end": 107,
      "text": " Conforme a tu petición, has cambiado tu contraseña correctamente. \n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 107,
      "end": 108,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 108,
      "end": 288,
      "text": " Visita Mi cuenta en Amazon.com.mx para ver tus pedidos, realizar cambios en pedidos en los que no se haya comenzado a tramitar el envío, actualizar tus suscripciones y mucho más.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 288,
      "end": 289,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 289,
      "end": 495,
      "text": " Si necesitas contactar con nosotros por cualquier motivo, recuerda que sólo podemos compartir información del pedido a la persona cuyo nombre y dirección de correo electrónico están asociados a la cuenta.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 495,
      "end": 497,
      "text": " \n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 497,
      "end": 541,
      "text": " Gracias de nuevo por comprar con nosotros.\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 541,
      "end": 546,
      "text": " </p>"
    }
  ],
  "passA": {
    "requestSha256": "6a5e467090657d9d9b585056d573a3d953529e1cf64a02997aaec5064e102175",
    "capturedAt": "2026-09-22T03:52:51.898Z",
    "elapsedMs": 661.112976000004,
    "successfulAttemptElapsedMs": 658.9822750000167,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.03
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.73
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.06
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.38
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 0.85,
            "active_request": 0.15,
            "mixed_or_unclear": 0
          },
          "confidence": 0.8
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.92,
            "sender_supplied": 0.01,
            "independently_established": 0.07
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 4989,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "5429b420fe80908616fd11562d1b43cf9c2f29879ccbc9488eb63a1c5f8599f4",
    "capturedAt": "2026-09-22T03:52:52.426Z",
    "elapsedMs": 525.422722999996,
    "successfulAttemptElapsedMs": 523.9403049999964,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:6": 0.55,
            "body:3": 0.01,
            "body:8": 0,
            "body:4": 0.02,
            "body:7": 0,
            "body:0": 0,
            "NONE": 0.36,
            "body:5": 0.01,
            "body:2": 0.02,
            "subject:0": 0.03,
            "body:1": 0,
            "body:9": 0
          },
          "confidence": 0.5
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:6": 0.04,
            "body:3": 0,
            "body:8": 0,
            "body:7": 0,
            "body:4": 0.67,
            "subject:0": 0,
            "NONE": 0.28,
            "body:5": 0,
            "body:2": 0,
            "body:1": 0,
            "body:0": 0,
            "body:9": 0
          },
          "confidence": 0.63
        }
      },
      "usage": {
        "input_tokens": 1603,
        "output_tokens": 262
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1188.7160539999604,
  "derived": {
    "concern": "few_warning_signs",
    "triggeredRuleIds": [],
    "contextWarnings": [],
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
        "status": "low_confidence",
        "segmentId": null
      },
      "analyzer_instruction": {
        "status": "not_requested",
        "segmentId": null
      }
    },
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1149,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-236",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:51.238Z",
    "offsetMs": 1.6010649999952875
  },
  {
    "seq": 1150,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-236",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:51.898Z",
    "offsetMs": 661.1182929999777,
    "elapsedMs": 658.9822750000167,
    "outcome": "success"
  },
  {
    "seq": 1151,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-236",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:51.901Z",
    "offsetMs": 663.9753209999762
  },
  {
    "seq": 1152,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-236",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:52.425Z",
    "offsetMs": 1188.466614999983,
    "elapsedMs": 523.9403049999964,
    "outcome": "success"
  },
  {
    "seq": 1153,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-236",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:52.426Z",
    "offsetMs": 1188.7610930000083,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "fc4e3204152612bb79de16953c262ef903590275447db40ba36ce6aa2d44e765";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1150},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1152},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1153}} as const;
export const projectionSha256 = "bf3960ab300f973d7d84ab939a6424fc6612415dcb8c0d665002ec2fa23f328f";
