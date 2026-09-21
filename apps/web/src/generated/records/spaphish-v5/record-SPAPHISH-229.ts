import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-229",
  "inputSha256": "1c7fae62597e96edb4c69e862fe2f1f873541dcd1c228db59db73a920726c3f4",
  "questionBundleSha256": "c38d45be636041965e7e231cffdf2831ec083c7780ea13a94086fdf24bf7bc08",
  "segmentationVersion": "intl-segmenter-sentence-v1",
  "questionScope": "source_messages",
  "policySha256": "3435135d6058476d4262ecbc936abf95af4993b455dfab35adc8b17f3fe6ad6a",
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
    "requestSha256": "d0d2ea93e144dfe90d866c5630cc999298ee2a462afd5c45af8c871c115d87c2",
    "capturedAt": "2026-09-20T23:45:07.169Z",
    "elapsedMs": 112.95574999999371,
    "successfulAttemptElapsedMs": 111.62350000000151,
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
          "noul": 0.06
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.06
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.06
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.01,
            "sender_supplied": 0,
            "no_sensitive_action": 0.99,
            "mixed_or_unknown": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 3531,
        "output_tokens": 348
      }
    }
  },
  "passB": null,
  "evidencePassStatus": "not_needed",
  "processingElapsedMs": 115.9349169999914,
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
    "seq": 1119,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-229",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:07.056Z",
    "offsetMs": 0.8358339999977034
  },
  {
    "seq": 1120,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-229",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:07.168Z",
    "offsetMs": 112.95420899998862,
    "elapsedMs": 111.62350000000151,
    "outcome": "success"
  },
  {
    "seq": 1121,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-229",
    "pass": "B",
    "attempt": null,
    "kind": "pass_skipped",
    "at": "2026-09-20T23:45:07.171Z",
    "offsetMs": 115.82249999999476,
    "reasonCode": "schema_error"
  },
  {
    "seq": 1122,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-229",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:07.171Z",
    "offsetMs": 115.9810839999991,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "959c91d262656887ba0fc64e4b153ba6453d2e98f546618248b4002e8836e6d3";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1120},"passB":null,"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1122}} as const;
export const projectionSha256 = "25082a2b37df6a76807ff3304e21e37bee5e4f90b75cb5f5af80430781148b96";
