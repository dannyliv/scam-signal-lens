import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-395",
  "inputSha256": "aee3102d2cbb2e12033e9eb340d4c651eef7797f67bc51e2eae2dd7a1144ec4f",
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
    "requestSha256": "83215987b26efbe5149f61195829b27fb05326fd9921553505b66859203b58e4",
    "capturedAt": "2026-09-22T03:56:04.822Z",
    "elapsedMs": 612.2746000000043,
    "successfulAttemptElapsedMs": 610.7662279999931,
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
          "noul": 0.07
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.06
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.22
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.84
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.31
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.06
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "informational": 0.76,
            "active_request": 0.23,
            "mixed_or_unclear": 0.01,
            "educational_or_quoted": 0
          },
          "confidence": 0.68
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.33,
            "independently_established": 0,
            "no_sensitive_action": 0.66
          },
          "confidence": 0.55
        }
      },
      "usage": {
        "input_tokens": 5292,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "46f54b539c8f6a072eb692f4b52f8e4d9596e777d2046963f2c313addfdf4775",
    "capturedAt": "2026-09-22T03:56:05.396Z",
    "elapsedMs": 571.6691640000208,
    "successfulAttemptElapsedMs": 570.1928039999912,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.59,
            "body:9": 0,
            "body:1": 0.01,
            "body:5": 0,
            "body:11": 0,
            "body:0": 0,
            "body:3": 0.01,
            "body:7": 0,
            "body:10": 0,
            "body:4": 0.36,
            "subject:0": 0,
            "body:8": 0,
            "body:2": 0.02,
            "body:6": 0.01
          },
          "confidence": 0.55
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "NONE": 0.21,
            "body:2": 0.03,
            "body:1": 0,
            "body:5": 0.04,
            "body:9": 0,
            "body:0": 0.02,
            "body:3": 0.01,
            "body:11": 0.01,
            "body:10": 0,
            "body:4": 0.58,
            "subject:0": 0,
            "body:8": 0.06,
            "body:7": 0.03,
            "body:6": 0.01
          },
          "confidence": 0.56
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "NONE": 0.16,
            "body:11": 0.01,
            "body:1": 0.01,
            "body:5": 0.01,
            "body:7": 0,
            "body:0": 0.01,
            "body:3": 0.01,
            "body:8": 0.02,
            "body:10": 0,
            "body:4": 0.45999999999999996,
            "body:9": 0,
            "subject:0": 0,
            "body:2": 0.3,
            "body:6": 0.01
          },
          "confidence": 0.43
        }
      },
      "usage": {
        "input_tokens": 3524,
        "output_tokens": 448
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1187.5212639999809,
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
        "status": "low_confidence",
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
    "seq": 1935,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-395",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:04.210Z",
    "offsetMs": 1.13621399999829
  },
  {
    "seq": 1936,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-395",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:04.821Z",
    "offsetMs": 612.2753819999634,
    "elapsedMs": 610.7662279999931,
    "outcome": "success"
  },
  {
    "seq": 1937,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-395",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:56:04.826Z",
    "offsetMs": 616.5383129999973
  },
  {
    "seq": 1938,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-395",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:56:05.396Z",
    "offsetMs": 1187.2023729999783,
    "elapsedMs": 570.1928039999912,
    "outcome": "success"
  },
  {
    "seq": 1939,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-395",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:56:05.397Z",
    "offsetMs": 1187.5752130000037,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "8a0712a7aaa2a8a8e69c25715998a44218bb92c1addc20083bd4fa618d807156";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1936},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1938},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1939}} as const;
export const projectionSha256 = "675001671314fa3cd95ec0e39c8529feafbd32777abfe808e9adbeca67c36124";
