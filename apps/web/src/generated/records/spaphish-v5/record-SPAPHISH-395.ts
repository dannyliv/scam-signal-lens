import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-395",
  "inputSha256": "aee3102d2cbb2e12033e9eb340d4c651eef7797f67bc51e2eae2dd7a1144ec4f",
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
      "end": 24,
      "text": "Resumen de compra Telcel"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 89,
      "text": "Activación de Paquete Gracias por utilizar el servicio de compra de paquetes en MegaFon. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 89,
      "end": 154,
      "text": "Tu paquete ya está disponible, puedes utilizarlo inmediatamente. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 154,
      "end": 248,
      "text": "En Mi MegaFon ahorra tiempo en futuras compras, te recomendamos activar la Compra programada. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 248,
      "end": 318,
      "text": "Sólo elige el tipo de paquete que deseas y nosotros hacemos el resto. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 318,
      "end": 878,
      "text": "Detalles de la operación: Número MegaFon 5581234567 Paquete Internet por tiempo Monto $25.00 Vigencia 2 horas Forma de pago **** 8901 Correo electrónico r.salas@correo.net Folio MegaFon 987654321 No. de orden Vesta Q9G5XKWDC8A Fecha y hora 05/08/2021 07:53 hrs IMPORTANTE: En caso de no haber solicitado la compra del paquete indicado en esta confirmación , contacta a un representante de Atención a Clientes de Vesta marcando sin costo al 800 ‍999 ‍8877 o envía un correo electrónico a soporte.pagos.megafon@securepay.net y proporciona el No. de orden Vesta. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 878,
      "end": 1029,
      "text": "MegaFon nunca te pedirá que reveles, verifiques ni compartas tu contraseña o claves de acceso por teléfono, SMS, correo electrónico ni Redes Sociales. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 1029,
      "end": 1192,
      "text": "Si recibes por cualquier medio un enlace para actualizar la información de tu cuenta o perfil sin haberlo solicitado, NO hagas clic en el enlace y haz caso omiso. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 1192,
      "end": 1207,
      "text": "¿Tienes dudas? "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 1207,
      "end": 1359,
      "text": "Envíanos un correo electrónico Consulta nuestro aviso de privacidad en www.mimegafon.com/privacidad © 2021 Comunicaciones Móviles Globales S.A. de C.V. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 1359,
      "end": 1390,
      "text": "Todos los derechos reservados. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 1390,
      "end": 1445,
      "text": "Este mensaje fue generado por un sistema automatizado. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 1445,
      "end": 1484,
      "text": "Por favor, no respondas a este mensaje."
    }
  ],
  "passA": {
    "requestSha256": "504636a389e1abc634e6e37d0d0ac509678dff7ce5d009ca44d842ffdcc62820",
    "capturedAt": "2026-09-20T23:46:04.669Z",
    "elapsedMs": 235.95479100002558,
    "successfulAttemptElapsedMs": 233.79612500002258,
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
          "noul": 0.06
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.08
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.12
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.85
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.12
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
          "noul": 0.32
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0.26,
            "informational": 0.71,
            "mixed_or_unclear": 0.03,
            "educational_or_quoted": 0
          },
          "confidence": 0.61
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.35,
            "independently_established": 0.01,
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.63
          },
          "confidence": 0.52
        }
      },
      "usage": {
        "input_tokens": 3842,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "85459b2bf6bd2f9cc05921ad1358e5992b069cfae5c90b405cc71379c63d9112",
    "capturedAt": "2026-09-20T23:46:04.829Z",
    "elapsedMs": 157.05091699998593,
    "successfulAttemptElapsedMs": 154.8169169999892,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:6": 0,
            "subject:0": 0,
            "body:11": 0.01,
            "NONE": 0.19,
            "body:7": 0.01,
            "body:4": 0.67,
            "body:1": 0,
            "body:9": 0,
            "body:3": 0,
            "body:10": 0,
            "body:2": 0.04,
            "body:0": 0.02,
            "body:8": 0.03,
            "body:5": 0.03
          },
          "confidence": 0.65
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:7": 0,
            "subject:0": 0,
            "body:11": 0.01,
            "NONE": 0.11,
            "body:6": 0.01,
            "body:4": 0.25,
            "body:1": 0.01,
            "body:0": 0.01,
            "body:3": 0,
            "body:10": 0,
            "body:9": 0,
            "body:2": 0.58,
            "body:8": 0.01,
            "body:5": 0.01
          },
          "confidence": 0.55
        }
      },
      "usage": {
        "input_tokens": 2386,
        "output_tokens": 302
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 396.6720830000122,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence",
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
    "seq": 1937,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-395",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:04.434Z",
    "offsetMs": 1.634583000006387
  },
  {
    "seq": 1938,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-395",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:04.668Z",
    "offsetMs": 235.95395799999824,
    "elapsedMs": 233.79612500002258,
    "outcome": "success"
  },
  {
    "seq": 1939,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-395",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:04.673Z",
    "offsetMs": 240.99037499999395
  },
  {
    "seq": 1940,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-395",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:04.829Z",
    "offsetMs": 396.40320800000336,
    "elapsedMs": 154.8169169999892,
    "outcome": "success"
  },
  {
    "seq": 1941,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-395",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:04.829Z",
    "offsetMs": 396.7319579999894,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d1e737f3a81210efad61718960ca37e02f581a257924f1a0dec7ec3dd6394244";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1938},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1940},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1941}} as const;
export const projectionSha256 = "6cf8dfce475888a7463fd3c0005b0490be4dd8729674f5c2e538de3ec9058ff2";
