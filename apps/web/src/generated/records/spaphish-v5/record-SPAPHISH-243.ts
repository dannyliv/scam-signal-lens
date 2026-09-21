import type { PublicCaptureEvent, ReplayRecord } from '@scam-signal-lens/core';
export const record = {
  "schemaVersion": "1.0.0",
  "exampleId": "SPAPHISH-243",
  "inputSha256": "c75366e24293263b86d2c6bfbb3b6a156d49fe5e22195c8700cf7558f3f3941b",
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
      "end": 35,
      "text": "CONSTANCIAS IMPARTICIÓN DE CÁTEDRAS"
    },
    {
      "id": "body:0",
      "source": "body",
      "start": 0,
      "end": 192,
      "text": "Doc., te envío las constancias que me solicitaste, dos de ellas ya te las había enviado en el 2022, pero te las vuelvo a enviar, por si checas las fechas de elaboración de dichas constancias.\n"
    },
    {
      "id": "body:1",
      "source": "body",
      "start": 192,
      "end": 193,
      "text": "\n"
    },
    {
      "id": "body:2",
      "source": "body",
      "start": 193,
      "end": 205,
      "text": "Saludos!!!!\n"
    },
    {
      "id": "body:3",
      "source": "body",
      "start": 205,
      "end": 206,
      "text": "\n"
    },
    {
      "id": "body:4",
      "source": "body",
      "start": 206,
      "end": 225,
      "text": "Roberto Luna Pérez\n"
    },
    {
      "id": "body:5",
      "source": "body",
      "start": 225,
      "end": 226,
      "text": "\n"
    },
    {
      "id": "body:6",
      "source": "body",
      "start": 226,
      "end": 271,
      "text": "Director de Estudios Avanzados y Vinculación\n"
    },
    {
      "id": "body:7",
      "source": "body",
      "start": 271,
      "end": 272,
      "text": "\n"
    },
    {
      "id": "body:8",
      "source": "body",
      "start": 272,
      "end": 326,
      "text": "Instituto Tecnológico Federal, Campus Montaña Central\n"
    },
    {
      "id": "body:9",
      "source": "body",
      "start": 326,
      "end": 327,
      "text": "\n"
    },
    {
      "id": "body:10",
      "source": "body",
      "start": 327,
      "end": 368,
      "text": "Teléfono oficina (55) 5555 1234, 56 ext. "
    },
    {
      "id": "body:11",
      "source": "body",
      "start": 368,
      "end": 372,
      "text": "2025"
    }
  ],
  "passA": {
    "requestSha256": "57ed85d622cb66475d01ba4fc97c2edad498eff79b1c6fb9004af9cc6cbf0e36",
    "capturedAt": "2026-09-20T23:45:11.765Z",
    "elapsedMs": 191.06212499999674,
    "successfulAttemptElapsedMs": 190.04816599999322,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "credential_request": {
          "type": "noul",
          "noul": 0.02
        },
        "sensitive_data_request": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.03
        },
        "authority_claim": {
          "type": "noul",
          "noul": 0.89
        },
        "verification_bypass": {
          "type": "noul",
          "noul": 0.03
        },
        "advance_fee_or_refund_trap": {
          "type": "noul",
          "noul": 0.02
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
          "noul": 0.2
        },
        "analyzer_instruction": {
          "type": "noul",
          "noul": 0.02
        },
        "message_role": {
          "type": "choice",
          "choice": "informational",
          "probabilities": {
            "mixed_or_unclear": 0,
            "active_request": 0.27,
            "informational": 0.73,
            "educational_or_quoted": 0
          },
          "confidence": 0.64
        },
        "request_route": {
          "type": "choice",
          "choice": "no_sensitive_action",
          "probabilities": {
            "mixed_or_unknown": 0,
            "no_sensitive_action": 0.97,
            "independently_established": 0.03,
            "sender_supplied": 0
          },
          "confidence": 0.96
        }
      },
      "usage": {
        "input_tokens": 3554,
        "output_tokens": 350
      }
    }
  },
  "passB": {
    "requestSha256": "b22312c93342098156c1467496d00e7d19cab36c5f648a4cb63eab6172aff041",
    "capturedAt": "2026-09-20T23:45:11.936Z",
    "elapsedMs": 169.20508400000108,
    "successfulAttemptElapsedMs": 167.25524999998743,
    "attemptCount": 1,
    "response": {
      "model": "jev-1.13.0",
      "answers": {
        "evidence_authority_claim": {
          "type": "choice",
          "choice": "body:6",
          "probabilities": {
            "body:1": 0,
            "subject:0": 0,
            "body:4": 0.01,
            "body:3": 0,
            "body:0": 0.02,
            "body:9": 0,
            "body:8": 0.07,
            "body:2": 0,
            "body:6": 0.86,
            "body:10": 0,
            "body:5": 0,
            "body:11": 0,
            "NONE": 0.04,
            "body:7": 0
          },
          "confidence": 0.84
        }
      },
      "usage": {
        "input_tokens": 959,
        "output_tokens": 151
      }
    }
  },
  "evidencePassStatus": "recorded",
  "processingElapsedMs": 362.5461249999935,
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
        "status": "selected",
        "segmentId": "body:6"
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
    "seq": 1188,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-243",
    "pass": "A",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:11.575Z",
    "offsetMs": 0.6542920000065351
  },
  {
    "seq": 1189,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-243",
    "pass": "A",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:11.765Z",
    "offsetMs": 191.06108400000085,
    "elapsedMs": 190.04816599999322,
    "outcome": "success"
  },
  {
    "seq": 1190,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-243",
    "pass": "B",
    "attempt": 1,
    "kind": "request_started",
    "at": "2026-09-20T23:45:11.768Z",
    "offsetMs": 194.39208400000643
  },
  {
    "seq": 1191,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-243",
    "pass": "B",
    "attempt": 1,
    "kind": "request_finished",
    "at": "2026-09-20T23:45:11.936Z",
    "offsetMs": 362.3361670000013,
    "elapsedMs": 167.25524999998743,
    "outcome": "success"
  },
  {
    "seq": 1192,
    "captureSessionId": "e0c964df-aae7-4c96-9582-c20b515889a8",
    "exampleId": "SPAPHISH-243",
    "pass": null,
    "attempt": null,
    "kind": "example_completed",
    "at": "2026-09-20T23:45:11.937Z",
    "offsetMs": 362.60079199999745,
    "outcome": "success"
  }
] as readonly PublicCaptureEvent[];
export const recordSha256 = "03171bee6188e9944c6ba964eb1b9071a924cac86f0fb0a8d4d6160ae77de4a7";
export const replayAnchors = {"passA":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1189},"passB":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1191},"complete":{"captureSessionId":"e0c964df-aae7-4c96-9582-c20b515889a8","seq":1192}} as const;
export const projectionSha256 = "9a7e336aae8cdf40f5d50f41a339717bdaf8aa00c92e1969b0a203b14c27a45e";
