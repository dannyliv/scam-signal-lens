import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-072",
  "inputSha256": "b559a3a566b6f8eaec5946cb21b2bf014cfec7393ccdec1c7952835aab9bafb4",
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
      "end": 25,
      "text": "Jornada de acompañamiento"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 32,
      "text": "Estimado padre/madre de familia\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 32,
      "end": 33,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 33,
      "end": 63,
      "text": "Esperando se encuentren bien.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 63,
      "end": 64,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 64,
      "end": 138,
      "text": "Les recordamos que el día de mañana 20 de septiembre se llevará a cabo la\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 138,
      "end": 213,
      "text": "jornada de acompañamiento docente; por tal motivo se suspenden las clases,\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 213,
      "end": 277,
      "text": "retomando labores el jueves 21 de septiembre en horario normal.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 277,
      "end": 278,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 278,
      "end": 281,
      "text": "--\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 281,
      "end": 282,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 282,
      "end": 290,
      "text": "Saludos\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 290,
      "end": 291,
      "text": "\n"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 291,
      "end": 297,
      "text": "Psic. "
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 297,
      "end": 319,
      "text": "Laura Hernández Prado\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 319,
      "end": 320,
      "text": "\n"
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 320,
      "end": 369,
      "text": "Tutora Preparatoria Colegio Monte Azul de Serania"
    }
  ],
  "passA": {
    "requestSha256": "3d4964065cfa069f203bdda751065df106f4b178763388e64772a1d5fa5477c7",
    "capturedAt": "2026-09-22T03:49:38.967Z",
    "elapsedMs": 649.457665000009,
    "successfulAttemptElapsedMs": 648.6284889999952,
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
          "noul": 0.07
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.95
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
          "noul": 0.03
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0,
            "informational": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0,
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "no_sensitive_action": 1
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 4984,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "b0145fc1e6a1efb0b3d05144ec7c317a244eaa4dc636591fdf6c18ccc189992c",
    "capturedAt": "2026-09-22T03:49:39.493Z",
    "elapsedMs": 524.4492880000034,
    "successfulAttemptElapsedMs": 523.488956000001,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:15",
          "probabilities": {
            "subject:0": 0,
            "body:13": 0.01,
            "body:8": 0,
            "body:1": 0,
            "body:12": 0.02,
            "body:2": 0,
            "body:15": 0.94,
            "body:3": 0,
            "body:14": 0,
            "body:0": 0,
            "body:11": 0,
            "body:9": 0,
            "body:6": 0,
            "body:4": 0.01,
            "NONE": 0.01,
            "body:5": 0.01,
            "body:7": 0,
            "body:10": 0
          },
          "confidence": 0.93
        }
      },
      "usage": {
        "input_tokens": 1076,
        "output_tokens": 192
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1175.845684999993,
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
        "status": "not_requested",
        "segmentId": null
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:15"
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
    "seq": 351,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-072",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:38.318Z",
    "offsetMs": 0.45397099999536294
  },
  {
    "seq": 352,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-072",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:38.967Z",
    "offsetMs": 649.4587460000039,
    "elapsedMs": 648.6284889999952,
    "outcome": "success"
  },
  {
    "seq": 353,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-072",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:38.969Z",
    "offsetMs": 651.7586009999941
  },
  {
    "seq": 354,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-072",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:39.493Z",
    "offsetMs": 1175.634904999999,
    "elapsedMs": 523.488956000001,
    "outcome": "success"
  },
  {
    "seq": 355,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-072",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:39.494Z",
    "offsetMs": 1175.8955299999943,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6980ae86d20e01e96db0bac9e24a3e9f64651ef654e6c9f21a1fdea2f98b20c0";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":352},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":354},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":355}} as const;
export const projectionSha256 = "f151d07376e992fc64c7c326bdf0787d9865150ef413a37edaaa57eaef2c7910";
