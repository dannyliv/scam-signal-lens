import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-193",
  "inputSha256": "0b44884e11e40e2d967024929811e6dc05aaea5b1dc42df77dab164425ceae59",
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
      "end": 77,
      "text": "🚨 Alerta de 24 horas: última oportunidad para obtener protección Ultra Drive"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 49,
      "text": "Ricardo, Tus archivos podrian necesitar espacio! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 49,
      "end": 61,
      "text": "Actualizalo!"
    }
  ],
  "passA": {
    "requestSha256": "95129d6a81e2e0c364f18e00ed2cd9f0d77cdecaeee0b164d4aff390336b9866",
    "capturedAt": "2026-09-22T03:52:00.802Z",
    "elapsedMs": 617.8995189999987,
    "successfulAttemptElapsedMs": 617.0332480000216,
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
          "noul": 0.09
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.31
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.95
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.19
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.18
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.08
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
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
          "noul": 0.03
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
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.8,
            "sender_supplied": 0.1,
            "independently_established": 0,
            "mixed_or_unknown": 0.1
          },
          "confidence": 0.73
        }
      },
      "usage": {
        "input_tokens": 4907,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "ed1aedeab928712f4ddd31333daafd3ef5097cd164f6890276540d39fbec5bfd",
    "capturedAt": "2026-09-22T03:52:01.399Z",
    "elapsedMs": 595.1792160000186,
    "successfulAttemptElapsedMs": 594.0219249999791,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.05,
            "body:0": 0,
            "NONE": 0.9,
            "subject:0": 0.05
          },
          "confidence": 0.86
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "subject:0",
          "probabilities": {
            "body:1": 0,
            "body:0": 0,
            "NONE": 0,
            "subject:0": 1
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 1142,
        "output_tokens": 111
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1215.7771009999851,
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
        "segmentId": "subject:0"
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
    "seq": 938,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-193",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:00.184Z",
    "offsetMs": 0.6389879999915138
  },
  {
    "seq": 939,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-193",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:00.801Z",
    "offsetMs": 617.9002679999976,
    "elapsedMs": 617.0332480000216,
    "outcome": "success"
  },
  {
    "seq": 940,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-193",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:00.805Z",
    "offsetMs": 621.1743669999996
  },
  {
    "seq": 941,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-193",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:01.399Z",
    "offsetMs": 1215.5665119999903,
    "elapsedMs": 594.0219249999791,
    "outcome": "success"
  },
  {
    "seq": 942,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-193",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:01.399Z",
    "offsetMs": 1215.8238079999865,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "b50a01c3fb315481bcdacf7c3ec27685039b4962549e3c08c831c6656a2bb887";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":939},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":941},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":942}} as const;
export const projectionSha256 = "d2dde8e163265ee7eecb46ce3a9b9c20e05a6330452863bf8b5e0357fb0705cd";
