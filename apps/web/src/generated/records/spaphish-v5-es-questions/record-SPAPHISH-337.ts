import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-337",
  "inputSha256": "ff504985612834d457320a452425d8260709faa7abbb7e81a03579df16d5e468",
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
      "end": 60,
      "text": "Invitación ceremonia del XLVIII aniversario, 8 de noviembre."
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 57,
      "text": "Lunaria Alta, Territorio Aurora — 1 de noviembre de 2019\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 57,
      "end": 58,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 58,
      "end": 137,
      "text": "A toda la comunidad del Instituto Celeste de Investigación Astronómica (ICIA):\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 137,
      "end": 138,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 138,
      "end": 351,
      "text": "Con motivo de las celebraciones del XLVIII Aniversario del Instituto Celeste de Investigación Astronómica y del LXXVII Aniversario del Observatorio Estelar de Lunaria (OELU), así como del homenaje póstumo al Ing. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 351,
      "end": 360,
      "text": "Darío L. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 360,
      "end": 594,
      "text": "Arcaya Menéndez, me permito extenderles una atenta invitación a la ceremonia conmemorativa que se llevará a cabo el viernes 8 de noviembre, a partir de las 11:00 horas, en el Auditorio del Centro de Documentación Científica del ICIA.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 594,
      "end": 595,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 595,
      "end": 773,
      "text": "Asimismo, se invita a toda la comunidad a la comida tradicional que, como cada año, se ofrecerá en los jardines contiguos al Centro de Documentación a partir de las 13:30 horas.\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 773,
      "end": 774,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 774,
      "end": 787,
      "text": "Atentamente,\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 787,
      "end": 791,
      "text": "Dr. "
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 791,
      "end": 800,
      "text": "Elías V. "
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 800,
      "end": 811,
      "text": "Montemayor\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 811,
      "end": 837,
      "text": "Director General Interino\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 837,
      "end": 883,
      "text": "Instituto Celeste de Investigación Astronómica"
    }
  ],
  "passA": {
    "requestSha256": "a862d9b7b2be4a34568955fb58c9a05e34f7146d5724a412338204a92bcfd43d",
    "capturedAt": "2026-09-22T03:54:55.231Z",
    "elapsedMs": 620.7340040000272,
    "successfulAttemptElapsedMs": 619.5873930000234,
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
          "noul": 0.93
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.02
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.01
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "active_request": 0.54,
            "informational": 0.46
          },
          "confidence": 0.39
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 1,
            "sender_supplied": 0,
            "independently_established": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 5144,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "e363b556dd7917ea0b38d25ec8a31d80ab6d4da015cf1cfff0b637cb88da482a",
    "capturedAt": "2026-09-22T03:54:55.902Z",
    "elapsedMs": 668.9213410000084,
    "successfulAttemptElapsedMs": 667.6614790000021,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:14",
          "probabilities": {
            "body:6": 0.1,
            "body:3": 0,
            "body:11": 0.04,
            "body:7": 0,
            "subject:0": 0,
            "body:12": 0,
            "body:1": 0,
            "body:9": 0,
            "body:14": 0.81,
            "body:4": 0,
            "body:13": 0,
            "body:0": 0,
            "body:10": 0,
            "body:5": 0,
            "body:2": 0,
            "NONE": 0.02,
            "body:15": 0.02,
            "body:8": 0
          },
          "confidence": 0.78
        }
      },
      "usage": {
        "input_tokens": 1397,
        "output_tokens": 192
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1291.4045580000384,
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
        "status": "selected",
        "segmentId": "body:14"
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
    "seq": 1647,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-337",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:54.611Z",
    "offsetMs": 0.8456379999988712
  },
  {
    "seq": 1648,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-337",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:55.231Z",
    "offsetMs": 620.734431000019,
    "elapsedMs": 619.5873930000234,
    "outcome": "success"
  },
  {
    "seq": 1649,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-337",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:55.234Z",
    "offsetMs": 623.1146210000152
  },
  {
    "seq": 1650,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-337",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:55.902Z",
    "offsetMs": 1291.1100110000116,
    "elapsedMs": 667.6614790000021,
    "outcome": "success"
  },
  {
    "seq": 1651,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-337",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:55.902Z",
    "offsetMs": 1291.4531190000125,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1ab5401a099d4f45732297effa204b87ae5c9ff3d0c78ec5f8839aa25254f56c";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1648},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1650},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1651}} as const;
export const projectionSha256 = "d274e3af6ac4330716615bc0d6fe5379e75d165b5757e9c902e76fb80ef8d30e";
