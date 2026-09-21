import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-150",
  "inputSha256": "3e192826693b3f4b9f7d4c1706ce00415dcf03cc080f5076b3b8e5eccd309f7c",
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
      "end": 44,
      "text": "Contingencia sanitaria por COVID-19 en MyOwn"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 45,
      "text": "San Andrés, Querétaro a 25 de marzo de 2020.\n"
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
      "end": 1837,
      "text": "11.- Finalmente quiero pedirles su colaboración ya que a partir de que entremos en la fase 2, presumiblemente después del 30 de marzo, la entrada al CIT se restringirá y solo podrá entrar al CIT el personal que esté autorizado.\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 1837,
      "end": 1838,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 1838,
      "end": 1842,
      "text": "Dr. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 1842,
      "end": 1853,
      "text": "Roberto G. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 1853,
      "end": 1861,
      "text": "Luna S. "
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 1861,
      "end": 1910,
      "text": "Director General Centro de Innovación Tecnológica"
    }
  ],
  "passA": {
    "requestSha256": "443ee55a30d68e68ee263b2c9c2a92f88b4fd63147d00b7deefcc9b4bf2abadf",
    "capturedAt": "2026-09-20T23:44:38.498Z",
    "elapsedMs": 117.97808300000179,
    "successfulAttemptElapsedMs": 116.89024999999674,
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
          "noul": 0.21
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
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
            "active_request": 0.33,
            "educational_or_quoted": 0,
            "informational": 0.66,
            "mixed_or_unclear": 0.01
          },
          "confidence": 0.54
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 1,
            "sender_supplied": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3929,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "15edb32ed1d7fa8643adbb207cfb1302cb7684ab47ed98d14300ebe7607a7bd5",
    "capturedAt": "2026-09-21T00:57:19.778Z",
    "elapsedMs": 134.1240829999997,
    "successfulAttemptElapsedMs": 131.24962500000038,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:4": 0,
            "body:6": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:9": 0,
            "body:13": 0,
            "body:5": 0,
            "body:8": 0.26,
            "body:12": 0,
            "body:10": 0.01,
            "body:7": 0.23,
            "NONE": 0.5,
            "body:2": 0,
            "body:3": 0,
            "body:11": 0,
            "body:1": 0
          },
          "confidence": 0.45
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:13",
          "probabilities": {
            "body:4": 0.01,
            "body:6": 0,
            "subject:0": 0,
            "body:0": 0,
            "body:9": 0,
            "body:13": 0.83,
            "body:8": 0.1,
            "body:5": 0,
            "body:12": 0,
            "body:10": 0.02,
            "body:7": 0.02,
            "NONE": 0,
            "body:2": 0.02,
            "body:3": 0,
            "body:1": 0,
            "body:11": 0
          },
          "confidence": 0.82
        }
      },
      "usage": {
        "input_tokens": 2680,
        "output_tokens": 338
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 464.0855419999971,
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 734,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-150",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:38.380Z",
    "offsetMs": 0.6941660000011325
  },
  {
    "seq": 735,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-150",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:38.497Z",
    "offsetMs": 117.97929100000329,
    "elapsedMs": 116.89024999999674,
    "outcome": "success"
  },
  {
    "seq": 736,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-150",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:38.499Z",
    "offsetMs": 120.05045799999789
  },
  {
    "seq": 737,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-150",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:38.708Z",
    "offsetMs": 328.23891600000206,
    "elapsedMs": 207.66445800000656,
    "outcome": "success"
  },
  {
    "seq": 738,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-150",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:38.708Z",
    "offsetMs": 328.3750409999993,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2564,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-150",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:19.645Z",
    "offsetMs": 3.251209000000017
  },
  {
    "seq": 2565,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-150",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:19.777Z",
    "offsetMs": 135.1532500000003,
    "elapsedMs": 131.24962500000038,
    "outcome": "success"
  },
  {
    "seq": 2566,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-150",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:19.778Z",
    "offsetMs": 135.64191699999992,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7dcd58ee17cd73f8a5a95c77a7d2255fa996642b695f15e53180e50f657fb315";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":735},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2565},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2566}} as const;
export const projectionSha256 = "c51f8a1f48a1a336abd422161fe082382a5abb418111518d760de1375bb52e72";
