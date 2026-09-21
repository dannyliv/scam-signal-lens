import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-154",
  "inputSha256": "5f1b33b47749cfdf61a39710961ca10246ec697b2c95de437365ba0e91952e18",
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
    "requestSha256": "0154405a90465566967c8acb77ef4c3b6e50208333e78d2f268d7a39dc4a04ab",
    "capturedAt": "2026-09-20T23:44:39.777Z",
    "elapsedMs": 111.67645800000173,
    "successfulAttemptElapsedMs": 110.05254199999763,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.15
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.11
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.18
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.14
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.88
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.23
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
          "noul": 0.03
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.42
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
            "informational": 0.07,
            "active_request": 0.83,
            "mixed_or_unclear": 0.1
          },
          "confidence": 0.78
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.29,
            "sender_supplied": 0.68,
            "independently_established": 0.01,
            "mixed_or_unknown": 0.02
          },
          "confidence": 0.57
        }
      },
      "usage": {
        "input_tokens": 3812,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "421633217f99f0ec79e0d8ef0045a8351701cb0a512555784772ae5fd4a892c5",
    "capturedAt": "2026-09-21T00:57:20.117Z",
    "elapsedMs": 175.40391700000055,
    "successfulAttemptElapsedMs": 172.67762499999935,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:9": 0.01,
            "body:18": 0.02,
            "body:5": 0.01,
            "body:15": 0.01,
            "subject:0": 0.01,
            "body:16": 0.01,
            "body:12": 0.01,
            "body:8": 0.16,
            "body:4": 0.02,
            "NONE": 0.09,
            "body:0": 0.04,
            "body:11": 0.08,
            "body:13": 0.01,
            "body:6": 0,
            "body:7": 0.03,
            "body:3": 0.02,
            "body:17": 0.15,
            "body:19": 0,
            "body:20": 0,
            "body:10": 0.01,
            "body:2": 0,
            "body:1": 0.31,
            "body:14": 0
          },
          "confidence": 0.27
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:9": 0,
            "body:18": 0,
            "body:5": 0,
            "body:15": 0.36,
            "subject:0": 0,
            "body:16": 0.06999999999999999,
            "NONE": 0.5,
            "body:4": 0,
            "body:12": 0,
            "body:8": 0,
            "body:20": 0,
            "body:11": 0,
            "body:13": 0,
            "body:17": 0.01,
            "body:7": 0.060000000000000005,
            "body:3": 0,
            "body:19": 0,
            "body:6": 0,
            "body:0": 0,
            "body:10": 0,
            "body:2": 0,
            "body:14": 0,
            "body:1": 0
          },
          "confidence": 0.47
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:17",
          "probabilities": {
            "body:1": 0,
            "body:18": 0,
            "body:5": 0,
            "body:15": 0.05,
            "subject:0": 0,
            "body:16": 0.02,
            "NONE": 0.31,
            "body:12": 0,
            "body:4": 0.01,
            "body:8": 0.08,
            "body:20": 0,
            "body:11": 0,
            "body:13": 0,
            "body:6": 0,
            "body:7": 0.01,
            "body:3": 0,
            "body:17": 0.51,
            "body:19": 0,
            "body:0": 0,
            "body:10": 0,
            "body:2": 0,
            "body:9": 0.01,
            "body:14": 0
          },
          "confidence": 0.47
        }
      },
      "usage": {
        "input_tokens": 3517,
        "output_tokens": 721
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 472.83479100000113,
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
        "status": "low_confidence",
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
    "seq": 753,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-154",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:39.666Z",
    "offsetMs": 1.0552910000042175
  },
  {
    "seq": 754,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-154",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:39.776Z",
    "offsetMs": 111.67929100000038,
    "elapsedMs": 110.05254199999763,
    "outcome": "success"
  },
  {
    "seq": 755,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-154",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:39.779Z",
    "offsetMs": 114.41783299999952
  },
  {
    "seq": 756,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-154",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:39.960Z",
    "offsetMs": 295.4414160000015,
    "elapsedMs": 180.25829099999828,
    "outcome": "success"
  },
  {
    "seq": 757,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-154",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:39.961Z",
    "offsetMs": 295.72904100000596,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2570,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-154",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:19.943Z",
    "offsetMs": 3.3701670000000377
  },
  {
    "seq": 2571,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-154",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:20.116Z",
    "offsetMs": 176.6008750000001,
    "elapsedMs": 172.67762499999935,
    "outcome": "success"
  },
  {
    "seq": 2572,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-154",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:20.117Z",
    "offsetMs": 177.0444580000003,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6abf83504a18c411eb844f762ceddeef662b3e2fc9117259677f8ba9e752fb93";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":754},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2571},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2572}} as const;
export const projectionSha256 = "8b8ea0274a67ea8cc042db56471ca679411cc87722d9a0a3dd7570e22fa1c17a";
