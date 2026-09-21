import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-461",
  "inputSha256": "f2c5417e1de8948500046823d4019e627349d1e26f66c88ea41732d79dff8e99",
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
    "requestSha256": "7969bf50f8c8242237d4ec8dedd743be2c7a30693ca1e5389893ada598d974d6",
    "capturedAt": "2026-09-20T23:46:26.648Z",
    "elapsedMs": 170.23037500001374,
    "successfulAttemptElapsedMs": 169.25062499998603,
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
          "noul": 0.04
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
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.08
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.1
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
            "active_request": 1,
            "mixed_or_unclear": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.48,
            "sender_supplied": 0.52,
            "mixed_or_unknown": 0
          },
          "confidence": 0.35
        }
      },
      "usage": {
        "input_tokens": 3578,
        "output_tokens": 349
      }
    }
  },
  "passB": null,
  "evidencePassStatus": "not_needed",
  "processingElapsedMs": 172.19550000000163,
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
    "seq": 2265,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-461",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:26.478Z",
    "offsetMs": 0.7009160000015981
  },
  {
    "seq": 2266,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-461",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:26.648Z",
    "offsetMs": 170.22891600002185,
    "elapsedMs": 169.25062499998603,
    "outcome": "success"
  },
  {
    "seq": 2267,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-461",
    "pass": "B",
    "attempt": null,
    "kind": "pass_skipped",
    "at": "2026-09-20T23:46:26.650Z",
    "offsetMs": 172.13366600000882,
    "reasonCode": "schema_error"
  },
  {
    "seq": 2268,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-461",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:26.650Z",
    "offsetMs": 172.23187499999767,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "29b40bc0a9e5ce74fddc2cb0fbb57e520428cc76a743c7c3b939eaf999742653";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2266},"passB":null,"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2268}} as const;
export const projectionSha256 = "adc45e1a726626a80c56e99d9de909aa3724d49dd6346574a588e215b880f5d6";
