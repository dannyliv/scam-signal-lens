import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-487",
  "inputSha256": "b18a6ade1c553807071bd04f93e36f416605986d7affed41eaf05e8b40f24fe7",
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
    "requestSha256": "bc53837fa8e0d5e4d677984999273355fb1dcbe53ae372b627af1cb04e6f1fef",
    "capturedAt": "2026-09-22T03:57:53.389Z",
    "elapsedMs": 709.319748000009,
    "successfulAttemptElapsedMs": 707.6301380000077,
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
          "noul": 0.48
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.94
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.16
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.77
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.12
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.13
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.29
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 0,
            "active_request": 1,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.12,
            "sender_supplied": 0.87,
            "independently_established": 0
          },
          "confidence": 0.82
        }
      },
      "usage": {
        "input_tokens": 5211,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "abfc2faa6eaec3d49c7d11e9bd589d0eabf495e6f7e9f83599ba7d8feffb83cb",
    "capturedAt": "2026-09-22T03:57:53.929Z",
    "elapsedMs": 538.6034440000076,
    "successfulAttemptElapsedMs": 536.6466099999379,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:4": 0.11,
            "NONE": 0.61,
            "body:0": 0,
            "body:7": 0,
            "body:8": 0,
            "body:6": 0,
            "body:3": 0,
            "body:5": 0,
            "body:2": 0.28,
            "body:1": 0,
            "subject:0": 0
          },
          "confidence": 0.56
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:6": 0,
            "NONE": 0,
            "body:0": 0,
            "body:7": 0,
            "body:8": 0,
            "subject:0": 0,
            "body:5": 0,
            "body:4": 0.87,
            "body:2": 0.13,
            "body:3": 0,
            "body:1": 0
          },
          "confidence": 0.85
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:5": 0,
            "NONE": 0.09,
            "body:0": 0.01,
            "body:7": 0,
            "body:8": 0,
            "body:6": 0.88,
            "body:1": 0,
            "body:4": 0,
            "body:2": 0.01,
            "subject:0": 0.01,
            "body:3": 0
          },
          "confidence": 0.85
        },
        "evidence_unrealistic_reward": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:5": 0.01,
            "NONE": 0.11,
            "body:0": 0.86,
            "body:7": 0,
            "body:8": 0,
            "body:6": 0,
            "subject:0": 0,
            "body:4": 0.02,
            "body:2": 0,
            "body:1": 0,
            "body:3": 0
          },
          "confidence": 0.84
        }
      },
      "usage": {
        "input_tokens": 3897,
        "output_tokens": 474
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1249.971194999991,
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
        "status": "selected",
        "segmentId": "body:6"
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
    "seq": 2392,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-487",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:52.681Z",
    "offsetMs": 1.325937999994494
  },
  {
    "seq": 2393,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-487",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:53.389Z",
    "offsetMs": 709.3208089999389,
    "elapsedMs": 707.6301380000077,
    "outcome": "success"
  },
  {
    "seq": 2394,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-487",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:53.392Z",
    "offsetMs": 712.6472129999893
  },
  {
    "seq": 2395,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-487",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:53.929Z",
    "offsetMs": 1249.7065279999515,
    "elapsedMs": 536.6466099999379,
    "outcome": "success"
  },
  {
    "seq": 2396,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-487",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:53.929Z",
    "offsetMs": 1250.0230410000077,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "4225cdd7c4319a96a2b29241a226203c21f2cb1eeed42a20d5b276d7cf069921";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2393},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2395},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2396}} as const;
export const projectionSha256 = "59eca33ef7ffe733e1e3ca8099aaa7bab12c995c94cef4d213339f6cc0904796";
