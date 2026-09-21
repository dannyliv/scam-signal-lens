import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-389",
  "inputSha256": "bcf16702b9ebd1230fadb9202d1addeb2ae1371ca2125cc4e759046bfdcaf464",
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
      "end": 60,
      "text": "Seminario de Óptica miércoles 7 de octubre de 2025 12:00hrs."
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 48,
      "text": "La Coordinación de Fotónica Invita al seminario\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 48,
      "end": 49,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 49,
      "end": 172,
      "text": "“Capacidades de desarrollo de materiales nanoestructurados y dispositivos optoelectrónicos en la Coordinación de Fotónica”\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 172,
      "end": 173,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 173,
      "end": 177,
      "text": "Dr. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 177,
      "end": 193,
      "text": "Ernesto Ríos P. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 193,
      "end": 200,
      "text": "CIETEC\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 200,
      "end": 201,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 201,
      "end": 209,
      "text": "RESUMEN\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 209,
      "end": 210,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 210,
      "end": 526,
      "text": "En este seminario se presentarán las líneas de investigación de nuestro grupo de investigación en la Coordinación de Fotónica, así como capacidades de desarrollo de materiales nanoestructurados y películas delgadas con las que cuenta la coordinación en colaboración con el Laboratorio de Microsistemas en el CIETEC. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 526,
      "end": 626,
      "text": "De manera breve se discutirá como la nanotecnología ha evolucionado en el desarrollo de materiales. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 626,
      "end": 915,
      "text": "Y finalmente, se presentarán algunas técnicas de síntesis y modificación de materiales nanoestructurados tomando como ejemplo algunos desarrollos hechos por nuestro grupo, incluyendo la fabricación de dispositivos optoelectrónicos híbridos compuestos de tecnologías orgánica e inorgánica.\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 915,
      "end": 916,
      "text": "\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 916,
      "end": 1003,
      "text": "LINK: https://vc-cncti.meet.net/808012345 FECHA: 7 de octubre de 2025 HORA: 12:00 hrs.\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 1003,
      "end": 1004,
      "text": "\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 1004,
      "end": 1022,
      "text": "TODOS BIENVENIDOS\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 1022,
      "end": 1023,
      "text": "\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 1023,
      "end": 1161,
      "text": "OBLIGATORIO PARA TODOS LOS ESTUDIANTES DE FOTÓNICA, FAVOR DE PASAR LISTA EN EL CHAT DEL SEMINARIO Y REGISTRARSE CON SU NOMBRE Y APELLIDOS."
    }
  ],
  "passA": {
    "requestSha256": "57b36e05d907970e398e6494f47bccd2e99299cb1e0c3d1d52a8fff38e6a668b",
    "capturedAt": "2026-09-20T23:46:02.511Z",
    "elapsedMs": 166.2616660000058,
    "successfulAttemptElapsedMs": 163.56716599999345,
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
          "noul": 0.08
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
          "noul": 0.4
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.9
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
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0.02,
            "active_request": 0.98
          },
          "confidence": 0.97
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0.01,
            "sender_supplied": 0.53,
            "no_sensitive_action": 0.45,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.38
        }
      },
      "usage": {
        "input_tokens": 3780,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "cf6d6fdcbda5daf025aec7a5aedd5b6a299b4b3bd4c1f3a272463a00ad482c8e",
    "capturedAt": "2026-09-21T00:57:30.957Z",
    "elapsedMs": 174.20004100000006,
    "successfulAttemptElapsedMs": 172.25070799999958,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:18",
          "probabilities": {
            "body:13": 0,
            "body:7": 0,
            "subject:0": 0,
            "body:18": 0.93,
            "body:0": 0,
            "body:11": 0,
            "body:6": 0,
            "body:10": 0,
            "body:14": 0,
            "body:17": 0,
            "body:9": 0,
            "body:3": 0,
            "body:8": 0,
            "body:1": 0,
            "body:2": 0,
            "body:4": 0,
            "NONE": 0.06999999999999999,
            "body:16": 0,
            "body:5": 0,
            "body:15": 0,
            "body:12": 0
          },
          "confidence": 0.92
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:18",
          "probabilities": {
            "body:16": 0,
            "body:4": 0,
            "subject:0": 0,
            "body:18": 0.5,
            "body:6": 0.01,
            "body:11": 0.01,
            "body:0": 0.44,
            "body:10": 0.01,
            "body:14": 0,
            "body:17": 0,
            "body:9": 0.02,
            "body:3": 0,
            "body:8": 0,
            "body:2": 0,
            "body:1": 0,
            "body:7": 0,
            "NONE": 0.01,
            "body:13": 0,
            "body:15": 0,
            "body:5": 0,
            "body:12": 0
          },
          "confidence": 0.46
        }
      },
      "usage": {
        "input_tokens": 2383,
        "output_tokens": 441
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 546.8072500000162,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "request_route_low_confidence"
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
        "status": "selected",
        "segmentId": "body:18"
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
    "seq": 1907,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-389",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:02.347Z",
    "offsetMs": 2.0323330000101123
  },
  {
    "seq": 1908,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-389",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:02.511Z",
    "offsetMs": 166.2646250000107,
    "elapsedMs": 163.56716599999345,
    "outcome": "success"
  },
  {
    "seq": 1909,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-389",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:02.515Z",
    "offsetMs": 170.49433300000965
  },
  {
    "seq": 1910,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-389",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:02.716Z",
    "offsetMs": 370.8029170000227,
    "elapsedMs": 199.57212500000605,
    "outcome": "success"
  },
  {
    "seq": 1911,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-389",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:02.716Z",
    "offsetMs": 371.0069170000206,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2762,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-389",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:30.784Z",
    "offsetMs": 2.4410419999985606
  },
  {
    "seq": 2763,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-389",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:30.956Z",
    "offsetMs": 175.12645799999882,
    "elapsedMs": 172.25070799999958,
    "outcome": "success"
  },
  {
    "seq": 2764,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-389",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:30.957Z",
    "offsetMs": 175.75070799999958,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "cd77e486fbfd567b57d1cba86024f5b41c5163a277dd05f62d1159205074db8f";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1908},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2763},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2764}} as const;
export const projectionSha256 = "f32bc0625cfbf1940ae5e1ece927800b11e29e01daa319122d2bc223d84de929";
