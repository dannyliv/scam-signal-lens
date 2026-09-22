import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-495",
  "inputSha256": "65ab656f8c4c3006e406740f94770e9872294bff83626ed4e832fd6755abbb5e",
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
    "requestSha256": "1fcdd58b0b4186e28fdab6a79232d5a88fab75da3b3e1d533fe847394e764bd6",
    "capturedAt": "2026-09-22T03:58:02.888Z",
    "elapsedMs": 639.6455070000375,
    "successfulAttemptElapsedMs": 638.150796999922,
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
          "noul": 0.05
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.14
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
          "noul": 0.52
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
          "noul": 0.12
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.32,
            "mixed_or_unclear": 0.01,
            "educational_or_quoted": 0,
            "active_request": 0.67
          },
          "confidence": 0.56
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.23,
            "independently_established": 0,
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.76
          },
          "confidence": 0.68
        }
      },
      "usage": {
        "input_tokens": 5161,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "fd9e29c1a915858a4208d06bfd82e635392f55890db90db360429b4e770a4973",
    "capturedAt": "2026-09-22T03:58:03.538Z",
    "elapsedMs": 648.588531000074,
    "successfulAttemptElapsedMs": 646.8881500000134,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:14": 0.01,
            "body:7": 0,
            "NONE": 0.38,
            "body:2": 0,
            "body:4": 0,
            "body:1": 0,
            "body:12": 0.24,
            "body:5": 0,
            "body:9": 0.01,
            "subject:0": 0.01,
            "body:6": 0,
            "body:10": 0,
            "body:15": 0,
            "body:3": 0,
            "body:11": 0.17,
            "body:8": 0.02,
            "body:13": 0.16,
            "body:0": 0
          },
          "confidence": 0.33
        }
      },
      "usage": {
        "input_tokens": 1442,
        "output_tokens": 189
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1289.8461860000389,
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
    "seq": 2431,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-495",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:58:02.250Z",
    "offsetMs": 1.216647999943234
  },
  {
    "seq": 2432,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-495",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:58:02.888Z",
    "offsetMs": 639.6462049999973,
    "elapsedMs": 638.150796999922,
    "outcome": "success"
  },
  {
    "seq": 2433,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-495",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:58:02.891Z",
    "offsetMs": 642.3476629999932
  },
  {
    "seq": 2434,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-495",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:58:03.538Z",
    "offsetMs": 1289.65479099995,
    "elapsedMs": 646.8881500000134,
    "outcome": "success"
  },
  {
    "seq": 2435,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-495",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:58:03.539Z",
    "offsetMs": 1289.8893649999518,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "df95cdb313ec24f08f8ed2db77fe4c716609f269ab70f50b114efde74caf3a07";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2432},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2434},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2435}} as const;
export const projectionSha256 = "e26113d6071206e0985d16a20756ae134a6fa60cb5c8b47aa479f3224b8a3533";
