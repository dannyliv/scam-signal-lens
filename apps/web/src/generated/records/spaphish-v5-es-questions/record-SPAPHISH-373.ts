import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-373",
  "inputSha256": "4b682d0df056e7593a7ee2b02be7f9d9c7053d045806a7abae1c15f981786f9a",
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
      "text": "RV: PRODUCT-TEF4017(RQF)"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 13,
      "text": "Buenos dias,\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 13,
      "end": 88,
      "text": "Me gustaría invitar a su empresa a proporcionarnos los productos adjuntos. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 88,
      "end": 254,
      "text": "Algunos de los productos que podemos solicitar pueden estar fuera de su alcance de trabajo, por lo tanto, nos gustaría que compre los productos y nos los suministre. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 254,
      "end": 337,
      "text": "Adjunto encontrará una solicitud de cotización para los productos que necesitamos. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 337,
      "end": 485,
      "text": "Tenga en cuenta que esta es una licitación única, por lo que necesitamos estos componentes lo antes posible; ahora estamos esperando su estimación.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 485,
      "end": 486,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 486,
      "end": 565,
      "text": "por favor envíe una cotización: compras.proyectos.globales@proveedoresmail.org\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 565,
      "end": 566,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 566,
      "end": 860,
      "text": "Aviso: Las informaciones transmitidas, y que comprenden las piezas unidas, están destinadas únicamente al uso exclusivo de las personas o entidades auxquelles a las que van dirigidas y pueden contener elementos confidenciales y privilegiados que puedan ser utilizados bajo privilegios legales. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 860,
      "end": 1180,
      "text": "Todas las conferencias, reseñas, retransmisiones, difusiones, distribuciones, reproducciones y otros usos, así como premios por todos los fondos de estas informaciones, para personas y entidades distintas del destinatario sin el consentimiento previo del expedidor no están autorizadas y están estrictamente prohibidas.\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 1180,
      "end": 1181,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 1181,
      "end": 1338,
      "text": "Si recibió este mensaje de la persona equivocada, consulte la información inmediatamente en el expediente y elimine el mensaje de su computadora sin copias.\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 1338,
      "end": 1339,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 1339,
      "end": 1545,
      "text": "Todos los puntos de vista y opiniones del personal se expresan en el mensaje electrónico appartiennent à l'expéditeur y ne représentent pas nécessairement de los puntos de vista y opiniones de la Sociedad.\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 1545,
      "end": 1546,
      "text": "\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 1546,
      "end": 1608,
      "text": "tener total protección ambiental y reflexión antes de imprimir"
    }
  ],
  "passA": {
    "requestSha256": "7e49019ca8797ccbaa684a62de708c3e7d800f6123d429044302bfcce5452033",
    "capturedAt": "2026-09-22T03:55:38.837Z",
    "elapsedMs": 633.4238969999715,
    "successfulAttemptElapsedMs": 632.2028280000086,
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
          "noul": 0.65
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.75
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.56
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.14
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "active_request": 1,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.51,
            "no_sensitive_action": 0.49,
            "mixed_or_unknown": 0,
            "independently_established": 0
          },
          "confidence": 0.34
        }
      },
      "usage": {
        "input_tokens": 5250,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "8cfec7ef85a73ab8cc8c32fc299f801cb7be3248e705111bc6b455ded1535f29",
    "capturedAt": "2026-09-22T03:55:39.380Z",
    "elapsedMs": 542.4350730000297,
    "successfulAttemptElapsedMs": 541.2115140000242,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 0.9,
            "body:10": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:13": 0,
            "body:4": 0,
            "body:6": 0.01,
            "body:9": 0,
            "NONE": 0.09,
            "body:11": 0,
            "body:1": 0,
            "body:3": 0,
            "body:5": 0,
            "body:7": 0,
            "body:12": 0,
            "body:8": 0,
            "body:14": 0,
            "body:15": 0
          },
          "confidence": 0.89
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:2": 0,
            "body:10": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:13": 0,
            "body:4": 0.99,
            "body:6": 0,
            "body:9": 0,
            "body:11": 0,
            "NONE": 0.01,
            "body:1": 0,
            "body:3": 0,
            "body:5": 0,
            "body:7": 0,
            "body:12": 0,
            "body:8": 0,
            "body:14": 0,
            "body:15": 0
          },
          "confidence": 0.98
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.02,
            "body:10": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:13": 0.18,
            "body:4": 0.03,
            "body:6": 0.14,
            "body:9": 0.01,
            "body:11": 0.01,
            "NONE": 0.42,
            "body:1": 0.11,
            "body:3": 0.03,
            "body:5": 0,
            "body:7": 0,
            "body:12": 0.01,
            "body:8": 0.04,
            "body:14": 0,
            "body:15": 0
          },
          "confidence": 0.38
        }
      },
      "usage": {
        "input_tokens": 3508,
        "output_tokens": 563
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1177.3956909999833,
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
        "status": "selected",
        "segmentId": "body:2"
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:4"
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
    "seq": 1826,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-373",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:38.204Z",
    "offsetMs": 0.944002999982331
  },
  {
    "seq": 1827,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-373",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:38.836Z",
    "offsetMs": 633.4235899999621,
    "elapsedMs": 632.2028280000086,
    "outcome": "success"
  },
  {
    "seq": 1828,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-373",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:38.838Z",
    "offsetMs": 635.3952219999628
  },
  {
    "seq": 1829,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-373",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:39.380Z",
    "offsetMs": 1177.0879309999873,
    "elapsedMs": 541.2115140000242,
    "outcome": "success"
  },
  {
    "seq": 1830,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-373",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:39.380Z",
    "offsetMs": 1177.4457819999661,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6bada224071f220b86b681d7be0ae295074d27c33a6c9ec72b44767a7f1cb60c";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1827},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1829},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1830}} as const;
export const projectionSha256 = "6bb5ded280f86cbd24b6f5f2a9265925cb6597ad72bb4c3347d0c3c366e23193";
