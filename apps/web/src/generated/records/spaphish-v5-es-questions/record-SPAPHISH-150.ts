import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-150",
  "inputSha256": "3e192826693b3f4b9f7d4c1706ce00415dcf03cc080f5076b3b8e5eccd309f7c",
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
    "requestSha256": "3bbfcb0f0c8cc815992b11647b6bb842d9c9477c2f5a51953bd614549ab418b3",
    "capturedAt": "2026-09-22T03:51:12.014Z",
    "elapsedMs": 614.6953460000223,
    "successfulAttemptElapsedMs": 613.8400770000007,
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
          "noul": 0.96
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
            "educational_or_quoted": 0,
            "informational": 0.83,
            "active_request": 0.17,
            "mixed_or_unclear": 0
          },
          "confidence": 0.77
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 1,
            "sender_supplied": 0,
            "independently_established": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 5379,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "901475165bb7afeda61ebcfcc463a339135c94aa3eafb4fbe773ef9302548fe7",
    "capturedAt": "2026-09-22T03:51:12.562Z",
    "elapsedMs": 546.1211790000089,
    "successfulAttemptElapsedMs": 545.0965910000086,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.58,
            "body:12": 0,
            "body:4": 0,
            "body:10": 0,
            "body:7": 0.27,
            "body:2": 0,
            "body:9": 0,
            "body:5": 0.01,
            "body:6": 0,
            "body:1": 0,
            "body:11": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:13": 0,
            "body:8": 0.14,
            "body:0": 0
          },
          "confidence": 0.54
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:13",
          "probabilities": {
            "NONE": 0.01,
            "body:12": 0,
            "body:4": 0.01,
            "body:10": 0.02,
            "body:7": 0.01,
            "body:2": 0,
            "body:9": 0,
            "body:5": 0,
            "body:6": 0,
            "body:1": 0,
            "body:11": 0,
            "subject:0": 0,
            "body:3": 0,
            "body:13": 0.85,
            "body:8": 0.09999999999999999,
            "body:0": 0
          },
          "confidence": 0.83
        }
      },
      "usage": {
        "input_tokens": 2882,
        "output_tokens": 338
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1162.419302000024,
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
    "seq": 728,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-150",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:11.400Z",
    "offsetMs": 0.5811099999991711
  },
  {
    "seq": 729,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-150",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:12.014Z",
    "offsetMs": 614.6953380000195,
    "elapsedMs": 613.8400770000007,
    "outcome": "success"
  },
  {
    "seq": 730,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-150",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:51:12.016Z",
    "offsetMs": 616.582923000009
  },
  {
    "seq": 731,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-150",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:51:12.562Z",
    "offsetMs": 1162.1872450000083,
    "elapsedMs": 545.0965910000086,
    "outcome": "success"
  },
  {
    "seq": 732,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-150",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:51:12.562Z",
    "offsetMs": 1162.4727899999998,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "5284aa1e3bcf6b2ab9b1142ad2c12a16c88ba8f82ab7fcd49942f4bb2471393c";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":729},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":731},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":732}} as const;
export const projectionSha256 = "29ea85b65fab0816403c8e384f1f26e1fac7546b6d0ce5db0a6efdb2fa7d71a9";
