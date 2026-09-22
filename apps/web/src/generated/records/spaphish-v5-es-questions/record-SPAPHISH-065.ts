import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-065",
  "inputSha256": "8beeca66d0d25bc0cb138b84b6e489633dc28f2c7131b9f259c6f99797f1161d",
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
      "end": 27,
      "text": "seguimiento a cotizaciones "
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 192,
      "text": "55 1234 5678 ricardo.lopez@fijaciontotal.net 01/03/2024 soporte.cliente@correo-ficticio.mx a quien corresponda: buenos dias continuamos ofreciéndole toda la gama de tornillería que manejamos. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 192,
      "end": 239,
      "text": "Podemos ofrecerle el mejor precio del mercado. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 239,
      "end": 453,
      "text": "En Fijación Total, S.A. de C.V., Somos fabricantes, importadores y distribuidores de tornillos, tuercas, birlos, varillas, nesting caps: artículos de sujeción y fijación, contamos con el mayor inventario del país. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 453,
      "end": 524,
      "text": "Manejamos precios de mayoreo y atención especializada para su empresa. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 524,
      "end": 591,
      "text": "Contamos con el envío de material flete pagado hasta su domicilio. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 591,
      "end": 707,
      "text": "Para sus compras continuas, podemos ofrecer el tramite de una línea de crédito a 30 dias para agilizar sus pedidos. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 707,
      "end": 1014,
      "text": "Conoce toda la gama de materiales que tenemos para ti, entra a nuestro catálogo en línea. https://fijaciontotal.net/catalogo https://youtu.be/7Vj5xlEh-AY Más de 20 mil productos en nuestro inventario, disponibles para entregar el mismo día, hacen de Fijación Total la empresa con mayor variedad en el país. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 1014,
      "end": 1035,
      "text": "Quedo a su servicio. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 1035,
      "end": 1040,
      "text": "Ing. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 1040,
      "end": 1088,
      "text": "Ricardo López www.fijaciontotal.net 55 1234 5678"
    }
  ],
  "passA": {
    "requestSha256": "daea3b6c6b5e03b159c1db6a0451e872b03c319b48d19edfbdab2823f1e21d73",
    "capturedAt": "2026-09-22T03:49:30.124Z",
    "elapsedMs": 691.3705079999927,
    "successfulAttemptElapsedMs": 690.4479790000041,
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
          "noul": 0.04
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.26
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.86
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.07
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
            "active_request": 0.66,
            "informational": 0.34,
            "mixed_or_unclear": 0
          },
          "confidence": 0.55
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.95,
            "sender_supplied": 0.05,
            "mixed_or_unknown": 0
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 5196,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "784bc572a876970f3b7d075a7fe7a8e53cbc68034f2874989b683f5dee305a25",
    "capturedAt": "2026-09-22T03:49:30.713Z",
    "elapsedMs": 586.8174549999967,
    "successfulAttemptElapsedMs": 585.8417740000004,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:8": 0,
            "NONE": 0.76,
            "body:6": 0.1,
            "body:2": 0,
            "body:4": 0,
            "body:9": 0,
            "subject:0": 0,
            "body:1": 0,
            "body:0": 0,
            "body:5": 0.13,
            "body:7": 0,
            "body:3": 0.01
          },
          "confidence": 0.73
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:8",
          "probabilities": {
            "body:8": 0.39,
            "NONE": 0.11,
            "body:7": 0.04,
            "body:2": 0.22,
            "body:4": 0,
            "body:9": 0.04,
            "subject:0": 0.01,
            "body:1": 0,
            "body:0": 0.16,
            "body:5": 0.01,
            "body:6": 0,
            "body:3": 0.02
          },
          "confidence": 0.33
        }
      },
      "usage": {
        "input_tokens": 2243,
        "output_tokens": 255
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1279.7989700000035,
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
        "status": "none_selected",
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
    "seq": 316,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-065",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:29.433Z",
    "offsetMs": 0.599874000006821
  },
  {
    "seq": 317,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-065",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:30.124Z",
    "offsetMs": 691.3704419999995,
    "elapsedMs": 690.4479790000041,
    "outcome": "success"
  },
  {
    "seq": 318,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-065",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:30.126Z",
    "offsetMs": 693.1918670000014
  },
  {
    "seq": 319,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-065",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:30.712Z",
    "offsetMs": 1279.4941150000086,
    "elapsedMs": 585.8417740000004,
    "outcome": "success"
  },
  {
    "seq": 320,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-065",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:30.713Z",
    "offsetMs": 1279.8435420000023,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "fef280863f6cd77eef9a191a76758a7fea91acabb0ba2ef0ce9a35e7dbd75a78";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":317},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":319},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":320}} as const;
export const projectionSha256 = "dda2bd9bcde41de7ec694106de67e648fac17991fb43f29cbafd622e6622335e";
