import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-349",
  "inputSha256": "bf76a7af63281e12d3a9c8ce9153323a750c039d5e5efd8b7b329c61245b8de2",
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
      "end": 33,
      "text": "RV: script para noticias, restMex"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 163,
      "text": "De: Carlos Ríos Morales <isc.riosmorales@correo.net> Enviado: miércoles, 1 de febrero de 2023 08:41 Para: javier.soto@cescom.mx <javier.soto@cescom.mx>; Felipe T. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 163,
      "end": 390,
      "text": "Durán Castillo <felipe@citmex.edu.mx>; Ricardo Vargas FLORES <Ricardo.Vargas@uhisa.edu.mx>; laura.torres@cescom.mx <laura.torres@cescom.mx>; carlos_r@cescom.mx <carlos_r@cescom.mx> Asunto: Fwd: script para noticias, DATATRAVEL\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 390,
      "end": 391,
      "text": "\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 391,
      "end": 453,
      "text": "¡Este mensaje fue enviado por alguien ajeno a la Universidad!\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 453,
      "end": 454,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 454,
      "end": 552,
      "text": "Hola Colegas del DATATRAVEL, como saben debemos descargar datos para el corpus de la competencia. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 552,
      "end": 644,
      "text": "En el presente correo estan los scripts y las instrucciones para la descarga de los mismos. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 644,
      "end": 731,
      "text": "En este enlace: https://docs.cloudservice.net/sheets/d/SYNTHETIC_ID_RESTMEX_44321/edit?"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 731,
      "end": 907,
      "text": "usp=sharing esta la lista de actividades separadas por colaborador, con las palabras clave para la búsqueda, lugares (Hidalgo, Querétaro y Jalisco) y el periodo (2021 y 2022). "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 907,
      "end": 961,
      "text": "Quedo a sus ordenes para cualquier duda o aclaración. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 961,
      "end": 980,
      "text": "Saludos cordiales!\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 980,
      "end": 981,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 981,
      "end": 1126,
      "text": "=========================================== INSTRUCCIONES =========================================== Todos los archivos adjuntos son necesarios\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 1126,
      "end": 1127,
      "text": "\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 1127,
      "end": 1143,
      "text": "Se ejecuta así:\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 1143,
      "end": 1144,
      "text": "\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 1144,
      "end": 1273,
      "text": "python pyNews.py paabras_consulta_separadas_por_guion_bajo NombreDestino Pais fecha/inicio/formatoLocal fecha/final/mismoFormato\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 1273,
      "end": 1274,
      "text": "\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 1274,
      "end": 1295,
      "text": "ejemplo de consulta:\n"
    },
    {
      "id": "body:19",
      "source": "body",
      "start": 1295,
      "end": 1296,
      "text": "\n"
    },
    {
      "id": "body:20",
      "source": "body",
      "start": 1296,
      "end": 1367,
      "text": "python pyNews.py Viajes_promocion_precios Hida _ 01/01/2025 01/01/2021\n"
    },
    {
      "id": "body:21",
      "source": "body",
      "start": 1367,
      "end": 1368,
      "text": "\n"
    },
    {
      "id": "body:22",
      "source": "body",
      "start": 1368,
      "end": 1376,
      "text": "salida:\n"
    },
    {
      "id": "body:23",
      "source": "body",
      "start": 1376,
      "end": 1377,
      "text": "\n"
    },
    {
      "id": "body:24",
      "source": "body",
      "start": 1377,
      "end": 1633,
      "text": "===========================================================================  COMIENZA WEB SCRAPPING  Noticias sobre:Hidalgo, desde:Mexico  Comienza desde:01/01/2025 hasta 01/01/2021  Datos extra  Query:Viajes promocion precios Hidalgo  Cr:countryMX, Gl:mx\n"
    },
    {
      "id": "body:25",
      "source": "body",
      "start": 1633,
      "end": 1703,
      "text": "no es necesario recordar todo el nombre del destino, con guana basta. "
    },
    {
      "id": "body:26",
      "source": "body",
      "start": 1703,
      "end": 1827,
      "text": "El país, cuando es México basta con poner \"_\", si se buscan noticias desde otro país se pondría \"United_States\" u otra cosa."
    }
  ],
  "passA": {
    "requestSha256": "5ddc3d10ede8c7668062d61a2d86e7fa6abe1faee75a151d9b80a16d38ebec2f",
    "capturedAt": "2026-09-22T03:55:10.753Z",
    "elapsedMs": 617.0275230000261,
    "successfulAttemptElapsedMs": 615.7100759999594,
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
          "noul": 0.03
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
          "noul": 0.05
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.8
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
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.72,
            "informational": 0.25,
            "educational_or_quoted": 0.02,
            "mixed_or_unclear": 0.01
          },
          "confidence": 0.63
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.18,
            "no_sensitive_action": 0.82,
            "mixed_or_unknown": 0,
            "independently_established": 0
          },
          "confidence": 0.76
        }
      },
      "usage": {
        "input_tokens": 5425,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "9362d6146aeace26c38c5fe1f52c50d1592d0631ba30ecf523b05665121482c4",
    "capturedAt": "2026-09-22T03:55:11.331Z",
    "elapsedMs": 577.0555820000009,
    "successfulAttemptElapsedMs": 575.0874429999967,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:11": 0,
            "body:24": 0,
            "body:5": 0.65,
            "body:15": 0,
            "NONE": 0.08,
            "body:12": 0,
            "body:14": 0,
            "subject:0": 0,
            "body:4": 0.01,
            "body:25": 0,
            "body:9": 0.14,
            "body:10": 0,
            "body:16": 0,
            "body:22": 0,
            "body:3": 0.01,
            "body:6": 0.02,
            "body:20": 0,
            "body:17": 0,
            "body:2": 0.01,
            "body:0": 0.060000000000000005,
            "body:1": 0.01,
            "body:8": 0,
            "body:23": 0,
            "body:13": 0,
            "body:7": 0,
            "body:19": 0,
            "body:26": 0,
            "body:21": 0,
            "body:18": 0
          },
          "confidence": 0.63
        }
      },
      "usage": {
        "input_tokens": 2118,
        "output_tokens": 301
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1195.9850909999805,
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
    "seq": 1707,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-349",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:10.136Z",
    "offsetMs": 1.0168379999813624
  },
  {
    "seq": 1708,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-349",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:10.752Z",
    "offsetMs": 617.0283150000032,
    "elapsedMs": 615.7100759999594,
    "outcome": "success"
  },
  {
    "seq": 1709,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-349",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:55:10.755Z",
    "offsetMs": 619.6184649999486
  },
  {
    "seq": 1710,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-349",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:55:11.331Z",
    "offsetMs": 1195.6651079999865,
    "elapsedMs": 575.0874429999967,
    "outcome": "success"
  },
  {
    "seq": 1711,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-349",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:55:11.332Z",
    "offsetMs": 1196.0557399999816,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "3cc10b59bfe168ad671396918f0991a65c2ffd5f395ef6262f297ca3927bafa8";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1708},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1710},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1711}} as const;
export const projectionSha256 = "bf805dc3abc9021ee542f26228d20a9e12058547953acac73aa7d034acd1d19d";
