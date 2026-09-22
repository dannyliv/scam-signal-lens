import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-328",
  "inputSha256": "95210ba074ae266acdc9646254e2176c1557b1343f3db41b029b1129c6f8ad39",
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
    "requestSha256": "08e95f0af1ba0937c569bf28f85205e083fb9e19ab2868a0c0958041bd86739f",
    "capturedAt": "2026-09-22T03:54:44.078Z",
    "elapsedMs": 659.7418109999853,
    "successfulAttemptElapsedMs": 658.7055070000351,
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
          "noul": 0.13
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.12
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.2
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.17,
            "active_request": 0.83,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.77
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.37,
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "no_sensitive_action": 0.62
          },
          "confidence": 0.49
        }
      },
      "usage": {
        "input_tokens": 5286,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "00f1a2fe04771ab7255e4f045d1a62310edd33763b047d56d98605dc91222257",
    "capturedAt": "2026-09-22T03:54:44.614Z",
    "elapsedMs": 534.4251550000045,
    "successfulAttemptElapsedMs": 533.017685000028,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:21": 0.01,
            "body:9": 0,
            "body:13": 0,
            "body:6": 0,
            "body:10": 0.01,
            "body:20": 0.01,
            "body:16": 0.01,
            "body:8": 0,
            "body:4": 0,
            "body:0": 0.09,
            "NONE": 0.08,
            "body:18": 0,
            "subject:0": 0.03,
            "body:2": 0.29000000000000004,
            "body:1": 0.08,
            "body:12": 0,
            "body:7": 0,
            "body:11": 0.11,
            "body:3": 0.19,
            "body:14": 0,
            "body:19": 0.09,
            "body:5": 0,
            "body:17": 0,
            "body:15": 0,
            "body:22": 0
          },
          "confidence": 0.25
        }
      },
      "usage": {
        "input_tokens": 1783,
        "output_tokens": 261
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1195.9559080000035,
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
    "seq": 1602,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-328",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:43.419Z",
    "offsetMs": 0.8331919999909587
  },
  {
    "seq": 1603,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-328",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:44.078Z",
    "offsetMs": 659.7426960000303,
    "elapsedMs": 658.7055070000351,
    "outcome": "success"
  },
  {
    "seq": 1604,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-328",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:44.081Z",
    "offsetMs": 662.380839999998
  },
  {
    "seq": 1605,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-328",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:44.614Z",
    "offsetMs": 1195.6650970000192,
    "elapsedMs": 533.017685000028,
    "outcome": "success"
  },
  {
    "seq": 1606,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-328",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:44.614Z",
    "offsetMs": 1196.0059840000467,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "597d978dbea9e2dab5e76b17b1e8f055d5580ada033701fdc8623918290aba82";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1603},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1605},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1606}} as const;
export const projectionSha256 = "e06519e0d3ddb482b3399b0c29021e1897e7cf87427b6dd9120ae025f76967c3";
