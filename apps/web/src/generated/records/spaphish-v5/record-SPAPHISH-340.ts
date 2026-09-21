import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-340",
  "inputSha256": "b1febca1918ec169138cc84694d144b46f9a4a7eff4664805307c95b30188f74",
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
      "end": 30,
      "text": "Camino Real: Entrega de libros"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 190,
      "text": "María Fernanda Robles García, ha recibido un mensaje nuevo en EduPlataforma Entrega de libros Estimados Padres de Familia: Por este medio les informamos los días de entrega para cada grado. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 190,
      "end": 263,
      "text": "Lunes 12 de octubre y martes 13 de octubre: Para alumnos de 1° semestre. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 263,
      "end": 484,
      "text": "Miércoles 14 de octubre y Jueves 15 de octubre: Para alumnos de 3° semestre Viernes 16 de octubre: Para alumnos de 5° semestre En horario de 8:00 a 12:00 p.m. solamente asistir 1 persona por familia con recibido de pago. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 484,
      "end": 601,
      "text": "Les recordamos que estamos en horario de 9:00 a 12:00 p.m. para que puedan comprar sus libros en la caja con la c.p. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 601,
      "end": 616,
      "text": "Diana Herrera. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 616,
      "end": 625,
      "text": "Gracias. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 625,
      "end": 642,
      "text": "Profesora Sofía. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 642,
      "end": 719,
      "text": "Ingresar a la plataforma * Por favor no respondas a este correo electrónico. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 719,
      "end": 812,
      "text": "Este mensaje ha sido enviado automáticamente desde una cuenta incapaz de recibir respuestas. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 812,
      "end": 893,
      "text": "Si necesitas ayuda por favor comunícate con la administración de tu Institución. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 893,
      "end": 919,
      "text": "EduPlataforma Global S.A. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 919,
      "end": 994,
      "text": "Calle Ficticia del Sol 120, Interior 500 Colonia Centro, Alcaldía Central. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 994,
      "end": 1011,
      "text": "Ciudad Ficticia. "
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 1011,
      "end": 1018,
      "text": "01010. "
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 1018,
      "end": 1086,
      "text": "Boulevard de las Américas 15, Local 8 Edificio A4, Colonia Moderna. "
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 1086,
      "end": 1109,
      "text": "Monterrey, Nuevo León. "
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 1109,
      "end": 1116,
      "text": "64000. "
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 1116,
      "end": 1128,
      "text": "800-111-2222"
    }
  ],
  "passA": {
    "requestSha256": "56e9d5dda4e3360b9f9071125a5140038fb82fbee5d377c052719bafe1cdc504",
    "capturedAt": "2026-09-20T23:45:46.595Z",
    "elapsedMs": 116.4701250000071,
    "successfulAttemptElapsedMs": 114.35970899999666,
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
          "noul": 0.05
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.64
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.3
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.93
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.09
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.73
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0,
            "informational": 0.65,
            "educational_or_quoted": 0,
            "active_request": 0.35
          },
          "confidence": 0.52
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.06,
            "sender_supplied": 0.08,
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.85
          },
          "confidence": 0.79
        }
      },
      "usage": {
        "input_tokens": 3768,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "6bf29da4ff5e59f2a8f5b2f8790a97d27f2667b7b219f4f67c7766c49367e006",
    "capturedAt": "2026-09-21T00:57:29.188Z",
    "elapsedMs": 127.4477079999997,
    "successfulAttemptElapsedMs": 124.49512499999946,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:16": 0,
            "body:4": 0,
            "body:2": 0.06,
            "body:17": 0,
            "body:14": 0,
            "body:0": 0,
            "NONE": 0.01,
            "body:11": 0,
            "body:7": 0,
            "body:1": 0,
            "subject:0": 0,
            "body:3": 0.93,
            "body:9": 0,
            "body:8": 0,
            "body:12": 0,
            "body:6": 0,
            "body:5": 0,
            "body:10": 0,
            "body:13": 0,
            "body:15": 0
          },
          "confidence": 0.92
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:16": 0,
            "body:2": 0.43,
            "body:4": 0,
            "body:17": 0,
            "body:14": 0,
            "body:0": 0.01,
            "NONE": 0.48,
            "body:11": 0,
            "body:7": 0.01,
            "body:1": 0.04,
            "subject:0": 0,
            "body:3": 0.03,
            "body:8": 0,
            "body:9": 0,
            "body:6": 0,
            "body:10": 0,
            "body:5": 0,
            "body:12": 0,
            "body:15": 0,
            "body:13": 0
          },
          "confidence": 0.44
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:16": 0,
            "body:4": 0,
            "body:2": 0.01,
            "body:17": 0,
            "body:0": 0.33,
            "body:14": 0,
            "body:11": 0,
            "NONE": 0.01,
            "body:7": 0,
            "body:1": 0,
            "subject:0": 0,
            "body:3": 0.02,
            "body:9": 0.08,
            "body:8": 0,
            "body:6": 0.54,
            "body:12": 0,
            "body:5": 0,
            "body:10": 0.01,
            "body:13": 0,
            "body:15": 0
          },
          "confidence": 0.5
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:9",
          "probabilities": {
            "body:16": 0,
            "body:4": 0,
            "body:2": 0.07,
            "body:17": 0.06,
            "body:14": 0,
            "body:0": 0.01,
            "NONE": 0.01,
            "body:11": 0,
            "body:7": 0.12,
            "body:1": 0,
            "subject:0": 0,
            "body:3": 0.09,
            "body:9": 0.64,
            "body:8": 0,
            "body:12": 0,
            "body:6": 0,
            "body:5": 0,
            "body:10": 0,
            "body:13": 0,
            "body:15": 0
          },
          "confidence": 0.61
        }
      },
      "usage": {
        "input_tokens": 4048,
        "output_tokens": 834
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 383.78049999999894,
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
        "status": "selected",
        "segmentId": "body:3"
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1664,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-340",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:46.480Z",
    "offsetMs": 1.518167000001995
  },
  {
    "seq": 1665,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-340",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:46.595Z",
    "offsetMs": 116.4718339999963,
    "elapsedMs": 114.35970899999666,
    "outcome": "success"
  },
  {
    "seq": 1666,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-340",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:46.598Z",
    "offsetMs": 119.53075000000536
  },
  {
    "seq": 1667,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-340",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:46.732Z",
    "offsetMs": 254.25420900000609,
    "elapsedMs": 134.19558299999335,
    "outcome": "success"
  },
  {
    "seq": 1668,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-340",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:46.733Z",
    "offsetMs": 254.56229200000234,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2729,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-340",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:29.062Z",
    "offsetMs": 3.642083000000639
  },
  {
    "seq": 2730,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-340",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:29.187Z",
    "offsetMs": 128.77554200000122,
    "elapsedMs": 124.49512499999946,
    "outcome": "success"
  },
  {
    "seq": 2731,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-340",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:29.188Z",
    "offsetMs": 129.09758300000067,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "51b1f92ee4ad34d56fd811aba1d504f7e145ea6061b4f4596848af6a7d50613d";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1665},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2730},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2731}} as const;
export const projectionSha256 = "50d6acce653a82918be7ff7a55453354923c9b2ea99e68b81b53865d4b4ba41b";
