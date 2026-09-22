import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-064",
  "inputSha256": "1cb1fb303cfb98d2b1c36a5065191a3b1a8b228458dee33a04683124142f30fa",
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
    "requestSha256": "34c81bd0d51bd8f8d94eaccaae184c3cf39b302943a527250ba8fb7d03b82de7",
    "capturedAt": "2026-09-22T03:49:28.892Z",
    "elapsedMs": 621.8296520000004,
    "successfulAttemptElapsedMs": 620.8833650000015,
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
          "noul": 0.33
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.07
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.97
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.05
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
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "educational_or_quoted": 0,
            "informational": 0,
            "mixed_or_unclear": 0,
            "active_request": 1
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "sender_supplied": 0.7,
            "mixed_or_unknown": 0,
            "independently_established": 0,
            "no_sensitive_action": 0.3
          },
          "confidence": 0.6
        }
      },
      "usage": {
        "input_tokens": 4968,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "d18b5f4093147ef233fc853c86ba2bd37d0f3a18baadf158395c58473bc7a9ba",
    "capturedAt": "2026-09-22T03:49:29.431Z",
    "elapsedMs": 536.0287450000033,
    "successfulAttemptElapsedMs": 534.9509309999994,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "body:7": 0,
            "body:6": 0,
            "subject:0": 0,
            "body:4": 0,
            "NONE": 0.66,
            "body:3": 0,
            "body:1": 0.34,
            "body:5": 0,
            "body:0": 0
          },
          "confidence": 0.62
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0,
            "body:7": 0.21,
            "body:6": 0,
            "subject:0": 0,
            "body:4": 0,
            "NONE": 0,
            "body:3": 0,
            "body:1": 0.79,
            "body:5": 0,
            "body:0": 0
          },
          "confidence": 0.75
        }
      },
      "usage": {
        "input_tokens": 1509,
        "output_tokens": 220
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1161.5995570000086,
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
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-064",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:28.270Z",
    "offsetMs": 0.5706730000092648
  },
  {
    "seq": 312,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-064",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:28.891Z",
    "offsetMs": 621.8291949999984,
    "elapsedMs": 620.8833650000015,
    "outcome": "success"
  },
  {
    "seq": 313,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-064",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:49:28.896Z",
    "offsetMs": 625.9669530000101
  },
  {
    "seq": 314,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-064",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:49:29.431Z",
    "offsetMs": 1161.37356800001,
    "elapsedMs": 534.9509309999994,
    "outcome": "success"
  },
  {
    "seq": 315,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-064",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:49:29.431Z",
    "offsetMs": 1161.6408190000075,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "dab97a70f565630b15ae3c7da966912b87eba1aa868afabd587f5b43ed489c65";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":312},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":314},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":315}} as const;
export const projectionSha256 = "27e11584b1ba43f822ab3bfea16692edbfca139659aee014bd5109d8128f59a3";
