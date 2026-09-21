import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-065",
  "inputSha256": "8beeca66d0d25bc0cb138b84b6e489633dc28f2c7131b9f259c6f99797f1161d",
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
    "requestSha256": "45e349f57e67cc39b37638642a30288636a70b7ca90020d9fa5e3eba4ba82bc5",
    "capturedAt": "2026-09-20T23:44:12.352Z",
    "elapsedMs": 185.33533299999908,
    "successfulAttemptElapsedMs": 183.9889170000024,
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
          "noul": 0.39
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
          "noul": 0.59
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
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0.32,
            "active_request": 0.68
          },
          "confidence": 0.56
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.93,
            "sender_supplied": 0.07,
            "independently_established": 0
          },
          "confidence": 0.9
        }
      },
      "usage": {
        "input_tokens": 3746,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "0bce14498e0e2529b65c2b7c8c03bce6634be58b4b28b799ac4f5abd2c72267d",
    "capturedAt": "2026-09-21T00:57:17.378Z",
    "elapsedMs": 123.09299999999985,
    "successfulAttemptElapsedMs": 121.01533400000017,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0.09,
            "subject:0": 0.01,
            "body:7": 0,
            "NONE": 0.44,
            "body:4": 0,
            "body:1": 0.02,
            "body:9": 0,
            "body:3": 0.02,
            "body:2": 0,
            "body:0": 0,
            "body:8": 0,
            "body:5": 0.42
          },
          "confidence": 0.38
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:8",
          "probabilities": {
            "body:6": 0,
            "subject:0": 0.01,
            "body:7": 0.02,
            "NONE": 0.29,
            "body:4": 0,
            "body:1": 0,
            "body:9": 0.03,
            "body:3": 0.01,
            "body:2": 0.14,
            "body:0": 0.14,
            "body:8": 0.35000000000000003,
            "body:5": 0.01
          },
          "confidence": 0.28
        }
      },
      "usage": {
        "input_tokens": 2035,
        "output_tokens": 255
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 498.20229200000085,
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
    "seq": 316,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-065",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:12.168Z",
    "offsetMs": 0.8306670000019949
  },
  {
    "seq": 317,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-065",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:12.352Z",
    "offsetMs": 185.33666699999958,
    "elapsedMs": 183.9889170000024,
    "outcome": "success"
  },
  {
    "seq": 318,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-065",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:12.355Z",
    "offsetMs": 188.0741670000025
  },
  {
    "seq": 319,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-065",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:12.540Z",
    "offsetMs": 373.63029200000165,
    "elapsedMs": 184.8849169999994,
    "outcome": "success"
  },
  {
    "seq": 320,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-065",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:12.540Z",
    "offsetMs": 373.77891699999964,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2516,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-065",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:17.256Z",
    "offsetMs": 2.45049999999992
  },
  {
    "seq": 2517,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-065",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:17.377Z",
    "offsetMs": 123.93287499999997,
    "elapsedMs": 121.01533400000017,
    "outcome": "success"
  },
  {
    "seq": 2518,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-065",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:17.378Z",
    "offsetMs": 124.39391699999987,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0bc2a57b2f60e13e1dac1741d6fdbd88d22d8ee6c27bcb42cc1fecda68f7cff7";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":317},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2517},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2518}} as const;
export const projectionSha256 = "e3e18c10c65e1e4ec2c0ec84412c6b368f893ea399c176d70cd5269427392f21";
