import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-356",
  "inputSha256": "88a6d95834f54885f16268eb2d7c17791653d5821e07f6ddb30433050cd7923a",
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
      "end": 70,
      "text": "Encuesta anónima de Universidad Iberoamericana Campus Ciudad de México"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 58,
      "text": "Roberto García, ¡esperamos que esté teniendo un buen día! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 58,
      "end": 81,
      "text": "El Departamento de RR. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 81,
      "end": 205,
      "text": "HH. está recopilando quejas/solicitudes/sugerencias de los empleados de Universidad Iberoamericana Campus Ciudad de México. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 205,
      "end": 295,
      "text": "Si tiene alguna queja/solicitud/sugerencia, puede escribirlas en el siguiente formulario. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 295,
      "end": 342,
      "text": "No se preocupe, es completamente confidencial. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 342,
      "end": 427,
      "text": "Puede encontrar el siguiente formulario: https://www.google-security.net/docs/255652\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 427,
      "end": 483,
      "text": " Si el enlace no abre, copie y péguelo en su navegador. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 483,
      "end": 544,
      "text": "Se aceptan sugerencias hasta el final de la jornada laboral. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 544,
      "end": 553,
      "text": "Gracias. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 553,
      "end": 636,
      "text": "Departamento de Recursos Humanos Universidad Iberoamericana Campus Ciudad de México"
    }
  ],
  "passA": {
    "requestSha256": "7b4d034634c974d49e4338d292fe408a9db9ac90576147f455690273018f04a3",
    "capturedAt": "2026-09-20T23:45:52.278Z",
    "elapsedMs": 127.03416599999764,
    "successfulAttemptElapsedMs": 125.67687500000466,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.06
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.21
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
          "noul": 0.77
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.96
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.21
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
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "active_request": 1,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.21,
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "sender_supplied": 0.79
          },
          "confidence": 0.71
        }
      },
      "usage": {
        "input_tokens": 3596,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "aeb9ceaf71bf324fd503bb0c7e164af3197a64ec6ec1185e437d70a503a0bbb7",
    "capturedAt": "2026-09-20T23:45:52.564Z",
    "elapsedMs": 283.84504200000083,
    "successfulAttemptElapsedMs": 281.8029999999999,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:8": 0,
            "body:0": 0,
            "body:2": 0,
            "body:1": 0,
            "body:6": 0,
            "subject:0": 0,
            "NONE": 0.88,
            "body:7": 0,
            "body:5": 0.09,
            "body:3": 0.03,
            "body:4": 0,
            "body:9": 0
          },
          "confidence": 0.85
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:7",
          "probabilities": {
            "body:8": 0,
            "body:0": 0,
            "body:5": 0,
            "body:6": 0,
            "body:1": 0,
            "subject:0": 0,
            "NONE": 0.01,
            "body:7": 0.99,
            "body:2": 0,
            "body:3": 0,
            "body:4": 0,
            "body:9": 0
          },
          "confidence": 0.99
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:9",
          "probabilities": {
            "body:8": 0,
            "body:0": 0,
            "body:5": 0,
            "body:1": 0.32,
            "body:6": 0,
            "NONE": 0,
            "subject:0": 0.02,
            "body:7": 0,
            "body:2": 0.16,
            "body:3": 0.01,
            "body:4": 0,
            "body:9": 0.49
          },
          "confidence": 0.44
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:8": 0,
            "body:0": 0,
            "body:2": 0,
            "body:1": 0,
            "body:6": 0.02,
            "NONE": 0.95,
            "subject:0": 0,
            "body:7": 0,
            "body:5": 0.01,
            "body:3": 0,
            "body:4": 0.02,
            "body:9": 0
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 2718,
        "output_tokens": 512
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 413.1935419999936,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [],
    "evidence": {
      "credential_request": {
        "status": "not_requested",
        "segmentId": null
      },
      "sensitive_data_request": {
        "status": "none_selected",
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
        "segmentId": "body:7"
      },
      "authority_claim": {
        "status": "low_confidence",
        "segmentId": null
      },
      "verification_bypass": {
        "status": "none_selected",
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
    "seq": 1744,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-356",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:52.152Z",
    "offsetMs": 0.9569169999886071
  },
  {
    "seq": 1745,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-356",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:52.278Z",
    "offsetMs": 127.03274999999849,
    "elapsedMs": 125.67687500000466,
    "outcome": "success"
  },
  {
    "seq": 1746,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-356",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:52.281Z",
    "offsetMs": 130.27845800000068
  },
  {
    "seq": 1747,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-356",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:52.563Z",
    "offsetMs": 412.6973749999888,
    "elapsedMs": 281.8029999999999,
    "outcome": "success"
  },
  {
    "seq": 1748,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-356",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:52.564Z",
    "offsetMs": 413.2954170000012,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "8ef1527d5875adfe17377971819af4c8ea92888935b6f52e93ee12c76c66519f";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1745},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1747},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1748}} as const;
export const projectionSha256 = "3a34d579fb5696daf7c41eebe69a14329b771af9cb283cc25190c5d386623c5d";
