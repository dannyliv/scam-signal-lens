import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-119",
  "inputSha256": "c53818bb24b2af4ef7d457d6e7552b9ff0fb8a607662f388ca80c3121443588c",
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
      "end": 40,
      "text": "Resultados de medición de ancho de banda"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 26,
      "text": "Hola Arturo, buenos días:\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 26,
      "end": 27,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 27,
      "end": 93,
      "text": "Soy Ricardo Vargas Flores, con número de suscriptor 999-888-7766. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 93,
      "end": 176,
      "text": "Ayer hablamos por los problemas que está teniendo el servicio de internet en casa. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 176,
      "end": 314,
      "text": "Yo tengo una aplicación que corre pruebas de velocidad cada cierto periodo de tiempo y que almacena los resultados de bajada y de subida. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 314,
      "end": 429,
      "text": "Te comparto una prueba que corrí ayer desde las 8 pm hasta la 10 pm aproximadamente, sin nadie usando el internet. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 429,
      "end": 487,
      "text": "La prueba la corri con una laptop al lado del cablemodem. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 487,
      "end": 664,
      "text": "Podrás ver como el ancho de banda máximo es totalmente variable e inestable, yendo desde los 2.8 mbps hasta 25.5 mbps en una ocasión, pero en promedio jamás superó los 25 mbps. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 664,
      "end": 867,
      "text": "Esta herramienta manda paquetes de una cantidad de terminada (en la columna Test Size) a sus servidores y con lo que recibe de vuelta calcula el ancho de banda en la terminal (en la columna Score Mbps).\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 867,
      "end": 868,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 868,
      "end": 1030,
      "text": "Hoy dejé corriendo otra prueba que durará más de 12 horas, por lo que podrás ver como el servicio es completamente inestable y siempre por debajo de los 25 mbps.\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 1030,
      "end": 1031,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 1031,
      "end": 1134,
      "text": "Espero que esta información te resulte útil y sirva para detectar qué está ocurriendo con mi internet.\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 1134,
      "end": 1135,
      "text": "\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 1135,
      "end": 1197,
      "text": "Cualquier cosa que pueda hacer por ayudarlos, con todo gusto.\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 1197,
      "end": 1198,
      "text": "\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 1198,
      "end": 1215,
      "text": "Saludos cordiales"
    }
  ],
  "passA": {
    "requestSha256": "de1adfe2eadddd14e1b8aa90fd460039f647b11ef92f6f790ef622bc181f494f",
    "capturedAt": "2026-09-20T23:44:29.311Z",
    "elapsedMs": 161.4886669999978,
    "successfulAttemptElapsedMs": 159.9143750000003,
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
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.33
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.02
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
            "educational_or_quoted": 0,
            "informational": 0.73,
            "active_request": 0.27,
            "mixed_or_unclear": 0
          },
          "confidence": 0.64
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.96,
            "sender_supplied": 0,
            "independently_established": 0.04,
            "mixed_or_unknown": 0
          },
          "confidence": 0.95
        }
      },
      "usage": {
        "input_tokens": 3750,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "b377c178031ae0df7ff3594807e2a38cecb0a6f07410ea6bc3289e741e46bfe1",
    "capturedAt": "2026-09-20T23:44:29.478Z",
    "elapsedMs": 164.4366250000021,
    "successfulAttemptElapsedMs": 162.65087499999936,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:8": 0,
            "body:4": 0,
            "NONE": 0.44,
            "body:7": 0,
            "body:11": 0,
            "body:15": 0,
            "body:14": 0.02,
            "body:3": 0.05,
            "body:0": 0,
            "body:10": 0,
            "body:6": 0,
            "body:9": 0,
            "body:12": 0.02,
            "body:5": 0,
            "body:2": 0.46,
            "body:16": 0,
            "subject:0": 0,
            "body:1": 0.01,
            "body:13": 0
          },
          "confidence": 0.42
        }
      },
      "usage": {
        "input_tokens": 1424,
        "output_tokens": 201
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 329.05720800000563,
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
    "seq": 583,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-119",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:29.150Z",
    "offsetMs": 1.0221670000028098
  },
  {
    "seq": 584,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-119",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:29.311Z",
    "offsetMs": 161.49058300000615,
    "elapsedMs": 159.9143750000003,
    "outcome": "success"
  },
  {
    "seq": 585,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-119",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:29.315Z",
    "offsetMs": 165.3660000000018
  },
  {
    "seq": 586,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-119",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:29.478Z",
    "offsetMs": 328.7334170000031,
    "elapsedMs": 162.65087499999936,
    "outcome": "success"
  },
  {
    "seq": 587,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-119",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:29.478Z",
    "offsetMs": 329.12287500000093,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d288ce4ade5a22a247adb9680227ecfb99eacdece4f3e571f834b24859897cce";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":584},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":586},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":587}} as const;
export const projectionSha256 = "d6741407c82e193bfa9a8339d80bcbaf932b10d7bb5a80c4f6c28320ee04f978";
