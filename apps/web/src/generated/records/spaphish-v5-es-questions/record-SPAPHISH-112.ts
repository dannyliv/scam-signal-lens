import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-112",
  "inputSha256": "897cf8aa3e3ae02291aa02ef39f27e000cca0551dcc7fb555650df406c1c68f8",
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
      "end": 50,
      "text": "Atención: Tiene un paquete que no ha sido recibido"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 38,
      "text": "Se ha producido un error en la entrega"
    }
  ],
  "passA": {
    "requestSha256": "921fae35e749bed79ccd972ef14ef849e0213a58d513cf52a17ac0c4785994ce",
    "capturedAt": "2026-09-22T03:50:26.842Z",
    "elapsedMs": 619.841865000024,
    "successfulAttemptElapsedMs": 619.08524700001,
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
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.14
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.18
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.05
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "active_request": 0.02,
            "informational": 0.97,
            "mixed_or_unclear": 0.01,
            "educational_or_quoted": 0
          },
          "confidence": 0.96
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "independently_established": 0,
            "no_sensitive_action": 0.99,
            "sender_supplied": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 4894,
        "output_tokens": 350
      }
    }
  },
  "passB": null,
  "evidencePassStatus": "not_needed",
  "processingElapsedMs": 620.9793700000155,
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
    "seq": 543,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-112",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:50:26.222Z",
    "offsetMs": 0.5322840000153519
  },
  {
    "seq": 544,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-112",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:50:26.841Z",
    "offsetMs": 619.8416760000109,
    "elapsedMs": 619.08524700001,
    "outcome": "success"
  },
  {
    "seq": 545,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-112",
    "pass": "B",
    "attempt": null,
    "kind": "pass_skipped",
    "at": "2026-09-22T03:50:26.842Z",
    "offsetMs": 620.9318150000181,
    "reasonCode": "schema_error"
  },
  {
    "seq": 546,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-112",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:50:26.842Z",
    "offsetMs": 620.9988650000014,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0b318e52e3df1e4c8ad627e86db409fdb42198c9698ec78ed1e9d9875042d911";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":544},"passB":null,"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":546}} as const;
export const projectionSha256 = "f581bebd6ef2c90045b6264850eb252591663e131f8c4b672e2a7988ea584215";
