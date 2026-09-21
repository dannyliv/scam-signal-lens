import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-483",
  "inputSha256": "3f70d7c3994761a933c9d0800177cd6b580fcb6e734b92241216728d65b6bb90",
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
      "end": 37,
      "text": "DSP2  : Cliente _ Sign _N°10299737293"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 201,
      "text": "Buenos dias, Hemos detectado que aún no has activado el Pase de Seguridad . el pase de seguridad , es un servicio gratuito que le permite confirmar de forma rápida y segura sus transacciones en línea. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 201,
      "end": 256,
      "text": "Activa tu Pase de Seguridad » Merci de votre confiance."
    }
  ],
  "passA": {
    "requestSha256": "208f4b1bff8cff410d627e5465890d6d32a686fa2ff55d6ca776daddf3ff112b",
    "capturedAt": "2026-09-20T23:46:34.006Z",
    "elapsedMs": 257.33091600000625,
    "successfulAttemptElapsedMs": 255.9003340000054,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.15
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.23
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.18
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.7
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.14
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
          "noul": 0.03
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
            "sender_supplied": 0.72,
            "independently_established": 0,
            "no_sensitive_action": 0.25,
            "mixed_or_unknown": 0.03
          },
          "confidence": 0.61
        }
      },
      "usage": {
        "input_tokens": 3502,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "3abb7a9659470e6d45d642f508ecf65ffbcc7dfc495e565e6db63d7ad76805e2",
    "capturedAt": "2026-09-20T23:46:34.170Z",
    "elapsedMs": 162.74608400001307,
    "successfulAttemptElapsedMs": 159.63362500001676,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "subject:0": 0,
            "body:0": 0.03,
            "NONE": 0.84,
            "body:1": 0.13
          },
          "confidence": 0.78
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:0",
          "probabilities": {
            "subject:0": 0.07,
            "body:0": 0.57,
            "body:1": 0.09,
            "NONE": 0.27
          },
          "confidence": 0.43
        }
      },
      "usage": {
        "input_tokens": 1087,
        "output_tokens": 112
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 422.1520840000012,
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
        "status": "none_selected",
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
    "seq": 2373,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-483",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:33.749Z",
    "offsetMs": 1.1479169999947771
  },
  {
    "seq": 2374,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-483",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:34.005Z",
    "offsetMs": 257.33170900002006,
    "elapsedMs": 255.9003340000054,
    "outcome": "success"
  },
  {
    "seq": 2375,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-483",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:34.010Z",
    "offsetMs": 261.3890839999949
  },
  {
    "seq": 2376,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-483",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:34.170Z",
    "offsetMs": 422.0182499999937,
    "elapsedMs": 159.63362500001676,
    "outcome": "success"
  },
  {
    "seq": 2377,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-483",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:34.170Z",
    "offsetMs": 422.18975000001956,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "f782b23352e7df8aa5e69ee5cfc79ce0d2f3c772f52aa592bc05abb94345add1";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2374},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2376},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2377}} as const;
export const projectionSha256 = "85459ef868da99c10fd1ed98969501068d1d7c21227b53233ca9f04015b79a35";
