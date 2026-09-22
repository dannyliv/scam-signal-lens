import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-340",
  "inputSha256": "b1febca1918ec169138cc84694d144b46f9a4a7eff4664805307c95b30188f74",
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
    "requestSha256": "373985ae402529f0d1a68388c05a29d372f13fb15c98d1c38e412ffe8a107b8e",
    "capturedAt": "2026-09-22T03:54:59.179Z",
    "elapsedMs": 680.967003000027,
    "successfulAttemptElapsedMs": 679.5097459999961,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.04
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.06
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.55
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
          "noul": 0.93
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.64
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0.47,
            "informational": 0.53,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 0.36
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.08,
            "no_sensitive_action": 0.88,
            "mixed_or_unknown": 0.01,
            "independently_established": 0.03
          },
          "confidence": 0.84
        }
      },
      "usage": {
        "input_tokens": 5218,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "14cda4ea98516d595657ef571036c67dffac9cde3a09fcf9570d6052de3122d0",
    "capturedAt": "2026-09-22T03:54:59.803Z",
    "elapsedMs": 622.531604000018,
    "successfulAttemptElapsedMs": 621.2986360000214,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:5": 0,
            "body:15": 0,
            "body:4": 0,
            "body:11": 0,
            "body:6": 0,
            "body:12": 0,
            "body:13": 0,
            "NONE": 0.07,
            "body:3": 0.76,
            "body:7": 0,
            "body:9": 0,
            "body:2": 0.17,
            "body:10": 0,
            "body:0": 0,
            "body:14": 0,
            "body:17": 0,
            "body:8": 0,
            "body:16": 0,
            "body:1": 0,
            "subject:0": 0
          },
          "confidence": 0.74
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:5": 0,
            "body:15": 0,
            "body:4": 0,
            "body:11": 0,
            "body:6": 0,
            "body:12": 0,
            "body:3": 0.02,
            "NONE": 0.56,
            "body:13": 0,
            "body:7": 0.01,
            "body:14": 0,
            "body:2": 0.36,
            "body:10": 0,
            "body:0": 0,
            "body:9": 0,
            "body:17": 0,
            "body:8": 0,
            "body:16": 0,
            "subject:0": 0,
            "body:1": 0.05
          },
          "confidence": 0.53
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:5": 0,
            "body:15": 0,
            "body:4": 0.01,
            "body:11": 0,
            "body:6": 0.74,
            "body:12": 0,
            "body:13": 0,
            "body:3": 0.02,
            "NONE": 0.02,
            "body:7": 0,
            "body:9": 0.08,
            "body:2": 0.01,
            "body:0": 0.11,
            "body:10": 0.01,
            "body:14": 0,
            "body:17": 0,
            "body:8": 0,
            "body:16": 0,
            "subject:0": 0,
            "body:1": 0
          },
          "confidence": 0.71
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:9",
          "probabilities": {
            "body:5": 0,
            "body:4": 0,
            "body:15": 0,
            "body:6": 0,
            "body:11": 0,
            "body:12": 0,
            "body:13": 0,
            "body:3": 0.07,
            "NONE": 0.02,
            "body:7": 0.12,
            "body:9": 0.44,
            "body:2": 0.26,
            "body:10": 0,
            "body:0": 0.01,
            "body:14": 0,
            "body:17": 0.08,
            "body:8": 0,
            "body:16": 0,
            "subject:0": 0,
            "body:1": 0
          },
          "confidence": 0.4
        }
      },
      "usage": {
        "input_tokens": 4462,
        "output_tokens": 834
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1305.4410730000236,
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
        "status": "selected",
        "segmentId": "body:6"
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
    "seq": 1662,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-340",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:58.499Z",
    "offsetMs": 1.1530880000209436
  },
  {
    "seq": 1663,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-340",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:59.179Z",
    "offsetMs": 680.9664300000295,
    "elapsedMs": 679.5097459999961,
    "outcome": "success"
  },
  {
    "seq": 1664,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-340",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:59.181Z",
    "offsetMs": 683.4636380000156
  },
  {
    "seq": 1665,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-340",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:59.803Z",
    "offsetMs": 1305.077135999978,
    "elapsedMs": 621.2986360000214,
    "outcome": "success"
  },
  {
    "seq": 1666,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-340",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:59.803Z",
    "offsetMs": 1305.4913550000056,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7b9605357b0818e4113d562ec717cb46fe3af327d4af18451176a1d2d025bbe7";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1663},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1665},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1666}} as const;
export const projectionSha256 = "46e7b906aefb0f704c62c19319d55a4e530aff1904b7abecede8864820b4bd4a";
