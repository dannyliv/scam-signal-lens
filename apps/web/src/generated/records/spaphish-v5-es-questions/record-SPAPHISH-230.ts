import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-230",
  "inputSha256": "9507d348fa3ca8d69bcf9d6e811f91ef237279ee367e3478df754df5cd55291c",
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
    "requestSha256": "69c4f4f366373be4dd196ed504db7a052b6b6e21aa7346dfb27e069ffa9a0335",
    "capturedAt": "2026-09-22T03:52:44.737Z",
    "elapsedMs": 593.7963040000177,
    "successfulAttemptElapsedMs": 592.4173840000294,
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
          "noul": 0.22
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
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 0.9,
            "active_request": 0.1,
            "educational_or_quoted": 0
          },
          "confidence": 0.86
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "sender_supplied": 0,
            "no_sensitive_action": 1
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 5374,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "91efd6261dd28ddbf54b08ad060e2f6747f433071104942b38f10dad5d31a779",
    "capturedAt": "2026-09-22T03:52:45.360Z",
    "elapsedMs": 620.9315780000179,
    "successfulAttemptElapsedMs": 619.05815300002,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:6": 0,
            "body:4": 0,
            "body:9": 0,
            "subject:0": 0,
            "body:2": 0,
            "body:0": 0,
            "body:11": 0,
            "body:10": 0,
            "body:13": 0,
            "body:12": 0,
            "body:8": 0.13,
            "body:1": 0,
            "body:7": 0.2,
            "NONE": 0.67,
            "body:5": 0,
            "body:3": 0
          },
          "confidence": 0.63
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:13",
          "probabilities": {
            "body:6": 0,
            "body:4": 0,
            "body:9": 0,
            "subject:0": 0,
            "body:2": 0,
            "body:12": 0,
            "body:11": 0,
            "body:10": 0.04,
            "body:13": 0.79,
            "body:0": 0,
            "body:8": 0.14,
            "body:5": 0,
            "body:7": 0.01,
            "NONE": 0.01,
            "body:1": 0,
            "body:3": 0
          },
          "confidence": 0.76
        }
      },
      "usage": {
        "input_tokens": 2869,
        "output_tokens": 338
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1217.0777770000277,
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
    "seq": 1119,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-230",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:44.143Z",
    "offsetMs": 0.7997840000316501
  },
  {
    "seq": 1120,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-230",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:44.736Z",
    "offsetMs": 593.7963979999768,
    "elapsedMs": 592.4173840000294,
    "outcome": "success"
  },
  {
    "seq": 1121,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-230",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:44.740Z",
    "offsetMs": 597.3247229999979
  },
  {
    "seq": 1122,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-230",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:45.359Z",
    "offsetMs": 1216.7948939999915,
    "elapsedMs": 619.05815300002,
    "outcome": "success"
  },
  {
    "seq": 1123,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-230",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:45.360Z",
    "offsetMs": 1217.1346020000055,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "f3d74b22fd53dc4697c88690148d8f92c1dec8a56adbb18f330c7e3e9a5f0d8b";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1120},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1122},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1123}} as const;
export const projectionSha256 = "ad0826bec8703583bf2d1990a1ecb1a53f4ab0c0107907d21aa7b2010b9cd728";
