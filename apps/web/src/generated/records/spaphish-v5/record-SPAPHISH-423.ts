import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-423",
  "inputSha256": "fa1fdae199576de6fb481624d02717ccf30861518aaadcb2fd85facb72a4664f",
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
      "end": 42,
      "text": "Pancracio ¡Llévate Tu Pack Quechua Gratis!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 58,
      "text": "Encuesta = Kit Quechua Gratis DECATHLON RESPONDE ¡Y GANA! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 58,
      "end": 132,
      "text": "Reclama un nuevo paquete gratis ¡Paquete de equipo de senderismo Quechua! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 132,
      "end": 162,
      "text": "¡HAZ CLIC AQUÍ PARA COMENZAR! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 162,
      "end": 254,
      "text": "Los comentarios de nuestros clientes siempre nos han ayudado a mejorar Experiencia Quechua. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 254,
      "end": 358,
      "text": "Haz clic para completar una breve encuesta de 4 minutos y recibir un regalo especial de agradecimiento. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 358,
      "end": 392,
      "text": "Valoramos tus opiniones sinceras. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 392,
      "end": 545,
      "text": "Si ya no deseas recibir estos correos electrónicos, puedes cancelar tu suscripción haciendo clic aquí. click here to remove yourself from our emails list"
    }
  ],
  "passA": {
    "requestSha256": "38b01c88bd04ffd2b143e66275bf147bcd6aef44655d4a559440bf6a2cfcdc6f",
    "capturedAt": "2026-09-20T23:46:14.071Z",
    "elapsedMs": 179.4057089999842,
    "successfulAttemptElapsedMs": 176.95166699998663,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.05
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.18
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.06
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.17
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.72
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.13
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
          "noul": 0.04
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
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.4,
            "sender_supplied": 0.59,
            "independently_established": 0,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.45
        }
      },
      "usage": {
        "input_tokens": 3573,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "0d1f5c25b8e691c753e88087f33b23a9f4d96d58ca79d959cf5fe4c7854d6cc8",
    "capturedAt": "2026-09-20T23:46:14.213Z",
    "elapsedMs": 139.54012499999953,
    "successfulAttemptElapsedMs": 136.81616699998267,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:2": 0,
            "NONE": 0.32,
            "body:1": 0.01,
            "body:3": 0.23,
            "body:4": 0.01,
            "body:5": 0.02,
            "subject:0": 0,
            "body:0": 0.39,
            "body:6": 0.02
          },
          "confidence": 0.31
        }
      },
      "usage": {
        "input_tokens": 934,
        "output_tokens": 104
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 321.96462499999325,
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
        "status": "low_confidence",
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
    "seq": 2076,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-423",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:13.893Z",
    "offsetMs": 1.9297089999890886
  },
  {
    "seq": 2077,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-423",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:14.070Z",
    "offsetMs": 179.40662500000326,
    "elapsedMs": 176.95166699998663,
    "outcome": "success"
  },
  {
    "seq": 2078,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-423",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:14.075Z",
    "offsetMs": 184.30187500000466
  },
  {
    "seq": 2079,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-423",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:14.213Z",
    "offsetMs": 321.6823339999828,
    "elapsedMs": 136.81616699998267,
    "outcome": "success"
  },
  {
    "seq": 2080,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-423",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:14.213Z",
    "offsetMs": 322.0528340000019,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "6751c64bd4366342ea02cf29a77bcfea3e0ad4443736f0f186e5b55541faae33";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2077},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2079},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2080}} as const;
export const projectionSha256 = "8bb942ba4bfab5e91d36ab0dd88b4c8944aa68f40c93951042a61d82dcbeef35";
