import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-306",
  "inputSha256": "453dd893b2b1b1f6ea84a12eb5e5565b414115c20f13969f80461a29c13f1d02",
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
      "text": "raspberry pi y plate recognition"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 14,
      "text": "Roberto Ruiz:\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 14,
      "end": 15,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 15,
      "end": 66,
      "text": "Socio te pongo al tanto de qué he estado haciendo. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 66,
      "end": 236,
      "text": "La base de datos de Control Total funciona y con lo que hice pude comprobar que el diseño que se hizo es consistente, es práctico, funciona y cumple con lo que queremos. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 236,
      "end": 337,
      "text": "Pero pasa que por el uso, eliminaciones y inserciones hay que hacer acciones de limpieza y respaldo. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 337,
      "end": 444,
      "text": "Eso se puede hacer de manera automática cada cierto tiempo, y eso se encarga solo el server de SQL Server. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 444,
      "end": 591,
      "text": "Hay que programar las consultas (en SQL puro) para hacer esas acciones de limpieza y todo eso se integra después en unas cosas que se llaman Jobs. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 591,
      "end": 664,
      "text": "Bien, la semana pasada me dediqué a crear las consultas necesarias para:\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 664,
      "end": 665,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 665,
      "end": 710,
      "text": "Crear un backup de la BD cada cierto tiempo.\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 710,
      "end": 711,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 711,
      "end": 877,
      "text": "Limpiar usuarios que no hayan entrado al sistema en X tiempo (X se puede configurar por días, meses o años)., La idea es no tener gente en el sistema que no lo usan.\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 877,
      "end": 878,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 878,
      "end": 938,
      "text": "Limpiar las solicitudes de visita que no hayan sido usadas.\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 938,
      "end": 939,
      "text": "\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 939,
      "end": 1030,
      "text": "Limpiar las solicitudes de visita para las que pidieron un permision y que este no se usó.\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 1030,
      "end": 1031,
      "text": "\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 1031,
      "end": 1077,
      "text": "Detectar inconsistencias en la base de datos.\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 1077,
      "end": 1078,
      "text": "\n"
    },
    {
      "id": "body:19",
      "source": "body",
      "start": 1078,
      "end": 1302,
      "text": "Ya los Jobs que hacen eso están listos y funcionando en una BD local que tengo aquí donde me bajé todos los datos de la BD que está en la máquina virtual de Samuel, que aunque son de prueba sirven para programar esas cosas. "
    },
    {
      "id": "body:20",
      "source": "body",
      "start": 1302,
      "end": 1447,
      "text": "Ahora hay que esperar que la BD tenga datos de verdad y correr unas cuantas pruebas de esos Jobs para asegurarnos al 100% de que funcionan bien. "
    },
    {
      "id": "body:21",
      "source": "body",
      "start": 1447,
      "end": 1616,
      "text": "Eso hay que hacerlo y con mucho cuidado porque estamos hablando de acciones de limpieza que borran datos y la madre de los mameyes, por lo tanto, hay que tener cuidado.\n"
    },
    {
      "id": "body:22",
      "source": "body",
      "start": 1616,
      "end": 1617,
      "text": "\n"
    },
    {
      "id": "body:23",
      "source": "body",
      "start": 1617,
      "end": 1752,
      "text": "Esta semana me he estado dedicando a buscar código que detecten las chapas de los carros y las extraigan, todo eso desde raspberry pi. "
    },
    {
      "id": "body:24",
      "source": "body",
      "start": 1752,
      "end": 2015,
      "text": "La buena noticia es que no es algo que estemos inventando, hay mucha gente haciéndolo, e incluso, unos chinos ahí proponen un proyecto que llega un carrito de juguete con una chapa, la raspberry la detecta y le abre una puerta, igualito a lo que se quiere hacer. "
    },
    {
      "id": "body:25",
      "source": "body",
      "start": 2015,
      "end": 2102,
      "text": "Entonces no hay que comprar nada cuando eso que se quiere es perfectamente realizable.\n"
    },
    {
      "id": "body:26",
      "source": "body",
      "start": 2102,
      "end": 2103,
      "text": "\n"
    },
    {
      "id": "body:27",
      "source": "body",
      "start": 2103,
      "end": 2220,
      "text": "En estos momentos estoy buscando todo lo que encuentre sobre eso, para luego empezar a probar códigos a ver qué tal. "
    },
    {
      "id": "body:28",
      "source": "body",
      "start": 2220,
      "end": 2351,
      "text": "Yo te comparto aquí unos links para que veas qué hay, y bueno... si creo que se va a necesitar una raspberry para probar todo eso. "
    },
    {
      "id": "body:29",
      "source": "body",
      "start": 2351,
      "end": 2457,
      "text": "Hay que ver con Daniel como puede bajarse ese código y echarlo a andar, o ver qué otra variante se sigue.\n"
    },
    {
      "id": "body:30",
      "source": "body",
      "start": 2457,
      "end": 2458,
      "text": "\n"
    },
    {
      "id": "body:31",
      "source": "body",
      "start": 2458,
      "end": 2543,
      "text": "Revisa eso que te comparto par que veas qué se ha hecho y que no luce muy imposible. "
    },
    {
      "id": "body:32",
      "source": "body",
      "start": 2543,
      "end": 2676,
      "text": "Ah otra cosa, buqué así \"automatic number plate recognition raspberry pi\" y es interesante que todo lo que apareció es en Python....\n"
    },
    {
      "id": "body:33",
      "source": "body",
      "start": 2676,
      "end": 2677,
      "text": "\n"
    },
    {
      "id": "body:34",
      "source": "body",
      "start": 2677,
      "end": 2711,
      "text": "Bueno socio, seguimos en combate.\n"
    },
    {
      "id": "body:35",
      "source": "body",
      "start": 2711,
      "end": 2712,
      "text": "\n"
    },
    {
      "id": "body:36",
      "source": "body",
      "start": 2712,
      "end": 2727,
      "text": "Los links son:\n"
    },
    {
      "id": "body:37",
      "source": "body",
      "start": 2727,
      "end": 2728,
      "text": "\n"
    },
    {
      "id": "body:38",
      "source": "body",
      "start": 2728,
      "end": 3418,
      "text": "https://repo.innovacion.org/proyecto-alpr/link/1 https://repo.innovacion.org/proyecto-alpr/link/2 https://repo.innovacion.org/proyecto-alpr/link/3 https://repo.innovacion.org/proyecto-alpr/link/4 https://repo.innovacion.org/proyecto-alpr/link/5 https://repo.innovacion.org/proyecto-alpr/link/6 https://repo.innovacion.org/proyecto-alpr/link/7 https://repo.innovacion.org/proyecto-alpr/link/8 https://repo.innovacion.org/proyecto-alpr/link/9 https://repo.innovacion.org/proyecto-alpr/link/10 https://repo.innovacion.org/proyecto-alpr/link/11 https://repo.innovacion.org/proyecto-alpr/link/12 https://repo.innovacion.org/proyecto-alpr/link/13 https://repo.innovacion.org/proyecto-alpr/link/14"
    }
  ],
  "passA": {
    "requestSha256": "5775752863bf45322ffe0a8a7dd66b97a30e3097936c77692b77cf1f3d2f8510",
    "capturedAt": "2026-09-20T23:45:34.607Z",
    "elapsedMs": 168.44925000000512,
    "successfulAttemptElapsedMs": 167.20141700000386,
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
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.47
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
          "noul": 0.03
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
          "choice": "active_request",
          "probabilities": {
            "informational": 0.15,
            "mixed_or_unclear": 0.01,
            "educational_or_quoted": 0,
            "active_request": 0.84
          },
          "confidence": 0.78
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.95,
            "independently_established": 0.01,
            "sender_supplied": 0.04
          },
          "confidence": 0.94
        }
      },
      "usage": {
        "input_tokens": 4280,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "a95f44dced736de93980b5117115411edced3e5e66b7c066d7b31dfae2581dc6",
    "capturedAt": "2026-09-20T23:45:34.786Z",
    "elapsedMs": 175.48466600000393,
    "successfulAttemptElapsedMs": 173.37304200000654,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:35": 0,
            "body:32": 0,
            "body:17": 0,
            "body:1": 0.01,
            "NONE": 0.34,
            "body:20": 0,
            "subject:0": 0,
            "body:12": 0,
            "body:15": 0,
            "body:38": 0.01,
            "body:7": 0,
            "body:25": 0,
            "body:3": 0.05,
            "body:18": 0,
            "body:36": 0,
            "body:10": 0,
            "body:8": 0,
            "body:16": 0,
            "body:21": 0.01,
            "body:14": 0,
            "body:24": 0,
            "body:9": 0,
            "body:26": 0,
            "body:34": 0.02,
            "body:31": 0.09999999999999999,
            "body:4": 0,
            "body:28": 0.01,
            "body:22": 0,
            "body:23": 0.01,
            "body:5": 0,
            "body:27": 0,
            "body:6": 0,
            "body:30": 0,
            "body:29": 0.02,
            "body:13": 0,
            "body:2": 0.37,
            "body:19": 0.01,
            "body:33": 0,
            "body:0": 0.04,
            "body:11": 0,
            "body:37": 0
          },
          "confidence": 0.34
        }
      },
      "usage": {
        "input_tokens": 2800,
        "output_tokens": 421
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 347.559333000012,
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
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1498,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-306",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:34.439Z",
    "offsetMs": 0.8245830000087153
  },
  {
    "seq": 1499,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-306",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:34.607Z",
    "offsetMs": 168.44787500001257,
    "elapsedMs": 167.20141700000386,
    "outcome": "success"
  },
  {
    "seq": 1500,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-306",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:34.612Z",
    "offsetMs": 173.0008330000128
  },
  {
    "seq": 1501,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-306",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:34.786Z",
    "offsetMs": 347.08950000000186,
    "elapsedMs": 173.37304200000654,
    "outcome": "success"
  },
  {
    "seq": 1502,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-306",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:34.786Z",
    "offsetMs": 347.6777080000029,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "9fe53c5263fea202706c22c63d852b51804ac3020f6821e7590d32a67018780f";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1499},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1501},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1502}} as const;
export const projectionSha256 = "2e390103aa2e6e370d9abfcee7c592e75963cee609914053a8e59cb7ed00d0b1";
