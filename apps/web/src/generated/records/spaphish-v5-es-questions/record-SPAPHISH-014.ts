import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-014",
  "inputSha256": "d86aa65eb61e34df2e170b2eeab25945b2bad90519f73ac17748b5c7b34b3e6d",
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
      "text": "Sobre cambio de categoría"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 30,
      "text": "Hola Daniel, buenas tardes!!!\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 30,
      "end": 31,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 31,
      "end": 206,
      "text": "Daniel, según yo, creo que este año luego de concluir primavera ya contaría con los requerimientos para solicitar el cambio de categoría, pero no estoy seguro de que así sea. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 206,
      "end": 304,
      "text": "Tienes idea de con quién puedo aclarar esta duda, y dado el caso, cómo poder solicitar el cambio?\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 304,
      "end": 305,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 305,
      "end": 321,
      "text": "Muchas gracias!\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 321,
      "end": 322,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 322,
      "end": 331,
      "text": "Saludos! "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 331,
      "end": 339,
      "text": "Ricardo."
    }
  ],
  "passA": {
    "requestSha256": "13eef430c796310398656b0256a76cb3fd29379e3ca438ffca49f8519167d229",
    "capturedAt": "2026-09-22T03:48:27.306Z",
    "elapsedMs": 676.8260569999984,
    "successfulAttemptElapsedMs": 676.1624669999983,
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
          "noul": 0.2
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
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.09
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.07
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.01,
            "educational_or_quoted": 0,
            "active_request": 0.99,
            "mixed_or_unclear": 0
          },
          "confidence": 0.98
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "sender_supplied": 0,
            "no_sensitive_action": 1,
            "independently_established": 0
          },
          "confidence": 1
        }
      },
      "usage": {
        "input_tokens": 4963,
        "output_tokens": 348
      }
    }
  },
  "passB": null,
  "evidencePassStatus": "not_needed",
  "processingElapsedMs": 678.5679830000008,
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
    "seq": 65,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-014",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:48:26.629Z",
    "offsetMs": 0.4006149999986519
  },
  {
    "seq": 66,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-014",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:48:27.306Z",
    "offsetMs": 676.8266279999989,
    "elapsedMs": 676.1624669999983,
    "outcome": "success"
  },
  {
    "seq": 67,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-014",
    "pass": "B",
    "attempt": null,
    "kind": "pass_skipped",
    "at": "2026-09-22T03:48:27.307Z",
    "offsetMs": 678.4873879999977,
    "reasonCode": "schema_error"
  },
  {
    "seq": 68,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-014",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:48:27.308Z",
    "offsetMs": 678.5983579999993,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "27b07449f0ab31345f384168e75e2a3e1b3b21b3094f19812302ed84b5d5651e";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":66},"passB":null,"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":68}} as const;
export const projectionSha256 = "582443d22c9ebe09dc58d52bb34f2a3b097e8a36d75554396e6f807052b6a114";
