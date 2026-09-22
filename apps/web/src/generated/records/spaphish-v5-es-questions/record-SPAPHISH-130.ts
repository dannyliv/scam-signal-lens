import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-130",
  "inputSha256": "79897bc1725ee1c744344cb71f03f4ad2c388016c01d9611234d0f7a26fde604",
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
    "requestSha256": "0d2cc55245b5deac9ea9ed477b8c418c9b765607794ffd355f210f04cc46fc06",
    "capturedAt": "2026-09-22T03:50:49.814Z",
    "elapsedMs": 745.9640960000106,
    "successfulAttemptElapsedMs": 745.1919209999905,
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
          "noul": 0.04
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.08
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.09
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.87
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.43
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "informational": 0.92,
            "active_request": 0.08,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.9
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "independently_established": 0.03,
            "sender_supplied": 0.22,
            "no_sensitive_action": 0.74
          },
          "confidence": 0.66
        }
      },
      "usage": {
        "input_tokens": 5143,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "2d7915e95f9e481a3b9244120b8b02116908a8d5929e39f3e8b70bdd07189fc1",
    "capturedAt": "2026-09-22T03:50:50.337Z",
    "elapsedMs": 520.704602999991,
    "successfulAttemptElapsedMs": 519.5930600000138,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:13",
          "probabilities": {
            "body:2": 0,
            "body:6": 0,
            "body:19": 0.02,
            "body:12": 0.03,
            "body:9": 0,
            "subject:0": 0,
            "body:7": 0,
            "body:8": 0.01,
            "body:15": 0,
            "body:3": 0,
            "body:16": 0.01,
            "body:20": 0,
            "NONE": 0.060000000000000005,
            "body:18": 0,
            "body:10": 0,
            "body:0": 0,
            "body:11": 0.31,
            "body:14": 0,
            "body:5": 0,
            "body:4": 0.01,
            "body:21": 0,
            "body:1": 0,
            "body:17": 0,
            "body:13": 0.51,
            "body:22": 0.04
          },
          "confidence": 0.48
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:2": 0,
            "body:6": 0,
            "body:12": 0.05,
            "body:19": 0.05,
            "body:9": 0,
            "subject:0": 0,
            "body:7": 0,
            "body:8": 0,
            "body:15": 0,
            "body:16": 0,
            "body:3": 0,
            "body:0": 0,
            "NONE": 0.08,
            "body:11": 0.02,
            "body:10": 0,
            "body:18": 0,
            "body:20": 0,
            "body:5": 0,
            "body:14": 0.01,
            "body:22": 0,
            "body:21": 0,
            "body:1": 0,
            "body:13": 0,
            "body:4": 0.77,
            "body:17": 0.02
          },
          "confidence": 0.75
        }
      },
      "usage": {
        "input_tokens": 2441,
        "output_tokens": 523
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1268.6713289999752,
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
    "seq": 631,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-130",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:49.069Z",
    "offsetMs": 0.5247049999888986
  },
  {
    "seq": 632,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-130",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:49.814Z",
    "offsetMs": 745.9638509999786,
    "elapsedMs": 745.1919209999905,
    "outcome": "success"
  },
  {
    "seq": 633,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-130",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:49.816Z",
    "offsetMs": 748.3129740000004
  },
  {
    "seq": 634,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-130",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:50.336Z",
    "offsetMs": 1268.2594459999818,
    "elapsedMs": 519.5930600000138,
    "outcome": "success"
  },
  {
    "seq": 635,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-130",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:50.337Z",
    "offsetMs": 1268.7571559999778,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "5685f25a0346f9eadb5abe337da67c03a4d19f363f13dbe28c8f23a18fb16443";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":632},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":634},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":635}} as const;
export const projectionSha256 = "093d1a326c03d8d614ed5afd075f7d530adeaeab4ddc61ad4e5773e411cb9a02";
