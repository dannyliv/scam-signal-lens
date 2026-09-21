import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-455",
  "inputSha256": "7c364cb30d80b9f1c0861931fa6ba829088d556e4d7b51af58517c61eabecd75",
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
      "end": 52,
      "text": "Disney +: Notificación de renovación de suscripción."
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 45,
      "text": "Tu suscripción mensual a Disney ha expirado. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 45,
      "end": 168,
      "text": "Para seguir disfrutando de la música sin interrupciones, Haga clic en el botón a continuación para renovar su suscripción. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 168,
      "end": 331,
      "text": "RENUEVA TU SUSCRIPCIÓN AHORA Descargar Disney para: iPhone, iPad, Android y otros ¡Gracias por ser parte de la comunidad Disney! - Equipo de Disney © 2025 Disney. "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 331,
      "end": 351,
      "text": "All Rights Reserved."
    }
  ],
  "passA": {
    "requestSha256": "93b0c201d6359e254e5d5ea9d7802745cdbc17c646c683ae83596025b749cd5c",
    "capturedAt": "2026-09-20T23:46:24.712Z",
    "elapsedMs": 143.83783300002688,
    "successfulAttemptElapsedMs": 141.2807909999974,
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
          "noul": 0.42
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.86
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.04
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.76
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.9
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.2
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.04
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
            "no_sensitive_action": 0.09,
            "sender_supplied": 0.88,
            "independently_established": 0,
            "mixed_or_unknown": 0.03
          },
          "confidence": 0.84
        }
      },
      "usage": {
        "input_tokens": 3533,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "022485f94475cb65da810222f9efcedee6ceb31196075aee74bde820491822a6",
    "capturedAt": "2026-09-20T23:46:24.832Z",
    "elapsedMs": 118.67350000000442,
    "successfulAttemptElapsedMs": 116.26387500000419,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_sensitive_data_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.01,
            "body:1": 0.29,
            "NONE": 0.7,
            "subject:0": 0,
            "body:3": 0,
            "body:0": 0
          },
          "confidence": 0.63
        },
        "evidence_payment_request": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0.23,
            "body:1": 0.73,
            "NONE": 0.04,
            "subject:0": 0,
            "body:3": 0,
            "body:0": 0
          },
          "confidence": 0.66
        },
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "body:1",
          "probabilities": {
            "body:2": 0.44,
            "body:1": 0.44,
            "NONE": 0.01,
            "subject:0": 0,
            "body:3": 0,
            "body:0": 0.11
          },
          "confidence": 0.33
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:2",
          "probabilities": {
            "body:2": 0.84,
            "body:1": 0.01,
            "NONE": 0.05,
            "subject:0": 0.05,
            "body:3": 0,
            "body:0": 0.05
          },
          "confidence": 0.81
        }
      },
      "usage": {
        "input_tokens": 2054,
        "output_tokens": 294
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 264.844207999995,
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
        "status": "selected",
        "segmentId": "body:1"
      },
      "unusual_payment_routing": {
        "status": "not_requested",
        "segmentId": null
      },
      "urgency_pressure": {
        "status": "low_confidence",
        "segmentId": null
      },
      "authority_claim": {
        "status": "selected",
        "segmentId": "body:2"
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
    "seq": 2235,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-455",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:24.570Z",
    "offsetMs": 1.9199999999837019
  },
  {
    "seq": 2236,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-455",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:24.712Z",
    "offsetMs": 143.83900000000722,
    "elapsedMs": 141.2807909999974,
    "outcome": "success"
  },
  {
    "seq": 2237,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-455",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:24.715Z",
    "offsetMs": 147.6931249999907
  },
  {
    "seq": 2238,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-455",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:24.832Z",
    "offsetMs": 264.57629199998337,
    "elapsedMs": 116.26387500000419,
    "outcome": "success"
  },
  {
    "seq": 2239,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-455",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:24.833Z",
    "offsetMs": 264.8974579999922,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "ba4cd3602175817f6ad0e9e42a4fdf0a33ae0e38a8557e49394486627baddf3e";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2236},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2238},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":2239}} as const;
export const projectionSha256 = "d7d403223c0031ead47eece478fbb692c3f8148643eed1e9b0122b1132203a28";
