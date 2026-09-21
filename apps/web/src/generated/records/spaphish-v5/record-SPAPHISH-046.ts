import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-046",
  "inputSha256": "8853c0c554e29d0dc5c9feaed845c38460f3a1f5608c3e946b27d40c5f93b62d",
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
      "end": 25,
      "text": "Hola buenos dias mi amiga"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 101,
      "text": "Atención: beneficiario del Fondo, Le envié esta carta hace un mes, pero no he tenido noticias suyas. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 101,
      "end": 139,
      "text": "No estoy segura de si la ha recibido. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 139,
      "end": 184,
      "text": "Por eso, repito: en primer lugar, soy el Dr. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 184,
      "end": 260,
      "text": "Alejandro Valdés, Director Gerente y Presidente del Fondo Monetario Global. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 260,
      "end": 470,
      "text": "Hemos revisado todos los obstáculos y problemas relacionados con su transacción incompleta y su incapacidad para cumplir con los cargos de transferencia que le imponen las opciones de transferencia anteriores. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 470,
      "end": 635,
      "text": "Visite nuestro sitio para obtener su confirmación http://www.fmg.org Somos la Junta Directiva del Banco Global y el Fondo Monetario Global (FMG) en Washington, D.C. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 635,
      "end": 1012,
      "text": "Ficticio, en conjunto con el Departamento del Tesoro de los Estados Unidos y algunas otras Agencias de Investigación relevantes aquí en los Estados Unidos de América. ha ordenado a nuestra Unidad de Pagos de Remesas al Exterior, Banco Unido de Desarrollo (BUD) Acra Ghana, que le emita una Tarjeta VISA, donde se cargarán sus fondos de $5.5 millones, para su posterior retiro. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 1012,
      "end": 1241,
      "text": "Durante el curso de nuestra investigación, descubrimos para nuestra consternación que su pago se ha retrasado innecesariamente por funcionarios corruptos del Banco que están tratando de desviar sus fondos a sus cuentas privadas. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 1241,
      "end": 1371,
      "text": "Y hoy le notificamos que su fondo ha sido acreditado a una tarjeta VISA por parte de BUD y también está listo para ser entregado. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 1371,
      "end": 1439,
      "text": "Ahora póngase en contacto con el servicio de asistencia de BUD, Sr. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 1439,
      "end": 1611,
      "text": "Emeka Okoro, correo electrónico (emeka.okoro.soporte@email-ficticio.net) Envíele la siguiente información para la entrega de su tarjeta VISA ATM acreditada a su dirección. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 1611,
      "end": 1949,
      "text": "Su nombre completo ================== Su país de origen ===================== Su dirección de domicilio ================ Su género =========================== Su edad ============================= Su ocupación ========================= Su número de teléfono correcto ============ Una copia de su DNI ==================== Atentamente, Dr. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 1949,
      "end": 2011,
      "text": "Alejandro Valdés Director General del Fondo Monetario Global. "
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 2011,
      "end": 2041,
      "text": "Fax de contacto: +525512345678"
    }
  ],
  "passA": {
    "requestSha256": "4767b09bd512805e129abbf43828d48b99064bdea760da37e02dd05c027a06a4",
    "capturedAt": "2026-09-20T23:44:05.766Z",
    "elapsedMs": 121.93787499999962,
    "successfulAttemptElapsedMs": 121.13766600000054,
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
          "noul": 0.98
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.19
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.14
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.31
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.98
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.55
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.38
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.39
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
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
            "independently_established": 0,
            "no_sensitive_action": 0,
            "sender_supplied": 1,
            "mixed_or_unknown": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3898,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "62b579f0f1c27717cf52734d9ee4224e2859074965ece043ecdd115049c93096",
    "capturedAt": "2026-09-21T00:57:16.456Z",
    "elapsedMs": 130.9955,
    "successfulAttemptElapsedMs": 128.69504200000029,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:11",
          "probabilities": {
            "body:9": 0,
            "body:2": 0,
            "body:7": 0,
            "subject:0": 0,
            "body:12": 0,
            "body:6": 0,
            "body:10": 0.05,
            "body:3": 0,
            "body:8": 0,
            "body:11": 0.95,
            "NONE": 0,
            "body:5": 0,
            "body:1": 0,
            "body:4": 0,
            "body:13": 0,
            "body:0": 0
          },
          "confidence": 0.94
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:9": 0.23,
            "body:2": 0,
            "body:7": 0.08,
            "subject:0": 0,
            "body:12": 0,
            "body:6": 0,
            "body:10": 0.1,
            "body:3": 0,
            "body:8": 0.07,
            "body:11": 0.01,
            "NONE": 0.4,
            "body:5": 0,
            "body:1": 0,
            "body:4": 0.02,
            "body:13": 0,
            "body:0": 0.08
          },
          "confidence": 0.35
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:9": 0.06,
            "subject:0": 0,
            "body:7": 0,
            "body:2": 0.08,
            "body:12": 0.02,
            "body:6": 0.03,
            "body:10": 0.03,
            "body:3": 0.77,
            "body:8": 0,
            "body:11": 0,
            "NONE": 0,
            "body:5": 0.01,
            "body:1": 0,
            "body:4": 0,
            "body:13": 0,
            "body:0": 0
          },
          "confidence": 0.75
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:9": 0.05,
            "subject:0": 0,
            "body:7": 0.22,
            "body:2": 0,
            "body:12": 0,
            "body:6": 0,
            "body:3": 0,
            "body:10": 0.13,
            "body:8": 0,
            "body:11": 0.01,
            "NONE": 0.53,
            "body:5": 0.05,
            "body:1": 0,
            "body:4": 0.01,
            "body:13": 0,
            "body:0": 0
          },
          "confidence": 0.49
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:9": 0.01,
            "body:2": 0,
            "body:7": 0,
            "subject:0": 0,
            "body:12": 0,
            "body:6": 0,
            "body:10": 0.05,
            "body:3": 0,
            "body:8": 0.01,
            "body:11": 0.03,
            "NONE": 0.28,
            "body:5": 0,
            "body:1": 0,
            "body:4": 0.62,
            "body:13": 0,
            "body:0": 0
          },
          "confidence": 0.58
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:9": 0,
            "body:2": 0,
            "body:7": 0,
            "subject:0": 0,
            "body:12": 0,
            "body:6": 0.36,
            "body:10": 0,
            "body:3": 0,
            "body:8": 0.03,
            "body:11": 0,
            "NONE": 0.61,
            "body:5": 0,
            "body:1": 0,
            "body:4": 0,
            "body:13": 0,
            "body:0": 0
          },
          "confidence": 0.57
        }
      },
      "usage": {
        "input_tokens": 6357,
        "output_tokens": 1011
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 385.8295410000005,
  "derived": {
    "concern": "strong_warning_signs",
    "triggeredRuleIds": [
      "H5"
    ],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "selected",
        "segmentId": "body:11"
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
        "status": "selected",
        "segmentId": "body:3"
      },
      "verification_bypass": {
        "status": "low_confidence",
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
        "status": "low_confidence",
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
      "avoid_sender_route",
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 222,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-046",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:05.644Z",
    "offsetMs": 0.458042000000205
  },
  {
    "seq": 223,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-046",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:05.766Z",
    "offsetMs": 121.93683299999975,
    "elapsedMs": 121.13766600000054,
    "outcome": "success"
  },
  {
    "seq": 224,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-046",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:05.769Z",
    "offsetMs": 125.56324999999924
  },
  {
    "seq": 225,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-046",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:05.897Z",
    "offsetMs": 252.71987500000068,
    "elapsedMs": 126.47595899999942,
    "outcome": "success"
  },
  {
    "seq": 226,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-046",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:05.897Z",
    "offsetMs": 252.98466700000063,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2498,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-046",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:16.326Z",
    "offsetMs": 2.7957500000002256
  },
  {
    "seq": 2499,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-046",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:16.455Z",
    "offsetMs": 132.07558300000028,
    "elapsedMs": 128.69504200000029,
    "outcome": "success"
  },
  {
    "seq": 2500,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-046",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:16.456Z",
    "offsetMs": 132.81783300000006,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "96b824d520379f3594fc04bf5b768a7f11d3f42f43c28a4f7d0ab7af1bf32254";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":223},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2499},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2500}} as const;
export const projectionSha256 = "3173bd87b3c023337e51327713cacd29cb3361d3f1afc4426c682d97812aa667";
