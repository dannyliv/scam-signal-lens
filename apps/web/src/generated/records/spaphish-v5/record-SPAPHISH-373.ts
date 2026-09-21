import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-373",
  "inputSha256": "4b682d0df056e7593a7ee2b02be7f9d9c7053d045806a7abae1c15f981786f9a",
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
    "requestSha256": "ee1d07c26f2e8634ecaa74c1dc11cd5db0a024ae2a3e5a75d55d96eb9c342140",
    "capturedAt": "2026-09-20T23:45:57.656Z",
    "elapsedMs": 156.20237499999348,
    "successfulAttemptElapsedMs": 154.09300000000803,
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
          "noul": 0.66
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.41
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.15
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.07
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
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "active_request": 1,
            "informational": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.44,
            "sender_supplied": 0.56,
            "mixed_or_unknown": 0,
            "independently_established": 0
          },
          "confidence": 0.4
        }
      },
      "usage": {
        "input_tokens": 3800,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "11b38cf72a4b3678b6568102393b43ebfe7ade5eeb5188e072d4defadd04678d",
    "capturedAt": "2026-09-21T00:57:30.099Z",
    "elapsedMs": 141.02545800000007,
    "successfulAttemptElapsedMs": 139.59129200000098,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:0": 0,
            "body:4": 0,
            "body:11": 0,
            "body:7": 0,
            "body:8": 0,
            "body:3": 0.01,
            "NONE": 0.02,
            "body:14": 0,
            "body:15": 0,
            "body:2": 0.92,
            "body:6": 0.05,
            "body:9": 0,
            "body:12": 0,
            "body:5": 0,
            "body:10": 0,
            "subject:0": 0,
            "body:1": 0,
            "body:13": 0
          },
          "confidence": 0.91
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:8": 0,
            "body:14": 0,
            "NONE": 0.01,
            "body:7": 0,
            "body:11": 0.01,
            "body:15": 0,
            "body:0": 0,
            "body:3": 0,
            "body:4": 0.98,
            "body:10": 0,
            "body:6": 0,
            "body:9": 0,
            "body:12": 0,
            "body:5": 0,
            "body:2": 0,
            "subject:0": 0,
            "body:13": 0,
            "body:1": 0
          },
          "confidence": 0.98
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0,
            "body:4": 0.04,
            "NONE": 0.52,
            "body:7": 0,
            "body:8": 0.08,
            "body:3": 0.01,
            "body:15": 0,
            "body:11": 0.03,
            "body:14": 0,
            "body:2": 0.01,
            "body:6": 0.09999999999999999,
            "body:9": 0.01,
            "body:12": 0,
            "body:5": 0,
            "body:10": 0,
            "subject:0": 0,
            "body:13": 0.13,
            "body:1": 0.07
          },
          "confidence": 0.48
        }
      },
      "usage": {
        "input_tokens": 3198,
        "output_tokens": 563
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 407.9077510000061,
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
    "seq": 1828,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-373",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:57.501Z",
    "offsetMs": 1.5958340000070166
  },
  {
    "seq": 1829,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-373",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:57.655Z",
    "offsetMs": 156.2077500000014,
    "elapsedMs": 154.09300000000803,
    "outcome": "success"
  },
  {
    "seq": 1830,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-373",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:57.658Z",
    "offsetMs": 158.45833400000993
  },
  {
    "seq": 1831,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-373",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:57.765Z",
    "offsetMs": 265.75458400000934,
    "elapsedMs": 106.79150000000664,
    "outcome": "success"
  },
  {
    "seq": 1832,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-373",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:57.765Z",
    "offsetMs": 265.92716700000165,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2747,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-373",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:29.959Z",
    "offsetMs": 1.6290420000004815
  },
  {
    "seq": 2748,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-373",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:30.099Z",
    "offsetMs": 141.54908299999988,
    "elapsedMs": 139.59129200000098,
    "outcome": "success"
  },
  {
    "seq": 2749,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-373",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:30.099Z",
    "offsetMs": 141.91608300000007,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "b61345e7537b1bb3ed11215b7388b23fb973033ffee1850b4c588c408dce8688";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1829},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2748},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2749}} as const;
export const projectionSha256 = "ff5f3b493552874c2af0554df60d9bdffa03b7419fc52d203e38b6ab9597a2bc";
