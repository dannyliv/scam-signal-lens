import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-203",
  "inputSha256": "d287722f879a673e9c6367bd07228d54b3815439f61308363153ac72796f55bd",
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
      "end": 17,
      "text": "Fwd: RECORDATORIO"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 212,
      "text": "---------- Forwarded message --------- De: Andrea Ramos <andrea.ramos@colegioestelar.mx> Date: jue, 15 de feb. de 2024 a la(s) 10:30 Subject: NOTIFICACIÓN To: RICARDO LUNA SIERRA <ricardo.luna@colegioestelar.mx>\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 212,
      "end": 213,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 213,
      "end": 232,
      "text": "Hola, ¿cómo están?\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 232,
      "end": 233,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 233,
      "end": 442,
      "text": "Espero se encuentren bien, le escribo para informarles que tienen una diferencia pendiente por pagar de este mes por $75, igual y ya estaban enterados y es bien poquito, pero bueno es importante que supieran. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 442,
      "end": 560,
      "text": "Si tuvieran duda les pido escribirle a Laura (laura.martinez@colegioestelar.mx) para que les explique detalladamente.\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 560,
      "end": 561,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 561,
      "end": 573,
      "text": "Bonito día! "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 573,
      "end": 581,
      "text": "Saludos\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 581,
      "end": 582,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 582,
      "end": 584,
      "text": "--"
    }
  ],
  "passA": {
    "requestSha256": "36fa2e238bfa68976bac6def917e4731d158a2f3fcb1be77111de208d42cee54",
    "capturedAt": "2026-09-22T03:52:12.877Z",
    "elapsedMs": 780.5770740000007,
    "successfulAttemptElapsedMs": 779.6612759999989,
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
          "noul": 0.04
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.65
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.1
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.8
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.3
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.59,
            "mixed_or_unclear": 0.01,
            "educational_or_quoted": 0,
            "informational": 0.4
          },
          "confidence": 0.45
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.44,
            "independently_established": 0.01,
            "sender_supplied": 0.54,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.38
        }
      },
      "usage": {
        "input_tokens": 5066,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "6599f036fff8399ebcd3f7ab661b96c436ccde937e425d7be023ef99544cb9d1",
    "capturedAt": "2026-09-22T03:52:13.471Z",
    "elapsedMs": 591.7333500000241,
    "successfulAttemptElapsedMs": 590.5366680000152,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:4",
          "probabilities": {
            "body:7": 0,
            "body:1": 0,
            "body:10": 0,
            "body:8": 0,
            "body:6": 0,
            "NONE": 0.16,
            "body:4": 0.83,
            "body:0": 0,
            "body:5": 0.01,
            "subject:0": 0,
            "body:3": 0,
            "body:9": 0,
            "body:2": 0
          },
          "confidence": 0.8
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:7": 0,
            "body:10": 0,
            "body:2": 0.01,
            "body:8": 0.01,
            "body:6": 0,
            "NONE": 0.04,
            "body:4": 0.2,
            "body:0": 0.11,
            "body:5": 0.63,
            "subject:0": 0,
            "body:3": 0,
            "body:9": 0,
            "body:1": 0
          },
          "confidence": 0.59
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "body:5",
          "probabilities": {
            "body:10": 0,
            "body:1": 0,
            "body:3": 0,
            "body:6": 0,
            "body:8": 0,
            "NONE": 0.42,
            "body:4": 0,
            "body:0": 0,
            "body:5": 0.58,
            "subject:0": 0,
            "body:7": 0,
            "body:9": 0,
            "body:2": 0
          },
          "confidence": 0.54
        }
      },
      "usage": {
        "input_tokens": 2558,
        "output_tokens": 418
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1374.5627099999983,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence",
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
    "seq": 987,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-203",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:12.097Z",
    "offsetMs": 0.6434960000042338
  },
  {
    "seq": 988,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-203",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:12.877Z",
    "offsetMs": 780.5766120000044,
    "elapsedMs": 779.6612759999989,
    "outcome": "success"
  },
  {
    "seq": 989,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-203",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:12.880Z",
    "offsetMs": 783.3185039999953
  },
  {
    "seq": 990,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-203",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:13.471Z",
    "offsetMs": 1374.207494000002,
    "elapsedMs": 590.5366680000152,
    "outcome": "success"
  },
  {
    "seq": 991,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-203",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:13.471Z",
    "offsetMs": 1374.6299200000067,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "82081b25c9365f5434c9cc8945cfa0823d4db5836a85eb9764a96041bf562e98";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":988},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":990},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":991}} as const;
export const projectionSha256 = "6b2025b2e791fb1ba613e66834ce11ecedcd5ab7e2946f48a67fbdf2e1f07555";
