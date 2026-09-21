import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-275",
  "inputSha256": "67bf64d2d5bd5d77a2dd7307c758f78a606c9ae0f3798a6ecdf90aae805cdb4c",
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
      "end": 117,
      "text": "Ezequiela Miguelina Oferta exclusiva: ¡Mira televisión en vivo y mucho más con el periodo de prueba gratuito de IPTV!"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 98,
      "text": "TREX IPTV - LA EXPERIENCIA DE STREAMING DEFINITIVA ¡Acceso exclusivo a entretenimiento ilimitado! "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 98,
      "end": 279,
      "text": "Desde 2020, TREX IPTV ha revolucionado el entretenimiento, ofreciendo transmisiones deportivas en vivo de alta calidad, las mejores películas y contenido apto para toda la familia. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 279,
      "end": 358,
      "text": "¡Únete al futuro del streaming con TREXIPTV-HD y no te pierdas ni un momento!  "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 358,
      "end": 529,
      "text": "Comienza a ver ahora ⚽ Deportes en vivo  Películas y series ‍‍‍ Familia y niños ⭐ Canales premium 2025 TREX IPTV | Acceso al entretenimiento premium | CANCELAR SUSCRIPCIÓN"
    }
  ],
  "passA": {
    "requestSha256": "b24c58004a8a964d3790f77c9f9ee242794e8db91827673d3678d7e612317063",
    "capturedAt": "2026-09-20T23:45:24.224Z",
    "elapsedMs": 145.85770800001046,
    "successfulAttemptElapsedMs": 143.83966699999291,
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
          "noul": 0.07
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.48
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
          "noul": 0.14
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.09
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.06
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
            "informational": 0,
            "active_request": 1,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.12,
            "independently_established": 0,
            "mixed_or_unknown": 0.02,
            "no_sensitive_action": 0.86
          },
          "confidence": 0.8
        }
      },
      "usage": {
        "input_tokens": 3605,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "9baeea320304bd2f050819dcc918b6ea27a9ab3f4abdc83b680f7132f3bbac87",
    "capturedAt": "2026-09-20T23:45:24.369Z",
    "elapsedMs": 143.23758300000918,
    "successfulAttemptElapsedMs": 141.2491250000021,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.72,
            "subject:0": 0.01,
            "body:1": 0,
            "body:3": 0.16,
            "body:2": 0.11,
            "body:0": 0
          },
          "confidence": 0.65
        }
      },
      "usage": {
        "input_tokens": 952,
        "output_tokens": 73
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 291.99216599999636,
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
        "status": "none_selected",
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
    "seq": 1347,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-275",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:24.079Z",
    "offsetMs": 1.4303329999966081
  },
  {
    "seq": 1348,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-275",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:24.223Z",
    "offsetMs": 145.86133300000802,
    "elapsedMs": 143.83966699999291,
    "outcome": "success"
  },
  {
    "seq": 1349,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-275",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:24.227Z",
    "offsetMs": 149.69324999999662
  },
  {
    "seq": 1350,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-275",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:24.369Z",
    "offsetMs": 291.6733749999985,
    "elapsedMs": 141.2491250000021,
    "outcome": "success"
  },
  {
    "seq": 1351,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-275",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:24.369Z",
    "offsetMs": 292.08554100000765,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "160a47fa773e13cd137635780f57b8cba71370d672c33edd4e4fd20f3c27f711";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1348},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1350},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1351}} as const;
export const projectionSha256 = "d06331b3a5c7ca83d5c3473ab843589c15125d8dc36b25c8dea0c81f4eec84c8";
