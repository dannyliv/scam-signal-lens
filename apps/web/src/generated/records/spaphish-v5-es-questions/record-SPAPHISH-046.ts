import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-046",
  "inputSha256": "8853c0c554e29d0dc5c9feaed845c38460f3a1f5608c3e946b27d40c5f93b62d",
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
    "requestSha256": "e8d16b8acfd5e7e8767a309e2f04695ea3bc89a6e8809148ca2e6c8a7af8367e",
    "capturedAt": "2026-09-22T03:49:06.611Z",
    "elapsedMs": 674.0444530000022,
    "successfulAttemptElapsedMs": 673.263844000001,
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
          "noul": 0.11
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.07
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.34
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.98
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.52
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
          "noul": 0.45
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
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.99,
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "no_sensitive_action": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 5348,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "09d843597517dbadaa30e397c5d8b89701e83b4790173d6808e628aff2a19e3e",
    "capturedAt": "2026-09-22T03:49:07.246Z",
    "elapsedMs": 632.9943570000032,
    "successfulAttemptElapsedMs": 632.0985270000019,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:11",
          "probabilities": {
            "NONE": 0,
            "body:12": 0,
            "body:4": 0,
            "body:10": 0.07,
            "body:7": 0,
            "body:2": 0,
            "body:9": 0,
            "body:5": 0,
            "body:6": 0,
            "body:1": 0,
            "body:11": 0.93,
            "subject:0": 0,
            "body:3": 0,
            "body:13": 0,
            "body:8": 0,
            "body:0": 0
          },
          "confidence": 0.92
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.32,
            "body:12": 0,
            "body:4": 0.02,
            "body:10": 0.13,
            "body:7": 0.16,
            "body:2": 0,
            "body:9": 0.2,
            "body:5": 0.01,
            "body:6": 0,
            "body:1": 0,
            "body:11": 0.01,
            "subject:0": 0,
            "body:3": 0,
            "body:8": 0.11,
            "body:13": 0,
            "body:0": 0.04
          },
          "confidence": 0.26
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "NONE": 0,
            "body:12": 0.02,
            "body:4": 0,
            "body:10": 0.04,
            "body:7": 0,
            "body:2": 0.06,
            "body:9": 0.04,
            "body:5": 0.01,
            "body:6": 0.02,
            "body:1": 0,
            "body:11": 0.01,
            "subject:0": 0,
            "body:3": 0.8,
            "body:8": 0,
            "body:13": 0,
            "body:0": 0
          },
          "confidence": 0.78
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.53,
            "body:12": 0,
            "body:4": 0.03,
            "body:10": 0.18000000000000002,
            "body:7": 0.07,
            "body:2": 0,
            "body:9": 0.08,
            "body:5": 0.09,
            "body:6": 0,
            "body:1": 0,
            "body:11": 0.01,
            "subject:0": 0,
            "body:3": 0,
            "body:8": 0,
            "body:13": 0,
            "body:0": 0
          },
          "confidence": 0.49
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "NONE": 0.33,
            "body:12": 0,
            "body:4": 0.59,
            "body:10": 0.04,
            "body:7": 0,
            "body:2": 0,
            "body:9": 0.01,
            "body:5": 0,
            "body:6": 0,
            "body:1": 0,
            "body:11": 0.02,
            "subject:0": 0,
            "body:3": 0,
            "body:13": 0,
            "body:8": 0.01,
            "body:0": 0
          },
          "confidence": 0.55
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.71,
            "body:12": 0,
            "body:4": 0,
            "body:10": 0,
            "body:7": 0,
            "body:2": 0,
            "body:9": 0,
            "body:5": 0,
            "body:6": 0.27,
            "body:1": 0,
            "body:11": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:13": 0,
            "body:8": 0.02,
            "body:0": 0
          },
          "confidence": 0.69
        }
      },
      "usage": {
        "input_tokens": 6996,
        "output_tokens": 1011
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1309.328684,
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
        "status": "none_selected",
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
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-046",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:05.938Z",
    "offsetMs": 0.5056870000044
  },
  {
    "seq": 223,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-046",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:06.611Z",
    "offsetMs": 674.0469389999998,
    "elapsedMs": 673.263844000001,
    "outcome": "success"
  },
  {
    "seq": 224,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-046",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:06.613Z",
    "offsetMs": 676.2935300000026
  },
  {
    "seq": 225,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-046",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:07.246Z",
    "offsetMs": 1308.8092930000057,
    "elapsedMs": 632.0985270000019,
    "outcome": "success"
  },
  {
    "seq": 226,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-046",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:07.246Z",
    "offsetMs": 1309.385181000005,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "46df1d9f145eb4427938b3dbfe2e15354e87c8c0218e3e29713c591ab913a75f";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":223},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":225},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":226}} as const;
export const projectionSha256 = "5cafe0a310c046af0a6201960db69a7a687b47ebdc665399e2347b7d06d2a3b1";
