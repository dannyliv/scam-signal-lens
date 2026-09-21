import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-331",
  "inputSha256": "bdd64e99e7e22deafbad8793b60a1f4f5368e326a46995d447efef9dcb766a85",
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
      "end": 61,
      "text": "📢  Pablito , Su paquete está listo para la entrega ID:497 🚨"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 15,
      "text": "Servicio Pstal\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 15,
      "end": 48,
      "text": "ENTREGA DEL ¡PAQUETE SUSPENDIDO!\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 48,
      "end": 121,
      "text": "Estado: Detenido en el centro de distribución (cargo aduanero pendiente)\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 121,
      "end": 159,
      "text": "Puede aplicarse una tarifa de entrega\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 159,
      "end": 194,
      "text": "Tu código de rastreo: AR94752018ES\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 194,
      "end": 217,
      "text": "Programar entrega ahora"
    }
  ],
  "passA": {
    "requestSha256": "fb7952f4e9e48fa689c35c231673dbf04eae9147d7a6b493aada1a4a5ead0c20",
    "capturedAt": "2026-09-20T23:45:43.520Z",
    "elapsedMs": 162.03187500000058,
    "successfulAttemptElapsedMs": 159.9520419999899,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.2
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.5
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.05
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.74
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.81
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.3
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.47
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
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "mixed_or_unclear": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.37,
            "sender_supplied": 0.6,
            "mixed_or_unknown": 0.03
          },
          "confidence": 0.46
        }
      },
      "usage": {
        "input_tokens": 3513,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "dbe05c16a14ddb1fc3c7771df7e42b5acd37ab629db65f56701015347394cd2a",
    "capturedAt": "2026-09-21T00:57:28.644Z",
    "elapsedMs": 170.58308300000135,
    "successfulAttemptElapsedMs": 168.14579200000117,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:5": 0.11,
            "body:4": 0,
            "body:3": 0.56,
            "body:2": 0.03,
            "subject:0": 0,
            "body:0": 0,
            "NONE": 0.3,
            "body:1": 0
          },
          "confidence": 0.48
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:5": 0.91,
            "body:4": 0,
            "body:3": 0.04,
            "body:2": 0.01,
            "subject:0": 0,
            "body:0": 0,
            "body:1": 0.03,
            "NONE": 0.01
          },
          "confidence": 0.89
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:5": 0.04,
            "body:4": 0.01,
            "body:3": 0,
            "body:2": 0.05,
            "subject:0": 0.01,
            "body:0": 0.76,
            "body:1": 0.01,
            "NONE": 0.12
          },
          "confidence": 0.73
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:5": 0.21,
            "body:4": 0,
            "body:3": 0,
            "body:1": 0,
            "subject:0": 0,
            "body:0": 0,
            "NONE": 0.79,
            "body:2": 0
          },
          "confidence": 0.75
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "body:3",
          "probabilities": {
            "body:5": 0.03,
            "body:4": 0,
            "body:3": 0.72,
            "body:2": 0.06,
            "subject:0": 0,
            "body:0": 0,
            "body:1": 0,
            "NONE": 0.19
          },
          "confidence": 0.68
        }
      },
      "usage": {
        "input_tokens": 2456,
        "output_tokens": 465
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 470.08016700000735,
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
        "status": "low_confidence",
        "segmentId": null
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:5"
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:0"
      },
      "verification_bypass": {
        "status": "none_selected",
        "segmentId": null
      },
      "advance_fee_or_refund_trap": {
        "status": "selected",
        "segmentId": "body:3"
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
    "seq": 1619,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-331",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:43.359Z",
    "offsetMs": 1.5182500000082655
  },
  {
    "seq": 1620,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-331",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:43.519Z",
    "offsetMs": 162.03241700000945,
    "elapsedMs": 159.9520419999899,
    "outcome": "success"
  },
  {
    "seq": 1621,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-331",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:43.524Z",
    "offsetMs": 166.73374999999942
  },
  {
    "seq": 1622,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-331",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:43.655Z",
    "offsetMs": 297.8481250000041,
    "elapsedMs": 130.28116699999373,
    "outcome": "success"
  },
  {
    "seq": 1623,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-331",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:43.655Z",
    "offsetMs": 298.0210000000079,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2717,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-331",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:28.475Z",
    "offsetMs": 2.9633750000011787
  },
  {
    "seq": 2718,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-331",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:28.644Z",
    "offsetMs": 171.62170800000058,
    "elapsedMs": 168.14579200000117,
    "outcome": "success"
  },
  {
    "seq": 2719,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-331",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:28.644Z",
    "offsetMs": 171.99545800000124,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "51d6f40b4cefff5d03a0f3273c0392072b7dd0ac295e351266dcf22b48ad61c6";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1620},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2718},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2719}} as const;
export const projectionSha256 = "9876f75d9fc8080d3e9ac9a290cc4057130238c0d3299c4c0e06d0973c6ca8af";
