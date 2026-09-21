import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-032",
  "inputSha256": "6f373d67ccb0877acca3c989dbeff87ad00c40020eda60d982a2508228d3bd02",
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
      "end": 46,
      "text": "Importante: Cambios en el código de vestimenta"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 93,
      "text": "Cordial saludo a todos: El virus del coronavirus COVID-19 continúa afectando vidas a diario. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 93,
      "end": 264,
      "text": "Como muchos de ustedes saben, Instituto Aurora Central Campus Villa Aurora alienta a aquellos de ustedes que pueden trabajar desde casa de manera efectiva a que lo hagan. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 264,
      "end": 392,
      "text": "Aún así, el personal que se considera fundamental para las operaciones deberá trabajar presencialmente en las próximas semanas. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 392,
      "end": 677,
      "text": "Debido a las nuevas normas de seguridad presentadas por la Organización Mundial de la Salud, los empleados de Instituto Aurora Central Campus Villa Aurora ahora deben seguir una nueva política estricta que se puede revisar en: https://instituto-aurora.edu/empleados/codigodevestimenta\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 677,
      "end": 756,
      "text": " Si tiene alguna duda sobre esta nueva política, comuníquese con sus gerentes. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 756,
      "end": 809,
      "text": "Gracias, Instituto Aurora Central Campus Villa Aurora"
    }
  ],
  "passA": {
    "requestSha256": "2c5c41ea287de1e2dd6858d3338e5ac8ef5fd7e7152e3f4d6d30715b5162cfb2",
    "capturedAt": "2026-09-20T23:44:01.776Z",
    "elapsedMs": 210.1607499999991,
    "successfulAttemptElapsedMs": 209.3279160000002,
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
          "noul": 0.21
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.07
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
          "noul": 0.38
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
            "informational": 0.34,
            "educational_or_quoted": 0,
            "active_request": 0.66
          },
          "confidence": 0.55
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "sender_supplied": 0.06,
            "independently_established": 0,
            "no_sensitive_action": 0.94
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 3601,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "dcbdd7cd5465a93f327f2503c0f258fbb8d2ca86d6451ff82b26d7420edcfc5c",
    "capturedAt": "2026-09-20T23:44:01.972Z",
    "elapsedMs": 194.19387499999903,
    "successfulAttemptElapsedMs": 192.43149999999878,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.12,
            "body:5": 0,
            "body:0": 0,
            "body:4": 0.01,
            "NONE": 0.48,
            "subject:0": 0.01,
            "body:3": 0.38,
            "body:1": 0
          },
          "confidence": 0.4
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:2": 0.02,
            "body:5": 0.21,
            "body:0": 0,
            "body:4": 0.05,
            "NONE": 0.01,
            "subject:0": 0,
            "body:3": 0.57,
            "body:1": 0.14
          },
          "confidence": 0.51
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:2": 0,
            "body:5": 0,
            "body:0": 0,
            "subject:0": 0,
            "NONE": 0.29,
            "body:4": 0.7,
            "body:3": 0.01,
            "body:1": 0
          },
          "confidence": 0.64
        }
      },
      "usage": {
        "input_tokens": 1993,
        "output_tokens": 280
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 407.0342499999988,
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
        "status": "low_confidence",
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
    "seq": 154,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-032",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:01.566Z",
    "offsetMs": 0.47362499999871943
  },
  {
    "seq": 155,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-032",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:01.775Z",
    "offsetMs": 210.15949999999975,
    "elapsedMs": 209.3279160000002,
    "outcome": "success"
  },
  {
    "seq": 156,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-032",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:01.779Z",
    "offsetMs": 213.54416700000002
  },
  {
    "seq": 157,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-032",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:01.972Z",
    "offsetMs": 406.75445899999977,
    "elapsedMs": 192.43149999999878,
    "outcome": "success"
  },
  {
    "seq": 158,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-032",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:01.972Z",
    "offsetMs": 407.09712500000023,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "7eed5f6c1d11c6d6b8f262af954b77d02265a6a1ecc5f57bc44254552fd6aee1";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":155},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":157},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":158}} as const;
export const projectionSha256 = "a1d9cdfe84ed69827f5eb6a9185eaa5fa5a30a7cd950612ef0f5ed8493c04cba";
