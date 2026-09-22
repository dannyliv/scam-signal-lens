import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-275",
  "inputSha256": "67bf64d2d5bd5d77a2dd7307c758f78a606c9ae0f3798a6ecdf90aae805cdb4c",
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
    "requestSha256": "7672669c79383a307fdba396f608ce0a0e49dacfa89b9e98f8811f1fa56d85e8",
    "capturedAt": "2026-09-22T03:53:41.017Z",
    "elapsedMs": 697.9080260000192,
    "successfulAttemptElapsedMs": 696.5980900000432,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.03
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.11
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.35
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.15
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.17
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.07
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
          "noul": 0.04
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
            "informational": 0.01,
            "active_request": 0.99,
            "mixed_or_unclear": 0,
            "educational_or_quoted": 0
          },
          "confidence": 0.99
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "sender_supplied": 0.18,
            "no_sensitive_action": 0.8,
            "mixed_or_unknown": 0.02,
            "independently_established": 0
          },
          "confidence": 0.72
        }
      },
      "usage": {
        "input_tokens": 5055,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "c1f101b433c751122f8b5a897ca58582c5f0b19ed32fea88330aeb58fb31bbcb",
    "capturedAt": "2026-09-22T03:53:41.549Z",
    "elapsedMs": 530.5741589999525,
    "successfulAttemptElapsedMs": 529.0002510000486,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_payment_request": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.15,
            "NONE": 0.67,
            "body:3": 0.16,
            "subject:0": 0.01,
            "body:1": 0,
            "body:0": 0.01
          },
          "confidence": 0.61
        }
      },
      "usage": {
        "input_tokens": 1060,
        "output_tokens": 73
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1230.1483629999566,
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
        "status": "low_confidence",
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
    "seq": 1343,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-275",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:40.320Z",
    "offsetMs": 0.9342909999541007
  },
  {
    "seq": 1344,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-275",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:41.017Z",
    "offsetMs": 697.9080039999681,
    "elapsedMs": 696.5980900000432,
    "outcome": "success"
  },
  {
    "seq": 1345,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-275",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:53:41.019Z",
    "offsetMs": 700.3404259999515
  },
  {
    "seq": 1346,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-275",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:53:41.549Z",
    "offsetMs": 1229.8949409999768,
    "elapsedMs": 529.0002510000486,
    "outcome": "success"
  },
  {
    "seq": 1347,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-275",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:53:41.549Z",
    "offsetMs": 1230.2132529999944,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "8a3cd4e34ff4fd3aed9d59d9d636a58f4991cf67729148ca0d68bfe4bc25c3a1";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1344},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1346},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1347}} as const;
export const projectionSha256 = "a63b116f4a1791846a828f5d052bdfda0a25b6a582443190e00e8c1bbeee7a5d";
