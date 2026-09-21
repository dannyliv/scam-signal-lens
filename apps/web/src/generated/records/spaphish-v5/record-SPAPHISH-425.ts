import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-425",
  "inputSha256": "5908b69e0dd7b08d49115c7a41dc0f57ceecddc81a153f26ac3ecc919bfc3769",
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
      "end": 44,
      "text": "Instrucciones para restablecer su contraseña"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 16,
      "text": "POSGRADOS CITEC\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 16,
      "end": 74,
      "text": "Centro de Formación e Innovación en Tecnologías Digitales\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 74,
      "end": 75,
      "text": "\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 75,
      "end": 99,
      "text": "Reestablecer contraseña\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 99,
      "end": 100,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 100,
      "end": 128,
      "text": "Hola Marcos Ortega Salinas.\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 128,
      "end": 129,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 129,
      "end": 209,
      "text": "Se ha solicitado cambiar su contraseña; puede hacerlo usando el botón de abajo.\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 209,
      "end": 276,
      "text": "Si usted no solicitó este cambio, simplemente ignore este mensaje. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 276,
      "end": 355,
      "text": "Su contraseña no se modificará a menos que presione el botón y cree una nueva.\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 355,
      "end": 356,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 356,
      "end": 375,
      "text": "Cambiar contraseña\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 375,
      "end": 376,
      "text": "\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 376,
      "end": 386,
      "text": "Contacto:\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 386,
      "end": 390,
      "text": "Av. "
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 390,
      "end": 411,
      "text": "Monte Real 214, Col. "
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 411,
      "end": 422,
      "text": "Los Cedros\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 422,
      "end": 448,
      "text": "Tlalpan, Ciudad de México\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 448,
      "end": 463,
      "text": "(55) 4872 3600\n"
    },
    {
      "id": "body:19",
      "source": "body",
      "start": 463,
      "end": 488,
      "text": "posgrados@citecdigital.mx"
    }
  ],
  "passA": {
    "requestSha256": "8e51296a30436885d7158ca74454ca993866d0734f2da794d488675d10503f4f",
    "capturedAt": "2026-09-20T23:46:14.715Z",
    "elapsedMs": 126.28562500001863,
    "successfulAttemptElapsedMs": 123.87904199998593,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.12
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.06
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.92
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.1
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
          "noul": 0.11
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
            "informational": 0.01,
            "active_request": 0.99
          },
          "confidence": 0.98
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.02,
            "sender_supplied": 0.77,
            "no_sensitive_action": 0.2,
            "independently_established": 0.01
          },
          "confidence": 0.69
        }
      },
      "usage": {
        "input_tokens": 3572,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "79b85541037e281ce61388d7d8d1e3461c31cda675267664698e57a840a2cb91",
    "capturedAt": "2026-09-20T23:46:14.961Z",
    "elapsedMs": 243.7673749999958,
    "successfulAttemptElapsedMs": 241.41520799999125,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0,
            "body:13": 0,
            "body:3": 0.01,
            "body:16": 0,
            "body:17": 0,
            "body:10": 0,
            "body:11": 0.01,
            "body:8": 0,
            "body:4": 0,
            "NONE": 0.03,
            "body:9": 0,
            "body:7": 0.09999999999999999,
            "body:2": 0,
            "body:1": 0.33,
            "body:18": 0,
            "body:0": 0.5,
            "body:15": 0,
            "body:12": 0,
            "body:14": 0,
            "body:6": 0,
            "body:19": 0.02,
            "body:5": 0
          },
          "confidence": 0.46
        }
      },
      "usage": {
        "input_tokens": 1110,
        "output_tokens": 231
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 372.2292919999745,
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
    "seq": 2086,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-425",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:14.590Z",
    "offsetMs": 1.8433749999967404
  },
  {
    "seq": 2087,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-425",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:14.715Z",
    "offsetMs": 126.28633399997489,
    "elapsedMs": 123.87904199998593,
    "outcome": "success"
  },
  {
    "seq": 2088,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-425",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:14.718Z",
    "offsetMs": 129.93491699997685
  },
  {
    "seq": 2089,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-425",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:14.960Z",
    "offsetMs": 371.9784169999766,
    "elapsedMs": 241.41520799999125,
    "outcome": "success"
  },
  {
    "seq": 2090,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-425",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:14.961Z",
    "offsetMs": 372.29187499999534,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "90f40f1dcc06cbd9bfc0ecacb258b7da29a2121871bfdf3bd49dc01d568b074c";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2087},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2089},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2090}} as const;
export const projectionSha256 = "f5a13ba5767864b39e19c8810376fdee1c0f432520ba17d93744c607cd77e5ab";
