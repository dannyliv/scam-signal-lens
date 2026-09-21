import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-406",
  "inputSha256": "9a482b49e3729af5c0da48c3c247b758c833bcbdc38aa28e2d748b1efd65feee",
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
      "end": 32,
      "text": "Instala la aplicación Google One"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 73,
      "text": "Hemos enviado este correo electrónico a carolina.montoya.rguez@gmail.com\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 73,
      "end": 189,
      "text": " porque nos has indicado que te gustaría recibir información sobre las últimas novedades y funciones de Google One. "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 189,
      "end": 264,
      "text": "Si no quieres recibir estos mensajes, puedes cancelar la suscripción aquí.\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 264,
      "end": 265,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 265,
      "end": 333,
      "text": "© 2024 Google LLC 1600 Amphitheatre Parkway, Mountain View, CA 94043"
    }
  ],
  "passA": {
    "requestSha256": "016b7022949f3a6e52a0dc9a3ef44f22fdd84213df8302a4e690ca44c8ee78fd",
    "capturedAt": "2026-09-20T23:46:08.291Z",
    "elapsedMs": 155.24091699998826,
    "successfulAttemptElapsedMs": 153.26062499999534,
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
          "noul": 0.03
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.02
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.04
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.68
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.12
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.04
        },
        "message_role": {
          "type": "choice",
          "choice": "active_request",
          "probabilities": {
            "informational": 0.46,
            "active_request": 0.53,
            "mixed_or_unclear": 0.01,
            "educational_or_quoted": 0
          },
          "confidence": 0.37
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "no_sensitive_action": 0.92,
            "independently_established": 0.01,
            "sender_supplied": 0.06,
            "mixed_or_unknown": 0.01
          },
          "confidence": 0.91
        }
      },
      "usage": {
        "input_tokens": 3512,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "a221c3da2f0ee37de1b8a9985a4ccfe842712b0fd5ef3bc2af630ad52b4e689b",
    "capturedAt": "2026-09-20T23:46:08.455Z",
    "elapsedMs": 160.96320899997954,
    "successfulAttemptElapsedMs": 158.1862909999909,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:2": 0.01,
            "subject:0": 0.02,
            "body:4": 0.27,
            "body:1": 0.08,
            "body:0": 0.04,
            "NONE": 0.58,
            "body:3": 0
          },
          "confidence": 0.51
        }
      },
      "usage": {
        "input_tokens": 780,
        "output_tokens": 84
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 319.2980000000098,
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
    "seq": 1991,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-406",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:08.137Z",
    "offsetMs": 1.5114170000015292
  },
  {
    "seq": 1992,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-406",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:08.291Z",
    "offsetMs": 155.23991699999897,
    "elapsedMs": 153.26062499999534,
    "outcome": "success"
  },
  {
    "seq": 1993,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-406",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:46:08.295Z",
    "offsetMs": 160.0818750000035
  },
  {
    "seq": 1994,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-406",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:46:08.454Z",
    "offsetMs": 319.0230000000156,
    "elapsedMs": 158.1862909999909,
    "outcome": "success"
  },
  {
    "seq": 1995,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-406",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:46:08.455Z",
    "offsetMs": 319.37825000000885,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "03f4efefab442bfd2c068b35804bd45e94fb00c4e40165bf853016b05df8d3a4";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1992},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1994},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1995}} as const;
export const projectionSha256 = "15c4b666f316cdd86ce0fbe105c4484430e05cc41d9ca31fa5e01dc04e0c00c0";
