import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-286",
  "inputSha256": "500cdf11630c5cb72480b1273f930b8c8325fb706c9ab2e56b90c07e47759abb",
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
      "end": 48,
      "text": "Protocolo de actuación con perspectiva de género"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 67,
      "text": "Compartimos con la comunidad del MyOwn en archivo anexo de PDF el \n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 67,
      "end": 141,
      "text": "*Protocolo de actuación con perspectiva de género en sede administrativa \n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 141,
      "end": 202,
      "text": "en la investigación y substanciación de quejas y denuncias*.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 202,
      "end": 203,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 203,
      "end": 267,
      "text": "Reiteramos la invitación a consultar este documento importante.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 267,
      "end": 268,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 268,
      "end": 269,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 269,
      "end": 270,
      "text": "\n"
    }
  ],
  "passA": {
    "requestSha256": "d68379a9755f1fe117f0fc322e2f48213312519d0da66447fa9287dfbdc63d43",
    "capturedAt": "2026-09-20T23:45:27.839Z",
    "elapsedMs": 222.9091250000056,
    "successfulAttemptElapsedMs": 220.90879099999438,
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
          "noul": 0.68
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
          "noul": 0.08
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.63,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0.37
          },
          "confidence": 0.51
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 1,
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "sender_supplied": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 3497,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "1eb8491b1589c5771d35706da25dcedd29453eec2c6559db4f8beecdb3dbcec2",
    "capturedAt": "2026-09-20T23:45:27.953Z",
    "elapsedMs": 112.49258299999929,
    "successfulAttemptElapsedMs": 110.61258300000918,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.01,
            "body:0": 0.54,
            "body:7": 0,
            "body:4": 0.16,
            "NONE": 0.18,
            "body:3": 0,
            "body:6": 0,
            "body:1": 0.08,
            "body:5": 0,
            "body:2": 0.03
          },
          "confidence": 0.48
        }
      },
      "usage": {
        "input_tokens": 791,
        "output_tokens": 113
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 337.55083400000876,
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
    "seq": 1400,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-286",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:27.617Z",
    "offsetMs": 1.4055000000080327
  },
  {
    "seq": 1401,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-286",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:27.839Z",
    "offsetMs": 222.91054200001236,
    "elapsedMs": 220.90879099999438,
    "outcome": "success"
  },
  {
    "seq": 1402,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-286",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:27.842Z",
    "offsetMs": 226.04354199999943
  },
  {
    "seq": 1403,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-286",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:27.953Z",
    "offsetMs": 337.23554200000945,
    "elapsedMs": 110.61258300000918,
    "outcome": "success"
  },
  {
    "seq": 1404,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-286",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:27.953Z",
    "offsetMs": 337.6338340000075,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "fcda7073797817cc3400b11d0454d900ebc8d57255381fea0a3df8e2230ef034";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1401},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1403},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1404}} as const;
export const projectionSha256 = "0393056ac1464ec45e2ad60deac576743904b6b6a98588dbcae86b92daf6b8b1";
