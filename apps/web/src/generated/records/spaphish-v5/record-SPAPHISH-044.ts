import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-044",
  "inputSha256": "71480f99f4a6437baac443e6ab3c868ca0370d48b61e7f796f004f4727bb6095",
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
      "end": 53,
      "text": "Convocatoria de la Universidad Autónoma de Tamaulipas"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 26,
      "text": "Estimados Investigadores,\n"
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
      "end": 234,
      "text": "Compartimos con ustedes la convocatoria de la Universidad Regional del Norte, para ocupar plazas disponibles de profesores de Tiempo Completo en la Facultad de Ciencias Agropecuarias y Desarrollo Rural “Dr. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 234,
      "end": 258,
      "text": "Roberto Trejo Sánchez”. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 258,
      "end": 331,
      "text": "En documento anexo encontrará la información correspondiente a la misma.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 331,
      "end": 332,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 332,
      "end": 442,
      "text": "Esperando que la información sea de su interés, les enviamos un cordial saludo y les agradecemos la difusión.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 442,
      "end": 443,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 443,
      "end": 566,
      "text": "NOTA: No se trata de un Nombramiento Especial, la información se comparte a petición de la Universidad Regional del Norte.\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 566,
      "end": 567,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 567,
      "end": 623,
      "text": "Atentamente, Dirección de Proyectos Especiales del CNBE\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 623,
      "end": 624,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 624,
      "end": 635,
      "text": "[Firma.jpg]"
    }
  ],
  "passA": {
    "requestSha256": "da9b629cd8f18a9c52c5f4dd5f2c029a189bb4112494cc836589a52d873f71c0",
    "capturedAt": "2026-09-20T23:44:05.192Z",
    "elapsedMs": 154.47891700000037,
    "successfulAttemptElapsedMs": 153.60229199999958,
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
          "noul": 0.9
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.05
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.07
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.27,
            "active_request": 0.73,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.64
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 1,
            "sender_supplied": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 3580,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "964de33568da8ef66c447393e2c124a730764f8c372c1d74e31141ec7cfcad8a",
    "capturedAt": "2026-09-20T23:44:05.370Z",
    "elapsedMs": 175.88158400000066,
    "successfulAttemptElapsedMs": 174.40554200000042,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:10",
          "probabilities": {
            "body:2": 0.09,
            "body:3": 0,
            "body:12": 0,
            "NONE": 0.02,
            "body:11": 0,
            "body:0": 0,
            "body:6": 0.06,
            "body:9": 0,
            "body:10": 0.78,
            "body:1": 0,
            "body:5": 0,
            "body:7": 0,
            "subject:0": 0.01,
            "body:8": 0.04,
            "body:4": 0
          },
          "confidence": 0.76
        }
      },
      "usage": {
        "input_tokens": 1026,
        "output_tokens": 162
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 333.4586249999993,
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
        "segmentId": "body:10"
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
    "seq": 212,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-044",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:05.037Z",
    "offsetMs": 0.5138330000008864
  },
  {
    "seq": 213,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-044",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:05.191Z",
    "offsetMs": 154.47862499999974,
    "elapsedMs": 153.60229199999958,
    "outcome": "success"
  },
  {
    "seq": 214,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-044",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:05.195Z",
    "offsetMs": 158.11370800000077
  },
  {
    "seq": 215,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-044",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:05.370Z",
    "offsetMs": 333.21299999999974,
    "elapsedMs": 174.40554200000042,
    "outcome": "success"
  },
  {
    "seq": 216,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-044",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:05.370Z",
    "offsetMs": 333.5194169999995,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "084d324d264cbf826d9e5a2e331f6f396188db6be1819fbbdd9429269ced0fe8";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":213},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":215},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":216}} as const;
export const projectionSha256 = "e7efcc4c336af8f50240b0b4f895ecec94d0a9713d7eabc21f7b821ddfadf2fe";
