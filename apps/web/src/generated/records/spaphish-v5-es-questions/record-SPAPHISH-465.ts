import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-465",
  "inputSha256": "a4bf8148a3e7f0016040b45acb7daa3f7ef3471b8017c16555b4e9b45b9cdbf9",
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
      "end": 12,
      "text": "otro ejemplo"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 131,
      "text": "De: Alitar Cornelia Enviado: lunes, 18 de septiembre de 2023, 02:54:37 GMT-6 Asunto: Saludos querida Mi nombre es Alitar Cornelia. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 131,
      "end": 187,
      "text": "Tengo algo muy importante que quiero compartir contigo. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 187,
      "end": 220,
      "text": "Por favor responde que no es spam"
    }
  ],
  "passA": {
    "requestSha256": "df6dda342dd8f34861127e709ee86d7455fd24173e85775f038f628391a4ab81",
    "capturedAt": "2026-09-22T03:57:26.412Z",
    "elapsedMs": 636.795317000011,
    "successfulAttemptElapsedMs": 634.8996040000347,
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
          "noul": 0.03
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.08
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.07
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.12
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.49
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0.01,
            "mixed_or_unclear": 0,
            "informational": 0,
            "active_request": 0.99
          },
          "confidence": 0.98
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.06,
            "no_sensitive_action": 0.9400000000000001,
            "mixed_or_unknown": 0
          },
          "confidence": 0.91
        }
      },
      "usage": {
        "input_tokens": 4942,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "cba4042ee01f21afbb5d2cf6fd30c65fd7d7c96667285a0c589a6b0866cc6737",
    "capturedAt": "2026-09-22T03:57:26.919Z",
    "elapsedMs": 505.3835839999374,
    "successfulAttemptElapsedMs": 503.7581670000218,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_analyzer_instruction": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 0.85,
            "subject:0": 0,
            "body:1": 0,
            "body:0": 0,
            "NONE": 0.15
          },
          "confidence": 0.8
        }
      },
      "usage": {
        "input_tokens": 823,
        "output_tokens": 68
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1143.6494389999425,
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
        "status": "selected",
        "segmentId": "body:2"
      }
    },
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 2283,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-465",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:25.776Z",
    "offsetMs": 1.558039000025019
  },
  {
    "seq": 2284,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-465",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:26.412Z",
    "offsetMs": 636.79571700003,
    "elapsedMs": 634.8996040000347,
    "outcome": "success"
  },
  {
    "seq": 2285,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-465",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:26.414Z",
    "offsetMs": 639.3057079999708
  },
  {
    "seq": 2286,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-465",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:26.918Z",
    "offsetMs": 1143.4929959999863,
    "elapsedMs": 503.7581670000218,
    "outcome": "success"
  },
  {
    "seq": 2287,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-465",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:26.919Z",
    "offsetMs": 1143.6859890000196,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "a1a67a9dc193bf667ddabde9884a47d3d0796d1fc60653bb8db3253f7996ecb6";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2284},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2286},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2287}} as const;
export const projectionSha256 = "24a0d10bf66939bdfa4323d043b7c7daa089fdeb8b8dead7dfa5350bb7286f15";
