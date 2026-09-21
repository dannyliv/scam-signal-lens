import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-430",
  "inputSha256": "089ffb7cece3200f6c9b9fc48bcc40063a20b7272412660dcfaf798723464dfb",
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
      "end": 59,
      "text": "En los martes de ciencia con el MyOwn, conferencia del Dr. "
    },
    {
      "id": "subject:1",
      "source": "subject",
      "start": 59,
      "end": 74,
      "text": "Omar López Cruz"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 175,
      "text": "Se invita a toda la comunidad del Centro de Investigación Avanzada (CIA) a la conferencia \"Avances en Cosmología: Relevancia del Premio de Ciencia 2020\", que impartirá el Dr. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 175,
      "end": 310,
      "text": "Alejandro Díaz Reyes, investigador de la Dirección de Estudios Espaciales, el próximo jueves 20 de noviembre a las cuatro de la tarde.\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 310,
      "end": 311,
      "text": "\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 311,
      "end": 455,
      "text": "La plática se transmitirá en vivo por el canal oficial de Portal de Videos del CIA, que pueden ver en https://www.videostream.com/c/CIA-Oficial\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 455,
      "end": 456,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 456,
      "end": 471,
      "text": "¡Los esperamos!"
    }
  ],
  "passA": {
    "requestSha256": "d7f70ee224f7a156d3e1cbe631198fa6f3130667498e9a4af6422b66bd470754",
    "capturedAt": "2026-09-20T23:46:16.399Z",
    "elapsedMs": 158.98466700001154,
    "successfulAttemptElapsedMs": 156.50966700000572,
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
          "noul": 0.05
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.78
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
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
            "educational_or_quoted": 0,
            "active_request": 0.63,
            "mixed_or_unclear": 0,
            "informational": 0.37
          },
          "confidence": 0.51
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.98,
            "sender_supplied": 0.02,
            "mixed_or_unknown": 0
          },
          "confidence": 0.97
        }
      },
      "usage": {
        "input_tokens": 3566,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "c5d7f38288b6b546e16fd6c9cf4480e2d928f250edaf2c9c5ad920e67d902f06",
    "capturedAt": "2026-09-20T23:46:16.525Z",
    "elapsedMs": 123.66454099997645,
    "successfulAttemptElapsedMs": 120.69633299999987,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "body:4": 0,
            "body:5": 0,
            "body:2": 0,
            "subject:0": 0.01,
            "body:0": 0.53,
            "body:1": 0.32,
            "body:3": 0.1,
            "NONE": 0.04,
            "subject:1": 0
          },
          "confidence": 0.46
        }
      },
      "usage": {
        "input_tokens": 920,
        "output_tokens": 104
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 285.6775000000198,
  "derived": {
    "concern": "verify_first",
    "triggeredRuleIds": [],
    "contextWarnings": [
      "message_role_low_confidence"
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
    "seq": 2110,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-430",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:16.242Z",
    "offsetMs": 1.852500000008149
  },
  {
    "seq": 2111,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-430",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:16.399Z",
    "offsetMs": 158.9847090000112,
    "elapsedMs": 156.50966700000572,
    "outcome": "success"
  },
  {
    "seq": 2112,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-430",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:16.404Z",
    "offsetMs": 164.04662500001723
  },
  {
    "seq": 2113,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-430",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:16.525Z",
    "offsetMs": 285.4262920000183,
    "elapsedMs": 120.69633299999987,
    "outcome": "success"
  },
  {
    "seq": 2114,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-430",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:16.525Z",
    "offsetMs": 285.7337090000219,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "88cd6d26619869a9795f06ab4c9d69aa0f837a6d053eecfce0bb91e128a5c60e";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2111},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2113},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2114}} as const;
export const projectionSha256 = "5d6365dba55d8ae6f12a02c5db2690042db9bbd0cd67fc4f0b701840fafb9f69";
