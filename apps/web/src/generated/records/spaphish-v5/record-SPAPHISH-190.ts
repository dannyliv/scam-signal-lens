import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-190",
  "inputSha256": "40774a20e8e6e53da71bcdc27fe295077bfad8451ac0966bdc83fb7d7f7756fc",
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
      "end": 12,
      "text": "NRFM Informa"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 130,
      "text": "CLICK BELOW to read this message in your browser: https://click.notificaciones-corp.com/t/98765432/0123456789/345678901/0/999999/?"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 130,
      "end": 327,
      "text": "b44ed14b=MDVlOWUwOWUtMTlkOS00MTFmLWJkYjYtNDVlNzMyY2MyNjhh&9bc9e11f=MTAwMDYx&bcd98c89=MjU0MjYwNDQzMzI&x=85a7868a If clicking doesn't work, copy the line above and paste it into your browser window.\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 327,
      "end": 328,
      "text": "\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 328,
      "end": 419,
      "text": "To remove your name from this list, send a blank email to leave-999999-98765432-0123456789."
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 419,
      "end": 564,
      "text": "XYZ321ABC@bounce.notificaciones-corp.com or click the link below https://click.notificaciones-corp.com/t/98765432/0123456789/345678901/0/999999/?"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 564,
      "end": 663,
      "text": "f566cc7b=MTc0OTEyMDczNC4yR1EyU0lXU01N&3e076d18=W2VtYWlsYWRkcl0&c73c8e04=bmlzc2FuLXBsYW4&x=32accb47\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 663,
      "end": 664,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 664,
      "end": 773,
      "text": "This email was sent to: aRamirez@hotmail.com This email was sent by: Auto Crédito Global, S. de R.L. de C.V. "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 773,
      "end": 777,
      "text": "Av. "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 777,
      "end": 824,
      "text": "Paseo de las Fuentes Número 508, piso 12, Col. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 824,
      "end": 888,
      "text": "Del Valle Norte, Alcaldía Benito Juárez , Ciudad de México C.P. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 888,
      "end": 894,
      "text": "03800,"
    }
  ],
  "passA": {
    "requestSha256": "bd2cba89379c00d2e92ee562c669eaafea6e8f1260335ca20c581372bdd4d302",
    "capturedAt": "2026-09-20T23:44:52.703Z",
    "elapsedMs": 190.682415999996,
    "successfulAttemptElapsedMs": 188.82029200000397,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.03
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.05
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.07
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.56
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.2
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.06
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.04
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0.01,
            "informational": 0.02,
            "educational_or_quoted": 0,
            "active_request": 0.97
          },
          "confidence": 0.96
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.73,
            "independently_established": 0,
            "sender_supplied": 0.27,
            "mixed_or_unknown": 0
          },
          "confidence": 0.63
        }
      },
      "usage": {
        "input_tokens": 3859,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "24928362f9bc50057bcadf9bddc27d4c6f29f36f8abcec5bb252964f1ca401bf",
    "capturedAt": "2026-09-21T00:57:21.874Z",
    "elapsedMs": 183.63508300000012,
    "successfulAttemptElapsedMs": 181.13091600000007,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:4": 0,
            "subject:0": 0.02,
            "body:1": 0,
            "body:3": 0.01,
            "body:0": 0.01,
            "body:9": 0.01,
            "body:2": 0,
            "body:8": 0.01,
            "body:6": 0,
            "body:10": 0.02,
            "NONE": 0.5700000000000001,
            "body:11": 0,
            "body:5": 0,
            "body:7": 0.35
          },
          "confidence": 0.53
        }
      },
      "usage": {
        "input_tokens": 1571,
        "output_tokens": 149
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 569.2747500000005,
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
    "seq": 927,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-190",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:52.514Z",
    "offsetMs": 1.2526250000009895
  },
  {
    "seq": 928,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-190",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:52.703Z",
    "offsetMs": 190.68412499999977,
    "elapsedMs": 188.82029200000397,
    "outcome": "success"
  },
  {
    "seq": 929,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-190",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:52.706Z",
    "offsetMs": 193.73824999999488
  },
  {
    "seq": 930,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-190",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:52.896Z",
    "offsetMs": 384.0947079999969,
    "elapsedMs": 189.7777500000011,
    "outcome": "success"
  },
  {
    "seq": 931,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-190",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:52.897Z",
    "offsetMs": 384.3104579999999,
    "outcome": "schema_error",
    "reasonCode": "schema_error"
  },
  {
    "seq": 2602,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-190",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-21T00:57:21.692Z",
    "offsetMs": 2.867667000000438
  },
  {
    "seq": 2603,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-190",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-21T00:57:21.874Z",
    "offsetMs": 184.59287500000028,
    "elapsedMs": 181.13091600000007,
    "outcome": "success"
  },
  {
    "seq": 2604,
    "captureSessionId": "fa387ef0-7ecf-4d07-be53-eef7a348eb02",
    "exampleId": "SPAPHISH-190",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-21T00:57:21.874Z",
    "offsetMs": 184.86775000000034,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1b309c2c7302d4059d5d8f45f54735268730687ca913fc7067fb5d3cd1b81e74";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":928},"passB":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2603},"complete":{"captureSessionId":"fa387ef0-7ecf-4d07-be53-eef7a348eb02","seq":2604}} as const;
export const projectionSha256 = "c2bf0ce79329832b9af4d08c1a88fe5b8e0e97ecd1c2b7c11c0cbc439d038afb";
