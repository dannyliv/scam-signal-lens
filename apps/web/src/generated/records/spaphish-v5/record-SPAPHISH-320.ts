import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-320",
  "inputSha256": "f4b7d76028ab3a4311b4a155be65d0fb68079467de15499c0445c121f72d076f",
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
      "end": 24,
      "text": "Active su cuenta de Zoom"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 106,
      "text": "Para activar su cuenta, haga clic en el botón de abajo para verificar su dirección de correo electrónico.\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 106,
      "end": 175,
      "text": "Le damos la bienvenida a Zoom, usuario.registro@correo-sintetico.net\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 175,
      "end": 177,
      "text": "!\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 177,
      "end": 178,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 178,
      "end": 284,
      "text": "Para activar su cuenta, haga clic en el botón de abajo para verificar su dirección de correo electrónico.\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 284,
      "end": 360,
      "text": "Una vez activado, tendrá acceso completo a las reuniones y al chat de Zoom.\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 360,
      "end": 361,
      "text": "\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 361,
      "end": 376,
      "text": "Activar cuenta\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 376,
      "end": 377,
      "text": "\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 377,
      "end": 400,
      "text": "¿No funciona el botón? "
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 400,
      "end": 441,
      "text": "Pruebe a pegar esta URL en el navegador:\n"
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 441,
      "end": 474,
      "text": "https://us05web.zoom.us/activate?"
    },
    {
      "id": "body:12",
      "source": "body",
      "start": 474,
      "end": 487,
      "text": "code=XXXXXXX\n"
    },
    {
      "id": "body:13",
      "source": "body",
      "start": 487,
      "end": 488,
      "text": "\n"
    },
    {
      "id": "body:14",
      "source": "body",
      "start": 488,
      "end": 512,
      "text": "¿Tiene alguna pregunta? "
    },
    {
      "id": "body:15",
      "source": "body",
      "start": 512,
      "end": 542,
      "text": "Ir al centro de ayuda de Zoom\n"
    },
    {
      "id": "body:16",
      "source": "body",
      "start": 542,
      "end": 558,
      "text": "+1.888.799.9666\n"
    },
    {
      "id": "body:17",
      "source": "body",
      "start": 558,
      "end": 559,
      "text": "\n"
    },
    {
      "id": "body:18",
      "source": "body",
      "start": 559,
      "end": 572,
      "text": "© 2021 Zoom. "
    },
    {
      "id": "body:19",
      "source": "body",
      "start": 572,
      "end": 602,
      "text": "Todos los derechos reservados\n"
    },
    {
      "id": "body:20",
      "source": "body",
      "start": 602,
      "end": 617,
      "text": "Visite zoom.us\n"
    },
    {
      "id": "body:21",
      "source": "body",
      "start": 617,
      "end": 618,
      "text": "\n"
    },
    {
      "id": "body:22",
      "source": "body",
      "start": 618,
      "end": 676,
      "text": "1200 Westlake Ave, Suite 210, Redwood City, CA 94065 (EE. "
    },
    {
      "id": "body:23",
      "source": "body",
      "start": 676,
      "end": 681,
      "text": "UU.)\n"
    },
    {
      "id": "body:24",
      "source": "body",
      "start": 681,
      "end": 682,
      "text": "\n"
    },
    {
      "id": "body:25",
      "source": "body",
      "start": 682,
      "end": 769,
      "text": "Ha recibido este correo electrónico porque se registró para obtener una cuenta de Zoom."
    }
  ],
  "passA": {
    "requestSha256": "51044d1aa16bb5d01700573d2011195b6a0d612b9171668349585803ffd16fb4",
    "capturedAt": "2026-09-20T23:45:39.492Z",
    "elapsedMs": 190.06058399999165,
    "successfulAttemptElapsedMs": 187.94316699999035,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.08
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.04
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
          "noul": 0.07
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.79
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.08
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
          "noul": 0.1
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
            "educational_or_quoted": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.2,
            "sender_supplied": 0.79,
            "independently_established": 0
          },
          "confidence": 0.72
        }
      },
      "usage": {
        "input_tokens": 3647,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "4be2a00599d971233652b842e0eab5e12d7b5bd2aaea9fa71b41fa7b6aadc476",
    "capturedAt": "2026-09-20T23:45:39.670Z",
    "elapsedMs": 176.39333399999305,
    "successfulAttemptElapsedMs": 174.44241600000532,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:15",
          "probabilities": {
            "body:16": 0.02,
            "body:4": 0.01,
            "body:15": 0.3,
            "body:17": 0,
            "body:2": 0,
            "body:0": 0.04,
            "body:14": 0.05,
            "body:23": 0,
            "body:11": 0,
            "NONE": 0.23,
            "body:22": 0.01,
            "body:21": 0,
            "body:7": 0.02,
            "body:19": 0,
            "body:1": 0.18000000000000002,
            "subject:0": 0.02,
            "body:20": 0,
            "body:3": 0,
            "body:8": 0,
            "body:25": 0.08,
            "body:9": 0.01,
            "body:12": 0,
            "body:10": 0,
            "body:5": 0,
            "body:6": 0,
            "body:18": 0.03,
            "body:13": 0,
            "body:24": 0
          },
          "confidence": 0.26
        }
      },
      "usage": {
        "input_tokens": 1346,
        "output_tokens": 292
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 368.78804200000013,
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
    "adviceTemplateIds": []
  }
} as ReplayRecord;
export const events = [
  {
    "seq": 1564,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-320",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:39.303Z",
    "offsetMs": 1.4977499999949941
  },
  {
    "seq": 1565,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-320",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:39.492Z",
    "offsetMs": 190.0645419999928,
    "elapsedMs": 187.94316699999035,
    "outcome": "success"
  },
  {
    "seq": 1566,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-320",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:39.495Z",
    "offsetMs": 193.24541699999827
  },
  {
    "seq": 1567,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-320",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:39.670Z",
    "offsetMs": 368.3553749999992,
    "elapsedMs": 174.44241600000532,
    "outcome": "success"
  },
  {
    "seq": 1568,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-320",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:39.671Z",
    "offsetMs": 368.89233400000376,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "e662055f0ff9143d5075199004440665d524cdbb05716eecb16c0dfa7fa73c9f";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1565},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1567},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1568}} as const;
export const projectionSha256 = "f6f4fe8df7ba4b86ff683a6e743307d35b0dd684546dcf6ffef87a34be49357f";
