import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-235",
  "inputSha256": "fa56d0e1326bf1382c635c4f928c5b9ef42f2885705bf54e58fee58f415d7162",
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
      "end": 58,
      "text": "Hemos intentado ponernos en contacto con usted, ¡responda!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 46,
      "text": "pablito Su paquete est�� listo para la entrega"
    }
  ],
  "passA": {
    "requestSha256": "3a1b4f15d4f2c67511987f642d1e81da73d8e1c2f388e2738b24e0607bf57634",
    "capturedAt": "2026-09-20T23:45:08.866Z",
    "elapsedMs": 207.1981250000099,
    "successfulAttemptElapsedMs": 205.28312500000175,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.04
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.05
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.06
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.6
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.3
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.2
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.09
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
            "active_request": 0.96,
            "educational_or_quoted": 0,
            "informational": 0.03,
            "mixed_or_unclear": 0.01
          },
          "confidence": 0.96
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.06,
            "no_sensitive_action": 0.93,
            "mixed_or_unknown": 0.01,
            "independently_established": 0
          },
          "confidence": 0.91
        }
      },
      "usage": {
        "input_tokens": 3452,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "54344fe8497a7fdadcf5188acfb6e2486ef71b902224dfbc03883926f0e063ff",
    "capturedAt": "2026-09-20T23:45:09.031Z",
    "elapsedMs": 163.57908300000418,
    "successfulAttemptElapsedMs": 162.13587499999267,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "subject:0": 0.94,
            "body:0": 0,
            "NONE": 0.06
          },
          "confidence": 0.9
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.59,
            "body:0": 0.13,
            "subject:0": 0.28
          },
          "confidence": 0.39
        }
      },
      "usage": {
        "input_tokens": 891,
        "output_tokens": 95
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 372.8234999999986,
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
        "status": "selected",
        "segmentId": "subject:0"
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
    "seq": 1148,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-235",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:08.660Z",
    "offsetMs": 1.3323749999981374
  },
  {
    "seq": 1149,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-235",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:08.865Z",
    "offsetMs": 207.2013750000042,
    "elapsedMs": 205.28312500000175,
    "outcome": "success"
  },
  {
    "seq": 1150,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-235",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:08.868Z",
    "offsetMs": 209.84949999999662
  },
  {
    "seq": 1151,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-235",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:09.031Z",
    "offsetMs": 372.577833000003,
    "elapsedMs": 162.13587499999267,
    "outcome": "success"
  },
  {
    "seq": 1152,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-235",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:09.031Z",
    "offsetMs": 372.8790000000008,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0a50e3cd1fc424b19df76a4d73273feb14ec1bac6366f3dceee9f95f732e607d";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1149},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1151},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1152}} as const;
export const projectionSha256 = "99a5154678a33d9f429e2e2d040d0143b573b6438656e034ccf0e63936153b94";
