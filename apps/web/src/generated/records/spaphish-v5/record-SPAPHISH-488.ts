import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-488",
  "inputSha256": "7cf8648230a0fbce2fae8fd9b941c245d27e21441353049459bc2573094c1866",
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
      "end": 50,
      "text": "Obten online tu Tarjeta con 30.000 MXN bonificados"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 91,
      "text": "Financiacion sin interes hasta 60 dias No visualiza correctamente este mensaje click aqui. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 91,
      "end": 259,
      "text": "Este correo es para carlos.garcia@mailsecure.net. - Obten online tu Tarjeta con 40.000 MXN bonificados Este correo es para carlos.garcia@mailsecure.net el Nov 17 2023. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 259,
      "end": 355,
      "text": "Tarjeta Amex Gold con 40.000 MXN bonificados - 99887766- - Para desuscribirse haga click aqui. -"
    }
  ],
  "passA": {
    "requestSha256": "ac9b3a9afca72bd1b4a1395235d6f321e44e5e59a2c28ac9eaf864ae3ceb665b",
    "capturedAt": "2026-09-20T23:46:35.750Z",
    "elapsedMs": 132.8884170000092,
    "successfulAttemptElapsedMs": 132.15004199999385,
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
          "noul": 0.3
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.21
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.11
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.33
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.15
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.11
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.19
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0.03,
            "informational": 0.02,
            "active_request": 0.95,
            "educational_or_quoted": 0
          },
          "confidence": 0.93
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.69,
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "sender_supplied": 0.3
          },
          "confidence": 0.58
        }
      },
      "usage": {
        "input_tokens": 3563,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "92bdea4c681a7513d766526aa5cbefff0a95fc33ca2a3a40d854a64c04012163",
    "capturedAt": "2026-09-20T23:46:35.901Z",
    "elapsedMs": 150.20933300000615,
    "successfulAttemptElapsedMs": 149.43087500002002,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.1,
            "subject:0": 0.01,
            "NONE": 0.86,
            "body:1": 0,
            "body:0": 0.03
          },
          "confidence": 0.82
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.03,
            "subject:0": 0.09,
            "NONE": 0.86,
            "body:1": 0.01,
            "body:0": 0.01
          },
          "confidence": 0.83
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.13,
            "subject:0": 0.01,
            "NONE": 0.85,
            "body:1": 0.01,
            "body:0": 0
          },
          "confidence": 0.82
        }
      },
      "usage": {
        "input_tokens": 1725,
        "output_tokens": 189
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 283.74179199998616,
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
        "status": "none_selected",
        "segmentId": null
      },
      "payment_request": {
        "status": "none_selected",
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
        "status": "none_selected",
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
    "seq": 2398,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-488",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:35.618Z",
    "offsetMs": 0.5538339999911841
  },
  {
    "seq": 2399,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-488",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:35.750Z",
    "offsetMs": 132.88958399998955,
    "elapsedMs": 132.15004199999385,
    "outcome": "success"
  },
  {
    "seq": 2400,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-488",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:35.751Z",
    "offsetMs": 134.02337499998976
  },
  {
    "seq": 2401,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-488",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:35.901Z",
    "offsetMs": 283.6757090000028,
    "elapsedMs": 149.43087500002002,
    "outcome": "success"
  },
  {
    "seq": 2402,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-488",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:35.901Z",
    "offsetMs": 283.76020900000003,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a0231892ac1b4a03726b41852ebe1b96b54059f1c6c2da7ad8dfc51855464dd7";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2399},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2401},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2402}} as const;
export const projectionSha256 = "ec1c7c9d50cb2f9e104d776febbcd107007e63ac7dd4b5f2143a3f8d3f792abf";
