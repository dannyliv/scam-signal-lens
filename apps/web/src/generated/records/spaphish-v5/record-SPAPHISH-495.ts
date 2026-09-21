import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-495",
  "inputSha256": "65ab656f8c4c3006e406740f94770e9872294bff83626ed4e832fd6755abbb5e",
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
      "end": 46,
      "text": "Con la app Uber, puedes llegar a donde quieras"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 27,
      "text": "Toca en la app y relájate. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 27,
      "end": 52,
      "text": "Tu viaje está en camino. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 52,
      "end": 124,
      "text": "Viaja con menos estrés La app RápidoMóvil te ayuda a aprovechar el día. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 124,
      "end": 176,
      "text": "Solicita un viaje por encargo en cualquier momento. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 176,
      "end": 270,
      "text": "Solicita un viaje Diseñado para tu día a día Termina los recados ¿Tienes una cita importante? "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 270,
      "end": 300,
      "text": "¿Necesitas algo de la tienda? "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 300,
      "end": 354,
      "text": "Pide un viaje para llegar a tu destino con facilidad. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 354,
      "end": 430,
      "text": "Conéctate en persona Añade varias paradas o comparte un viaje con un amigo. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 430,
      "end": 504,
      "text": "Con RápidoMóvil, quedar con amistades y familiares vuelve a ser sencillo. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 504,
      "end": 587,
      "text": "Un viaje hasta el trabajo Consigue viajes directos para ir y volver de la oficina. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 587,
      "end": 658,
      "text": "Añade Casa y Trabajo a tus Favoritos para pedir viajes aún más rápido. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 658,
      "end": 706,
      "text": "Solicita una recogida  > ¿Necesitas asistencia? "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 706,
      "end": 789,
      "text": "Consulta nuestra biblioteca de Preguntas frecuentes o dinos cómo podemos ayudarte. "
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 789,
      "end": 958,
      "text": "Visita el Centro de Soporte  > Centro de Soporte Dar de baja la suscripción Condiciones Privacidad Preferencias de correo electrónico Servicios de Movilidad Global S.A. "
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 958,
      "end": 1045,
      "text": "Calle del Progreso 15, Código Postal 1010, Ciudad Libre. https://www.google.com/search?"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 1045,
      "end": 1066,
      "text": "q=MovilidadGlobal.com"
    }
  ],
  "passA": {
    "requestSha256": "9b46ab7df49d3dc5b9084744b7bb37c0976e9802a56e33705db332380edfd60c",
    "capturedAt": "2026-09-20T23:46:38.098Z",
    "elapsedMs": 134.70933400001377,
    "successfulAttemptElapsedMs": 131.29675000000861,
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
          "noul": 0.21
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.45
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.15
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0.01,
            "informational": 0.23,
            "active_request": 0.76
          },
          "confidence": 0.68
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.87,
            "independently_established": 0,
            "sender_supplied": 0.13,
            "mixed_or_unknown": 0
          },
          "confidence": 0.82
        }
      },
      "usage": {
        "input_tokens": 3711,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "fed02f10bc2b443d72b78ce4c0fa4fbcb78f51b7b275de336bb40954825904e3",
    "capturedAt": "2026-09-20T23:46:38.256Z",
    "elapsedMs": 155.74116599999252,
    "successfulAttemptElapsedMs": 153.8507919999829,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:7": 0,
            "body:1": 0,
            "body:10": 0,
            "body:13": 0.02,
            "body:2": 0,
            "body:5": 0,
            "body:0": 0,
            "body:9": 0,
            "body:11": 0.02,
            "body:12": 0,
            "body:3": 0.06,
            "body:6": 0.02,
            "body:14": 0,
            "body:15": 0,
            "body:4": 0.01,
            "NONE": 0.87,
            "subject:0": 0,
            "body:8": 0
          },
          "confidence": 0.85
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:7": 0,
            "body:1": 0,
            "body:10": 0.02,
            "body:13": 0.22,
            "body:2": 0,
            "body:5": 0,
            "body:0": 0,
            "body:9": 0.02,
            "body:11": 0.09,
            "body:12": 0.21,
            "body:3": 0,
            "body:6": 0,
            "body:14": 0,
            "body:15": 0,
            "NONE": 0.37,
            "body:4": 0.01,
            "subject:0": 0,
            "body:8": 0.06
          },
          "confidence": 0.32
        }
      },
      "usage": {
        "input_tokens": 2106,
        "output_tokens": 373
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 292.62087500002235,
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
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 2432,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-495",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:37.966Z",
    "offsetMs": 2.74708400000236
  },
  {
    "seq": 2433,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-495",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:38.098Z",
    "offsetMs": 134.71470900002168,
    "elapsedMs": 131.29675000000861,
    "outcome": "success"
  },
  {
    "seq": 2434,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-495",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:38.101Z",
    "offsetMs": 137.83841700002085
  },
  {
    "seq": 2435,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-495",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:38.255Z",
    "offsetMs": 292.1811250000028,
    "elapsedMs": 153.8507919999829,
    "outcome": "success"
  },
  {
    "seq": 2436,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-495",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:38.256Z",
    "offsetMs": 292.6936670000141,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7321749bb189a4805448beb1c3ea7157c139b67fb1793c218ea1e3e8683fdea8";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2433},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2435},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2436}} as const;
export const projectionSha256 = "53077ef1ddd3e9eaf528a6d91bc18b4eb82d85abe18c7184b437d2d137e0a057";
