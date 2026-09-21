import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-130",
  "inputSha256": "79897bc1725ee1c744344cb71f03f4ad2c388016c01d9611234d0f7a26fde604",
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
      "end": 41,
      "text": "Nuevos cambios de precios de su membresía"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 19,
      "text": "Cambios de precios\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 19,
      "end": 38,
      "text": "Hola, Diego Ramos:\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 38,
      "end": 71,
      "text": "El costo de tu plan ha cambiado. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 71,
      "end": 122,
      "text": "Este cambio estará vigente el 11 septiembre, 2025. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 122,
      "end": 195,
      "text": "Puede ver los detalles actualizados de su membresía visitando su Cuenta.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 195,
      "end": 196,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 196,
      "end": 210,
      "text": "Plan Estándar\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 210,
      "end": 243,
      "text": "Nuevo precio del plan COP 63.500\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 243,
      "end": 244,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 244,
      "end": 284,
      "text": "Esperamos que estés disfrutando Netflx. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 284,
      "end": 359,
      "text": "Constantemente agregamos nuevas películas y series para nuestros miembros. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 359,
      "end": 403,
      "text": "Estamos aquí para ayudarte si lo necesitas. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 403,
      "end": 473,
      "text": "Visita el Centro de Ayuda para obtener más información o contáctanos.\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 473,
      "end": 494,
      "text": "–El equipo de Netflx\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 494,
      "end": 529,
      "text": "VER TODAS LAS PELÍCULAS Y SERIES >\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 529,
      "end": 530,
      "text": "\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 530,
      "end": 622,
      "text": "Hemos enviado este correo electrónico sobre la cuenta como parte de tu membresía de Netflx. "
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 622,
      "end": 762,
      "text": "Para cambiar tus preferencias de correo electrónico en cualquier momento, visita la página de Configuración de comunicaciones de tu cuenta.\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 762,
      "end": 887,
      "text": "No respondas a este correo electrónico, debido a que no nos es posible responder desde esta dirección de correo electrónico.\n"
    },
    {
      "id": "body:19",
      "source": "body",
      "start": 887,
      "end": 973,
      "text": "Si necesitas ayuda o deseas comunicarte con nosotros, visita nuestro Centro de ayuda.\n"
    },
    {
      "id": "body:20",
      "source": "body",
      "start": 973,
      "end": 974,
      "text": "\n"
    },
    {
      "id": "body:21",
      "source": "body",
      "start": 974,
      "end": 1026,
      "text": "Este mensaje fue enviado a diego.ramos@corpmail.net\n"
    },
    {
      "id": "body:22",
      "source": "body",
      "start": 1026,
      "end": 1038,
      "text": " por Netflx."
    }
  ],
  "passA": {
    "requestSha256": "c3d3cc80c2fe38f0fd6bd3ef026e6f953283e2b5819f50c8a1f04d8fa707e195",
    "capturedAt": "2026-09-20T23:44:32.743Z",
    "elapsedMs": 151.559874999999,
    "successfulAttemptElapsedMs": 149.9291249999951,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.02
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.03
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.07
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.1
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.84
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.13
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.6
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "informational": 0.9,
            "mixed_or_unclear": 0,
            "active_request": 0.1,
            "educational_or_quoted": 0
          },
          "confidence": 0.86
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.05,
            "no_sensitive_action": 0.87,
            "sender_supplied": 0.07,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.84
        }
      },
      "usage": {
        "input_tokens": 3693,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "7402733afea56e4ae6f40a89723622ebd4dd7bcf81c22b43e8e2094934c45d37",
    "capturedAt": "2026-09-20T23:44:32.868Z",
    "elapsedMs": 123.0301249999975,
    "successfulAttemptElapsedMs": 120.52683400000387,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:13",
          "probabilities": {
            "body:22": 0.08,
            "body:21": 0.01,
            "body:9": 0.01,
            "body:8": 0,
            "body:20": 0,
            "body:11": 0.16,
            "body:4": 0.01,
            "body:5": 0,
            "body:3": 0,
            "body:17": 0,
            "NONE": 0.13,
            "body:15": 0,
            "body:14": 0,
            "body:6": 0,
            "body:7": 0,
            "body:0": 0,
            "body:10": 0,
            "body:18": 0.01,
            "body:2": 0.01,
            "body:13": 0.38,
            "subject:0": 0.01,
            "body:12": 0.08,
            "body:19": 0.05,
            "body:1": 0,
            "body:16": 0.06
          },
          "confidence": 0.34
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:13": 0,
            "body:21": 0,
            "body:20": 0,
            "body:8": 0,
            "body:9": 0,
            "body:11": 0.02,
            "body:4": 0.75,
            "body:5": 0,
            "body:3": 0,
            "NONE": 0.05,
            "body:17": 0.02,
            "body:14": 0,
            "body:15": 0,
            "body:6": 0,
            "body:7": 0,
            "body:0": 0,
            "body:10": 0,
            "body:18": 0.01,
            "body:2": 0,
            "body:19": 0.11,
            "subject:0": 0,
            "body:12": 0.04,
            "body:22": 0,
            "body:1": 0,
            "body:16": 0
          },
          "confidence": 0.72
        }
      },
      "usage": {
        "input_tokens": 2237,
        "output_tokens": 523
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 277.58883400000195,
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
        "status": "selected",
        "segmentId": "body:4"
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
    "seq": 637,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-130",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:32.592Z",
    "offsetMs": 1.0519170000043232
  },
  {
    "seq": 638,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-130",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:32.742Z",
    "offsetMs": 151.56158400000277,
    "elapsedMs": 149.9291249999951,
    "outcome": "success"
  },
  {
    "seq": 639,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-130",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:32.747Z",
    "offsetMs": 155.84450000000652
  },
  {
    "seq": 640,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-130",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:32.868Z",
    "offsetMs": 277.3352920000034,
    "elapsedMs": 120.52683400000387,
    "outcome": "success"
  },
  {
    "seq": 641,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-130",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:32.868Z",
    "offsetMs": 277.64041700000234,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1c2a104c8f998ee82cc20d8c1c7efc5a78105ab8ba89684ba738754d593bda2d";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":638},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":640},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":641}} as const;
export const projectionSha256 = "5d9d547fe959d1b1c994d5044102702fbac5fda7544e9dbf4beb94673259efc5";
