import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-349",
  "inputSha256": "bf76a7af63281e12d3a9c8ce9153323a750c039d5e5efd8b7b329c61245b8de2",
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
    "requestSha256": "a1fbc9bdfcfa1b808c7081d458dbbc1d5a02fe4461a602045c7455f82cae2b6f",
    "capturedAt": "2026-09-20T23:45:49.890Z",
    "elapsedMs": 150.7129580000037,
    "successfulAttemptElapsedMs": 148.47345900000073,
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
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.76
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0.01,
            "educational_or_quoted": 0.02,
            "informational": 0.27,
            "active_request": 0.7
          },
          "confidence": 0.6
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.81,
            "independently_established": 0,
            "sender_supplied": 0.19
          },
          "confidence": 0.75
        }
      },
      "usage": {
        "input_tokens": 3975,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "3f5363e3d97f5e4622fbafdbab1acd20fe5e166193bda7607dd6d562436dcc0c",
    "capturedAt": "2026-09-20T23:45:50.065Z",
    "elapsedMs": 173.1560829999944,
    "successfulAttemptElapsedMs": 171.73737500001153,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:24": 0,
            "NONE": 0.09,
            "body:5": 0.83,
            "body:26": 0,
            "body:13": 0,
            "subject:0": 0,
            "body:2": 0.01,
            "body:22": 0,
            "body:18": 0,
            "body:1": 0.01,
            "body:9": 0.02,
            "body:12": 0,
            "body:21": 0,
            "body:17": 0,
            "body:7": 0,
            "body:19": 0,
            "body:20": 0,
            "body:3": 0.02,
            "body:8": 0,
            "body:10": 0,
            "body:23": 0,
            "body:0": 0.02,
            "body:11": 0,
            "body:4": 0,
            "body:15": 0,
            "body:25": 0,
            "body:16": 0,
            "body:6": 0,
            "body:14": 0
          },
          "confidence": 0.81
        }
      },
      "usage": {
        "input_tokens": 2018,
        "output_tokens": 301
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 325.55583299999125,
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
        "status": "selected",
        "segmentId": "body:5"
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
    "seq": 1709,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-349",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:49.741Z",
    "offsetMs": 1.6441669999912847
  },
  {
    "seq": 1710,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-349",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:49.890Z",
    "offsetMs": 150.716499999995,
    "elapsedMs": 148.47345900000073,
    "outcome": "success"
  },
  {
    "seq": 1711,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-349",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:49.892Z",
    "offsetMs": 152.90533300000243
  },
  {
    "seq": 1712,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-349",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:50.064Z",
    "offsetMs": 325.1554999999935,
    "elapsedMs": 171.73737500001153,
    "outcome": "success"
  },
  {
    "seq": 1713,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-349",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:50.065Z",
    "offsetMs": 325.6647079999966,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d5f1e8254f3adacd6d4611eb6c32bef93e24f31469a3892eace86130e8718e7f";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1710},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1712},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1713}} as const;
export const projectionSha256 = "c1ce65cdc39356eb614fb255ec7b63e1906f49f9b3cd6ba5abddcf7ce28e39f6";
