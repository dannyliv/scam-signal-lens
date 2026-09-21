import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-348",
  "inputSha256": "b4a0d779181c8ceeb25e0990a2e8e5e16b49386ced531b9f7b8457f99e3807e7",
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
      "end": 38,
      "text": "Tiene un archivo pendiente en OneDrive"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 35,
      "text": "Comience por descargar su archivo. "
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 35,
      "end": 75,
      "text": "¿Tiene problemas para ver este mensaje? "
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 75,
      "end": 92,
      "text": "Haga clic aquí . "
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 92,
      "end": 134,
      "text": "¡Tiene un archivo importante en OneDrive! "
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 134,
      "end": 198,
      "text": "Hay muchas razones por las que los usuarios prefieren OneDrive. "
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 198,
      "end": 243,
      "text": "Descargue su archivo y dé el siguiente paso. "
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 243,
      "end": 395,
      "text": "Descargar archivo Sus archivos siempre estarán disponibles Sus archivos y fotos siempre estarán sincronizados y actualizados en todos sus dispositivos. "
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 395,
      "end": 575,
      "text": "500 GB total (0.5 TB) Mayor productividad Intercambio sin límites Aplicaciones de Microsoft Microsoft respeta su privacidad Para saber más, lea nuestra Declaración de privacidad . "
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 575,
      "end": 675,
      "text": "Para configurar sus preferencias de contacto para las comunicaciones de Microsoft, haga clic aquí . "
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 675,
      "end": 814,
      "text": "Esta configuración no afectará las comunicaciones obligatorias de servicio que se consideran parte de determinados servicios de Microsoft. "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 814,
      "end": 830,
      "text": "Microsoft Office"
    }
  ],
  "passA": {
    "requestSha256": "1d2d103b054e6ce5f3f5c395382aa2e9032d3bf99b609280f038e6c9e893df63",
    "capturedAt": "2026-09-20T23:45:49.613Z",
    "elapsedMs": 173.703416999997,
    "successfulAttemptElapsedMs": 171.57804200000828,
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
          "noul": 0.06
        },
        "payment_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unusual_payment_routing": {
          "type": "noul",
          "noul": 0.03
        },
        "urgency_pressure": {
          "type": "noul",
          "noul": 0.21
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.76
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.22
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
            "active_request": 1,
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0,
            "informational": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "independently_established": 0,
            "no_sensitive_action": 0.38,
            "mixed_or_unknown": 0.01,
            "sender_supplied": 0.61
          },
          "confidence": 0.47
        }
      },
      "usage": {
        "input_tokens": 3607,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "53ad7bdc0f357723aa5ab33a80f405fde334726dbdcd8fd104c9e5cb5dc3b2ba",
    "capturedAt": "2026-09-20T23:45:49.737Z",
    "elapsedMs": 121.6935000000085,
    "successfulAttemptElapsedMs": 119.70683399999689,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_urgency_pressure": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:9": 0,
            "body:6": 0,
            "body:7": 0,
            "body:3": 0.13,
            "body:5": 0.1,
            "subject:0": 0.25,
            "body:10": 0,
            "NONE": 0.48,
            "body:2": 0.01,
            "body:4": 0,
            "body:8": 0,
            "body:1": 0,
            "body:0": 0.03
          },
          "confidence": 0.43
        },
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:9": 0.12,
            "body:6": 0.01,
            "body:7": 0.06,
            "body:3": 0.05,
            "body:5": 0.01,
            "body:10": 0.1,
            "subject:0": 0.19,
            "body:8": 0.03,
            "body:2": 0.01,
            "body:4": 0.01,
            "NONE": 0.39,
            "body:1": 0.01,
            "body:0": 0.01
          },
          "confidence": 0.35
        },
        "evidence_verification_bypass": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:1": 0.01,
            "body:6": 0,
            "body:7": 0,
            "body:3": 0,
            "body:5": 0.02,
            "body:10": 0,
            "subject:0": 0,
            "NONE": 0.92,
            "body:2": 0.02,
            "body:4": 0,
            "body:8": 0,
            "body:9": 0.01,
            "body:0": 0.02
          },
          "confidence": 0.91
        }
      },
      "usage": {
        "input_tokens": 2226,
        "output_tokens": 413
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 297.79974999999104,
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
        "status": "low_confidence",
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
    "seq": 1704,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-348",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:49.440Z",
    "offsetMs": 1.5065000000031432
  },
  {
    "seq": 1705,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-348",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:49.613Z",
    "offsetMs": 173.70500000000175,
    "elapsedMs": 171.57804200000828,
    "outcome": "success"
  },
  {
    "seq": 1706,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-348",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:49.616Z",
    "offsetMs": 177.03104200000234
  },
  {
    "seq": 1707,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-348",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:49.736Z",
    "offsetMs": 297.37537500000326,
    "elapsedMs": 119.70683399999689,
    "outcome": "success"
  },
  {
    "seq": 1708,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-348",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:49.737Z",
    "offsetMs": 297.89974999999686,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "c3e0a186afddbd8790631301f0e5d3e250312324be47084b674c0152013c3e5d";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1705},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1707},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1708}} as const;
export const projectionSha256 = "b5f40001f3a37007aa4e2cf419e8a94708a0d7af899403ee95c845695837a9ec";
