import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-384",
  "inputSha256": "dfcf5ae82f3a9e9062e74cca9bf3151a5ef6848c6f19b6141b8c9938290762da",
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
    "requestSha256": "51204f320d632f7af26181510e671b013586414f1e5c358fe00477b1f13019dc",
    "capturedAt": "2026-09-22T03:55:52.227Z",
    "elapsedMs": 541.5038550000172,
    "successfulAttemptElapsedMs": 540.1901070000022,
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
          "noul": 0.31
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.83
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
          "noul": 0.66
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.04,
            "mixed_or_unclear": 0,
            "active_request": 0.96,
            "educational_or_quoted": 0
          },
          "confidence": 0.95
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "independently_established": 0.09,
            "sender_supplied": 0.11,
            "no_sensitive_action": 0.79
          },
          "confidence": 0.72
        }
      },
      "usage": {
        "input_tokens": 5286,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "57b3576f0df9f2ad0759432f95742086cc0573476445b64fe343a8adc5638479",
    "capturedAt": "2026-09-22T03:55:52.801Z",
    "elapsedMs": 571.1720459999633,
    "successfulAttemptElapsedMs": 569.9095510000479,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "NONE": 0.15000000000000002,
            "body:1": 0,
            "body:3": 0,
            "subject:0": 0.01,
            "body:13": 0,
            "body:11": 0,
            "body:7": 0,
            "body:5": 0.78,
            "body:14": 0,
            "body:0": 0,
            "body:12": 0.06,
            "body:10": 0,
            "body:4": 0,
            "body:9": 0,
            "body:8": 0,
            "body:2": 0,
            "body:6": 0
          },
          "confidence": 0.76
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.36,
            "body:1": 0.01,
            "body:3": 0,
            "body:5": 0.05,
            "body:13": 0.01,
            "body:11": 0.05,
            "subject:0": 0,
            "body:7": 0,
            "body:14": 0.3,
            "body:0": 0,
            "body:12": 0.03,
            "body:10": 0,
            "body:4": 0.17,
            "body:9": 0,
            "body:8": 0.01,
            "body:2": 0,
            "body:6": 0.01
          },
          "confidence": 0.31
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:11",
          "probabilities": {
            "NONE": 0.09,
            "body:1": 0.01,
            "body:3": 0,
            "subject:0": 0.01,
            "body:13": 0,
            "body:7": 0,
            "body:5": 0.1,
            "body:11": 0.42,
            "body:14": 0,
            "body:0": 0,
            "body:12": 0.36,
            "body:10": 0.01,
            "body:8": 0,
            "body:9": 0,
            "body:4": 0,
            "body:2": 0,
            "body:6": 0
          },
          "confidence": 0.38
        }
      },
      "usage": {
        "input_tokens": 3656,
        "output_tokens": 539
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1115.2096709999605,
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
    "seq": 1881,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-384",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:51.687Z",
    "offsetMs": 0.9808189999894239
  },
  {
    "seq": 1882,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-384",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:52.227Z",
    "offsetMs": 541.5057129999623,
    "elapsedMs": 540.1901070000022,
    "outcome": "success"
  },
  {
    "seq": 1883,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-384",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:52.230Z",
    "offsetMs": 544.6753690000041
  },
  {
    "seq": 1884,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-384",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:52.801Z",
    "offsetMs": 1114.9038189999992,
    "elapsedMs": 569.9095510000479,
    "outcome": "success"
  },
  {
    "seq": 1885,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-384",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:52.801Z",
    "offsetMs": 1115.254375999968,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "234dbf9707c1b95b721ee8cb2155f0d20f76775087f2839d16310c520b1861eb";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1882},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1884},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1885}} as const;
export const projectionSha256 = "21b5ef2ca376dfd94c8ce90448fcfad94194c6b6325715d6e27d85b29965e834";
