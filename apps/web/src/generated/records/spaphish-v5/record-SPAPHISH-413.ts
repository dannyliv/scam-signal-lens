import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-413",
  "inputSha256": "849d7bffbff209b9312c304289e51d4e45adf48a89c89d19a8cbb6c283a9c41c",
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
      "end": 67,
      "text": "Pancracio ¡Has ganado un paquete de San Valentín de Rituals GRATIS!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 61,
      "text": "Tenemos una sorpresa para los clientes de Rituals RITUALS... "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 61,
      "end": 93,
      "text": "Estimado cliente, ¡Felicidades! "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 93,
      "end": 253,
      "text": "Como parte de nuestra promoción del Día de San Valentín, nos gustaría ofrecerle una oportunidad única para recibir un nuevo Paquete de San Valentín de Rituals! "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 253,
      "end": 378,
      "text": "Para reclamarlo, simplemente complete esta breve encuesta sobre su opinión acerca de las ofertas de San Valentín en Rituals. "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 378,
      "end": 405,
      "text": "Su opinión es muy valiosa. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 405,
      "end": 443,
      "text": "Haga clic en CONTINUAR para comenzar. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 443,
      "end": 466,
      "text": "Continuar darse de baja"
    }
  ],
  "passA": {
    "requestSha256": "5f1ddbd9df82f5327a785e552d7c898294c4d1972e1b8de1beca3b4e6a075e1a",
    "capturedAt": "2026-09-20T23:46:10.692Z",
    "elapsedMs": 145.85824999999022,
    "successfulAttemptElapsedMs": 143.48704199999338,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.04
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.11
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
          "noul": 0.14
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.75
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.22
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.1
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.02
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.03
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.04
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.07
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
            "independently_established": 0,
            "sender_supplied": 0.39,
            "no_sensitive_action": 0.6,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.46
        }
      },
      "usage": {
        "input_tokens": 3560,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "7b76a3413f6ce125a6e1a822865b9f694ee65315ad825c65a19e830e83b0d7a6",
    "capturedAt": "2026-09-20T23:46:10.803Z",
    "elapsedMs": 108.356832999998,
    "successfulAttemptElapsedMs": 105.40954200000851,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.25,
            "body:0": 0.13,
            "body:6": 0,
            "body:3": 0.04,
            "subject:0": 0.02,
            "body:1": 0.15,
            "body:5": 0.01,
            "body:4": 0.02,
            "NONE": 0.38
          },
          "confidence": 0.29
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0,
            "body:0": 0,
            "body:6": 0.01,
            "body:3": 0.01,
            "subject:0": 0,
            "body:1": 0,
            "body:5": 0.01,
            "body:4": 0,
            "NONE": 0.97
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 1388,
        "output_tokens": 203
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 257.4878749999916,
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
        "status": "none_selected",
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
    "seq": 2026,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-413",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:10.548Z",
    "offsetMs": 1.7280840000021271
  },
  {
    "seq": 2027,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-413",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:10.692Z",
    "offsetMs": 145.85658399999375,
    "elapsedMs": 143.48704199999338,
    "outcome": "success"
  },
  {
    "seq": 2028,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-413",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:10.697Z",
    "offsetMs": 150.9677500000107
  },
  {
    "seq": 2029,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-413",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:10.803Z",
    "offsetMs": 257.1179589999956,
    "elapsedMs": 105.40954200000851,
    "outcome": "success"
  },
  {
    "seq": 2030,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-413",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:10.804Z",
    "offsetMs": 257.57841700001154,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "8f3a00b4ba376b39f4f5be3cf844fa6333cbf285553ef098ee3df43538c174ca";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2027},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2029},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2030}} as const;
export const projectionSha256 = "a83d1d37fb9cd65406dd977d7132436f57354ecc67014b1111968306648b0321";
