import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-320",
  "inputSha256": "f4b7d76028ab3a4311b4a155be65d0fb68079467de15499c0445c121f72d076f",
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
    "requestSha256": "da0a92a2454a814ae814082daef51f6721b7a2f8ff6a14a93aa9a1cf59789b8e",
    "capturedAt": "2026-09-22T03:54:34.140Z",
    "elapsedMs": 681.771482000011,
    "successfulAttemptElapsedMs": 680.6715139999869,
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
          "noul": 0.08
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.81
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.07
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.03
        },
        "remote_access_request": {
          "type": "noul",
          "noul": 0.03
        },
        "unrealistic_reward": {
          "type": "noul",
          "noul": 0.02
        },
        "independent_verification_path": {
          "type": "noul",
          "noul": 0.23
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
            "active_request": 1,
            "informational": 0,
            "mixed_or_unclear": 0
          },
          "confidence": 1
        },
        "request_route": {
          "type": "choice",
          "choice": "sender_supplied",
          "probabilities": {
            "mixed_or_unknown": 0.01,
            "no_sensitive_action": 0.35,
            "sender_supplied": 0.64,
            "independently_established": 0
          },
          "confidence": 0.51
        }
      },
      "usage": {
        "input_tokens": 5097,
        "output_tokens": 349
      }
    }
  },
  "passB": {
    "requestSha256": "e62a6b806016aa9db93a261bc859deca4e9cc6a9e78dbf7381b955c1e671a2fe",
    "capturedAt": "2026-09-22T03:54:34.663Z",
    "elapsedMs": 521.1116080000065,
    "successfulAttemptElapsedMs": 519.6270169999916,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:8": 0.01,
            "body:1": 0.12,
            "body:24": 0,
            "body:25": 0.03,
            "body:11": 0,
            "body:2": 0,
            "body:23": 0,
            "body:6": 0,
            "body:20": 0,
            "NONE": 0.34,
            "body:4": 0.01,
            "body:5": 0,
            "body:16": 0.04,
            "body:12": 0,
            "body:13": 0,
            "body:15": 0.23,
            "body:14": 0.09,
            "body:7": 0.02,
            "body:22": 0.01,
            "body:0": 0.03,
            "body:18": 0.03,
            "body:17": 0,
            "body:3": 0,
            "body:21": 0,
            "body:19": 0,
            "body:9": 0.01,
            "body:10": 0.01,
            "subject:0": 0.02
          },
          "confidence": 0.31
        },
        "evidence_independent_verification_path": {
          "type": "choice",
          "choice": "NONE",
          "probabilities": {
            "body:8": 0.01,
            "body:1": 0,
            "body:24": 0,
            "body:25": 0,
            "body:11": 0,
            "body:2": 0,
            "body:23": 0,
            "body:6": 0,
            "body:20": 0.01,
            "NONE": 0.43,
            "body:4": 0.01,
            "body:5": 0,
            "body:16": 0.33,
            "body:12": 0,
            "body:13": 0,
            "body:22": 0,
            "body:14": 0.03,
            "body:7": 0,
            "body:15": 0.11,
            "body:0": 0.01,
            "body:18": 0,
            "body:17": 0,
            "body:3": 0,
            "body:21": 0,
            "body:10": 0.05,
            "body:9": 0.01,
            "body:19": 0,
            "subject:0": 0
          },
          "confidence": 0.39
        }
      },
      "usage": {
        "input_tokens": 2387,
        "output_tokens": 578
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 1204.978402000037,
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
        "status": "low_confidence",
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
    "seq": 1562,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-320",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:33.459Z",
    "offsetMs": 0.8206910000299104
  },
  {
    "seq": 1563,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-320",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:34.140Z",
    "offsetMs": 681.7731170000043,
    "elapsedMs": 680.6715139999869,
    "outcome": "success"
  },
  {
    "seq": 1564,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-320",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-22T03:54:34.142Z",
    "offsetMs": 684.5960710000363
  },
  {
    "seq": 1565,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-320",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-22T03:54:34.662Z",
    "offsetMs": 1204.717313000001,
    "elapsedMs": 519.6270169999916,
    "outcome": "success"
  },
  {
    "seq": 1566,
    "captureSessionId": "b72288ba-1714-4c4e-985b-4d44972a6b1c",
    "exampleId": "SPAPHISH-320",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-22T03:54:34.663Z",
    "offsetMs": 1205.0264719999977,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "db1745c7ab083d92cbb09cfd4e1f21bf3fc7c486333bb42f533ed526319cda4a";
export const replayAnchors = {"passA":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1563},"passB":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1565},"complete":{"captureSessionId":"b72288ba-1714-4c4e-985b-4d44972a6b1c","seq":1566}} as const;
export const projectionSha256 = "2a775faadff306cc532b81926c9dab8a88bcf87a68a948c5edb43a7efc286c23";
