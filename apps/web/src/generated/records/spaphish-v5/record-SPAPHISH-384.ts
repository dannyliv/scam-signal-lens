import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-384",
  "inputSha256": "dfcf5ae82f3a9e9062e74cca9bf3151a5ef6848c6f19b6141b8c9938290762da",
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
      "end": 32,
      "text": "¡Desde ya puedes hacer check in!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 3,
      "text": ".. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 3,
      "end": 29,
      "text": "Regístrate En Tu Vuelo .. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 29,
      "end": 65,
      "text": "Referencia de la reserva: 4J57BX .. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 65,
      "end": 88,
      "text": "Hola Marina Salgado .. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 88,
      "end": 120,
      "text": "Gracias por volar con nosotros. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 120,
      "end": 224,
      "text": "A partir de este momento, puedes hacer tu web check in , ¡hazlo ya y ahorra tiempo en el aeropuerto! .. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 224,
      "end": 278,
      "text": "Te recordamos la información de tu reserva 4J57BX: .. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 278,
      "end": 445,
      "text": "De A Salida Llegada Vuelo Clase de reserva Ciudad Central CCN Aeropuerto Sol Naciente Puerto Claro PCR Terminal Aurora 07:45 09:19 AV8462 S 12-ene-2022 12-ene-2022 .. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 445,
      "end": 480,
      "text": "Información sobre el itinerario .. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 480,
      "end": 768,
      "text": "De A Salida Llegada Vuelo Clase de reserva Ciudad Central CCN Aeropuerto Sol Naciente Puerto Claro PCR Terminal Aurora 07:45 09:19 AV8462 S 12-ene-2022 12-ene-2022 Puerto Claro PCR Terminal Aurora Ciudad Central CCN Aeropuerto Sol Naciente 06:59 08:30 AV8525 Z 19-ene-2022 19-ene-2022 .. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 768,
      "end": 817,
      "text": "Algunos vuelos podrían presentar modificaciones. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 817,
      "end": 998,
      "text": "Te invitamos a consultar periódicamente el estado de tu boleto en Avianca.com o desde tu smartphone en nuestra aplicación móvil para que no pierdas ningún detalle de tu itinerario. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 998,
      "end": 1277,
      "text": "También puedes hacer check in desde nuestra app o en los kioscos del aeropuerto Apreciado pasajero: recuerda llegar con 2 horas de anticipación a tu vuelo nacional en Colombia, ya que podrás chequearte y entregar tu equipaje solo hasta 45 minutos antes de la salida de tu vuelo. "
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 1277,
      "end": 1297,
      "text": "¡Disfruta tu viaje! "
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 1297,
      "end": 1310,
      "text": "Avianca .. .."
    }
  ],
  "passA": {
    "requestSha256": "435df8ea4d63688860e1ab1d32984b6dd1b81e7c3bddceb4ee0249b593fb2da3",
    "capturedAt": "2026-09-20T23:46:01.079Z",
    "elapsedMs": 117.15350000000035,
    "successfulAttemptElapsedMs": 115.82029199998942,
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
          "noul": 0.04
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.28
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.84
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.85
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.98,
            "informational": 0.02,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.97
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.06,
            "independently_established": 0.14,
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.79
          },
          "confidence": 0.72
        }
      },
      "usage": {
        "input_tokens": 3836,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "235776e098afbcf1992c455b7518f740901b9de8dc05c57c4e273e8526c9067a",
    "capturedAt": "2026-09-20T23:46:01.234Z",
    "elapsedMs": 151.71062500000698,
    "successfulAttemptElapsedMs": 149.19908399999258,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:2": 0,
            "body:4": 0,
            "body:0": 0,
            "body:14": 0,
            "NONE": 0.08,
            "body:11": 0.01,
            "body:7": 0,
            "body:1": 0,
            "subject:0": 0.01,
            "body:3": 0,
            "body:9": 0,
            "body:8": 0,
            "body:12": 0.19,
            "body:6": 0,
            "body:5": 0.71,
            "body:10": 0,
            "body:13": 0
          },
          "confidence": 0.68
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:14",
          "probabilities": {
            "body:2": 0,
            "body:4": 0.16,
            "body:14": 0.4,
            "body:0": 0,
            "body:11": 0.06,
            "NONE": 0.24000000000000002,
            "body:7": 0,
            "body:1": 0.01,
            "subject:0": 0,
            "body:3": 0,
            "body:8": 0.01,
            "body:9": 0,
            "body:12": 0.04,
            "body:10": 0,
            "body:5": 0.06,
            "body:6": 0.01,
            "body:13": 0.01
          },
          "confidence": 0.36
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:12",
          "probabilities": {
            "body:2": 0.01,
            "body:4": 0,
            "body:14": 0,
            "body:0": 0,
            "NONE": 0.01,
            "body:11": 0.19,
            "body:7": 0,
            "body:1": 0.03,
            "subject:0": 0.01,
            "body:3": 0,
            "body:9": 0,
            "body:8": 0,
            "body:10": 0.01,
            "body:12": 0.66,
            "body:5": 0.08,
            "body:6": 0,
            "body:13": 0
          },
          "confidence": 0.63
        }
      },
      "usage": {
        "input_tokens": 3350,
        "output_tokens": 542
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 272.05020899999363,
  "derived": {
    "concern": "few_warning_signs",
    "triggeredRuleIds": [],
    "contextWarnings": [],
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
        "status": "selected",
        "segmentId": "body:5"
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
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1883,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-384",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:00.963Z",
    "offsetMs": 0.9180839999899035
  },
  {
    "seq": 1884,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-384",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:01.079Z",
    "offsetMs": 117.15029199999117,
    "elapsedMs": 115.82029199998942,
    "outcome": "success"
  },
  {
    "seq": 1885,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-384",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:01.084Z",
    "offsetMs": 121.763374999995
  },
  {
    "seq": 1886,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-384",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:01.234Z",
    "offsetMs": 271.6223339999997,
    "elapsedMs": 149.19908399999258,
    "outcome": "success"
  },
  {
    "seq": 1887,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-384",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:01.234Z",
    "offsetMs": 272.13337499999034,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "cec87b95e79f73c30e0689e63bc946e6a45f1596be20e55bf4cefa7e25fcbe2e";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1884},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1886},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1887}} as const;
export const projectionSha256 = "806f6e40e49a9fa0fadf272b196ebd0bc5ae889f8ecb25c860466915d428d535";
