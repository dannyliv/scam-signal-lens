import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-141",
  "inputSha256": "7f0dd19267ef0730485d11267f455a3301f32f67fa50e53ebc6464fbe9084b72",
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
      "end": 39,
      "text": "Notificación importante sobre seguridad"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 153,
      "text": "Greenlock | Data Breach Management Estimado ricardo.lopez@corporate-security.net: Nuestra empresa se especializa en la gestión de filtraciones de datos. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 153,
      "end": 290,
      "text": "Cuando se produce una filtración de datos, recopilamos y mantenemos un registro de toda la información personal y/o privada involucrada. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 290,
      "end": 468,
      "text": "Usamos esta información para ayudar a las empresas a determinar si sus empleados poseen o están usando datos comprometidos, como contraseñas o direcciones de correo electrónico. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 468,
      "end": 613,
      "text": "Universidad Ficticia Campus Santa Fe utiliza nuestros servicios y solicitó que notifiquemos a todas las personas que deberían estar interesadas. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 613,
      "end": 757,
      "text": "Mediante nuestra investigación, descubrimos que su información personal se vio comprometida debido a una filtración de datos de OnlinerSpambot. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 757,
      "end": 860,
      "text": "Para ver toda la información que se hizo pública mediante la filtración, consulte su informe gratuito. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 860,
      "end": 938,
      "text": "La versión gratuita de su informe estará disponible durante dos días hábiles. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 938,
      "end": 1139,
      "text": "Se le notificó a su compañía que sus datos se vieron comprometidos debido a la filtración de datos de OnlinerSpambot, pero esta no tiene acceso a los detalles que se encuentran en su informe gratuito. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 1139,
      "end": 1259,
      "text": "Por motivos de seguridad, recomendamos que tome los pasos necesarios para proteger su información privada de inmediato. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 1259,
      "end": 1335,
      "text": "Saludos, Greenlock Data Breach Management © Greenlock Data Breach Management"
    }
  ],
  "passA": {
    "requestSha256": "6c8c0def13560d752513ca62e5c352d8bac9daf9122d9fa5f8055719575a6e11",
    "capturedAt": "2026-09-20T23:44:35.641Z",
    "elapsedMs": 122.80416599999444,
    "successfulAttemptElapsedMs": 121.43437500000437,
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
          "noul": 0.11
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
          "noul": 0.92
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.86
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.32
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
          "noul": 0.05
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
            "active_request": 0.98,
            "mixed_or_unclear": 0,
            "informational": 0.02
          },
          "confidence": 0.97
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.41,
            "mixed_or_unknown": 0.02,
            "sender_supplied": 0.57
          },
          "confidence": 0.43
        }
      },
      "usage": {
        "input_tokens": 3724,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "e07f479959ee8bca5e06cb8de4090cf2d26773273cdece180682d0707b5e6836",
    "capturedAt": "2026-09-20T23:44:35.797Z",
    "elapsedMs": 153.29149999999936,
    "successfulAttemptElapsedMs": 151.30712499999936,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:8": 0.24,
            "body:9": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:2": 0,
            "body:1": 0,
            "body:3": 0,
            "body:5": 0.01,
            "body:6": 0.75,
            "body:7": 0,
            "body:4": 0,
            "NONE": 0
          },
          "confidence": 0.72
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:9": 0,
            "body:8": 0.01,
            "subject:0": 0.01,
            "body:0": 0.01,
            "body:2": 0,
            "body:1": 0,
            "body:3": 0.92,
            "body:5": 0,
            "body:6": 0,
            "body:7": 0.04,
            "body:4": 0,
            "NONE": 0.01
          },
          "confidence": 0.91
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:9": 0,
            "body:8": 0.04,
            "body:2": 0,
            "body:0": 0,
            "subject:0": 0,
            "body:1": 0,
            "body:3": 0,
            "body:5": 0.02,
            "body:6": 0,
            "body:7": 0.22,
            "body:4": 0,
            "NONE": 0.72
          },
          "confidence": 0.68
        }
      },
      "usage": {
        "input_tokens": 2652,
        "output_tokens": 387
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 278.48558399999456,
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
        "status": "selected",
        "segmentId": "body:6"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:3"
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
    "seq": 691,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-141",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:35.519Z",
    "offsetMs": 0.8538339999940945
  },
  {
    "seq": 692,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-141",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:35.641Z",
    "offsetMs": 122.80441699999938,
    "elapsedMs": 121.43437500000437,
    "outcome": "success"
  },
  {
    "seq": 693,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-141",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:35.644Z",
    "offsetMs": 126.07204199999978
  },
  {
    "seq": 694,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-141",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:35.796Z",
    "offsetMs": 278.20091699999466,
    "elapsedMs": 151.30712499999936,
    "outcome": "success"
  },
  {
    "seq": 695,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-141",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:35.797Z",
    "offsetMs": 278.54870899999514,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a0b812ee7526de1676b6779eef5734b6605585fa5cdac447f916c1f0d2c4f1d9";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":692},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":694},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":695}} as const;
export const projectionSha256 = "c5c9be196d3597e1acace285424d237a9c33ace698f187aae375014c29876476";
