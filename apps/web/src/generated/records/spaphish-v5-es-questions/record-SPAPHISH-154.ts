import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-154",
  "inputSha256": "5f1b33b47749cfdf61a39710961ca10246ec697b2c95de437365ba0e91952e18",
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
      "text": "genovevo, ¡tenemos un cupón de $200MXN para ti!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 72,
      "text": "confianza ¿La compra no era como la descripción o simplemente no llegó? "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 72,
      "end": 153,
      "text": "Nuestra Protección al Comprador de PayPal puede ayudarte a obtener un reembolso. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 153,
      "end": 185,
      "text": "Aplican términos y condiciones. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 185,
      "end": 317,
      "text": "Seguridad las 24 horas del día Protégete de las posibles amenazas al comprar con nuestro monitoreo antifraude las 24 horas del día. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 317,
      "end": 343,
      "text": "¿Olvidaste tu contraseña? "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 343,
      "end": 369,
      "text": "¿Olvidaste tu contraseña? "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 369,
      "end": 383,
      "text": "No pasa nada. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 383,
      "end": 417,
      "text": "Haz clic aquí para restablecerla. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 417,
      "end": 608,
      "text": "Facebook Twitter Cuenta Ayuda Comisiones Seguridad Compra Donar Para asegurarse de que pueda recibir nuestros correos electrónicos, agregue @mail.paypal.com a la lista de remitentes seguros. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 608,
      "end": 665,
      "text": "¿Cómo sé que no se trata de un correo electrónico falso? "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 665,
      "end": 786,
      "text": "Los correos electrónicos de suplantación o \"phishing\" suelen tener un saludo genérico como \"Estimado usuario de PayPal\". "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 786,
      "end": 877,
      "text": "Los correos electrónicos de PayPal siempre se dirigirán a usted por su nombre y apellidos. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 877,
      "end": 1009,
      "text": "Más información sobre el \"phishing\" Este correo electrónico ha sido enviado a Luis Alberto Medina Ríos a lmedina.rios@correo-mx.com\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 1009,
      "end": 1111,
      "text": ", porque las preferencias de correo electrónico se configuraron para recibir promociones de Partners. "
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 1111,
      "end": 1131,
      "text": "Anular suscripción. "
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 1131,
      "end": 1171,
      "text": "No respondas a este correo electrónico. "
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 1171,
      "end": 1238,
      "text": "No podemos responder las consultas que se envíen a esta dirección. "
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 1238,
      "end": 1384,
      "text": "Para obtener respuesta inmediata a tus preguntas, visita nuestro Centro de ayuda haciendo clic en \"Ayuda\" al final de cualquier página de PayPal. "
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 1384,
      "end": 1429,
      "text": "Copyright © 2022 Operadora PayPal de México. "
    },
    {
      "id": "body:19",
      "source": "body",
      "start": 1429,
      "end": 1448,
      "text": "S. de R.L. de C.V. "
    },
    {
      "id": "body:20",
      "source": "body",
      "start": 1448,
      "end": 1490,
      "text": "Todos los derechos reservados 84721 592803"
    }
  ],
  "passA": {
    "requestSha256": "85d4ee4863140d2fd8a9122c82742bf752978da546dab211d58cc72cba8c7e93",
    "capturedAt": "2026-09-22T03:51:16.298Z",
    "elapsedMs": 688.2726529999927,
    "successfulAttemptElapsedMs": 687.4386130000057,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.16
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.1
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.11
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.13
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.87
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.19
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
          "noul": 0.05
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
            "informational": 0.11,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0.1,
            "active_request": 0.79
          },
          "confidence": 0.7
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.5700000000000001,
            "mixed_or_unknown": 0.02,
            "independently_established": 0,
            "no_sensitive_action": 0.41
          },
          "confidence": 0.42
        }
      },
      "usage": {
        "input_tokens": 5262,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "f1af334d897bbafb35b426e503deda2614b0018fad3ee912ada04f587f16a2a3",
    "capturedAt": "2026-09-22T03:51:16.831Z",
    "elapsedMs": 530.6127820000111,
    "successfulAttemptElapsedMs": 529.8901769999939,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:3": 0.01,
            "body:18": 0.01,
            "body:15": 0.01,
            "body:1": 0.33,
            "body:9": 0.01,
            "body:0": 0.06,
            "body:5": 0.01,
            "body:12": 0.01,
            "body:7": 0.1,
            "body:17": 0.16,
            "body:11": 0.02,
            "subject:0": 0.01,
            "body:4": 0.04,
            "body:14": 0,
            "body:20": 0,
            "body:19": 0,
            "body:2": 0,
            "body:16": 0.01,
            "body:13": 0,
            "body:8": 0.07,
            "body:6": 0.01,
            "NONE": 0.12,
            "body:10": 0.01
          },
          "confidence": 0.29
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:17",
          "probabilities": {
            "body:3": 0,
            "body:18": 0,
            "body:15": 0.02,
            "body:1": 0.01,
            "body:9": 0.01,
            "body:0": 0,
            "body:11": 0,
            "body:12": 0,
            "body:7": 0.06,
            "body:17": 0.64,
            "subject:0": 0,
            "body:5": 0,
            "body:4": 0.02,
            "body:14": 0,
            "body:20": 0,
            "body:19": 0,
            "body:2": 0,
            "body:16": 0.01,
            "NONE": 0.16,
            "body:10": 0,
            "body:6": 0,
            "body:8": 0.07,
            "body:13": 0
          },
          "confidence": 0.61
        }
      },
      "usage": {
        "input_tokens": 2776,
        "output_tokens": 483
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1220.9047989999817,
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 747,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-154",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:15.610Z",
    "offsetMs": 0.6320299999788404
  },
  {
    "seq": 748,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-154",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:16.298Z",
    "offsetMs": 688.272993999999,
    "elapsedMs": 687.4386130000057,
    "outcome": "success"
  },
  {
    "seq": 749,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-154",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:16.300Z",
    "offsetMs": 690.5190329999896
  },
  {
    "seq": 750,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-154",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:16.830Z",
    "offsetMs": 1220.642492999992,
    "elapsedMs": 529.8901769999939,
    "outcome": "success"
  },
  {
    "seq": 751,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-154",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:51:16.831Z",
    "offsetMs": 1220.9538259999827,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a12c4c096f5b76b40e5f3d0a17662d7f46010279baff256b7767229d0b8baf67";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":748},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":750},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":751}} as const;
export const projectionSha256 = "cf40371e565a82d8143c3b1561a69e072253f89ccfc6a0333ef6bf7be519c5d8";
