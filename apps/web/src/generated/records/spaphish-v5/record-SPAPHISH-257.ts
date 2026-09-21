import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-257",
  "inputSha256": "73dcf22b3c0ded6ea2fcaa3548e64311509c3a2149173af09977b750458f8648",
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
      "text": "¡Gracias por usar nuestros servicios bancarios!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 98,
      "text": "Su documento ha sido completado REVISAR DOCUMENTO Banco BBVA notificaciones.bbva@docs-service.com\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 98,
      "end": 145,
      "text": " Todas las partes han completado el documento. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 145,
      "end": 192,
      "text": "Gracias por usar nuestros servicios bancarios. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 192,
      "end": 316,
      "text": "Desarrollado por DocuSign No comparta este correo electrónico Este correo electrónico contiene un enlace seguro a DocuSign. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 316,
      "end": 397,
      "text": "No comparta con nadie este correo electrónico, el enlace, o el código de acceso. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 397,
      "end": 619,
      "text": "Método de firma alternativo Visite DocuSign.com, haga clic en “Acceder a los documentos”, e ingrese el código de seguridad: 4F91C8D72AE65910B3QZLMPX8821J74 Sobre DocuSign Firme documentos de manera electrónica en minutos. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 619,
      "end": 654,
      "text": "Es seguro y vinculante legalmente. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 654,
      "end": 846,
      "text": "Ya sea que esté en una oficina, en la casa, o en cualquier lugar (incluso alrededor del mundo), DocuSign brinda una solución profesional confiable para la gestión de transacciones digitales™. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 846,
      "end": 889,
      "text": "¿Tiene alguna pregunta sobre el documento? "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 889,
      "end": 1070,
      "text": "Si necesita modificar el documento, o tiene preguntas sobre la información en este, comuníquese directamente con el remitente mediante correo electrónico o responda a este mensaje. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 1070,
      "end": 1187,
      "text": "Si tiene algún problema para firmar el documento, visite la página Ayuda con la firma en nuestro Centro de atención. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 1187,
      "end": 1333,
      "text": "Descargar la aplicación de DocuSign Este mensaje fue enviado a usted por el Banco BBVA que está usando el servicio de firma electrónica DocuSign. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 1333,
      "end": 1437,
      "text": "Si prefiere no recibir mensajes de correo electrónico de este remitente, solicítelo directamente a este."
    }
  ],
  "passA": {
    "requestSha256": "43ab757583d48c454e9c761a2cc4324e002d5fe27c535bafd49305fdcff4671b",
    "capturedAt": "2026-09-20T23:45:17.367Z",
    "elapsedMs": 156.22616700000071,
    "successfulAttemptElapsedMs": 153.92695799999638,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.06
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.15
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.04
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.08
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.89
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.28
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.26
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.39,
            "active_request": 0.6,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0.01
          },
          "confidence": 0.46
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.04,
            "no_sensitive_action": 0.15,
            "sender_supplied": 0.8,
            "independently_established": 0.01
          },
          "confidence": 0.73
        }
      },
      "usage": {
        "input_tokens": 3774,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "b09b470971f5c88bc301a5bc70233728ef75452b3f3176462860e85faece43b8",
    "capturedAt": "2026-09-21T00:57:24.760Z",
    "elapsedMs": 131.47941600000013,
    "successfulAttemptElapsedMs": 128.83912500000042,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:11",
          "probabilities": {
            "body:0": 0.33,
            "subject:0": 0.1,
            "body:7": 0,
            "body:3": 0.01,
            "NONE": 0.06,
            "body:4": 0.04,
            "body:6": 0,
            "body:5": 0.01,
            "body:10": 0.01,
            "body:11": 0.38,
            "body:2": 0.02,
            "body:1": 0,
            "body:8": 0.01,
            "body:9": 0.03,
            "body:12": 0
          },
          "confidence": 0.32
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "subject:0": 0,
            "body:7": 0,
            "body:4": 0.12,
            "NONE": 0.66,
            "body:3": 0.01,
            "body:6": 0,
            "body:5": 0.08,
            "body:11": 0,
            "body:10": 0,
            "body:2": 0,
            "body:1": 0,
            "body:8": 0.01,
            "body:9": 0.12,
            "body:12": 0
          },
          "confidence": 0.63
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.01,
            "subject:0": 0,
            "body:7": 0,
            "body:4": 0.01,
            "NONE": 0.45,
            "body:3": 0,
            "body:6": 0,
            "body:5": 0.4,
            "body:10": 0.02,
            "body:11": 0.01,
            "body:2": 0,
            "body:1": 0,
            "body:9": 0.09,
            "body:8": 0.01,
            "body:12": 0
          },
          "confidence": 0.4
        }
      },
      "usage": {
        "input_tokens": 3002,
        "output_tokens": 479
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 453.1786239999965,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence"
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
    "seq": 1258,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-257",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:17.212Z",
    "offsetMs": 1.7336660000000848
  },
  {
    "seq": 1259,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-257",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:17.367Z",
    "offsetMs": 156.2271250000049,
    "elapsedMs": 153.92695799999638,
    "outcome": "success"
  },
  {
    "seq": 1260,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-257",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:17.371Z",
    "offsetMs": 160.07050000000163
  },
  {
    "seq": 1261,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-257",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:17.530Z",
    "offsetMs": 319.86941600000137,
    "elapsedMs": 159.07825000000594,
    "outcome": "success"
  },
  {
    "seq": 1262,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-257",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:17.531Z",
    "offsetMs": 320.0326250000071,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2650,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-257",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:24.630Z",
    "offsetMs": 3.1097499999996217
  },
  {
    "seq": 2651,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-257",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:24.760Z",
    "offsetMs": 132.5945410000004,
    "elapsedMs": 128.83912500000042,
    "outcome": "success"
  },
  {
    "seq": 2652,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-257",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:24.760Z",
    "offsetMs": 133.0589999999993,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d898dbf8fd0e0575b53f01dd749ec4f0500e1c15de685296bab7ed013dfb7704";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1259},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2651},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2652}} as const;
export const projectionSha256 = "0436549be2930261ffd6bd5a6c3817485f4e10a7a2cb4ef5770ca64c72901524";
