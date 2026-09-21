import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-273",
  "inputSha256": "44c5cf798bfbda9f6a9ee5889def0a1880e5adb58dc4f7559c0ae93e45771c67",
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
      "end": 26,
      "text": "Tenemos un voucher para ti"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 158,
      "text": "Hola Ricardo López Lamentamos que tu vuelo 9012 del viernes 10 marzo 2020 con reservación R9HTZP no pueda despegar en estos tiempos de transformación global. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 158,
      "end": 285,
      "text": "Pero tenemos un voucher por el valor de tus vuelos para llevarte a una nueva aventura cuando el cielo deje de tener fronteras. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 285,
      "end": 462,
      "text": "Pasajero Referencia voucher Monto voucher Ricardo López 44556677889900009 $5,250.00 MXN Descubre cómo redimir tu voucher y conoce los términos y condiciones haciendo clic aquí. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 462,
      "end": 576,
      "text": "Recuerda que para hacerlo válido en tu nueva reservación el nombre debe coincidir exactamente con el del voucher. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 576,
      "end": 681,
      "text": "#InterjetContigoSiempre Contáctanos aquí Copyright © 2020 | Aerolínea X | Todos los derechos reservados. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 681,
      "end": 803,
      "text": "Este mensaje fue enviado desde una dirección de correo electrónico exclusivamente de notificación que no admite mensajes. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 803,
      "end": 864,
      "text": "Si tienes alguna pregunta, comunícate a Servicio a clientes. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 864,
      "end": 926,
      "text": "Aerolínea X | Avenida Aeropuerto 100 | Ciudad Satélite | 99001"
    }
  ],
  "passA": {
    "requestSha256": "c987e020288869a662f3a2f7927964c9515b407b361f8dc77006bf84523ed895",
    "capturedAt": "2026-09-20T23:45:23.726Z",
    "elapsedMs": 166.2122079999972,
    "successfulAttemptElapsedMs": 165.0571670000063,
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
          "noul": 0.12
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.31
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.06
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.09
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.89
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.2
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.2
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 0.04,
            "educational_or_quoted": 0,
            "active_request": 0.96
          },
          "confidence": 0.95
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.54,
            "independently_established": 0,
            "no_sensitive_action": 0.45
          },
          "confidence": 0.38
        }
      },
      "usage": {
        "input_tokens": 3687,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "f12dface152c351125ecbfdd5e590e915386d50adf03d8f9f88b7fae2047ba77",
    "capturedAt": "2026-09-20T23:45:23.830Z",
    "elapsedMs": 102.29862500001036,
    "successfulAttemptElapsedMs": 100.50495800000499,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:5": 0,
            "body:4": 0,
            "body:6": 0,
            "subject:0": 0.01,
            "body:7": 0,
            "NONE": 0.39,
            "body:2": 0.52,
            "body:0": 0,
            "body:1": 0.02,
            "body:3": 0.06
          },
          "confidence": 0.45
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:5": 0.04,
            "body:4": 0.33,
            "body:6": 0.27,
            "subject:0": 0.01,
            "body:7": 0.08,
            "NONE": 0.11,
            "body:2": 0.04,
            "body:3": 0.01,
            "body:1": 0.02,
            "body:0": 0.09
          },
          "confidence": 0.26
        }
      },
      "usage": {
        "input_tokens": 1796,
        "output_tokens": 221
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 270.5633749999979,
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
        "status": "low_confidence",
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
    "seq": 1337,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-273",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:23.561Z",
    "offsetMs": 0.7689580000005662
  },
  {
    "seq": 1338,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-273",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:23.726Z",
    "offsetMs": 166.21174999998766,
    "elapsedMs": 165.0571670000063,
    "outcome": "success"
  },
  {
    "seq": 1339,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-273",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:23.729Z",
    "offsetMs": 169.17508299999463
  },
  {
    "seq": 1340,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-273",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:23.830Z",
    "offsetMs": 270.304999999993,
    "elapsedMs": 100.50495800000499,
    "outcome": "success"
  },
  {
    "seq": 1341,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-273",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:23.830Z",
    "offsetMs": 270.6222080000007,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7004ccb66e5bb5a0d1981adb216278547fc6fea6760213c994cafc855f1282ed";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1338},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1340},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1341}} as const;
export const projectionSha256 = "5f6e8e100fd73a1d28a34304237b0545dcc21414f810516772d23989f203cb23";
