import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-076",
  "inputSha256": "e7c755b73b0445820897a7e3aecc5c113e09e00ea8259c8713389f762e2d26fc",
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
      "end": 8,
      "text": "Roberto\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 8,
      "end": 58,
      "text": "Tenemos una sorpresa para los clientes de Rituals\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 58,
      "end": 69,
      "text": "RITUALS...\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 69,
      "end": 101,
      "text": "Estimado cliente, ¡Felicidades! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 101,
      "end": 261,
      "text": "Como parte de nuestra promoción del Día de San Valentín, nos gustaría ofrecerle una oportunidad única para recibir un nuevo Paquete de San Valentín de Rituals. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 261,
      "end": 386,
      "text": "Para reclamarlo, simplemente complete esta breve encuesta sobre su opinión acerca de las ofertas de San Valentín en Rituals. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 386,
      "end": 413,
      "text": "Su opinión es muy valiosa.\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 413,
      "end": 451,
      "text": "Haga clic en CONTINUAR para comenzar.\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 451,
      "end": 475,
      "text": "[Botón negro] Continuar\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 475,
      "end": 539,
      "text": "Darse de baja click here to remove yourself from our emails list"
    }
  ],
  "passA": {
    "requestSha256": "8644ddd315c4b00746c73f89c3507a79237ec155687dcc63d857916da4f709b2",
    "capturedAt": "2026-09-20T23:44:16.014Z",
    "elapsedMs": 174.5712919999969,
    "successfulAttemptElapsedMs": 173.23145899999872,
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
          "noul": 0.05
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.13
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.78
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.17
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.09
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
          "choice": "no_sensitive_action",
          "probabilities": {
            "independently_established": 0,
            "sender_supplied": 0.46,
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.53
          },
          "confidence": 0.37
        }
      },
      "usage": {
        "input_tokens": 3580,
        "output_tokens": 348
      }
    }
  },
  "passB": {
    "requestSha256": "38717c91b43331329534f21a2e96e3a3cd8066d60354d4948a2687ef44c12a2b",
    "capturedAt": "2026-09-20T23:44:16.163Z",
    "elapsedMs": 147.36295899999823,
    "successfulAttemptElapsedMs": 141.70187499999884,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "NONE": 0.35,
            "body:1": 0.12,
            "body:7": 0.01,
            "subject:0": 0.01,
            "body:4": 0.17,
            "body:8": 0.01,
            "body:5": 0.08,
            "body:2": 0.04,
            "body:0": 0,
            "body:9": 0.01,
            "body:3": 0.19,
            "body:6": 0.01
          },
          "confidence": 0.3
        }
      },
      "usage": {
        "input_tokens": 983,
        "output_tokens": 129
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 324.7238750000033,
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
    "seq": 370,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-076",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:15.839Z",
    "offsetMs": 0.8241670000024897
  },
  {
    "seq": 371,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-076",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:16.013Z",
    "offsetMs": 174.5707500000026,
    "elapsedMs": 173.23145899999872,
    "outcome": "success"
  },
  {
    "seq": 372,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-076",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:44:16.018Z",
    "offsetMs": 179.6748750000006
  },
  {
    "seq": 373,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-076",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:44:16.163Z",
    "offsetMs": 324.3781250000029,
    "elapsedMs": 141.70187499999884,
    "outcome": "success"
  },
  {
    "seq": 374,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-076",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:44:16.163Z",
    "offsetMs": 324.8110420000012,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "5d9658dc4f1920a747ab7a6a2e9ed1eb01d709dd892294284bfbbc8b8a16570f";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":371},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":373},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":374}} as const;
export const projectionSha256 = "758c1a5bfaae820c6059343045753bcd8a82ced5ffa4d0c9f647c749bad76de9";
