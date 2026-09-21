import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-064",
  "inputSha256": "1cb1fb303cfb98d2b1c36a5065191a3b1a8b228458dee33a04683124142f30fa",
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
      "end": 13,
      "text": "Encuesta SEP:"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 15,
      "text": "Buenos días!!! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 15,
      "end": 256,
      "text": "Nos piden de la Dirección de Educación Pública compartirles el siguiente enlace para responder la siguiente encuesta: \"Por tu bienestar, la región te apoya: retorno seguro\" el link es el siguiente https://formularios.web/aBcDeFgHiJkL2mN3o4p\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 256,
      "end": 257,
      "text": "\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 257,
      "end": 294,
      "text": "De antemano gracias por su atención.\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 294,
      "end": 295,
      "text": "\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 295,
      "end": 298,
      "text": "--\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 298,
      "end": 299,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 299,
      "end": 353,
      "text": "Roberto Luna Pérez Dirección de Estudios Preparatorios"
    }
  ],
  "passA": {
    "requestSha256": "19b74bdda9ac16d50bc5e1acd46c3edd08656b5aa6f06185b81d45ddf7c5057f",
    "capturedAt": "2026-09-20T23:44:12.051Z",
    "elapsedMs": 156.4064580000013,
    "successfulAttemptElapsedMs": 154.2622909999991,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.06
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.26
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
          "noul": 0.96
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.06
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
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.03
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
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "no_sensitive_action": 0.22,
            "sender_supplied": 0.77,
            "independently_established": 0,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.7
        }
      },
      "usage": {
        "input_tokens": 3518,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "d738ee31f7ff33cd6ddc359dc9ee1775a88b79ad40e04774fea350c333495856",
    "capturedAt": "2026-09-20T23:44:12.165Z",
    "elapsedMs": 112.25724999999875,
    "successfulAttemptElapsedMs": 110.88770900000236,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "body:4": 0,
            "body:7": 0,
            "body:0": 0,
            "body:1": 0.38,
            "body:3": 0,
            "body:6": 0,
            "NONE": 0.62,
            "body:5": 0,
            "subject:0": 0
          },
          "confidence": 0.57
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "body:4": 0,
            "body:7": 0.1,
            "body:0": 0,
            "body:1": 0.9,
            "body:5": 0,
            "body:6": 0,
            "NONE": 0,
            "body:3": 0,
            "subject:0": 0
          },
          "confidence": 0.88
        }
      },
      "usage": {
        "input_tokens": 1293,
        "output_tokens": 220
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 270.6378330000007,
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
        "status": "low_confidence",
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
        "status": "selected",
        "segmentId": "body:1"
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
    "seq": 311,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-064",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:11.896Z",
    "offsetMs": 1.482916999997542
  },
  {
    "seq": 312,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-064",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:12.051Z",
    "offsetMs": 156.40749999999753,
    "elapsedMs": 154.2622909999991,
    "outcome": "success"
  },
  {
    "seq": 313,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-064",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:12.053Z",
    "offsetMs": 158.9327919999996
  },
  {
    "seq": 314,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-064",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:12.165Z",
    "offsetMs": 270.3770829999994,
    "elapsedMs": 110.88770900000236,
    "outcome": "success"
  },
  {
    "seq": 315,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-064",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:12.165Z",
    "offsetMs": 270.68320799999856,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "d8153cd01b97b1836952d65dab07de0b762f5f5768db31793377815e6b1e40b6";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":312},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":314},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":315}} as const;
export const projectionSha256 = "b778d031bca0a201e6633dd57c7527a8feb0a73fb1c66a2f9f675db05f6e502e";
