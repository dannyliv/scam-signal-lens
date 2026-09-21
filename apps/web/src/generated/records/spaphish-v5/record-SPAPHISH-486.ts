import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-486",
  "inputSha256": "0d3e68cab81e126ba496abfa8fc38891b6c90eeb6400a0a6f1f632ee970e3176",
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
      "text": "Missxtranger ,Checking the command -Amazon Mystery Box  🎁 . "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 61,
      "end": 72,
      "text": "ID:07213432"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 30,
      "text": "amazon ¡Eres nuestro ganador! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 30,
      "end": 184,
      "text": "Recompensa: Amazon Mystery Box Número de cliente: #902744118320 » Haga clic aquí para solicitar « Darse de baja El anunciante no gestiona su suscripción. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 184,
      "end": 312,
      "text": "Si prefieres no recibir más comunicaciones, darse de baja aqui O escribe a: 912 Westbrook Ln Ste 210 #1187, Clearview, WY, 82955"
    }
  ],
  "passA": {
    "requestSha256": "e0635bae0681749c8e015fabb150150b332ff4c0c73841ea4c6c805fd1fe7129",
    "capturedAt": "2026-09-20T23:46:35.152Z",
    "elapsedMs": 191.30025000000023,
    "successfulAttemptElapsedMs": 190.455667000002,
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
          "noul": 0.38
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.28
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.08
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.2
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.57
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.37
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.37
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.15
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.05
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.99,
            "informational": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0.01
          },
          "confidence": 0.98
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.17,
            "sender_supplied": 0.82,
            "mixed_or_unknown": 0.01,
            "independently_established": 0
          },
          "confidence": 0.76
        }
      },
      "usage": {
        "input_tokens": 3555,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "4f33ea9aaf7639950921e82aa2a4564d904ec1e200c9538ec7b9eb5661200604",
    "capturedAt": "2026-09-21T00:57:34.776Z",
    "elapsedMs": 146.8452499999985,
    "successfulAttemptElapsedMs": 144.64900000000125,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.31,
            "subject:0": 0,
            "body:0": 0,
            "body:2": 0.01,
            "subject:1": 0,
            "NONE": 0.68
          },
          "confidence": 0.61
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.28,
            "subject:0": 0,
            "body:0": 0.01,
            "body:2": 0.02,
            "NONE": 0.69,
            "subject:1": 0
          },
          "confidence": 0.63
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:1": 0.05,
            "subject:0": 0.02,
            "subject:1": 0,
            "body:2": 0.02,
            "body:0": 0.53,
            "NONE": 0.38
          },
          "confidence": 0.42
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.09,
            "subject:0": 0.01,
            "subject:1": 0,
            "body:2": 0.03,
            "body:0": 0,
            "NONE": 0.87
          },
          "confidence": 0.84
        },
        "evidence_advance_fee_or_refund_trap": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.17,
            "subject:0": 0,
            "subject:1": 0,
            "body:2": 0,
            "body:0": 0,
            "NONE": 0.83
          },
          "confidence": 0.78
        }
      },
      "usage": {
        "input_tokens": 2611,
        "output_tokens": 368
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 462.9401250000046,
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
        "status": "low_confidence",
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
        "status": "not_requested",
        "segmentId": null
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
        "status": "none_selected",
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
    "seq": 2388,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-486",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:34.961Z",
    "offsetMs": 0.5902920000080485
  },
  {
    "seq": 2389,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-486",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:35.152Z",
    "offsetMs": 191.30066700000316,
    "elapsedMs": 190.455667000002,
    "outcome": "success"
  },
  {
    "seq": 2390,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-486",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:35.153Z",
    "offsetMs": 192.54987499999697
  },
  {
    "seq": 2391,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-486",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:35.275Z",
    "offsetMs": 314.81641699999454,
    "elapsedMs": 122.06683399999747,
    "outcome": "success"
  },
  {
    "seq": 2392,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-486",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:35.275Z",
    "offsetMs": 314.8756670000148,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2827,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-486",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:34.630Z",
    "offsetMs": 2.6853329999976268
  },
  {
    "seq": 2828,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-486",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:34.776Z",
    "offsetMs": 147.8521249999976,
    "elapsedMs": 144.64900000000125,
    "outcome": "success"
  },
  {
    "seq": 2829,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-486",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:34.776Z",
    "offsetMs": 148.06695799999943,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "e51a2cef2b8c1cf4e88e5c711ba0f86a20c6bbc762e63b890446c29b4e8b9446";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2389},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2828},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2829}} as const;
export const projectionSha256 = "b9eebd0d68e2dcf417bec089591fc7184aa6aa4265204761c2d45b675e196594";
