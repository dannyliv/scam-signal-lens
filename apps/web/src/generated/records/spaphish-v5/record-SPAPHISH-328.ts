import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-328",
  "inputSha256": "95210ba074ae266acdc9646254e2176c1557b1343f3db41b029b1129c6f8ad39",
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
      "end": 60,
      "text": "Liverpool | Registro de aclaración ACL-20240419-080451-LIVER"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 119,
      "text": "Reporte Registro Electrónico de Solicitud de Aclaración Comercial NovaPlus Compra en Comercio - Cargos no reconocidos.\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 119,
      "end": 241,
      "text": "Estimado(a) cliente: Su aclaración ha sido registrada con el folio ACL-20240419-882731-NOVAPLUS , verifique que los datos\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 241,
      "end": 332,
      "text": "del formato adjunto sean correctos, en caso de no ser así, comuníquese a nuestro Centro de\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 332,
      "end": 385,
      "text": "Atención Telefónica al 55 4182 6674 para reportarlo. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 385,
      "end": 453,
      "text": "Se aplicará un abono temporal a su cuenta para no afectar sus pagos\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 453,
      "end": 462,
      "text": "mientras\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 462,
      "end": 500,
      "text": "se concluye el proceso de aclaración. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 500,
      "end": 554,
      "text": "El resultado final de su aclaración será notificado a\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 554,
      "end": 557,
      "text": "su\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 557,
      "end": 577,
      "text": "correo electrónico. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 577,
      "end": 659,
      "text": "Información adicional: Folio de aclaración asignado: ACL-20240419-882731-NOVAPLUS\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 659,
      "end": 691,
      "text": "Comercial NovaPlus S.A. de C.V.\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 691,
      "end": 728,
      "text": "Avenida Lumen 4321, Torre A, Piso 5. "
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 728,
      "end": 771,
      "text": "Colonia Altavilla Norte, Distrito Solaris. "
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 771,
      "end": 776,
      "text": "C.P. "
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 776,
      "end": 799,
      "text": "51942, Ciudad Solaris.\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 799,
      "end": 818,
      "text": "RFC: CNP240101KQ3. "
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 818,
      "end": 859,
      "text": "Régimen General de Ley Personas Morales.\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 859,
      "end": 860,
      "text": "\n"
    },
    {
      "id": "body:19",
      "source": "body",
      "start": 860,
      "end": 915,
      "text": "Síguenos en Ventas y Centro de Atención Telefónica CAT\n"
    },
    {
      "id": "body:20",
      "source": "body",
      "start": 915,
      "end": 969,
      "text": "*55 4182 6674 / 800 732 4410 / 7711 desde tu celular.\n"
    },
    {
      "id": "body:21",
      "source": "body",
      "start": 969,
      "end": 1006,
      "text": "KX Servicios Integrados S.A. de C.V.\n"
    },
    {
      "id": "body:22",
      "source": "body",
      "start": 1006,
      "end": 1026,
      "text": "© 1998-2024 4.18.1.0"
    }
  ],
  "passA": {
    "requestSha256": "54c2dd955da926dbe8ea437fa1fbdb8f7c44e7b3a500333b5397e54d0080a50c",
    "capturedAt": "2026-09-20T23:45:42.442Z",
    "elapsedMs": 243.2829580000107,
    "successfulAttemptElapsedMs": 241.11375000000407,
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
          "noul": 0.1
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
          "noul": 0.15
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.89
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.09
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
          "noul": 0.21
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
            "mixed_or_unclear": 0.01,
            "active_request": 0.82,
            "informational": 0.17
          },
          "confidence": 0.77
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.44,
            "no_sensitive_action": 0.54,
            "mixed_or_unknown": 0.01,
            "independently_established": 0.01
          },
          "confidence": 0.38
        }
      },
      "usage": {
        "input_tokens": 3836,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "6255597cc23e6c868e6705656a745b634397b89e002d0648e08961f85e8bd020",
    "capturedAt": "2026-09-20T23:45:42.575Z",
    "elapsedMs": 130.35125000000698,
    "successfulAttemptElapsedMs": 128.21366700000362,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:13": 0,
            "NONE": 0.09,
            "body:2": 0.31,
            "body:22": 0,
            "body:15": 0,
            "body:7": 0,
            "body:19": 0.06,
            "body:1": 0.12,
            "body:14": 0,
            "body:17": 0,
            "body:3": 0.2,
            "body:0": 0.03,
            "body:6": 0,
            "body:11": 0.14,
            "body:5": 0,
            "body:20": 0.01,
            "body:9": 0,
            "body:8": 0,
            "body:16": 0.01,
            "body:10": 0.01,
            "subject:0": 0.01,
            "body:12": 0,
            "body:4": 0,
            "body:21": 0.01,
            "body:18": 0
          },
          "confidence": 0.27
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:13": 0,
            "body:19": 0.01,
            "body:2": 0.04,
            "body:22": 0,
            "body:15": 0,
            "body:7": 0,
            "body:3": 0.7,
            "body:1": 0.03,
            "body:17": 0,
            "body:0": 0,
            "body:14": 0,
            "NONE": 0.12,
            "body:6": 0,
            "body:11": 0,
            "body:5": 0,
            "body:20": 0.09,
            "body:16": 0,
            "body:8": 0,
            "body:9": 0.01,
            "body:10": 0,
            "subject:0": 0,
            "body:12": 0,
            "body:4": 0,
            "body:21": 0,
            "body:18": 0
          },
          "confidence": 0.68
        }
      },
      "usage": {
        "input_tokens": 2668,
        "output_tokens": 522
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 376.1640000000043,
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
        "status": "selected",
        "segmentId": "body:3"
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
    "seq": 1604,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-328",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:42.200Z",
    "offsetMs": 1.5025000000023283
  },
  {
    "seq": 1605,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-328",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:42.442Z",
    "offsetMs": 243.28375000000233,
    "elapsedMs": 241.11375000000407,
    "outcome": "success"
  },
  {
    "seq": 1606,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-328",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:42.445Z",
    "offsetMs": 246.81254199999967
  },
  {
    "seq": 1607,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-328",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:42.574Z",
    "offsetMs": 375.7172089999949,
    "elapsedMs": 128.21366700000362,
    "outcome": "success"
  },
  {
    "seq": 1608,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-328",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:42.575Z",
    "offsetMs": 376.2702500000014,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6d6bd40a0636f220d766bcc3d6496935ba42bce631997ddf3347ec165c31f189";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1605},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1607},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1608}} as const;
export const projectionSha256 = "efcede8ae03bdbe34a812dad13b9118a8fd2e637c7ff8dd48597db89bbb22751";
