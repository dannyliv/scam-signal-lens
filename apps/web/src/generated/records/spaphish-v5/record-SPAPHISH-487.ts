import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-487",
  "inputSha256": "b18a6ade1c553807071bd04f93e36f416605986d7affed41eaf05e8b40f24fe7",
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
      "end": 16,
      "text": "Acción requerida"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 90,
      "text": "I personally believe Digital Copywriter will secure your financial future as a writer ... "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 90,
      "end": 135,
      "text": "But I don’t want you to take my word for it. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 135,
      "end": 306,
      "text": ">> Go here for a 30-day test drive ( https://click.convertkit-mail.com/d0ud04xv66t0h4kw3vnum/6qh6oo7whoup899r79ao/aHR0cHM6Ly9teS5jb3B5YmxvZ2dlci5jb20vMS1kb2xsYXItb2ZmZXIv\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 306,
      "end": 310,
      "text": " ). "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 310,
      "end": 419,
      "text": "For just one dollar, you’ll get full access to ALL of the training programs, masterclasses, and coaching ... "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 419,
      "end": 465,
      "text": "And see for yourself why it’s a game-changer. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 465,
      "end": 754,
      "text": "Keep going- Martín Delgado Founder - Copyblogger This email is sent from Copyblogger Media LLC, 982 Willow Park Ave, Suite 210, Ridgeview, Colorado 80411 If you would like to stop receiving emails from us you can Unsubscribe ( https://unsubscribe.convertkit-mail.com/d0ud04xv66t0h4kw3vnum\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 754,
      "end": 903,
      "text": " ) Powered by ConvertKit ( https://click.convertkit-mail.com/d0ud04xv66t0h4kw3vnum/08hwhgum6lled4cl/aHR0cHM6Ly9jb3B5YmxvZ2dlci5jb20vY29udmVydGtpdA==\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 903,
      "end": 906,
      "text": " )="
    }
  ],
  "passA": {
    "requestSha256": "6946e89eabcac049e4ee3afb3b04c7214e46455329eef6cbf9b1d8c0d747ae6b",
    "capturedAt": "2026-09-20T23:46:35.378Z",
    "elapsedMs": 102.42074999999022,
    "successfulAttemptElapsedMs": 101.59762499999488,
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
          "noul": 0.29
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.96
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.16
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.52
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.16
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.16
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.41
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
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.05,
            "sender_supplied": 0.95,
            "mixed_or_unknown": 0,
            "independently_established": 0
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 3761,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "c0f8aab487f8e3f36a90d38cb5d0314b576c731266653220544c91262311db11",
    "capturedAt": "2026-09-20T23:46:35.617Z",
    "elapsedMs": 237.15970899999957,
    "successfulAttemptElapsedMs": 235.5234159999818,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:8": 0,
            "body:4": 0.1,
            "body:6": 0,
            "body:5": 0,
            "subject:0": 0,
            "body:7": 0,
            "NONE": 0.66,
            "body:2": 0.24,
            "body:0": 0,
            "body:1": 0,
            "body:3": 0
          },
          "confidence": 0.62
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:8": 0,
            "body:4": 0.89,
            "body:6": 0,
            "body:5": 0,
            "subject:0": 0,
            "body:7": 0,
            "NONE": 0,
            "body:2": 0.11,
            "body:0": 0,
            "body:1": 0,
            "body:3": 0
          },
          "confidence": 0.87
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:5": 0,
            "body:4": 0,
            "body:6": 0.65,
            "body:8": 0,
            "subject:0": 0.02,
            "body:7": 0,
            "NONE": 0.31,
            "body:2": 0.01,
            "body:3": 0,
            "body:1": 0,
            "body:0": 0.01
          },
          "confidence": 0.6
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:5": 0,
            "body:4": 0.01,
            "body:6": 0,
            "body:8": 0,
            "subject:0": 0,
            "body:7": 0,
            "NONE": 0.08,
            "body:2": 0,
            "body:0": 0.91,
            "body:1": 0,
            "body:3": 0
          },
          "confidence": 0.89
        }
      },
      "usage": {
        "input_tokens": 3464,
        "output_tokens": 474
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 340.86941600000137,
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
        "status": "selected",
        "segmentId": "body:4"
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
        "status": "selected",
        "segmentId": "body:0"
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
    "seq": 2393,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-487",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:35.276Z",
    "offsetMs": 0.5885830000042915
  },
  {
    "seq": 2394,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-487",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:35.378Z",
    "offsetMs": 102.42083300001104,
    "elapsedMs": 101.59762499999488,
    "outcome": "success"
  },
  {
    "seq": 2395,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-487",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:35.381Z",
    "offsetMs": 104.72741600000882
  },
  {
    "seq": 2396,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-487",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:35.617Z",
    "offsetMs": 340.7492499999935,
    "elapsedMs": 235.5234159999818,
    "outcome": "success"
  },
  {
    "seq": 2397,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-487",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:35.617Z",
    "offsetMs": 340.8947080000071,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0c3098c3133e0b6cf2ea635a6b5583cedda1c25d2e220cc70644cbe38eb98ab9";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2394},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2396},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2397}} as const;
export const projectionSha256 = "6f95f2789a00796e73f21ed50577b532126e2b0bce22f4b26c7ea1b7ed1a5015";
