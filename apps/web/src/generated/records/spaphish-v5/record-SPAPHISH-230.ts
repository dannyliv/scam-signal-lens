import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-230",
  "inputSha256": "9507d348fa3ca8d69bcf9d6e811f91ef237279ee367e3478df754df5cd55291c",
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
      "text": "Constancias de cursos impartidos"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 45,
      "text": "San Andrés, Querétaro a 25 de marzo de 2021.\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 45,
      "end": 46,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 46,
      "end": 99,
      "text": "Comunidad de Centro de Innovación Tecnológica (CIT):\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 99,
      "end": 100,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 100,
      "end": 265,
      "text": "        Hoy los directores de los 30 Centros de Investigación para el Desarrollo (CID) y autoridades de CNBE nos hemos reunido para analizar la crisis del COVID-19. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 265,
      "end": 306,
      "text": "Se han tomado las decisiones siguientes:\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 306,
      "end": 307,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 307,
      "end": 1609,
      "text": "1.- Se suspenden todos los viajes al extranjero hasta nuevo aviso, 2.- Las personas que estén en el extranjero o que estén por regresar, se les sugiere permanecer en sus casas hasta nuevo aviso, 3.- Se restringe, en la medida de lo posible, el ingreso de visitantes o proveedores ya que en CIT no contamos con sistemas de detección, 4.- Se proveerá al personal de vigilancia con guantes para disminuir el contacto con objetos o superficies posiblemente contaminadas, 5.- El miércoles 25 y jueves 26 de marzo se harán los arreglos y acuerdos necesarios para continuar con las clases a distancia, así como con la recalendarización de exámenes profesionales, 6.- Se intensificarán las labores de limpieza en pasamanos, perillas, picaportes, etc., 7.- Las clases y cualquier otra actividad grupal presencial se suspende a partir del día viernes 27 de marzo, y se reanudan hasta nuevo aviso, 8.- Las labores administrativas continuarán de manera presencial, siguiendo el protocolo de higiene, hasta el lunes 30 de marzo, 9.- Después del 30 de marzo se les informará de las medidas que tendremos que seguir de acuerdo al cambio de fase de la contingencia sanitaria, 10.- El CIT mantendrá informada a la comunidad de cualquier cambio de planes que pudiese surgir, por lo que les pedimos se mantengan atentos. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 1609,
      "end": 1839,
      "text": "11.- Finalmente quiero pedirles su colaboración ya que a partir de que entremos en la fase 2, presumiblemente después del 30 de marzo, la entrada al CIT se restringirá y solo podrá entrar al CIT el personal que esté autorizado.  \n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 1839,
      "end": 1840,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 1840,
      "end": 1844,
      "text": "Dr. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 1844,
      "end": 1855,
      "text": "Roberto G. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 1855,
      "end": 1863,
      "text": "Luna S. "
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 1863,
      "end": 1912,
      "text": "Director General Centro de Innovación Tecnológica"
    }
  ],
  "passA": {
    "requestSha256": "8be2d2f8be28d10157bf573083cbd6626e6321250f35e66ec240fe21989213cc",
    "capturedAt": "2026-09-20T23:45:07.282Z",
    "elapsedMs": 108.68475000000035,
    "successfulAttemptElapsedMs": 106.84383300000627,
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
          "noul": 0.02
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
          "noul": 0.24
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.94
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
          "noul": 0.08
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0.23,
            "educational_or_quoted": 0,
            "informational": 0.76,
            "mixed_or_unclear": 0.01
          },
          "confidence": 0.68
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0,
            "no_sensitive_action": 1,
            "mixed_or_unknown": 0,
            "independently_established": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3924,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "b3efaf0080eac60616ae9f7fd8fafa795bcebb6bef8e6aa05bb4099ce012a8b7",
    "capturedAt": "2026-09-20T23:45:07.431Z",
    "elapsedMs": 147.56187499999942,
    "successfulAttemptElapsedMs": 145.82800000000861,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:13": 0,
            "body:3": 0,
            "body:2": 0,
            "NONE": 0.52,
            "body:7": 0.25,
            "body:1": 0,
            "body:0": 0,
            "body:6": 0,
            "body:11": 0,
            "body:5": 0,
            "body:9": 0,
            "body:8": 0.22,
            "body:10": 0.01,
            "subject:0": 0,
            "body:12": 0,
            "body:4": 0
          },
          "confidence": 0.48
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:13",
          "probabilities": {
            "body:13": 0.84,
            "body:2": 0.01,
            "NONE": 0,
            "body:3": 0,
            "body:7": 0.01,
            "body:1": 0,
            "body:0": 0,
            "body:6": 0,
            "body:11": 0,
            "body:5": 0,
            "body:9": 0,
            "body:8": 0.11,
            "body:10": 0.03,
            "body:12": 0,
            "subject:0": 0,
            "body:4": 0
          },
          "confidence": 0.82
        }
      },
      "usage": {
        "input_tokens": 2667,
        "output_tokens": 338
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 258.6785419999942,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:13"
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
    "seq": 1123,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-230",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:07.174Z",
    "offsetMs": 1.2675420000014128
  },
  {
    "seq": 1124,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-230",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:07.281Z",
    "offsetMs": 108.68641700000444,
    "elapsedMs": 106.84383300000627,
    "outcome": "success"
  },
  {
    "seq": 1125,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-230",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:07.285Z",
    "offsetMs": 111.97795800000313
  },
  {
    "seq": 1126,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-230",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:07.431Z",
    "offsetMs": 258.4250420000026,
    "elapsedMs": 145.82800000000861,
    "outcome": "success"
  },
  {
    "seq": 1127,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-230",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:07.431Z",
    "offsetMs": 258.7352499999979,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a0bb70d4f7bf347cbba7c76d182513795a80678fd3169653c019ed1ca9f9775d";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1124},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1126},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1127}} as const;
export const projectionSha256 = "f57087f0723ab8391388722fff91f96028449c5d85acdac1c0ace901d545decd";
