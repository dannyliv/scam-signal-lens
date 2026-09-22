import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-119",
  "inputSha256": "c53818bb24b2af4ef7d457d6e7552b9ff0fb8a607662f388ca80c3121443588c",
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
    "requestSha256": "d05611b8dece26c33efb50a3980f4f179c68873b3b6ee8cc9b67c0fbc301c7ef",
    "capturedAt": "2026-09-22T03:50:34.919Z",
    "elapsedMs": 654.7054010000138,
    "successfulAttemptElapsedMs": 654.0585110000102,
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
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.29
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
          "noul": 0.07
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 0.66,
            "mixed_or_unclear": 0,
            "active_request": 0.34
          },
          "confidence": 0.55
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0,
            "mixed_or_unknown": 0,
            "independently_established": 0.02,
            "no_sensitive_action": 0.98
          },
          "confidence": 0.97
        }
      },
      "usage": {
        "input_tokens": 5200,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "9816bfe76a41dd516176d9cf8f095f9f2e68e3fcb3cf4384d907625ffc4d6a76",
    "capturedAt": "2026-09-22T03:50:35.502Z",
    "elapsedMs": 581.4957900000154,
    "successfulAttemptElapsedMs": 580.3087620000006,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.28,
            "body:10": 0,
            "subject:0": 0,
            "body:0": 0.01,
            "body:13": 0,
            "body:16": 0,
            "body:4": 0.01,
            "body:6": 0,
            "body:9": 0,
            "body:11": 0,
            "NONE": 0.53,
            "body:1": 0.01,
            "body:3": 0.06,
            "body:5": 0,
            "body:7": 0,
            "body:12": 0.03,
            "body:8": 0,
            "body:14": 0.06,
            "body:15": 0
          },
          "confidence": 0.49
        }
      },
      "usage": {
        "input_tokens": 1524,
        "output_tokens": 199
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1238.0083609999856,
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
    "seq": 577,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-119",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:34.264Z",
    "offsetMs": 0.44118900000466965
  },
  {
    "seq": 578,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-119",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:34.919Z",
    "offsetMs": 654.7050469999958,
    "elapsedMs": 654.0585110000102,
    "outcome": "success"
  },
  {
    "seq": 579,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-119",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:34.921Z",
    "offsetMs": 656.9876510000031
  },
  {
    "seq": 580,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-119",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:35.502Z",
    "offsetMs": 1237.6926329999988,
    "elapsedMs": 580.3087620000006,
    "outcome": "success"
  },
  {
    "seq": 581,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-119",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:35.502Z",
    "offsetMs": 1238.0573459999869,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "e345e3108b007a4b71de9f51b07bcb282ae38d1eb112336b8f05916e44daca58";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":578},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":580},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":581}} as const;
export const projectionSha256 = "058b56d15c324fcb96253fcc3093021e7e50f95bd5cc07a73e0bf109830aa015";
