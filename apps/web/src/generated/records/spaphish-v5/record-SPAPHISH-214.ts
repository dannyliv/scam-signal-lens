import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-214",
  "inputSha256": "2d2b6da8c8bfe5204e13e3b789e80a52cd55774fe17cb3d2187713a15ffd0177",
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
      "end": 25,
      "text": "Sobre arreglo de DELL XPS"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 15,
      "text": "Buenas tardes:\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 15,
      "end": 16,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 16,
      "end": 216,
      "text": "Tengo una TechPro Laptop 14 modelo 7000 a la que los botones del mouse integrado no le funcionan, como si hubiesen perdido el resorte que luego de hacer click, subirían los botones al estado inicial. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 216,
      "end": 261,
      "text": "Quería saber costos y proceso de reparación.\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 261,
      "end": 262,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 262,
      "end": 290,
      "text": "Los datos de la laptop son:\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 290,
      "end": 291,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 291,
      "end": 321,
      "text": "Modelo TechPro Laptop 14-7000\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 321,
      "end": 322,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 322,
      "end": 352,
      "text": "Etiqueta de servicio: 543B2R7\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 352,
      "end": 353,
      "text": "\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 353,
      "end": 417,
      "text": "Muchas gracias, y quedo atento a sus comentarios e indicaciones."
    }
  ],
  "passA": {
    "requestSha256": "0ab5011529be69cb443de9e24f307f0af9aa8165d27dfdc556622cdba3849032",
    "capturedAt": "2026-09-20T23:45:02.394Z",
    "elapsedMs": 153.36116699999548,
    "successfulAttemptElapsedMs": 151.59004199999617,
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
          "noul": 0.06
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.02
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.05
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.02
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.01
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
            "informational": 0,
            "mixed_or_unclear": 0,
            "active_request": 1,
            "educational_or_quoted": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0.01,
            "no_sensitive_action": 0.99,
            "sender_supplied": 0,
            "mixed_or_unknown": 0
          },
          "confidence": 0.99
        }
      },
      "usage": {
        "input_tokens": 3555,
        "output_tokens": 348
      }
    }
  },
  "passB": null,
  "evidencePassStatus": "not_needed",
  "processingElapsedMs": 155.17904099999578,
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
    "seq": 1046,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-214",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:02.242Z",
    "offsetMs": 1.1671659999992698
  },
  {
    "seq": 1047,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-214",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:02.394Z",
    "offsetMs": 153.36379099999613,
    "elapsedMs": 151.59004199999617,
    "outcome": "success"
  },
  {
    "seq": 1048,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-214",
    "pass": "B",
    "attempt": null,
    "kind": "pass_skipped",
    "at": "2026-09-20T23:45:02.396Z",
    "offsetMs": 155.11566599999787,
    "reasonCode": "schema_error"
  },
  {
    "seq": 1049,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-214",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:02.396Z",
    "offsetMs": 155.21370799999568,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "3205341847d63a16da1a21e7004ecc77cdd73c2ceee3e210bba128e280ec89ee";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1047},"passB":null,"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1049}} as const;
export const projectionSha256 = "00161f8273876e93e03a4eea799d04ff4551aa09461f81593ccf2c6b900a142b";
