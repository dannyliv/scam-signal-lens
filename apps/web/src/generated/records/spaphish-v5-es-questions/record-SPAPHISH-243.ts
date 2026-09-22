import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-243",
  "inputSha256": "c75366e24293263b86d2c6bfbb3b6a156d49fe5e22195c8700cf7558f3f3941b",
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
      "end": 35,
      "text": "CONSTANCIAS IMPARTICIÓN DE CÁTEDRAS"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 192,
      "text": "Doc., te envío las constancias que me solicitaste, dos de ellas ya te las había enviado en el 2022, pero te las vuelvo a enviar, por si checas las fechas de elaboración de dichas constancias.\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 192,
      "end": 193,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 193,
      "end": 205,
      "text": "Saludos!!!!\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 205,
      "end": 206,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 206,
      "end": 225,
      "text": "Roberto Luna Pérez\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 225,
      "end": 226,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 226,
      "end": 271,
      "text": "Director de Estudios Avanzados y Vinculación\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 271,
      "end": 272,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 272,
      "end": 326,
      "text": "Instituto Tecnológico Federal, Campus Montaña Central\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 326,
      "end": 327,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 327,
      "end": 368,
      "text": "Teléfono oficina (55) 5555 1234, 56 ext. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 368,
      "end": 372,
      "text": "2025"
    }
  ],
  "passA": {
    "requestSha256": "816394c2a91b7d9eb1bb3ffe3d5c38aae12010ff2bc0d01859bdf86150bfa1ec",
    "capturedAt": "2026-09-22T03:53:00.277Z",
    "elapsedMs": 675.0762499999837,
    "successfulAttemptElapsedMs": 673.7053230000311,
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
          "noul": 0.94
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
          "noul": 0.23
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 0.75,
            "active_request": 0.25
          },
          "confidence": 0.66
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.02,
            "sender_supplied": 0,
            "no_sensitive_action": 0.98,
            "mixed_or_unknown": 0
          },
          "confidence": 0.97
        }
      },
      "usage": {
        "input_tokens": 5004,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "64a8dc2710b3eb280442a09762c97a09509c8f0d483c4c97bc5097b06273486b",
    "capturedAt": "2026-09-22T03:53:00.856Z",
    "elapsedMs": 577.4065089999931,
    "successfulAttemptElapsedMs": 575.994429000013,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:1": 0,
            "body:9": 0,
            "body:7": 0,
            "body:11": 0,
            "body:6": 0.89,
            "body:3": 0,
            "body:10": 0,
            "body:5": 0,
            "body:8": 0.02,
            "body:4": 0.01,
            "body:0": 0.02,
            "NONE": 0.06,
            "body:2": 0,
            "subject:0": 0
          },
          "confidence": 0.87
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0,
            "body:9": 0,
            "body:11": 0.01,
            "body:7": 0,
            "body:6": 0,
            "body:3": 0,
            "body:10": 0.06,
            "body:5": 0,
            "body:8": 0,
            "body:4": 0,
            "body:0": 0.21000000000000002,
            "NONE": 0.72,
            "body:2": 0,
            "subject:0": 0
          },
          "confidence": 0.69
        }
      },
      "usage": {
        "input_tokens": 1706,
        "output_tokens": 300
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1254.0718939999933,
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
        "status": "not_requested",
        "segmentId": null
      },
      "independent_verification_path": {
        "status": "none_selected",
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
    "seq": 1184,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-243",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:59.603Z",
    "offsetMs": 0.9847909999662079
  },
  {
    "seq": 1185,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-243",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:00.277Z",
    "offsetMs": 675.0764659999986,
    "elapsedMs": 673.7053230000311,
    "outcome": "success"
  },
  {
    "seq": 1186,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-243",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:00.279Z",
    "offsetMs": 677.2918109999737
  },
  {
    "seq": 1187,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-243",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:00.855Z",
    "offsetMs": 1253.8249899999937,
    "elapsedMs": 575.994429000013,
    "outcome": "success"
  },
  {
    "seq": 1188,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-243",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:53:00.856Z",
    "offsetMs": 1254.1150560000096,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "51e23981747ef3a66009056a1efd7ffe5c83cdb0f7fda919d18ffdf8783f85ff";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1185},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1187},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1188}} as const;
export const projectionSha256 = "0341f17e398feca42b46314af061e50ac6ed9782d8e4f342e7ce38ea6a0f3840";
