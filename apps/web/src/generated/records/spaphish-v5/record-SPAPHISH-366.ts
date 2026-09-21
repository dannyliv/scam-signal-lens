import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-366",
  "inputSha256": "50b076ae62ba5b419dc6f887d1dd7c9b0e11128b136c280c6a866b173fb1f5ee",
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
      "end": 13,
      "text": "Tu paquete  !"
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 13,
      "end": 21,
      "text": "#MX81f3K"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 214,
      "text": "[Correos de México] Estimado/a Cliente, Nos ponemos en contacto con usted para informarle que su paquete se encuentra retenido en nuestro centro de distribución debido a la falta de pago de los derechos de aduana. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 214,
      "end": 325,
      "text": "Para garantizar la entrega sin inconvenientes, es necesario completar el pago de (95.50 MXN) lo antes posible. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 325,
      "end": 581,
      "text": "Información del paquete: ID de seguimiento: 1234567890 Destino: [Su dirección de entrega] Fecha de retención: 17/11/2025 ⚠️ Si el pago no se realiza en los próximos 3 días hábiles, el paquete será devuelto al remitente o podría generar cargos adicionales. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 581,
      "end": 870,
      "text": "Puede completar el pago de manera rápida y segura haciendo clic en el botón a continuación: Completar Pago y Enviar Paquete https://correos-seguro.com/pago-aduana Una vez que el pago se haya realizado con éxito, su paquete será procesado y enviado dentro de las próximas 48 horas hábiles. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 870,
      "end": 983,
      "text": "Si tiene alguna duda sobre su envío, no dude en ponerse en contacto con nuestro servicio de atención al cliente. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 983,
      "end": 1031,
      "text": "Nota: Este mensaje es generado automáticamente. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 1031,
      "end": 1085,
      "text": "Para más información, consulte nuestro portal oficial."
    }
  ],
  "passA": {
    "requestSha256": "cf9ce8616b6212f3e17666a8fee6e97c2ba06c46a68f6ded200a0d0f23852c63",
    "capturedAt": "2026-09-20T23:45:55.501Z",
    "elapsedMs": 199.43904199999815,
    "successfulAttemptElapsedMs": 197.27458299999125,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.04
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.78
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.98
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.98
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.31
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.49
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
          "noul": 0.15
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "mixed_or_unclear": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0,
            "sender_supplied": 1,
            "independently_established": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3704,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "7723dec847a950262899b800f8e893e5916a82032468d22412da87d5f1dfcd15",
    "capturedAt": "2026-09-20T23:45:55.632Z",
    "elapsedMs": 129.4086249999964,
    "successfulAttemptElapsedMs": 127.66337499998917,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:2": 0,
            "body:4": 0,
            "subject:1": 0,
            "body:0": 0,
            "body:1": 0.03,
            "body:5": 0,
            "body:6": 0,
            "NONE": 0.15,
            "body:3": 0.8200000000000001,
            "subject:0": 0
          },
          "confidence": 0.78
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "body:4": 0,
            "subject:1": 0,
            "body:0": 0,
            "body:1": 0.73,
            "body:3": 0.27,
            "body:6": 0,
            "NONE": 0,
            "body:5": 0,
            "subject:0": 0
          },
          "confidence": 0.7
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 1,
            "body:4": 0,
            "body:0": 0,
            "subject:1": 0,
            "body:1": 0,
            "body:3": 0,
            "body:6": 0,
            "NONE": 0,
            "body:5": 0,
            "subject:0": 0
          },
          "confidence": 1
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0,
            "body:4": 0.01,
            "body:0": 0.99,
            "subject:1": 0,
            "body:1": 0,
            "body:3": 0,
            "body:6": 0,
            "NONE": 0,
            "body:5": 0,
            "subject:0": 0
          },
          "confidence": 0.97
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "body:4": 0.03,
            "subject:1": 0,
            "body:0": 0,
            "body:1": 0.01,
            "body:3": 0.15,
            "body:6": 0.01,
            "NONE": 0.8,
            "body:5": 0,
            "subject:0": 0
          },
          "confidence": 0.77
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "body:4": 0,
            "body:0": 0,
            "subject:1": 0,
            "body:1": 0.58,
            "body:3": 0.16,
            "body:6": 0,
            "NONE": 0.26,
            "body:5": 0,
            "subject:0": 0
          },
          "confidence": 0.52
        }
      },
      "usage": {
        "input_tokens": 4437,
        "output_tokens": 664
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 331.1370420000021,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:3"
      },
      "payment_request": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:2"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:0"
      },
      "verification_bypass": {
        "status": "none_selected",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "low_confidence",
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
    "seq": 1793,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-366",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:55.303Z",
    "offsetMs": 1.5757920000032755
  },
  {
    "seq": 1794,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-366",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:55.501Z",
    "offsetMs": 199.43920900000376,
    "elapsedMs": 197.27458299999125,
    "outcome": "success"
  },
  {
    "seq": 1795,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-366",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:55.504Z",
    "offsetMs": 202.58179200001177
  },
  {
    "seq": 1796,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-366",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:55.632Z",
    "offsetMs": 330.77437500000815,
    "elapsedMs": 127.66337499998917,
    "outcome": "success"
  },
  {
    "seq": 1797,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-366",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:55.632Z",
    "offsetMs": 331.1964169999992,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "3625613ba7647bc7febfe2a00cff6d571428490a57d6b02ebfd08c93a6314901";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1794},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1796},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1797}} as const;
export const projectionSha256 = "268f2b1c928232f3a9602a5c815f7d4c0bd10c096fcbeaa4dfa68dedefe94842";
