import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-461",
  "inputSha256": "f2c5417e1de8948500046823d4019e627349d1e26f66c88ea41732d79dff8e99",
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
      "end": 5,
      "text": "HELLO"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 31,
      "text": "Marina Torres ¿Cómo estás hoy? "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 31,
      "end": 91,
      "text": "Espero que estés bien. mi nombre es señorita Marina Torres. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 91,
      "end": 230,
      "text": "Deberías contactarme nuevamente a través de mi dirección de correo electrónico escrita a continuación marina.torres9472@correo-ejemplo.com\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 230,
      "end": 351,
      "text": " soy soltera busco honesta y agradable Persona con quien puedo asociarme. no me importa su color, etnia, estatus o sexo. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 351,
      "end": 424,
      "text": "Tras su respuesta a En este correo te contaré más sobre mí y te enviaré. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 424,
      "end": 440,
      "text": "Más de mi foto. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 440,
      "end": 506,
      "text": "Te envío este hermoso correo. con un deseo de mucha felicidad. .. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 506,
      "end": 557,
      "text": "Contactame en marina.torres9472@correo-ejemplo.com\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 557,
      "end": 572,
      "text": " Marina Torresa"
    }
  ],
  "passA": {
    "requestSha256": "3f99a9a2bae3d60e518809c4b6646d0600d6f5235c43bfa5010b5f2c41b992e1",
    "capturedAt": "2026-09-22T03:57:22.329Z",
    "elapsedMs": 631.2669489999535,
    "successfulAttemptElapsedMs": 629.3427150000352,
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
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.08
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.13
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.03
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "active_request": 1,
            "informational": 0,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.45,
            "no_sensitive_action": 0.55,
            "mixed_or_unknown": 0,
            "independently_established": 0
          },
          "confidence": 0.4
        }
      },
      "usage": {
        "input_tokens": 5028,
        "output_tokens": 348
      }
    }
  },
  "passB": null,
  "evidencePassStatus": "not_needed",
  "processingElapsedMs": 633.0426250000019,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "request_route_low_confidence"
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
    "adviceTemplateIds": [
      "verify_independently"
    ]
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 2264,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-461",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:57:21.699Z",
    "offsetMs": 1.616924999980256
  },
  {
    "seq": 2265,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-461",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:57:22.328Z",
    "offsetMs": 631.2660900000483,
    "elapsedMs": 629.3427150000352,
    "outcome": "success"
  },
  {
    "seq": 2266,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-461",
    "pass": "B",
    "attempt": null,
    "kind": "pass_skipped",
    "at": "2026-09-22T03:57:22.330Z",
    "offsetMs": 632.961363999988,
    "reasonCode": "schema_error"
  },
  {
    "seq": 2267,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-461",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:57:22.330Z",
    "offsetMs": 633.1219409999903,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "0353d9300b16b94ae8d656ce55e73e0da6ecf6e3fab9599ec92f8a2d777702e2";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2265},"passB":null,"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":2267}} as const;
export const projectionSha256 = "04d6bab6193e3649f8b73822a143282439b5d601174f8db1e35a9ea83d1c8a6d";
