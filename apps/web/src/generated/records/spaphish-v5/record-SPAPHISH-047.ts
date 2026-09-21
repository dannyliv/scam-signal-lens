import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-047",
  "inputSha256": "d4a7035d2b6d7fcf309cd87a67c8991e4fd756296baaf3123e819b33356b8139",
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
      "end": 66,
      "text": "Ezequiela Miguelina 📦 Tu paquete está esperando tu confirmación. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 66,
      "end": 68,
      "text": "🚚"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 77,
      "text": "FedEx ® 11-17-2025 Su paquete fue schuduled para la entrega hoy querido Sra. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 77,
      "end": 285,
      "text": "López, Por favor, tenga en cuenta que su envío con el número de seguimiento mencionado a continuación requiere más información para propósitos de liquidación de Aduanas Consulte el anexo para más detalles. ! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 285,
      "end": 473,
      "text": "Programadas en FedEx Centro ➡ Número de seguimiento 998877665544 Número de copia haz clic aquí para abrir este correo electrónico en su navegador. mejores deseos FedEx͏® E͏n͏spaña centro. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 473,
      "end": 611,
      "text": "Director de puesta Para ser eliminado de nuestra lista Haz clic aquí, o escribe a: 4500 Valley View Ln, Ste 200 #155, Grapevine, TX, 76051"
    }
  ],
  "passA": {
    "requestSha256": "d6af5cc3c0fcd9181edd9425596032bcf71cc9d5a9d15bf468f62b1d0b012050",
    "capturedAt": "2026-09-20T23:44:06.091Z",
    "elapsedMs": 192.16862500000025,
    "successfulAttemptElapsedMs": 190.86862499999916,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.52
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.14
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.69
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.91
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.43
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.17
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
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "no_sensitive_action": 0.13,
            "sender_supplied": 0.86
          },
          "confidence": 0.81
        }
      },
      "usage": {
        "input_tokens": 3625,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "292cadfa1fd0fe62ab5d7a2ecd8a7d08d996701af3df483cb6f3d485af7d0884",
    "capturedAt": "2026-09-20T23:44:06.249Z",
    "elapsedMs": 155.07725000000028,
    "successfulAttemptElapsedMs": 153.43737499999952,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:1": 0,
            "body:1": 0.81,
            "subject:0": 0,
            "body:0": 0,
            "body:3": 0,
            "body:2": 0.01,
            "NONE": 0.18
          },
          "confidence": 0.77
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:1": 0,
            "body:1": 0.35,
            "subject:0": 0.31,
            "body:0": 0.19,
            "body:3": 0.01,
            "body:2": 0.01,
            "NONE": 0.13
          },
          "confidence": 0.25
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "subject:1": 0,
            "NONE": 0.02,
            "subject:0": 0.01,
            "body:0": 0.36,
            "body:3": 0.07,
            "body:2": 0.18,
            "body:1": 0.36
          },
          "confidence": 0.26
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:1": 0,
            "NONE": 0.74,
            "subject:0": 0,
            "body:0": 0,
            "body:3": 0.01,
            "body:1": 0.11,
            "body:2": 0.14
          },
          "confidence": 0.69
        }
      },
      "usage": {
        "input_tokens": 2575,
        "output_tokens": 334
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 349.77604099999917,
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
        "segmentId": "body:1"
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
        "status": "none_selected",
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
    "seq": 227,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-047",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:05.900Z",
    "offsetMs": 0.7785409999996773
  },
  {
    "seq": 228,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-047",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:06.091Z",
    "offsetMs": 192.16991600000074,
    "elapsedMs": 190.86862499999916,
    "outcome": "success"
  },
  {
    "seq": 229,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-047",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:06.094Z",
    "offsetMs": 195.22591599999942
  },
  {
    "seq": 230,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-047",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:06.248Z",
    "offsetMs": 349.3979159999999,
    "elapsedMs": 153.43737499999952,
    "outcome": "success"
  },
  {
    "seq": 231,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-047",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:06.249Z",
    "offsetMs": 349.83866599999965,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a557c8dd1d42899bc0db8f3f4f569e3538a1cf1cd24a48c0e34a135d00332b56";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":228},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":230},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":231}} as const;
export const projectionSha256 = "108604a800f202bb11023acda452c0439ecc77b4b8330c51fc97a91418d6b417";
