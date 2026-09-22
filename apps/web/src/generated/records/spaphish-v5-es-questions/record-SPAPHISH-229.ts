import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-229",
  "inputSha256": "1c7fae62597e96edb4c69e862fe2f1f873541dcd1c228db59db73a920726c3f4",
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
      "end": 34,
      "text": "TODAVÍA ESTOY ESPERANDO TU MENSAJE"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 53,
      "text": "Atentamente, Espero que este mensaje le llegue bien. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 53,
      "end": 107,
      "text": "Me llamo Omar Hassan y vivo en el Reino de Marruecos. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 107,
      "end": 204,
      "text": "Le escribo para preguntarle si recibió mi mensaje anterior, ya que aún no he recibido respuesta. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 204,
      "end": 326,
      "text": "A pesar de su apretada agenda, le agradecería que se tomara un tiempo para revisar el mensaje que le envié anteriormente. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 326,
      "end": 373,
      "text": "Gracias por su atención y espero su respuesta. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 373,
      "end": 397,
      "text": "Atentamente, Omar Hassan"
    }
  ],
  "passA": {
    "requestSha256": "0ade61a32729e501c122fb7f4b56f98dcd901681623febe57b1d63b80158ba3b",
    "capturedAt": "2026-09-22T03:52:44.140Z",
    "elapsedMs": 623.024122999981,
    "successfulAttemptElapsedMs": 621.9752210000297,
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
          "noul": 0.03
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
          "noul": 0.07
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0,
            "active_request": 1,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 1,
            "independently_established": 0,
            "mixed_or_unknown": 0,
            "sender_supplied": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 4981,
        "output_tokens": 348
      }
    }
  },
  "passB": null,
  "evidencePassStatus": "not_needed",
  "processingElapsedMs": 624.4847440000158,
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
    "seq": 1115,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-229",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:52:43.518Z",
    "offsetMs": 0.7412610000465065
  },
  {
    "seq": 1116,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-229",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:52:44.140Z",
    "offsetMs": 623.0244930000044,
    "elapsedMs": 621.9752210000297,
    "outcome": "success"
  },
  {
    "seq": 1117,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-229",
    "pass": "B",
    "attempt": null,
    "kind": "pass_skipped",
    "at": "2026-09-22T03:52:44.141Z",
    "offsetMs": 624.4274860000005,
    "reasonCode": "schema_error"
  },
  {
    "seq": 1118,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-229",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:52:44.142Z",
    "offsetMs": 624.5083500000183,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "1854613a7c2a729bcc05df612105531d56655b9bee8345832d4ca4cf2a36480b";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1116},"passB":null,"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1118}} as const;
export const projectionSha256 = "b33889c2cc602fc7d1e95020fac9f2f17c93f7565b770f88706bc274fab609f7";
