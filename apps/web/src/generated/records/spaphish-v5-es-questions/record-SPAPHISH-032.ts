import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-032",
  "inputSha256": "6f373d67ccb0877acca3c989dbeff87ad00c40020eda60d982a2508228d3bd02",
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
    "requestSha256": "8d250db2c38cf4cd23aad0931727a07f1fc0f52212558c6a6a1750e781795568",
    "capturedAt": "2026-09-22T03:48:49.704Z",
    "elapsedMs": 624.4749099999972,
    "successfulAttemptElapsedMs": 623.7574699999968,
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
          "noul": 0.26
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.4
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
            "informational": 0.39,
            "mixed_or_unclear": 0,
            "active_request": 0.61
          },
          "confidence": 0.47
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.05,
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "no_sensitive_action": 0.95
          },
          "confidence": 0.92
        }
      },
      "usage": {
        "input_tokens": 5051,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "7db0f44f37a70f5a84dad184dc973d392435307fdef83fc8062671c446a3a1e2",
    "capturedAt": "2026-09-22T03:48:50.283Z",
    "elapsedMs": 576.3625790000006,
    "successfulAttemptElapsedMs": 575.4977319999962,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:3": 0.4,
            "body:1": 0,
            "body:2": 0.22,
            "subject:0": 0.02,
            "body:0": 0,
            "NONE": 0.36,
            "body:4": 0,
            "body:5": 0
          },
          "confidence": 0.3
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:3": 0.35,
            "body:1": 0.18,
            "body:2": 0.04,
            "subject:0": 0.01,
            "body:0": 0.01,
            "NONE": 0.02,
            "body:4": 0.06,
            "body:5": 0.33
          },
          "confidence": 0.26
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:3": 0.04,
            "body:1": 0,
            "body:2": 0.01,
            "NONE": 0.29,
            "body:0": 0,
            "body:5": 0,
            "body:4": 0.66,
            "subject:0": 0
          },
          "confidence": 0.6
        }
      },
      "usage": {
        "input_tokens": 2299,
        "output_tokens": 282
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1203.1436519999988,
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
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-032",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:49.080Z",
    "offsetMs": 0.476278000001912
  },
  {
    "seq": 155,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-032",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:49.704Z",
    "offsetMs": 624.4757390000013,
    "elapsedMs": 623.7574699999968,
    "outcome": "success"
  },
  {
    "seq": 156,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-032",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:49.706Z",
    "offsetMs": 626.900410000002
  },
  {
    "seq": 157,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-032",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:50.282Z",
    "offsetMs": 1202.8274230000025,
    "elapsedMs": 575.4977319999962,
    "outcome": "success"
  },
  {
    "seq": 158,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-032",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:48:50.283Z",
    "offsetMs": 1203.1913060000006,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "c94403e13f3b50c6b7bdd86dffe42ef42849c8126fb53125bf4b7547829f52f9";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":155},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":157},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":158}} as const;
export const projectionSha256 = "b970f432c3b516ed8da8c485c7fdc230ce9b0477506d6dd1b70b3781ce884717";
