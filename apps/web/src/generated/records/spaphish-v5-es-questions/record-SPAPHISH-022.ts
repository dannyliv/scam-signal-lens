import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-022",
  "inputSha256": "b330756fa0635afb46d0dd3a9162049a8eedeba54546c417ccaad2fae5562e8b",
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
      "end": 48,
      "text": "Todo lo que amas de Lancôme, en una sola caja 💖"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 24,
      "text": "Â¡Apresurate Pancracio! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 24,
      "end": 49,
      "text": "La Oferta Cierra en Horas"
    }
  ],
  "passA": {
    "requestSha256": "fa440e1e7f1547f112a97e29a20f911ade0c5f867a2cd3ad3378805522c77a0f",
    "capturedAt": "2026-09-22T03:48:36.667Z",
    "elapsedMs": 619.5849890000027,
    "successfulAttemptElapsedMs": 618.7544369999996,
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
          "noul": 0.06
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.5
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.95
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.15
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.11
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.07
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.03
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 0.97,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 0.03
          },
          "confidence": 0.95
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.02,
            "mixed_or_unknown": 0.02,
            "independently_established": 0,
            "no_sensitive_action": 0.96
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 4908,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "80e444f257bda533f248bff11b68782abc001f1bc43abe3f8f9fb6c48c702d11",
    "capturedAt": "2026-09-22T03:48:37.187Z",
    "elapsedMs": 519.392692999998,
    "successfulAttemptElapsedMs": 518.4819169999973,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:0": 0.02,
            "NONE": 0.74,
            "subject:0": 0.02,
            "body:1": 0.22
          },
          "confidence": 0.65
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:0": 0.14,
            "NONE": 0,
            "subject:0": 0,
            "body:1": 0.86
          },
          "confidence": 0.82
        }
      },
      "usage": {
        "input_tokens": 1145,
        "output_tokens": 111
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1140.6875529999998,
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
        "status": "none_selected",
        "segmentId": null
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "selected",
        "segmentId": "body:1"
      },
      "authority_claim": {
        "status": "not_requested",
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
    "seq": 104,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-022",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:36.047Z",
    "offsetMs": 0.4649260000005597
  },
  {
    "seq": 105,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-022",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:36.666Z",
    "offsetMs": 619.5861729999997,
    "elapsedMs": 618.7544369999996,
    "outcome": "success"
  },
  {
    "seq": 106,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-022",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:36.668Z",
    "offsetMs": 621.5017930000031
  },
  {
    "seq": 107,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-022",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:37.187Z",
    "offsetMs": 1140.4955670000018,
    "elapsedMs": 518.4819169999973,
    "outcome": "success"
  },
  {
    "seq": 108,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-022",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:48:37.187Z",
    "offsetMs": 1140.7277280000017,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "5cad53fadcb22aeeaaecc62e4ff1f88e4947334bb345608b993c867a1069d2d5";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":105},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":107},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":108}} as const;
export const projectionSha256 = "4e725d9d735167d24227bf8103fe062047460ea6e382973573823bf0a8aae4ed";
